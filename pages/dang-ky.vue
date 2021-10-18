<template>
  <main>
    <AppBreadcrumb>
      {{ $t('account.myAccount') }}
      <template #links>
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
      </template>
      <template #endpoint>{{ $t('nav.register') }}</template>
    </AppBreadcrumb>
    <TheRegister />
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      vn: '/dang-ky',
      en: '/register',
      ja: '/register',
    },
  },

  head() {
    return {
      title: `Florist | ${this.$t('nav.register')}`,
    }
  },
}
</script>
