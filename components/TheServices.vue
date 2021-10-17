<template>
  <section class="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-title">
            <span>{{ $t('service.subTitle') }}</span>
            <h2>{{ $t('service.title') }}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in $t('serviceItems')"
          :key="index"
          class="col-sm-6 col-md-6 col-lg-4"
        >
          <div class="services__item">
            <div class="services__item__icon">
              <img :src="item.imgUrl" />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.services {
  padding-bottom: 30px;

  @media only screen and (min-width: 992px) {
    padding-bottom: 70px;
  }

  .section-title {
    margin-bottom: 75px;
  }
}

.services__item {
  position: relative;
  margin-bottom: 70px;
  padding: 60px 15px 35px;
  text-align: center;
  border: 1px solid #f5deef;

  &:hover {
    border-color: #ec4899;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 60px 30px 35px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 60px 50px 35px;
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 30px;
  }

  .services__item__icon {
    position: absolute;
    top: -35px;
    right: 0;
    left: 0;
    width: 100px;
    margin: 0 auto;
    text-align: center;
    background: #fff;
  }

  h4 {
    margin-bottom: 15px;
    color: #111827;
  }

  p {
    margin-bottom: 0;
    text-align: justify;
  }
}
</style>
