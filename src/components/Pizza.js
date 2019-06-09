import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={props.handleEditClick}>Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza
