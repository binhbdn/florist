<template>
  <header class="py-2">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top border-bottom">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <NuxtLink class="navbar-brand mx-auto d-none" to="/">
          <FloristLogo class="mx-auto" />
        </NuxtLink>
        <div class="navbar-icons d-flex pt-2">
          <NuxtLink
            to="/san-pham/tim-kiem"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Tìm kiếm sản phẩm"
          >
            <IconSearch size="20" />
          </NuxtLink>
          <NuxtLink
            to="/san-pham/yeu-thich"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Sản phẩm yêu thích"
          >
            <div class="position-relative">
              <IconHeart size="20" />
              <span
                v-if="$root.$data.favoriteProductsCount > 0"
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                {{ $root.$data.favoriteProductsCount }}
              </span>
            </div>
          </NuxtLink>
          <NuxtLink
            to="/san-pham/gio-hang"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Sản phẩm đã chọn"
          >
            <div class="position-relative">
              <IconCart size="20" />
              <span
                v-if="$root.$data.selectedProductsCount > 0"
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                {{ $root.$data.selectedProductsCount }}
              </span>
            </div>
          </NuxtLink>
          <div class="dropdown text-end">
            <span
              id="dropdownUser"
              :class="[isLoggedIn ? 'sign-in-icon' : 'sign-out-icon']"
              class="nav-link dropdown-toggle d-block"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              role="button"
              title="Tài khoản"
            >
              <IconSignIn
                v-if="isLoggedIn"
                class="rounded-circle"
                size="20"
              />
              <IconSignOut v-else class="rounded-circle" size="20" />
            </span>
            <ul
              class="dropdown-menu dropdown-menu-end text-small"
              aria-labelledby="dropdownUser"
            >
              <li class="nav-item">
                <NuxtLink
                  to="/dang-ky"
                  :class="{ disabled: isLoggedIn }"
                  class="dropdown-item"
                >
                  Đăng ký
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink
                  to="/dang-nhap"
                  :class="{ disabled: isLoggedIn }"
                  class="dropdown-item"
                >
                  Đăng nhập
                </NuxtLink>
              </li>
              <li class="nav-item">
                <span
                  :class="{ disabled: !isLoggedIn }"
                  class="dropdown-item"
                  @click="isLoggedIn = false"
                >
                  Đăng xuất
                </span>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li class="nav-item">
                <NuxtLink
                  to="/dashboard"
                  :class="{ disabled: !isLoggedIn }"
                  class="dropdown-item"
                >
                  Bảng điều khiển
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="navbarToggler" class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item nav-item--logo pt-3">
              <NuxtLink to="/"> <FloristLogo /> </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link"> TRANG CHỦ </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/gioi-thieu" class="nav-link"
                >GIỚI THIỆU</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/dich-vu" class="nav-link">DỊCH VỤ</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <span
                id="dropdown01"
                :class="{
                  'NuxtLink-exact-active': $route.path == '/san-pham',
                }"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
                @click="showAllProducts"
              >
                SẢN PHẨM
              </span>

              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdown01"
              >
                <li class="d-block d-lg-none">
                  <NuxtLink to="/san-pham" class="dropdown-item"
                    >Tất cả sản phẩm</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/san-pham/dat-hang" class="dropdown-item"
                    >Đặt hàng sản phẩm</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/san-pham/gio-hang" class="dropdown-item"
                    >Sản phẩm đã chọn</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/san-pham/thanh-toan" class="dropdown-item"
                    >Thanh toán</NuxtLink
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <NuxtLink to="/san-pham/yeu-thich" class="dropdown-item"
                    >Sản phẩm yêu thích</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/san-pham/tim-kiem" class="dropdown-item"
                    >Tìm kiếm sản phẩm</NuxtLink
                  >
                </li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <NuxtLink to="/san-pham/deco" class="dropdown-item"
                    >Góc deco sản phẩm</NuxtLink
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/blog" class="nav-link">BLOG</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/lien-he" class="nav-link">LIÊN HỆ</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
};
</script>
