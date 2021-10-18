export const state = () => ({
  isSignedIn: false,
  selectedProductsCount: 0,
  favoriteProductsCount: 0,
  priceTotal: 0,
  filterSet: null,
  newProductItems: null,
  oldProductItems: null,
})

export const mutations = {
  updateSignInStatus(state, value) {
    state.isSignedIn = value
  },

  increaseSelectedProductsCount(state) {
    state.selectedProductsCount++
  },

  descreaseSelectedProductsCount(state) {
    state.selectedProductsCount--
  },

  increaseFavoriteProductsCount(state) {
    state.favoriteProductsCount++
  },

  descreaseFavoriteProductsCount(state) {
    state.favoriteProductsCount--
  },

  addToPriceTotal(state, value) {
    state.priceTotal += value
  },

  removeFromPriceTotal(state, value) {
    state.priceTotal -= value
  },

  updateFilterSet(state, value) {
    state.filterSet = value
  },

  updateNewProductItems(state, value) {
    state.newProductItems = value
  },

  updateQuantityInCartInNewProductItems(state, {
    indexOfItem,
    newValue
  }) {
    state.newProductItems[indexOfItem].quantityInCart = newValue
  },

  toggleFavoriteInCartInNewProductItems(state, indexOfItem) {
    state.newProductItems[indexOfItem].isFavorited = !state.newProductItems[indexOfItem].isFavorited
  },

  updateOldProductItems(state, value) {
    state.oldProductItems = value
  },
}

export const actions = {
  async getLatestPostsItems() {
    // JSON file name: latest-posts-items
    return await this.$axios.$get('/614f4bd89548541c29b84aee/latest');
  },

  async getFilterSetAndNewProductItems({
    commit
  }) {
    // JSON file name: new-arrivals-data
    await this.$axios.$get('/614f3e1aaa02be1d444e8bd9/latest')
      .then((res) => {
        commit('updateFilterSet', res.record.filterSet)
        commit('updateNewProductItems', res.record.newArrivalsItems)
      })
      .catch((error) => console.log(error)); // eslint-disable-line no-console
  },
}
