<template>
  <div>
    <h2 class="text-center">{{ this.type == "edit" ? "Update" : "Create" }} business</h2>
    <form id="business-form" class="p-5" @submit.prevent="submit">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            :class="{ hasError: $v.form.business_name.$error }"
            class="form-control"
            placeholder="Business Name"
            v-model="form.business_name"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="description">Description</label>
          <input
            id="description"
            type="text"
            :class="{ hasError: $v.form.description.$error }"
            class="form-control"
            placeholder="Description"
            v-model="form.description"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="active">Active</label>
          <select id="active" class="form-control" v-model="form.status">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="name">Email</label>
          <input
            id="name"
            type="text"
            :class="{ hasError: $v.form.email.$error }"
            class="form-control"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="name">Phone</label>
          <input
            id="name"
            type="text"
            :class="{ hasError: $v.form.phone.$error }"
            class="form-control"
            placeholder="Phone"
            v-model="form.phone"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="rating">Ratings</label>
          <select id="rating" class="form-control" v-model="form.rating">
            <option v-for="(item, key) in ratings" :key="key">{{ item }}</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="address">Address</label>
          <input
            id="employment_date"
            type="text"
            :class="{ hasError: $v.form.address.$error }"
            class="form-control"
            placeholder="Address"
            v-model="form.address"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-12">
          <label for="raise">Category</label>
          <div class="d-flex">
            <div v-for="(item, key) in store.categories" :key="key" class="mr-2">
              <input type="checkbox" name="categories" class="form-control" style="width: 50px" :value="item.id" v-model="form.categories" />{{item.name}}
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">
        {{ this.type == "edit" ? "Update" : "Create" }}
      </button>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'BusinessForm',
  props: ['business', 'type'],
  data() {
    return {
      form: {
        business_name: (this.business && this.business.business_name) || '',
        description: (this.business && this.business.description) || '',
        rating: (this.business && this.business.rating) || 1,
        views: (this.business && this.business.views) || '',
        status: (this.business && this.business.status) || 'true',
        email: (this.business && this.business.email) || '',
        phone: (this.business && this.business.phone) || '',
        address: (this.business && this.business.address) || '',
        categories: this.getC(),
      },
      ratings: [1, 2, 3, 4, 5],
    };
  },
  validations: {
    form: {
      business_name: { required },
      description: { required },
      rating: { required },
      status: { required },
      email: { required, email },
      phone: { required },
      address: { required },
    },
  },
  methods: {
    ...mapActions('AdminStore', ['createBusiness', 'updateBusiness']),
    submit() {
      Object.keys(this.form).forEach((key) => this.form[key] === '' && delete this.form[key]);
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      if (this.type === 'edit') {
        this.updateBusiness({ id: this.business.id, payload: this.form });
      } else {
        this.createBusiness(this.form);
      }
    },
    getC() {
      const result = [];
      if (this.business) {
        this.business.categories.map((item) => result.push(item.id));
      }
      return result;
    },
  },
  computed: {
    ...mapState({
      store: 'AdminStore',
    }),
  },
};
</script>

<style scoped></style>
