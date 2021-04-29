import './App.css';
import Fetch from './components/Fetch';
import Search from './components/SearchBar';

function App() {

  return (
    <div className="container">
      <div className="col-xs-12">
        <h1>24 Hour Forecast</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <Fetch />
              </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
