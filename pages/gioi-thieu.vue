<template>
  <main>
    <AppBreadcrumb>
      {{ $t('footer.about') }}
      <template #links>
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
      </template>
      <template #endpoint>{{ $t('nav.about') }}</template>
    </AppBreadcrumb>
    <AppAboutUs />
    <TheServices />
    <AppTestimonial />
    <TheTeam />
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      vn: '/gioi-thieu',
      en: '/about-us',
      ja: '/about-us',
    },
  },

  head() {
    return {
      title: `Florist | ${this.$t('nav.about')}`,
    }
  },
}
</script>
