import  './Product.css'
import Navbar from './Navbar';
import Carusel from './Carusel';
import Footer from './Footer';
import React from 'react';
function Product(props) {
  return(
    <div className=" main__div container-lg">
      <Navbar/>
      <div className="row row__div block">
        <div className="img-product  container col-12 col-sm-5">
          <Carusel className={null}/>
        </div>
        <div className="col-12 col-sm-7 preview">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-sm-8">
                <h2 className="jumbotron-heading">Описание</h2>
                <p className="lead text-muted">свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов веб-интерфейса, включая JavaScript-расширения.</p>
              </div>
              <div className=" col-12 col-sm-3">
                <h1 className="jumbotron-heading">1 000</h1>
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
          </div>
      </div>
      <div className="col-12 col-sm-8 ditail">
        <h2>Характиристики</h2>
        <div className='justify-content-between container row' style={{margin: 0}}>
          <div className="specification col-5" style={{background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAAAAAA+i0toAAAAAnRSTlMA/1uRIrUAAAAMSURBVHheY7j1/z8ABY8C2UtBe8oAAAAASUVORK5CYII=) 0 76% repeat-x"}}>
            <span className="lead text-muted ditail-item">Объем</span>
          </div>
          <div className="col-5">
            <span className="lead text-muted ditail-item">3</span>
          </div>
        </div>
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
      <Footer/>
    </div>
  )
}
export default Product;
