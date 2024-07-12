

export const fetchArticles = () => async dispatch => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-08&sortBy=publishedAt&apiKey=c06195acde2b4d15be2a26ed2283bca7');
      const data = await response.json();
      if (data.articles) {
        dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload: data.articles });
      }
    } catch (error) {
      console.error('Error fetching news:', error);
  
    }
  };
  
  export const navigateToDetails = article => dispatch => {
    dispatch({ type: 'NAVIGATE_TO_DETAILS', payload: article });
  };
  