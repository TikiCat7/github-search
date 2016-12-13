import React, { Component } from 'react';
import RepoList from './RepoList'
import SortButton from './SortButton'
import './RepoList.css'

class RepoWrapper extends Component {
  constructor() {
    super()
    this.state = {
      order: null
    }
    this.orderUp = this.orderUp.bind(this)
    this.orderDown = this.orderDown.bind(this)
  }

  orderUp() {
    this.setState({
      order: true
    })
  }

  orderDown() {
    this.setState({
      order: false
    })
  }

  render() {
    const { repos } = this.props
    const originalRepos = repos.filter(repo => !repo.fork)
    const forked = repos.filter(repo => repo.fork)

    return(
      <div>
        <SortButton orderUp={this.orderUp}
          orderDown={this.orderDown} />
        <div className="RepoList">
          <RepoList repos={originalRepos}
            listType="Original"
            order={this.state.order}/>
          <RepoList repos={forked}
            listType="Forked"
            order={this.state.order} />
        </div>
      </div>
    )
  }
}

export default RepoWrapper;
