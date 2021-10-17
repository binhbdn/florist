<template>
  <section id="latest-post" class="latest-post">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-6">
          <div class="section-title">
            <span>{{ $t('latestPosts.subTitle') }}</span>
            <h2>{{ $t('latestPosts.title') }}</h2>
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="latest__btn">
            <NuxtLink
              :to="localePath('/blog')"
              class="btn-florist btn-outline-florist"
              >{{ $t('latestPosts.btnText') }}</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in latestPostsItems"
          :key="item.id"
          class="col-lg-4 col-md-6"
        >
          <div class="blog__item">
            <div class="blog__item__pic">
              <img :src="item.imgUrl" />
            </div>
            <div class="blog__item__text">
              <div class="label">
                <span>{{ item.category }}</span>
              </div>
              <h4 class="text-center">
                <NuxtLink :to="localePath('/blog/' + item.postId)">{{
                  item.title
                }}</NuxtLink>
              </h4>
              <p>
                {{ item.content }}
              </p>
              <p class="text-end">
                <BaseIconCalendar />{{ item.postDate }} <BaseIconAuthor />{{
                  item.author
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheLatestPosts',

  data() {
    return {
      latestPostsItems: [],
      /*
      item data:
      {
          "id": 1,
          "postId": 56,
          "imgUrl": "https://binhbdn.github.io/flower-shop/img/blog/*.jpg",
          "category": "",
          "title": "",
          "content": "",
          "author": "Admin",
          "postDate": ""
      }
      */
    }
  },

  mounted() {
    this.getLatestPostsItems()
  },

  methods: {
    async getLatestPostsItems() {
      const res = await this.$store.dispatch('getLatestPostsItems')
      this.latestPostsItems = res.record
    },
  },
}
</script>

<style lang="scss">
.latest-post {
  padding-top: 100px;
  padding-bottom: 50px;
}

.latest__btn {
  margin-bottom: 45px;
  text-align: left;

  @media (min-width: 768px) {
    text-align: right;
  }
}

.blog__item {
  margin-bottom: 50px;
  box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 50%);
  transition: all 0.3s ease;
}

.blog__item:hover {
  box-shadow: 5px 5px 10px 0 #ec4899;
  transform: scale(1.05);

  .blog__item__text .label span {
    background: #ec4899;
  }

  .blog__item__text h4 a {
    font-style: italic;
  }
}

.blog__item__pic img {
  min-width: 100%;
  height: 100%;
}

.blog__item__text {
  position: relative;
  padding: 38px 35px 30px;
}

.blog__item__text .label {
  position: absolute;
  top: -13px;
  right: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
}

.blog__item__text .label span {
  display: inline-block;
  padding: 4px 10px 2px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background: #111827;
  transition: all, 0.3s;
}

.blog__item__text h4 {
  margin-bottom: 12px;
}

.blog__item__text h4 a {
  color: #111827;
  line-height: 31px;
}

.blog__item__text p {
  margin-bottom: 10px;
  text-align: justify;
}

.blog__item__text .text-end {
  color: #888;
  font-weight: 500;
  font-size: 14px;

  svg {
    display: inline-block;
    margin-right: 3px;
    color: #ec4899;
    vertical-align: text-bottom;

    & + svg {
      margin-left: 15px;
    }
  }
}
</style>
