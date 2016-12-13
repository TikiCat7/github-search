import React, { Component } from 'react';
import './RepoList.css'

class RepoList extends Component {
  changeOrder(repos, order) {
    if (order !== null) {
      if(order) {
        repos.sort((a,b) => {
          let aName = a.name.toLowerCase()
          let bName = b.name.toLowerCase()
          if(aName > bName) return 1;
          if(aName < bName) return -1;
          return -0;
        })
      } else {
        repos.sort((a,b) => {
          let aName = a.name.toLowerCase()
          let bName = b.name.toLowerCase()
          if(aName < bName) return 1;
          if(aName > bName) return -1;
          return -0;
        })
      }
    }
    return repos
  }

  render() {
    const { repos, listType, order } = this.props
    this.changeOrder(repos, order)
    const mappedRepos = repos.map(repo => {
      return(
        <li key={repo.id} className="RepoLi">
          <a href={repo.url}>
            {repo.name}
          </a>
        </li>
      )
    })
    return(
      <ul>
        List of {listType} Repos
        {mappedRepos}
      </ul>
    )
  }
}

export default RepoList;
