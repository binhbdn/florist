<template>
  <!-- Product Preview Modal -->
  <div
    id="productPreviewModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">Chi tiết sản phẩm</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-5">
          <div class="tw-text-center tw-overflow-hidden">
            <img
              v-if="quickViewProductItem"
              :src="quickViewProductItem.bgImgUrl"
              class="tw-mb-12 tw-w-[400px]"
            />
            <table class="table table-striped  table-product-preview">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, name) in quickViewProductItem" :key="name">
                  <td>{{ name }}</td>
                  <td>{{ value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <ul class="tw-mx-12">
            <li v-for="(value, name) in quickViewProductItem" :key="name">
              {{ name }}: {{ value }}
            </li>
          </ul> -->
          <!-- <pre>
          {{ quickViewProductItem }}
          </pre> -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    quickViewProductItem() {
      return this.$store.state.quickViewProductItem
    },
  },
}
</script>
