<template>
  <div>
    <TheProductPreviewModal />
    <TheHeader />
    <Nuxt />
    <TheInstagram />
    <TheFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },

      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
          defer: true,
          body: true,
        },
      ],

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description'),
        },
      ],
    }
  },
}
</script>
