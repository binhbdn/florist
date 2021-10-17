<template>
  <div class="services__tab__content">
    <div class="tab-content">
      <div
        v-for="(itemData, index) in serviceTabItemsData"
        :id="`tabs-${index + 1}`"
        :key="index"
        :class="{ show: index == 0, active: index == 0 }"
        :aria-labelledby="`btn-tab-${index + 1}`"
        class="tab-pane fade"
        role="tabpanel"
      >
        <ServicesTabItem :service-tab-item-data="itemData" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheServicesTabContent',

  data() {
    return {
      serviceTabItemsData: [],
    }
  },

  async fetch() {
    // JSON file name: services-tab
    this.serviceTabItemsData = await this.$axios
      .$get('/61508bd84a82881d6c55cb7e/latest')
      .then((res) => res.record)
      .catch((error) => console.log(error)) // eslint-disable-line no-console
  },
}
</script>

<style lang="scss">
.services__tab__content {
  padding-left: 0;

  @media only screen and (min-width: 992px) {
    padding-left: 60px;
  }
}

.services__tab__video {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 432px;
  margin-bottom: 30px;

  a {
    color: #ec4899;
    border-radius: 50%;

    &:hover {
      color: #777;
    }
  }
}

.services__tab__details__title {
  margin-top: -87px;
  margin-bottom: 36px;

  h2 {
    display: inline-block;
    margin-bottom: 18px;
    padding-top: 10px;
    padding-right: 25px;
    color: #111827;
    font-size: 50px;
    background: #fff;
  }

  span {
    display: block;
    margin-bottom: 36px;
    color: #ec4899;
    font-weight: 20;
    font-weight: 700;
  }
}

.services__tab__details__desc {
  margin-bottom: 30px;
}

.services__tab__details__desc p {
  margin-bottom: 30px;
}
</style>
