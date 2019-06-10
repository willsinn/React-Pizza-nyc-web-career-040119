import React from "react"

const PizzaForm = (props) => {


  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
              (props.topping === undefined)
              ? ("Pizza Topping")
              : props.topping
            } onChange={props.handleToppingChange}/>
        </div>
        <div className="col">
          <select
            className="form-control"
            value={props.vegetarian}
            onChange={props.handleSizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check" >
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.vegetarian === true}
            onChange={props.handleVeggiesNasty}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.vegetarian === false}
            onChange={props.handleConvertVeggies}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
