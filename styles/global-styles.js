import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
	html,
	body {
    width:100%;
   
    min-height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    
        @media (max-width: 736px){ position: absolute;}
       
		
	}
 

 
    footer {
      position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
}
	
	
	
	* {
	  box-sizing: border-box;
	}`;

export default GlobalStyles;