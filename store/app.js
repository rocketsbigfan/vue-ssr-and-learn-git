export const state = () => ({
  name: ''
})
export const mutations = {
  changeName(state, name) {
    state.name = name
  }
}
