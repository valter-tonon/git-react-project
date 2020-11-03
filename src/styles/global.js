import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
*{

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
}

html, body{
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
}
body,form{
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    color: #fff;
    background: url(https://images2.alphacoders.com/985/thumb-1920-985381.jpg);
    background-size: cover;
    font-family: 'Open Sans', sans-serif;
}
`