import{p as s,r as p,u as b,a as j,b as v,j as e,l as z,C as P}from"./index-BstmheEO.js";import{v as y,s as F,u as L,o as S,F as c,B as k,L as E,c as $,a as m,I as q,b as A}from"./vector-Ctc8r92G.js";const R=s.div`
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
    margin-top: 90px;
  }
`,Z=s.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-image: url(${y});
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
`,B=s.div`
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
    margin: 0;
  }
`,C=s.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.06667;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`,D=s.p`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);

  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`,N=s.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 34px;
    gap: 18px;
  }
`,I=$().shape({email:m().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").required("Email is required"),password:m().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"Password must contain both letters and numbers").min(6,"Password must be at least 7 characters long").required("Password is required")});function W(){var o,d;const[i,x]=p.useState(!1),a=b(F),l=j(),g=v(),h=()=>x(!i),{register:t,handleSubmit:u,formState:{errors:r,touchedFields:n}}=L({resolver:S(I),mode:"onChange"}),w=f=>{l(z(f))};return p.useEffect(()=>{a&&g("/dictionary")},[a]),e.jsxs(B,{children:[e.jsx(C,{children:"Login"}),e.jsx(D,{children:"Please enter your login details to continue using our service:"}),e.jsxs(N,{onSubmit:u(w),children:[e.jsx(c,{label:"Email",type:"text",placeholder:"Email",register:t,name:"email",error:(o=r.email)==null?void 0:o.message,touched:n.email}),e.jsx(c,{label:"Password",type:"password",placeholder:"Password",register:t,name:"password",error:(d=r.password)==null?void 0:d.message,touched:n.password,showPassword:i,toggleShowPassword:h}),e.jsx(k,{text:"Login"})]}),e.jsx(E,{link:"/register",text:"Register"})]})}function U(){return e.jsxs(P,{children:[e.jsxs(R,{children:[e.jsxs("div",{children:[e.jsx(q,{}),e.jsx(A,{})]}),e.jsx(W,{})]}),e.jsx(Z,{})]})}export{U as default};
