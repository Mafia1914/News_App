

const initialState = {
    articles: [],
    selectedArticle: null,
  };
  
  const articleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ARTICLES_SUCCESS':
        return { ...state, articles: action.payload };
      case 'NAVIGATE_TO_DETAILS':
        return { ...state, selectedArticle: action.payload };
      default:
        return state;
    }
  };
  
  export default articleReducer;
  