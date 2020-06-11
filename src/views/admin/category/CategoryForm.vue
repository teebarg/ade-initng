<template>
  <div>
    <h2 class="text-center">{{ this.type == "edit" ? "Update" : "Create" }} category</h2>
    <form id="category-form" class="p-5" @submit.prevent="submit">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            :class="{ hasError: $v.form.name.$error }"
            class="form-control"
            placeholder="Category Name"
            v-model="form.name"
          />
        </div>
      </div>
      <button class="btn btn-primary" type="submit">
        {{ this.type == "edit" ? "Update" : "Create" }}
      </button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CategoryForm',
  props: ['category', 'type'],
  data() {
    return {
      form: {
        name: (this.category && this.category.name) || '',
      },
    };
  },
  validations: {
    form: {
      name: { required },
    },
  },
  methods: {
    ...mapActions('AdminStore', ['createCategory', 'updateCategory']),
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      if (this.type === 'edit') {
        this.updateCategory({ id: this.category.id, payload: this.form });
      } else {
        this.createCategory(this.form);
      }
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
