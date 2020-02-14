import axiosAPI from "../../axiosAPI";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const fetchMessagesSuccess = messages => ({type: FETCH_POSTS_SUCCESS, messages});
export const createPostSuccess = () => ({type: CREATE_POST_SUCCESS});
export const errorMessage = (error) => ({type: ERROR_MESSAGE, error});

export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      const response = await axiosAPI.get('/messages');
      dispatch(fetchMessagesSuccess(response.data));
    } catch (e) {
        dispatch(errorMessage(e))
    }
  }
};

export const createPost = post => {
  return async (dispatch) => {
    try {
      await axiosAPI.post('/messages', post);
      dispatch(createPostSuccess());
      dispatch(fetchMessages());
    } catch (e) {
      dispatch(errorMessage(e))
    }
  }
};