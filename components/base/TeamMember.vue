<template>
  <div class="team__item">
    <div class="team__item__pic">
      <img :src="member.imgUrl" />
    </div>
    <div class="team__item__text">
      <h4>{{ member.fullName }}</h4>
      <span>{{ member.position }}</span>
      <div class="team__item__social">
        <a
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Facebook"
          ><IconFacebook size="24"
        /></a>
        <a
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Twitter"
          ><IconTwitter size="24"
        /></a>
        <a
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Instagram"
          ><IconInstagram size="24"
        /></a>
        <a
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Linkedin"
          ><IconLinkedin size="24"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: { type: Object, default: null },
  },
}
</script>
