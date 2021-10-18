<template>
  <main>
    <AppBreadcrumb>
      {{ $t('product.topTitle') }}
      <template #links>
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
      </template>
      <template #endpoint>{{ $t('nav.product') }}</template>
    </AppBreadcrumb>
    <TheProducts />
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      vn: '/san-pham',
      en: '/product',
      ja: '/product',
    },
  },

  head() {
    return {
      title: `Florist | ${this.$t('nav.product')}`,
    }
  },
}
</script>
