import './App.css';
import styled from "styled-components";
import Toggle from "./components/Toggle";
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

const dropdownItems = ["BTCUSD.PERP", "ETHUSD.PERP", "BCHUSD.PERP", "LTCUSD.PERP", "XRPUSD.PERP", "1000SHIBUSD.PERP"];

function App() {
  return (
    <div className="App">
      <Container>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown items={dropdownItems}/>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
