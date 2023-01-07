"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[163],{2163:(b,l,i)=>{i.r(l),i.d(l,{ProfileModule:()=>h});var p=i(294),e=i(8256),d=i(3071),c=i(433);let f=(()=>{class t{constructor(o){this.us=o,this.oldPass="",this.newPass=""}ngOnInit(){document.body.classList.add("_modal-small")}ngOnDestroy(){document.body.classList.remove("_modal-small")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d.KD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["security"]],decls:15,vars:2,consts:[[1,"row"],[1,"col-2"],[1,"w-forms"],[1,"w-forms__title"],["type","text","name","old","placeholder","Type Password",1,"w-forms__input",3,"ngModel","ngModelChange"],["type","text","name","new","placeholder","Type Password",1,"w-forms__input",3,"ngModel","ngModelChange"],[1,"w-btn","_primary",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"h3"),e._uU(1,"Change password"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"label",2)(5,"span",3),e._uU(6,"Current"),e.qZA(),e.TgZ(7,"input",4),e.NdJ("ngModelChange",function(a){return n.oldPass=a}),e.qZA()()(),e.TgZ(8,"div",1)(9,"label",2)(10,"span",3),e._uU(11,"New"),e.qZA(),e.TgZ(12,"input",5),e.NdJ("ngModelChange",function(a){return n.newPass=a}),e.qZA()()()(),e.TgZ(13,"button",6),e.NdJ("click",function(){return n.us.change_password(n.oldPass,n.newPass),n.close()}),e._uU(14,"Change"),e.qZA()),2&o&&(e.xp6(7),e.Q6J("ngModel",n.oldPass),e.xp6(5),e.Q6J("ngModel",n.newPass))},dependencies:[c.Fj,c.JJ,c.On],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}h3[_ngcontent-%COMP%]{letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);margin-bottom:15px}.w-btn[_ngcontent-%COMP%]{margin:20px 0 0}.w-forms[_ngcontent-%COMP%]{display:block;margin-bottom:10px}']}),t})();var g=i(4367);let u=(()=>{class t{constructor(o,n){this.us=o,this.modal=n}change_password(){this.modal.show({component:f})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d.KD),e.Y36(g.Z7))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],decls:32,vars:4,consts:[[1,"profile","container","w-card","_pd"],[1,"profile__header","w-card__header"],[1,"avatar","_profile"],["width","50","height","50","alt","",1,"avatar__img",3,"src"],["for","userAvatarUrl",1,"avatar__upload"],[1,"material-icons","avatar__icon"],[1,"profile__body"],[1,"w-forms"],[1,"w-forms__title"],["type","text","name","name","placeholder","Your name",1,"w-forms__input",3,"ngModel","ngModelChange"],["type","tel","name","number","placeholder","Phone number",1,"w-forms__input",3,"ngModel","ngModelChange"],["placeholder","Bio",1,"w-forms__textarea",3,"ngModel","ngModelChange"],[1,"profile__footer"],[1,"profile__logout"],[1,"w-btn","_danger",3,"click"],[1,"material-icons"],[1,"profile__password"],[1,"w-btn","_link",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div"),e._uU(3,"Profile Settings"),e.qZA(),e.TgZ(4,"div")(5,"div",2),e._UZ(6,"img",3),e.TgZ(7,"label",4)(8,"i",5),e._uU(9,"edit"),e.qZA()()()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"span",8),e._uU(13,"Name"),e.qZA(),e.TgZ(14,"input",9),e.NdJ("ngModelChange",function(a){return n.us.user.name=a})("ngModelChange",function(){return n.us.update()}),e.qZA()(),e.TgZ(15,"div",7)(16,"span",8),e._uU(17,"Phone number"),e.qZA(),e.TgZ(18,"input",10),e.NdJ("ngModelChange",function(a){return n.us.user.data.phone=a})("ngModelChange",function(){return n.us.update()}),e.qZA()(),e.TgZ(19,"div",7)(20,"span",8),e._uU(21,"Bio"),e.qZA(),e.TgZ(22,"textarea",11),e.NdJ("ngModelChange",function(a){return n.us.user.data.bio=a})("ngModelChange",function(){return n.us.update()}),e.qZA()(),e.TgZ(23,"div",12)(24,"div",13)(25,"button",14),e.NdJ("click",function(){return n.us.logout()}),e.TgZ(26,"span",15),e._uU(27,"logout"),e.qZA(),e._uU(28,"Logout"),e.qZA()(),e.TgZ(29,"div",16)(30,"button",17),e.NdJ("click",function(){return n.change_password()}),e._uU(31,"Change Password"),e.qZA()()()()()),2&o&&(e.xp6(6),e.Q6J("src",n.us.user.thumb||"assets/default.png",e.LSH),e.xp6(8),e.Q6J("ngModel",n.us.user.name),e.xp6(4),e.Q6J("ngModel",n.us.user.data.phone),e.xp6(4),e.Q6J("ngModel",n.us.user.data.bio))},dependencies:[c.Fj,c.JJ,c.On],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{padding:20px}.profile__header[_ngcontent-%COMP%]{letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);display:flex;justify-content:space-between;align-items:center;border-radius:var(--b-radius)}.profile__footer[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}@media (max-width: 767.9px){.profile__footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.profile__footer[_ngcontent-%COMP%]   .profile__logout[_ngcontent-%COMP%]{order:2;margin-top:20px}}.profile__logout[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;display:flex;justify-content:space-between;align-items:center}.profile__logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:10px}.avatar[_ngcontent-%COMP%]{border-radius:var(--b-radius-img);border:1px solid var(--c-border);position:relative;margin:0 auto;padding:3px}.avatar._profile[_ngcontent-%COMP%]{width:60px;height:60px}.avatar__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:var(--b-radius-img)}.avatar__upload[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:0px;bottom:0px;width:24px;height:24px;border-radius:var(--b-radius-img);background:var(--c-primary);display:flex;justify-content:center;align-items:center;transition:var(--transition)}.avatar__icon[_ngcontent-%COMP%]{color:var(--c-white);font-size:var(--fs)}']}),t})();var m=i(8602);const _=[{path:"",component:u}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(_),p.I]}),t})()}}]);