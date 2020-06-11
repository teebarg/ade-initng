<template>
  <div class="login__container">
    Create Business
    <BusinessForm  />
  </div>
</template>

<script>
import BusinessForm from './BusinessForm.vue';

export default {
  name: 'AddBusiness',
  components: {
    BusinessForm,
  },
};
</script>

<style lang="scss" scoped>

</style>
