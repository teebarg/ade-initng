<template>
  <div class="home">
    <router-link class="btn btn-primary" to='/'>Go Home</router-link>
    <div>
      <div>
        <p class="font-weight-bold">Reports that can be generated</p>
        <ul>
          <li>Address with the most Listings</li>
          <li>Category with the most Listings</li>
          <li>Active and Inactive Listings</li>
        </ul>
      </div>
      <div>
        <p class="font-weight-bold">Feature that can be added</p>
        <ul>
          <li>GoogleMap for better address directory</li>
          <li>Review of Business by confirmed Clients</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Answer',
};
</script>

<style scoped>
.home {
  height: 100%;
  padding: 10px;
}
</style>
