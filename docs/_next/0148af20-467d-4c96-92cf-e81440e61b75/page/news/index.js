
          window.__NEXT_REGISTER_PAGE('/news', function() {
            var comp = module.exports=webpackJsonp([7],{514:function(e,t,i){e.exports=i(515)},515:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.posts=void 0;var n=i(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),l=i(6),r=t.posts=[{id:"tickets-available",title:"Tickets available",date:"May 5"},{id:"diversity-and-inclusion",title:"Diversity and inclusion",date:"July 5"}];t.default=function(){return a.default.createElement(l.Wrapper,{title:"News",linkOffset:1},r.map(function(e,t){return a.default.createElement(l.NavLink,{prefetch:!0,href:"/news/"+e.id,key:t},t+1,". ",e.date," - ",e.title)}))}}},[514]);
            return { page: comp.default }
          })
        