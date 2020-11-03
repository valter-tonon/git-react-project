import styled from 'styled-components'

export const Wrapper = styled.form ` 
display: flex;
justify-content: center;
padding-top: 180px;
input {
    
    width:400px;
    height: 50px;
    border-bottom-left-radius:20px;
    border-top-left-radius: 20px;
    background: linear-gradient(145deg, #1c1d21, #17181c);
    box-shadow:  3px 3px 6px #101114, 
                 -3px -3px 6px #24252a;
    padding: 10px 20px;
    border: none;
    font-size: 20px;
    color: #fff;

    ::placeholder{
        color: #444;
    }
}
a {

    height: 50px;
    display: flex;
    justify-content: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    background: linear-gradient(145deg, #1c1d21, #17181c);
    box-shadow:  3px 3px 6px #101114, 
                 -3px -3px 6px #24252a;
    transition: box-shadow 1s;
    width: 50px;

    svg{
        color: #fff;
        width: 30px;
    }

    &:hover{
        background: linear-gradient(145deg, #17181c,#1c1d21);
        box-shadow:inset  3px 3px 6px #111, 
                    -3px -3px 6px #17181c;
        }
    
    
}

`