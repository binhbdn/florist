<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheInstagram />
    <TheFooter />
  </div>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', defer: true , body: true },
    ]
  }
}
</script>
