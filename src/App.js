import logo from './logo.svg';
import './App.css';
import ManageTasks from './Components/ManageTasks'
import AddTask from './Components/AddTask'

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      <AddTask/>
        <div style={{flexBasis:'100%', height:0}}></div>
      <ManageTasks/>
    </div>
  );
}

export default App;
