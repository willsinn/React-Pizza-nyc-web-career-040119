import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas:[],
      editPizza:[{
        topping: '',
        size: '',
        vegetarian: null
      }]
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
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
      })
  }
  handleToppingChange = (toppingChange) => {
    // console.log(toppingChange)
    this.setState({topping: toppingChange.currentTarget.value})
  }
  handleSizeChange = (sizeChange) => {
    // console.log(sizeChange)
    this.setState({size: sizeChange.currentTarget.value})
  }
  handleConvertVeggies = (isVegetarian) => {
    // console.log(isVegetarian)
    this.setState({vegetarian: !this.state.vegetarian})
  }
  handleVeggiesNasty = (notVegetarian) => {
    // console.log(notVegetarian)
    this.setState({vegetarian: !this.state.vegetarian})
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian}
          handleToppingChange={this.handleToppingChange}
          handleSizeChange={this.handleSizeChange}
          handleConvertVeggies={this.handleConvertVeggies}
          handleVeggiesNasty={this.handleVeggiesNasty}

          />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditClick={this.handleEditClick}/>
      </Fragment>
    );
  }
}

export default App;
