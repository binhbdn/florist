<template>
  <section class="product">
    <div class="container">
      <div class="product__widget">
        <div class="row">
          <div class="col-12 text-center pb-3">
            <div class="form-check d-inline-block pe-3">
              <input
                id="checkboxAll"
                v-model="isCheckedAll"
                class="form-check-input"
                type="checkbox"
                checked
              />
              <label for="checkboxAll" class="form-check-label">
                {{ filterSet[0].filterName }}
              </label>
            </div>
            <div
              v-for="index in 5"
              :key="index"
              :class="{ 'pe-3': index != 5 }"
              class="form-check d-inline-block"
            >
              <input
                :id="`checkbox${index}`"
                v-model="filterSet[index].isChecked"
                class="form-check-input"
                type="checkbox"
                checked
                @change="indeterminateCheckbox"
              />
              <label :for="`checkbox${index}`" class="form-check-label">
                {{ filterSet[index].filterName }}
              </label>
            </div>
          </div>
          <div class="col-lg-7 col-md-6">
            <div class="product__widget__text navbar-light">
              <i class="navbar-toggler-icon"></i>
              <p v-if="productTotal === 0">Không có sản phẩm nào !</p>
              <p v-else>Có tất cả {{ productTotal }} sản phẩm</p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="product__widget__filter">
              <select v-model.number="sortBy" class="form-select">
                <option value="" disabled>Chọn một kiểu sắp xếp</option>
                <option value="0" selected>Sắp xếp theo mã sản phẩm</option>
                <option value="1">Sắp xếp theo giá tăng dần</option>
                <option value="2">Sắp xếp theo giá giảm dần</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <template v-for="item in sortedProductsList">
          <div
            v-if="isMatchFilterSet(item)"
            :key="item.productId"
            class="d-col"
          >
            <div class="product__item">
              <div
                :style="{
                  'background-image': 'url(' + item.bgImgUrl + ')',
                }"
                class="product__item__pic set-bg"
              >
                <div v-if="item.label" class="label">
                  {{ item.label }}
                </div>
                <ul class="product__item__hover">
                  <li>
                    <!-- Button trigger Product Preview Modal -->
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#productPreviewModal"
                      @click="quickViewProductItem = item"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Xem chi tiết"
                        ><IconSearch
                      /></span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      :title="
                        item.quantity === 0 ||
                        item.quantityInCart === item.quantity
                          ? 'Hết số lượng để thêm vào giỏ'
                          : 'Thêm vào giỏ hàng'
                      "
                      :class="{
                        disabled:
                          item.quantity === 0 ||
                          item.quantityInCart === item.quantity,
                      }"
                      @click="addToCard(item)"
                    >
                      <span>
                        <IconCartDisable
                          v-if="
                            item.quantity === 0 ||
                            item.quantityInCart === item.quantity
                          "
                        />
                        <IconCart v-else-if="item.quantityInCart === 0" />
                        <IconCartPlus v-else />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="tw-group">
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        :title="
                          item.isFavorited
                            ? 'Bỏ khỏi danh sách yêu thích'
                            : 'Thêm vào danh sách yêu thích'
                        "
                        @click="favoriteToggle(item)"
                      >
                        <IconHeartFill
                          v-if="item.isFavorited"
                          class="tw-text-pink-500 group-hover:tw-text-white"
                        />
                        <IconHeart v-else />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="product__item__text">
                <button
                  class="product__name"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#productPreviewModal"
                  @click="quickViewProductItem = item"
                >
                  <span
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Xem chi tiết"
                  >
                    {{ getFilterNameById(item.filterId) }}
                    <b>No. {{ item.productId }}</b>
                  </span>
                </button>
                <div class="price">
                  VNĐ
                  {{
                    item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                  }}
                  <span v-if="item.oldPrice > 0">{{ item.oldPrice }}đ</span>
                </div>
                <button
                  v-if="
                    item.quantity != 0 && item.quantityInCart < item.quantity
                  "
                  class="cart-btn"
                  type="button"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="view__all">
            <span class="btn-florist" role="button" @click="loadMoreProducts"
              >Xem thêm các sản phẩm khác</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheProducts',
  data() {
    return {
      isCheckedAll: true,
      sortBy: 0,
      filterSet: null,
      payload: {
        id: null,
        newValue: null,
      },
    }
  },

  async fetch() {
    await this.$store.dispatch('getAllProductItems').then(
      (this.filterSet = this.$store.state.filterSet.map(function (obj) {
        return {
          id: obj.id,
          filterName: obj.filterName,
          isChecked: obj.isChecked,
        }
      }))
    )
  },

  computed: {
    allProductItems() {
      return this.$store.state.allProductItems
    },

    sortedProductsList() {
      if (this.allProductItems === null) return null

      if (this.sortBy === 0) {
        return this.allProductItems
      } else if (this.sortBy === 1) {
        return [...this.allProductItems].sort(function (a, b) {
          return a.price - b.price
        })
      } else if (this.sortBy === 2) {
        return [...this.allProductItems].sort(function (a, b) {
          return b.price - a.price
        })
      } else {
        return null
      }
    },

    productTotal() {
      if (this.allProductItems === null) return 0

      let count = 0
      for (let i = 0; i < this.allProductItems.length; i++) {
        if (this.isMatchFilterSet(this.allProductItems[i])) count++
      }

      return count
    },

    quickViewProductItem: {
      get() {
        return this.$store.state.quickViewProductItem
      },
      set(value) {
        this.$store.commit('updateQuickViewProductItem', value)
      },
    },
  },

  watch: {
    isCheckedAll(newVal) {
      for (let i = 1; i < 6; i++) {
        const newArrItem = this.filterSet[i]
        newArrItem.isChecked = newVal
        this.filterSet.splice(i, 1, newArrItem)
      }
    },
  },

  methods: {
    isMatchFilterSet(item) {
      if (item === null) return false
      return (
        (this.filterSet[1].isChecked &&
          item.filterId === this.filterSet[1].id) ||
        (this.filterSet[2].isChecked &&
          item.filterId === this.filterSet[2].id) ||
        (this.filterSet[3].isChecked &&
          item.filterId === this.filterSet[3].id) ||
        (this.filterSet[4].isChecked &&
          item.filterId === this.filterSet[4].id) ||
        (this.filterSet[5].isChecked && item.filterId === this.filterSet[5].id)
      )
    },

    getFilterNameById(id) {
      for (const item of this.filterSet) {
        if (item.id === id) {
          return item.filterName
        }
      }
      return this.filterSet[0].filterName
    },

    addToCard(item) {
      if (item.quantityInCart < item.quantity) {
        let newQuantity

        if (item.quantityInCart === -1) {
          newQuantity = 0
        } else {
          newQuantity = item.quantityInCart
        }
        newQuantity++

        this.payload.id = item.productId
        this.payload.newValue = newQuantity

        this.$store.commit(
          'updateQuantityInCartInAllProductItems',
          this.payload
        )
        this.$store.commit('increaseSelectedProductsCount')
        this.$store.commit('addToPriceTotal', item.price)
      }
    },

    favoriteToggle(item) {
      if (item.isFavorited) {
        this.$store.commit('descreaseFavoriteProductsCount')
      } else {
        this.$store.commit('increaseFavoriteProductsCount')
      }
      this.$store.commit('toggleFavoriteInAllProductItems', item.productId)
    },

    indeterminateCheckbox() {
      let allTrue = true
      for (let i = 1; i < 6; i++) {
        if (!this.filterSet[i].isChecked) {
          allTrue = false
          break
        }
      }

      let allFalse = true
      for (let i = 1; i < 6; i++) {
        if (this.filterSet[i].isChecked) {
          allFalse = false
          break
        }
      }

      const checkbox = document.getElementById('checkboxAll')

      if (allTrue) {
        this.isCheckedAll = true
        checkbox.indeterminate = false
      } else if (allFalse) {
        this.isCheckedAll = false
        checkbox.indeterminate = false
      } else {
        checkbox.indeterminate = true
      }
    },

    async loadMoreProducts() {
      // Fetch loadMoreProducts
      // JSON file name: load-more-products
      await this.$axios
        .$get('/6152e4989548541c29b9e8fb/latest')
        .then((res) => {
          this.$store.commit(
            'updateAllProductItems',
            this.allProductItems.concat(res.record)
          )
        })
        .catch((error) => console.log(error)) // eslint-disable-line no-console
    },
  },
}
</script>

<style lang="scss">
.product {
  padding-top: 20px;
  padding-bottom: 100px;
}

.product__widget {
  margin-bottom: 20px;

  .form-check-input {
    &:checked,
    &:indeterminate {
      background-color: #ec4899;
      border-color: #ec4899;
    }
  }
}

.product__widget__text {
  i {
    display: inline-block;
    width: 37px;
    height: 37px;
    margin-right: 20px;
    color: #111827;
    font-size: 16px;
    line-height: 37px;
    text-align: center;
    background: #f2f2f2;
  }

  p {
    display: inline-block;
    margin-bottom: 0;
    color: #111827;
  }
}

.product__widget__filter {
  @media only screen and (max-width: 767px) {
    margin-top: 20px;
  }

  select {
    float: none;
    width: 260px;

    @media only screen and (min-width: 768px) {
      float: right;
    }
  }
}
</style>
