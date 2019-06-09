import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas:[],
      editPizza:[]
    }
  }
  componentWillMount = () => {
    const PIZZAS_URL = 'http://localhost:3000/pizzas';
    fetch(PIZZAS_URL)
      .then(response => response.json())
      .then(pizzas => {
        return this.setState({
          pizzas: [...pizzas]
        })
      })
  }
  handleEditClick = (pizza) => {
    this.setState({editPizza:pizza})
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          editPizza={this.state.editPizza}
          />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditClick={this.handleEditClick}/>
      </Fragment>
    );
  }
}

export default App;
