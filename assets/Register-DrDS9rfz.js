import{p as s,r as a,u as j,a as v,b as z,j as e,c as E,C as y}from"./index-BstmheEO.js";import{s as S,u as F,o as P,F as p,B as R,L as k,c as L,a as m,v as q,I as N,b as W}from"./vector-Ctc8r92G.js";const $=s.div`
  background: rgba(133, 170, 159, 0.1);
  border-radius: 25px;
  padding: 30px 16px;

  @media screen and (min-width: 768px) {
    padding: 48px 64px;
    max-width: 627px;
    margin: 118px auto 0 auto;
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px 64px;
    width: 627px;
    margin: 40px 0 0 0;
  }
`,A=s.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.06667;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`,Z=s.p`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);

  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`,B=s.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 34px;
    gap: 18px;
  }
`,C=L().shape({name:m().required("Name is required"),email:m().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").required("Email is required"),password:m().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"The password must consist of 6 English letters and 1 number.").min(6,"Password must be at least 7 characters long").required("Password is required")});function D(){var l,x,h;const[i,r]=a.useState(!1),t=()=>r(!i),c=j(S),g=v(),u=z(),{register:n,handleSubmit:w,formState:{errors:o,touchedFields:d}}=F({resolver:P(C),mode:"onChange"}),f=b=>{g(E(b))};return a.useEffect(()=>{c&&u("/dictionary")},[c]),e.jsxs($,{children:[e.jsx(A,{children:"Register"}),e.jsx(Z,{children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(B,{onSubmit:w(f),children:[e.jsx(p,{label:"Name",type:"text",placeholder:"Name",register:n,name:"name",error:(l=o.name)==null?void 0:l.message,touched:d.name}),e.jsx(p,{label:"Email",type:"text",placeholder:"Email",register:n,name:"email",error:(x=o.email)==null?void 0:x.message,touched:d.email}),e.jsx(p,{label:"Password",type:"password",placeholder:"Password",register:n,name:"password",error:(h=o.password)==null?void 0:h.message,touched:d.password,showPassword:i,toggleShowPassword:t}),e.jsx(R,{text:"Register"})]}),e.jsx(k,{link:"/login",text:"Login"})]})}const T=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 112px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 86px;
    align-items: center;
  }
`,I=s.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-image: url(${q});
    background-size: contain;
    background-repeat: no-repeat;

    position: fixed;
    bottom: -20px;
    right: 0;
    z-index: -1;
    width: 693px;
    height: 597px;
  }

  @media screen and (min-width: 1440px) {
    width: 693px;
    height: 597px;
  }
`;function _(){const[i,r]=a.useState(window.innerWidth);return a.useEffect(()=>{const t=()=>{r(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),e.jsxs(y,{children:[e.jsxs(T,{children:[e.jsxs("div",{children:[e.jsx(N,{}),i>=768&&e.jsx(W,{})]}),e.jsx(D,{})]}),e.jsx(I,{})]})}export{_ as default};
