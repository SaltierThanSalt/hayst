import React, {Component} from 'react'

export default class Bot extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Talk to me. I'm a Haystbot! </h1>
        <input
          placeholder="commands: Hello, Hi, Bye, Good Night, Wassap, Subcribe To Hayst, I'm Still Alllliiiveee!"
          style={{
            width: '50%',
            marginLeft: '25%',
            marginTop: '2em'
          }}
          className="form-control"
        />
      </div>
    )
  }
}