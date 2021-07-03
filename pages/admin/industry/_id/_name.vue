<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <b-row class="overflow_">
            <b-col md="6">
              <div class="d-flex">
                <h1 class="" v-if="form.Name">
                  {{ form.Name }}
                  <span style="font-size: 24px" v-if="form.Slogan">{{
                    form.Slogan
                  }}</span>
                  <span style="font-size: 24px" v-if="!form.Slogan">No Slogan Yet</span>
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

              <div class="Opinion1 p-3 p-lg-5 mt-5">
                <div>
                  <div class="d-flex">
                    <p class="add pb-2">Add and Remove Company</p>
                  </div>
                  <div
                    class="mb-2"
                    style="background: rgba(0, 0, 0, 0.1); height: 1px"
                  ></div>
                </div>
                <div class="d-flex_ row" v-if="companies.length">
                  <div
                    class="col-md-4 d-flex"
                    v-for="company in companies2"
                    :key="company.id"
                  >
                    <button
                      @click="goToCompanyDetailsPage(company)"
                      type="button"
                      class="btn1"
                    >
                      {{ company.Name }}
                    </button>
                    <a href="#openModal-about">
                      <i
                        @click="setId(company.Id)"
                        class="far fa-times-circle"
                        style="position: absolute; bottom: 20px; cursor: pointer"
                      ></i
                    ></a>
                  </div>
                </div>
                <div class="" v-if="!companies.length && !fetchCompanySpinner">
                  <p  class="">No company yet</p>
                </div>
                <b-spinner
                  v-if="fetchCompanySpinner"
                  label="Spinning"
                  style="margin-left: 5%"
                ></b-spinner>

                <div class="sector p-3 mt-5">
                  <b-row class="my-1">
                    <b-col sm="9">
                      <b-form-input
                        id="input-large"
                        v-model="Name"
                        class="input-sector"
                        size="lg"
                        placeholder="New Sector"
                      ></b-form-input>
                    </b-col>
                    <b-col sm="3" class="pl-4 pt-0">
                      <button
                        v-if="!addCompanySpinner"
                        class="btn outline-none"
                        @click="addCompany"
                        :disabled="!Name"
                      >
                        <img src="~assets/img/sectoricon.png" alt="" />
                      </button>
                      <b-spinner
                        v-if="addCompanySpinner"
                        label="Spinning"
                        style="margin-left: 5%"
                      ></b-spinner>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>

            <b-col lg="6" xl="6" class="all pl-lg-5">
              <div class="search-wrapper mb-3 mt-5">
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

              <div class="d-flex profile-dropdown mr-5">
                <div class="profile-dropdown_">
                  <button
                    type="button"
                    @click="setIndustryId"
                    :class="[industryId != this.$route.params.id ? 'active' : '']"
                    class="btn1"
                  >
                    All
                  </button>
                </div>
                <div
                  class="profile-dropdown_"
                  v-for="company in companies"
                  :key="company.Id"
                  @click="setCompanyId(company.Id)"
                  :class="[companyId != company.Id ? 'active' : '']"
                >
                  <button type="button" class="btn1">{{ company.Name }}</button>
                </div>
                <!--start dropdown-->

                <div class="">
                  <div
                    class="nav-list user-icon text-center d-flex justify-content-center align-items-center"
                    type="submit"
                    @click="threeMenuOpen"
                  >
                    <i class="fas fa-angle-down"></i>

                    <ul
                      class="logout-sub-menu sub-menu"
                      id="logout-sub-menu"
                      :class="{ submenuthreeopen: threeOpen }"
                    >
                      <li>
                        <n-link
                          to="/dashboard"
                          class="d-flex align-items-center px-2 justify-content-start"
                        >
                          Others
                        </n-link>
                      </li>
                      <li>
                        <div
                          v-for="sector in sectors3"
                          :key="sector.Id"
                          class="d-flex px-2 align-items-center justify-content-start"
                        >
                          <button type="button" class="btn2">{{ sector.Name }}</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--end of dropdown-->
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
                  <label style="cursor: pointer" for="file_upload">
                    <img src="" alt="" class="uploaded-image" />
                    <div class="h-100">
                      <div class="dplay-tbl">
                        <div class="dplay-tbl-cell">
                          <i class="fa fa-cloud-upload"></i>
                          <h5><b>Choose Your Image to Upload</b></h5>
                          <h6 class="mt-10 mb-70">Or Drop Your Image Here</h6>
                        </div>
                      </div>
                    </div>
                    <!--upload-content-->
                    <b-form-file
                      v-model="File"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                      name="image"
                    ></b-form-file>
                  </label>
                </div>
              </div>
              <!--item-content-->
            </div>
            <!--item-inner-->

        <b-row class="justify-content-center">
          <b-col md="4" class="newpost_ justify-content-center" v-if="!updateSpinner">
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

    <div id="openModal-about" class="modalDialog">
      <div>
        <a href="#close" title="Close" class="close">X</a>
        <div class="pt-5 pb-5">
          <h3 class="text-center pb-4 text-white mt-5">Are you sure?</h3>

          <div class="d-flex justify-content-center">
            <div>
              <b-form-group class="newpost mt-3">
                <a href="#close">
                  <button
                    class="mt-2 btn-sacademy_"
                    style="font-size: 16px"
                    type="submit"
                    value="Send"
                  >
                    cancel
                  </button>
                </a>
              </b-form-group>
            </div>

            <div>
              <b-form-group class="newpost mt-3">
                <button
                  @click="deleteCompany"
                  class="mt-2 btn-sacademy1"
                  style="font-size: 16px"
                  type="submit"
                  value="Send"
                >
                  okay
                </button>
              </b-form-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent.vue";
