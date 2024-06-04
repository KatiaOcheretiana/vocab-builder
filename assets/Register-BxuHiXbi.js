import{p as s,r as l,j as e,C as w}from"./index-Dqj1Ek-X.js";import{u as f,o as b,F as d,B as j,L as z,c as v,a as m,I as E,b as P}from"./FormField-DKLJmZk5.js";const S=s.div`
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
`,F=s.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.06667;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`,R=s.p`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);

  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`,y=s.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 34px;
    gap: 18px;
  }
`,L=v().shape({name:m().required("Name is required"),email:m().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").required("Email is required"),password:m().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"Password must contain both letters and numbers").min(6,"Password must be at least 7 characters long").required("Password is required")});function q(){var p,c,x;const[r,t]=l.useState(!1),i=()=>t(!r),{register:a,handleSubmit:h,formState:{errors:n,touchedFields:o}}=f({resolver:b(L),mode:"onChange"}),g=u=>{console.log({data:u})};return e.jsxs(S,{children:[e.jsx(F,{children:"Register"}),e.jsx(R,{children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(y,{onSubmit:h(g),children:[e.jsx(d,{label:"Name",type:"text",placeholder:"Name",register:a,name:"name",error:(p=n.name)==null?void 0:p.message,touched:o.name}),e.jsx(d,{label:"Email",type:"text",placeholder:"Email",register:a,name:"email",error:(c=n.email)==null?void 0:c.message,touched:o.email}),e.jsx(d,{label:"Password",type:"password",placeholder:"Password",register:a,name:"password",error:(x=n.password)==null?void 0:x.message,touched:o.password,showPassword:r,toggleShowPassword:i}),e.jsx(j,{text:"Register"})]}),e.jsx(z,{link:"/login",text:"Login"})]})}const W=s.div`
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
`;function Z(){const[r,t]=l.useState(window.innerWidth);return l.useEffect(()=>{const i=()=>{t(window.innerWidth)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),e.jsx(w,{children:e.jsxs(W,{children:[e.jsxs("div",{children:[e.jsx(E,{}),r>=768&&e.jsx(P,{})]}),e.jsx(q,{})]})})}export{Z as default};
