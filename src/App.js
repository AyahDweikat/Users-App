
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Users from './Components/Users/Users';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Header from './Components/Header/Header';
import TemporaryDrawer from './Components/Users/TemporaryDrawer';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='users'>
        <Header/>
        <Users/>
        {/* <TemporaryDrawer/> */}
      </div>
    </div>
  );
}

export default App;
