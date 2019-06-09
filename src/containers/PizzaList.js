import React, { Component } from 'react';
import Pizza from '../components/Pizza'


class PizzaList extends Component {
  generatePizza = () => {
    return this.props.pizzas.map((pizza) => (
      <Pizza
        pizzaId={pizza.id}
        key={pizza.id}
        topping={pizza.topping}
        size={pizza.size}
        vegetarian={pizza.vegetarian}
        handleEditClick={this.props.handleEditClick}
      />
    ))
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.generatePizza()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
