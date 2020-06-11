<template>
  <div class="login__container">
    <CategoryForm v-if="category"  :category="category" :type="'edit'"/>
  </div>
</template>

<script>
import BusinessService from '@/services/categoryService';
import CategoryForm from './CategoryForm.vue';

export default {
  name: 'EditCategory',
  components: { CategoryForm },
  data() {
    return {
      category: null,
    };
  },
  mounted() {
    this.getBusiness();
  },
  methods: {
    getBusiness() {
      BusinessService.getCategory(this.$route.params.id).then(
        ({ data }) => {
          this.category = data;
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
