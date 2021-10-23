const initialState = {
  request: false,
  success: false,
  error: false,
  userData: {},
};

const Reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        request: true,
        success: false,
        error: false,
        userData: action.data,
      };
    default:
      return state;
  }
};

export default Reducer;
