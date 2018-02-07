// State argument is not application state, only the state this reducer
// is responsible for
export default function(state = null, action) {
// ES6 state = null, if state is undefined, set to null
  switch(action.type) {
    case 'BOOK_SELECTED':
      // console.log('reducer active book');
      return action.payload
  }
  return state;
}
