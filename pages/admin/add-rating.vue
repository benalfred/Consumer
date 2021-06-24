<template>
  <div>
    <div id="" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <b-row>
            <b-col md="6">
              <nuxt-link to="review-setting">
                <div class="email-setting1 p-3">
                  <p class="pt-2">Review Setting</p>
                </div>
              </nuxt-link>
            </b-col>
            <b-col md="6">
              <nuxt-link to="email-setting">
                <div class="email-setting p-3">
                  <p class="pt-2">Email Setting</p>
                </div>
              </nuxt-link>
            </b-col>
          </b-row>

          <div class="row mt-5">
            <div class="col-md-6">
              <div class="Opinion1 p-5 mt-5">
                <b-form-group>
                  <div class="form-group small-select">
                    <v-select
                      placeholder="select rating"
                      v-model="form.Rating"
                      :options="ratingsData"
                      :reduce="(data) => data.Id"
                      label="PreferredName"
                    ></v-select>
                  </div>
                </b-form-group>
              </div>

              <div class="sector p-3 mt-5">
                <b-row class="my-1">
                  <b-col sm="9">
                    <b-form-input
                      id="input-large"
                      v-model="form.Name"
                      class="input-sector"
                      size="lg"
                      placeholder="New Rating"
                    ></b-form-input>
                  </b-col>
                  <b-col sm="3" class="pl-4 pt-0">
                    <button
                      v-if="!addRateSpinner"
                      class="btn outline-none"
                      @click="addFeatures"
                      :disabled="!form.Name"
                    >
                      <img src="~assets/img/sectoricon.png" alt="" />
                    </button>
                  </b-col>
                </b-row>
              </div>
            </div>

            <div class="col-md-6">
              <img src="~assets/img/rating.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashlayout",

  data() {
    return {
      logoutMenuState: false,
      threeOpen: false,
      form: {
        Rating: null,
        Name: null,
      },
      filter: "",
      addRateSpinner: false,
      ratingsData: [],
    };
  },
async fetch(){
 await this.getRatings()
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
    async getRatings() {
      try {
        const ratings = await this.$axios.get("settings/GetRatings");
        console.log(ratings.data)
        this.ratingsData = ratings.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async addFeatures() {
      try {
        this.addRateSpinner = true;
        await this.$axios.post("/Opinions/CreateRatingTag", this.form);
        this.form.Name = null;
        this.form.Rating = null;
        this.addRateSpinner = false;
        this.$store.commit("notifications/success", "success");
        this.makeToast()
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    //  ...mapMutations('data-fetching', ["setBpg"]),
    //  ...mapActions("data-fetching", [
    //    "fetchSectors"
    //  ]),
    threeMenuOpen() {
      this.threeOpen = !this.threeOpen;
    },
  },

  watch: {
    bpg() {
      this.fetchSectors();
    },
  },
};
</script>

<style scoped>
.sector {
  background: #656565;
}
.email-setting {
  background: #0083ca;
}
.email-setting1 {
  background: #c4c4c4;
}
.email-setting p,
.email-setting1 p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.text-dark_ {
  color: #000;
  font-weight: bold;
  font-family: Poppins;
  font-size: 13px;
}

.Opinion1 {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}
</style>
