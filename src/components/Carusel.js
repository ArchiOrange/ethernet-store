import React,{Component } from 'react';
import './Carusel.css';
import {Carousel} from 'react-bootstrap';
class Carusel extends Component {
  render(){
    let pointer = this
    let items = this.props.urlImg.map(function (item,i) {
      console.log(pointer.props.path + item);
      return(
        <Carousel.Item key={i}>
          <Carousel.Caption>
            <h3>{item.header}</h3>
            <p>{item.body}</p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src= {item.img === undefined ? pointer.props.path + item : pointer.props.path + item.img }
          />
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
