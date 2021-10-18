<template>
  <section class="register-section">
    <div class="container">
      <div class="register-box">
        <div class="sec-title text-center">
          <h2 class="title">{{ $t('account.createNewAccount') }}</h2>
        </div>
        <div class="styled-form">
          <div id="form-messages"></div>
          <form id="contact-form" novalidate>
            <div class="row clearfix">
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="fname"
                  type="text"
                  name="fname"
                  required="required"
                  @focus="$event.target.select()"
                />
                <span class="placeholder">
                  {{ $t('account.fName') }} <span></span>
                </span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="lname"
                  type="text"
                  name="lname"
                  required="required"
                  @focus="$event.target.select()"
                />
                <span class="placeholder">
                  {{ $t('account.lName') }} <span></span>
                </span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  @focus="$event.target.select()"
                />
                <span class="placeholder">
                  {{ $t('account.emailAddress') }} <span></span>
                </span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                  @focus="$event.target.select()"
                />
                <span class="placeholder">
                  {{ $t('account.userName') }} <span></span>
                </span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  name="password"
                  required="required"
                  @focus="$event.target.select()"
                />
                <span class="placeholder">
                  {{ $t('account.password') }} <span></span>
                </span>
              </div>
              <div class="form-group col-lg-12 mb-4">
                <input
                  id="confirm_password"
                  type="password"
                  name="confirm_password"
                  required="required"
                  @focus="$event.target.select()"
                />
                <span class="placeholder">
                  {{ $t('account.confirmPassword') }} <span></span>
                </span>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                <button
                  type="button"
                  class="btn-florist border-0 mb-3"
                  @click="registerFormSubmit"
                >
                  {{ $t('nav.register') }}
                </button>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                <div class="users">
                  {{ $t('account.alreadyHaveAccount') }}
                  <NuxtLink :to="localePath('/dang-nhap')">
                    {{ $t('nav.signIn') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      password: '',
    }
  },

  methods: {
    registerFormSubmit() {
      const mustContainTheseChars = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
      const containsRequiredChars = mustContainTheseChars.test(this.password)
      // let notTheseChars = /["'?&/<>\s]/;
      // let containsForbiddenChars = notTheseChars.test(this.password);

      if (containsRequiredChars) {
        alert('Password hợp lệ')
        // return true;
      } else {
        alert('Password không hợp lệ')
        // return false;
      }
    },
  },
}
</script>

<style lang="scss">
.register-section {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
}

.register-section .register-box {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 45px 40px 35px;
  background: #f7f5fa;
  border-radius: 10px;
  box-shadow: 0 0 15px #555;

  .sec-title {
    margin-bottom: 30px;
  }
}

.styled-form {
  position: relative;
  max-width: 600px;
  margin: 0 auto;

  .form-group {
    position: relative;

    label {
      position: relative;
      margin-bottom: 15px;
      color: #626262;
      font-weight: 400;
      font-size: 16px;
    }

    input {
      position: relative;
      width: 100%;
      height: 50px;
      padding: 6px 30px;
      color: #222;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: inset 0 0 15px #ddd;
      transition: all 500ms ease;

      &:focus {
        border-color: #f45d96;
      }
    }

    .users {
      position: relative;
      color: #626262;
      font-size: 16px;
      text-align: center;

      a {
        position: relative;
        color: #ff5421;
        font-weight: 600;

        &:hover {
          color: #505050;
        }
      }
    }
  }

  input[required='required']:valid + .placeholder,
  input[required='required']:focus + .placeholder {
    display: none;
  }

  .placeholder {
    position: absolute;
    top: 12px;
    left: 46px;
    color: #111827;
    font-weight: nomal;
    font-size: 16px;
    line-height: inherit;
    background-color: transparent;
  }

  .placeholder span::after {
    color: red;
    content: '(*)';
  }
}

html[lang='vi'] {
  .register-section {
    input#fname:hover + .placeholder span::after {
      content: '(*) = không được bỏ trống';
    }

    input#password:hover + .placeholder span::after {
      content: '(*) ≥8 ký tự, ≥1 in hoa, ≥1 số';
    }
  }
}

html[lang='en'] {
  .register-section {
    input#fname:hover + .placeholder span::after {
      content: '(*) = not be empty';
    }

    input#password:hover + .placeholder span::after {
      content: '(*) ≥8 characters, ≥1 uppercase, ≥1 number';
    }
  }
}

html[lang='ja'] {
  .register-section {
    input#fname:hover + .placeholder span::after {
      content: '(*) = 空ではない';
    }

    input#password:hover + .placeholder span::after {
      content: '(*) ≥8 文字, ≥1 大文字, ≥1 数字';
    }
  }
}
</style>
