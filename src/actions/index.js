export function getRepos(user) {
  return (dispatch) => {
    console.log("getRepos action fired")
    const fetchURL = `https://api.github.com/users/${user.toLowerCase()}/repos?per_page=100`
    fetch(fetchURL).then(res => {
      if(!res.ok) {
        throw new Error('User Name Not Found')
      } else {
        return res.json()
      }
    }).then(data => {
      console.log("got some data back")
      let filteredRepos = data.map(data => {
        return {
          fork: data.fork,
          name: data.name,
          url: data.svn_url,
          id: data.id
        }
      })
      dispatch(updateRepos(filteredRepos))
      dispatch(removeError())
    }).catch(error => {
      dispatch(displayError())
      dispatch(removeCurrentRepos())
    })
  }
}

function updateRepos(data) {
  return {
    type: 'RECIEVED_REPO_DATA',
    payload: data
  }
}

function removeCurrentRepos() {
  return {
    type: 'REMOVE_CURRENT_DATA',
    payload: null
  }
}

function displayError() {
  return {
    type: 'SHOW_ERROR_MESSAGE',
    payload: true
  }
}

function removeError() {
  return {
    type: 'REMOVE_ERROR_MESSAGE',
    payload: false
  }
}
