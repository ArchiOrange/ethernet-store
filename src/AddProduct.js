'use stracte'
import React, {Component} from 'react';
import "./all.css";
let  a = {
    price: '',
    availability: null,
    name: '',
    img:[],
    category: '',
    specifications:[],
    discription: ''
  }
class AddProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      product: {
        price: '',
        availability: null,
        name: '',
        img:[],
        category: '',
        specifications:[],
        discription: ''
      },
      category:[],
      img:[]
    }
  }
  render(){
    let pointer = this
    let specifications = this.state.product.specifications.map(function (specification,i) {
      return(
        <div key={i} className="input-group mt-3 mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">{specification.name}</span>
          </div>
          <input type="text" id={i} onChange={pointer.updateSpecifications} className="form-control" value={specification.value}/>
        </div>
      )
    })
    return(
      <div className="container">
        <form onSubmit={this.submitForm}>
          <div className="container row">
            <div className="col-9 input-group mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Название товара</span>
              </div>
              <input type="text" aria-label="First name" id="name" value={this.state.product.name} onChange={this.propertyChange} className="form-control"/>
            </div>
            <div className="col-9 input-group  mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Цена</span>
              </div>
              <input id="price"  type="text" aria-label="First name" value={this.state.product.price} onChange={this.propertyChange} className="form-control"/>
            </div>
            <div className="col-9 input-group mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Описание</span>
              </div>
              <input type="text" aria-label="First name" id="discription" value={this.state.product.discription} onChange={this.propertyChange} className="form-control"/>
            </div>
          </div>
          <div className="container row">
            <h1 className="col-9">Категории</h1>
            <Category addspecifications={this.addSpecifications} updateData={this.categoryChange} category={this.state.category}/>
          </div>
          <div className="row col-9">
            <h1 className="col-12">Характеристики</h1>
            {specifications}
            </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
          <input type="file" name="filedata" multiple={true} id="file" onChange={this.downloadFile}/>
        </form>

      </div>
    )
  }
  downloadFile = (event) => {
    let img = event.target.files
    this.setState({img: img})
  }
  updateSpecifications = (event) => {
    let product = this.state.product;
    product.specifications[event.target.id].value = event.target.value;
    this.setState({product: product});

  }
  submitForm = (event) => {
    (async () => {
      var formData = new FormData()
      let product = JSON.stringify(this.state.product)
      formData.append('product',product)
      for (var i = 0; i < this.state.img.length; i++) {
        formData.append('filedata', this.state.img[i])
      }

        let res = await fetch('http://localhost:3001/addproduct',{
        method: 'POST',
        body: formData
      });
      let result = await res.json();
      if (result.err === null ) {
        alert("Продукт успешно добавлен")
        this.setState({product: {
            price: '',
            availability: null,
            name: '',
            img:[],
            category: '',
            specifications:[],
            discription: ''
          }})
        this.setState({img: []})
        this.setState({category: []})
      }else{
        alert("Ошибка!")
        console.log(result.err);
      }
    })()
    event.preventDefault();
  }
  addSpecifications = (categorySpecifications) =>{
    let product = this.state.product
    product.category=categorySpecifications._id
    product.specifications = categorySpecifications.specifications
    this.setState({product:product})
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
    let data ={
      id: event.target.value
    }
    if(event.target.value!=='0'){
      (async () => {
        let res = await fetch('http://localhost:3001/getspecifications',{
          method: 'POST',
          headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
          body: JSON.stringify(data)
        });
        let result = await res.json();
        this.props.addspecifications(result)
      })()
    }
  }
  render(){
    let option = this.state.category.map(function (item,i) {
      return(
        <option key={i} id={i} value={item.id}>{item.name}</option>
      )
    })
    return(
      <div className={this.state.category.length === 0 ? "prefetch col-9" : "col-9"}>
        <select  value={this.state.category} onChange={this.handleChange} style={this.state.category.length===0 ?  {"display": "none"} : null} required={true} id={this.props.id} className="custom-select custom-select-lg mt-3 mb-3">
          <option defaultValue='selected' value='0'>Выберите категорию</option>
          {option}
        </select>
      </div>
    )
  }
  componentDidMount(){
    (async () => {
      let res = await fetch('http://localhost:3001/getcategorys',{
        method: 'GET',
        headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      });
      let result = await res.json();
      this.setState({category: result})

    })()
  }
}
export default AddProduct;
