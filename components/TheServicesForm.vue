<template>
  <div class="services__tab__details__form">
    <h4>Yêu cầu báo giá</h4>
    <form action="#">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <input type="text" class="form-control" placeholder="Tên" />
        </div>
        <div class="col-md-6 col-lg-6">
          <input type="tel" class="form-control" placeholder="Số điện thoại" />
        </div>
        <div class="col-md-6 col-lg-6">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="col-md-6 col-lg-6">
          <select class="form-select">
            <option disabled>Chọn loại dịch vụ…</option>
            <option value="1" selected>Hoa theo yêu cầu</option>
            <option value="2">Hoa cho sự kiện</option>
            <option value="3">Chăm sóc cảnh quan</option>
          </select>
        </div>
        <div class="col-lg-12 text-center">
          <textarea
            class="form-control"
            placeholder="Nội dung yêu cầu báo giá"
          ></textarea>
          <button type="submit" class="btn-florist btn-outline-florist">
            Gửi yêu cầu báo giá
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.services__tab__details__form {
  padding: 30px;
  background: #f7f5fa;
  box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 50%);

  @media only screen and (min-width: 480px) {
    padding: 50px;
  }

  @media only screen and (min-width: 992px) {
    margin-left: 60px;
  }

  h4 {
    margin-bottom: 25px;
    color: #111827;
    text-align: center;
    text-transform: uppercase;
  }

  form {
    input,
    select {
      height: 46px;
      margin-bottom: 30px;
      font-size: 16px;
    }

    select {
      color: #888;
    }

    textarea {
      width: 100%;
      height: 100px;
      margin-bottom: 30px;
      font-size: 16px;
      resize: none;
    }
  }
}
</style>
