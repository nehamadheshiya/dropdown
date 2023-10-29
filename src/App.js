import './App.css';
import DropDown from './DropDown';

function App() {
  const items = ["Yes", "No", "Can't say"];
  return (
    <div className="App">
     <DropDown items={items}/>
    </div>
  );
}

export default App;
