export const selectIsLogIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user.name;
export const selectIsRefresh = state => state.auth.isRefreshing;