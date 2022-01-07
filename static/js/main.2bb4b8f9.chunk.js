(this.webpackJsonpimagefinder=this.webpackJsonpimagefinder||[]).push([[0],{49:function(n,t,e){"use strict";e.r(t);var a,r,i,o,c,s,l,p,u=e(0),d=e.n(u),h=e(11),g=e.n(h),x=e(9),b=e.n(x),m=e(12),f=e(5),j=e(6),v=e(8),y=e(7),w=e(10),O=e(3),k=e(4),S=e(1),C=k.a.header(a||(a=Object(O.a)(["\n   {\n    top: 0;\n    left: 0;\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 64px;\n    padding-right: 24px;\n    padding-left: 24px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #fff;\n    background-color: #3f51b5;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    margin-bottom: 20px;\n  }\n"]))),M=k.a.form(r||(r=Object(O.a)(["\n   {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n"]))),q=k.a.button(i||(i=Object(O.a)(["\n   {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url(https://img.icons8.com/material-outlined/24/000000/search--v1.png);\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n  &: hover {\n    opacity: 1;\n  }\n"]))),P=k.a.span(o||(o=Object(O.a)(["\n   {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n"]))),L=k.a.input(c||(c=Object(O.a)(["\n   {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    font-family: Verdana, Arial, Helvetica, sans-serif;\n  }\n  & :placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),D=function(n){Object(v.a)(e,n);var t=Object(y.a)(e);function e(){var n;Object(f.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={value:""},n.handleFormSubmit=function(t){t.preventDefault(),n.props.onSubmit({querry:t.currentTarget.elements.querry.value}),n.setState({value:""})},n.handleChange=function(t){n.setState({value:t.target.value})},n}return Object(j.a)(e,[{key:"render",value:function(){var n=this.state.value;return Object(S.jsx)(C,{children:Object(S.jsxs)(M,{onSubmit:this.handleFormSubmit,children:[Object(S.jsx)(q,{children:Object(S.jsx)(P,{children:"Search"})}),Object(S.jsx)(L,{type:"text",name:"querry",autocomplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:n,onChange:this.handleChange})]})})}}]),e}(u.Component),I=k.a.li(s||(s=Object(O.a)(["\n   {\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n"]))),z=k.a.img(l||(l=Object(O.a)(["\n   {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n  }\n  & :hover {\n    transform: scale(1.2);\n    cursor: zoom-in;\n  }\n"])));function E(n){return Object(S.jsx)(I,{children:Object(S.jsx)(z,{onClick:function(t){n.onImgClick({max:n.max,tag:n.tag})},src:n.imgSrc,originalImg:n.max,alt:n.tag})})}var R,T=k.a.ul(p||(p=Object(O.a)(["\n   {\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])));function A(n){return n.images.length>0&&Object(S.jsx)(T,{children:n.images.map((function(t){return Object(S.jsx)(E,{imgSrc:t.min,max:t.max,tag:t.tags,onImgClick:n.onClick},t.id)}))})}var F,U,B=k.a.button(R||(R=Object(O.a)(["\n   {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    padding: 10px;\n    border-radius: 10%;\n    border: 2px solid #ccc;\n    font-weight: 600;\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n    cursor: pointer;\n\n    &: hover {\n      background-color: #ccc;\n    }\n  }\n"])));function K(n){return Object(S.jsx)(B,{type:"button",onClick:function(){n.onClick()},children:"\xa0Load\xa0more\xa0"})}var G,H=k.a.div(F||(F=Object(O.a)(["\n   {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1200;\n  }\n"]))),J=k.a.div(U||(U=Object(O.a)(["\n   {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),Q=document.querySelector("#modal-root"),_=function(n){Object(v.a)(e,n);var t=Object(y.a)(e);function e(){var n;Object(f.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&n.props.onClose()},n.handleClick=function(t){n.props.onClose()},n}return Object(j.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var n=this.props.onShow,t=n.src,e=n.alt;return Object(h.createPortal)(Object(S.jsx)(H,{onClick:this.handleClick,children:Object(S.jsx)(J,{children:Object(S.jsx)("img",{src:t,alt:e})})}),Q)}}]),e}(u.Component),V=function(){var n=Object(m.a)(b.a.mark((function n(t,e){var a,r,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(e,"&key=").concat("24105767-529978ca3577f63abe59720d6","&image_type=photo&orientation=horizontal&per_page=").concat(12),n.next=3,fetch(a,{method:"GET",cache:"no-cache"});case 3:if(!(r=n.sent).ok){n.next=11;break}return n.next=7,r.json();case 7:return i=n.sent,n.abrupt("return",i);case 11:console.log("HTTP ERROR");case 12:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),W=e(20),Y=e.n(W),N=k.a.div(G||(G=Object(O.a)(["\n   {\n    display: flex;\n    margin: 15px;\n    justify-content: center;\n  }\n"])));function X(){return Object(S.jsx)(N,{children:Object(S.jsx)(Y.a,{type:"Grid",color:"#3f51b5",height:100,width:100})})}var Z=function(n){Object(v.a)(e,n);var t=Object(y.a)(e);function e(){var n;Object(f.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={showModal:{isShow:!1,src:null,alt:null},isLoading:!1,querry:"",totalImg:null,currentPage:1,imagesData:[],error:null},n.handleSubmit=function(t){var e=t.querry;e?n.setState({querry:e,currentPage:1}):w.b.error("Your querry is empty !",{position:"top-right"})},n.onClickLoadMoreBtn=function(){n.setState((function(n){return{currentPage:n.currentPage+1}}))},n.toggleModal=function(t){var e=n.state.showModal.isShow;n.setState({showModal:{isShow:!e,src:t.max,alt:t.tag}})},n.modalClose=function(){n.setState({showModal:{isShow:!1,src:null,alt:null}})},n}return Object(j.a)(e,[{key:"componentDidUpdate",value:function(n,t){t.querry===this.state.querry&&t.currentPage===this.state.currentPage||this.getQuerryData(this.state.querry,this.state.currentPage)}},{key:"getQuerryData",value:function(){var n=Object(m.a)(b.a.mark((function n(t,e){var a,r,i,o,c=this;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({isLoading:!0}),n.prev=1,n.next=4,V(t,e);case 4:if(!(a=n.sent)){n.next=13;break}if(r=a.total,i=a.hits,r){n.next=10;break}return w.b.error("Images not find !",{position:"top-right"}),n.abrupt("return");case 10:o=i.map((function(n){return{id:n.id,min:n.webformatURL,max:n.largeImageURL,tags:n.tags}})),1===e&&(this.setState({totalImg:r,currentPage:e,imagesData:o}),w.b.success("".concat(r," images was find !"),{position:"top-right"})),e>1&&this.setState((function(n){return{currentPage:e,imagesData:n.imagesData.concat(o)}}));case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),this.setState({error:n.t0});case 18:return n.prev=18,setTimeout((function(){return c.setState({isLoading:!1})}),500),n.finish(18);case 21:case"end":return n.stop()}}),n,this,[[1,15,18,21]])})));return function(t,e){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state.showModal.isShow,t=Math.ceil(this.state.totalImg/12)-this.state.currentPage;return Object(S.jsxs)(S.Fragment,{children:[n&&Object(S.jsx)(_,{onShow:this.state.showModal,onClose:this.modalClose}),Object(S.jsx)(w.a,{}),Object(S.jsx)(D,{onSubmit:this.handleSubmit}),Object(S.jsx)(A,{images:this.state.imagesData,onClick:this.toggleModal,children:Object(S.jsx)(E,{})}),this.state.isLoading&&Object(S.jsx)(X,{}),t>=1&&Object(S.jsx)(K,{onClick:this.onClickLoadMoreBtn})]})}}]),e}(u.Component);g.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(Z,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.2bb4b8f9.chunk.js.map