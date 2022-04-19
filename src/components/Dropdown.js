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
                <div className="selectedItem">{selectedItem}</div>
                <div><i><AiFillCaretDown /></i></div>
            </SelectItemBox>
            {toggle &&
                <ItemsArea>
                    <InputArea>
                        <i><FiSearch size="13" color="#c4c4c4"/></i>
                        <input type="text" value={inputText} onChange={handleInputText} placeholder="Search Symbol"/>
                    </InputArea>
                    <div className="item" id="All Symbols" onClick={clickItem}>All Symbols</div>
                    {inputText ? searchedItems.map((item) => <div className="item" id={item} onClick={clickItem}>{item}</div>) : items.map((item) => <div className="item" id={item} onClick={clickItem}>{item}</div>)}
                </ItemsArea>
            }
            
        </DropdownBox>
    );
}

const DropdownBox = styled.div`
    width: 250px;
    height: 350px;
    margin: 70px;
    padding: 5px;
`;

const SelectItemBox = styled.div`
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    width: 237px;
    height: 19px;
    cursor: pointer;
    background-color: #FCFCFC;
    margin-bottom: 5px;
    text-align: left;
    padding: 10px 0 5px 10px;
    display: flex;
    color: #7a7a7a;
    font-size: 13px;
    justify-content: space-between;

    .selectedItem{
        font-weight: bold;
    }

    i {
        margin: 10px;
    }
`;

const ItemsArea = styled.div`
    background-color: #FCFCFC;
    width: 247px;
    height: 305px;
    border: 1px solid #DFDFDF;
    border-radius: 5px;

    .item {
        width: 207px;
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

    
`;

const InputArea = styled.div`
    display: flex;
    border-bottom: 1px solid #c4c4c4;
    align-items: center;
    padding: 0 0 0 10px;

    input {
        width: 86%;
        height: 35px;
        border: none;
        padding: 0 0 0 5px;
        &::placeholder {
            color: #c4c4c4;
        }
} 
`;