import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, fetchSales } from './redux/actions';
import ProductTable from './components/ProductTable/ProductTable';
import AddItem from './components/AddNew/AddNew';
import { Report } from './Pages/Report';
import { Sales } from './Pages/Sales';
import { Inventory } from './Pages/Inventory';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchSales());
  }, [dispatch]);

 

  
  return (
    <div className="App">
    <nav className="navbar">
      <h3>Inventory Management System</h3>
      <Link to="/" className="nav-link">Report</Link>
      <Link to="/sales" className="nav-link">Sales</Link>
      <Link to="/inventory" className="nav-link">Inventory</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Report />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  </div>
  );
}

export default App;
