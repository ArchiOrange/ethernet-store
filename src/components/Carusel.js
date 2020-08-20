import React,{Component } from 'react';
import './Carusel.css';
import {Carousel} from 'react-bootstrap';
class Carusel extends Component {
  constructor(props){
  super(props)
  this.state ={
    imgContent: [
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
  }

}
  render(){
    console.log(this.props);
    let items = this.state.imgContent.map(function (item,i) {
      return(
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={item.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return(
      <Carousel className={this.props.className}>
        {items}
      </Carousel>

    )
  }
}
export default Carusel;
