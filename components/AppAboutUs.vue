<template>
  <section class="tw-py-16">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="section-title">
            <span>{{ $t('footer.about') }}</span>
            <h2>{{ $t('about.title1') }}</h2>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
          <div class="tw-mb-11">
            <p class="tw-mb-0 tw-text-lg">
              {{ $t('about.content1') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <div
            class="
              tw-flex tw-items-center tw-justify-center tw-h-[535px] tw-mb-7.5
              set-bg
            "
            style="background-image: url('img/about/about-video.jpg')"
          >
            <a
              class="tw-text-pink-500 hover:tw-text-white tw-rounded-full"
              href="https://www.youtube.com"
            >
              <IconPlayCircle size="64" />
            </a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="about-text">
            <span
              class="
                tw-block
                tw-mb-2
                tw-text-pink-500
                tw-font-bold
                tw-tracking-4px
                tw-uppercase
              "
              >{{ $t('about.subTitle2') }}</span
            >
            <h2 class="tw-mb-7 tw-text-gray-900 tw-text-4xl tw-leading-snug">
              {{ $t('about.title2') }}
            </h2>
            <p class="tw-mb-7.5 tw-text-lg">
              {{ $t('about.content2') }}
            </p>
            <NuxtLink :to="localePath('/lien-he')" class="btn-florist">
              {{ $t('footer.contact') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.about-text {
  padding: 100px 90px 105px 70px;
  box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 50%);
  @apply tw-mb-7.5 sm:tw-mt-0 sm:tw-ml-0 lg:tw--mt-16 lg:tw--ml-24 tw-bg-white;

  @screen sm {
    padding: 50px 70px 50px 70px;
  }

  @screen md {
    padding: 50px 90px 50px 70px;
  }

  @screen lg {
    padding: 100px 90px 105px 70px;
  }
}
</style>
