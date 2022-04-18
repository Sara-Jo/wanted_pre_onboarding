import { useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

export default function Dropdown({ items }) {
    const [toggle, setToggle] = useState(false);
    const [selectedItem, setSelectedItem] = useState("All Symbols");
    const [inputText, setInputText] = useState("");
    const [searchedItems, setSearchedItems] = useState("");
    const clickItem = (e) => {
        setSelectedItem(e.target.id);
        setToggle(false);
    }
    const handleInputText = (e) => {
        setInputText(e.target.value);
        setSearchedItems(
            items.filter((item) => item.toLowerCase().includes(inputText.toLowerCase()))
        );
    }

    return (
        <DropdownBox>
            <SelectItemBox onClick={() => setToggle(true)}>
                {selectedItem}
                <i><AiFillCaretDown /></i>
            </SelectItemBox>
            {toggle &&
                <ItemsArea>
                    <i><FiSearch size="13" color="#c4c4c4"/></i>
                    <input type="text" value={inputText} onChange={handleInputText} placeholder="Search Symbol"/>
                    <div id="All Symbols" onClick={clickItem}>All Symbols</div>
                    {inputText ? searchedItems.map((item) => <div id={item} onClick={clickItem}>{item}</div>) : items.map((item) => <div id={item} onClick={clickItem}>{item}</div>)}
                </ItemsArea>
            }
            
        </DropdownBox>
    );
}

const DropdownBox = styled.div`
    width: 250px;
    height: 350px;
    background-color: #F6F6F6;
    margin: 30px;
    padding: 5px;
`;

const SelectItemBox = styled.div`
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    width: 228px;
    height: 19px;
    cursor: pointer;
    background-color: #FCFCFC;
    margin-bottom: 5px;
    font-size: 13px;
    color: #7a7a7a;
    font-weight: bold;
    text-align: left;
    padding: 10px; 0 0 10px;

    i {
        position: absolute;
        left: 260px;
        top: 540px;
    }
`;

const ItemsArea = styled.div`
    background-color: #FCFCFC;
    width: 247px;
    height: 305px;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    
    input {
        width: 85%;
        height: 30px;
        border: none;
        border-bottom: 1px solid #c4c4c4;
        padding: 0 0 0 35px;
        &::placeholder {
            color: #c4c4c4;
        }
    } 

    div {
        width: 207px;
        list-style: none;
        padding: 10px 20px;
        font-size: 13px;
        color: #7a7a7a;
        cursor: pointer;
        font-weight: bold;
        text-align: left;
        &:hover {
            background-color: #BFBFBF;
        }
    }

    i {
        position: absolute;
        bottom: 92px;
        left: 50px;
    }
`;