
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Users from './Components/Users/Users';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='users'>
        <Users/>
      </div>
    </div>
  );
}

export default App;
