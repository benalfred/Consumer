<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <b-row>
            <b-col md="6">
              <div class="d-flex">
              <div>
                  <img src="~/assets/img/ellipse.png" width="50" alt="">
               </div>
                <h1 class="ml-2" v-if="form.Name">
                  {{ form.Name }}
                </h1>
                <div class="ml-4" style="cursor: pointer">
                  <img v-b-modal.modal-xl src="~assets/img/bx_bxs-edit-alt.png" alt="" />
                </div>
              </div>
              <p v-if="form.Description">{{ form.Description }}</p>
              <p v-else>No description yet</p>
            </b-col>
            <div class="col-md-6"></div>
            <b-col lg="6" xl="6" class="">
              <div class="Opinion1 p-5 mt-5">
                <div>
                  <div class="d-flex">
                    <p class="add pb-2">Full Review Breakdown</p>
                  </div>
                  <div
                    class="mb-2"
                    style="background: rgba(0, 0, 0, 0.1); height: 1px"
                  ></div>
                </div>

                <div class="d-flex_ row">
                  <div class="col-md-12">
                    <button type="button" class="button__">
                      VIEW FULL REVIEW CHARTS
                    </button>
                  </div>
                </div>
              </div>

              <div class="Opinion1 p-5 mt-5">
                <div>
                  <div class="d-flex">
                    <p class="add pb-2">Download Report</p>
                  </div>
                  <div
                    class="mb-2"
                    style="background: rgba(0, 0, 0, 0.1); height: 1px"
                  ></div>
                </div>

                <div class="d-flex_ row">
                  <div class="col-md-12">
                    <button type="button" class="button__">
                      CLICK TO DOWNLOAD REPORT
                      <img class="pl-2" src="~/assets/img/Group.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </b-col>

            <b-col lg="6" xl="6" class="all pl-lg-5">
              <div class="search-wrapper mb-3">
                <div class="wrapper">
                  <div class="input-data">
                    <span class="las la-search search"></span>
                    <b-input
                      type="text"
                      required
                      debounce="1000"
                      v-model="keyword"
                      class="pl-5 pt-2 input"
                      placeholder="Search for user"
                    ></b-input>
                  </div>
                </div>
              </div>

              <div class="second-col px-4 pt-5 mt-5 pb-4">
                <div>
                  <div class="d-flex">
                    <p>Review Update</p>
                    <div
                      v-for="ratingg in ratingsData"
                      :key="ratingg.Id"
                      class="emoji ml-auto"
                    >
                      <p
                        v-if="ratingMethod(ratingg.PreferredName)"
                        @click="setRatingId(ratingg.Id)"
                        :class="[rating != ratingg.Id ? 'active' : '']"
                      >
                        {{ ratingMethod(ratingg.PreferredName).emoji }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="mb-2"
                    style="background: rgba(0, 0, 0, 0.1); height: 1px"
                  ></div>
                </div>
                <UserResponse :opinions="opinions" :spinner="opinionsSpinner" />
                <b-pagination
                  v-model="pageForOpinions2"
                  :total-rows="totalRowsForOpinion"
                  :per-page="pageSize"
                  align="center"
                  size="sm"
                  class="my-0 text-center"
                />
                <div />
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>

    <b-modal
      id="modal-xl"
      size="xl"
      class="popup"
      centered
      scrollable
      title="Update Sector"
      body-bg-variant="light"
      header-bg-variant="light"
      hide-footer
    >
      <div class="item-wrapper one justify-content-center">
      <div class="row justify-content-center text-center">
          <div class="col-md-4 justify-content-center text-center mb-1">
            <b-input
              id="textarea"
              style="font-size: 20px; color: #626d73"
              v-model="form.Name"
              placeholder="Name"
              rows=""
            >
            </b-input>
          </div>
          <div class="col-md-4 justify-content-center text-center mb-1">
              <b-input
              id="textarea"
              style="font-size: 13px; color: #626d73"
              v-model="form.Slogan"
              placeholder="Slogan"
              rows="1"
            >
            </b-input>
          </div>
        </div>

        <div class="row justify-content-center text-center mt-3">
          <div class="col-md-6 justify-content-center text-center mb-1">
            <b-form-textarea
              id="textarea"
              style=" color: #626d73"
              v-model="form.Description"
              placeholder="Description"
              rows="2"
            >
            </b-form-textarea>
          </div>
        </div>

        <div class="item">
          <form @submit.prevent="updateSector"
            data-validation="true"
            action="#"
            method="post"
            enctype="multipart/form-data"
          >
            <div class="item-inner">
              <div class="item-content">
                <div class="image-upload">
                <i class="fa fa-cloud-upload mt-4 mb-2"></i>
                  <div class="col-6 mx-auto mt-2">
                     <b-form-file
                      v-model="File"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                      name="image"
                    ></b-form-file>
                  </div>
                </div>

              </div>
              <!--item-content-->
            </div>
            <!--item-inner-->

        <b-row class="justify-content-center">
          <b-col md="6 " class="newpost_ justify-content-center" v-if="!updateSpinner">
            <b-form-group class="newpost">
              <button
                class="btn-sacademy"
                style="font-size: 16px"
                type="submit"
                value="Send"
              >
                Update
              </button>
            </b-form-group>
          </b-col>
          <b-spinner
            v-if="updateSpinner"
            label="Spinning"
            style="margin-left: 5%"
          ></b-spinner>
        </b-row>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent.vue";
import UserResponse from "@/components/UserResponse.vue";
export default {
  layout: "dashlayout",
  middleware:'admin',
  component: { UserResponse, ProfileComponent },
  data() {
    return {
      logoutMenuState: false,
      threeOpen: false,
      File:null,
      form: {
        Id: this.$route.params.id,
        IndustryId:null,
        Name: this.$route.params.name,
        Description: null,
        Slogan: null,
        Banner: null,
        Logo: null,
      },
      fetchCompanySpinner: false,
      Name: null,
      ratingEmoji: [
        { PreferredName: "Very Bad", emoji: "😡" },
        { PreferredName: "Bad", emoji: "😞" },
        { PreferredName: "Fair", emoji: "😑" },
        { PreferredName: "Good", emoji: "😊" },
        { PreferredName: "Very Good", emoji: "😍" },
      ],
      opinions: [],
      rating: 5,
      updateSpinner: false,
      keyword: null,
      ratingsData: [],
      pageForOpinions: 1,
      pageForOpinions2: 1,
      pageSize: 10,
      companyId: 0,
      totalRowsForOpinion: 0,
      opinionsSpinner: false,
    };
  },
  async fetch() {
    await this.fetchCompanyDetails();
    await this.getRatings();
  },
  mounted() {
    this.allOpinions();
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

    threeMenuOpen() {
      this.threeOpen = !this.threeOpen;
    },

    setRatingId(id) {
      this.pageForOpinions2 = 1;
      this.rating = id;
      this.allOpinions();
    },
    async fetchCompanyDetails() {
      this.fetchCompanySpinner = true;
      try {
        const response = await this.$axios.get(
          `/Industries/GetCompanyDetailsByAdmin?companyId=${this.$route.params.id}`
        );
        this.form.Name = response.data.Name;
        this.form.IndustryId = response.data.IndustryId
        this.form.Slogan = response.data.Slogan;
        this.form.Description = response.data.Description;
        this.form.Banner = response.data.Banner;
        this.fetchCompanySpinner = false;
      } catch (e) {
        this.fetchCompanySpinner = false
        this.$store.commit("notifications/error", "something went wrong")
        this.makeToast()
      }
    },
    async allOpinions() {
      this.opinionsSpinner = true;
      let keyword = this.keyword ? this.keyword : "";
      keyword ? (this.pageForOpinions2 = 1) : this.pageForOpinions2;
      this.pageForOpinions = this.pageForOpinions2;
      this.pageForOpinions--;
      try {
        const opinions = await this.$axios.get(
          `Opinions/GetOpinions?keyword=${keyword}&companyId=${this.$route.params.id}&rating=${this.rating}&page=${this.pageForOpinions}&pageSize=${this.pageSize}`
        );
        this.opinions = opinions.data.Results;
        this.totalRowsForOpinion = opinions.data.TotalCount;
        this.opinionsSpinner = false;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getRatings() {
      try {
        const ratings = await this.$axios.get("settings/GetRatings");
        this.ratingsData = ratings.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async updateCompany1() {
      this.updateSpinner = true;
      let formData = new FormData();
      try {
        if (File) {
          formData.append("File", this.File);
          let banner = await this.$axios.post(`FileUpload/PictureUpload`, formData);
          this.form.Banner = banner.data;
          this.form.Logo = banner.data
        }
        await this.updateCompany();
      } catch (e) {
        this.updateSpinner = false
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async updateCompany() {
      this.updateSpinner = true;
      try {
        const response = await this.$axios.post("Industries/UpdateCompany", this.form);
        this.updateSpinner = false;
        swal({
          title: "Success!",
          text: "company updated!",
          icon: "success",
        });
      } catch (e) {
        this.spinner = false
        this.$store.commit("notifications/error", "something went wrong")
        this.makeToast()
      }
    },
    ratingMethod(value) {
      let foundEmoji = this.ratingEmoji.find((emoji) => emoji.PreferredName === value);
      return foundEmoji;
    },
  },
  watch: {
    keyword() {
      this.allOpinions();
    },
    pageForOpinions2() {
      this.allOpinions();
    },
  },
};
</script>

<style scoped>

input,    .form-control:focus {
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  color:  #000;
  border-radius: 0;
  border: none;
  padding: 1.5rem 1rem;
  margin: 0px 0px 8px;
}

textarea {
    font-size: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  color:  #000;
  border-radius: 0;
  border: none;
  margin: 0px 0px 8px;
}
.active {
  opacity: 0.3;
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

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 50%;
  padding: 12px 0px 12px;
  border: 0;
  border-radius: 25px;
  margin-left: 50%;
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
  height: 35px;
  width: 90px;
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

.btn-sacademy1 {
  color: #fff !important;
  background: #18e5b4;
  border-radius: 25px;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  padding: 8px 34px 8px;
  border: 0;
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
