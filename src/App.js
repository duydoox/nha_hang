import './App.css';
import { Route, Routes } from 'react-router-dom';
import Booked from './page/index.js'
import Dish from './page/Dish.js';
import Order from './page/Order.js';
import Confirm from './page/Confirm.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          element={<Confirm />}
          path="/"
        />
        <Route
          element={<Dish />}
          path="/dish"
        />
      </Routes>
    </div>
  );
}

export default App;
