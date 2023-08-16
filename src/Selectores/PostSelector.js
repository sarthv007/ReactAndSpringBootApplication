export const PostSelector = (state) => {
  return {
    loading: state.postData.loading,
    posts: state.postData.posts,
    error: state.postData.error,
  };
};
