(function(e){function t(t){for(var r,i,l=t[0],o=t[1],c=t[2],u=0,b=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&b.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/webapp--easygoband/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0601":function(e,t,a){e.exports=a.p+"img/beer-404.dcc50935.png"},"387c":function(e,t,a){e.exports=a.p+"img/empty-data.18f0fa02.png"},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),s=a("7496"),n=a("40dc"),i=a("f6c4"),l=function(){var e=this,t=e._self._c;return t(s["a"],[t(n["a"],{staticClass:"app-bar",attrs:{app:"",height:"130"}},[t("div",{staticClass:"d-flex align-center"},[t("router-link",{attrs:{to:"/"}},[t("img",{staticClass:"img-logo",attrs:{src:a("9d64")}})])],1)]),t(i["a"],[t("router-view",{key:e.$route.fullPath})],1)],1)},o=[],c=a("5935"),d={name:"App",computed:{...Object(c["b"])(["isMobile"])},beforeDestroy(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},methods:{onResize(){this.isMobile=window.innerWidth<600}},mounted(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})}},u=d,b=a("2877"),p=Object(b["a"])(u,l,o,!1,null,null,null),f=p.exports,m=a("8c4f"),_=a("62ad"),v=a("0fd9"),g=function(){var e=this,t=e._self._c;return t(v["a"],{staticClass:"mt-16"},[t(_["a"],{attrs:{cols:"12",md:"3"}},[t("SideFilters",{staticClass:"mx-4"})],1),t(_["a"],{staticClass:"text-center-webkit beers-pagination",attrs:{cols:"12",md:"9"}},[t("BeersPagination")],1)],1)},h=[],w=a("891e"),y=function(){var e=this,t=e._self._c;return t("div",[t("NavList"),"list"==e.view?t(v["a"],{staticClass:"list-container"},e._l(this.beers,(function(e){return t(_["a"],{key:e.id,attrs:{cols:"12"}},[t("BeerCard",{attrs:{beer:e}})],1)})),1):t(v["a"],e._l(this.beers,(function(e){return t(_["a"],{key:e.id,attrs:{cols:"12",sm:"4",md:"3"}},[t("router-link",{staticClass:"d-flex align-center",attrs:{to:{path:"/beer-info",query:{beerId:e.id}}}},[t("BeerCardSmall",{attrs:{beer:e}})],1)],1)})),1),e.beers.length?e._e():t("div",{staticClass:"empty-data"},[t("img",{attrs:{src:a("387c")}})]),t(v["a"],{staticClass:"align-center mt-8 pagination"},[t(_["a"],{staticClass:"text-left",attrs:{cols:"12",sm:"6"}},[t("span",{staticClass:"pagination-label"},[e._v(" "+e._s(e.beers.length?e.beers.length*(e.pagination.page-1)+1:0)+" - "+e._s(e.beers.length*e.pagination.page)+" of "+e._s(e.totalRows)+" ")])]),t(_["a"],{staticClass:"text-right",attrs:{cols:"12",sm:"6"}},[t(w["a"],{attrs:{length:e.totalPages,"total-visible":e.isMobile?4:7,circle:""},on:{input:e.fetchBeers},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1)],1)],1)},x=[],C=a("8336"),B=a("b0af"),k=a("99d9"),O=a("132d"),j=function(){var e=this,t=e._self._c;return t("div",[t(B["a"],{staticClass:"card text-left beer-card"},[t("div",{staticClass:"d-flex flex-no-wrap"},[t("div",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[t("img",{staticClass:"img-card",attrs:{src:e.beer.image_url?e.beer.image_url:a("0601")}})]),t("div",{staticClass:"text list"},[t(k["d"],{staticClass:"text-h5"},[e._v(e._s(e.isMobile&&e.beer.name.length>10?e.beer.name.substring(0,9)+"..":e.beer.name))]),t(k["b"],[t("span",{staticClass:"mobile-hidden"},[e._v(e._s(e.beer.tagline))])]),t("div",{staticClass:"beer-rate"},[e._l(e.maxABV,(function(a){return t(O["a"],{key:a,attrs:{color:"#d1be45",size:"22"}},[e._v(e._s(e.mdiGlassMugVariant))])})),t("span",[e._v(e._s(e.beer.abv)+" ABV")])],2),t(k["c"],[e._v(" "+e._s(e.isMobile?e.beer.description.substring(0,85):e.beer.description.substring(0,200))+" "),e.isMobile&&e.beer.description.length>85||e.beer.description.length>200?t("span",[e._v("..")]):e._e()]),t(k["a"],{staticClass:"justify-end"},[t("router-link",{staticClass:"d-flex align-center",attrs:{to:{path:"/beer-info",query:{beerId:e.beer.id}}}},[t(C["a"],{staticClass:"ml-2 mt-5 btn-pink",attrs:{rounded:"",small:""}},[e._v(" Take a Look ")])],1)],1)],1)])])],1)},M=[],S=a("94ed"),$={props:{beer:{typeof:Object}},computed:{...Object(c["b"])(["isMobile"])},data(){return{mdiGlassMugVariant:S["b"],maxABV:Math.round(this.beer.abv/2)>6?6:Math.round(this.beer.abv/2)}}},R=$,E=Object(b["a"])(R,j,M,!1,null,null,null),P=E.exports,L=function(){var e=this,t=e._self._c;return t(B["a"],{staticClass:"ma-4 small-card"},[t("div",{staticClass:"text-center"},[t("img",{staticClass:"img-card",attrs:{src:e.beer.image_url?e.beer.image_url:a("0601")}})]),t(k["d"],[e._v(" "+e._s(e.beer.name.length>12?e.beer.name.substring(0,11)+"...":e.beer.name)+" ")]),t(k["c"],[t("div",{staticClass:"beer-rate-small"},[e._l(Math.round(e.beer.abv/2)>6?6:Math.round(e.beer.abv/2),(function(a){return t(O["a"],{key:a,attrs:{color:"#d1be45",size:"22"}},[e._v(e._s(e.mdiGlassMugVariant))])})),t("span",{staticClass:"text text-left"},[e._v(e._s(e.beer.abv)+" ABV")])],2),e._v(" "+e._s(e.beer.description.length>60?e.beer.description.substring(0,60)+" ...":e.beer.description)+" ")])],1)},T=[],F={props:{beer:{type:Object},height:{type:Number}},data(){return{mdiGlassMugVariant:S["b"]}}},V=F,A=Object(b["a"])(V,L,T,!1,null,null,null),I=A.exports,z=a("a609"),D=a("b974"),G=a("8654"),q=function(){var e=this,t=e._self._c;return t(v["a"],{staticClass:"page-row-filters"},[t(_["a"],{attrs:{cols:"6"}},[t("div",{staticClass:"page-options"},[t("span",[e._v("Rows "),t("span",{staticClass:"mobile-hidden"},[e._v("Per Page")])]),t(D["a"],{attrs:{items:e.pageOptions,label:"",dense:""},on:{input:function(t){return e.fetchBeers()}},model:{value:e.pagination.per_page,callback:function(t){e.$set(e.pagination,"per_page",t)},expression:"pagination.per_page"}})],1)]),t(_["a"],{attrs:{cols:"6"}},[t(z["a"],{staticClass:"toggle-btns",attrs:{borderless:""},model:{value:e.view,callback:function(t){e.view=t},expression:"view"}},[t(C["a"],{attrs:{value:"list"}},[t("span",{staticClass:"hidden-sm-and-down"},[e._v("List")]),t(O["a"],{attrs:{right:""}},[e._v(" mdi-format-list-bulleted ")])],1),t(C["a"],{attrs:{value:"grid"}},[t("span",{staticClass:"hidden-sm-and-down"},[e._v("Grid")]),t(O["a"],{attrs:{right:""}},[e._v(" mdi-dots-grid ")])],1)],1)],1),t(_["a"],{attrs:{cols:"12"}},[t("div",{staticClass:"search"},[t(G["a"],{attrs:{label:"Search a Beer...","hide-details":"true"},on:{input:function(t){return e.fetchBeers()}},model:{value:e.beer_name,callback:function(t){e.beer_name=t},expression:"beer_name"}})],1)])],1)},N=[],H=a("2f62"),J={computed:{...Object(c["b"])(["filters.beer_name","view"]),...Object(H["b"])({pagination:e=>e.pagination,pageOptions:e=>e.pageOptions})},methods:{async fetchBeers(){await this.$store.dispatch("fetchBeers")}}},K=J,Y=Object(b["a"])(K,q,N,!1,null,null,null),U=Y.exports,W={components:{BeerCard:P,BeerCardSmall:I,NavList:U},computed:{...Object(c["b"])(["totalRows","totalPages","view","isMobile"]),...Object(H["b"])({beers:e=>e.beers,pagination:e=>e.pagination}),width(){}},data(){return{viewList:!0}},methods:{async fetchBeers(){await this.$store.dispatch("fetchBeers")}},async mounted(){await this.fetchBeers()}},Q=W,X=Object(b["a"])(Q,y,x,!1,null,null,null),Z=X.exports,ee=a("2e4b"),te=a("e449"),ae=a("ba0d"),re=a("2fa4"),se=function(){var e=this,t=e._self._c;return t("div",[t(B["a"],[t(k["d"],[e._v("Filters "+e._s(e.menu_before))]),t(k["c"],[t(te["a"],{ref:"menu_before",attrs:{"close-on-content-click":!1,"return-value":e.brewed_before,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},on:{"update:returnValue":function(t){e.brewed_before=t},"update:return-value":function(t){e.brewed_before=t}},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:r}){return[t(G["a"],e._g(e._b({attrs:{label:"Brewed Before","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.brewed_before,callback:function(t){e.brewed_before=t},expression:"brewed_before"}},"v-text-field",r,!1),a))]}}]),model:{value:e.menu_before,callback:function(t){e.menu_before=t},expression:"menu_before"}},[t(ee["a"],{attrs:{type:"month","no-title":"",scrollable:""},model:{value:e.brewed_before,callback:function(t){e.brewed_before=t},expression:"brewed_before"}},[t(re["a"]),t(C["a"],{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu_before.save(null)}}},[e._v(" "+e._s(e.brewed_before?"Remove":"Cancel")+" ")]),t(C["a"],{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu_before.save(e.brewed_before)}}},[e._v(" OK ")])],1)],1),t(te["a"],{ref:"menu_after",attrs:{"close-on-content-click":!1,"return-value":e.brewed_after,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},on:{"update:returnValue":function(t){e.brewed_after=t},"update:return-value":function(t){e.brewed_after=t}},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:r}){return[t(G["a"],e._g(e._b({attrs:{label:"Brewed After","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.brewed_after,callback:function(t){e.brewed_after=t},expression:"brewed_after"}},"v-text-field",r,!1),a))]}}]),model:{value:e.menu_after,callback:function(t){e.menu_after=t},expression:"menu_after"}},[t(ee["a"],{attrs:{type:"month","no-title":"",scrollable:""},model:{value:e.brewed_after,callback:function(t){e.brewed_after=t},expression:"brewed_after"}},[t(re["a"]),t(C["a"],{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu_after.save(null)}}},[e._v(" "+e._s(e.brewed_after?"Remove":"Cancel")+" ")]),t(C["a"],{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu_after.save(e.brewed_after)}}},[e._v(" OK ")])],1)],1),t("span",[e._v("Min ABV "),t("b",[e._v(e._s(e.abv_gt?e.abv_gt:""))])]),t(ae["a"],{attrs:{color:"primary",min:"0",max:"20","thumb-label":""},model:{value:e.abv_gt,callback:function(t){e.abv_gt=t},expression:"abv_gt"}}),t("span",[e._v("Max ABV "),t("b",[e._v(e._s(e.abv_lt?e.abv_lt:""))])]),t(ae["a"],{attrs:{color:"primary",min:"0",max:"20","thumb-label":""},model:{value:e.abv_lt,callback:function(t){e.abv_lt=t},expression:"abv_lt"}})],1),t(k["a"],{staticClass:"justify-center"},[t(v["a"],{},[t(_["a"],{staticClass:"text-center"},[t(C["a"],{staticClass:"my-2 btn-primary",on:{click:function(t){return e.applyFilters()}}},[e._v(" Apply Filters ")])],1),t(_["a"],{staticClass:"text-center"},[t(C["a"],{staticClass:"my-2",on:{click:function(t){return e.resetFilters()}}},[e._v(" Reset Filters ")])],1)],1)],1)],1)],1)},ne=[],ie={data(){return{menu_before:null,menu_after:null}},computed:{...Object(c["b"])(["brewed_before","brewed_after","filters.abv_gt","filters.abv_lt"])},methods:{resetFilters(){this.brewed_before=null,this.brewed_after=null,this.abv_gt=0,this.abv_lt=0,this.$store.dispatch("fetchBeers")},async applyFilters(){await this.$store.dispatch("fetchBeers")}}},le=ie,oe=Object(b["a"])(le,se,ne,!1,null,null,null),ce=oe.exports,de={components:{BeersPagination:Z,SideFilters:ce}},ue=de,be=Object(b["a"])(ue,g,h,!1,null,null,null),pe=be.exports,fe=a("a523"),me=function(){var e=this,t=e._self._c;return e.beer?t(fe["a"],{staticClass:"mt-16"},[t("router-link",{staticClass:"d-flex btn-return",attrs:{to:{path:"/"}}},[t(O["a"],{attrs:{color:"#1316a1",size:"28"}},[e._v(e._s(e.mdiArrowLeft))]),t("span",[e._v("Regresar")])],1),e.isLoading?e._e():t("BeerDescription",{attrs:{beer:e.beer}}),t("SliderGroup",{staticClass:"slider-group mt-16"})],1):e._e()},_e=[],ve=function(){var e=this,t=e._self._c;return t("div",{staticClass:"align-center"},[t("div",{staticClass:"show-beer-card"},[t(v["a"],{},[t(_["a"],{staticClass:"p-none reduced-card left-animation",attrs:{cols:"12",md:"5"}},[t("div",{staticClass:"main-card-img"},[t("img",{attrs:{src:e.beer.image_url?e.beer.image_url:a("0601")}}),t("span",[e._v(e._s(`"${e.beer.tagline}"`))])])]),t(_["a"],{staticClass:"p-none right-animation",attrs:{cols:"12",md:"7"}},[t("div",{staticClass:"main-card"},[t("div",[t("h2",[e._v(" "+e._s(e.beer.name)),t("span",{staticClass:"abv-text"},[e._v(e._s(`  -  ${e.beer.abv} ABV`))])]),t("p",[e._v("Description")]),t("span",[e._v(e._s(e.beer.description))]),t("p",[e._v("Brewer Tip")]),t("span",[e._v(e._s(e.beer.brewers_tips))])]),t("div",[t("p",[e._v("Ingredients")]),t("div",[t("span",[e._v("Hops: ")]),e._l(e.beer.ingredients.hops,(function(a,r){return t("span",{key:r},[e._v(" "+e._s(r>=e.beer.ingredients.hops.length-1?a.name+".":a.name+", ")+" ")])}))],2),t("div",[t("span",[e._v("Malt: ")]),e._l(e.beer.ingredients.malt,(function(a,r){return t("span",{key:r},[e._v(" "+e._s(r>=e.beer.ingredients.malt.length-1?a.name+".":a.name+", ")+" ")])}))],2),t("div",[t("span",[e._v("Yeast: "+e._s(e.beer.ingredients.yeast+"."))]),t("span")])]),t("div",[t("p",[e._v("Method")]),t("div",[t("span",[e._v(" Fermentation Temperature: "+e._s(`${e.temp.value}° ${e.temp.unit}`)+" ")])]),t("div",[t("span",[e._v(" Mash Temperature: "+e._s(`${e.mash_temp.value}° ${e.mash_temp.unit}`)+" ")])])])])])],1)],1)])},ge=[],he={props:{beer:{type:Object}},data(){return{temp:null,mash_temp:null}},created(){this.temp=this.beer.method.fermentation.temp,this.mash_temp=this.beer.method.mash_temp[0].temp}},we=he,ye=Object(b["a"])(we,ve,ge,!1,null,null,null),xe=ye.exports,Ce=a("8dd9"),Be=a("7efd"),ke=a("9dbe"),Oe=function(){var e=this,t=e._self._c;return e.isLoading?e._e():t("div",[t(Ce["a"],{staticClass:"mx-auto",attrs:{elevation:"8"}},[t("span",{staticClass:"subtitle"},[e._v("Beers You May Like")]),t(Be["a"],{staticClass:"pa-4",attrs:{"active-class":"success","show-arrows":""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.randomBeers,(function(e,a){return t(ke["a"],{key:a},[t("router-link",{staticClass:"d-flex align-center",attrs:{to:{path:"/beer-info",query:{beerId:e.id}}}},[t("BeerCardSmall",{attrs:{beer:e}})],1)],1)})),1)],1)],1)},je=[],Me={components:{BeerCardSmall:I},data(){return{model:null,randomBeers:[],isLoading:!0}},computed:{...Object(c["b"])(["pagination.per_page","pagination.page"]),...Object(H["b"])({beers:e=>e.beers})},methods:{async fetchBeers(){this.per_page=30,await this.$store.dispatch("fetchBeers")},selectRandomBeers(){this.randomBeers=this.beers.sort(()=>.5-Math.random()).slice(0,10)}},mounted(){this.fetchBeers(),this.$store.subscribe(async e=>{"SET_BEERS"===e.type&&(this.selectRandomBeers(),this.isLoading=!1)})}},Se=Me,$e=Object(b["a"])(Se,Oe,je,!1,null,null,null),Re=$e.exports,Ee={components:{BeerDescription:xe,SliderGroup:Re},data(){return{beerId:this.$route.query.beerId,isLoading:!0,mdiArrowLeft:S["a"]}},computed:{...Object(H["b"])({beer:e=>e.beer})},methods:{async fetchBeerById(){await this.$store.dispatch("fetchBeerById",this.beerId)}},mounted(){this.fetchBeerById(),this.$store.subscribe(async e=>{"SET_BEERS"===e.type&&(this.isLoading=!1)})}},Pe=Ee,Le=Object(b["a"])(Pe,me,_e,!1,null,null,null),Te=Le.exports;r["a"].use(m["a"]);const Fe=[{path:"/",name:"Home",component:pe},{path:"/beer-info",name:"beer-info",component:Te,props:!0},{path:"*",component:pe}],Ve=new m["a"]({mode:"history",routes:Fe});var Ae=Ve,Ie=a("bc3a"),ze=a.n(Ie);r["a"].use(H["a"]);var De=new H["a"].Store({state:{view:"list",beers:[],beer:null,pagination:{page:1,per_page:10},pageOptions:[10,25,50,80],totalRows:0,totalPages:0,brewed_before:null,brewed_after:null,filters:{brewed_before:null,brewed_after:null,abv_gt:0,abv_lt:0,beer_name:""},isMobile:!1},getters:{getField:c["a"],validFilterParams(e,t){return e.filters.brewed_before=t.formatDate(e.brewed_before),e.filters.brewed_after=t.formatDate(e.brewed_after),Object.fromEntries(Object.entries(e.filters).filter(([e,t])=>t&&""!==t))},formatDate:()=>e=>{if(!e)return null;const[t,a]=e.split("-");return`${a}/${t}`},getTotalBeers:(e,t)=>(a=1,r=[])=>{ze.a.get("beers",{params:{page:a,per_page:80,...t.validFilterParams}}).then(s=>{const n=[...r,...s.data];if(0!==s.data.length)return a++,t.getTotalBeers(a,n);e.totalRows=n.length;let i=e.totalRows%e.pagination.per_page?1:0;e.totalPages=parseInt(e.totalRows/e.pagination.per_page+i,"10")})}},actions:{async fetchBeers({commit:e,state:t,getters:a}){await a.getTotalBeers();const r=await ze.a.get("beers",{params:{...t.pagination,...a.validFilterParams}});e("SET_BEERS",r.data)},async fetchBeerById({commit:e},t){const a=await ze.a.get("beers/"+t);e("SET_BEER",a.data[0]),console.log(a.data)}},mutations:{updateField:c["c"],SET_BEERS:(e,t)=>{e.beers=t},SET_BEER:(e,t)=>{const{name:a,image_url:r,description:s,brewers_tips:n,ingredients:i,method:l,tagline:o,abv:c}=t;e.beer={name:a,image_url:r,description:s,brewers_tips:n,ingredients:i,method:l,tagline:o,abv:c}}}}),Ge=(a("a1a3"),a("f309"));r["a"].use(Ge["a"]);var qe=new Ge["a"]({icons:{iconfont:"mdiSvg"}});ze.a.interceptors.request.use(e=>(e.baseURL="https://api.punkapi.com/v2/",e)),r["a"].config.productionTip=!1,new r["a"]({router:Ae,store:De,vuetify:qe,render:e=>e(f)}).$mount("#app")},"9d64":function(e,t,a){e.exports=a.p+"img/logo.d503524e.png"},a1a3:function(e,t,a){}});
//# sourceMappingURL=app.f6f32d99.js.map