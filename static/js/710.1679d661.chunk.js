"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[710],{5845:function(n,e,t){t.d(e,{y:function(){return d}});var r,a,i,o=t(7689),u=t(1087),c=t(168),s=t(5706),p=s.Z.ul(r||(r=(0,c.Z)(["\n  padding-top: 20px;\n  display: grid;\n  max-width: 1900px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 40px;\n  -ms-grid-column-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=s.Z.li(a||(a=(0,c.Z)(["\n  size: 20px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.4), 0px 1px 10px 0px rgba(0, 0, 0, 0.4);\n  transition: color, box-shadow 250ms linear;\n\n  &:hover,\n  :focus {\n    color: #de0b74;\n    box-shadow: 0px 2px 4px -1px rgba(225, 77, 114, 0.4),\n      0px 4px 5px 0px rgba(225, 77, 114, 0.4),\n      0px 1px 10px 0px rgba(225, 77, 114, 0.4);\n  }\n"]))),l=s.Z.img(i||(i=(0,c.Z)(["\n  width: 100%;\n  height: 302px;\n  margin-bottom: 8px;\n  z-index: 9999;\n"]))),f=t(184),d=function(n){var e=n.movies,t=(0,o.TH)();return(0,f.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,f.jsxs)(x,{children:[(0,f.jsx)(l,{src:"http://image.tmdb.org/t/p"+a,alt:r}),(0,f.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:t},children:r})]},e)}))})}},4290:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(8966),a=t(184),i=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#de0b74",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},5710:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i,o=t(5861),u=t(9439),c=t(4687),s=t.n(c),p=t(2791),x=t(168),l=t(5706),f=l.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  width: 100%;\n  height: 36px;\n  max-width: 600px;\n  background-color: inherit;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgba(225, 77, 114, 0.4),\n    0px 4px 5px 0px rgba(225, 77, 114, 0.4),\n    0px 1px 10px 0px rgba(225, 77, 114, 0.4);\n  transition: box-shadow 200ms linear;\n\n  &:hover,\n  :focus {\n    box-shadow: 2px 4px 6px -2px rgba(225, 77, 114, 0.4),\n      2px 6px 7px 2px rgba(225, 77, 114, 0.4),\n      2px 3px 12px 2px rgba(225, 77, 114, 0.4);\n  }\n"]))),d=l.Z.button(a||(a=(0,x.Z)(["\n  width: 10%;\n  height: 100%;\n  border: none;\n  padding: 0;\n  background-color: inherit;\n  color: inherit;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    opacity: 1;\n  }\n"]))),h=l.Z.input(i||(i=(0,x.Z)(["\n  border: none;\n  outline: none;\n  width: 90%;\n  height: 100%;\n  vertical-align: middle;\n  background-color: inherit;\n  padding-left: 12px;\n  font-size: 20px;\n  color: inherit;\n"]))),g=t(71),m=t(184),v=function(n){var e=n.onSubmit,t=(0,p.useState)(""),r=(0,u.Z)(t,2),a=r[0],i=r[1],o=function(){i("")};return(0,m.jsxs)(f,{onSubmit:function(n){n.preventDefault(),e({query:a}),o()},children:[(0,m.jsx)(h,{name:"name",value:a,onChange:function(n){i(n.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter a query..."}),(0,m.jsx)(d,{type:"submit",children:(0,m.jsx)(g.Ikh,{})})]})},b=t(5845),y=t(4290),w=t(1087),Z=t(9545),j=function(){var n=(0,w.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)([]),i=(0,u.Z)(a,2),c=i[0],x=i[1],l=(0,p.useState)(!1),f=(0,u.Z)(l,2),d=f[0],h=f[1],g=(0,p.useState)(!1),j=(0,u.Z)(g,2),k=j[0],I=j[1],S=t.get("query");return(0,p.useEffect)((function(){if(S){var n=function(){var n=(0,o.Z)(s().mark((function n(){var e,t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,Z.gH)(S);case 4:e=n.sent,t=S.toLowerCase(),r=e.filter((function(n){return n.title.toLowerCase().includes(t)})),x(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),I(n.t0);case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[S]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onSubmit:function(n){if(n.query!==S)return""===n.query?r({}):void r({query:n.query});alert("This request is already active!")}}),d&&(0,m.jsx)(y.a,{}),Array.isArray(c)&&0!==c.length&&(0,m.jsx)(b.y,{movies:c}),k&&alert("Sorry, something is wrong!")]})},k=j},9545:function(n,e,t){t.d(e,{Df:function(){return u},IQ:function(){return p},Jh:function(){return x},TP:function(){return c},gH:function(){return s}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzhhYjBlYjNmYjE0YzA0ODc2YzI1YmIxNDI0M2NiZCIsInN1YiI6IjY0ZDE2MzYyNmQ0Yzk3MDBlYzU4YjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkZrfHNayLG0He9kinamYKtKq9Py8-TCiR3q_k01mNs",o.Z.defaults.headers.common.accept="application/json";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/all/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1}"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=710.1679d661.chunk.js.map