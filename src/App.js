// App.js
import "./App.css";
import AllProducts from "./components/AllProducts";
import CartPage from "./components/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
