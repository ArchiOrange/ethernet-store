import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Carusel from './components/Carusel';
import Cards from './components/Cards';
import Footer from './components/Footer';
import stateCategory from './dataCategory'
import Product from './components/Product';
import Search from './Search';
import AddProduct from './AddProduct';
import AddCategory from './AddCategory';

const Home = () => {
  return(
        <div className=" main__div container-lg">
          <Navbar/>
          <div className="row row__div">
            <Categories states = {stateCategory}/>
            <Carusel className="carousel__div col-12 col-sm-9"/>
            <Cards/>
          </div>
          <Footer/>
        </div>
  )
}
class App extends React.Component {
  render(){
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/addproduct" component={AddProduct}/>
        <Route exact path="/addcategory" component={AddCategory}/>
      </Router>

    );
  }
}
export default App;
