<template>
  <section class="cart">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="cart__table">
            <table>
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="selectedProductsList">
                <template v-for="item in selectedProductsList">
                  <tr :key="item.productId">
                    <td class="cart__item">
                      <div class="cart__item__pic">
                        <img :src="item.bgImgUrl" />
                      </div>
                      <div class="cart__item__text">
                        <h4>
                          {{ getFilterNameById(item.filterId) }}
                          {{ item.productId }}
                        </h4>
                        <span
                          >VNĐ
                          {{
                            item.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                          }}</span
                        >
                      </div>
                    </td>
                    <td class="cart__quantity">
                      <div class="quantity">
                        <div class="pro-qty">
                          <span
                            :title="
                              item.quantityInCart < 1 ? '' : 'Bớt khỏi giỏ hàng'
                            "
                            :class="{
                              disabled: item.quantityInCart < 1,
                            }"
                            class="qtybtn"
                            role="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            @click="removeOneFromCart(item)"
                            ><IconCartMinus size="24"
                          /></span>
                          <input type="text" :value="item.quantityInCart" />
                          <span
                            :title="
                              item.quantityInCart == item.quantity
                                ? 'Hết số lượng để thêm vào giỏ'
                                : 'Thêm vào giỏ hàng'
                            "
                            :class="{
                              disabled: item.quantityInCart == item.quantity,
                            }"
                            class="qtybtn"
                            role="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            @click="addToCard(item)"
                            ><IconCartPlus size="24"
                          /></span>
                        </div>
                      </div>
                    </td>
                    <td class="cart__price">
                      VNĐ
                      {{
                        (item.quantityInCart * item.price)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                      }}
                    </td>
                    <td class="cart__close">
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Xóa sản phẩm khỏi giỏ hàng"
                        role="button"
                        @click="removeProductFromCart(item)"
                      >
                        <IconXCircle size="24" />
                      </span>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <div class="row">
              <div class="col-lg-12 text-center py-5">
                <NuxtLink :to="localePath('/san-pham')" class="btn-florist">
                  Tiếp tục mua sắm
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="cart__coupon">
            <p>Nhập mã phiếu giảm giá để được dùng khi thanh toán.</p>
            <form action="#">
              <input
                v-model="couponCode"
                type="text"
                class="form-control"
                placeholder="Mã giảm giá"
              />
              <button type="button" @click="checkCouponCode">Áp dụng</button>
            </form>
          </div>
          <div class="cart__total">
            <h4>Tổng hợp đơn hàng</h4>
            <ul>
              <li>
                Số lượng sản phẩm:
                <span>{{ $store.state.selectedProductsCount }}</span>
              </li>
              <li>
                Tổng giá trị:
                <span
                  >VNĐ
                  {{
                    $store.state.priceTotal
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                  }}</span
                >
              </li>
              <li>
                Giảm giá:
                <span
                  >VNĐ
                  {{
                    discount === 0
                      ? '000'
                      : discount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                  }}</span
                >
              </li>
              <li>
                Tổng thanh toán
                <span>VNĐ {{ payment }}</span>
              </li>
            </ul>
            <span class="pay" role="button" @click="checkPayment"
              >THANH TOÁN</span
            >
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
      couponCode: '',
      discount: 0,
      payload: {
        id: null,
        newValue: null,
      },
    }
  },

  computed: {
    productsList() {
      return this.$store.state.allProductItems
    },

    selectedProductsList() {
      return [...this.productsList].filter((item) => item.quantityInCart >= 0)
    },

    payment() {
      if (this.$store.state.priceTotal > this.discount) {
        return (this.$store.state.priceTotal - this.discount)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      } else {
        return '000'
      }
    },
  },

  methods: {
    getFilterNameById(id) {
      for (const item of this.$store.state.filterSet) {
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

    removeOneFromCart(item) {
      if (item.quantityInCart > 0) {
        this.payload.id = item.productId
        this.payload.newValue = item.quantityInCart - 1

        this.$store.commit(
          'updateQuantityInCartInAllProductItems',
          this.payload
        )

        this.$store.commit('descreaseSelectedProductsCount')
        this.$store.commit('removeFromPriceTotal', item.price)
      }
    },

    removeProductFromCart(item) {
      this.$store.commit('removeFromSelectedProductsCount', item.quantityInCart)
      this.$store.commit(
        'removeFromPriceTotal',
        item.quantityInCart * item.price
      )

      this.payload.id = item.productId
      this.payload.newValue = -1

      this.$store.commit('updateQuantityInCartInAllProductItems', this.payload)
    },

    async checkCouponCode() {
      if (this.couponCode) {
        // JSON file name: coupon-code
        await this.$axios
          .$get('/6154293c4a82881d6c57951e/latest')
          .then((res) => {
            for (const item of res.record) {
              if (item.couponCode === this.couponCode) {
                this.discount = item.discount
                break
              }
            }

            if (this.discount > 0) {
              alert(
                'Mã giảm giá hợp lệ. Bạn được giảm VNĐ' +
                  this.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
              )
            } else {
              alert('Mã giảm giá không hợp lệ')
            }
          })
          .catch((error) => console.log(error)) // eslint-disable-line no-console
      } else {
        alert('Mã giảm giá không hợp lệ')
      }
    },

    checkPayment() {
      if (!this.$store.state.isSignedIn) {
        alert('Quy khách cần đăng nhập để tiến hành thanh toán')
        this.$router.push(localePath('/dang-nhap'))
      } else {
        alert(
          'Xin lỗi quý khách, chức năng thanh toán đang trong quá trình bảo trì'
        )
      }
    },
  },
}
</script>

<style lang="scss">
.cart {
  padding-top: 50px;
  padding-bottom: 50px;
}

.cart__table {
  padding-right: 0;
  overflow: auto;

  @media only screen and (min-width: 1200px) {
    padding-right: 40px;
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 40px;
  }

  table {
    width: 100%;
  }

  thead {
    border-bottom: 1px solid #e1e1e1;

    tr th {
      color: #111827;
      font-weight: 700;
      font-size: 22px;
      font-family: 'Libre Baskerville', serif;
    }
  }

  tbody tr {
    border-bottom: 1px solid #e1e1e1;

    td {
      padding-top: 0;
      padding-bottom: 0;
    }

    td.cart__item {
      width: 320px;

      .cart__item__pic {
        float: none;
        width: 70px;
        margin-right: 0;

        @media only screen and (min-width: 768px) {
          float: left;
          margin-right: 20px;
        }
      }

      .cart__item__text {
        padding-top: 20px;
        overflow: hidden;

        h4 {
          margin-bottom: 10px;
          color: #111827;
          font-size: 18px;

          @media only screen and (max-width: 479px) {
            font-size: 16px;
          }
        }

        span {
          display: block;
          color: #111827;
          font-weight: 700;
          font-size: 18px;
        }
      }
    }
  }
}

.cart__quantity {
  width: 200px;

  .quantity .pro-qty {
    width: 100px;

    input {
      float: left;
      width: 40px;
      height: 48px;
      color: #111827;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      background: transparent;
      border: none;
    }

    .qtybtn {
      float: left;
      height: 100%;
      color: #ec4899;
      font-size: 16px;
      line-height: 46px;
      transition: all, 0.5s;

      &.disabled {
        color: #6c757d;
        cursor: not-allowed;
      }

      &:not(.disabled):hover {
        transform: scale(1.5);
      }
    }
  }
}

.cart__price {
  width: 200px;
  color: #111827;
  font-weight: 700;
  font-size: 18px;
}

.cart__close {
  color: #ec4899;
  font-size: 20px;
  transition: all, 0.5s;

  &:hover {
    transform: scale(1.5);
  }
}

.cart__coupon {
  margin-bottom: 50px;
  padding: 30px;
  background: #f7f5fa;

  p {
    margin-bottom: 12px;
  }

  form {
    position: relative;

    input {
      width: 100%;
      height: 46px;
      padding-left: 20px;
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      padding: 0 15px;
      color: #ec4899;
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0;
      text-transform: uppercase;
      background: #111827;
      border: none;

      &:hover {
        color: #111827;
        background-color: #ec4899;
      }

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        padding: 0 20px;
      }

      @media only screen and (min-width: 1200px) {
        padding: 0 30px;
        letter-spacing: 2px;
      }
    }
  }
}

.cart__total {
  padding: 30px;
  background: #f7f5fa;

  @media only screen and (max-width: 479px) {
    padding: 20px;
  }

  h4 {
    margin-bottom: 36px;
    color: #111827;
  }

  ul {
    margin-bottom: 28px;

    li {
      overflow: hidden;
      color: #888;
      font-size: 16px;
      line-height: 36px;
      list-style: none;

      span {
        float: right;
        color: #111827;
        font-weight: 700;
      }

      &:last-child span {
        color: #ec4899;
      }
    }
  }

  span.pay {
    display: block;
    padding: 14px 20px 12px;
    color: #ec4899;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 2px;
    text-align: center;
    background: #111827;

    &:hover {
      color: #111827;
      background-color: #ec4899;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      letter-spacing: 0;
    }

    @media only screen and (max-width: 479px) {
      padding: 14px 15px 12px;
      letter-spacing: 0;
    }
  }
}
</style>
