<template>
  <div class="home">
    <router-link class="btn btn-primary" to='/'>Go Home</router-link>
    <div v-if="business">
      <Listing :business="business" />
      <Images :images="business.image" />
    </div>
    <div v-else>
      Not Found
    </div>
  </div>
</template>

<script>
import BusinessService from '@/services/businessService';
import Listing from '@/components/Listing.vue';
import Images from '@/components/Images.vue';

export default {
  name: 'Bus',
  data() {
    return {
      business: null,
    };
  },
  components: { Listing, Images },
  mounted() {
    this.getBusiness();
  },
  methods: {
    getBusiness() {
      BusinessService.getBusiness(this.$route.params.id, { view: true }).then(({ data }) => {
        this.business = data;
      });
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  padding: 10px;
}
</style>
