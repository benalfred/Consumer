<template>
  <div>
    <section class="">
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="">
          <div class="container-fluid">
            <b-row>
              <b-col md="6">
                <h1 class="">
                  {{post.Name}} <span style="font-size: 24px">{{post.Slogan}}</span>
                </h1>
                <p>
                 {{post.Description}}
                </p>
              </b-col>
              <b-col md="6" class="text-end"> </b-col>

              <agegender :MillenialRating="data.MillenialRating" :BabyBoomRating="data.BabyBoomRating" :FemaleRating="data.FemaleRating" :MaleRating="data.MaleRating" :GenerationXRating="data.GenerationXRating"/>
            </b-row>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import agegender from "@/components/agegender.vue";
import UserResponse from "@/components/UserResponse.vue";
export default {
  layout: "dashlayout",
  component: { UserResponse, agegender },
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  data() {
    return {
      
    }
  },
   async asyncData({ params, $axios }) {
      const post = await $axios.$get(`/Industries/GetIndustryDetailsByAdmin?industryId=${params.id} `)
      const data = await $axios.$get(`/Opinions/GetIndustryOpinionSummaries?industryId=${params.id}`)
      console.log(data)
      return { post, data }
    },
  methods:{
    //   async fetchIndustryDetails() {
    //   this.fetchCompanySpinner = true;
    //   try {
    //     const response = await this.$axios.get(
    //       `/Industries/GetIndustryDetailsByAdmin?industryId=${this.$route.params.id}`
    //     );
    //     console.log(response.data)
    //     this.form.Name = response.data.Name;
    //     this.form.Slogan = response.data.Slogan;
    //     this.form.Description = response.data.Description;
    //     this.Banner = response.data.Banner;
    //     this.fetchCompanySpinner = false;
    //   } catch (e) {
    //     this.$store.commit("notifications/error", "something went wrong")
    //     this.makeToast()
    //   }
    // },
  }
};
</script>

<style scoped>
.bg {
  overflow: hidden;
}

.container-fluid::-webkit-scrollbar {
  width: 5px;
  border-radius: 50px;
}

.container-fluid {
  overflow-x: hidden;
}

.container-fluid::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

.container-fluid::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.container-fluid::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.text-head {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #626d73;
}

.age {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.text-p p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
}
.text-para p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
}

.text-p span {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 124.4%;
  text-transform: uppercase;
  color: #373737;
}

.sector {
  background: #656565;
}
</style>
