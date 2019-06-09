import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={(event) => {props.handleEditClick(props.pizza)}}>Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza
