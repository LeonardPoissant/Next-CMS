import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
	html,
	body {
    width:100%;
   
    min-height: 100%;
    margin: 0px;
    padding: 0px;
    
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    
        @media (max-width: 736px){ position: absolute;}
       
		
	}
 

 
    /*footer {
     // position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    @media (min-width: 736px){ position: absolute;}
}
	*/
	
	
	* {
	  box-sizing: border-box;
	}
  
  ul {
   
  }

  li{
    margin:5px;
  }

  .line1{
    width: 30px;
    height: 28px;
    border-bottom: 1px solid black;
    position: absolute;
    margin-left:-19px;
    &.second-triangle{
      width: 29px;
    height: 28px;
    border-bottom: 1px solid black;
    position: absolute;
    margin-left: -19px;

    }
  }

  .line2{
    width: 24px;
    height: 22px;
    border-bottom: 1px solid black;
    position: absolute;
    transform: rotate(
60deg
);
   &.second-triangle{
      
    }  
  }

  .line3{
    margin-top: 9px;
    margin-left: -13px;
    width: 28px;
    height: 29px;
   
    border-bottom: 1px solid black;
    position: absolute;
    transform: rotate(
122deg
);
&.second-triangle{
  margin-top: 5px;
    margin-left: -4px;
    width: 27px;
    height: 51px;
    border-bottom: 1px solid black;
    position: absolute;
    -webkit-transform: rotate(
122deg
);
    -ms-transform: rotate(122deg);
    transform: rotate(
126deg
);
      
}
  }

  .separator-wrapper{
    display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
  
  };

  separator-wrapper-none{
      display:none;
  }

  .separator{
    width: 112px;
    height: 47px;
    border-bottom: 1px solid white;
  }

  .separator-none{
    display:none;
  }
 

  
  `;

export default GlobalStyles;
