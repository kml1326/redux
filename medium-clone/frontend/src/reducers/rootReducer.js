const initState = {
  authError : null
}


const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return state;
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return state;
    default:
      break;
  }
}

export default rootReducer;