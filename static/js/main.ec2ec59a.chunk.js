(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{58:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(5),s=n.n(l),r=(n(58),n(22)),i=n(23),c=n(25),u=n(24),d=n(3),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{className:"tc f1",children:"Ooops. That is not good"}):this.props.children}}]),n}(a.Component),b=[{title:"Gender",totalLabel:"Total Users",data:[{label:"Female",value:50},{label:"Male",value:35},{label:"Diverse",value:15}]},{title:"Age Range",totalLabel:"Total Users",data:[{label:"Below 25",value:20},{label:"Between 25 and 40",value:67},{label:"Above 40",value:13}]},{title:"Country",totalLabel:"Total Users",data:[{label:"Costa Rica",value:22},{label:"India",value:37},{label:"Canada",value:41}]}],j=n(35),f=n.n(j),p=n(105),O=(n(63),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={options:{labels:b[0].data.map((function(e){return e.label})),colors:["#F44336","#E91E63","#9C27B0"],plotOptions:{pie:{expandOnClick:!1,donut:{labels:{show:!0,name:{show:!0,fontSize:"12px",fontFamily:void 0,offsetY:0},total:{show:!0,label:b[0].totalLabel,color:"#999999",formatter:function(e){return e.globals.seriesTotals.reduce((function(e,t){return e+t}),0)}}}}}},legend:{offsetY:25,offsetX:0},markers:{width:10,height:10,colors:["#063760","#E91E63","#9C27B0"]},itemMargin:{horizontal:10},dataLabels:{enabled:!1}},series:b[0].data.map((function(e){return e.value}))},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{style:{height:"200px"},children:Object(d.jsx)(f.a,{options:this.state.options,series:this.state.series,type:"donut",width:"500"})})}}]),n}(a.Component)),v=(n(64),n(65),n(39));var m=n(102),x=n(106),C=n(107),g=n(49),w=n.n(g),y=["Clone"];function k(){var e=o.a.useState(null),t=Object(v.a)(e,2),n=t[0],a=t[1],l=Boolean(n),s=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"Lalalala"})})};return Object(d.jsxs)("div",{children:[Object(d.jsx)(m.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},children:Object(d.jsx)(w.a,{})}),Object(d.jsx)(x.a,{id:"long-menu",anchorEl:n,keepMounted:!0,open:l,onClose:function(){a(null)},PaperProps:{style:{maxHeight:216,width:"20ch"}},children:y.map((function(e){return Object(d.jsx)(C.a,{selected:"Clone"===e,onClick:s,children:e},e)}))})]})}var E=function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){e.current.addEventListener("click",Object(d.jsx)("div",{children:Object(d.jsx)(O,{})}),{once:!0})})),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{ref:e,className:"button",children:"\ufe19"}),Object(d.jsx)(k,{})]})},L=(n(73),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={options:{labels:b[0].data.map((function(e){return e.label})),colors:["#692870","#C0406B","#F08F62"],plotOptions:{pie:{expandOnClick:!1,donut:{labels:{show:!0,name:{show:!0,fontSize:"12px",fontFamily:void 0,offsetY:0},total:{show:!0,label:b[0].totalLabel,color:"#999999",formatter:function(e){return e.globals.seriesTotals.reduce((function(e,t){return e+t}),0)}}}}}},legend:{offsetY:25,offsetX:0},markers:{width:10,height:10,colors:["#063760","#E91E63","#9C27B0"]},itemMargin:{horizontal:10},dataLabels:{enabled:!1}},series:b[0].data.map((function(e){return e.value}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("./profiles.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({profiles:t})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{className:"tc",children:"Donut Chart Cards"}),Object(d.jsxs)(p.a,{elevation:10,className:"pie",children:[Object(d.jsxs)("div",{className:"ma3 flex justify-between",children:[Object(d.jsx)("h2",{children:b[0].title}),Object(d.jsx)(E,{})]}),Object(d.jsx)("div",{style:{height:"auto",width:"auto"},children:Object(d.jsx)(h,{children:Object(d.jsx)(f.a,{options:this.state.options,series:this.state.series,type:"donut",width:"400"})})})]})]})}}]),n}(o.a.Component)),F=(n(74),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),l(e),s(e)}))});s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),F()}},[[75,1,2]]]);
//# sourceMappingURL=main.ec2ec59a.chunk.js.map