import styled from 'styled-components'

export const Wrapper = styled.div ` 
    display: flex;
    align-items : center;
    flex-direction: column;
    
    .user{
        margin-top: 30px;
        display: flex;
        background: rgba(255,255,255,0.3);
        align-items: center;
        border-radius: 20px;
        border: 2px solid #666;
        padding: 20px;
        width: 80%;
        color: #222;
    }
    .user-details{
        padding: 20px;
        display: flex;
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
        color: #222;
        
        &:hover{
          color: #7159c1;
        }
    }
    b{
    color: #000945;
    }
    
    .second-column{
      padding: 30px;
    }
    .first-column{
      padding:30px;
      align-items: center;
    }
    
    button{
      padding: 10px 20px;
      background: blue;
      color: #fff;
      border: none;
      border-radius: 10px;
    }
   

`