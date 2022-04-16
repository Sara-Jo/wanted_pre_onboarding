import { useState } from "react";
import styled from "styled-components";

export default function Toggle() {
    const [isBasic, setIsBasic] = useState(true);
    return (
        <ToggleButton onClick={() => setIsBasic(!isBasic)} isBasic={isBasic}>
            <Mode isBasic={isBasic}>기본</Mode>
            <Mode isBasic={!isBasic}>상세</Mode>
            <ActiveBackground isBasic={isBasic} />
        </ToggleButton>
    );
}

const ToggleButton = styled.div`
    width: 400px;
    height: 50px;
    border-radius: 40px;
    background-color: #e4e4e4;
    margin: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Mode = styled.div`
    padding: 5px 80px;
    font-size: 18px;
    font-weight: bold;
    z-index: 100;
`;

const ActiveBackground = styled.div`
    width: 196px;
    height: 44px;
    position: absolute;
    border-radius: 50px;
    background-color: #ffffff;
    transition: 0.4s ease-out;
    transform: ${props => props.isBasic ? "translatex(-50%)" : "translatex(50%)"};
`;