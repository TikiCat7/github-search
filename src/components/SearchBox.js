import React, { Component } from 'react';
import './SearchBox.css'

class SearchBox extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleClick() {
    this.props.getRepos(this.state.searchTerm)
  }

  render() {
    const { displayError } = this.props
    return(
      <div className="SearchBox">
        <input type="text"
          placeholder="Enter Github User Name"
          onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
        {displayError && <h1>Invalid Username (no spaces!)</h1>}
      </div>
    )
  }
}

export default SearchBox;
