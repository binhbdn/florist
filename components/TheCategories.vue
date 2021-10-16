<template>
  <div class="container">
    <div class="row">
      <div
        v-for="item in $t('categoriesItems')"
        :key="item.id"
        class="col-md-6 col-lg-3"
      >
        <div
          :style="{
            'background-image':
              'url(img/categories/categories-' + item.id + '.jpg)',
          }"
          class="categories-item set-bg"
        >
          <div class="categories-item-text">
            <h4>
              <NuxtLink
                :to="localePath(item.link)"
                class="tw-text-gray-900 hover:tw-italic"
              >
                {{ item.name }}
              </NuxtLink>
            </h4>
            <span class="tw-block tw-text-black tw-text-sm"
              >( {{ $t('qty') }}: {{ item.quantity }} )</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.categories-item {
  height: 400px;
  @apply tw-relative tw-mb-7.5 tw-transition-all tw-ease-in-out tw-duration-300;

  &:hover {
    box-shadow: 0 0 10px #555;
    transform: translateY(-10px);

    & a {
      @apply tw-text-pink-500;
    }
  }
}
.categories-item-text {
  width: calc(100% - 30px);
  background-color: rgba(255, 255, 255, 0.75);
  @apply tw-absolute tw-bottom-3.75 tw-left-3.75 tw-px-0 tw-py-3.75 tw-text-center tw-rounded-full;
}
</style>
