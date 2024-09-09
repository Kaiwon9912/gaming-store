import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';
import Cart from './pages/cart';
import Login from './pages/login';

import MainLayout from './layoutPage/mainLayout';
import Search from './pages/search';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/detail"
          element={
            <MainLayout>
              <Detail />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
          
              <Login />
         
          }
        />
        <Route
          path="/search"
          element={
            <MainLayout>
              <Search/>
              </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
