(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),c=n(8),s=(n(13),n(2)),d=n(1),l=Object(s.a)({dd2Container:{marginTop:100,display:"flex",flexDirection:"row",borderWidth:0,borderStyle:"solid",borderColor:"red"},dd2ImageContainer:{position:"relative",width:"100%",height:"100%"},dd2ImageContainerHighlight:{position:"absolute",left:0,top:0,zIndex:-1,width:"100%",height:"100%",transform:"rotateZ(45deg) scale(calc(1/1.4142))",boxShadow:"0 0 13px 8px gold, inset 0 0 13px 8px gold"}}),u=function(e){var t=l({});return Object(d.jsxs)("div",{className:t.dd2ImageContainer,style:{zIndex:e.select?1:0},children:[Object(d.jsx)("div",{hidden:!e.select,className:t.dd2ImageContainerHighlight}),Object(d.jsx)("img",{alt:"",width:"100%",height:"100%",src:e.image})]})};function h(e){var t=l({}),n=a.a.useMemo((function(){return e.images.map((function(e,t){return Object(d.jsx)(u,{image:e.image,select:e.select},t)}))}),[e]);return Object(d.jsx)("div",{className:t.dd2Container,children:n})}var m=Object(s.a)({GenerateButton:{marginTop:100,userSelect:"none",fontSize:"300%",color:"white",transition:"0.2s","&:hover":{color:"gold",cursor:"pointer"}}}),g=function(){return new Array(9).fill(0).map((function(e,t){return{select:!1,image:(n=t+1,"./dd2_chars/char".concat(n,".png"))};var n}))};function j(e){var t=m({}),n=a.a.useCallback((function(){for(var t=g();t.reduce((function(e,t){return e+Number(t.select)}),0)<4;)for(;;){var n=t[Math.floor(Math.random()*t.length)];if(!n.select){n.select=!0;break}}e.doRandom(t)}),[e]);return Object(d.jsx)("div",{className:t.GenerateButton,onClick:n,children:"Generate"})}var b=Object(s.a)({Header:{textShadow:"0px 0px 20px gold",color:"chocolate",fontSize:"300%"},Credit:{position:"absolute",left:20,bottom:50,color:"white",textAlign:"left"}});function f(){var e=b({}),t=a.a.useMemo((function(){return"Darkest Dungeon II Character Generator"}),[]),n=a.a.useState(g()),r=Object(c.a)(n,2),o=r[0],i=r[1];return a.a.useEffect((function(){document.title=t})),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:e.Header,children:t})}),Object(d.jsx)(h,{images:o}),Object(d.jsx)(j,{doRandom:i})]})}var x=document.getElementById("root");i.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(f,{})}),x)}},[[23,1,2]]]);
//# sourceMappingURL=main.2e061133.chunk.js.map