import React, {Component} from 'react'
import './Title.css'
import PropTypes from 'prop-types'


// export default before class
export default class Title extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  renderText(){
    return this.props.text.split(' ')
    .map((word) => {
      return [word[0].toUpperCase(),word.slice(1)]
      .join('')
    }).join(' ')
  }
  render(){
    return <h1 className="Title">
    {this.renderText()}
    </h1>
  }
}

// or you can put *export default Title* here
