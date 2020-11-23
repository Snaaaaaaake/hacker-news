const initialState = {
  news: null,
  error: null,
  isLoading: true,
};

const singleNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_NEWS_REQUEST":
      return {
        news: null,
        error: null,
        isLoading: true,
      };
    case "FETCH_SINGLE_NEWS_SUCCESS":
      return {
        news: action.payload,
        error: null,
        isLoading: false,
      };
    case "FETCH_SINGLE_NEWS_FAILURE":
      return {
        news: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default singleNewsReducer;
