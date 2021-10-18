<template>
 <div>
   <h1>Hello</h1>
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


 <p class="p-2 text-center">{{ sector.Name }}</p>
