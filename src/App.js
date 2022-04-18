import './App.css';
import Toggle from "./components/Toggle";
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

const dropdownItems = ["BTCUSD.PERP", "ETHUSD.PERP", "BCHUSD.PERP", "LTCUSD.PERP", "XRPUSD.PERP", "1000SHIBUSD.PERP"];

function App() {
  return (
    <div className="App">
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown items={dropdownItems}/>
    </div>
  );
}

export default App;
