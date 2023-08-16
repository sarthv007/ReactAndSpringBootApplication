export const UsersSelector = (state) => {
  return {
    loading: state.user.loading,
    users: state.user.users,
    error: state.user.error,
  };
};
