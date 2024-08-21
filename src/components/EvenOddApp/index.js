import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, nature: 'even'}

  clicked = () => {
    const num = Math.floor(Math.random() * 101)
    let sum
    console.log(num)
    this.setState(st => {
      sum = st.count + num
      if (sum % 2 === 0) {
        return {count: sum, nature: 'Even'}
      }
      return {count: sum, nature: 'Odd'}
    })
  }

  render() {
    const {count, nature} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="main-head">Count {count}</h1>
          <p className="main-para">Count is {nature}</p>
          <button className="btn" onClick={this.clicked} type="button">
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
