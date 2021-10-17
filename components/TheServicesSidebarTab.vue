<template>
  <div class="services__sidebar__tab">
    <ul class="nav nav-tabs" role="tablist">
      <li
        v-for="(item, index) in $t('serviceItems')"
        :key="index"
        class="nav-item"
        role="presentation"
      >
        <button
          :id="`btn-tab-${index + 1}`"
          :data-bs-target="`#tabs-${index + 1}`"
          :aria-controls="`tabs-${index + 1}`"
          :aria-selected="index == 0"
          :class="{ active: index == 0 }"
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          type="button"
        >
          <div class="services__item">
            <div class="services__item__icon">
              <img :src="item.imgUrl" />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.services__sidebar__tab {
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }

  .nav {
    display: initial;
  }

  .nav-tabs {
    border-bottom: none;
  }

  .nav-item:last-child .nav-link .services__item {
    margin-bottom: 0;
  }

  .nav-link {
    padding: 0;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &.active .services__item {
      border-color: #ec4899;
      box-shadow: 5px 5px 10px 0 #ec4899;
    }

    .services__item {
      margin-bottom: 75px;
    }
  }
}
</style>
