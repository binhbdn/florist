<template>
  <main>
    <TheCarousel />
    <TheBenefits />
    <TheCategories />
    <AppAboutUs />
    <TheCustomFlower />
    <TheLatestPosts />
    <AppTestimonial />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<script>
export default {
  head() {
    return {
      title: `Florist | ${this.$t('nav.home')}`,
    }
  },
}
</script>
