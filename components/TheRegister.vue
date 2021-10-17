<template>
  <section class="register-section">
    <div class="container">
      <div class="register-box">
        <div class="sec-title text-center">
          <h2 class="title">Tạo tài khoản mới</h2>
        </div>
        <div class="styled-form">
          <div id="form-messages"></div>
          <form id="contact-form">
            <div class="row clearfix">
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="fname"
                  type="text"
                  name="fname"
                  required="required"
                />
                <span class="placeholder"> Tên <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="lname"
                  type="text"
                  name="lname"
                  required="required"
                />
                <span class="placeholder"> Họ <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                />
                <span class="placeholder"> Địa chỉ email <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                />
                <span class="placeholder"> Tên tài khoản <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3" :title="passwordTitle">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  name="password"
                  required="required"
                />
                <span class="placeholder"> Mật khẩu <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-4">
                <input
                  id="confirm_password"
                  type="password"
                  name="confirm_password"
                  required="required"
                />
                <span class="placeholder">
                  Xác nhận Mật khẩu <span></span
                ></span>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                <button
                  type="button"
                  class="btn-florist border-0 mb-3"
                  @click="registerFormSubmit"
                >
                  Đăng ký
                </button>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                <div class="users">
                  Bạn đã có một tài khoản?
                  <router-link to="/dang-nhap">Đăng nhập</router-link>
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
      passwordTitle: '',
    }
  },

  created() {
    this.passwordTitle =
      'không được chứa các ký tự: " ' + " ' ? & / < > hoặc khoảng trắng"
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

  input#fname:hover + .placeholder span::after {
    content: '(*) = không được bỏ trống';
  }

  input#password:hover + .placeholder span::after {
    content: '(*) >= 8 ký tự, 1 ký tự in thường, 1 số';
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
</style>
