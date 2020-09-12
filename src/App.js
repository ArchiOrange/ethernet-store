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
import Catalog from './Catalog';
import AddProduct from './AddProduct';
import AddCategory from './AddCategory';
import SimpleMenuCategory from './components/SimpleMenuCategory';
let photo = [
  {img: 'https://i.pinimg.com/originals/61/e7/8b/61e78b08a8dd18779132812218a9f2a8.jpg', header:"1", display: false},
  {img: 'https://cs11.pikabu.ru/post_img/big/2019/11/23/6/157450204217337987.jpg', header:"2", display: false},
  {img: 'https://cs13.pikabu.ru/post_img/2019/11/23/6/1574502061140020595.webp', header:"3", display: false},
  {img: 'https://cs12.pikabu.ru/post_img/2019/11/23/6/1574502062181028917.jpg', header:"4", display: false},
  {img: 'https://cs12.pikabu.ru/post_img/2019/11/23/6/1574502069198350484.webp', header:"5", display: false},
  {img: 'https://cs11.pikabu.ru/post_img/2019/11/23/6/1574502117191830960.webp', header:"6", display: false},
  {img: 'https://cs11.pikabu.ru/post_img/2019/11/23/6/157450212312474717.webp', header:"7", display: false},
  {img: 'https://cs10.pikabu.ru/post_img/2019/11/23/6/157450208716725209.webp', header:"8", display: false},
  {img: 'https://cs10.pikabu.ru/post_img/2019/11/23/6/1574502174113457972.webp', header:"9", display: true},
  {img: 'https://cs11.pikabu.ru/post_img/2019/11/23/6/1574502218110568800.webp', header:"10", display: false},
  {img: 'https://cs10.pikabu.ru/post_img/2019/11/23/6/157450226514674932.webp', header:"11", display: true},
  {img: 'https://cs13.pikabu.ru/post_img/2019/11/23/7/1574504922119483453.webp', header:"12", display: true},
  {img: 'https://cs10.pikabu.ru/post_img/2019/11/23/7/1574504996168950252.jpg', header:"13", display: true},
]
// <Categories states = {stateCategory}/>
const Home = () => {
  return(
        <div className=" main__div container-lg">
          <Navbar/>
          <div className="row row__div">
            <SimpleMenuCategory/>
            <Carusel urlImg={photo} path={""} className="carousel__div col-12 col-sm-9"/>
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
        <Route exact path="/product/:id" component={Product}/>
        <Route exact path="/catalog/:id" component={Catalog}/>
        <Route exact path="/addproduct" component={AddProduct}/>
        <Route exact path="/addcategory" component={AddCategory}/>
      </Router>

    );
  }
}
export default App;
