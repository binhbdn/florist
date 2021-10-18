<template>
  <div>
    <AppBreadcrumb>
      {{ $t('account.myAccount') }}
      <template #links>
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
      </template>
      <template #endpoint>{{ $t('nav.signIn') }}</template>
    </AppBreadcrumb>
    <TheLogin />
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      vn: '/dang-nhap',
      en: '/login',
      ja: '/login',
    },
  },

  head() {
    return {
      title: `Florist | ${this.$t('nav.signIn')}`,
    }
  },
}
</script>
