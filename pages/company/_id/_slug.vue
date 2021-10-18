<template>
  <div>
    <div class="loader_bg">
      <div class="loader"></div>
    </div>
    <section class="bg mt-5 px-lg-2" style="padding-bottpm: 50px">
      <div class="container-fluid">
        <b-row>
         <b-col md="5" class="pt-5 px-lg-4 mt-lg-5 mb-5 order-sm-1 order-2 pr-md-0" >
              <h1 style="line-height: 65px;">{{ Name }} <br> Company.</h1>
              <p class="pt-4 lead-text">HERE IS WHAT NIGERIANS ARE SAYING <br> ABOUT {{ Name }} Company</p>

           <b-form-group class="newpost mt-3">
                    <button
                      @click="shareOpinion"
                      class="mt-2 btn-sacademy"
                      style="font-size: 16px"
                      type="submit"
                      value="Send"
                    >
                      Share opinion
                    </button>
            </b-form-group>
        </b-col>



        <b-col md="6" class=" order-sm-2 ml-llg-5 order-1 mb-0 pb-0 ml-0 px-0 offset-sm-1 offset-md-1 offset-0">
              <img
                   src="~/assets/img/people.jpg"
                        class="img-fluid ml-lg-3 "
                        alt=""
                      />
        </b-col>

        </b-row>
           <div class="col-md-12">
              <div class="row pb-1 pt-3 pl-2 pt-2 pb-3 justify-content-center" style="background: black">
                <div class="col-md-2 p-2" style="background: #00b5d3">
                  <b-media>
                    <template #aside>
                      <img
                        src="~/assets/img/thumbs.png"
                        class="img-fluid p-2 mt-4 ml-3 img1"
                        alt=""
                      />
                    </template>

                    <div class="d-flex b-media">
                      <h6 class="pt-2 mt-1">{{ PositivePercent }}</h6>
                      <p class="ml-2 pt-4">
                        Positve <br />
                        Opinion
                      </p>
                    </div>
                  </b-media>
                </div>

                <div class="col-md-2 p-2 ml-lg-2">
                  <b-media>
                    <template #aside>
                      <img
                        src="~/assets/img/thumbdown.png"
                        class="img-fluid p-2 mt-4 ml-2 img2"
                        alt=""
                      />
                    </template>

                    <div class="d-flex b-media">
                      <h6 class="pt-2 mt-1">{{ NegativePercent }}</h6>
                      <p class="ml-1 pt-4">
                        Negative <br />
                        Opinion
                      </p>
                    </div>
                  </b-media>
                </div>

                <div class="col-md-2 p-2 ml-lg-2">
                  <b-media>
                    <template #aside>
                      <img
                        src="~/assets/img/thumbsleft.png"
                        class="img-fluid p-2 mt-4 ml-2 img1"
                        alt=""
                      />
                    </template>

                    <div class="d-flex b-media">
                      <h6 class="pt-2 mt-1">{{ NeutralPercent }}</h6>
                      <p class="ml-1 pt-4">
                        Neutral <br />
                        Opinion
                      </p>
                    </div>
                  </b-media>
                </div>

                <div class="col-md-2 p-2 ml-lg-2">
                  <b-media>
                    <template #aside>
                      <img
                        src="~/assets/img/thumbsleft2.png"
                        class="img-fluid p-2 mt-4 ml-2 img1"
                        alt=""
                      />
                    </template>

                    <div class="d-flex b-media">
                      <h6 class="pt-2 mt-1">{{ TotalReviewCount }}</h6>
                      <p class="ml-1 pt-4">
                        REVIES <br />
                        SUBMITTED
                      </p>
                    </div>
                  </b-media>
                </div>
              </div>

          </div>
      </div>
    </section>

    <b-container class="mb-5 second-con">
      <b-row class=" d-lg-flex">
        <b-col md="5">
          <p
            class="header-p">
            {{ Name }}
          </p>
          <p class="pt-3 dell-p">
            {{ Description }}
          </p>
          <b-form-group
            class="newpost mt-3"
            data-aos="fade-right"
            data-aos-offset="30"
            data-aos-delay="300"
          >
            <button
              @click="goToShareOpinionPage"
              class="mt-3 btn-sacademy"
              style="font-size: 16px"
              type="submit"
              value="Send"
            >
              Share your Opinion
            </button>
          </b-form-group>
        </b-col>

        <b-col class="md-1"> </b-col>

        <b-col md="5" class="dell-card">
          <p class="pb-2 header-p">OTHER POPULAR TECHNOLOGIES</p>
          <div class="d-none d-sm-block" v-if="!spinner">
            <div class="d-flex_ row p-5" data-aos="fade-up">
              <div
                class="col-md-4"
                style="cursor: pointer"
                v-for="sector in sectors"
                :key="sector.Id"
                @click="linkToIndustries(sector)"
              >
               <div class="company-image">
                   <img v-if="sector.Logo" :src="sector.Logo" class="rounded img-fluid" alt="" />
                <img v-else src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
                <div class="company-name mt-2">

                </div>
              </div>
              <div class="col-md-4" v-if="sectors2.length">
                <a >
                  <button class="btn"  @click="modalShow = !modalShow">
                    <img
                      src="~/assets/img/viewall.png"
                      class="img-fluid ml-n3"
                      alt=""
                    /></button
                ></a>
              </div>
            </div>
          </div>
          <b-spinner v-if="spinner" label="Spinning" style="margin-left: 50%"></b-spinner>



          <div class="d-block d-sm-none" v-if="!spinner">
            <div class="d-flex_ row p-5" data-aos="fade-up">
              <div
                class="col-6"
                style="cursor: pointer"
                v-for="sector in sectors"
                :key="sector.Id"
                @click="linkToIndustries(sector)"
              >
                <img v-if="sector.Logo" :src="sector.Logo" class="rounded_ img-fluid" alt="" />
                <img v-else src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
                <div class="company-name mt-2">

                </div>
              </div>

              <div class="col-6" v-if="sectors2.length">
                <a>
                  <button class="btn"  @click="modalShow = !modalShow">
                    <img
                      src="~/assets/img/viewall.png"
                      class="img-fluid ml-n3"
                      alt=""
                    /></button
                ></a>
              </div>
            </div>
          </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <agegender
      :MillenialRating="post.MillenialRating"
      :BabyBoomRating="post.BabyBoomRating"
      :FemaleRating="post.FemaleRating"
      :MaleRating="post.MaleRating"
      :GenerationXRating="post.GenerationXRating"
      v-if="post"
    />

    <Footer />

  <b-modal v-model="modalShow" size="lg" hide-header header-bg-variant="white" hide-footer header-class="border-0" scrollable centered body-bg-variant="white">

  <div class="d-none d-sm-block" v-if="sectors2">
        <div class=" row ">
          <div
            class="col-md-3"
            v-for="sector in sectors2"
            :key="sector.Id"
            style="cursor: pointer"
            @click="linkToIndustries(sector)"
          >
            <img v-if="sector.Logo" :src="sector.Logo" class="rounded_ d-flex mx-auto justify-content-center img-fluid" alt="" />
            <img v-else src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            <div class="company-name mt-2">
              <p class="p-2 text-center" style="font-size: 12px!important">{{ sector.Name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="d-block d-sm-none" v-if="sectors2">
        <div class=" row ">
          <div
            class="col-md-3"
            v-for="sector in sectors2"
            :key="sector.Id"
            style="cursor: pointer"
            @click="linkToIndustries(sector)"
          >
            <img v-if="sector.Logo" :src="sector.Logo" class="rounded_ img-fluid d-flex mx-auto justify-content-center" alt="" />
            <img v-else src="~/assets/img/dell-icon.png" class="img-fluid  d-flex mx-auto justify-content-center" alt="" />
            <div class="company-name mt-2">
              <p class="p-2 text-center">{{ sector.Name }}</p>
            </div>
          </div>
        </div>
      </div>

  </b-modal>

  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import SecNav from "@/components/SecNav.vue";
import agegender from "@/components/agegender.vue";
import Footer from "@/components/footer.vue";
export default {
  layout: "headerr",
  component: { agegender, Footer, SecNav },

  // async fetch() {
  //   await this.fetchCompanyDetails();
  //   await this.fetchIndustryDetails();
  // },
  // middleware: "account_setup",
 async mounted() {
     await this.fetchCompanyDetails();
    await this.fetchIndustryDetails();
    this.load()
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  head() {
    return {
      title: `${this.title} | ConsumerHalla Survey`,
    };
  },
  data() {
    return {
      modalShow: false,
      Name: null,
      Slogan: null,
      title: "View Company",
      Banner: "",
      Logo: null,
      post: null,
      spinner: false,
      page: 1,
      pageSize: 1,
      pageForOpinions2: 1,
      totalRow: 0,
      bpg: 1,
      sectors: [],
      sectors2: [],
      PositivePercent: 0,
      NegativePercent: 0,
      NeutralPercent: 0,
      TotalReviewCount: 0,
      Description: null,
    };
  },

  methods: {
    load(){
      setTimeout(function() {
        $('.loader_bg').fadeToggle();
      }, 2000);
    },
    linkToIndustries(sector) {
      this.$router.push(`/company/${sector.Id}/${sector.Name}`);
    },
    makeToast() {
      this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
        title: this.$store.state.notifications.type,
        autoHideDelay: 5000,
        variant: this.$store.state.notifications.type === "error" ? "danger" : "info",
        solid: true,
      });
    },
    goToShareOpinionPage() {
      this.$router.push(
        `/share-opinion/${this.$route.params.id}/${this.$route.params.slug}`
      );
    },
    shareOpinion() {
      this.$router.push(
        `/share-opinion/${this.$route.params.id}/${this.$route.params.slug}`
      );
    },
    async fetchCompanyDetails() {
      try {
        const response = await this.$axios.get(
          `Industries/GetPublicCompanyDetails?companyId=${this.$route.params.id}`
        );
        this.post = response.data;
        this.Name = response.data.Name;
        this.Slogan = response.data.Slogan;
        this.Description = response.data.Description;
        this.Logo = response.data.Logo;
        this.Banner = response.data.Banner;
        this.PositivePercent = response.data.GeneralRating.PositivePercent;
        this.NegativePercent = response.data.GeneralRating.NegativePercent;
        this.NeutralPercent = response.data.GeneralRating.NeutralPercent;
        this.TotalReviewCount = response.data.GeneralRating.TotalReviewCount;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async fetchIndustryDetails() {
      this.spinner = true;
      let sec_id = localStorage.getItem("sec_Id");
      try {
        const response = await this.$axios.get(
          `Industries/GetPublicIndustryDetails?industryId=${sec_id}`
        );
        if (response.data.Companies.length) {
          response.data.Companies.filter((sec) => {
            if (this.sectors.length != 6 && sec.Id != this.$route.params.id) {
              this.sectors.push(sec);
            }
          });
          let ctx = this;
          response.data.Companies.filter((com, index) => {
            if (index > 5 ) {
              ctx.sectors2.push(com);
            }
          });
        }
        this.spinner = false;
        //  document.getElementsByClassName('.big-image').style.background = this.Banner
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
  },
};
</script>

<style scoped>

h1 {
  color: #241d36;
  font-family: 'Rawline Bold';
  font-size: 37px;
  font-weight: bolder;
}

.lead-text {
  color: #241d36;
  font-size: 19px;
  font-weight: 500;
  font-family: 'Rawline Medium';
}

.img1 {
  background: #fff;
  border-radius: 19.5px;
}

.img2 {
  background: #d91925;
  border-radius: 19.5px;
}

.b-media h6 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
}

.b-media p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 124.4%;
  text-transform: uppercase;
  color: #ffffff;
}

.reviews-p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
  color: #656565;
}

.big-image {
  height: 62vh;
  width: 99vw;
  position: relative;
  background-repeat: repeat;
  background-size: cover;
  background-color: #000;
  background-position: 50% 50%;
  overflow: hidden;
}

.company-name {
  background: #07072f;
  color: white;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  box-shadow: 0px 12px 12px #00000029;
}

.company-image img {
  height: 59px;
}

@media screen and (min-width: 750px) {
  .big-image {
    height: 72vh;
    width: 99vw;
    position: relative;
    background-repeat: repeat;
    background-size: cover;
    background-color: #000;
    background-position: 50% 50%;
    overflow: hidden;
  }
}

@media screen and (max-width: 740px) {
  .big-image {
    height: 120vh;
    width: 99vw;
    position: relative;
    background-repeat: repeat;
    background-size: cover;
    background-color: #000;
    background-position: 50% 50%;
    overflow: auto;
  }
}

.d-flex__ {
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0px -1px 37px rgba(0, 0, 0, 0.05);
  padding: 40px 30px 20px;
  border-radius: 3px;
  margin-top: 50px;
}

.dell-card img {
  margin: 20px 0px 10px;
}

@media screen and (min-width: 720px) {
  .second-con {
    margin-top: 120px;
  }
}

h4 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  color: #373737;
}

.header-p {
  color: #241d36;
  font-family: 'Rawline Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 60px;
}

.dell-p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.display-text a {
  padding: 0px 25px 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;
  text-align: center;
  color: #373737;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  opacity: 1;
  width: 60%;
  padding: 12px 0px 12px;
  border: 0;
  border-radius: 25px;
}

.d-flex_ {
  background: #ffffff;

  box-sizing: border-box;
  box-shadow: 0px -1px 37px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.dell-card img {
  margin: 20px 0px 10px;
}

.rounded {
  height: 100px;
  width: 70px
}

.rounded_ {
  height: 100px;
  width: 100px
}
</style>


