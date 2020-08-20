import React from 'react';
import "./Categories.css";
class Categories extends React.Component {
  render() {
    let hoverMenu = this.props.states.map(function (item,i) {
      return(
        <HoverMenu key={i} dataHover={item}/>
      )
    })
    return (
    <ul  className="category__ul col-12 col-sm-3 list-group">
        {hoverMenu}
    </ul>
    );
  }
}
class HoverMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  render(){
    let blocks = this.props.dataHover.hoverMenu.map(function (hoverMenu,i) {
      let secondLevel = hoverMenu.secondLevel.map(function (secondLevel,j) {
        return(<ItemsHoverMenu key={j} secondLevel={secondLevel}/>)
      })
        return(
          <div key={i} style={{"width":"100%"}}>
            <h3 className="name-category">{hoverMenu.firstLavel.name}</h3>
              <ul className="list-group group-menu row list-group-horizontal">
                {secondLevel}
              </ul>
          </div>
        )
    })
    return(
      <div onMouseLeave={this.handClick} onMouseEnter={this.handClick}>
        <button className=" category-item__a list-group-item" style={{"width": "100%"}}>{this.props.dataHover.menuRootInfo}</button>
        <div className="hover-menu" style={this.state.show ? {"display" : "block"} : {"display" : "none"}}>
          {blocks}
        </div>
      </div>
    )
  }
  handClick = () =>{
    this.setState({show: !this.state.show})
  }
}
class ItemsHoverMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopUpMenu: false
    }
  }
  render(){
    let popUpMenu = this.props.secondLevel.popUpMenu.map(function (popUpMenu,i) {
      return(<PopUpMenu key={i} popUpMenu={popUpMenu} />)
    })
    return(
      <li onMouseLeave={this.showPopUpMenu} onMouseEnter={this.showPopUpMenu} className=" item-menu item-menu__li list-group-item">{this.props.secondLevel.nameCategory}
        <ul className=" pop-up-menu list-group" style={this.state.showPopUpMenu ? {"display": "block"} : null}>
          {popUpMenu}
        </ul>
      </li>
    )
  }
  showPopUpMenu = () => {
    this.setState({showPopUpMenu: !this.state.showPopUpMenu})
  }
}
function PopUpMenu(props) {
  return(
    <li className=" item-menu list-group-item">{props.popUpMenu.popUpMenuName}</li>
  )
}
export default Categories;
