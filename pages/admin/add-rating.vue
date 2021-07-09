<template>
  <div>
    <div id="" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <Links />
          <div class="row mt-3">
            <div class="col-md-6">
              <div class="Opinion1 p-5 mt-5">
                <b-form-group>
                  <div class="form-group small-select">
                    <v-select
                      placeholder="select rating"
                      v-model="form.Rating"
                      :options="ratingsData"
                      @input="getFeatures"
                      :reduce="(data) => data.Id"
                      label="PreferredName"
                    ></v-select>
                  </div>
                </b-form-group>

                <div class="sector p-3 mt-5">
                  <b-row class="my-1">
                    <b-col sm="9">
                      <b-form-input
                        id="input-large"
                        v-model="form.Name"
                        class="input-sector"
                        size="lg"
                        placeholder="New Rating Tag"
                      ></b-form-input>
                    </b-col>
                    <b-col sm="3" class="pl-4 pt-0">
                      <button
                        v-if="!addRateSpinner"
                        class="btn outline-none"
                        @click="addFeatures"
                        :disabled="!form.Name || !form.Rating"
                      >
                        <img src="~assets/img/sectoricon.png" alt="" />
                      </button>
                      <b-spinner
                        v-if="addRateSpinner"
                        label="Spinning"
                        style="margin-left: 5%"
                      ></b-spinner>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="Opinion1 p-5 mt-5">
                <div class="">
                  <div class="d-flex">
                    <p class="add pb-2">View and Remove Rating tag</p>
                  </div>
                  <div
                    class="mb-2"
                    style="background: rgba(0, 0, 0, 0.1); height: 1px"
                  ></div>
                </div>
                <div class="d-flex_ row" v-if="features.length && !fetchFeatureSpinner">
                  <div
                    class="col-md-4 d-flex pb-3"
                    v-for="feature in features"
                    :key="feature.Id"
                  >
                    <button type="button" class="btn1">
                      {{ feature.Name }}
                    </button>
                    <i
                      @click="deleteFeature(feature.Id)"
                      class="far fa-times-circle"
                      style="bottom: 9px; position: relative; cursor: pointer"
                    ></i>
                  </div>
                </div>
                <div class="" v-if="!features.length && !fetchFeatureSpinner">
                  <p type="" class="">No rating tag</p>
                </div>
                <b-spinner
                  v-if="fetchFeatureSpinner"
                  label="Spinning"
                  style="margin-left: 45%"
                ></b-spinner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Links from "@/components/Links.vue";
