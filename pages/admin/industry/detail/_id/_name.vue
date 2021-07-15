<template>
  <div>
    <section class="">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="">
          <div class="container-fluid">
            <b-row>
              <b-col md="6">
               <div class="d-flex">
               <div>
                  <img :src="post.Logo" width="50" alt="">
               </div>
                   <h1 class="ml-2 pt-2">
                  {{ post.Name }}
                  <span style="font-size: 24px">{{ post.Slogan }}</span>
                </h1>
               </div>
               <p class="post_description">
                  {{ post.Description }}
                </p>
              </b-col>

              <b-col md="2" class="text-end">
              <div class="position-absolute" style="">
                <nuxt-link
                  to="/admin/dashboard"
                  style="
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 27px;
                    color: #e57718;
                  "
                  >Go back</nuxt-link
                >
              </div>
                <b-form-group>
                  <div class="form-group small-select_">
                    <label for="">States</label>
                    <v-select
                      placeholder="All"
                      v-model="stateId"
                      :options="states"
                      @input="getFeatures"
                      :reduce="(data) => data.Id"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="3" class="text-end ml-lg-4">
                <b-form-group>
                  <div class="form-group small-select_">
                    <label for="">LOCAL GOVERMENT AREA</label>
                    <v-select
                      placeholder="All"
                      v-model="cityId"
                      :options="lgas"
                      @input="fetchSummary"
                      :reduce="(data) => data.Id"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>
              </b-col>

              <agegender
                v-if="data && !spinner"
                :MillenialRating="data.MillenialRating"
                :BabyBoomRating="data.BabyBoomRating"
                :FemaleRating="data.FemaleRating"
                :MaleRating="data.MaleRating"
                :GenerationXRating="data.GenerationXRating"
              />
              <b-spinner
                v-if="spinner"
                label="Spinning"
                style="margin-left: 38%; margin-top:18%;"
              ></b-spinner>
            </b-row>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import agegender from "@/components/agegender.vue";
import UserResponse from "@/components/UserResponse.vue";
export default {
  layout: "dashlayout",
  middleware:'admin',
  component: { UserResponse, agegender },
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  async fetch() {
    await this.fetchSummary();
    await this.getStates();
  },
  data() {
    return {
      data: null,
      cityId: null,
      stateId: null,
      lgas: [],
      states: [],
      Logo: null,
      spinner: false,
    };
  },
  async asyncData({ params, $axios, $bvToast }) {
    try {
      const post = await $axios.$get(
        `/Industries/GetIndustryDetailsByAdmin?industryId=${params.id} `
      );
      return { post };
    } catch (e) {
     if(process.client){
        $bvToast.toast(`something went wrong`, {
        title: "error",
        autoHideDelay: 5000,
        variant: "error" ? "danger" : "info",
        solid: true,
      });
     }
    }
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
    async fetchSummary() {
      this.spinner = true;
      this.cityId ? this.cityId : (this.cityId = "");
      this.stateId ? this.stateId : (this.stateId = "");
      try {
        const response = await this.$axios.$get(
          `/Opinions/GetIndustryOpinionSummaries?industryId=${this.$route.params.id}&cityId=${this.cityId}&stateId=${this.stateId}`
        );
        this.data = response;
        this.spinner = false;
      } catch (e) {
        this.spinner = false;
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getStates() {
      try {
        const _states = await this.$axios.get("/Locations/GetNigeriaStates");
        this.states = _states.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getFeatures(id) {
      await this.fetchSummary();
      this.cityId = null
      try {
        const response = await this.$axios.get(`/Locations/GetLGAs?stateId=${id}`);
        this.lgas = response.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    //   async fetchIndustryDetails() {
    //   this.fetchCompanySpinner = true;
    //   try {
    //     const response = await this.$axios.get(
    //       `/Industries/GetIndustryDetailsByAdmin?industryId=${this.$route.params.id}`
    //     );
    //     console.log(response.data)
    //     this.form.Name = response.data.Name;
    //     this.form.Slogan = response.data.Slogan;
    //     this.form.Description = response.data.Description;
    //     this.Banner = response.data.Banner;
    //     this.fetchCompanySpinner = false;
    //   } catch (e) {
    //     this.$store.commit("notifications/error", "something went wrong")
    //     this.makeToast()
    //   }
    // },
  },
};
</script>

<style scoped>
.bg {
  overflow: hidden!important;
}

.container-fluid::-webkit-scrollbar {
  width: 5px;
  border-radius: 50px;
}

.container-fluid {
  overflow-x: hidden!important;
}

.container-fluid::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

.container-fluid::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.container-fluid::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.post_description {
  overflow: auto;
  height: 150px;
}


.post_description::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 70px;
}

.post_description::-webkit-scrollbar {
  width: 5px;
  border-radius: 50px;
}

.post_description::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.post_description::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.text-head {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #626d73;
}

.age {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.text-p p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
}
.text-para p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
}

.text-p span {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 124.4%;
  text-transform: uppercase;
  color: #373737;
}

.sector {
  background: #656565;
}
</style>
