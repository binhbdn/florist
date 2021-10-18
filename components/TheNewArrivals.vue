<template>
  <section class="arrival">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-title">
            <span>Hoa tươi</span>
            <h2>Mới Nhập Về</h2>
          </div>
          <div class="filter__controls">
            <ul>
              <li
                v-for="item in filterSet"
                :key="item.id"
                :class="{ active: selectedFilterId === item.id }"
                @click="selectedFilterId = item.id"
              >
                {{ item.filterName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <template v-for="(item, index) in newArrivalsItems">
          <div
            v-show="
              selectedFilterId === 0 || item.filterId === selectedFilterId
            "
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
                      @click="quickViewProductId = item.productId"
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
                      @click="addToCard(item, index)"
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
                        @click="favoriteToggle(item, index)"
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
                  @click="quickViewProductId = item.productId"
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
            <NuxtLink :to="localePath('/san-pham')" class="btn-florist">
              {{ $t('nav.showAllProducts') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Preview Modal -->
    <div
      id="productPreviewModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{{ quickViewProductId }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedFilterId: 0,
      quickViewProductId: -1,
      payload: {
        indexOfItem: null,
        newValue: null,
      },
    }
  },

  computed: {
    filterSet() {
      return this.$store.state.filterSet
    },

    newArrivalsItems() {
      return this.$store.state.newProductItems
    },
  },

  mounted() {
    if (this.newArrivalsItems === null) {
      this.$store.dispatch('getFilterSetAndNewProductItems')
    }
  },

  methods: {
    getFilterNameById(id) {
      for (const item of this.filterSet) {
        if (item.id === id) {
          return item.filterName
        }
      }
      return this.filterSet[0].filterName
    },

    addToCard(item, index) {
      if (item.quantityInCart < item.quantity) {
        let newQuantity

        if (item.quantityInCart === -1) {
          newQuantity = 0
        } else {
          newQuantity = item.quantityInCart
        }
        newQuantity++

        this.payload.indexOfItem = index
        this.payload.newValue = newQuantity

        this.$store.commit(
          'updateQuantityInCartInNewProductItems',
          this.payload
        )
        this.$store.commit('increaseSelectedProductsCount')
        this.$store.commit('addToPriceTotal', item.price)
      }
    },

    favoriteToggle(item, index) {
      if (item.isFavorited) {
        this.$store.commit('descreaseFavoriteProductsCount')
      } else {
        this.$store.commit('increaseFavoriteProductsCount')
      }
      this.$store.commit('toggleFavoriteInNewProductItems', index)
    },
  },
}
</script>

<style lang="scss">
.arrival {
  padding-top: 0;
  padding-bottom: 100px;

  .section-title {
    margin-bottom: 20px;
  }
}

.filter__controls {
  margin-bottom: 40px;

  li {
    display: inline-block;
    margin-right: 15px;
    padding: 3px 10px 2px;
    color: #111827;
    font-size: 16px;
    list-style: none;
    border: 2px solid transparent;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      border: 2px solid #ec4899;
    }
  }
}

.d-col {
  float: left;
  width: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 50%;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    max-width: 33.33%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1449px) {
    max-width: 25%;
  }

  @media only screen and (min-width: 1500px) {
    max-width: 20%;
  }
}

.product__item {
  margin-bottom: 35px;
  overflow: hidden;

  &:hover {
    .product__item__pic .product__item__hover {
      bottom: 30px;
    }

    .product__item__text {
      .price {
        left: -500px;
        opacity: 0;
      }

      .cart-btn {
        bottom: 2px;
        opacity: 1;
      }
    }
  }
}

.product__item__pic {
  position: relative;
  height: 344px;
  overflow: hidden;
  background-position: center center;

  .label {
    position: absolute;
    top: 15px;
    left: 15px;
    display: inline-block;
    padding: 2px 8px 1px;
    color: #fff;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    background: #111827;
  }

  .product__item__hover {
    position: absolute;
    bottom: -300px;
    left: 0;
    width: 100%;
    text-align: center;
    transition: all, 0.5s;

    li {
      display: inline-block;
      margin-right: 10px;
      list-style: none;

      &:last-child {
        margin-right: 0;
      }

      &:hover button:not(.disabled) {
        background: #ec4899;

        span {
          color: #fff;
          transform: rotate(360deg);
        }
      }

      button {
        display: block;
        width: 40px;
        height: 40px;
        color: #111827;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
        background: #fff;
        border-style: none;
        border-radius: 50%;
        box-shadow: 0 5px 10px #333;
        transition: all, 0.5s;

        &.disabled {
          background: #6c757d;
          cursor: not-allowed;
        }

        span {
          position: relative;
          display: inline-block;
          transform: rotate(0);
          transition: all, 0.3s;
        }
      }
    }
  }
}

.product__item__text {
  position: relative;
  padding-top: 24px;
  text-align: center;

  button {
    background-color: transparent;
    border-style: none;

    &.product__name {
      margin-bottom: 8px;
      padding-right: 15px;
      padding-left: 15px;
      color: #111827;
      font-size: 18px;
      font-family: 'Libre Baskerville', serif;
      border-radius: 12px;

      &:hover {
        color: #fff;
        background-color: #ec4899;
      }
    }

    &.cart-btn {
      position: absolute;
      right: 0;
      bottom: -50px;
      left: 0;
      width: 100%;
      color: #ec4899;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      opacity: 0;
      transition: all, 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .price {
    position: relative;
    left: 0;
    color: #111827;
    font-weight: 700;
    font-size: 16px;
    transition: all, 0.6s;

    span {
      color: #701212;
      font-weight: 400;
      font-size: 14px;
      text-decoration: line-through;
    }
  }
}
</style>
