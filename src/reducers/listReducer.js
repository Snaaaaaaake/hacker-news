const initialState = {
  list: [],
  ids: [],
  error: null,
  isLoading: true,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LIST_REQUEST":
      return {
        ...state,
        list: [],
        error: null,
        isLoading: true,
      };
    case "FETCH_LIST_SUCCESS":
      return {
        ...state,
        list: action.payload,
        error: null,
        isLoading: false,
      };
    case "FETCH_LIST_FAILURE":
      return {
        ...state,
        list: [],
        error: action.payload,
        isLoading: false,
      };
    case "SAVE_IDS":
      return {
        ...state,
        ids: action.payload,
      };
    default:
      return state;
  }
};
export default listReducer;
