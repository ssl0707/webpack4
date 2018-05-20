import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class Art extends Component {
  changeState () {
    const { dispatch } = this.props
    dispatch({
      type: 'FATCH_DATA',
      age: 24
    })
  }
  render() {
    return (
      <div>
        <p onClick={this.changeState.bind(this)}>123456789</p>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  console.log(state)
  return {
    
  }
}
export default connect(mapStateToProps)(Art)