<template>
  <div class="services__tab__details">
    <div
      class="services__tab__video set-bg"
      :style="`background-image: url('${serviceTabItemData.imgUrl}')`"
    >
      <a :href="serviceTabItemData.href"><IconPlayCircle size="64" /></a>
    </div>
    <div class="services__tab__details__title">
      <h2>{{ serviceTabItemData.title }}</h2>
      <span>{{ serviceTabItemData.priceInfo }}</span>
    </div>
    <div class="services__tab__details__desc">
      <p
        v-for="(paragraph, index) in serviceTabItemData.paragraphs"
        :key="index"
      >
        {{ paragraph.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceTabItemData: { type: Object, default: null },
  },
}
</script>
