<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <div class="d-flex" style="cursor: pointer">
            <h1 class="mb-5">Welcome Back!</h1>
            <div>
              <img
                v-b-modal.modal-xl
                class="ml-4 mt-2"
                src="~assets/img/bx_bxs-edit-alt.png"
                alt=""
              />
            </div>
          </div>
          <b-row>
            <b-col lg="6" xl="6" class="">
              <div class="Opinion p-3 pl-lg-5">
                <h4 class="h4 pb-3">Opinion Ratings</h4>

                <p class="text-white text" style="position: relative; top: 10px">
                  POSIVIE OPINIONS
                </p>
                <div class="d-lg-flex">
                  <div class="d-flex" v-if="positiveRatings.length">
                    <button
                      type="button"
                      class="btn_"
                      v-for="rating in positiveRatings"
                      :key="rating.Id"
                    >
                      {{ rating.Name }}
                    </button>
                  </div>
                  <button type="button" class="btn_" v-if="!positiveRatings.length">
                    No positive rating yet
                  </button>
                </div>

                <div class="mt-4">
                  <p class="text-white text" style="position: relative; top: 10px">
                    NEGATIVE OPINIONS
                  </p>
                  <div class="d-lg-flex">
                    <div class="d-flex" v-if="negativeRatings.length">
                      <button
                        type="button"
                        class="btn_"
                        v-for="rating in negativeRatings"
                        :key="rating.Id"
                      >
                        {{ rating.Name }}
                      </button>
                    </div>
                    <button type="button" class="btn_" v-if="!negativeRatings.length">
                      No negative rating yet
                    </button>
                  </div>
                </div>
              </div>

              <div class="Opinion1 p-3 p-lg-5 mt-5">
                <div>
                  <div class="d-flex">
                    <p class="add pb-2">Add and Remove Sectors</p>
                  </div>
                  <div
                    class="mb-2"
                    style="background: rgba(0, 0, 0, 0.1); height: 1px"
                  ></div>
                </div>
                <div class="d-flex_ row" v-if="sectors.length">
                  <div class="col-md-4 d-flex" v-for="sector in sectors" :key="sector.id">
                  <div>
                     <button @click="goToIndustryDetailsPage(sector)" type="button" class="button">
                      {{ sector.Name }}
                    </button>
                    <a href="#openModal-about">
                      <i @click="setId(sector.Id)"
                        class="far fa-times-circle"
                        style="position: absolute;  cursor: pointer"
                      ></i
                    ></a>
                  </div>

                  </div>
                </div>

                 <b-pagination
                    v-model="bpg"
                    :total-rows="totalRows"
                    :per-page="pageSize"
                    align="center"
                    size="sm"
                    class="my-0 text-center"
                />

                <div class="" v-if="!sectors.length && !fetchSectorSpinner">
                  <button type="button" class="button">No sector yet</button>
                </div>
                <b-spinner
                  v-if="fetchSectorSpinner"
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
                        @click="addSector"
                        :disabled="!Name"
                      >
                        <img src="~assets/img/sectoricon.png" alt="" />
                      </button>
                      <b-spinner
                        v-if="addSectorSpinner"
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

              <SectorsList />

            </b-col>
          </b-row>
        </div>
      </div>
    </div>

    <!-- <b-modal
          id="modal-lg"
          size="lg" class="popup"
          centered scrollable title=""
          body-bg-variant="light"
          header-bg-variant="light" hide-footer>


        </b-modal> -->

    <!--modals-->
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
                  class="mt-2 mr-4 btn-sacademy"
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
                <button @click="deleteSector"
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

          <div style="background: #333536" class="p-4 mt-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectorsList from "~/components/SectorsList.vue"
export default {
  layout: "dashlayout",
  component: { SectorsList },
  data() {
    return {
      filter: "",
      positiveRatings: [],
      isFetchingSectors: false,
      fetchSectorSpinner: false,
      negativeRatings: [],
      Name: null,
      id:null,
      sectorSpinner: false,
      page: 1,
      bpg: 1,
      sectors: [],
      sectors3:[],
      totalRows:null,
      opinions: [],
      pageSize: 10,
      addSectorSpinner: false,
    };
  },
  async fetch() {
    await this.fetchPositiveRatingAndNegativeRating(), await this.fetchSectors();
  },
  computed: {
    sector2(){
      return this.$store ? this.$store.state.notifications.sector2 : null;
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
    setId(id){
    this.id = id
    },
    goToIndustryDetailsPage(sector){
     this.$router.push(`/admin/industry/${sector.Id}/${sector.Name}`)
    },
    async deleteSector() {
      try {
        await this.$axios.post("/Industries/DeleteIndustry", {Id:this.id});
        let newSectors = this.sectors.filter(sector => sector.Id != this.id)
        this.sectors = newSectors
        this.$router.back()
        this.$store.commit("notifications/success", "sector deleted");
        this.makeToast();
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async addSector() {
      this.addSectorSpinner = true;
      try {
          await this.$axios.post("Industries/CreateIndustry", {
          Name: this.Name,
        });
        this.Name = null;
        this.addSectorSpinner = false;
        swal({
          title: "Success!",
          text: "sector added!",
          icon: "success",
        });
        await this.fetchSectors()
      } catch (e) {
        console.log(e)
      }
    },
    async fetchSectors() {
      this.fetchSectorSpinner = true;
       this.page = this.bpg
       this.page--
      try {
        const sector = await this.$axios.get(
          `Industries/GetLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
        this.totalRows = sector.data.TotalCount
        this.sectors = sector.data.Results;
        this.fetchSectorSpinner = false;
      } catch (e) {
        console.log(e)
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },

    async fetchPositiveRatingAndNegativeRating() {
      try {
        const positiveRatings = await this.$axios.get(
          "Industries/GetTop3IndustiesWithPositiveRating"
        );
        const negativeRatings = await this.$axios.get(
          "Industries/GetTop3IndustiesWithNegativeRating"
        );
        this.positiveRatings = positiveRatings.data;
        this.negativeRatings = negativeRatings.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
        return;
      }
    },
  },
  watch:{
    bpg() {
      this.fetchSectors()
    }
  }
};
</script>

<style scoped>
.pagination-sm .page-item .page-link{
    border: none!important;
    width: 300px;
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
  padding: 5px 12px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
}

.profile-dropdown_::-webkit-scrollbar {
  width: 5px;
  border-radius: 50px;
}


/* Track */
.profile-dropdown_::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.profile-dropdown_::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.profile-dropdown_::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
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

.button {
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

.sector {
  background: #656565;
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

@media screen and (max-width: 700px) {
  .btn2_ {
    margin-top: 10px;
  }
}

.d-flex_ i {
  color: red;
}
</style>
