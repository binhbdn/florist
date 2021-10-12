export const state = () => ({
  isSignedIn: false,
  selectedProductsCount: 0,
  favoriteProductsCount: 0,
})

export const mutations = {
  updateSignInStatus(state, value) {
    state.isSignedIn = value
  },

}
