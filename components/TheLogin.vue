<template>
  <div class="fl-login">
    <div class="container">
      <div class="noticed">
        <div class="main-part">
          <div class="method-account">
            <h2 class="login">{{ $t('nav.signIn') }}</h2>
            <form>
              <input
                v-model="usernameOrEmail"
                type="text"
                name="username_email"
                :placeholder="
                  $t('account.userName') + ' | ' + $t('account.emailAddress')
                "
                required
              />
              <input
                v-model="password"
                type="password"
                name="password"
                :placeholder="$t('account.password')"
                required
              />
              <button type="button" class="btn-florist" @click="login">
                {{ $t('nav.signIn') }}
              </button>
              <div class="users">
                <p>
                  {{ $t('account.haveNotRegisteredYet') }}
                  <NuxtLink :to="localePath('/dang-ky')">
                    {{ $t('account.createNewAccount') }}
                  </NuxtLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLogin',

  data() {
    return {
      usernameOrEmail: '',
      password: '',
    }
  },

  methods: {
    async login() {
      if (this.usernameOrEmail !== '' && this.password !== '') {
        // API endpoint name: login
        await this.$axios
          .$get('/61549ead9548541c29bad6ae/latest')
          .then((res) => {
            for (const item of res.record) {
              if (
                item.username === this.usernameOrEmail ||
                item.email === this.usernameOrEmail
              ) {
                if (item.password === this.password) {
                  this.$store.commit('updateSignInStatus', true)
                  break
                }
              }
            }

            if (this.$store.state.isSignedIn) {
              if (
                this.$nuxt.context.from.path === this.localePath('/') ||
                this.$nuxt.context.from.path === this.$route.path
              ) {
                this.$router.push(this.localePath('/'))
              } else {
                this.$router.go(-1)
              }
            } else {
              alert(this.$t('alert.logInFail'))
            }
          })
          .catch((error) => console.log(error)) // eslint-disable-line no-console
      } else {
        alert(this.$t('alert.noEmptyUsernamePassword'))
      }
    },
  },
}
</script>

<style lang="scss">
.fl-login {
  padding-top: 30px;
  padding-bottom: 30px;

  @media only screen and (min-width: 992px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .noticed {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    background: #f7f5fa;
    border-radius: 10px;
    box-shadow: 0 0 15px #555;

    .main-part {
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
      border-radius: 5px;

      .method-account {
        .login {
          margin-bottom: 26px;
          color: #111827;
          font-weight: 700;
          font-size: 30px;
          line-height: 40px;

          @media only screen and (min-width: 768px) {
            font-size: 40px;
            line-height: 50px;
          }
        }

        label {
          color: #505050;
          font-weight: 600;
          font-size: 15px;
          line-height: 30px;
        }

        input {
          display: block;
          width: 100%;
          height: 45px;
          margin-bottom: 30px;
          padding: 10px 18px;
          color: #505050;
          font-weight: 400;
          font-size: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: inset 0 0 15px #ddd;

          &:focus {
            border-color: #f45d96;
          }
        }

        span {
          padding-left: 10px;
          color: #505050;
          font-weight: 600;
          font-size: 15px;
          line-height: 30px;
        }

        .btn-florist {
          margin-bottom: 12px;
          border: none;
        }

        .users p {
          margin: 0;
          color: #505050;

          a {
            color: #ff5421;
            font-weight: 600;
            font-size: 15px;
            line-height: 26px;

            &:hover {
              color: #505050;
            }
          }
        }
      }
    }
  }
}
</style>
