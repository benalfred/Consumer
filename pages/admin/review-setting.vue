<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <Links />
          <b-row class="mt-5">
            <b-col md="3" v-if="settings">
              <div class="d-flex" v-for="rate in settings.Ratings" :key="rate.Id">
                <div class="emoji" v-if="ratingMethod(rate.PreferredName)">
                  <p>{{ ratingMethod(rate.PreferredName).emoji }}</p>
                </div>
                <b-form-input
                  class="mt-2 ml-4"
                  v-model="rate.PreferredName"
                  :placeholder="rate.PreferredName"
                ></b-form-input>
              </div>
            </b-col>

            <b-col md="3" class="review pl-lg-4">
              <p>No. of Opinion to Display</p>
              <p>Dispaly by</p>
              <p>Date Format</p>
              <p>View Additional Opinion</p>
            </b-col>

            <b-col md="2" style="position: relative; left: 20px">
              <b-form-group class="mb-2 selectdate">
                <div class="form-group" v-if="settings">
                  <input
                    class="form-control"
                    type="number"
                    name=""
                    v-model="settings.NumberOfOpinionToDisplay"
                  />
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate">
                <div class="form-group" v-if="settings">
                  <v-select
                    v-model="form.DisplayBy"
                    :options="displayBy"
                    placeholder="display by"
                    :reduce="(dis) => dis.Id"
                    label="Name"
                  ></v-select>
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate">
                <div class="selectdate1">
                  <v-select
                    v-model="form.DateFormat"
                    :options="dateFormats"
                    placeholder="choose date format"
                    :reduce="(date) => date.Id"
                    label="Name"
                  ></v-select>
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    v-model="form.ViewAdditionalOpinion"
                    value="false"
                  />
                  <label class="form-check-label" for="inlineRadio1">No</label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    v-model="form.ViewAdditionalOpinion"
                    id="inlineRadio2"
                    value="true"
                  />
                  <label class="form-check-label" for="inlineRadio2">Yes</label>
                </div>
              </b-form-group>
            </b-col>

            <b-col md="4" class="pl-lg-5 form-select">
              <h6 style="font-weight: 600; color: #626d73" class="pb-4">Set Age range</h6>
              <b-form-group class="" v-if="settings">
                <div class="" v-for="range in settings.AgeRanges" :key="range.Id">
                  <div class="w-100">{{ range.Name }}</div>
                  <div class="row">
                    <b-col md="6" class="">
                      <b-form-group class="">
                        <div class="form-group">
                          <!-- <label for="">from</label> -->
                          <input
                            class="form-control"
                            type=""
                            name=""
                            v-model="range.StartAge"
                          />
                        </div>
                      </b-form-group>
                    </b-col>
                    <b-col md="6" class="">
                      <b-form-group class="">
                        <div class="form-group">
                          <!-- <label for="">to</label> -->
                          <input
                            class="form-control"
                            type=""
                            name=""
                            v-model="range.EndAge"
                          />
                        </div>
                      </b-form-group>
                    </b-col>
                  </div>
                </div>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="justify-content-center">
            <b-col md="4" class="newpost_ mt-1 justify-content-center">
              <b-form-group class="newpost mt-1">
                <button
                  @click="updateSetting"
                  class="mt-2 btn-sacademy"
                  style="font-size: 16px"
                  type="submit"
                  value="Send"
                >
                  Update
                  <b-spinner
                    v-if="spinner"
                    label="Spinning"
                    style="margin-left: 5%"
                  ></b-spinner>
                </button>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserResponse from "@/components/UserResponse.vue";
import Links from "@/components/Links.vue";
export default {
  layout: "dashlayout",
  middleware: "admin",
  component: { UserResponse, Links },
  head() {
    return {
      title: `${this.title} | ConsumerHalla Survey`,
    };
  },
  data() {
    return {
      settings: null,
      dates: [],
      spinner: false,
      title: "Review Setting",
      text: null,
      displayBy: [],
      dateFormats: [],
      form: {
        DisplayBy: null,
        DateFormat: null,
        ViewAdditionalOpinion: true ? "true" : "false",
        NumberOfOpinionToDisplay: null,
        Ratings: [],
        AgeRanges: [],
      },
      ranges: [],
      ratingEmoji: [
        { PreferredName: "Very Bad", emoji: "😡" },
        { PreferredName: "Bad", emoji: "😞" },
        { PreferredName: "Fair", emoji: "😑" },
        { PreferredName: "Good", emoji: "😊" },
        { PreferredName: "Very Good", emoji: "😍" },
      ],
    };
  },
  async fetch() {
    await this.getSetting();
    await this.getDisplayBy();
    await this.getDates();
    // await this.getAgeRanges()
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
    async updateSetting() {
      this.form.DisplayBy = this.settings.DisplayBy;
      this.form.DateFormat = this.settings.DateFormat;
      this.form.AgeRanges = this.settings.AgeRanges;
      this.form.RatingPreferredNames = this.settings.Ratings;
      this.form.ViewAdditionalOpinion =
        this.form.ViewAdditionalOpinion === "true"
          ? (this.form.ViewAdditionalOpinion = true)
          : (this.form.ViewAdditionalOpinion = false);
      this.form.NumberOfOpinionToDisplay = this.settings.NumberOfOpinionToDisplay;
      try {
        this.spinner = true;
        await this.$axios.post("Settings/UpdateSettings", this.form);
        this.spinner = false;
        this.$store.commit("notifications/success", "settings updated successfully");
        this.makeToast();
      } catch (error) {
        this.spinner = false;
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getSetting() {
      try {
        const response = await this.$axios.get("/Settings/GetSettings");
        this.settings = response.data;
        this.form.DisplayBy = response.data.DisplayBy;
        this.form.DateFormat = response.data.DateFormat;
        this.form.AgeRanges = response.data.AgeRanges;
        this.form.RatingPreferredNames = response.data.Ratings;
        this.form.ViewAdditionalOpinion = response.data.ViewAdditionalOpinion;
        this.form.NumberOfOpinionToDisplay = response.data.NumberOfOpinionToDisplay;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },

    async getDisplayBy() {
      try {
        const response = await this.$axios.get("/Settings/GetDisplayBys");
        // console.log(response.data)
        this.displayBy = response.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },

    async getDates() {
      try {
        const response = await this.$axios.get("/Settings/GetDateFormats");
        // console.log(response.data)
        this.dateFormats = response.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    // async getAgeRanges() {
    //   try {
    //     const response = await this.$axios.get("/Settings/GetAgeRanges");
    //     // console.log(response.data)
    //     this.ranges = response.data;
    //   } catch (e) {
    //     this.$store.commit("notifications/error", "something went wrong");
    //     this.makeToast();
    //   }
    // },
    ratingMethod(value) {
      let foundEmoji = this.ratingEmoji.find((emoji) => emoji.PreferredName === value);
      return foundEmoji;
    },
  },
};
</script>

<style scoped>
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
.emoji p {
  font-size: 34px;
  cursor: pointer;
}
.review p {
  line-height: 55px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #626d73;
}

.form-group {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  align-items: center;
  color: #626d73;
}

@media screen and (min-width: 700px) {
  .form-select {
    position: relative;
    left: 20px;
  }
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
</style>
