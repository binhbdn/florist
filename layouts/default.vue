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
      { src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', defer: true , body: true },
    ]
  }
}
</script>
