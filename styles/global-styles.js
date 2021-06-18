import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        min-height: 100%;
		
	}
    footer {
    clear: both;
    position: relative;
    height: 200px;
    margin-top: -200px;
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