import React from 'react';
import './Search.css'
import Navbar from './components/Navbar'

function Search () {
  return (
    <div className=" main__div container-lg">
      <Navbar/>
      <div className="row">
        <div className="search col-sm-3">
          <Input nameInput={"Цена"} minValue={0} maxValue={25} />
          <Checkboxs nameCheckbox={"Серия"} checkboxs={[{name:"i5"},{name:"i5"},{name:"i5"},{name:"i5"}]}/>
        </div>
        <div className="result col-sm-9">
          <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 " style={{"padding": "1.25rem"}}>
                  <img src="https://cs11.pikabu.ru/post_img/2019/11/23/6/1574502218110568800.webp" className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Название карточки</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

  )
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
export default Search;
