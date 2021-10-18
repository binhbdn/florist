<template>
  <main>
    <AppBreadcrumb>
      {{ $t('service.subTitle') }}
      <template #links>
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
      </template>
      <template #endpoint>{{ $t('nav.service') }}</template>
    </AppBreadcrumb>
    <section class="services-page tw-py-24">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <TheServicesSidebarTab />
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-12">
                <TheServicesTabContent />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <TheServicesForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      vn: '/dich-vu',
      en: '/services',
      ja: '/services',
    },
  },

  head() {
    return {
      title: `Florist | ${this.$t('nav.service')}`,
    }
  },
}
</script>
