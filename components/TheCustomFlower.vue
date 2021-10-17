<template>
  <section
    class="tw-pt-24 tw-pb-16 tw-bg-no-repeat tw-bg-left-top tw-bg-cover"
    style="background-image: url('img/custom-flower/floom.jpg')"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="custom-flower-text px-4 tw-mb-0.5 tw-max-w-lg">
            <span
              class="
                tw-block
                tw-mb-5
                tw-text-gray-900
                tw-font-bold
                tw-tracking-4px
                tw-uppercase
              "
              >{{ $t('customFlower.title') }}</span
            >
            <h2
              class="
                tw-mb-10 tw-text-white tw-text-42px
                sm:tw-text-6xl
                tw-leading-snug
                sm:tw-leading-normal
              "
            >
              {{ $t('customFlower.content') }}
            </h2>
            <NuxtLink
              :to="localePath('/dat-hang')"
              class="btn-florist tw-mr-4 tw-mb-7.5"
            >
              {{ $t('footer.order') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/gioi-thieu')"
              class="btn-florist btn-outline-florist tw-mb-7.5"
            >
              {{ $t('footer.about') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.custom-flower-text {
  & h2 {
    font-family: WindSong, sans-serif;
  }

  & .btn-outline-florist {
    @apply tw-bg-white;
  }
}
</style>
