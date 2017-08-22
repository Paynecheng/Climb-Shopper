import React from 'react'
import { connect } from 'react-redux'

import { login } from 'APP/app/reducers/auth'
import store from 'App/app/store'

/*------------------- COMPONENT -----------------*/
export class SingleProduct extends React.Component {

  constructor( props ) {
    super( props )

    this.state = {
      color: '',
      size: '',
      quantity: 0
    }

    this.handleInputChange = this.handleInputChange.bind( this )
  }

  handleInputChange( event ) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    const product = this.props.singleProduct
    const reviews = this.props.reviews

    return (
      <div>
        <div className = "col-md-6">
        </div>
        <div className="col-lg-6">
          <form>
            <h2>{ product.name }</h2>
            <p>Price: $ { product.price/100 }</p>
            <div className = "tb">{ product.description }</div>
            <a>Color</a>
            <select onChange = { this.handleInputChange } >
              {
                product.color && product.color.map(color => (
                  <option  ><a >{ color }</a></option>
                ))
              }
            </select>

            <a className='dropdown-button btn' data-activates='dropdown1'>Size</a>
            <select onChange = { this.handleInputChange }>
              {
                product.size && product.size.map(size => (
                  <option><a  >{ size }</a></option>
                ))
              }
            </select>

            <input onChange = { this.handleInputChange }/>
            <hr/>
            <button className = "btn btn-success"
                    disabled={ this.state.color === '' || this.state.size === '' || this.state.quantity === 0 } >
              ADD TO CART </button>
          </form>
        </div>

        <div className="col-md-6">
          <ul className= "list-group">
            {
              reviews && reviews.map(review => (
                <tr key = { review.id }>
                  <td> { review.title }</td>
                  <td> { review.num_stars }</td>
                  <td> { review.content }</td>
                </tr>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

/* ------------------- CONTAINER ----------------- */
const mapState = state => ({singleProduct: state.product.selectedProduct})
const mapDispatch = null

export default connect( mapState, mapDispatch )( SingleProduct )