"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[476],{1476:(x,r,n)=>{n.r(r),n.d(r,{StoreModule:()=>h});var l=n(529),i=n(6895),p=n(5450),e=n(8256);let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:20,vars:0,consts:[[2,"margin-bottom","25px","font-weight","600","text-align","center"],[2,"text-align","center"]],template:function(o,u){1&o&&(e.TgZ(0,"h3",0),e._uU(1," Bienvenue\n"),e.qZA(),e.TgZ(2,"p",1),e._uU(3," Bienvenue sur la page d'accueil de notre magasin de nourriture en ligne ! Nous sommes ravis de vous pr\xe9senter notre s\xe9lection exceptionnelle de produits alimentaires de qualit\xe9 sup\xe9rieure, soigneusement s\xe9lectionn\xe9s pour r\xe9pondre \xe0 tous vos besoins culinaires."),e._UZ(4,"br")(5,"br")(6,"br"),e._uU(7," Nous proposons une vaste gamme de produits alimentaires frais et de qualit\xe9, provenant des meilleures sources et des producteurs locaux de confiance. Que vous recherchiez des fruits et l\xe9gumes frais, de la viande de qualit\xe9, des produits laitiers, des plats pr\xe9par\xe9s ou des collations savoureuses, nous avons tout ce dont vous avez besoin pour pr\xe9parer des repas d\xe9licieux et \xe9quilibr\xe9s."),e._UZ(8,"br")(9,"br")(10,"br"),e._uU(11," Notre \xe9quipe est compos\xe9e d'experts passionn\xe9s de la cuisine, qui se tiennent toujours \xe0 jour avec les derni\xe8res tendances culinaires. Nous sommes heureux de partager notre expertise et nos conseils pour vous aider \xe0 choisir les meilleurs produits et vous guider dans la pr\xe9paration de vos repas. "),e._UZ(12,"br")(13,"br")(14,"br"),e._uU(15," Nous sommes convaincus que la nourriture doit \xeatre saine, savoureuse et accessible \xe0 tous. C'est pourquoi nous nous effor\xe7ons de proposer des produits de qualit\xe9 \xe0 des prix comp\xe9titifs. Nous sommes \xe9galement fiers d'offrir un service client\xe8le exceptionnel et une livraison rapide et fiable, pour vous offrir une exp\xe9rience de magasinage en ligne sans stress. "),e._UZ(16,"br")(17,"br")(18,"br"),e._uU(19," Nous sommes impatients de vous aider \xe0 trouver les meilleurs produits alimentaires pour satisfaire vos papilles gustatives et vos besoins nutritionnels. Parcourez notre s\xe9lection aujourd'hui et commencez \xe0 planifier vos repas savoureux d\xe8s maintenant !\n"),e.qZA())}}),t})();var d=n(432),m=n(4678);function g(t,s){if(1&t&&(e.TgZ(0,"li",6)(1,"div",7)(2,"div",8)(3,"p",9),e._uU(4),e.qZA(),e.TgZ(5,"p",10),e._uU(6),e.qZA()(),e.TgZ(7,"p",9),e._uU(8),e.qZA()()()),2&t){const o=s.$implicit;e.xp6(4),e.Oqu(o.name),e.xp6(2),e.hij("",o.price,"\u20ac"),e.xp6(2),e.Oqu(o.description)}}function f(t,s){if(1&t&&(e.TgZ(0,"div")(1,"ul",4),e.YNc(2,g,9,3,"li",5),e.qZA()()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("ngForOf",o.produits)}}let v=(()=>{class t{constructor(o){this.httpRequestsService=o,this.produits=[]}ngOnInit(){}catalogue(){this.httpRequestsService.GetCatalogue().subscribe(o=>{console.log(o),o.map(u=>{this.produits.push(new d.b(u.name,u.price,u.description))})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-catalogue"]],decls:6,vars:1,consts:[[1,"form-group",2,"display","flex","flex-direction","column","align-items","center"],[2,"margin-bottom","25px","font-weight","600","text-align","center"],[1,"btn","btn-primary",3,"click"],[4,"ngIf"],[1,"list-group","scrollbar-primary",2,"margin-top","3%","overflow-y","auto","max-height","700px","width","100%","overflow","auto"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[2,"display","flex","flex-direction","column","justify-content","center","align-items","start"],[2,"display","flex","flex-direction","row","align-items","center","justify-content","space-between"],[2,"margin-right","20px"],[2,"font-weight","bold","font-size","large"]],template:function(o,u){1&o&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2," Catalogue des produits "),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return u.catalogue()}),e._uU(4,"Load catalogue from API"),e.qZA(),e.YNc(5,f,3,1,"div",3),e.qZA()),2&o&&(e.xp6(5),e.Q6J("ngIf",u.produits.length>0))},dependencies:[i.sg,i.O5]}),t})();var a=n(433);const E=[{path:"catalogue",component:v},{path:"home",component:c}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,l.JF,a.u5,a.UX,p.Bz.forChild(E)]}),t})()}}]);