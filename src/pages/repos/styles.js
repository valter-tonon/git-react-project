import styled from 'styled-components'

export const Wrapper = styled.div ` 

    display: flex;
    align-items : center;
    padding: 100px;
    flex-direction: column;
    
    .user{
        display: flex;
        background: rgba(255,255,255,0.3);
        align-items: center;
        border-radius: 20px;
        border: 2px solid #666;
        padding: 20px;
        width: 500px;
        color: #222;
    }
    .user-details{
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    }

    h3{
        margin-bottom: 5px;
        font-size: 16px;
    }

    a{
        text-decoration: none;
        color: blue;
    }

   

`