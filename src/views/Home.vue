<template>
  <div>
    <h3 class="text-center mb-0 mt-4">Business Listing</h3>
    <form id="category-form" class="p-5" @submit.prevent="submit">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Search</label>
          <input
            id="name"
            type="text"
            class="form-control"
            placeholder="Business Name or Description"
            v-model="search"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="order">Order By</label>
          <select id="order" class="form-control" @change="change" v-model="orderBy">
            <option value="id">Entries</option>
            <option value="rating">Ratings</option>
          </select>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Search</button>
    </form>

    <div class="listing px-5">
      <span v-for="(business, key) in businesses" :key="key" @click="handleClick(business.id)">
        <CWidgetBrand
          color="facebook"
          :right-header="business.rating"
          right-footer="rating"
          :left-header="`${business.views}`"
          left-footer="views"
        >
          <div class="my-4">
            <h5>{{ business.business_name }}</h5>
          </div>
        </CWidgetBrand>
      </span>
    </div>
  </div>
</template>

<script>
import BusinessService from '@/services/businessService';

export default {
  name: 'Home',
  data() {
    return {
      query: { q: '' },
      search: '',
      businesses: [],
      orderBy: 'id',
    };
  },
  mounted() {
    this.getBusiness(this.$route.query);
  },
  methods: {
    getBusiness(query) {
      BusinessService.getBusinesses(query).then(({ data: { data } }) => {
        this.businesses = data;
      });
    },
    submit() {
      this.getBusiness({ q: this.search });
    },
    handleClick(e) {
      this.$router.push(`/business/${e}`);
    },
    change() {
      this.businesses = this.businesses.sort((a, b) => b[this.orderBy] - a[this.orderBy]);
    },
  },
};
</script>

<style scoped>
.listing {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
</style>
