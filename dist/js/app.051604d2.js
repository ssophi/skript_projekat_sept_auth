(function(e){function t(t){for(var a,r,l=t[0],s=t[1],i=t[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(u.length)u.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var b=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04d5":function(e,t,n){"use strict";n("4246")},"0e6c":function(e,t,n){"use strict";n("2552")},1:function(e,t){},2552:function(e,t,n){},"366b":function(e,t,n){"use strict";n("ea5e")},4246:function(e,t,n){},"451f":function(e,t,n){},"53ae":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t,n,o,c,r){const l=Object(a["w"])("Header"),s=Object(a["w"])("router-view"),i=Object(a["w"])("NavBar");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(l),Object(a["g"])(s),Object(a["g"])(i)])}const c=e=>(Object(a["s"])("data-v-681bddc0"),e=e(),Object(a["q"])(),e),r={class:"header"},l=c(()=>Object(a["e"])("h1",null,"Wellness center",-1)),s=[l];function i(e,t,n,o,c,l){return Object(a["p"])(),Object(a["d"])("header",r,s)}var b={name:"Header"},d=(n("abb6"),n("6b0d")),u=n.n(d);const j=u()(b,[["render",i],["__scopeId","data-v-681bddc0"]]);var m=j;const O={id:"nav"},p=Object(a["f"])(" | "),g=Object(a["f"])("Home"),h=Object(a["f"])(" | "),f=Object(a["f"])("About"),v=Object(a["f"])(" | "),k=Object(a["f"])("Contact"),z=Object(a["f"])(" | "),S={call:"container"};function _(e,t,n,o,c,r){const l=Object(a["w"])("router-link"),s=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["e"])("div",O,[p,Object(a["g"])(l,{to:"/"},{default:Object(a["D"])(()=>[g]),_:1}),h,Object(a["g"])(l,{to:"/about"},{default:Object(a["D"])(()=>[f]),_:1}),v,Object(a["g"])(l,{to:"/contact"},{default:Object(a["D"])(()=>[k]),_:1}),z]),Object(a["g"])(s),Object(a["e"])("div",S,[Object(a["e"])("button",{onClick:t[0]||(t[0]=e=>r.goToLogIn()),class:"btn-logIn"},"Log In"),Object(a["e"])("button",{onClick:t[1]||(t[1]=e=>r.goToRegister()),class:"btn-signUp"},"Sign Up")])])}var y={name:"NavBarNotLoggedIn",methods:{goToLogIn(){this.$router.push("/login")},goToRegister(){this.$router.push("/register")}}};n("df10");const I=u()(y,[["render",_]]);var T=I;const M={id:"nav"},w=Object(a["f"])(" | "),U=Object(a["f"])("UserReserveWorkout"),P=Object(a["f"])(" | "),B=Object(a["f"])("UserReserveMasage"),C=Object(a["f"])(" | "),A=Object(a["f"])("UserMyPage"),N=Object(a["f"])(" | "),R={call:"container"};function L(e,t,n,o,c,r){const l=Object(a["w"])("router-link"),s=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["e"])("div",M,[w,Object(a["g"])(l,{to:"/user"},{default:Object(a["D"])(()=>[U]),_:1}),P,Object(a["g"])(l,{to:"/user/masage"},{default:Object(a["D"])(()=>[B]),_:1}),C,Object(a["g"])(l,{to:"/user/myPage"},{default:Object(a["D"])(()=>[A]),_:1}),N]),Object(a["g"])(s),Object(a["e"])("div",R,[Object(a["e"])("button",{onClick:t[0]||(t[0]=e=>r.logOut()),class:"btn-logOut"},"Log Out")])])}var E={name:"NavBarLoggedIn",components:{},methods:{logOut(){localStorage.removeItem("username"),localStorage.removeItem("token"),this.$router.push("/")}}};n("af7c");const q=u()(E,[["render",L]]);var W=q;const V={class:"hello"};function x(e,t,n,o,c,r){return Object(a["p"])(),Object(a["d"])("div",V)}var D={name:"HelloWorld",props:{msg:String}};n("5ee9");const H=u()(D,[["render",x],["__scopeId","data-v-6d163343"]]);var $=H,F={name:"App",components:{Header:m,NavBarNotLoggedIn:T,NavBarLoggedIn:W,NavBar:$}};n("5b54");const J=u()(F,[["render",o]]);var G=J,K=n("6605");const Q=e=>(Object(a["s"])("data-v-6de65405"),e=e(),Object(a["q"])(),e),X={class:"home"},Y=Q(()=>Object(a["e"])("h2",null,"Svi treninzi u ponudi",-1)),Z=Q(()=>Object(a["e"])("h2",null,"Sve masaze u ponudi",-1));function ee(e,t,n,o,c,r){const l=Object(a["w"])("NavBarNotLoggedIn"),s=Object(a["w"])("WorkoutItem"),i=Object(a["w"])("MasageItem");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(l),Object(a["e"])("div",X,[Y,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.treninzi,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),Z,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(i,{masaza:e},null,8,["masaza"])]))),128))])])}function te(e,t,n,o,c,r){return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["e"])("b",null,Object(a["y"])(n.trening.tip),1)])}var ne={name:"WorkoutItem",props:["trening"]};n("366b");const ae=u()(ne,[["render",te],["__scopeId","data-v-2d752272"]]);var oe=ae;function ce(e,t,n,o,c,r){return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["e"])("b",null,Object(a["y"])(n.masaza.tip),1)])}var re={name:"MasageItem",props:["masaza"]};n("0e6c");const le=u()(re,[["render",ce],["__scopeId","data-v-65084134"]]);var se=le,ie=n("5502"),be={name:"Home",components:{NavBarNotLoggedIn:T,WorkoutItem:oe,MasageItem:se},computed:{...Object(ie["c"])(["masaze","treninzi"])},mounted(){this.fetchMasaze(),this.fetchTreninzi()},methods:{...Object(ie["b"])(["fetchMasaze","fetchTreninzi"]),goToLogIn(){this.$router.push("/login")},goToRegister(){this.$router.push("/register")}}};n("04d5");const de=u()(be,[["render",ee],["__scopeId","data-v-6de65405"]]);var ue=de;const je=Object(a["e"])("div",{class:"about"},[Object(a["e"])("h1",null,"About page")],-1);function me(e,t,n,o,c,r){const l=Object(a["w"])("NavBarNotLoggedIn");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(l),je])}var Oe={name:"About",components:{NavBarNotLoggedIn:T}};const pe=u()(Oe,[["render",me]]);var ge=pe;const he=Object(a["e"])("div",{class:"home"},[Object(a["e"])("h1",null,"Contact page")],-1);function fe(e,t,n,o,c,r){const l=Object(a["w"])("NavBarNotLoggedIn");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(l),he])}var ve={name:"Contact",components:{NavBarNotLoggedIn:T}};const ke=u()(ve,[["render",fe]]);var ze=ke;const Se=e=>(Object(a["s"])("data-v-711cef41"),e=e(),Object(a["q"])(),e),_e=Se(()=>Object(a["e"])("div",{class:"userhome"},[Object(a["e"])("h2",null,"Forma za zakazivanje treninga")],-1)),ye=Se(()=>Object(a["e"])("b",null,"Ponedeljak",-1)),Ie=Object(a["f"])(),Te=Se(()=>Object(a["e"])("br",null,null,-1)),Me=Object(a["f"])(),we=Se(()=>Object(a["e"])("br",null,null,-1)),Ue=Se(()=>Object(a["e"])("b",null,"Utorak",-1)),Pe=Se(()=>Object(a["e"])("br",null,null,-1)),Be=Object(a["f"])(),Ce=Se(()=>Object(a["e"])("br",null,null,-1)),Ae=Se(()=>Object(a["e"])("b",null,"Sreda",-1)),Ne=Se(()=>Object(a["e"])("br",null,null,-1)),Re=Object(a["f"])(),Le=Se(()=>Object(a["e"])("br",null,null,-1)),Ee=Se(()=>Object(a["e"])("b",null,"Cetvrtak",-1)),qe=Se(()=>Object(a["e"])("br",null,null,-1)),We=Object(a["f"])(),Ve=Se(()=>Object(a["e"])("br",null,null,-1)),xe=Se(()=>Object(a["e"])("b",null,"Petak",-1)),De=Se(()=>Object(a["e"])("br",null,null,-1)),He=Object(a["f"])(),$e=Se(()=>Object(a["e"])("br",null,null,-1)),Fe=Se(()=>Object(a["e"])("b",null,"Subota",-1)),Je=Se(()=>Object(a["e"])("br",null,null,-1)),Ge=Object(a["f"])(),Ke=Se(()=>Object(a["e"])("br",null,null,-1)),Qe=Se(()=>Object(a["e"])("b",null,"Nedelja",-1)),Xe=Se(()=>Object(a["e"])("br",null,null,-1)),Ye=Object(a["f"])(),Ze=Se(()=>Object(a["e"])("br",null,null,-1));function et(e,t,n,o,c,r){const l=Object(a["w"])("NavBarLoggedIn"),s=Object(a["w"])("UserReserveWorkoutItem");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(l),_e,ye,Ie,Te,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.trening_ponedeljak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),Me,we,Ue,Pe,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.trening_utorak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),Be,Ce,Ae,Ne,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.trening_sreda,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),Re,Le,Ee,qe,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.trening_cetvrtak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),We,Ve,xe,De,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.trening_petak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),He,$e,Fe,Je,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.trening_subota,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),Ge,Ke,Qe,Xe,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.trening_nedelja,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{trening:e},null,8,["trening"])]))),128)),Ye,Ze])}const tt={class:"workout-item"};function nt(e,t,n,o,c,r){return Object(a["p"])(),Object(a["d"])("div",tt,[Object(a["e"])("b",null,Object(a["y"])(n.trening.tip),1),Object(a["e"])("p",null,"satnica: od "+Object(a["y"])(n.trening.sati_od)+" do "+Object(a["y"])(n.trening.sati_do),1),Object(a["e"])("button",{onClick:t[0]||(t[0]=(...e)=>r.onSubmit&&r.onSubmit(...e)),class:"btn-reserve"},"RESERVE")])}var at={name:"UserReserveWorkoutItem",props:["trening"],data(){return{form:{username:localStorage.getItem("username"),terminId:this.trening.id}}},methods:{...Object(ie["b"])(["reserve"]),onSubmit(e){console.log("submitujem"),e.preventDefault(),this.reserve(this.form)}}};n("f625");const ot=u()(at,[["render",nt],["__scopeId","data-v-c9a4e920"]]);var ct=ot,rt={name:"UserReserveWorkout",components:{UserReserveWorkoutItem:ct,NavBarLoggedIn:W},computed:{...Object(ie["c"])(["trening_ponedeljak","trening_utorak","trening_sreda","trening_cetvrtak","trening_petak","trening_subota","trening_nedelja"])},mounted(){this.fetchSlobodneTreningPonedeljak(),this.fetchSlobodneTreningUtorak(),this.fetchSlobodneTreningSreda(),this.fetchSlobodneTreningCetvrtak(),this.fetchSlobodneTreningPetak(),this.fetchSlobodneTreningSubota(),this.fetchSlobodneTreningNedelja()},methods:{...Object(ie["b"])(["fetchSlobodneTreningPonedeljak","fetchSlobodneTreningUtorak","fetchSlobodneTreningSreda","fetchSlobodneTreningCetvrtak","fetchSlobodneTreningPetak","fetchSlobodneTreningSubota","fetchSlobodneTreningNedelja"])}};n("e37a");const lt=u()(rt,[["render",et],["__scopeId","data-v-711cef41"]]);var st=lt;const it=e=>(Object(a["s"])("data-v-99cd825a"),e=e(),Object(a["q"])(),e),bt=it(()=>Object(a["e"])("div",{class:"userhome"},[Object(a["e"])("h2",null,"Forma za zakazivanje masaza")],-1)),dt=it(()=>Object(a["e"])("b",null,"Ponedeljak",-1)),ut=Object(a["f"])(),jt=it(()=>Object(a["e"])("br",null,null,-1)),mt=Object(a["f"])(),Ot=it(()=>Object(a["e"])("br",null,null,-1)),pt=it(()=>Object(a["e"])("b",null,"Utorak",-1)),gt=it(()=>Object(a["e"])("br",null,null,-1)),ht=Object(a["f"])(),ft=it(()=>Object(a["e"])("br",null,null,-1)),vt=it(()=>Object(a["e"])("b",null,"Sreda",-1)),kt=it(()=>Object(a["e"])("br",null,null,-1)),zt=Object(a["f"])(),St=it(()=>Object(a["e"])("br",null,null,-1)),_t=it(()=>Object(a["e"])("b",null,"Cetvrtak",-1)),yt=it(()=>Object(a["e"])("br",null,null,-1)),It=Object(a["f"])(),Tt=it(()=>Object(a["e"])("br",null,null,-1)),Mt=it(()=>Object(a["e"])("b",null,"Petak",-1)),wt=it(()=>Object(a["e"])("br",null,null,-1)),Ut=Object(a["f"])(),Pt=it(()=>Object(a["e"])("br",null,null,-1)),Bt=it(()=>Object(a["e"])("b",null,"Subota",-1)),Ct=it(()=>Object(a["e"])("br",null,null,-1)),At=Object(a["f"])(),Nt=it(()=>Object(a["e"])("br",null,null,-1)),Rt=it(()=>Object(a["e"])("b",null,"Nedelja",-1)),Lt=it(()=>Object(a["e"])("br",null,null,-1)),Et=Object(a["f"])(),qt=it(()=>Object(a["e"])("br",null,null,-1));function Wt(e,t,n,o,c,r){const l=Object(a["w"])("NavBarLoggedIn"),s=Object(a["w"])("UserReserveMasageItem");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(l),bt,dt,ut,jt,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze_ponedeljak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{masaza:e},null,8,["masaza"])]))),128)),mt,Ot,pt,gt,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze_utorak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{masaza:e},null,8,["masaza"])]))),128)),ht,ft,vt,kt,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze_sreda,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{masaza:e},null,8,["masaza"])]))),128)),zt,St,_t,yt,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze_cetvrtak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{masaza:e},null,8,["masaza"])]))),128)),It,Tt,Mt,wt,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze_petak,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{masaza:e},null,8,["masaza"])]))),128)),Ut,Pt,Bt,Ct,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze_subota,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{masaza:e},null,8,["masaza"])]))),128)),At,Nt,Rt,Lt,(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.masaze_nedelja,e=>(Object(a["p"])(),Object(a["d"])("div",{key:e.id},[Object(a["g"])(s,{masaza:e},null,8,["masaza"])]))),128)),Et,qt])}const Vt={class:"masage-item"};function xt(e,t,n,o,c,r){return Object(a["p"])(),Object(a["d"])("div",Vt,[Object(a["e"])("b",null,Object(a["y"])(n.masaza.tip),1),Object(a["e"])("p",null,"satnica: od "+Object(a["y"])(n.masaza.sati_od)+" do "+Object(a["y"])(n.masaza.sati_do),1),Object(a["e"])("button",{onClick:t[0]||(t[0]=(...e)=>r.onSubmit&&r.onSubmit(...e)),class:"btn-reserve"},"RESERVE")])}var Dt={name:"UserReserveMassageItem",props:["masaza"],data(){return{form:{username:localStorage.getItem("username"),terminId:this.masaza.id}}},methods:{...Object(ie["b"])(["reserve"]),onSubmit(e){console.log("submitujem"),e.preventDefault(),this.reserve(this.form)}}};n("99d2");const Ht=u()(Dt,[["render",xt],["__scopeId","data-v-63dd7d72"]]);var $t=Ht,Ft={name:"UserReserveWorkout",components:{UserReserveMasageItem:$t,NavBarLoggedIn:W},computed:{...Object(ie["c"])(["masaze_ponedeljak","masaze_utorak","masaze_sreda","masaze_cetvrtak","masaze_petak","masaze_subota","masaze_nedelja"])},mounted(){this.fetchSlobodneMasazePonedeljak(),this.fetchSlobodneMasazeUtorak(),this.fetchSlobodneMasazeSreda(),this.fetchSlobodneMasazeCetvrtak(),this.fetchSlobodneMasazePetak(),this.fetchSlobodneMasazeSubota(),this.fetchSlobodneMasazeNedelja()},methods:{...Object(ie["b"])(["fetchSlobodneMasazePonedeljak","fetchSlobodneMasazeUtorak","fetchSlobodneMasazeSreda","fetchSlobodneMasazeCetvrtak","fetchSlobodneMasazePetak","fetchSlobodneMasazeSubota","fetchSlobodneMasazeNedelja"])}};n("65d7");const Jt=u()(Ft,[["render",Wt],["__scopeId","data-v-99cd825a"]]);var Gt=Jt;const Kt=e=>(Object(a["s"])("data-v-db98271e"),e=e(),Object(a["q"])(),e),Qt=Kt(()=>Object(a["e"])("div",{class:"userhome"},[Object(a["e"])("h2",null,"My Page")],-1)),Xt=Kt(()=>Object(a["e"])("b",{class:"Same"},"Ime: ",-1)),Yt=Object(a["f"])(),Zt={class:"Same"},en=Kt(()=>Object(a["e"])("br",null,null,-1)),tn=Kt(()=>Object(a["e"])("b",{class:"Same"},"Prezime: ",-1)),nn=Object(a["f"])(),an={class:"Same"},on=Kt(()=>Object(a["e"])("br",null,null,-1)),cn=Kt(()=>Object(a["e"])("b",{class:"Same"},"Username: ",-1)),rn=Object(a["f"])(),ln={class:"Same"},sn=Kt(()=>Object(a["e"])("br",null,null,-1)),bn=Kt(()=>Object(a["e"])("b",{class:"Same"},"Email: ",-1)),dn=Object(a["f"])(),un={class:"Same"},jn=Kt(()=>Object(a["e"])("br",null,null,-1)),mn=Kt(()=>Object(a["e"])("input",{type:"submit",value:"Change",class:"btn"},null,-1));function On(e,t,n,o,c,r){const l=Object(a["w"])("NavBarLoggedIn");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(l),Qt,Object(a["e"])("div",null,[Object(a["e"])("form",{onSubmit:t[0]||(t[0]=Object(a["F"])((...t)=>e.addBlogPost&&e.addBlogPost(...t),["prevent"]))},[Xt,Yt,Object(a["e"])("p",Zt,Object(a["y"])(e.ime),1),en,tn,nn,Object(a["e"])("p",an,Object(a["y"])(e.prezime),1),on,cn,rn,Object(a["e"])("p",ln,Object(a["y"])(e.username),1),sn,bn,dn,Object(a["e"])("p",un,Object(a["y"])(e.email),1),jn,mn],32)])])}var pn={name:"UserHome",components:{NavBarLoggedIn:W},data(){return{}},computed:{...Object(ie["c"])(["username","ime","prezime","email"])},mounted(){console.log(localStorage.getItem("username")),this.fetchUser()},methods:{...Object(ie["b"])(["fetchUser"])}};n("8a7f");const gn=u()(pn,[["render",On],["__scopeId","data-v-db98271e"]]);var hn=gn;const fn=e=>(Object(a["s"])("data-v-72569052"),e=e(),Object(a["q"])(),e),vn=fn(()=>Object(a["e"])("h2",null,"Log In",-1)),kn=fn(()=>Object(a["e"])("label",{for:"username"},"Username: ",-1)),zn=fn(()=>Object(a["e"])("label",{for:"password"},"Password: ",-1)),Sn=fn(()=>Object(a["e"])("input",{type:"submit",value:"Log In",class:"btn"},null,-1));function _n(e,t,n,o,c,r){return Object(a["p"])(),Object(a["d"])("div",null,[vn,Object(a["e"])("form",{id:"loginForm",onSubmit:t[2]||(t[2]=(...e)=>r.onSubmit&&r.onSubmit(...e))},[Object(a["e"])("div",null,[kn,Object(a["E"])(Object(a["e"])("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>c.form.username=e),name:"username",placeholder:"Username",required:""},null,512),[[a["B"],c.form.username]])]),Object(a["e"])("div",null,[zn,Object(a["E"])(Object(a["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>c.form.password=e),name:"password",placeholder:"Password",required:""},null,512),[[a["B"],c.form.password]])]),Sn],32)])}var yn={name:"LogIn",components:st,data(){return{form:{username:"",password:""}}},methods:{...Object(ie["b"])(["login"]),onSubmit(e){console.log("submitujem"),e.preventDefault(),this.login(this.form),localStorage.setItem("username",this.form.username)}}};n("5b9b");const In=u()(yn,[["render",_n],["__scopeId","data-v-72569052"]]);var Tn=In;const Mn=e=>(Object(a["s"])("data-v-a85e309c"),e=e(),Object(a["q"])(),e),wn=Mn(()=>Object(a["e"])("h2",null,"Register",-1)),Un=Mn(()=>Object(a["e"])("label",{for:"username"},"Username: ",-1)),Pn=Mn(()=>Object(a["e"])("label",{for:"password"},"Password: ",-1)),Bn=Mn(()=>Object(a["e"])("label",{for:"ime"},"Ime: ",-1)),Cn=Mn(()=>Object(a["e"])("label",{for:"prezime"},"Prezime: ",-1)),An=Mn(()=>Object(a["e"])("label",{for:"email"},"Email: ",-1)),Nn={class:"form-check form-check-inline"},Rn=Mn(()=>Object(a["e"])("label",{class:"form-check-label",for:"tip_clanarine"},"clasic",-1)),Ln={class:"form-check form-check-inline"},En=Mn(()=>Object(a["e"])("label",{class:"form-check-label",for:"tip_clanarine"},"exclusive",-1)),qn=Mn(()=>Object(a["e"])("input",{type:"submit",value:"Sign Up",class:"btn"},null,-1));function Wn(e,t,n,o,c,r){return Object(a["p"])(),Object(a["d"])("div",null,[wn,Object(a["e"])("form",{id:"loginForm",onSubmit:t[7]||(t[7]=(...e)=>r.onSubmit&&r.onSubmit(...e))},[Object(a["e"])("div",null,[Un,Object(a["E"])(Object(a["e"])("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>c.form.username=e),name:"username",placeholder:"Username",required:""},null,512),[[a["B"],c.form.username]])]),Object(a["e"])("div",null,[Pn,Object(a["E"])(Object(a["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>c.form.password=e),name:"password",placeholder:"Password",required:""},null,512),[[a["B"],c.form.password]])]),Object(a["e"])("div",null,[Bn,Object(a["E"])(Object(a["e"])("input",{type:"ime",id:"ime","onUpdate:modelValue":t[2]||(t[2]=e=>c.form.ime=e),name:"ime",placeholder:"Ime",required:""},null,512),[[a["B"],c.form.ime]])]),Object(a["e"])("div",null,[Cn,Object(a["E"])(Object(a["e"])("input",{type:"prezime",id:"prezime","onUpdate:modelValue":t[3]||(t[3]=e=>c.form.prezime=e),name:"prezime",placeholder:"Prezime",required:""},null,512),[[a["B"],c.form.prezime]])]),Object(a["e"])("div",null,[An,Object(a["E"])(Object(a["e"])("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>c.form.email=e),name:"email",placeholder:"Email",required:""},null,512),[[a["B"],c.form.email]])]),Object(a["e"])("div",Nn,[Object(a["E"])(Object(a["e"])("input",{class:"form-check-input",type:"radio",name:"tip_clanarine",id:"clasic",value:"clasic","onUpdate:modelValue":t[5]||(t[5]=e=>c.form.tip_clanarine=e)},null,512),[[a["A"],c.form.tip_clanarine]]),Rn]),Object(a["e"])("div",Ln,[Object(a["E"])(Object(a["e"])("input",{class:"form-check-input",type:"radio",name:"tip_clanarine",id:"clasic",value:"exclusive","onUpdate:modelValue":t[6]||(t[6]=e=>c.form.tip_clanarine=e)},null,512),[[a["A"],c.form.tip_clanarine]]),En]),qn],32)])}var Vn={name:"Registration",data(){return{form:{username:"",password:"",ime:"",prezime:"",email:"",tip_clanarine:""}}},methods:{...Object(ie["b"])(["register"]),onSubmit(e){console.log("submitujem"),e.preventDefault(),this.register(this.form),this.$router.push("/user")}}};n("9355");const xn=u()(Vn,[["render",Wn],["__scopeId","data-v-a85e309c"]]);var Dn=xn;const Hn=[{path:"/",name:"Home",component:ue},{path:"/login",name:"LogIn",component:Tn},{path:"/register",name:"Registration",component:Dn},{path:"/about",name:"About",component:ge},{path:"/contact",name:"Contact",component:ze},{path:"/user",name:"UserReserveWorkout",component:st},{path:"/user/masage",name:"UserReserveMasage",component:Gt},{path:"/user/myPage",name:"UserMyPage",component:hn}],$n=Object(K["a"])({history:Object(K["b"])(),base:"/",routes:Hn});var Fn=$n,Jn=Object(ie["a"])({state:{treninzi:[],trening_ponedeljak:[],trening_utorak:[],trening_sreda:[],trening_cetvrtak:[],trening_petak:[],trening_subota:[],trening_nedelja:[],masaze:[],masaze_ponedeljak:[],masaze_utorak:[],masaze_sreda:[],masaze_cetvrtak:[],masaze_petak:[],masaze_subota:[],masaze_nedelja:[],reservations:[],user:{},username:"",ime:"",prezime:"",email:"",token:""},mutations:{addReservation(e,t){e.reservations.push(t)},addTreninzi(e,t){e.treninzi=t},addMasaze(e,t){e.masaze=t},addMasazePonedeljak(e,t){e.masaze_ponedeljak=t},addMasazeUtorak(e,t){e.masaze_utorak=t},addMasazeSreda(e,t){e.masaze_sreda=t},addMasazeCetvrtak(e,t){e.masaze_cetvrtak=t},addMasazePetak(e,t){e.masaze_petak=t},addMasazeSubota(e,t){e.masaze_subota=t},addMasazeNedelja(e,t){e.masaze_nedelja=t},addTreningPonedeljak(e,t){e.trening_ponedeljak=t},addTreningUtorak(e,t){e.trening_utorak=t},addTreningSreda(e,t){e.trening_sreda=t},addTreningCetvrtak(e,t){e.trening_cetvrtak=t},addTreningPetak(e,t){e.trening_petak=t},addTreningSubota(e,t){e.trening_subota=t},addTreningNedelja(e,t){e.trening_nedelja=t},addReservations(e,t){e.reservations=t},addUser(e,t){e.user=t,e.username=t.username,e.ime=t.ime,e.prezime=t.prezime,e.email=t.email},setToken(e,t){e.token=t,localStorage.token=t,console.log("token je :"+t)},removeToken(e){e.token="",localStorage.token=""}},actions:{fetchMasaze({commit:e}){console.log("cao iz fetch masaze"),fetch("/masaza",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>e("addMasaze",t))},fetchTreninzi({commit:e}){console.log("cao iz fetch treninzi"),fetch("/trening",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>e("addTreninzi",t))},fetchUser({commit:e}){fetch("/user/"+localStorage.getItem("username"),{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addUser",t[0])})},login({commit:e},t){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(t=>{t.msg?alert(t.msg):(e("setToken",t.token),console.log(localStorage.getItem("token")),console.log(localStorage.getItem("username")),Fn.push("/user"))})},register({commit:e},t){fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(t=>e("addReservation",t.token))},reserve({commit:e},t){fetch("/rezervacija",{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(t=>{e("addReservation",t)})},fetchSlobodneMasazePonedeljak({commit:e}){fetch("/termin/sm/1",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addMasazePonedeljak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneMasazeUtorak({commit:e}){fetch("/termin/sm/2",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addMasazeUtorak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneMasazeSreda({commit:e}){fetch("/termin/sm/3",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addMasazeSreda",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneMasazeCetvrtak({commit:e}){fetch("/termin/sm/4",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addMasazeCetvrtak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneMasazePetak({commit:e}){fetch("/termin/sm/5",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addMasazePetak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneMasazeSubota({commit:e}){fetch("/termin/sm/6",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addMasazeSubota",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneMasazeNedelja({commit:e}){fetch("/termin/sm/7",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addMasazeNedelja",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneTreningPonedeljak({commit:e}){console.log("pozz is fetch ponedeljak"),fetch("/termin/st/1",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addTreningPonedeljak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneTreningUtorak({commit:e}){fetch("/termin/st/2",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addTreningUtorak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneTreningSreda({commit:e}){fetch("/termin/st/3",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addTreningSreda",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneTreningCetvrtak({commit:e}){fetch("/termin/st/4",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addTreningCetvrtak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneTreningPetak({commit:e}){fetch("/termin/st/5",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addTreningPetak",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneTreningSubota({commit:e}){fetch("/termin/st/6",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addTreningSubota",t)}).catch(e=>{console.log(e),Fn.push("/")})},fetchSlobodneTreningNedelja({commit:e}){fetch("/termin/st/7",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}}).then(e=>e.json()).then(t=>{e("addTreningNedelja",t)}).catch(e=>{console.log("greska"+e),Fn.push("/#/")})}},modules:{}});n("eefd");const Gn=Object(a["c"])(G),Kn=n("8055"),Qn=Kn("",{withCredentials:!0});Gn.use(Qn),Gn.use(Jn),Gn.use(Fn),Gn.mount("#app")},"5b54":function(e,t,n){"use strict";n("b18c")},"5b9b":function(e,t,n){"use strict";n("f822")},"5ee9":function(e,t,n){"use strict";n("897f")},"65d7":function(e,t,n){"use strict";n("a107")},"77e2":function(e,t,n){},"897f":function(e,t,n){},"8a7f":function(e,t,n){"use strict";n("9bd5")},"8d1c":function(e,t,n){},9355:function(e,t,n){"use strict";n("e1ae")},"99d2":function(e,t,n){"use strict";n("8d1c")},"9bd5":function(e,t,n){},a0e2:function(e,t,n){},a107:function(e,t,n){},abb6:function(e,t,n){"use strict";n("cdae")},af7c:function(e,t,n){"use strict";n("a0e2")},b18c:function(e,t,n){},cdae:function(e,t,n){},df10:function(e,t,n){"use strict";n("451f")},e1ae:function(e,t,n){},e37a:function(e,t,n){"use strict";n("53ae")},ea5e:function(e,t,n){},f625:function(e,t,n){"use strict";n("77e2")},f822:function(e,t,n){}});
//# sourceMappingURL=app.051604d2.js.map