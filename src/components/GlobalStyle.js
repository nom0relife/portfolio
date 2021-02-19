import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
   background:#1b1b1b; 
   font-family: 'Roboto', sans-serif;
}

button{
    font-weight:bold;
    font-size:1.1rem;
    cursor:pointer;
    border:3px solid #23d997;
    padding:1rem 2rem;
    background:transparent;
    color:white;
    transition:all .5s ease;

    &:hover{
        background-color:#23d997;
        color:white;
    }
    
}

    h2 {
        font-weight:lighter;
        font-size:4rem;
    }

    h3 {
        color:white;

    }

    h4{
        font-weight:bold;
        
    }
    
    a {
        font-size:1.1rem;
    }

    span{
        font-weight:bold;
        color:#23d997;
    }

    p {
        padding:3rem 0rem;
        color:#ccc;
        font-size:1.4rem;
        line-height:150%;
    }
`;

export default GlobalStyle;
