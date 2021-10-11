<template>
  <div class="instagram">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="instagram__post">
            <div
              v-for="index in 5"
              :key="index"
              class="instagram__post__item set-bg"
              :style="{
                'background-image':
                  'url(https://binhbdn.github.io/flower-shop/img/instagram/insta-' +
                  index +
                  '.jpg)',
              }"
            >
              <div class="instagram__post__item__hover">
                <IconInstagram size="30" />
                <h6>Follow us <a href="#">@florist</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
