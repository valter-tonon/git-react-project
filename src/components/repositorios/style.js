import styled from 'styled-components'

export const Wrapper = styled.div `
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.6);
  width: 80%;
  color: #222;
  border-radius: 10px;
  label{
    margin-bottom: 10px;
  }
  
  a{
      color: #222;
      
      &:hover{
        color:#7159c1;
      }
  }

`