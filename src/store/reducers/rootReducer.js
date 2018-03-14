const initialState = {
    test: "this is a test"
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "TEST":
        return { ...state, test: "If this appears along with inital state, then test passed" };
      default:
        return state;
    }
  }