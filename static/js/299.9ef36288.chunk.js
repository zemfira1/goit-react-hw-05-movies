"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[299],{5845:function(n,t,r){r.d(t,{y:function(){return g}});var e,a,i,o,u=r(7689),s=r(1087),p=r(168),c=r(5706),x=c.Z.ul(e||(e=(0,p.Z)(["\n  padding-top: 20px;\n  display: grid;\n  max-width: 1900px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 40px;\n  -ms-grid-column-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=c.Z.li(a||(a=(0,p.Z)(["\n  size: 20px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.4), 0px 1px 10px 0px rgba(0, 0, 0, 0.4);\n  transition: color, box-shadow 250ms linear;\n\n  &:hover,\n  :focus {\n    color: #de0b74;\n    box-shadow: 0px 2px 4px -1px rgba(225, 77, 114, 0.4),\n      0px 4px 5px 0px rgba(225, 77, 114, 0.4),\n      0px 1px 10px 0px rgba(225, 77, 114, 0.4);\n  }\n"]))),f=c.Z.img(i||(i=(0,p.Z)(["\n  width: 100%;\n  height: 390px;\n  margin-bottom: 8px;\n  z-index: 9999;\n"]))),d=c.Z.p(o||(o=(0,p.Z)(["\n  font-size: 20px;\n  text-align: center;\n"]))),h=r(184),g=function(n){var t=n.movies,r=(0,u.TH)();return(0,h.jsx)(x,{children:t.map((function(n){var t=n.id,e=n.title,a=n.poster_path;return(0,h.jsx)(l,{children:(0,h.jsxs)(s.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,h.jsx)(f,{src:"http://image.tmdb.org/t/p/w500"+a,alt:e}),(0,h.jsx)(d,{children:e||"..."})]})},t)}))})}},4290:function(n,t,r){r.d(t,{a:function(){return i}});var e=r(8966),a=r(184),i=function(){return(0,a.jsx)(e.g4,{height:"80",width:"80",radius:"9",color:"#de0b74",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},1299:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,i=r(3433),o=r(9439),u=r(2791),s=r(9545),p=r(5845),c=r(4290),x=r(168),l=r(5706),f=l.Z.h1(e||(e=(0,x.Z)(["\n  margin-bottom: 12px;\n  font-size: 44px;\n  font-weight: 400;\n"]))),d=l.Z.button(a||(a=(0,x.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: inherit;\n  text-align: center;\n  display: inline-block;\n  color: inherit;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 20px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 100%;\n  box-shadow: 0px 2px 4px -1px rgba(225, 77, 114, 0.4),\n    0px 4px 5px 0px rgba(225, 77, 114, 0.4),\n    0px 1px 10px 0px rgba(225, 77, 114, 0.4);\n  transition: box-shadow 200ms linear;\n\n  &:hover,\n  :focus {\n    box-shadow: 2px 4px 6px -2px rgba(225, 77, 114, 0.4),\n      2px 6px 7px 2px rgba(225, 77, 114, 0.4),\n      2px 3px 12px 2px rgba(225, 77, 114, 0.4);\n  }\n"]))),h=r(184),g=function(n){var t=n.onClick;return(0,h.jsx)(d,{type:"button",onClick:t,children:"Load more"})},m=function(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,u.useState)(!1),x=(0,o.Z)(a,2),l=x[0],d=x[1],m=(0,u.useState)(null),b=(0,o.Z)(m,2),v=b[0],Z=b[1],w=(0,u.useState)(1),y=(0,o.Z)(w,2),j=y[0],k=y[1],I=(0,u.useState)(!1),z=(0,o.Z)(I,2),N=z[0],S=z[1];(0,u.useEffect)((function(){d(!0),(0,s.Df)(j).then((function(n){0!==n.results.length?(e((function(t){return[].concat((0,i.Z)(t),(0,i.Z)(n.results))})),S(j<n.total_pages)):alert("Sorry, there are no movies.")})).catch((function(n){return Z(n)})).finally((function(){return d(!1)}))}),[j]);return(0,h.jsxs)(h.Fragment,{children:[l&&(0,h.jsx)(c.a,{}),0!==r.length&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{children:"Trending this week"}),(0,h.jsx)(p.y,{movies:r})]}),N&&(0,h.jsx)(g,{onClick:function(){k((function(n){return n+1}))}}),v&&alert("Sorry, something is wrong!")]})}},9545:function(n,t,r){r.d(t,{Df:function(){return u},IQ:function(){return c},Jh:function(){return x},TP:function(){return s},gH:function(){return p}});var e=r(5861),a=r(4687),i=r.n(a),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzhhYjBlYjNmYjE0YzA0ODc2YzI1YmIxNDI0M2NiZCIsInN1YiI6IjY0ZDE2MzYyNmQ0Yzk3MDBlYzU4YjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkZrfHNayLG0He9kinamYKtKq9Py8-TCiR3q_k01mNs",o.Z.defaults.headers.common.accept="application/json";var u=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day",{params:{page:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie",{params:{query:t,include_adult:!1,language:"en-US",page:1}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?language=en-US&page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=299.9ef36288.chunk.js.map