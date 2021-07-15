<template>
  <div class="">
    <section class="bg mt-5">
      <b-container>
        <b-row class="mb-3">
          <b-col md="12">
            <h4
              class="text-center pb-1"
              data-aos="fade-up"
              data-aos-offset="30"
              data-aos-delay="50"
            >
              Here’s what Nigerian’s are saying about the {{ Name }} Industry
            </h4>
          </b-col>

          <div class="big-image" :style="{ backgroundImage: 'url(' + Banner + ')' }">
            <div class="background-text">
              <div
                class="overlay text-center pt-5 col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12"
              >
                <h2 class="h2 pb-3 pt-5">
                  {{ Name }} <br />
                  {{ Slogan }}
                </h2>
                <p class="pt-5 ptag">
                  HERE IS WHAT NIGERINS ARE SAYING ABOUT {{ Name }} Industry
                </p>
              </div>
            </div>
          </div>
        </b-row>

        <p>ConsumerHalla Overall Ratings (%)</p>

        <div class="row pb-1 pl-2">
          <div class="col-md-2 p-2" style="background: #e57718">
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

          <div class="col-md-2 p-2 ml-lg-2" style="background: #07072f">
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

          <div class="col-md-2 p-2 ml-lg-2" style="background: #626d73">
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

          <div class="col-md-2 p-2 ml-lg-2" style="background: #00b5d3">
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
          <div class="col-md-3">
            <p class="reviews-p ml-3 align-items-center">
              With over 200 reviews, here are the rating datas collated by consumerhalla
            </p>
          </div>
        </div>

        <div style="background: #07072f" class="p-5"></div>

        <b-row>
          <b-col md="12" class="dell-card">
            <div class="d-flex_ row p-5" v-if="companies.length">
              <div
                style="cursor: pointer"
                @click="goToCompanyPage(company)"
                class="company-image"
                v-for="company in companies"
                :key="company.Id"
              >
                <img :src="company.Logo" class="img-fluid logo-img ml-4" alt="" />
                <div class="company-name mt-2">
                  <p class="p-2 pl-4 pr-4">{{ company.Name }}</p>
                </div>
              </div>
              <div class="col-md-2 pl-1" v-if="companies2.length">
                <a href="#openModal-about">
                  <button class="btn ml-2 mt-2">
                    <img src="~/assets/img/viewall.png" class="img-fluid" alt="" />
                  </button>
                </a>
              </div>
            </div>
            <div class="d-flex_ row p-5" v-if="!companies.length">
              <div class="col-md-12">
                <h3>No company for {{ Name }} Yet</h3>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <agegender
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      :MillenialRating="post.MillenialRating"
      :BabyBoomRating="post.BabyBoomRating"
      :FemaleRating="post.FemaleRating"
      :MaleRating="post.MaleRating"
      :GenerationXRating="post.GenerationXRating"
      v-if="post"
    />

    <section class="container d-flex justify-content-center pt-5 mt-5">
      <div class="row mx-0 bar-section mt-5">
        <div class="col-md-6 bg-red px-4 py-5">
          <h6>The ConsumerHalla Way</h6>
          <h4 class="pb-3 pt-2">An Immersive Experience</h4>
          <p
            style="line-height: 1.7"
            class="text-white"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Starting from scratch or you are already in the industry but want to hit the
            elite stage? No issues, we’ll help you get the skill and experience you need
            to stand out and get recruited! and we also give you 1-on-1 hands-on
            assistance to get to the top level in the industry! Our one-of-a-kind and
            foundational teaching approach enables students to thrive. In all Programs, we
            provide our students with the tools they need to launch their careers in the
            engineering and tech space.
          </p>
          <div class="text-center text-md-left">
            <button class="btn apply-now mt-4 mb-3">Apply now</button>
          </div>
        </div>
        <div class="col-md-6 img-side"></div>
      </div>
    </section>

    <Footer />

    <div id="openModal-about" class="modalDialog">
      <div>
        <div class="d-flex__ row">
          <a href="#close" title="Close" class="close">X</a>
          <div class="d-flex_ row p-5" v-if="companies2.length">
            <div
              style="cursor: pointer"
              @click="goToCompanyPage(company)"
              class="company-image"
              v-for="company in companies2"
              :key="company.Id"
            >
              <img :src="company.Logo" class="img-fluid logo-img ml-4" alt="" />
              <div class="company-name mt-2">
                <p class="p-2 pl-4 pr-4">{{ company.Name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import SecNav from "@/components/SecNav.vue";
import agegender from "@/components/agegender.vue";
import footer from "@/components/footer.vue";
export default {
  layout: "headerr",
  async fetch() {
    await this.fetchIndustryDetails();
  },
  middleware: "account_setup",
  component: { agegender, footer, SecNav },
  data() {
    return {
      Name: null,
      Slogan: null,
      Banner: "",
      Logo: null,
      companies2: [],
      companies: [],
      Description: null,
      PositivePercent: 0,
      NegativePercent: 0,
      NeutralPercent: 0,
      TotalReviewCount: 0,
      post: null,
    };
  },

  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
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
    goToCompanyPage(company) {
      this.$router.push(`/company/${company.Id}/${company.Name}`);
    },
    async fetchIndustryDetails() {
      try {
        const response = await this.$axios.get(
          `Industries/GetPublicIndustryDetails?industryId=${this.$route.params.id}`
        );
        this.Name = response.data.Name;
        this.Slogan = response.data.Slogan;
        this.Description = response.data.Description;
        this.Logo = response.data.Logo;
        this.Banner = await response.data.Banner;
        if (response.data.Companies.length) {
          response.data.Companies.filter((sec) => {
            if (this.companies.length != 6) {
              this.companies.push(sec);
            }
          });
          let ctx = this;
          response.data.Companies.filter((com, index) => {
            if (index > 5) {
              ctx.companies2.push(com);
            }
          });
        }
        this.PositivePercent = response.data.GeneralRating.PositivePercent;
        this.NegativePercent = response.data.GeneralRating.NegativePercent;
        this.NeutralPercent = response.data.GeneralRating.NeutralPercent;
        this.TotalReviewCount = response.data.GeneralRating.TotalReviewCount;
        this.post = response.data;
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
.bg-red p {
  font-family: "Poppins", sans-serif;
}

.bg-red h4 {
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: bold;
}

.bg-red h6 {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}

.bg-red .apply-now {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  letter-spacing: 0px;
  color: #202020;
  font-size: 16px;
  font-weight: normal;
  padding: 10px 40px 10px;
}

.bg-red {
  color: #fff;
  background: #626d73;
  opacity: 1;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.bar-section {
  max-width: 1200px;
}

.bar-section .img-side {
  background: url("~assets/img/the immersive experience 1.png");
  background-size: cover;
  background-position: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
.modalDialog {
  position: fixed;
  top: 0px;
  right: 0;
  background: white;
  bottom: 0;
  left: 0;
  z-index: 99999;
  opacity: 0;
  margin-trim: 50px;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  pointer-events: none;
  overflow: auto;
}
.modalDialog:target {
  opacity: 1;
  pointer-events: auto;
}
.modalDialog > div {
  max-width: 600px;
  width: 60%;
  position: relative;
  margin: 5% auto;
  border-radius: 10px;
  background: #626d73;
  border-radius: 10px;
}
.close {
  font-family: Arial, Helvetica, sans-serif;
  background: black;
  font-size: 12px;
  color: #fff;
  line-height: 25px;
  position: absolute;
  right: 17px;
  text-align: center;
  top: 15px;
  padding: 10px 13px 5px;
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

.bg {
  overflow: hidden;
}

.logo-img {
  width: 70px;
}

.dell-card {
  position: relative;
  bottom: 40px;
}
.second-con {
  margin-top: 320px;
}
h4 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 44px;
}

.header-p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 60px;
  color: #626d73;
}

.dell-p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
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

.dell-card img {
  margin: 20px 0px 10px;
}

.d-flex_ {
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: -1px 9px 18px rgb(21 11 35 / 10%);
  border-radius: 7px;
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

div.background-text {
  opacity: 0.7;
  background-color: #000;
  font-weight: 600;
  color: #fff;
  height: 62vh;
}

.background-text h2 {
  color: white;
  font-weight: 700;
  font-size: 45px;
}
.background-text .ptag {
  color: white;
  font-weight: 700;
  font-size: 20px;
}

.company-image {
}
.company-image img {
  height: 59px;
}
.company-name {
  background: #07072f;
  color: white;
  margin: 0px 10px 0px;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  box-shadow: 0px 12px 12px #00000029;
}
</style>
