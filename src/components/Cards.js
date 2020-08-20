import React, {Component} from 'react';
import './Cards.css';
const dataCards = [
{src: 'https://i.pinimg.com/originals/61/e7/8b/61e78b08a8dd18779132812218a9f2a8.jpg', header:"1", display: false},
{src: 'https://cs11.pikabu.ru/post_img/big/2019/11/23/6/157450204217337987.jpg', header:"2", display: false},
{src: 'https://cs13.pikabu.ru/post_img/2019/11/23/6/1574502061140020595.webp', header:"3", display: false},
{src: 'https://cs12.pikabu.ru/post_img/2019/11/23/6/1574502062181028917.jpg', header:"4", display: false},
{src: 'https://cs12.pikabu.ru/post_img/2019/11/23/6/1574502069198350484.webp', header:"5", display: false},
{src: 'https://cs11.pikabu.ru/post_img/2019/11/23/6/1574502117191830960.webp', header:"6", display: false},
{src: 'https://cs11.pikabu.ru/post_img/2019/11/23/6/157450212312474717.webp', header:"7", display: false},
{src: 'https://cs10.pikabu.ru/post_img/2019/11/23/6/157450208716725209.webp', header:"8", display: false},
{src: 'https://cs10.pikabu.ru/post_img/2019/11/23/6/1574502174113457972.webp', header:"9", display: true},
{src: 'https://cs11.pikabu.ru/post_img/2019/11/23/6/1574502218110568800.webp', header:"10", display: false},
{src: 'https://cs10.pikabu.ru/post_img/2019/11/23/6/157450226514674932.webp', header:"11", display: true},
{src: 'https://cs13.pikabu.ru/post_img/2019/11/23/7/1574504922119483453.webp', header:"12", display: true},
{src: 'https://cs10.pikabu.ru/post_img/2019/11/23/7/1574504996168950252.jpg', header:"13", display: true},
]
const WIDTH_CARD = 18
const INITIAL_OFSET_CARDS = -WIDTH_CARD*(dataCards.length-4)
class Cards extends Component {
  constructor(props){
    super(props)
    this.state = {
      ofsetCards: INITIAL_OFSET_CARDS,
      dataCards: dataCards,
      shuffle: false
  }
  }
  render(){
    let items = this.state.dataCards.map(function (item,i) {
      return(
        <li  className="card" key={i} style={{"width": `${WIDTH_CARD}rem`,"display":"inline-block"}}>
          <img src={item.src}   className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{item.header}</h5>
          </div>
        </li>
      )
    })
    console.log(this.state.shuffle);
    return(
      <div className="container cards__container__div" >
        <div className="gallery col-12">
          <ul id="list" style={!this.state.shuffle ? {"transition" :"0.2s","transform": `translate3d(${this.state.ofsetCards}rem, 0px, 0px)`} : {"transform": `translate3d(${this.state.ofsetCards}rem, 10px, 10px)`,"display": "none", "transition" :"0s"}}>
            {items}
          </ul>
          <button className="scroll-button left" style={this.state.ofsetCards === 0 ? {"display": "none"} : null} onClick={this.scrolingLeft}><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></button>
          <button className="scroll-button right" style={this.state.ofsetCards === INITIAL_OFSET_CARDS ? {"display": "none"} : null} onClick={this.scrolingRight}><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></button>
        </div>
      </div>
    );
  }
  scrolingLeft = () =>{
    if (this.state.ofsetCards !== 0) {
      this.setState({ofsetCards: this.state.ofsetCards+WIDTH_CARD})
    }
  }
  scrolingRight = () =>{
    if(this.state.ofsetCards !== INITIAL_OFSET_CARDS)
    this.setState({ofsetCards: this.state.ofsetCards - WIDTH_CARD})
  }
}
export default Cards;
