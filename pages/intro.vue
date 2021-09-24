<template>
  <div style="background: #f7f6fa!important;">
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <img src="~/assets/img/logo.png"  width="180" class="img-fluid mt-4 ml-2 pt-3" alt="" />
        <div class="spacer"></div>
        <b-col md="12" class="mt-sm-5 p-2" >
            <div class="content-card p-lg-5 p-3">
                <h1>Welcome to ConsmerHalla</h1>
              <p class="lead-text pb-3 pt-4">Let's get started with some basic questions. Please confirm that you live
                in the United Kingdom.</p>
              <a href="#" clas="font-weight-bold" style="text-decoration: underline!important;">Wrong country or language?</a>
              <p class="terms">I agree to the <a  href="#">Terms and Conditions</a>, and acknowledge the <a href="#">privacy notice</a>.</p>


              <div class="d-flex my-5 pt-5">
                <h4 class="align-items-center d-flex">POINTS &nbsp; <span class="zero">0</span> </h4>
                <div class="d-flex justify-content-end ml-auto">
                  <nuxt-link  class="prl-btn action-button text-white" to="/question-one">Next</nuxt-link>
                </div>
            </div>
          </div>
        </b-col>


      </b-row>
    </div>

  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import footer from "~/components/footer";
export default {
//   layout: "headerr",

  components: {
    carousel: () =>
      process.client
        ? import("vue-owl-carousel")
        : Promise.resolve({ render: (h) => h("div") }),
    footer,
  },
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  // middleware: "account_setup",
  computed: {
    fetchedSectors() {
      return this.$store ? this.$store.state.notifications.sectorsFetched : [];
    },
  },
  methods: {
    takeToSector(sector){
      this.$router.push(`/industry/${sector.Id}/${sector.Name}`)
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
body,
html{
     background: #f7f6fa!important;
}



h1 {
  color: #241d36;
  font-family: 'Rawline Bold';
  font-size: 46px;
  font-weight: bolder;
}

h4 {
  color: #000000DE;
  font-family: 'Rawline Medium';
}


a{
   font-family: 'Rawline SemiBold';
  color: #241d36;
   font-size: 19px;
}
a:hover {
  text-decoration: underline;
}

.under {
  margin-top: 35px!important;
}

.under a:hover{
  text-decoration: underline!important;
}

i{
  font-weight: bold;
   color: #241d36;
  font-size: 29px;
  position: relative;
  bottom: 30px;
  cursor: pointer;
}

.terms {
  margin-top: 120px;
}
</style>
