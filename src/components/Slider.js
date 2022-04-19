import { useState } from "react";
import styled from "styled-components";

export default function Slider() {
    const [percent, setPercent] = useState(50);
    const changePercent = (e) => setPercent(e.target.value);
    const handleButtonClick = (e) => setPercent(e.target.value);

    return (
        <SliderBox>
            <DisplayBox>
                <PercentValueArea>{percent}</PercentValueArea>
                <PercentSignArea>%</PercentSignArea>
            </DisplayBox>
            <RangeBox>
                <RangeInput type="range" min="0" max="100" value={percent} onChange={changePercent}/>
                <RangeCircle left={7} isActive={true}></RangeCircle>
                <RangeCircle left={100} isActive={percent >= 25 ? true : false}></RangeCircle>
                <RangeCircle left={195} isActive={percent >= 50 ? true : false}></RangeCircle>
                <RangeCircle left={292} isActive={percent >= 75 ? true : false}></RangeCircle>
                <RangeCircle left={388} isActive={percent == 100 ? true : false}></RangeCircle>
            </RangeBox>
            <ButtonBox>
                <IndexButton onClick={handleButtonClick} value="1">1%</IndexButton>
                <IndexButton onClick={handleButtonClick} value="25">25%</IndexButton>
                <IndexButton onClick={handleButtonClick} value="50">50%</IndexButton>
                <IndexButton onClick={handleButtonClick} value="75">75%</IndexButton>
                <IndexButton onClick={handleButtonClick} value="100">100%</IndexButton>
            </ButtonBox>

        </SliderBox>
    );
}

const SliderBox = styled.div`
    width: 400px;
    margin: 70px;
`;

const DisplayBox = styled.div`
    border: 1px solid #DADADA;
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #F9F9F9;
    height: 60px;
    margin-bottom: 10px;
`;

const RangeBox = styled.div`
    position: relative;
    margin-bottom: 10px;
`;

const PercentValueArea = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 5px;
`;
const PercentSignArea = styled.div`
    margin: 20px;
    color: #B0B0B0;
`;

const RangeInput = styled.input`
    width: 100%;
    height: 5px;
    cursor: pointer;
    border-radius: 50px;
    -webkit-appearance: none;
    background: linear-gradient(
        to right,
        #22AFAF 0%,
        #22AFAF ${(props) => props.value}%,
        #EBEBEB ${(props) => props.value}%,
        #EBEBEB 100%
    );
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #22AFAF;
        border: solid 3px white;
        height: 23px;
        width: 23px;
        border-radius: 100%;
        box-shadow: 0 1px 1px 0 rgb(156 163 175);
    }
`;

const RangeCircle = styled.div`
    position: absolute;
    background: ${props => props.isActive ? "#22AFAF" : "#EBEBEB"};
    width: 13px;
    height: 13px;
    border-radius: 100px;
    bottom: 0.1px;
    left: ${props => props.left}px;
    z-index: -1;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const IndexButton = styled.button`
    border: none;
    border-radius: 10px;
    width: 40px;
    height: 20px;
    font-size: 11px;
    font-weight: bold;
    color: #B1B1B1;
    &:hover{
        background-color: #22AFAF;
        color: #FFFFFF;
    }
`;