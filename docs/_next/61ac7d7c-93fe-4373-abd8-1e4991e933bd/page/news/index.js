
          window.__NEXT_REGISTER_PAGE('/news', function() {
            var comp = module.exports=webpackJsonp([7],{157:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.posts=void 0;var n=i(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),l=i(1),r=t.posts=[{id:"tickets-available",title:"Tickets available",date:"May 5"},{id:"diversity-and-inclusion",title:"Diversity and inclusion",date:"July 5"}];t.default=function(){return a.default.createElement(l.Wrapper,{title:"News",linkOffset:1},r.map(function(e,t){return a.default.createElement(l.NavLink,{prefetch:!0,href:"/news/"+e.id,key:t},t+1,". ",e.date," - ",e.title)}))}},389:function(e,t,i){e.exports=i(157)}},[389]);
            return { page: comp.default }
          })
        