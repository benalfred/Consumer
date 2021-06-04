<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <b-row>
            <b-col md="6">
              <div class="d-flex">
                <h1 class="" v-if="form.Name">
                  {{ form.Name }}
                  <span style="font-size: 24px" v-if="form.Slogan">{{form.Slogan}}</span>
                  <span style="font-size: 24px" v-if="!form.Slogan">No Slogan Yet</span>
                </h1>
                <div class="ml-4" style="cursor: pointer">
                  <img v-b-modal.modal-xl src="~assets/img/bx_bxs-edit-alt.png" alt="" />
                </div>
              </div>
              <p v-if="form.Description">{{ form.Description }}</p>
              <p v-else>No description yet</p>
            </b-col>
            <div class="col-md-6">

            </div>
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
                    v-for="company in companies"
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
                  <button type="button" class="button">No company yet</button>
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
                        v-if="!addSectorSpinner"
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
              <div class="search-wrapper mb-3">
                <div class="wrapper">
                  <div class="input-data">
                    <span class="las la-search search"></span>
                    <b-input
                      type="text"
                      required
                      debounce="1000"
                      v-model="filter"
                      class="pl-5 pt-2 input"
                      placeholder="Search for user"
                    ></b-input>
                  </div>
                </div>
              </div>

              <div class="d-flex profile-dropdown">
                <div class="">
                  <button type="button" class="btn1">ALL</button>
                </div>
                <div class="ml-lg-2">
                  <button type="button" class="btn2">Technology</button>
                </div>
                <div class="ml-lg-2">
                  <button type="button" class="btn2">FASHION</button>
                </div>
                <div class="ml-lg-2">
                  <button type="button" class="btn2">ECONOMY</button>
                </div>
                <ProfileComponent />
              </div>

              <UserResponse />
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
      title="Technology"
      body-bg-variant="light"
      header-bg-variant="light"
      hide-footer
    >
      <div class="item-wrapper one">
        <h1 class="text-center font-weight-bold mt-5" style="color: #000">
          Technology <br />
          <span style="font-size: 27px; color: #626d73">at its very best</span>
        </h1>
        <p class="text-center">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="item">
          <form
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
                    <input
                      data-required="image"
                      type="file"
                      name="image_name"
                      id="file_upload"
                      class="image-input"
                      data-traget-resolution="image_resolution"
                      value=""
                    />
                  </label>
                </div>
              </div>
              <!--item-content-->
            </div>
            <!--item-inner-->
          </form>
        </div>

        <b-row class="justify-content-center">
          <b-col md="4" class="newpost_ justify-content-center">
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
        </b-row>
      </div>
    </b-modal>

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
      form: {
        Name: null,
        Description: null,
        Slogan: null,
        Banner: null,
        Logo: null,
      },
      filter: "",
      positiveRatings: [],
      isFetchingSectors: false,
      fetchCompanySpinner: false,
      negativeRatings: [],
      Name: null,
      id: null,
      sectorSpinner: false,
      page: 1,
      bpg: 1,
      sectors: [],
      companies: [],
      sectors3: [],
      totalRows: null,
      opinions: [],
      pageSize: 10,
      addCompanySpinner: false,
    };
  },
  async fetch(){
   await this.fetchIndustryDetails()
  },
  methods: {
    setId(id) {
      this.id = id;
    },
    async fetchIndustryDetails() {
      this.fetchCompanySpinner = true
      try {
        const response = await this.$axios.get(
          `/Industries/GetIndustryDetailsByAdmin?industryId=${this.$route.params.id}`
        );
        this.form.Name = response.data.Name;
        this.form.Slogan = response.data.Slogan;
        this.form.Description = response.data.Description;
        this.companies = response.data.Companies;
        this.form.Banner = response.data.Banner;
        this.fetchCompanySpinner = false
      } catch (e) {
        alert(e);
        console.log(e);
      }
    },
    async addCompany() {
      this.addCompanySpinner = true;
      try {
        await this.$axios.post("Industries/CreateCompany", {
          Name: this.Name,
          IndustryId:this.$route.params.id
        });
        this.Name = null;
        this.addCompanySpinner = false;
        swal({
          title: "Success!",
          text: "company added!",
          icon: "success",
        });
        await this.fetchCompany();
      } catch (e) {
        console.log(e);
      }
    },
     async deleteCompany() {
      try {
        await this.$axios.post("/Industries/DeleteCompany", {Id:this.id});
        let newCompanies = this.companies.filter(company => company.Id != this.id)
        this.companies = newCompanies
        this.$router.back()
        this.$store.commit("notifications/success", "company deleted");
        this.makeToast();
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
  },
};
</script>

<style scoped>
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
