export const actions = {
  nuxtServerInit ({ commit }, { req }) {

  }
}

export const getters = {
  name: state => state.user.userInfo.name
}
