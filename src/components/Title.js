import React, {Component} from 'react'
import './Title.css'
import PropTypes from 'prop-types'


// export default before class
export default class Title extends Component {
  constructor(props) {
    super ()
    this.state = {
      text: props.text
    }
  }
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  renderText(){
    return this.state.text.split(' ')
    .map((word) => {
      return [word[0].toUpperCase(),word.slice(1)]
      .join('')
    }).join(' ')
  }

  sayHi(){
    this.setState({
      text: "Are you ok?"
    })
  }
  render(){
    return <h1 className="Title" onClick = {this.sayHi.bind(this)}>
    {this.renderText()}
    </h1>
  }
}

// or you can put *export default Title* here
