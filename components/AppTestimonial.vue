<template>
  <div
    id="myTestimonial"
    class="testimonial carousel slide carousel-dark"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators pb-4">
      <button
        v-for="index in 3"
        :key="index"
        :data-bs-slide-to="index - 1"
        :aria-label="'Slide ' + index"
        :class="{ active: index == 1 }"
        data-bs-target="#myTestimonial"
        type="button"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="item in testimonialItems"
        :key="item.id"
        :class="{ active: item.id == 1 }"
        class="carousel-item"
        data-bs-interval="5000"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="carousel-caption row justify-content-center">
                <div class="col-lg-7">
                  <div class="testimonial__text mx-5">
                    <img
                      src="data:image/webp;base64,UklGRmACAABXRUJQVlA4TFMCAAAvQgANEOdgkG2k7V7y/UWmYTZtGzVT/3+2U4nitm0j2fv/M2tPIYhkG/8SvPcT+JU1owkJXoD6m9l/rzXRFY0EKYAVEUqgSIK4IaBhQCsBU/kyYZNm3il9t+tCsm3bUdxcJIwxhUt0B+T4/f+Poo5kmElE/ydAyc8NYFlef0zNu+8LOJblx6npROn3RyO7KDy+ujpH5eGbzFS+rGaAtyR5P67cF2sQoJfU+X4+Aa7Pigjxdu/iCVyuiVe2DwAvayZZBBgekXwANmsnuRPon5FmYLMHZCtc7iENwKtggLlCtsJhVX2FBiDmHMll+XEZuRNi2cz9WL4/LKMJ6DKaE/fFpdQDXVF33u7Xj6UUYM4pnhkYUgowF8mFDGyW8oDL3c2PM8CY8oAVJbs+7sBlCb1hLrv7HegTCjDUSbIJ2Czh4KqTBTgsMcK7idQDMaEdfJ26E2KiAxppgssSE0wNNMKW0Aq+ke0wJDyEFgZ0idBOEeZHtINPzDC06iEkBDQJuQixlYPtnzM4n9n+hh5Cg+43/w2nGrnf7McFU41fLsrHJj8b5aeV2Re1kxq4jcrdqWwD2EM+ejXw3EN+Hk1lEXibmhbYAWevtjcHjGpcMMFueiBC0GOA1xMB/GMOVj1yQPfYAPMzgB6LEP8LWsE1e0N/8xCadbDrDX2zDdytg6NZD0ERDms0AkqeMLbaIMpOeFkTf0FMjYBvYi84TfLA8eFq7PcFBGUD8Pq1GvfnAHpJijTfu1y303xW0u+NJlOhTY3OXlmL81pzhtir0sdw1qzvaLoDAA=="
                    />
                    <p>“{{ item.content }}”</p>
                    <h4>{{ item.name }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myTestimonial"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myTestimonial"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppTestimonial',

  data() {
    return {
      testimonialItems: [],
    }
  },

  async fetch() {
    // JSON file name: testimonial-items
    this.testimonialItems = await this.$axios
      .$get('/614f436b4a82881d6c55486c/latest')
      .then((res) => res.record)
      .catch((error) => console.log(error)) // eslint-disable-line no-console
  },
}
</script>

<style lang="scss">
.testimonial {
  position: relative;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
  background: #eaeaea;

  &::before {
    position: absolute;
    top: 0;
    left: -440px;
    z-index: -1;
    width: 802px;
    height: 842px;
    background-image: url('~@/assets/img/testimonial/left-bg.png');
    content: '';
  }

  @media (min-width: 992px) {
    &::after {
      position: absolute;
      right: -210px;
      bottom: -48px;
      z-index: -1;
      width: 697px;
      height: 688px;
      background-image: url('~@/assets/img/testimonial/right-bg.png');
      content: '';
    }
  }

  .carousel-item {
    height: 470px;

    @media (min-width: 576px) {
      height: 350px;
    }

    @media (min-width: 768px) {
      height: 280px;
    }

    @media (min-width: 992px) {
      height: 330px;
    }

    @media (min-width: 1400px) {
      height: 280px;
    }
  }

  img {
    display: inline-block;
    width: auto;
  }

  .testimonial__text {
    text-align: center;

    p {
      margin-top: 38px;
      margin-bottom: 30px;
      font-size: 23px;
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      line-height: 1.8;
    }

    h4 {
      margin-bottom: 8px;
      color: #111827;
      font-size: 20px;
    }
  }
}
</style>
