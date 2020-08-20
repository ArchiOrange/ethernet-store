import React, {Component} from 'react';
class AddProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      product: {
        price: null,
        availability: null,
        name: '',
        img:[],
        category: [null],
        specification:{},
        discription: null
      },
      category: [{name: "Видеокарты", id:"0"},{name: "Материнские платы", id:"1" },{name: "Процессоры", id:"2" },{name: "SSD", id:"3"},{name: "ОЗУ", id:"4"},{name: "Корпус", id:"5" },{name: "HDD", id: "6"},{name: "Блки питания", id:"7" }],
      newCategory: null
    }
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.submitForm}>
          <div className="col-9">
            <div className="input-group mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Название товара</span>
              </div>
              <input type="text" aria-label="First name" id="name" onChange={this.propertyChange} className="form-control"/>
            </div>
            <div className="input-group  mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Цена</span>
              </div>
              <input id="price"  type="text" aria-label="First name" onChange={this.propertyChange} className="form-control"/>
            </div>
            <div className="input-group mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Описание</span>
              </div>
              <input type="text" aria-label="First name" id="discription" onChange={this.propertyChange} className="form-control"/>
            </div>
          </div>
          <div className="container row">
            <h1 className="col-12">Категории</h1>
            <Category  updateData={this.categoryChange} category={this.state.category}/>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    )
  }
  submitForm = (event) => {
    (async () => {
      let res = await fetch('http://localhost:3001/addproduct',{
        method: 'POST',
        headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
        body: JSON.stringify(this.state.product)
      });
      let result = await res.json();
      console.log(result);

    })()
    event.preventDefault();
  }
  categoryChange = (category) => {
    console.log(category);
    let product = this.state.product
    product.category[category.i] = category.value
    this.setState({product: product})
  }
  propertyChange = (event) => {
    let product = this.state.product
    product[event.target.id] = event.target.value
    this.setState({product: product})
  }
}
class  Category extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: this.props.category
    }
  }
  handleChange = (event) => {
    console.log(event.target.value);
    let category = {
      value: event.target.value,
      i: event.target.id
    }
    this.props.updateData(category)
  }
  render(){
    let option = this.state.category.map(function (item,i) {
      return(
        <option key={i} id={i} value={item.id}>{item.name}</option>
      )
    })
    return(
      <select onChange={this.handleChange} required={true} id={this.props.id} className="custom-select custom-select-lg mt-3 mb-3">
        <option defaultValue='selected'>Выберите категорию</option>
        {option}
      </select>
    )
  }
}
export default AddProduct;
