import{p as s,r as i,u as j,a as v,b as z,j as e,c as E,C as S}from"./index-kJ71GkJj.js";import{s as y,u as F,o as P,F as m,B as R,L,c as q,a as p,I as N,b as W}from"./selectors-1O42vLqg.js";const A=s.div`
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
`,$=s.h2`
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
`,k=s.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 34px;
    gap: 18px;
  }
`,C=q().shape({name:p().required("Name is required"),email:p().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").required("Email is required"),password:p().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,"The password must consist of 6 English letters and 1 number.").min(6,"Password must be at least 7 characters long").required("Password is required")});function T(){var l,x,h;const[r,a]=i.useState(!1),t=()=>a(!r),c=j(y),u=v(),g=z(),{register:n,handleSubmit:w,formState:{errors:o,touchedFields:d}}=F({resolver:P(C),mode:"onChange"}),f=b=>{u(E(b))};return i.useEffect(()=>{c&&g("/dictionary")},[c]),e.jsxs(A,{children:[e.jsx($,{children:"Register"}),e.jsx(Z,{children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(k,{onSubmit:w(f),children:[e.jsx(m,{label:"Name",type:"text",placeholder:"Name",register:n,name:"name",error:(l=o.name)==null?void 0:l.message,touched:d.name}),e.jsx(m,{label:"Email",type:"text",placeholder:"Email",register:n,name:"email",error:(x=o.email)==null?void 0:x.message,touched:d.email}),e.jsx(m,{label:"Password",type:"password",placeholder:"Password",register:n,name:"password",error:(h=o.password)==null?void 0:h.message,touched:d.password,showPassword:r,toggleShowPassword:t}),e.jsx(R,{text:"Register"})]}),e.jsx(L,{link:"/login",text:"Login"})]})}const B=s.div`
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
`;function H(){const[r,a]=i.useState(window.innerWidth);return i.useEffect(()=>{const t=()=>{a(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),e.jsx(S,{children:e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx(N,{}),r>=768&&e.jsx(W,{})]}),e.jsx(T,{})]})})}export{H as default};
