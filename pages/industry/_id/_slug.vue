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
          <b-col md="12" class="mt-3">
            <img src="~/assets/img/technologybg.png" class="img-fluid" alt="" />
          </b-col>
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
                <h6 class="pt-2 mt-1">{{PositivePercent}}</h6>
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
                <h6 class="pt-2 mt-1">{{NegativePercent}}</h6>
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
                <h6 class="pt-2 mt-1">{{NeutralPercent}}</h6>
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
                <h6 class="pt-2 mt-1">{{TotalReviewCount}}</h6>
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
          <b-col md="11" class="dell-card ml-lg-5">
            <div class="d-flex_ row p-5" v-if="companies.length">
              <div style="cursor:pointer;" @click="goToCompanyPage(company)" class="col-md-2" v-for="company in companies" :key="company.Id">
                <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-2 mt-3 pl-1">
                <button class="btn">
                  <img src="~/assets/img/viewall.png" class="img-fluid" alt="" />
                </button>
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

    <agegender />
    <Footer />
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
  data() {
    return {
      Name: null,
      Slogan: null,
      Banner: null,
      Logo: null,
      companies: [],
      Description: null,
      PositivePercent: 0,
    NegativePercent: 0,
    NeutralPercent: 0,
    TotalReviewCount: 0,
    };
  },

  mounted() {
    alert("hello");
    this.fetchIndustryDetails();
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },

  methods: {
    goToCompanyPage(company){
     this.$router.push(`/company/${company.Id}/${company.Name}`)
    },
    async fetchIndustryDetails() {
      alert("runnig");
      try {
        const response = await this.$axios.get(
          `Industries/GetPublicIndustryDetails?industryId=${this.$route.params.id}`
        );
        console.log(response.data);
        this.Name = response.data.Name;
        this.Slogan = response.data.Slogan;
        this.Description = response.data.Description;
        this.Logo = response.data.Logo;
        this.Banner = response.data.Banner;
        this.companies = response.data.Companies
        this.PositivePercent = response.data.GeneralRating.PositivePercent
        this.NegativePercent = response.data.GeneralRating.NegativePercent
        this.NeutralPercent = response.data.GeneralRating.NeutralPercent
        this.TotalReviewCount = response.data.GeneralRating.TotalReviewCount
      } catch (e) {
        alert("error");
      }
    },
  },
};
</script>

<style scoped>
.bg {
  overflow: hidden;
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
  text-align: center;
  color: #373737;
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px -1px 37px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
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
</style>
