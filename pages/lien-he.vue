<template>
  <div>
    <AppBreadcrumb>
      {{ $t('contact.topTitle') }}
      <template #links>
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
      </template>
      <template #endpoint>{{ $t('nav.contact') }}</template>
    </AppBreadcrumb>
    <TheContact />
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      vn: '/lien-he',
      en: '/contact',
      ja: '/contact',
    },
  },

  head() {
    return {
      title: `Florist | ${this.$t('nav.contact')}`,
    }
  },
}
</script>
