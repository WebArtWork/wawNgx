import { Component } from '@angular/core';
import { UserService } from '@services';
import { Animation } from "src/app/core/animation";

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	animations: [Animation]
})
export class UserComponent {
	public show = false;
	public navToggle: any = false;
	constructor(public us: UserService){}
}
