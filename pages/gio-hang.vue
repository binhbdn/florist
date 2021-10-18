<template>
  <main>
    <AppBreadcrumb>
      {{ $t('cart.topTitle') }}
      <template #links>
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
      </template>
      <template #endpoint>{{ $t('cart.title') }}</template>
    </AppBreadcrumb>
    <TheShoppingCart />
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      vn: '/gio-hang',
      en: '/cart',
      ja: '/cart',
    },
  },

  head() {
    return {
      title: `Florist | ${this.$t('nav.cart')}`,
    }
  },
}
</script>
