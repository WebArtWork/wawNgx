import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class AsdService {
	public asds: any = [];
	public _asds: any = {};
	constructor(private mongo: MongoService, private alert: AlertService) { 
		this.asds = mongo.get('asd', {}, (arr, obj)=>{
			this._asds = obj;
		});
	}
	create(asd:any={}, text = 'asd has been created.') {
		if(asd._id) return this.save(asd);
		this.mongo.create('asd', asd, created=>{
			this.alert.show({ text });
		}); 
	}
	doc(asdId){
		if(!this._asds[asdId]){
			this._asds[asdId] = this.mongo.fetch('asd', {
				query: {
					_id: asdId
				}
			});
		}
		return this._asds[asdId];
	}
	update(asd, text = 'asd has been updated.') {
		this.mongo.afterWhile(asd, _=> {
			this.save(asd, text);
		});
	}
	save(asd, text = 'asd has been updated.'){
		this.mongo.update('asd', asd, _=>{
			if(text) this.alert.show({ text, unique: asd });
		});
	}
	delete(asd, text = 'asd has been deleted.') {
		this.mongo.delete('asd', asd, _=>{
			if(text) this.alert.show({ text });
		});
	}
}
