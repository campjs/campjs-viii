
          window.__NEXT_REGISTER_PAGE('/news', function() {
            var comp = module.exports=webpackJsonp([8],{161:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.posts=void 0;var a=i(0),l=function(e){return e&&e.__esModule?e:{default:e}}(a),n=i(1),s=t.posts=[{id:"tickets-available",title:"Tickets available",date:"May 5"},{id:"diversity-and-inclusion",title:"Diversity and inclusion",date:"July 5"},{id:"cfp-closed",title:"Call for Papers has now closed",date:"July 11"}];t.default=function(){return l.default.createElement(n.Wrapper,{title:"News",linkOffset:1},s.map(function(e,t){return l.default.createElement(n.NavLink,{prefetch:!0,href:"/news/"+e.id,key:t},t+1,". ",e.date," - ",e.title)}))}},398:function(e,t,i){e.exports=i(161)}},[398]);
            return { page: comp.default }
          })
        