<template>
  <div class="">
    <section class="bg">
      <b-container class="mt-3">
        <b-row class="mx-0 justify-content-center">
          <b-col md="5" class="mb-5">
            <div class="login-form login-form_" data-aos="fade-up">
              <div class="contact-form avenir pt-4 small raleway">
                <h3 class="text-center font-weight-bold mb-4 pb-4 pt-4">
                  Login to your account
                </h3>
                <b-form @submit.prevent="userLogin">
                  <b-form-group>
                    <b-form-input
                      placeholder="Username"
                      v-model="login.Username"
                      name="user_email"
                      type="text"
                      id="email"
                    >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      placeholder="Password"
                      v-model="login.Password"
                      name="user_password"
                      type="password"
                      id="password"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group class="newpost">
                    <button
                      :disabled="!login.Password || !login.Username || spinner"
                      class="mt-2 btn-sacademy"
                      style="font-size: 16px"
                      type="submit"
                      value="Send"
                    >
                      Login
                      <b-spinner
                        v-if="spinner"
                        label="Spinning"
                        style="margin-left: 5%"
                      ></b-spinner>
                    </button>
                  </b-form-group>

                  <div class="text-center pt-2 pb-4">
                    <a href="#" class="text-dark">forgot password</a>
                  </div>

                  <div class="text-center pt-2">
                    <p class="terms">
                      Dont have an account? <router-link to="/join">
                       Join here
                      </router-link>
                    </p>
                  </div>

                  <!-- <div class="d-flex justify-content-end">
                <div>
                  <button class="bg-sea-blue  btn-lg btn mb-4 br-0" style="font-size: 11px"> SEND MESSAGE</button>
                </div>
              </div> -->
                </b-form>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: "headerr",
   auth: 'guest',
  data() {
    return {
      spinner: false,
      login: {
        Username: "samuel@igunleinnovations.com",
        Password: "Password1.,",
      },
    };
  },
  methods: {
     makeToast() {
      this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
        title: this.$store.state.notifications.type,
        autoHideDelay: 5000,
        variant: this.$store.state.notifications.type === "error" ? "danger" : "info",
        solid: true,
      });
    },
    async userLogin() {
      try {
        this.spinner = true
        let response = await this.$auth.loginWith("local", { data: this.login });
        // this.$store.state.auth.loggedIn = true
        this.spinner = false
        await this.$router.back()
      } catch (err) {
        if (err.response) {
          this.$store.commit("notifications/error", err.response.data);
          this.makeToast();
          return;
        } else {
          this.spinner = false
          console.log(err)
          this.$store.commit("notifications/error", "Something went wrong");
          this.makeToast();
        }
      }
    },
  },
};
</script>

<style scoped>
.bmedia p {
  font-size: 20px;
}

section {
  /* background: #373737; */
  /* background: #E57718; */
  padding: 7rem 1.5rem;
  min-height: (100vh - 0);
}

.bg {
  background-image: url("~assets/img/bg.png");
}

.contact-form input,
.contact-form textarea,
.contact-form .form-control:focus {
  font-size: 15px;
  background-color: white;
  color: #000;
  border-radius: 0;
  border: 1px solid #a0a0a0;
  border-radius: 8px;
  padding: 1.7rem 1rem;
  margin: 0px 0px 8px;
}

.contact-form h3 {
  font-size: 19px;
}

.login-form {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 30px 30px #00000026;
  opacity: 1;
  padding: 10px 43px 20px;
}

@media screen and (max-width: 500px) {
  .login-form_ {
    width: 135%;
    padding: 10px 43px 20px;
    margin-left: -45px;
  }
}

.log {
  background: transparent linear-gradient(0deg, #e22a6f 0%, #fe6666 100%) 0% 0% no-repeat
    padding-box;
  opacity: 1;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 100%;
  padding: 13px 0px 13px;
  border: 0;
  border-radius: 25px;
}

.a {
  color: #e57718 !important;
  font-weight: bold;
}
</style>
