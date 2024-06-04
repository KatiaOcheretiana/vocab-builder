import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { globalColor, globalFonts } from './root.ts';

// import Helvetica from '../../public/fonts/SF-Pro-Display-Heavy.otf';
// import Helvetica from '../../public/fonts/SF-Pro-Display-HeavyItalic.otf';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Thin.otf) format('truetype');
  font-weight: 100; 
  font-style: normal;
}

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-ThinItalic.otf) format('truetype');
  font-weight: 100; 
  font-style: italic;
}

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Ultralight.otf) format('truetype');
  font-weight: 200; 
  font-style: normal;
}

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-UltralightItalic.otf) format('truetype');
  font-weight: 200; 
  font-style: italic;
}

 @font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Light.otf) format('truetype');
  font-weight: 300; 
  font-style: normal;
}

 @font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-LightItalic.otf) format('truetype');
  font-weight: 300; 
  font-style: italic;
}

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Regular.otf) format('truetype');
  font-weight: 400; 
  font-style: normal;
}

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-RegularItalic.otf) format('truetype');
  font-weight: 400; 
  font-style: italic;
}



@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Medium.otf) format('truetype');
  font-weight: 500; 
  font-style: normal;
}

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-MediumItalic.otf) format('truetype');
  font-weight: 500; 
  font-style: italic;
}


@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Semibold.otf) format('truetype');
  font-weight: 600; 
  font-style: normal;
}


@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-SemiboldItalic.otf) format('truetype');
  font-weight: 600; 
  font-style: italic;
}

@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Bold.otf) format('truetype');
  font-weight: 700; 
  font-style: normal;
}


@font-face {
  font-family:'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-BoldItalic.otf) format('truetype');
  font-weight: 700; 
  font-style: italic;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-Black.otf) format('truetype');
  font-weight: 900; 
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url(../../public/fonts/SF-Pro-Display-BlackItalic.otf) format('truetype');
  font-weight: 900; 
  font-style: italic;
}


 @font-face {
  font-family:"MacPaw Fixel Display";
  src: url(../../public/fonts/MacPawFixelDisplay-Thin.otf) format('truetype');
  font-weight: 100; 
  font-style: normal;
}

 @font-face {
  font-family:"MacPaw Fixel Display";
  src: url(../../public/fonts/MacPawFixelDisplay-Light.otf) format('truetype');
  font-weight: 300; 
  font-style: normal;
}

@font-face {
  font-family:"MacPaw Fixel Display";
  src: url(../../public/fonts/MacPawFixelDisplay-Regular.otf) format('truetype');
  font-weight: 400; 
  font-style: normal;
}



@font-face {
  font-family:"MacPaw Fixel Display";
  src: url(../../public/fonts/MacPawFixelDisplay-Medium.otf) format('truetype');
  font-weight: 500; 
  font-style: normal;
}

@font-face {
  font-family:"MacPaw Fixel Display";
  src: url(../../public/fonts/MacPawFixelDisplay-SemiBold.otf) format('truetype');
  font-weight: 600; 
  font-style: normal;
}


@font-face {
  font-family:"MacPaw Fixel Display";
  src: url(../../public/fonts/MacPawFixelDisplay-Bold.otf) format('truetype');
  font-weight: 700; 
  font-style: normal;
}

@font-face {
  font-family:"MacPaw Fixel Display";
  src: url(../../public/fonts/MacPawFixelDisplay-ExtraBold.otf) format('truetype');
  font-weight: 800; 
  font-style: normal;
} 


body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
font-family: ${globalFonts.main};
 color: ${globalColor.black};
 font-size: 16px;
line-height: 1.50;

   width: 100%;
   height: 100vh;
   margin: 0;

    overflow: auto;
}

a {
  text-decoration: none;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p {
   margin: 0;
 }

img, svg {
  display: block;
  width: 100%;
  height: 100%;
  
}

button {
   cursor: pointer;
 }
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    /* padding: 0 16px; */
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 100px;
  }
`;
