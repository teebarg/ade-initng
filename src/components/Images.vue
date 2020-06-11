<template>
  <div class="image__container">
    <div v-for="(image, key) in images" :key="key">
      <img :src="assetUrl + image.image" :alt="image.image" @click="func(image)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Images',
  props: ['images', 'func'],
  data() {
    return {
      assetUrl: process.env.VUE_APP_IMG_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.image__container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.image__container img {
  max-width: 100%;
  height: 250px;
}
</style>
