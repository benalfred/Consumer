<template>
  <div class="">
    <section class="bg mt-5 pt-lg-5" style="padding-bottpm: 50px">
      <div class="container">
        <b-row>
          <b-col md="12">
            <h4
              class="text-center pb-4"
              data-aos="fade-up"
              data-aos-offset="30"
              data-aos-delay="50"
            >
              Here’s what Nigerian’s are saying about the {{ Name }} Industry
            </h4>
          </b-col>

          <div class="big-image" :style="{ backgroundImage: 'url(' + Logo + ')' }">
            <div class="background-text">
              <b-row>
                <b-col md="8"> </b-col>
                <b-col md="4" class="newpost_ mt-1 justify-content-end">
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
              </b-row>
              <div
                class="overlay text-center pt-5 col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12"
              >
                <h2 class="h2 pb-5">{{Name}} Company</h2>
                <p class=" ptag">
                  HERE IS WHAT NIGERINS ARE SAYING ABOUT {{Name}} Company
                </p>
              </div>

              <div class="row pb-1 pt-3  pl-2 container justify-content-center">
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

          <div class="col-md-12">
            <div style="background: #0083ca" class="p-2 mt-1 mb-5"></div>
          </div>
        </b-row>
      </div>
    </section>

    <b-container class="mb-5 second-con">
      <b-row class="mt-5 d-lg-flex">
        <b-col md="5">
          <p
            class="header-p"
            data-aos="fade-right"
            data-aos-offset="30"
            data-aos-delay="50"
          >
            {{ Name }}
          </p>
          <p
            class="pt-3 dell-p"
            data-aos="fade-right"
            data-aos-offset="30"
            data-aos-delay="200"
          >
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
         <div class="d-none d-sm-block">
             <div class="d-flex_ row p-5 " data-aos="flip-right">
            <div class="col-md-3">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-3">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-3">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-3">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-3">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-3">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>

            <div class="col-md-3">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>

            <div class="col-md-3">
              <a href="#openModal-about">
                <button class="btn">
                  <img
                    src="~/assets/img/viewall.png"
                    class="img-fluid pt-2"
                    alt=""
                  /></button
              ></a>
            </div>
          </div>
         </div>

          <div class="d-block d-sm-none">
            <div class="d-flex_ row p-5 " data-aos="flip-right">
            <div class="col-6">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-6">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-6">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-6">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-6">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>
            <div class="col-6">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>

            <div class="col-6">
              <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
            </div>

            <div class="col-6">
              <a href="#openModal-about">
                <button class="btn">
                  <img
                    src="~/assets/img/viewall.png"
                    class="img-fluid pt-2"
                    alt=""
                  /></button
              ></a>
            </div>
          </div>
          </div>

        </b-col>
      </b-row>
    </b-container>

    <agegender :MillenialRating="post.MillenialRating" :BabyBoomRating="post.BabyBoomRating" :FemaleRating="post.FemaleRating" :MaleRating="post.MaleRating" :GenerationXRating="post.GenerationXRating" v-if="post"/>
    <Footer />

    <div id="openModal-about" class="modalDialog">
      <div class="d-none d-sm-block">
        <a href="#close" title="Close" class="close">X</a>
        <div class="d-flex__ row p-5 dell-card">
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-md-3">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div class="d-block d-sm-none">
        <a href="#close" title="Close" class="close">X</a>
        <div class="d-flex__ row p-5 dell-card">
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
          </div>
          <div class="col-6">
            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
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
  component: { agegender, footer, SecNav },

  async fetch() {
    await this.fetchCompanyDetails();
  },
middleware: "account_setup",
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  data() {
    return {
      Name: null,
      Slogan: null,
      Banner: "",
      Logo: null,
      post:null,
      PositivePercent: 0,
      NegativePercent: 0,
      NeutralPercent: 0,
      TotalReviewCount: 0,
      Description: null,
    };
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
    goToShareOpinionPage() {
      this.$router.push(
        `/share-opinion/${this.$route.params.id}/${this.$route.params.slug}`
      );
    },
    shareOpinion(){
     this.$router.push(`/share-opinion/${this.$route.params.id}/${this.$route.params.slug}`)
    },
    async fetchCompanyDetails() {
      try {
        const response = await this.$axios.get(
          `Industries/GetPublicCompanyDetails?companyId=${this.$route.params.id}`
        );
        this.post = response.data
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
  },
};
</script>

<style scoped>
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

@media screen and (min-width: 750px){
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

@media screen and (max-width: 740px){
   .big-image {
  height: 62vh;
  width: 99vw;
  position: relative;
  background-repeat: repeat;
  background-size: cover;
  background-color: #000;
  background-position: 50% 50%;
  overflow: auto;
}
}

div.background-text {
  opacity: 0.7;
  background-color: #000;
  font-weight: 600;
  color: #fff;
  height: 82vh;
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
@media screen and (min-width: 720px) {
  .bg {
    height: 65vh;
    background: #ffdfc4;
  }
  .second-con {
    margin-top: 220px;
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
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 60px;
  color: #626d73;
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px -1px 37px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.d-flex__ {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px -1px 37px rgba(0, 0, 0, 0.05);
}

.dell-card img {
  margin: 20px 0px 10px;
}
</style>
