<template>
  <div style="background: #f7f6fa !important">
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <nuxt-link to="/">
          <img
            src="~/assets/img/logo.png"
            width="180"
            class="img-fluid mt-4 ml-2 pt-3"
            alt=""
        /></nuxt-link>
        <div class="spacer"></div>
        <b-col md="12" class="mt-sm-4 p-lg-3 p-1">
          <div class="content-card">
            <Back />
            <h5>Create Your new password</h5>
            <div v-if="passwordDontMatch">
              <span class="text-danger text-bold">* Passwords Dont match</span>
            </div>
            <div class="mt-5 pt-5">
              <div v-if="!password">
                <span class="text-danger text-bold"
                  >* Password is required</span
                >
              </div>
              <input
                _ngcontent-fvr-c48=""
                autocomplete="off"
                type="password"
                yougovworkspaceinputfix=""
                class="prl-input question__input ng-star-inserted"
                id="birth_year"
                v-model="password"
                name="birth_year"
                placeholder="Password"
                data-cy="birth_yearInput"
              />
              <div v-if="!confirm_password">
                <span class="text-danger text-bold"
                  >* Confirm Password is required</span
                >
              </div>
              <input
                _ngcontent-fvr-c48=""
                autocomplete="off"
                type="password"
                v-model="confirm_password"
                yougovworkspaceinputfix=""
                class="prl-input question__input ng-star-inserted"
                id="birth_year"
                name="birth_year"
                placeholder="Confirm password"
                data-cy="birth_yearInput"
              />
            </div>

            <p class="terms pt-3">
              This information helps us to ensure that responses to our surveys
              reflect the population as a whole. Find out more
            </p>

            <div class="d-lg-flex my-5 pt-5 d-none d-sm-block">
              <h4 class="align-items-center d-flex d-none d-sm-block">
                POINTS &nbsp; <span class="zero">20</span>
              </h4>
              <div class="d-flex justify-content-end ml-auto">
                <button
                  @click="submitDetails"
                  :disabled="!password || !confirm_password"
                  class="prl-btn action-button action-button_ text-white"
                >
                  Submit <b-spinner v-if="spinner" small />
                </button>
              </div>
            </div>

            <div class="my-5 pt-5 d-block d-sm-none">
              <h4 class="align-items-center d-flex">
                POINTS &nbsp; <span class="zero d-flex ml-auto">20</span>
              </h4>
              <div class="mt-3">
                <button
                  @click="submitDetails"
                  :disabled="!password || !confirm_password"
                  class="prl-btn action-button action-button_ text-white"
                >
                  Submit <b-spinner v-if="spinner" small />
                </button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Back from "~/components/Back";
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import footer from "~/components/footer";
import {mapActions,mapState} from "vuex"
export default {
  //   layout: "headerr",

  components: {
    carousel: () =>
      process.client
        ? import("vue-owl-carousel")
        : Promise.resolve({ render: (h) => h("div") }),
    footer,
    Back,
  },
  data() {
    return {
      password: null,
      confirm_password: null,
      passwordValid: true,
      confirm_password_valid: true,
      passwordDontMatch: false,
      firstname:this.$auth.user.firstname,
      surname:this.$auth.user.surname,
      spinner: false,
    };
  },
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
    if (!this.stateOptions.length) {
      this.$router.push('/intro')
    }
  },
  middleware: ['auth','account_setup'],
  computed: {
     ...mapState("data-fetching", ["stateOptions",]),
  },
  methods: {
    ...mapActions('data-fetching', ["createUserAccount"]),
    async submitDetails() {
      if (this.password != this.confirm_password) {
        return (this.passwordDontMatch = true);
      }
      this.spinner = true;
     let response = await this.createUserAccount(this.password, this.confirm_password);
     if (response) {
       this.spinner = false;
       this.password = null
       this.confirm_password = null
        swal({
          title: "Success!",
          text: "You have Successfully completed your first survey with consumerhalla, To earn more points take more surveys with industries",
          icon: "success",
        }).then(() =>{
          this.$router.push('/industry/32/Technology')
        })
        
     }
      this.spinner = false;
     return
    },
    takeToSector(sector) {
      this.$router.push(`/industry/${sector.Id}/${sector.Name}`);
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  watch: {
    password() {
      !this.password ? (this.passwordValid = false) : (this.passwordValid = true);
    },
    confirm_password() {
      !this.confirm_password
        ? (this.confirm_password_valid = false)
        : (this.confirm_password_valid = true);
    },
  },
};
</script>

<style scoped>
body,
html {
  background: #f7f6fa !important;
}

h5 {
  color: #241d36;
  font-family: "Rawline Bold";
  font-size: 36px;
  font-weight: bolder;
}

h4 {
  color: #000000de;
  font-family: "Rawline Medium";
}

a {
  font-family: "Rawline SemiBold";
  color: #241d36;
  font-size: 19px;
}
a:hover {
  text-decoration: underline;
}

.under {
  margin-top: 35px !important;
}

.under a:hover {
  text-decoration: underline !important;
}

i {
  color: #000;
  font-size: 30px;
  position: relative;
  bottom: 30px;
  cursor: pointer;
}

.terms {
  margin-top: 50px;
}
</style>
