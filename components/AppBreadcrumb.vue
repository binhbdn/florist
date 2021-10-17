<template>
  <div class="breadcrumb set-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>
              <slot />
            </h2>
            <div class="breadcrumb__links">
              <slot name="links"></slot>
              <span>
                <slot name="endpoint"></slot>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.breadcrumb {
  padding: 52px 0 60px;
  background-image: url('~@/assets/img/breadcrumb/breadcrumb-bg.jpg');
}

.breadcrumb__text h2 {
  color: #111827;
  font-weight: 500;
  font-size: 50px;
}

.breadcrumb__links {
  a {
    position: relative;
    display: inline-block;
    margin-right: 28px;
    color: #ec4899;
    font-size: 16px;
    text-transform: uppercase;

    &::after {
      position: absolute;
      top: -1px;
      right: -18px;
      color: #aeaeae;
      content: "|";
    }
  }

  span {
    display: inline-block;
    color: #111827;
    font-size: 16px;
    text-transform: uppercase;
  }
}
</style>
