<template>
  <div class="login__container">
    <div class="elevate">
      <div class="left d-flex align-items-center justify-content-center">
        <div>
          <h5>Lets build together</h5>
          <p>
            Boost your productivity by making it easier for everyone to access boards in one
            location.
          </p>
          <CForm @submit.prevent="onSubmit">
            <CInput
              label="Email"
              invalid-feedback="Enter a valid email address"
              valid-feedback="Thank you :)"
              :class="[$v.form.email.$dirty ? $v.form.email.$invalid ? 'is-invalid' : 'is-valid' : '']"
              v-model.trim="$v.form.email.$model"
            />
            <CInput
              label="Password"
              valid-feedback="Thank you :)"
              invalid-feedback="Please provide at least 8 characters."
              :class="[$v.form.password.$dirty ? $v.form.password.$invalid ? 'is-invalid' : 'is-valid' : '']"
              v-model.trim="$v.form.password.$model"
            />
            <CButton color="danger" size="sm" shape="pill" type="submit">Login In</CButton>
          </CForm>
        </div>
      </div>
      <div class="right">
        <img src="/img/assets/empty-board.svg" alt="team" />
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('AdminStore', ['login']),
    onSubmit() {
      this.login(this.form);
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  background: #ffffff;
}

.login__container > div {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
}

.login__container > div > .left > div {
  width: 70%;
}

.login__container > div > .right {
  background-image: url("/img/assets/wavy.svg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
}
</style>
