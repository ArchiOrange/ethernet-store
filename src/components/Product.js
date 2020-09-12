import React from 'react';
import Navbar from './Navbar';
import Carusel from './Carusel';
import Footer from './Footer';
import  './Product.css'

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product: {
        _id: '',
        price: '',
        availability: null,
        name: '',
        img:[],
        category: '',
        specifications:[],
        discription: ''
      }
    }
  }
  componentDidMount(){
    (async () => {
      let data = {id: this.props.match.params.id}
      let res = await fetch('http://localhost:3001/getproduct/',{
        method: 'POST',
        headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
      });
      let result = await res.json();
      this.setState({product: result})

    })()
  }
  render() {
    let specifications = this.state.product.specifications.map(function (specification, i) {
      return(
        <div key={i} className='justify-content-between container row' style={{margin: 0}}>
          <div className="specification col-5" style={{background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAAAAAA+i0toAAAAAnRSTlMA/1uRIrUAAAAMSURBVHheY7j1/z8ABY8C2UtBe8oAAAAASUVORK5CYII=) 0 76% repeat-x"}}>
            <span className="lead text-muted ditail-item">{specification.name}</span>
          </div>
          <div className="col-5">
            <span className="lead text-muted ditail-item">{`${specification.value} ${specification.demension}`}</span>
          </div>
        </div>
      )
    })
    console.log(this.props.match.params.id);
    return (
        <div className=" main__div container-lg">
          <Navbar/>
          <div className="block">
            <div className="col-12 preview row__div row justify-content-between">
              <div className="img-product col-12 col-sm-5">
                <Carusel path={"http://localhost:3001/img/"} urlImg={this.state.product.img} className={null}/>
              </div>
              <div className=" col-12 col-sm-3">
                <h1 className="jumbotron-heading">{this.state.product.price}</h1>
                <p className="lead text-muted"> В наличии
                  <svg style={{"color": "green"}} width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </p>
                <p>
                <button className="btn button__blue  my-2">Купить</button>
                </p>
              </div>
            </div>
            <div className="col-12 preview row__div row">
              <div className="container">
                <h2 className="jumbotron-heading">Описание</h2>
                <p className="lead text-muted">{this.state.product.discription}</p>
              </div>
          </div>
          <div className="col-12 preview row__div row" style={{"padding": "0","backgroundColor": "rgb(238, 238, 238)"}}>
            <div className="col-12 col-sm-8 ditail" style= {{"padding": "15px"}}>
              <h2>Характиристики</h2>
              {specifications}
            </div>
            <div className="col-12 col-sm-4 article">
              <div className="card" style={{"borderRadius": "10px"}}>
                <img src="https://cs11.pikabu.ru/post_img/big/2019/11/23/6/157450204217337987.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Название карточки</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button className="btn btn-primary">Переход куда-нибудь</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          <Footer/>
        </div>
      )
  }
}
export default Product;
