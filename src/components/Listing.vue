<template>
  <div class="listing__container" v-if="business">
    <div>
      <h4><span>Business Name: </span>{{ business.business_name }}</h4>
      <p><span>Business Desc: </span>{{ business.description }}</p>
      <p><span>Address: </span>{{ business.address }}</p>
      <p><span>Email: </span>{{ business.email }}</p>
      <p><span>Phone: </span>{{ business.phone }}</p>
      <p><span>Views: </span>{{ business.views }}</p>
      <p><span>Rating: </span>{{ business.rating }}</p>
      <p><span>Status: </span>{{ business.active }}</p>
      <p><span>Categories: </span> <CBadge color="success" class="mr-1" v-for="(cat, key) in business.categories" :key="key">{{cat.name}}</CBadge></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listing',
  props: ['business'],
};
</script>

<style lang="scss" scoped>
.listing__container {
  padding: 20px;
  span{
    font-weight: 600;
  }
}
</style>