export default {
  layout: "dashlayout",
  middleware: "admin",
  data() {
    return {
      logoutMenuState: false,
      threeOpen: false,
      form: {
        Rating: null,
        Name: null,
      },
      Id: null,
      filter: "",
      features: [],
      fetchFeatureSpinner: false,
      addRateSpinner: false,
      ratingsData: [],
    };
  },
  async fetch() {
    await this.getRatings();
    await this.getFeatures();
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
    setId(id) {
      this.Id = id;
    },
    async deleteFeature(id) {
      let r = confirm("proceed to delete");
      let txt;
      if (r == true) {
        txt = "You pressed OK!";
      } else {
        return (txt = "You pressed Cancel!");
      }
      try {
        await this.$axios.post("Opinions/DeleteRatingTag", { Id: id });
        let newFeatures = this.features.filter((feature) => feature.Id != id);
        this.features = newFeatures;
        this.$store.commit("notifications/success", "rating tag deleted");
        this.makeToast();
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getFeatures(id) {
      this.fetchFeatureSpinner = true;
      id ? id : ((id = 5), (this.form.Rating = 5));
      try {
        const response = await this.$axios.get(`/Opinions/GetRatingTags?rating=${id}`);
        this.features = response.data;
        this.fetchFeatureSpinner = false;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getRatings() {
      try {
        const ratings = await this.$axios.get("settings/GetRatings");
        console.log(ratings.data);
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
        await this.getFeatures(this.form.Rating);
        this.form.Name = null;
        this.addRateSpinner = false;
        this.$store.commit("notifications/success", "success");
        this.makeToast();
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
    Rating() {
      this.getFeatures(this.form.Rating);
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

btn-sacademy1 {
  color: #fff !important;
  background: #18e5b4;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 300%;
  padding: 9px 0px 9px;
  border: 0;
  border-radius: 25px;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 50%;
  padding: 12px 0px 12px;
  border: 0;
  border-radius: 25px;
  margin-left: 25%;
}

.btn-sacademy_ {
  color: #fff !important;
  background: #d91925;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  position: relative;
  left: -80px;
  width: 200%;
  padding: 9px 5px 9px;
  border: 0;
  border-radius: 25px;
}

.media_ {
  overflow: hidden;
  overflow-y: scroll;
  max-height: 450px;
}

.media_::-webkit-scrollbar {
  width: 10px;
  border-radius: 50px;
}

.emoji p {
  font-size: 18px;
  cursor: pointer;
  padding: 0px 7px 0px;
}

/* Track */
.media_::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.media_::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.media_::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.second-col {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 60px;
  color: #656565;
}

p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
}

.img1 {
  background: #e57718;
  border-radius: 19.5px;
}

.img2 {
  background: rgba(241, 19, 139, 0.87);
  border-radius: 19.5px;
}
.img3 {
  background: #18e5b4;
  border-radius: 19.5px;
}

.firstp {
  color: #626d73;
}
.btn2 {
  background: #00b5d3;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  opacity: 0.5;
}

.btn2_ {
  background: #ffffff;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  opacity: 0.2;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
}

.profile-dropdown_ {
  padding: 0px 5px 0px;
  margin-left: -5px;
}

.btn1 {
  background: #00b5d3;
  border: none;

  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
}

.btn6 {
  background: #da4d0c;
  border: none;
  height: 35px;

  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
}

.btn2 {
  background: #00b5d3;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  opacity: 0.2;
}

.btn2 {
  background: #00b5d3;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  opacity: 0.5;
}

.user-icon {
  width: 30px;
  height: 30px;
  background-color: #00b5d3;
  border: none;
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  border-radius: 50%;
  display: inline-block;
}

.logout-sub-menu {
  position: absolute;
  top: 120px;
  z-index: 1000;
  box-shadow: 0 13px 42px 11px rgba(0, 0, 0, 0.05);
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}

@media all and (max-width: 1024px) {
  .user-icon {
    height: 30px;
    width: 30px;
    font-size: 14px;
  }
}

.sub-menu {
  /*width: 270px;*/
  display: block;
  position: absolute;
  background-color: #fefefe;
  z-index: 250;
  opacity: 0;
  visibility: hidden;
  width: 390px;
  right: -20px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3), 0 -18px 60px -10px rgba(0, 0, 0, 0.025);
  transition: all 650ms ease;
}

.nav-list li:hover > .sub-menu,
.nav-list li:active > .sub-menu,
.nav-list li:focus > .sub-menu {
  top: 60px;
  opacity: 1;
  visibility: visible;
}
.submenuthreeopen {
  opacity: 1;
  visibility: visible;
  max-height: initial;
}
li a {
  color: #333 !important;
  font-size: 14px;
  line-height: 32px;
}
li {
  padding: 0.5rem 0;
}
.logout-sub-menu {
  right: 0px;
}

@media screen and (min-width: 750px) {
  .logout-sub-menu {
    right: 90px;
  }
}

@media screen and (min-width: 750px) {
  .logout-sub-menu {
    right: 90px;
    margin-top: 50px;
  }
}
.modalDialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  border-radius: 10px;
  z-index: 99999;
  opacity: 0;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  pointer-events: none;
}
.modalDialog:target {
  opacity: 1;
  pointer-events: auto;
}
.modalDialog > div {
  max-width: 800px;
  width: 90%;
  position: relative;
  margin: 10% auto;
  border-radius: 3px;
  background: #626d73;
  border-radius: 10px;
}
.close {
  font-family: Arial, Helvetica, sans-serif;
  background: #f26d7d;
  color: #fff;
  line-height: 25px;
  position: absolute;
  right: -12px;
  text-align: center;
  top: -10px;
  width: 34px;
  height: 34px;
  text-decoration: none;
  font-weight: bold;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-box-shadow: 1px 1px 3px #000;
  -webkit-box-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 3px #000;
  padding-top: 5px;
}
.close:hover {
  background: #fa3f6f;
}
.all {
  position: relative;
  bottom: 100px;
}
.img1 {
  background: #e57718;
  border-radius: 19.5px;
}
.profile-dropdown {
  overflow: auto;
}

.text {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  text-transform: uppercase;
  color: #ffffff;
}

.sidebar {
  background-color: #f3ceae;
  color: black !important;
}

.Opinion {
  background: #e57718;
  border-radius: 5px;
}
.Opinion1 {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.btn_ {
  background: #ffffff;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
}
.btn1_ {
  background: #ffffff;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  opacity: 0.6;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  color: #000000;
}
.btn2_ {
  background: #ffffff;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  opacity: 0.2;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
}

.btn1 {
  background: #00b5d3;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
}
.btn2 {
  background: #00b5d3;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  opacity: 0.2;
}

.add {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #373737;
}

.button__ {
  background: #00b5d3;
  border: none;
  padding: 8px 32px 8px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  margin: 15px 0px 10px;
}
.input-sector {
  background: #656565;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  border-radius: 5px;
  color: white;
}

.profile-dropdown {
  overflow: auto;
}
.sector {
  background: #656565;
}
.d-flex_ i {
  color: red;
}
</style>
