<template>
  <div class="login__container">
    <router-link class="btn btn-primary" to="/admin/category/create">
      Create Category
    </router-link>
    <table class="table table-striped">
      <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(category, key) in store.categories" :key="key">
          <td scope="row">{{ key + 1 }}</td>
          <td>{{ category.name }}</td>
          <td class="d-flex">
            <router-link class="btn btn-primary" :to="'/admin/category/edit/' + category.id">
              Edit
            </router-link>
            <button class="btn btn-danger" @click="onDelete(category.id)">Delete</button>
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
  name: 'Category',
  methods: {
    ...mapActions('AdminStore', ['deleteCategory']),
    onDelete(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          this.deleteCategory(id);
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
