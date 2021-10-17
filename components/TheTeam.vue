<template>
  <section class="team">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-7">
          <div class="section-title">
            <span>{{ $t('ourTeam.subTitle') }}</span>
            <h2>{{ $t('ourTeam.title') }}</h2>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="team__btn">
            <a href="#" class="btn-florist btn-outline-florist">
              {{ $t('ourTeam.btnText') }}
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(teamMember, index) in teamMembers"
          :key="index"
          class="col-sm-6 col-md-6 col-lg-3"
        >
          <TeamMember :member="teamMember" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheTeam',

  data() {
    return {
      teamMembers: null,
    }
  },

  async fetch() {
    // JSON file name: our-team-member
    this.teamMembers = await this.$axios
      .$get('/614f3c399548541c29b845c3/latest')
      .then((res) => res.record)
      .catch((error) => console.log(error)) // eslint-disable-line no-console
  },
}
</script>

<style lang="scss">
.team {
  padding-top: 100px;
  padding-bottom: 60px;
}

.team__btn {
  margin-bottom: 45px;
  text-align: left;

  @media only screen and (min-width: 768px) {
    text-align: right;
  }
}

.team__item {
  margin-bottom: 30px;
  box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 50%);
}

.team__item__pic img {
  min-width: 100%;
}

.team__item__text {
  padding: 25px 20px 25px;
  text-align: center;

  h4 {
    color: #111827;
  }

  span {
    display: block;
    margin-bottom: 18px;
    color: #ec4899;
  }

  .team__item__social a {
    margin-right: 16px;
    color: #888;
    font-size: 20px;

    &:hover {
      color: #ec4899;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
