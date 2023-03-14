import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {GlobalProvider} from "./Context/GlobalState";

function App() {

  console.log("global1")

  return (
    <div className="container">
      <div className='row'>
      <div className='col-md-12' >
        <GlobalProvider>
          <Header/>
        </GlobalProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
