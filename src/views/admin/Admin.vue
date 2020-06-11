<template>
  <div class="c-app">
    <TheSidebar />
    <CWrapper>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TheSidebar from '../../components/TheSidebar.vue';

export default {
  name: 'Admin',
  components: {
    TheSidebar,
  },
  mounted() {
    this.getBusinesses();
    this.getCategories();
  },
  methods: {
    ...mapActions('AdminStore', ['getBusinesses', 'getCategories']),
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
