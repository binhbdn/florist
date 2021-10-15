<template>
  <header class="tw-pb-[66px]">
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
        <NuxtLink class="navbar-brand mx-auto d-none" :to="localePath('/')">
          <FloristLogo class="mx-auto" />
        </NuxtLink>
        <div class="navbar-icons d-flex pt-2">
          <NuxtLink
            :to="localePath('/tim-kiem')"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :title="$t('nav.searchProduct')"
          >
            <IconSearch size="20" />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/san-pham-yeu-thich')"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :title="$t('nav.wishList')"
          >
            <div class="position-relative">
              <IconHeart size="20" />
              <span
                v-if="$store.state.favoriteProductsCount > 0"
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
                {{ $store.state.favoriteProductsCount }}
              </span>
            </div>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/gio-hang')"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :title="$t('nav.cart')"
          >
            <div class="position-relative">
              <IconCart size="20" />
              <span
                v-if="$store.state.selectedProductsCount > 0"
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
                {{ $store.state.selectedProductsCount }}
              </span>
            </div>
          </NuxtLink>
          <div class="dropdown text-end">
            <span
              id="dropdownUser"
              :class="[isLoggedIn ? 'sign-in-icon' : 'sign-out-icon']"
              class="nav-link dropdown-toggle d-block px-2"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              role="button"
              :title="$t('nav.account')"
            >
              <IconSignIn v-if="isLoggedIn" class="rounded-circle" size="20" />
              <IconSignOut v-else class="rounded-circle" size="20" />
            </span>
            <ul
              class="dropdown-menu dropdown-menu-end text-small"
              aria-labelledby="dropdownUser"
            >
              <li class="nav-item">
                <NuxtLink
                  :to="localePath('/dang-ky')"
                  :class="{ disabled: isLoggedIn }"
                  class="dropdown-item"
                >
                  {{ $t('nav.register') }}
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink
                  :to="localePath('/dang-nhap')"
                  :class="{ disabled: isLoggedIn }"
                  class="dropdown-item"
                >
                  {{ $t('nav.signIn') }}
                </NuxtLink>
              </li>
              <li class="nav-item">
                <span
                  :class="{ disabled: !isLoggedIn }"
                  class="dropdown-item"
                  role="button"
                  @click="isLoggedIn = false"
                >
                  {{ $t('nav.signOut') }}
                </span>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li class="nav-item">
                <NuxtLink
                  to="/dashboard"
                  :class="{ disabled: !isLoggedIn }"
                  class="dropdown-item"
                >
                  {{ $t('nav.dashboard') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="dropdown text-end">
            <span
              id="dropdownLang"
              class="nav-link dropdown-toggle d-block ps-2 pe-0"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              role="button"
              :title="$i18n.localeProperties.name"
            >
              <img
                :src="require(`~/assets/img/flags/${$i18n.locale}.svg`)"
                height="20"
                alt="current locale"
              />
            </span>
            <ul
              class="dropdown-menu dropdown-menu-end text-small"
              aria-labelledby="dropdownLang"
            >
              <li
                v-for="locale in otherLocalesList"
                :key="locale.code"
                class="nav-item"
              >
                <NuxtLink
                  :to="switchLocalePath(locale.code)"
                  class="dropdown-item"
                >
                  <img
                    :src="require(`~/assets/img/flags/${locale.code}.svg`)"
                    height="20"
                    :alt="`change to ${locale.code} locale`"
                  />
                  {{ locale.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="navbarToggler" class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item nav-item--logo pt-3">
              <NuxtLink :to="localePath('/')"> <FloristLogo /> </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/')" class="nav-link">
                {{ $t('nav.home') }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/gioi-thieu')" class="nav-link">
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/dich-vu')" class="nav-link">
                {{ $t('nav.service') }}
              </NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <span
                id="dropdown01"
                :class="{
                  'nuxt-link-exact-active':
                    $route.path == localePath('/san-pham'),
                }"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
                @click="showAllProductsOnDesktop"
              >
                {{ $t('nav.product') }}
              </span>
              <ul class="dropdown-menu" aria-labelledby="dropdown01">
                <li class="d-block d-lg-none">
                  <NuxtLink :to="localePath('/san-pham')" class="dropdown-item">
                    {{ $t('nav.showAllProducts') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/dat-hang')" class="dropdown-item">
                    {{ $t('nav.orderProducts') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/gio-hang')" class="dropdown-item">
                    {{ $t('nav.cart') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="localePath('/thanh-toan')"
                    class="dropdown-item"
                  >
                    {{ $t('nav.checkout') }}
                  </NuxtLink>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <NuxtLink
                    :to="localePath('/san-pham-yeu-thich')"
                    class="dropdown-item"
                  >
                    {{ $t('nav.wishList') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/tim-kiem')" class="dropdown-item">
                    {{ $t('nav.searchProduct') }}
                  </NuxtLink>
                </li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <NuxtLink
                    :to="localePath('/san-pham-deco')"
                    class="dropdown-item"
                  >
                    {{ $t('nav.productDecoCorner') }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/blog')" class="nav-link">
                {{ $t('nav.blog') }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/lien-he')" class="nav-link">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn: {
      get() {
        return this.$store.state.isSignedIn
      },
      set(value) {
        this.$store.commit('updateSignInStatus', value)
      },
    },

    otherLocalesList() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },

  methods: {
    showAllProductsOnDesktop() {
      if (window.innerWidth > 992) {
        this.$router.push(this.localePath('/san-pham'))
      }
    },
  },
}
</script>
