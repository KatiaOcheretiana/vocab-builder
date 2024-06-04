import{p as s,r as p,u as b,a as j,b as P,j as e,l as v,C as z}from"./index-kJ71GkJj.js";import{s as F,u as L,o as S,F as m,B as y,L as E,c as $,a as c,I as q,b as A}from"./selectors-1O42vLqg.js";const R=s.div`
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
`,k=s.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.06667;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`,C=s.p`
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
`,B=$().shape({email:c().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").required("Email is required"),password:c().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"Password must contain both letters and numbers").min(6,"Password must be at least 7 characters long").required("Password is required")});function D(){var o,d;const[a,l]=p.useState(!1),i=b(F),x=j(),g=P(),u=()=>l(!a),{register:r,handleSubmit:h,formState:{errors:t,touchedFields:n}}=L({resolver:S(B),mode:"onChange"}),w=f=>{x(v(f))};return p.useEffect(()=>{i&&g("/dictionary")},[i]),e.jsxs(Z,{children:[e.jsx(k,{children:"Login"}),e.jsx(C,{children:"Please enter your login details to continue using our service:"}),e.jsxs(N,{onSubmit:h(w),children:[e.jsx(m,{label:"Email",type:"text",placeholder:"Email",register:r,name:"email",error:(o=t.email)==null?void 0:o.message,touched:n.email}),e.jsx(m,{label:"Password",type:"password",placeholder:"Password",register:r,name:"password",error:(d=t.password)==null?void 0:d.message,touched:n.password,showPassword:a,toggleShowPassword:u}),e.jsx(y,{text:"Login"})]}),e.jsx(E,{link:"/register",text:"Register"})]})}function H(){return e.jsx(z,{children:e.jsxs(R,{children:[e.jsxs("div",{children:[e.jsx(q,{}),e.jsx(A,{})]}),e.jsx(D,{})]})})}export{H as default};
