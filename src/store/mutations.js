export default {
  saveUsername(state, payload) {
    state.username = state.username + payload.value;
  },
  savePassword(state, payload) {
    state.password = state.password + payload.value;
  },
  saveToken(state, payload) {
    state.token = state.token + payload.value;
  },
};
