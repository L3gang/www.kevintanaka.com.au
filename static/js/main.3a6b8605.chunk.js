(this["webpackJsonpwww.kevintanaka.com.au"]=this["webpackJsonpwww.kevintanaka.com.au"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(7),i=c.n(a),l=(c(12),c(0));function o(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{style:{left:"0",right:"0",height:"40px",backgroundColor:"#030151"}})})}function r(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{left:"0",right:"0",height:"20px",backgroundColor:"#4A64AE"}}),Object(l.jsx)("div",{style:{marginTop:"2px",height:"4px",backgroundColor:"#4A64AE"}})]})}var j=c(1),d=c(3);function m(e){var t=Object(s.useState)({display:"none",animationPlayState:"paused !important"}),c=Object(d.a)(t,2),n=c[0],a=c[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{style:n,onLoad:function(){a({animation:"initial-zoom 1s forwards ease-in-out"})},children:e.children})})}function b(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-4",children:[Object(l.jsxs)("div",{className:"row my-2",children:[Object(l.jsx)("div",{className:"col d-flex justify-content-end",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:h,alt:"Python",src:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"})})}),Object(l.jsx)("div",{className:"col d-flex justify-content-center",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:h,alt:"Java",src:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"})})}),Object(l.jsx)("div",{className:"col d-flex justify-content-start",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:h,alt:"Javascript",src:"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"})})})]}),Object(l.jsxs)("div",{className:"row my-2",children:[Object(l.jsx)("div",{className:"col d-flex justify-content-end",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:h,alt:"C",src:"https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png"})})}),Object(l.jsx)("div",{className:"col d-flex justify-content-start",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:h,alt:"C#",src:"https://camo.githubusercontent.com/8d56e87edf99e89bfc457cd62462e0b7aae19e6b197b1df5c542d474d8d76f81/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"})})})]})]}),Object(l.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:Object(j.a)(Object(j.a)({},x),{},{padding:"3px"}),alt:"AWS",src:"https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"})})}),Object(l.jsx)("div",{className:"col-2 d-flex justify-content-center mx-2",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:x,alt:"Google Cloud",src:"https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"})})}),Object(l.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(l.jsx)(m,{children:Object(l.jsx)("img",{style:Object(j.a)(Object(j.a)({},x),{},{padding:"7px"}),alt:"Azure",src:"https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"})})})]})})}var h={height:"25px"},x={height:"40px"};c(6);function u(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("a",{href:e.url,children:Object(l.jsx)("div",{className:"pulsing-linkedin d-flex justify-content-center align-items-center",style:Object(j.a)(Object(j.a)(Object(j.a)({},O),g),{},{width:e.width,height:e.height}),children:Object(l.jsx)("img",{alt:e.title,src:e.logo,style:{height:"calc(".concat(e.height," * 0.7)"),width:"calc(".concat(e.width," * 0.7)")}})})})})}var O={boxShadow:"0px 3px 6px rgba(0, 0, 0, 0.35)"},g={borderRadius:"15px"},p=c.p+"static/media/kvintanaka-2-logo.8d298155.svg",f=c(4);function v(){var e=Object(s.useState)({}),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(d.a)(a,2),o=i[0],r=i[1],m=Object(s.useState)(!1),b=Object(d.a)(m,2),h=b[0],x=b[1];function u(e){n(Object(j.a)(Object(j.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))}return o?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:['"',c.message,'" ',Object(l.jsx)("br",{}),Object(l.jsxs)("strong",{children:["- ",c.name]})]})}),h?Object(l.jsx)("p",{children:"Message successfully sent to Kevin Tanaka!"}):Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("entry.1056735415",c.name),t.append("entry.1213826864",c.message),t.append("entry.2107901377",c.email),fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLSdLEUFxxHyxGXOHfuJtKjIGYIiyFyd7b_VE3Fn5acrkiwKUtQ/formResponse",{mode:"no-cors",body:t,method:"post"}).then((function(){x(!0)})).catch((function(){console.log("Something wrong, but I can't tell because no-cors")}))},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("div",{className:"mb-2",children:Object(l.jsx)("span",{className:"small",children:"How can I contact you back?"})}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("label",{htmlFor:"colFormLabel",className:"col-sm-2 col-form-label",children:"Email"}),Object(l.jsx)("div",{className:"col-sm-10",children:Object(l.jsx)("input",{type:"email",className:"form-control",name:"email",placeholder:"Write your email here",onChange:u,value:c.email})})]})]}),Object(l.jsx)("div",{className:"d-flex justify-content-end",children:Object(l.jsx)("button",{id:"cfm-button",type:"submit",className:"btn btn-primary",children:Object(l.jsx)("small",{children:"SEND MESSAGE"})})})]})]}):Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(!0)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{className:"form-control",name:"name",type:"text",placeholder:"Enter your full name",onChange:u,value:c.name,required:!0})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message"}),Object(l.jsx)("textarea",{className:"form-control",name:"message",type:"text",rows:"2",placeholder:"Write your message here",onChange:u,value:c.message,required:!0})]}),Object(l.jsx)("div",{className:"d-flex justify-content-end",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:Object(l.jsx)("small",{children:"CONFIRM MESSAGE"})})})]})}var y=c.p+"static/media/C_Reversed.72e17547.svg";function w(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:" media my-2",children:[Object(l.jsx)(N,{}),Object(l.jsxs)("div",{className:"media-body ml-4",children:[Object(l.jsx)("h1",{className:"h3",children:"ComSSA Open-Source Project"}),Object(l.jsxs)("p",{children:["A newly created initiative in 2021 to increase engagement within computing students in Curtin University. ",Object(l.jsx)("br",{}),"Paid and community projects are now being developed."]}),Object(l.jsxs)("h5",{children:["Exclusive to ComSSA Membership ",Object(l.jsx)("br",{}),"So, ",Object(l.jsx)("a",{href:"https://www.comssa.org.au/join/",children:"Join Now"})]}),Object(l.jsx)("small",{children:"Want to know more? You can leave me a message or contact another fellow committee at Building 314 Room 345."})]})]})})}function N(){var e="130px",t=Object(s.useState)(e),c=Object(d.a)(t,2),n=c[0],a=c[1];return Object(l.jsx)("div",{id:"comssa-logo",className:"d-flex justify-content-center align-items-center",style:{height:n,width:n,backgroundColor:"#485AA6",borderRadius:n},onMouseEnter:function(){return a("140px")},onMouseLeave:function(){return a(e)},children:Object(l.jsx)("img",{src:y,alt:"ComSSA Logo",style:{height:"calc(".concat(n," * 0.75"),width:"calc(".concat(n," * 0.75")}})})}c(14);function k(e){return Object(l.jsx)("div",{className:"m-3 p-4 d-flex justify-content-center align-items-center",style:Object(j.a)(Object(j.a)(Object(j.a)({},S),F),{},{animation:"initial-slide-up 0.9s forwards ease-in-out"}),children:e.children})}var S={boxShadow:"0px 3px 7px rgba(0, 0, 0, 0.2)"},F={borderRadius:"25px"};function C(){return Object(l.jsx)("img",{style:{animation:"initial-slide-right 0.7s forwards ease-in-out"},alt:"Kevin Tanaka Logo",src:p,height:"80px"})}var A=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{id:"left-side",className:"col",children:[Object(l.jsx)("div",{className:"row mt-5",children:Object(l.jsx)(C,{})}),Object(l.jsx)("div",{className:"row my-5",children:Object(l.jsx)(b,{})}),Object(l.jsxs)("div",{className:"row mb-5",children:[Object(l.jsxs)("div",{className:"col-3",children:[Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("small",{children:"Contact now"})}),Object(l.jsx)(u,{title:"LinkedIn",logo:"https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",url:"https://www.linkedin.com/in/kvintanaka/",height:"80px",width:"80px"})]}),Object(l.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center"}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("small",{children:"Leave a message"})}),Object(l.jsx)(v,{})]})]}),Object(l.jsx)("br",{})]}),Object(l.jsx)("div",{id:"right-side",className:"col",children:Object(l.jsx)("div",{className:"row my-5",children:Object(l.jsx)(k,{children:Object(l.jsx)(w,{})})})})]})}),Object(l.jsx)(o,{})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};c(15);i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),_()},6:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.3a6b8605.chunk.js.map