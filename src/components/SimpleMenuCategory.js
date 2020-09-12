import React from 'react';
import {Link} from 'react-router-dom';
import "./SimpleMenuCategory.css";
class SimpleMenuCategory extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categorys: []
    }
  }
  render() {
    let hoverMenu = this.state.categorys.map(function (item,i) {
      return(
        <Link key={i} className=" category-item__a list-group-item" style={{"width": "100%","text-decoration": "none", "color": "#000"}} to={`/catalog/${item.id}`}>{item.name}</Link>
      )
    })
    return (
    <ul  className="category__ul col-12 col-sm-3 list-group">
        {hoverMenu}
    </ul>
    );
  }
  componentDidMount(){
    (async () => {
      let res = await  fetch('http://localhost:3001/getcategorys/',{
        method: "GET"
      })
      let result = await res.json()
      this.setState({categorys: result})
      console.log(result);
    })()
  }
}
export default SimpleMenuCategory;
