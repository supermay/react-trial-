import React, {Component} from 'react'
import './Title.css'


// export default before class
export default class Title extends Component {
  render(){
    return <h1 className="Title">
    {this.props.text}
    </h1>
  }
}

// or you can put *export default Title* here
