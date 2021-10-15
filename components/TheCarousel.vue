<template>
  <div
    id="myCarousel"
    class="carousel carousel-fade carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="index in 2"
        :key="index"
        type="button"
        data-bs-target="#myCarousel"
        :data-bs-slide-to="index - 1"
        :aria-label="`Slide ${index}`"
        :aria-current="index == 1"
        :class="{ active: index == 1 }"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="index in 2"
        :key="index"
        :class="{ active: index == 1 }"
        class="carousel-item"
        data-bs-interval="4000"
      >
        <div :class="`img-carousel-${index}`" class="set-bg tw-h-[550px]"></div>

        <div class="carousel-caption">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="carousel-text text-start">
                  <span class="tw-top-[100px]">{{ $t('hero.title') }}</span>
                  <h2 class="tw-top-[200px]">
                    {{ $tc('hero.subTitle', index) }}
                  </h2>
                  <NuxtLink
                    :to="localePath($tc('hero.href', index))"
                    class="btn-florist tw-top-[400px]"
                  >
                    {{ $tc('hero.btnText', index) }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
/* --- Start Carousel CSS --- */

.img-carousel-1 {
  background-image: url('https://binhbdn.github.io/flower-shop/img/carousel-1.d9ada698.jpg');
}
.img-carousel-2 {
  background-image: url('https://binhbdn.github.io/flower-shop/img/carousel-2.940d87df.jpg');
}
.tw-h-\[550px\] + .carousel-caption {
  @apply tw-inset-x-0 !important;
  @apply tw-pb-12;
}
.carousel-text span {
  @apply tw-relative tw-block tw-mb-3 tw-text-gray-900 tw-font-bold tw-tracking-2px tw-uppercase tw-opacity-0 tw-transition-all tw-duration-500;
}
.carousel-text h2 {
  @apply tw-relative tw-mb-7 tw-text-gray-900 tw-text-42px tw-leading-snug tw-opacity-0 tw-transition-all tw-duration-700;
}
.carousel-text .btn-florist {
  @apply tw-relative tw-opacity-0 tw-transition-all tw-duration-1000;
}
.carousel-item.active .carousel-text {
  & span,
  & h2,
  & .btn-florist {
    @apply tw-top-0 tw-opacity-100;
  }
}

/* --- End Carousel CSS --- */
</style>
