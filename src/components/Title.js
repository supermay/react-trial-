import React, {Component} from 'react'
import './Title.css'
import PropTypes from 'prop-types'


// export default before class
export default class Title extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  render(){
    return <h1 className="Title">
    {this.props.text}
    </h1>
  }
}

// or you can put *export default Title* here
