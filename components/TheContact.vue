<template>
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="contact__widget">
            <h2>{{ $t('footer.getInTouch') }}</h2>
            <p>{{ $t('contact.content') }}</p>
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
        <div class="col-lg-4 col-md-6">
          <div class="contact__form">
            <h2>{{ $t('contact.formTitle') }}</h2>
            <form action="#" class="text-center">
              <input
                type="email"
                class="form-control"
                :placeholder="$t('footer.email')"
              />
              <textarea
                class="form-control"
                :placeholder="$t('contact.placeholder')"
              ></textarea>
              <button type="submit" class="btn-florist btn-outline-florist">
                {{ $t('contact.btnText') }}
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1862.0308949043244!2d105.781921!3d21.0302135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b354936a69%3A0xe0059369a89d3969!2sVMO%20Holdings!5e0!3m2!1svi!2s!4v1632714125844!5m2!1svi!2s"
              height="255"
              style="border: 0"
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact {
  padding-top: 100px;
  padding-bottom: 65px;
}

.contact__widget {
  margin-bottom: 30px;

  h2 {
    margin-bottom: 24px;
    font-size: 40px;
  }

  p {
    margin-bottom: 10px;
  }

  ul li {
    list-style: none;

    a {
      color: #444;
      font-size: 15px;
      line-height: 40px;

      svg {
        color: #ec4899;
      }

      &:hover {
        color: #ec4899;
      }
    }
  }
}

.contact__form {
  margin-bottom: 30px;

  h2 {
    margin-bottom: 35px;
    font-size: 40px;
  }

  form {
    input {
      width: 100%;
      height: 46px;
      margin-bottom: 25px;
    }

    textarea {
      width: 100%;
      height: 100px;
      margin-bottom: 20px;
      padding-top: 12px;
      resize: none;
    }
  }
}

.contact__map {
  height: 310px;
  margin-bottom: 30px;

  iframe {
    width: 100%;
  }
}
</style>
