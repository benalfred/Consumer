<template>
  <div>
    <section class=" min-100">
      <b-container class="min-100 ">
        <b-row class="mx-0 min-100 align-items-center justify-content-center">
          <b-col md="6" class="mb-5 px-0 min-100 position-relative">
            <div
              id="step1"
              style="display: block; opacity: 1"
              class="login-form login-form_"
            >
              <div class="contact-form avenir pt-3 small raleway">
                <h3 class="text-center font-weight-bold mb-4 pb-2 pt-2">Account Setup</h3>
                <b-form class="">
                  <b-form-group>
                    <b-form-input
                      placeholder="first name"
                      v-model="form.Surname"
                      name="user_name"
                      type="text"
                      id="full-name"
                    >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      placeholder="last name"
                      v-model="form.Firstname"
                      name="user_name"
                      type="text"
                      id="full-name"
                    >
                    </b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <div class="form-group">
                      <v-select
                        v-model="form.Sex"
                        :options="genderOptions"
                        placeholder="select gender"
                        :reduce="(gender) => gender.Id"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                  <b-form-group>
                    <div class="form-group">
                      <v-select
                        v-model="form.StateId"
                        :options="stateOptions"
                        placeholder="select state"
                        :reduce="(state) => state.Id"
                        @input="getFeatures"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                  <b-form-group>
                    <div class="form-group">
                      <v-select
                        v-model="form.LGAId"
                        :options="lgaOptions"
                        placeholder="local government"
                        :reduce="(lga) => lga.Id"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                  <b-form-group class="newpost">
                    <button
                      :disabled="
                        !form.Sex ||
                        !form.StateId ||
                        !form.Firstname ||
                        !form.Surname
                      "
                      @click.prevent="next"
                      class="mt-2 btn-sacademy"
                      style="font-size: 16px"
                      type="submit"
                      value="Send"
                    >
                      Next
                    </button>
                  </b-form-group>

                  <!-- <div class="d-flex justify-content-end">
                <div>
                  <button class="bg-sea-blue  btn-lg btn mb-4 br-0" style="font-size: 11px"> SEND MESSAGE</button>
                </div>
              </div> -->
                </b-form>
              </div>
            </div>
            <div
              id="step2"
              style="display: none; opacity: 0"
              class="login-form login-form_"
            >
              <div class="contact-form avenir pt-4 small raleway">
                <h3 class="text-center font-weight-bold mb-4 pb-2 pt-2">Account Setup</h3>

                <b-form class="">
                  <b-form-group>
                    <b-form-input
                      placeholder="password"
                      name="password"
                      v-model="form.Password"
                      type="password"
                      id="password"
                    >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      placeholder="Confirm Password"
                      name="password"
                      v-model="form.ConfirmPassword"
                      type="password"
                      id="Comfirm-Password"
                    >
                    </b-form-input>
                  </b-form-group>

                  <div class="d-flex mt-5 pt-5">
                    <button
                      @click.prevent="prev"
                      class="mt-5 btn-sacademy"
                      style="font-size: 16px"
                      type="submit"
                      value="Send"
                    >
                      Back
                    </button>

                    <button
                      @click.prevent="createUserAccount"
                      :disabled="!form.Password || !form.ConfirmPassword"
                      class="next mt-5 btn-sacademy"
                      style="font-size: 16px"
                      type="submit"
                    >
                      Submit
                      <b-spinner
                        v-if="spinner"
                        label="Spinning"
                        style="margin-left: 5%"
                      ></b-spinner>
                    </button>
                  </div>
                </b-form>
              </div>
            </div>

            <b-container class="form__" id="completed" style="display: none; opacity: 0">
              <b-row class="mt-3 pb-5 pt-2 mx-0 justify-content-center">
                <b-col md="12" class="text-center mt-5 pt-5">
                  <h2 class="text-white font-weight-bold">Account setup initiated</h2>
                  <p class="pt-5 text-white">
                    A link has been sent to your registered email address.
                    <br class="d-none d-sm-block" />
                    Please visit to continue with your account setup.
                  </p>
                </b-col>

                <b-col md="4" class="newpost_ pt-3">
                  <b-form-group class="newpost mt-3">
                    <button
                      class="mt-2 btn-sacademy"
                      style="font-size: 16px"
                      type="submit"
                      value="Send"
                    >
                      Explore
                    </button>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  layout: "headerr",
  async fetch() {
    await this.getStatesAndLgaAndGenders();
  },
  data() {
    return {
      select: "choose",
      lgaOptions: [],
      genderOptions: [],
      stateOptions: [],
      lgaOptions: [],
      spinner:false,
      fetchFeatureSpinner:false,
      form: {
        Password: null,
        ConfirmPassword: null,
        StateId: null,
        EmailAddress: this.$auth.user.EmailAddress,
        PhoneNumber: this.$auth.user.PhoneNumber,
        LGAId: null,
        Sex: null,
        PhoneNumber:this.$auth.PhoneNumber,
        EmailAddress:this.$auth.EmailAddress,
        Firstname: this.$auth.user.Firstname,
        Surname: this.$auth.user.Surname,
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
    async getStatesAndLgaAndGenders() {
      try {
        const locations = await this.$axios.get("Locations/GetNigeriaStates");
        this.stateOptions = locations.data;
        const genders = await this.$axios.get("Account/GetGenders");
        this.genderOptions = genders.data;
      } catch {
         this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
     async getFeatures(id) {
      this.fetchFeatureSpinner = true;
      try {
        const response = await this.$axios.get(`/Locations/GetLGAs?stateId=${id}`);
        this.lgaOptions = response.data;
        this.fetchFeatureSpinner = false;
      } catch (e) {
         this.fetchFeatureSpinner = true;
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async createUserAccount() {
      this.spinner = true
      try {
        const response = await this.$axios.post("/account/CreateUserAccount",this.form);
        this.spinner = false
        console.log(response.data);
         this.completed()
      } catch (e) {
        if (e.response) {
          this.spinner = false;
          swal({
            title: "Oops!",
            text: "something went wrong",
            icon: "warning",
            dangerMode: true,
          });
        } else {
          this.spinner = false;
          swal({
            title: "Error!",
            text: "Something went wrong!",
            icon: "warning",
            dangerMode: true,
          });
        }
      }
    },
    next() {
      let step1 = document.querySelector("#step1");
      let step2 = document.querySelector("#step2");
      step1.style.opacity = 0;
      step2.style.display = "block";
      setTimeout(() => {
        step1.style.display = "none";
        step2.style.opacity = 1;
      }, 400);
    },
    prev() {
      let step1 = document.querySelector("#step1");
      let step2 = document.querySelector("#step2");
      step2.style.opacity = 0;
      step1.style.display = "block";
      setTimeout(() => {
        step1.style.opacity = 1;
        step2.style.display = "none";
      }, 400);
    },
    completed() {
      let step1 = document.querySelector("#step1");
      let step2 = document.querySelector("#step2");
      let completed = document.querySelector("#completed");
      step1.style.display = "none";
      step2.style.display = "none";
      completed.style.display = "block";
      completed.style.opacity = 1;
    },
  },
};
</script>

<style scoped>
.vs--searchable .vs__dropdown-toggle {
    cursor: text;
    height: calc(1.5em + 0.75rem + 2px) !important;
    padding: 1.6rem 1rem !important;
    font-size: 1rem;
    align-items: center !important;
    display: flex !important;
    font-weight: 400;
    line-height: 1.5 !important;
    color: #000;
    border-radius: 8px;
    border: 1px solid #a0a0a0;
}

.vs__clear {
    display: none !important;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 100%;
  padding: 12px 0px 12px;
  border: 0;
  border-radius: 25px;
}

@media screen and (max-width: 600px) {
  .form__ {
    padding-bottom: 110px;
  }
}
.bmedia p {
  font-size: 20px;
}
section {
  padding: 7rem 0rem;
  background: #626d73;
}

.contact-form input,
.contact-form textarea,
.contact-form .form-control:focus {
  font-size: 15px;
  background-color: white;
  color: #000;
  border-radius: 8px;
  border: 1px solid #a0a0a0;
  padding: 1.4rem 1rem;
  margin: 0px 0px 8px;
}

.login-form {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 30px 30px #00000026;
  opacity: 1;

  padding: 10px 24px 20px;
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
  padding: 17px 0px 17px;
  border: 0;
  border-radius: 25px;
}

.login-form h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.login-form {
  transition: all 0.4s ease-in-out;
  position: absolute;
  width: 100%;
}
.min-100 {
  min-height: 100vh;
  height: 100%;
}
section.min-100 {
  padding-bottom: 3rem !important;
}
#completed {
  transition: all 0.4s ease-in-out;
}
</style>