import UserResponse from "@/components/UserResponse.vue";
export default {
  layout: "dashlayout",
  component: { UserResponse, ProfileComponent },
  data() {
    return {
      logoutMenuState: false,
      threeOpen: false,
      Banner:null,
      form: {
        Id: this.$route.params.id,
        Name: this.$route.params.name,
        Description: null,
        Slogan: null,
        Banner:null,
      },
      File:null,
      fetchCompanySpinner: false,
      Name: null,
      ratingEmoji: [
        { PreferredName: "Very Bad", emoji: "😡" },
        { PreferredName: "Bad", emoji: "😞" },
        { PreferredName: "Fair", emoji: "😑" },
        { PreferredName: "Good", emoji: "😊" },
        { PreferredName: "Very Good", emoji: "😍" },
      ],
      id: null,
      sectorSpinner: false,
      page: 1,
      bpg: 1,
      sectors: [],
      companies2: [],
      companies: [],
      sectors3: [],
      totalRows: null,
      opinions: [],
      industryId: this.$route.params.id,
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
      addCompanySpinner: false,
    };
  },
  async fetch() {
    await this.fetchIndustryDetails();
    await this.getRatings();
  },
  mounted() {
    this.allOpinions();
  },
  methods: {
    async updateSector(){
      this.updateSpinner = true
      let  formData = new FormData();
      try {
      if (File) {
        formData.append('File',this.File)
      let banner = await this.$axios.post(`FileUpload/PictureUpload`,formData)
      this.form.Banner = banner.data
      }
      await this.updateSector2()
      } catch (e) {
       this.$store.commit("notifications/error", "something went wrong")
       this.makeToast()
      }
    },
    goToCompanyDetailsPage(company) {
      this.$router.push(`/admin/company/${company.Id}/${company.Name}`);
    },
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
    setId(id) {
      this.id = id;
    },
    setRatingId(id) {
      this.pageForOpinions2 = 1;
      this.rating = id;
      this.allOpinions();
    },
    setIndustryId() {
      this.pageForOpinions2 = 1;
      this.companyId = 0;
      this.industryId = this.$route.params.id;
      this.allOpinions();
    },
    setCompanyId(id) {
      this.pageForOpinions2 = 1;
      this.companyId = id;
      this.industryId = 0;
      this.allOpinions();
    },
    async fetchIndustryDetails() {
      this.fetchCompanySpinner = true;
      try {
        const response = await this.$axios.get(
          `/Industries/GetIndustryDetailsByAdmin?industryId=${this.$route.params.id}`
        );
        this.form.Name = response.data.Name;
        this.form.Slogan = response.data.Slogan;
        this.form.Description = response.data.Description;
        this.Banner = response.data.Banner
        if (response.data.Companies.length) {
          response.data.Companies.filter((company) => {
            if (this.companies.length != 3) {
              this.companies.push(company);
            }
          });
          let ctx = this;
          ctx.sectors3 = [];
          response.data.Companies.filter((com, index) => {
            if (index > 2) {
              ctx.sectors3.push(com);
            }
          });
        }
        this.companies2 = response.data.Companies;
        this.fetchCompanySpinner = false;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong")
        this.makeToast()
      }
    },
    async addCompany() {
      this.addCompanySpinner = true;
      try {
        await this.$axios.post("Industries/CreateCompany", {
          Name: this.Name,
          IndustryId: this.$route.params.id,
        });
        this.Name = null;
        this.addCompanySpinner = false;
        await this.fetchIndustryDetails();
        swal({
          title: "Success!",
          text: "company added!",
          icon: "success",
        });
      } catch (e) {
        if (e.response) {
          this.addCompanySpinner = false;
          swal({
            title: "Error!",
            text: e.response.data,
            icon: "warning",
            dangerMode: true,
          });
        } else {
          this.addCompanySpinner = false;
          swal({
            title: "Error!",
            text: "something went wrong",
            icon: "warning",
            dangerMode: true,
          });
        }
      }
    },
    async deleteCompany() {
      try {
        await this.$axios.post("/Industries/DeleteCompany", { Id: this.id });
        let newCompanies = this.companies2.filter((company) => company.Id != this.id);
        this.companies2 = newCompanies;
        this.companies = newCompanies;
        this.$router.back();
        this.$store.commit("notifications/success", "company deleted");
        this.makeToast();
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
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
          `Opinions/GetOpinions?industryId=${this.industryId}&keyword=${keyword}&companyId=${this.companyId}&rating=${this.rating}&page=${this.pageForOpinions}&pageSize=${this.pageSize}`
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
    async updateSector2() {
      this.updateSpinner = true;
      try {
         await this.$axios.post("Industries/UpdateIndustry", this.form);
        this.updateSpinner = false;
        swal({
          title: "Success!",
          text: "sector updated!",
          icon: "success",
        });
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
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
.active {
  opacity: 0.3;
}

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

.btn-sacademy1 {
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
