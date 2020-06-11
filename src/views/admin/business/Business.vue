<template>
  <div class="login__container">
    <router-link class="btn btn-primary" to="/admin/business/create">
      Create Business
    </router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">S/N</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Address</th>
          <th scope="col">View</th>
          <th scope="col">Rating</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(business, key) in store.businesses" :key="key">
          <th scope="row">{{ key + 1 }}</th>
          <td>{{ business.business_name }}</td>
          <td>{{ business.description }}</td>
          <td>{{ business.address }}</td>
          <td>{{ business.views }}</td>
          <td>{{ business.rating }}</td>
          <td>{{ business.email }}</td>
          <td>{{ business.phone }}</td>
          <td class="d-flex">
            <router-link class="btn btn-primary" :to="'/admin/business/edit/' + business.id">
              Edit
            </router-link>
            <button class="btn btn-danger" @click="onDelete(business.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import swal from 'sweetalert';

export default {
  name: 'Business',
  components: {},
  methods: {
    ...mapActions('AdminStore', ['deleteBusiness', 'activateBusiness']),
    onDelete(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          this.deleteBusiness(id);
        }
      });
    },
  },
  computed: {
    ...mapState({
      store: 'AdminStore',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
