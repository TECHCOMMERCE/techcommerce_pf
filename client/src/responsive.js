import { css } from "styled-components";


const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
  @media only screen and (max-width: 1024px){
    ${props}
  }`
}

export default mobile;

/**
 *  container:
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    z-index: 100;
    margin-bottom: 10px;
    ${mobile({ height: "50px" })}

 * wrapper:
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
   background-color: #fcf5f5;
   ${mobile({ padding: "5px 0px" })}

   flex-wrap: wrap;
   justify-content: space-between;
   margin: auto;
   height: 100%

  * left:
    flex: 1;
    align-items: center;
    
  * img
    margin-left: 20%;
    text-align: center;
    display: flex;
    ${mobile({ fontSize: "24px" })}
  
  * right
    flex: 1;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}

 */