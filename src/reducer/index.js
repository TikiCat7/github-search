import { combineReducers } from 'redux'

function repos(state = [], action) {
  switch(action.type) {
    case 'RECIEVED_REPO_DATA':
      return action.payload
    case 'REMOVE_CURRENT_DATA':
      return []
    default:
      return state
  }
}

function errorMessage(state = false, action) {
  switch(action.type) {
    case 'USER_NAME_NOT_FOUND':
      return action.payload
    case 'REMOVE_ERROR_MESSAGE':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  repos,
  errorMessage
})
