export const state = () => ({
  isSignedIn: false,
  selectedProductsCount: 0,
  favoriteProductsCount: 0,
  priceTotal: 0,
  filterSet: null,
  newProductItems: null,
  oldProductItems: null,
  allProductItems: null,
  quickViewProductItem: null,
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

  removeFromSelectedProductsCount(state, value) {
    state.selectedProductsCount -= value
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

  updateQuantityInCartInAllProductItems(state, {
    id,
    newValue
  }) {
    const item = state.allProductItems.find(item => item.productId === id);
    item.quantityInCart = newValue
  },

  toggleFavoriteInNewProductItems(state, indexOfItem) {
    state.newProductItems[indexOfItem].isFavorited = !state.newProductItems[indexOfItem].isFavorited
  },

  toggleFavoriteInAllProductItems(state, id) {
    const item = state.allProductItems.find(item => item.productId === id);
    item.isFavorited = !item.isFavorited
  },

  updateOldProductItems(state, value) {
    state.oldProductItems = value
  },

  updateAllProductItems(state, value) {
    state.allProductItems = value
  },

  updateQuickViewProductItem(state, value) {
    state.quickViewProductItem = value
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

  async getOldProductItems({
    commit
  }) {
    // JSON file name: old-product-items
    await this.$axios.$get('/6151c6814a82881d6c5667dc/latest')
      .then((res) => {
        commit('updateOldProductItems', res.record)
      })
      .catch((error) => console.log(error)); // eslint-disable-line no-console
  },

  async getAllProductItems({
    dispatch,
    commit,
    state,
  }) {
    if (state.newProductItems === null) {
      await dispatch('getFilterSetAndNewProductItems')
    }
    await dispatch('getOldProductItems')
    commit('updateAllProductItems', state.newProductItems.concat(state.oldProductItems))
  },
}
