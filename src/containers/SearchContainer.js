import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepos } from '../actions/index.js'

import SearchBox from '../components/SearchBox';
import RepoWrapper from '../components/RepoWrapper'

class SearchContainer extends Component {

  getRepos(user) {
    this.props.getRepos(user)
  }

  render() {
    const { repos, errorMessage } = this.props
    return(
      <div>
        <SearchBox
          getRepos={this.getRepos.bind(this)}
          displayError={errorMessage}/>
        <RepoWrapper repos={repos}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRepos
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer)
