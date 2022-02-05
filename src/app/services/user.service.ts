import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MongoService, FileService, HttpService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	/*
	*	Declarations
	*/
		public roles = ['admin'];
		public users: any = [];
		public _users: any = {};
		public user: any = { data: {}, is: {} };
		constructor(private mongo: MongoService, private file: FileService,
			private router: Router, private http: HttpService) {
			this.file.add({
				id: 'userAvatarUrl',
				resize: 256,
				part: 'user',
				cb: (file:any)=>{
					if(typeof file != 'string') return;
					this.user.avatarUrl = file;
				}
			});
			this.mongo.config('user', {
				replace: {
					data: (data:any, cb:any) => {
						if(typeof data != 'object') data = {};
						cb(data);
					},
					is: mongo.beObj
				}
			});
			this.user = mongo.fetch('user', {
				name: 'me'
			}, (user:any) => {
				if(localStorage.getItem('waw_user') && !user) this.logout();
			});
			this.users = mongo.get('user', (arr:any, obj:any)=>{
				this._users = obj;
			});
		}
	/*
	*	User Management
	*/
		create(user:any){
			this.mongo.create('user', user);
		}
		doc(userId:string){
			if(!this._users[userId]){
				this._users[userId] = this.mongo.fetch('user', {
					query: { _id: userId }
				});
			}
			return this._users[userId];
		}
		update(){
			this.mongo.afterWhile(this, ()=>{
				this.mongo.update('user', this.user);
			});
		}
		save(user:any){
			this.mongo.afterWhile(this, ()=>{
				this.mongo.update('user', user, {
					name: 'admin'
				});
			});
		}
		delete(user:any){
			this.mongo.delete('user', user, {
				name: 'admin'
			});
		}
		change_password(oldPass: string, newPass: string){
			this.http.post('/api/user/changePassword', {
				newPass: newPass,
				oldPass: oldPass
			}, resp => {
				if(resp) alert('successfully changed password');
				else alert('failed to change password');
			});	
		}
		logout(){
			this.user = { data: {}, is: {} };
			localStorage.removeItem('waw_user');
			this.http.get('/api/user/logout');
			this.router.navigate(['/']);
		}
	/*
	*	End of 
	*/
}

@Injectable()
export class Admins implements CanActivate {
	constructor(private router: Router) {}
	canActivate(){
		let user:any = localStorage.getItem('waw_user');
		if ( user ) {
			user = JSON.parse(user);
			if(user.is && user.is.admin) return true;
			this.router.navigate(['/profile']);
			return false;
		} else {
			this.router.navigate(['/']);
			return false;
		}
	}
}

@Injectable()
export class Authenticated implements CanActivate {
	constructor(private router: Router) {}
	canActivate(){
		if ( localStorage.getItem('waw_user') ) {
			return true;
		} else {
			return this.router.navigate(['/']);
		}
	}

}

@Injectable()
export class Guest implements CanActivate {
	constructor(private router: Router) {}
	canActivate(){
		if (localStorage.getItem('waw_user')) {
			return this.router.navigate(['/profile'])
		} else {
			return true;
		}
	}
}
