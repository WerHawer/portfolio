(this["webpackJsonphomework-3"]=this["webpackJsonphomework-3"]||[]).push([[0],{23:function(e,t,a){e.exports=a(69)},28:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),s=(a(28),a(29),a(5)),l=a(3),i=a.n(l),u=a(4),h=a(16),m=a(17),p=a(21),d=a(18),f=a(22),g=a(19),v=a.n(g),y={BASIC_URL:"https://pixabay.com/api/",otherOptions:"&image_type=photo&orientation=horizontal&per_page=12",key:"1992005-0c423af9a07f13d941d831108",page:1,getPhoto:function(e){var t=this;return Object(u.a)(i.a.mark((function a(){var n,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n="".concat(t.BASIC_URL,"?q=").concat(e,"&key=").concat(t.key).concat(t.otherOptions,"&page=").concat(t.page),a.next=4,v.a.get(n);case 4:return r=a.sent,t.pageIncrement(),a.abrupt("return",r.data.hits);case 9:a.prev=9,a.t0=a.catch(0),alert(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},pageIncrement:function(){this.page+=1},pageResset:function(){this.page=1}},b=function(e){var t=e.children;return r.a.createElement("header",{className:"Searchbar"},t)},k=function(e){var t=e.value,a=e.onChange,n=e.onSubmit;return r.a.createElement("form",{className:"SearchForm",onSubmit:n},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:t,onChange:a}))},E=function(e){var t=e.onClick,a=e.photos;return r.a.createElement("ul",{className:"ImageGallery"},a.map((function(e){return r.a.createElement("li",{className:"ImageGalleryItem",key:e.id,onClick:t},r.a.createElement("img",{src:e.webformatURL,alt:e.name,id:e.id,className:"ImageGalleryItem-image"}))})))},S=a(20),w=a.n(S),C=function(e){var t=e.onClick;return r.a.createElement("button",{type:"button",className:"Button",onClick:t},"Load more")},N=function(e){var t=e.bigUrl,a=e.onClick,n=e.onKeyPress;return r.a.createElement("div",{className:"Overlay",onClick:a},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:t,alt:"",onKeyPress:n})))},O=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"noResult"},"Sorry, we haven`t any photo on your request :("))},L=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",photos:[],fullSize:!1,isLoading:!1,bigUrl:""},a.handleNewQueryFetch=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.prev=1,e.next=4,y.getPhoto(a.state.query);case 4:t=e.sent,a.setState({photos:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:a.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),a.handleFetch=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.prev=1,e.next=4,y.getPhoto(a.state.query);case 4:t=e.sent,a.setState((function(e){var a=e.photos;return{photos:[].concat(Object(s.a)(a),Object(s.a)(t))}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:a.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),a.handleChangeQuery=function(e){a.setState({query:e.target.value})},a.onSubmitForm=function(e){e.preventDefault(),y.pageResset(),a.handleNewQueryFetch()},a.onClickBtn=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.handleFetch();case 2:window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 3:case"end":return e.stop()}}),e)}))),a.onClickPhoto=function(e){var t=a.state.photos.find((function(t){return t.id===+e.target.id}));a.setState({fullSize:!0,bigUrl:t.largeImageURL})},a.onClickOverlay=function(e){"IMG"!==e.target.nodeName&&a.setState({fullSize:!1})},a.onPressEsc=function(e){window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(a.setState({fullSize:!1}),window.removeEventListener("keydown",e))}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.handleFetch(this.state.query)}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.photos,n=e.fullSize,o=e.bigUrl,c=e.isLoading;return r.a.createElement("div",null,r.a.createElement(b,null,r.a.createElement(k,{onSubmit:this.onSubmitForm,onChange:this.handleChangeQuery,value:t})),r.a.createElement(E,{onClick:this.onClickPhoto,photos:a}),c&&r.a.createElement("div",{className:"Loader"},r.a.createElement(w.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80})),a.length>0&&!c?r.a.createElement(C,{onClick:this.onClickBtn}):null,n&&r.a.createElement(N,{onClick:this.onClickOverlay,bigUrl:o,onKeyPress:this.onPressEsc()}),a.length||c?null:r.a.createElement(O,null))}}]),t}(n.Component);c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.02c909a4.chunk.js.map