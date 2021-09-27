<template>
  <div style="background: #f7f6fa!important;">
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <img src="~/assets/img/logo.png"  width="180" class="img-fluid mt-4 ml-3 pt-4" alt="" />
        <div class="spacer"></div>
        <b-col md="12" class="mt-sm-4 p-lg-3 p-1" >
            <div class="content-card">
            <nuxt-link to="/question-two"><i class="material-icons mb-2 mt-5 text-block">arrow_upward</i></nuxt-link>
                <h5>Postcode</h5>

                <div class="mt-5 pt-3">
                 <input _ngcontent-fvr-c48="" autocomplete="off" type="text" yougovworkspaceinputfix="" class="prl-input question__input ng-star-inserted" id="birth_year" name="birth_year" placeholder="Postcode" data-cy="birth_yearInput">
                </div>


              <p class="terms pt-3">This information helps us to ensure that responses to our surveys reflect the population as a whole. Find out more</p>


                <div class="d-lg-flex my-5 pt-5  d-none d-sm-block">
                <h4 class="align-items-center d-flex  d-none d-sm-block">POINTS &nbsp; <span class="zero">0</span> </h4>
                <div class="d-flex justify-content-end ml-auto  ">
                  <nuxt-link  class="prl-btn action-button text-white d-none d-sm-block" to="/question-two">Next</nuxt-link>
                </div>
            </div>

             <div class=" my-5 pt-5 d-block d-sm-none ">
                <h4 class="align-items-center d-flex">POINTS &nbsp; <span class="zero d-flex ml-auto">0</span> </h4>
                <div class="mt-3">
                  <nuxt-link  class="prl-btn action-button action-button_  text-white" to="/question-two">Next</nuxt-link>
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



h5 {
  color: #241d36;
  font-family: 'Rawline Bold';
  font-size: 36px;
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
   color: #000;
  font-size: 30px;
  position: relative;
  bottom: 30px;
  cursor: pointer;
}

.terms {
  margin-top: 50px;
}




</style>
