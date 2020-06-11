/* eslint-disable consistent-return */
<template>
  <div class="image__container">
    <div>
      <CForm>
        <CInputFile @change="handleImage($event)" horizontal custom />
      </CForm>
      <img v-if="imgSrc" :src="imgSrc" alt="Business Image" />
    </div>
    <button class="btn btn-primary UP__btn" @click="uploadImage" :disabled="!uploaded">
      {{ mode == "edit" ? "Update" : "Upload" }} Image
    </button>
  </div>
</template>

<script>
import Utility from '@/helpers/utilities';
import ImageService from '@/services/imageService';

export default {
  name: 'ManageImage',
  props: ['image', 'mode', 'business'],
  data() {
    return {
      assetUrl: process.env.VUE_APP_IMG_URL,
      imgSrc: '',
      uploaded: false,
    };
  },
  watch: {
    image() {
      if (this.mode == 'edit') {
        this.imgSrc = process.env.VUE_APP_IMG_URL + this.image.image;
      } else {
        this.imgSrc = '';
      }
    },
  },
  methods: {
    async handleImage(e) {
      try {
        const image = await Utility.getBase64(e[0]);
        this.imgSrc = image;
        this.uploaded = true;
      } catch (error) {
        Utility.handleError(error);
      }
    },
    async uploadImage() {
      try {
        if (this.mode === 'edit') {
          await ImageService.updateImage(this.image.id, { image: this.imgSrc });
        } else {
          await ImageService.createImage(this.business, { image: this.imgSrc });
        }
        this.uploaded = false;
        this.$emit('closeModal', true);
      } catch (error) {
        Utility.handleError(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: 200px;
  margin-top: 20px;
}

.UP__btn {
  float: right;
  margin-top: 10px;
}
</style>
