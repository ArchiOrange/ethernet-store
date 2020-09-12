import React from 'react';
import './Catalog.css'
import Navbar from './components/Navbar'
import {Link} from 'react-router-dom';
class Catalog  extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        products: [],
        filter: {}
      }
    }
    render(){
      let products = this.state.products.map(function (product,i) {
        return(
            <div key={i} className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4 " style={{"padding": "1.25rem"}}>
                    <img src={'http://localhost:3000/img/'+product.img[0]} className="card-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <Link className="card-title" to={"/product/"+product._id} style={{"text-decoration": "none", "color": "#000","font-size": "1.25rem", "font-weight": "500"}}>{product.name}</Link>

                      <p className="card-text">{`[${product.specifications[6].value}, ${product.specifications[5].value} ${product.specifications[5].demension}, ${product.specifications[7].value} ${product.specifications[7].demension}, ${product.specifications[4].value} ${product.specifications[4].demension}] `}</p>
                    </div>
                  </div>
                </div>
              </div>
        )
      })
      return (
      <div className=" main__div container-lg">
        <Navbar/>
        <div className="row">
          <div className="search col-sm-3">
            <Input nameInput={"Цена"} minValue={0} maxValue={25} />
            <Checkboxs nameCheckbox={"Серия"} checkboxs={[{name:"i5"},{name:"i5"},{name:"i5"},{name:"i5"}]}/>
          </div>
          <div className="result col-sm-9">
          {products}
        </div>
        </div>
      </div>
    )
  }
    componentDidMount(){
      (async () => {
        let res = await fetch('http://localhost:3001/getcatalog/',{
          method: "POST",
          headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
          body: JSON.stringify({id: this.props.match.params.id})
        });
        let result = await res.json();
        console.log(this.props.match.params.id,result);
        this.setState({products: result})
      })()
    }
}
function Input (props){
  return (
    <div className="col-12">
      <label className="header" htmlFor="exampleFormControlInput1">{props.nameInput}</label>
      <div className="row">
        <div className="col-6">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={props.minValue}/>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder={props.maxValue}/>
        </div>
      </div>
    </div>
  )
}
function Checkboxs(props) {
  const checkboxs = props.checkboxs.map(function (checkbox,i) {
    return(
      <div key={i} className=" checkbox custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id={"customCheckDisabled"+i}/>
        <label className="custom-control-label" htmlFor={"customCheckDisabled"+i}>{checkbox.name}</label>
      </div>
    )
  })
  return(

    <div className="custom-control checkboxs custom-checkbox">
      <label className="header" htmlFor="exampleFormControlInput1">{props.nameCheckbox}</label>
      {checkboxs}
    </div>
  )
}
export default Catalog;
