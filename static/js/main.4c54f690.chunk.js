(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),i=(a(11),a(2)),o=a.n(i),l=a(5),u=a(1),m=(a(13),function(e){var t=e.posts;return e.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("ul",{className:"list-group mb-4"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.title)})))}),p=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"#!",className:"page-link"},e))}))))};var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),f=i[0],g=i[1],E=Object(n.useState)(1),b=Object(u.a)(E,2),h=b[0],d=b[1],j=Object(n.useState)(10),v=Object(u.a)(j,2),O=v[0];v[1],Object(n.useEffect)((function(){g(!0),function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a),g(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var k=h*O,N=k-O,P=a.slice(N,k);return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",{className:"text-primary mb-4"},"Pagination"),r.a.createElement(m,{posts:P,loading:f}),r.a.createElement(p,{postsPerPage:O,totalPosts:a.length,paginate:function(e){return d(e)}}))};a(14);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.4c54f690.chunk.js.map