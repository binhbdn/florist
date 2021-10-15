<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="row">
          <div class="col-md-3">
            <div class="footer__logo">
              <NuxtLink class="d-inline-block" to="/">
                <FloristLogo />
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <div class="footer__top__text">
              <p class="mb-0">{{ $t('footer.introduce') }}</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer__top__social">
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Facebook"
                ><IconFacebook size="24"
              /></a>
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Twitter"
                ><IconTwitter size="24"
              /></a>
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Instagram"
                ><IconInstagram size="24"
              /></a>
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Linkedin"
                ><IconLinkedin size="24"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__options">
        <div class="row">
          <div class="col-lg-2 col-md-3">
            <div class="footer__widget footer__widget--info">
              <h4>{{ $t('footer.info') }}</h4>
              <ul>
                <li>
                  <NuxtLink :to="localePath('/gioi-thieu')">
                    {{ $t('footer.about') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/dich-vu')">
                    {{ $t('nav.service') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/lien-he')">
                    {{ $t('footer.contact') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3">
            <div class="footer__widget footer__widget--guide">
              <h4>{{ $t('footer.guide') }}</h4>
              <ul>
                <li>
                  <NuxtLink :to="localePath('/huong-dan-dat-hang')">
                    {{ $t('footer.order') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/huong-dan-doi-hang')">
                    {{ $t('footer.exchange') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/huong-dan-thanh-toan')">
                    {{ $t('nav.checkout') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer__newslatter">
              <h4>{{ $t('footer.newletter') }}</h4>
              <p>{{ $t('footer.newletterInfo') }}</p>
              <form action="#">
                <input type="text" :placeholder="$t('footer.email')" />
                <button type="submit">{{ $t('footer.subscribe') }}</button>
              </form>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer__widget footer__widget--address">
              <h4>{{ $t('footer.getInTouch') }}</h4>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps/place/VMODEV/@21.0302135,105.781921,18.25z/data=!4m5!3m4!1s0x313454b354936a69:0xe0059369a89d3969!8m2!3d21.031066!4d105.781948"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconLocation /> 68, Tôn Thất Thuyết, Cầu Giấy, Hà Nội
                  </a>
                </li>
                <li>
                  <a href="tel:+842433120103"
                    ><IconTelephone /> +84 24 3312 0103</a
                  >
                </li>
                <li>
                  <a href="mailto:info@florist.com"
                    ><IconEnvelope /> info@florist.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p>Copyright ©2021 Florist. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>

    <button
      id="back-to-top"
      class="text-white p-0 border-0 rounded-circle"
      :title="$t('footer.scrollBackToTop')"
      type="button"
      @click="backToTop"
    >
      <IconArrowUp />
    </button>
  </footer>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

      // Get the button:
      const myButton = document.getElementById('back-to-top')

      // When the user scrolls down 100px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction()
      }

      function scrollFunction() {
        if (
          document.documentElement.scrollTop > 100 ||
          document.body.scrollTop > 100
        ) {
          myButton.style.display = 'block'
        } else {
          myButton.style.display = 'none'
        }
      }
    })
  },

  methods: {
    // When the user clicks on the button, scroll to the top of the document
    backToTop() {
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
      document.body.scrollTop = 0 // For Safari
    },
  },
}
</script>
