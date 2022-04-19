import { useState } from "react";
import styled from "styled-components";

export default function Tab() {
    const [activeTab, setActiveTab] = useState("감자");

    return (
        <TabBox>
            <TabArea onClick={() => setActiveTab("감자")} isActive={activeTab === "감자" ? true : false}>감자</TabArea>
            <TabArea onClick={() => setActiveTab("고구마")} isActive={activeTab === "고구마" ? true : false}>고구마</TabArea>
            <TabArea onClick={() => setActiveTab("카레라이스")} isActive={activeTab === "카레라이스" ? true : false}>카레라이스</TabArea>
            <ActiveBar activeTab={activeTab}/>
        </TabBox>
    );
}

const TabBox = styled.div`
    width: 450px;
    height: 40px;
    display: flex;
    margin: 70px;
    cursor: pointer;
`;

const TabArea = styled.div`
    width: 150px;
    padding: 10px;
    border-bottom: 2px solid #eeeeee;
    text-aligh: center;
    color: ${props => props.isActive ? "#000000" : "#b5b5b5"};
    font-weight: bold;
`;

const ActiveBar = styled.div`
    position: absolute;
    background-color: #22AFAF;
    width: 150px;
    height: 2px;
    margin: 38px 0;
    transition: 0.4s ease-out;
    transform: ${props => props.activeTab === '감자' ? "translatex(0)" : (props.activeTab === '고구마' ? "translatex(150px)" : "translatex(300px)")};
`;