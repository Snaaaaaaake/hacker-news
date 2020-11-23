const initialState = {
  comments: [],
  error: null,
  isLoading: true,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        comments: [],
        error: null,
        isLoading: true,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        comments: action.payload,
        error: null,
        isLoading: false,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        comments: [],
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default commentsReducer;
