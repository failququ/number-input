import './App.css';
import NumberInput from './NumberInput';

function App() {
  return (
    <div className="App">
      <NumberInput maxValue={1000} minValue={-500}/>
    </div>
  );
}

export default App;
