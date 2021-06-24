<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <div class="d-flex" style="cursor: pointer">
          <h1 class="mb-5">Welcome Back!</h1>
          </div>
          <b-row>
            <b-col lg="6" xl="6" class="">
              <div class="Opinion p-4 pl-lg-5">
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
                  <div
                    class="col-sm-6 col-lg-4 	d-none d-sm-block"
                    v-for="sector in sectors"
                    :key="sector.id"
                  >
                    <div>
                      <button
                        @click="goToIndustryDetailsPage(sector)"
                        type="button"
                        class="button"
                      >
                        {{ sector.Name }}
                      </button>
                      <a href="#openModal-about">
                        <i
                          @click="setId(sector.Id)"
                          class="far fa-times-circle"
                          style="position: absolute; cursor: pointer; top: 5px; left: 5px"
                        ></i
                      ></a>
                    </div>
                  </div>
                  <div
                    class="col-6 d-block d-sm-none"
                    v-for="sector in sectors"
                    :key="sector.id"
                  >
                    <div>
                      <button
                        @click="goToIndustryDetailsPage(sector)"
                        type="button"
                        class="button"
                      >
                        {{ sector.Name }}
                      </button>
                      <a href="#openModal-about">
                        <i
                          @click="setId(sector.Id)"
                          class="far fa-times-circle"
                          style="position: absolute; cursor: pointer; top: 5px; left: 5px"
                        ></i
                      ></a>
                    </div>
                  </div>
                </div>

                <div>
                  <b-pagination
                    v-model="bpg"
                    :total-rows="totalRows"
                    :per-page="pageSize"
                    align="center"
                    size="sm"
                    class="my-0 text-center"
                  />
                </div>

                <div class="d-flex_ row" v-if="!sectors.length && !fetchSectorSpinner">
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
                      v-model="keyword"
                      class="pl-5 pt-2 input"
                      placeholder="Search for user"
                    ></b-input>
                  </div>
                </div>
              </div>
              <div>
                <div class="d-flex profile-dropdown mr-5">
                  <div
                    class="profile-dropdown_"
                    :class="[industryId != 0 ? 'active' : '']"
                  >
                    <button type="button" @click="setIndustryIdToZero" class="btn1">
                      All
                    </button>
                  </div>
                  <div
                    class="profile-dropdown_"
                    v-for="sector in sectors2"
                    :key="sector.Id"
                    :class="[industryId != sector.Id ? 'active' : '']"
                  >
                    <button type="button" @click="setIndustryId(sector.Id)" class="btn1">
                      {{ sector.Name }}
                    </button>
                  </div>
                  <!--start dropdown-->
                  <div class="" v-if="sectors3.length">
                    <div
                      class="nav-list user-icon text-center d-flex justify-content-center align-items-center"
                      type="submit"
                      @click="threeMenuOpen"
                    >
                      <i class="fas fa-angle-down"></i>

                      <div class="logout-sub-menu row sub-menu"
                        id="logout-sub-menu"
                        :class="{ submenuthreeopen: threeOpen }">

                          <div
                            v-for="sector in sectors3"
                            :key="sector.Id"
                            class="px-3 pt-4 align-items-center justify-content-start"
                          >
                            <button
                              @click="setIndustryId(sector.Id)"
                              type="button"
                              class="btn2"
                            >
                              {{ sector.Name }}
                            </button>
                          </div>
                          <b-pagination
                            v-model="bpg2"
                            :total-rows="totalRows2"
                            :per-page="pageSize"
                            align="center"
                            size="sm"
                            class="my-2 text-center ml-5"
                          />

                      </div>
                    </div>
                  </div>
                  <!--end of dropdown-->
                </div>

                <div class="second-col px-4 pt-5 mt-5 pb-4">
                  <div>
                    <div class="d-flex" v-if="ratingsData.length">
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
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>

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
                  @click="deleteSector"
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
import SectorsList from "~/components/SectorsList.vue";
export default {
  layout: "dashlayout",
  component: { SectorsList },
  data() {
    return {
      logoutMenuState: false,
      threeOpen: false,
      positiveRatings: [],
      isFetchingSectors: false,
      fetchSectorSpinner: false,
      negativeRatings: [],
      Name: null,
      id: null,
      sectorSpinner: false,
      page: 1,
      page2: 1,
      bpg2: 1,
      totalRows2: 0,
      bpg: 1,
      sectors: [],
      sectors3: [],
      ratingEmoji: [
        { PreferredName: "Very Bad", emoji: "😡" },
        { PreferredName: "Bad", emoji: "😞" },
        { PreferredName: "Fair", emoji: "😑" },
        { PreferredName: "Good", emoji: "😊" },
        { PreferredName: "Very Good", emoji: "😍" },
      ],
      sectors2: [],
      totalRows: null,
      opinions: [],
      industryId: 0,
      rating: 5,
      keyword: null,
      ratingsData: [],
      pageForOpinions: 1,
      pageForOpinions2: 1,
      pageSize: 10,
      totalRowsForOpinion: 0,
      opinionsSpinner: false,
      addSectorSpinner: false,
    };
  },
  async fetch() {
    await this.fetchPositiveRatingAndNegativeRating(),
      await this.fetchSectors2(),
      await this.fetchSectors(),
      await this.getRatings();
  },
  mounted() {
    this.allOpinions();
  },

  methods: {
    setIndustryIdToZero() {
      this.industryId = 0;
      this.allOpinions();
    },
    threeMenuOpen() {
      this.threeOpen = !this.threeOpen;
    },
    makeToast() {
      this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
        title: this.$store.state.notifications.type,
        autoHideDelay: 5000,
        variant: this.$store.state.notifications.type === "error" ? "danger" : "info",
        solid: true,
      }); 
    },
    setId(id) {
      this.id = id;
    },
    goToIndustryDetailsPage(sector) {
      this.$router.push(`/admin/industry/${sector.Id}/${sector.Name}`);
    },
    async deleteSector() {
      alert(this.id);
      try {
        await this.$axios.post("/Industries/DeleteIndustry", { Id: this.id });
        let newSectors = this.sectors.filter((sector) => sector.Id != this.id);
        this.sectors = newSectors;
        this.$router.back();
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
        await this.fetchSectors();
      } catch (e) {
        if (e.response) {
          this.addSectorSpinner = false;
          swal({
            title: "Error!",
            text: e.response.data,
            icon: "warning",
            dangerMode: true,
          });
        } else {
          this.addSectorSpinner = false;
          swal({
            title: "Error!",
            text: "something went wrong",
            icon: "warning",
            dangerMode: true,
          });
        }
      }
    },
    async fetchSectors2() {
      this.page2 = this.bpg2;
      this.page2--;
      try {
        const sector = await this.$axios.get(
          `Industries/GetLiteIndustries?page=${this.page2}&pageSize=${this.pageSize}`
        );
        this.sectors2 = [];
        this.totalRows2 = sector.data.TotalCount;
        if (sector.data.Results.length) {
          sector.data.Results.filter((sec) => {
            if (this.sectors2.length != 3) {
              this.sectors2.push(sec);
            }
          });
          let ctx = this;
          ctx.sectors3 = [];
          sector.data.Results.filter((sec, index) => {
            if (index > 2) {
              ctx.sectors3.push(sec);
            }
          });
        }
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async fetchSectors() {
      this.fetchSectorSpinner = true;
      this.page = this.bpg;
      this.page--;
      try {
        const sector = await this.$axios.get(
          `Industries/GetLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
        this.totalRows = sector.data.TotalCount;
        this.sectors = sector.data.Results;
        this.fetchSectorSpinner = false;
      } catch (e) {
        console.log(e);
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    setRatingId(id) {
      this.pageForOpinions2 = 1;
      this.rating = id;
      this.allOpinions();
    },
    setIndustryId(id) {
      this.pageForOpinions2 = 1;
      this.industryId = id;
      this.allOpinions();
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
    async allOpinions() {
      this.opinionsSpinner = true;
      let keyword = this.keyword ? this.keyword : "";
      keyword ? (this.pageForOpinions2 = 1) : this.pageForOpinions2;
      this.pageForOpinions = this.pageForOpinions2;
      this.pageForOpinions--;
      try {
        const opinions = await this.$axios.get(
          `Opinions/GetOpinions?keyword=${keyword}&industryId=${this.industryId}&rating=${this.rating}&page=${this.pageForOpinions}&pageSize=${this.pageSize}`
        );
        this.opinions = opinions.data.Results;
        this.totalRowsForOpinion = opinions.data.TotalCount;
        this.opinionsSpinner = false;
      } catch (e) {
        this.$store.commit("notifications/error", "somethin went wrong")
        this.makeToast()
      }
    },
    async getRatings() {
      try {
        const ratings = await this.$axios.get("settings/GetRatings");
        this.ratingsData = ratings.data;
      } catch (e) {
        alert("error");
        console.log(e);
      }
    },
    ratingMethod(value) {
      let foundEmoji = this.ratingEmoji.find((emoji) => emoji.PreferredName === value);
      return foundEmoji;
    },
  },
  watch: {
    bpg() {
      this.fetchSectors();
    },
    bpg2() {
      this.fetchSectors2();
    },
    keyword() {
      this.allOpinions();
    },
  },
};
</script>

<style scoped>
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

.btn-sacademyy {
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
  width: 120px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
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

.pagination-sm .page-item .page-link {
  border: none !important;
  width: 300px;
}

.sub-menu {
  /*width: 270px;*/
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

.sub-menu button {
  margin: 0px 0px 10px;
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
    right: 100px;
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
  opacity: 0.5;
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
  width: 120px;
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
