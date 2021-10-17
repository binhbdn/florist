<template>
  <div class="tw-py-7.5">
    <div class="container tw-pt-7.5">
      <div class="row">
        <div
          v-for="item in $t('benefitItems')"
          :key="item.id"
          class="col-sm-6 col-md-6 col-lg-3"
        >
          <div class="tw-pb-7.5 tw-pl-7.5 sm:tw-pl-0 tw-overflow-hidden">
            <div class="tw-float-left tw-mr-5">
              <img :src="`img/benefit/benefit-${item.id}.png`" />
            </div>
            <div class="tw-overflow-hidden">
              <h4 class="tw-mb-2.5 tw-text-gray-900 hover:tw-text-pink-500">
                {{ item.title }}
              </h4>
              <p class="tw-mb-0">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
