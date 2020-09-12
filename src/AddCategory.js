import React, {Component} from 'react';
const categoryNull = {
    name: '',
    specifications: []
}
class AddCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: {
        name: '',
        specifications: []
      },
    }
  }

  changeCategory = (specification) => {

    let category = this.state.category
    category.specifications[specification.i][specification.name] = specification.value

    this.setState({category: category})

  }

  addSpecification = () => {
    let category = this.state.category;
    category.specifications.push({demension: '', name: '',value: ''});
    this.setState({category: category})
  }
  submitForm = (event) => {
    (async () => {
      let res = await fetch('http://localhost:3001/addcategory',{
        method: 'POST',
        headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
        body: JSON.stringify(this.state.category)
      });
      let result = await res.status;
      if(result===200){
        alert("Категория добавлена")
        this.setState({category:categoryNull})
      }

    })()
    let category = this.state.category
    category.name = ''
    this.setState({category: category})
    event.preventDefault();
  }
  nameChange = (event) => {
    let category = this.state.category
    category.name = event.target.value
    this.setState({category: category})
  }
  render() {
    let pointer = this
    let specifications = this.state.category.specifications.map(function (specification, key) {
      return(
        <Specification key={key} keyid={key} changeCategory={pointer.changeCategory} name={specification.name} demension={specification.demension}/>
      )
    })
    return(
      <div className="container">
        <form onSubmit={this.submitForm}>
          <div className="row col-9">
            <div className="input-group mt-3 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Название категории</span>
              </div>
              <input type="text" aria-label="First name" id="name"  value={this.state.category.name} onChange={this.nameChange} className="form-control"/>
            </div>
          </div>
          <h1>Характеристики</h1>
          {specifications}
          <div className=" col-9 row pl-3">
            <button className="btn btn-primary mr-3" type="button" onClick={this.addSpecification}>Добавить характеристику</button>
            <button className="btn btn-primary" type="submit">Отправить  категорию</button>
          </div>
        </form>
      </div>
    )
  }
}
class Specification extends Component {
  changeInput = (event) => {
    let specification = {
      name: event.target.id,
      value: event.target.value,
      i: event.target.dataset.keyid
    }
    this.props.changeCategory(specification)

  }
  render(){
    return(
      <div className="row col-9">
        <div className="input-group mt-3 mb-3">
          <input type="text" id='name'   data-keyid={this.props.keyid} onChange={this.changeInput} placeholder="Имя" className="form-control"/>
          <input type="text" id="demension"  data-keyid={this.props.keyid} onChange={this.changeInput} placeholder="Размерность" className="form-control"/>
        </div>
      </div>
    )
  }
}
export default AddCategory;
