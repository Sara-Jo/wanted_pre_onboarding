import { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { ImEye, ImEyeBlocked } from 'react-icons/im'; 

export default function Input() {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const validator = (username, provider) => {
        if (!(email.includes('@')) || username.length === 0 || provider.length === 0 || !(provider.includes('.')) || 
        provider.split('.')[0].length === 0 || provider.split('.')[1].length === 0) return false
        else return true
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const [username, provider] = email.split('@');
        if (validator(username, provider)) return setIsEmailValid(true);
        else return setIsEmailValid(false);
    }
    const handleOnblur = (e) => {
        const [username, provider] = email.split('@');
        if (validator(username, provider)) return setErrorMessage('');
        else return setErrorMessage('Invalid e-mail address.');
    }

    return (
        <InputBox>
            <InputArea>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="E-mail" value={email} onChange={handleEmailChange} onBlur={handleOnblur}></input>
                <i><FaCheckCircle color={isEmailValid ? "#22AEAE" : "#D4D4D4"}/></i>
                <span>{errorMessage}</span>
            </InputArea>
            <InputArea>
                <label htmlFor="password">Password</label>
                <input type={isPasswordHidden ? "password" : "text"} id="password" placeholder="Password"></input>
                <i onClick={() => setIsPasswordHidden(!isPasswordHidden)}>
                    {isPasswordHidden ? <ImEyeBlocked size="20" color="#5B5B5B"/> : <ImEye size="20" color="#22AEAE"/>}  
                </i>
            </InputArea>
        </InputBox>
    );
}

const InputBox = styled.div`
    width: 350px;
    margin: 30px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;

    label {
        font-size: 12px;
        font-weight: bold;
        color: #919191;
        margin: 5px;
    }
    
    input {
        width: 90%;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #DFDFDF;
        background-color: #F6F6F6;
        padding-left: 13px;

        &::placeholder {
            padding: 5px;
            color: #DCDCDC;
        }
    }

    i {
        cursor: pointer;
        position: relative;
        left: 300px;
        bottom: 28px;
    }

    span {
        color: #a60600;
        font-size: 12px;
        position: relative;
        bottom: 15px;
        left: 5px;
    }
`;