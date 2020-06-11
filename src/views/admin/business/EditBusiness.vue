<template>
  <div>
    <div class="login__container" v-if="business">
      <BusinessForm :business="business" :type="'edit'" />
      <div class="px-5">
        <button class="btn btn-primary mb-2" @click="create" >
          Add Image
        </button>
      <Images :images="business.image" :func="editImage" />
      </div>
      <CModal :title="imageMode == 'edit' ? 'Edit Image' : 'Add Image'" :show.sync="modal">
        <ManageImage
          :mode="imageMode"
          :image="image"
          :business="business.id"
          @closeModal="closeModal"
        />
      </CModal>
    </div>
    <div v-else>
        <p>No Business</p>
    </div>
  </div>
</template>

<script>
import BusinessService from '@/services/businessService';
import Images from '@/components/Images.vue';
import ManageImage from '@/components/ManageImage.vue';
import BusinessForm from './BusinessForm.vue';

export default {
  name: 'EditBusiness',
  components: { BusinessForm, Images, ManageImage },
  data() {
    return {
      business: null,
      modal: false,
      image: null,
      imageMode: 'add',
      editImage: (e) => {
        this.imageMode = 'edit';
        this.image = e;
        this.modal = true;
      },
    };
  },
  mounted() {
    this.getBusiness();
  },
  methods: {
    getBusiness() {
      BusinessService.getBusiness(this.$route.params.id).then(({ data }) => {
        this.business = data;
      });
    },
    create() {
      this.imageMode = 'add';
      this.image = null;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
      this.getBusiness();
    },
  },
};
</script>

<style lang="scss" scoped></style>
