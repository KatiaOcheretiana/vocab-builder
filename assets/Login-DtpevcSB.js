import{p as s,r as h,j as e,C as u}from"./index-Dqj1Ek-X.js";import{u as w,o as f,F as d,B as b,L as j,c as P,a as p,I as z,b as F}from"./FormField-DKLJmZk5.js";const L=s.div`
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
`,v=s.div`
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
`,S=s.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.06667;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`,y=s.p`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);

  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`,E=s.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 34px;
    gap: 18px;
  }
`,$=P().shape({email:p().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").required("Email is required"),password:p().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"Password must contain both letters and numbers").min(6,"Password must be at least 7 characters long").required("Password is required")});function q(){var n,o;const[r,m]=h.useState(!1),l=()=>m(!r),{register:i,handleSubmit:x,formState:{errors:a,touchedFields:t}}=w({resolver:f($),mode:"onChange"}),c=g=>{console.log({data:g})};return e.jsxs(v,{children:[e.jsx(S,{children:"Login"}),e.jsx(y,{children:"Please enter your login details to continue using our service:"}),e.jsxs(E,{onSubmit:x(c),children:[e.jsx(d,{label:"Email",type:"text",placeholder:"Email",register:i,name:"email",error:(n=a.email)==null?void 0:n.message,touched:t.email}),e.jsx(d,{label:"Password",type:"password",placeholder:"Password",register:i,name:"password",error:(o=a.password)==null?void 0:o.message,touched:t.password,showPassword:r,toggleShowPassword:l}),e.jsx(b,{text:"Login"})]}),e.jsx(j,{link:"/register",text:"Register"})]})}function Z(){return e.jsx(u,{children:e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(z,{}),e.jsx(F,{})]}),e.jsx(q,{})]})})}export{Z as default};
