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

export const actions = {
  async getLatestPostsItems() {
    // JSON file name: latest-posts-items
    return await this.$axios.$get('/614f4bd89548541c29b84aee/latest');
  },
}
