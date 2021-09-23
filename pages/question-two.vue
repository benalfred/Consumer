<template>
  <div style="background: #f7f6fa!important;">
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <img src="~/assets/img/logo.png"  width="180" class="img-fluid mt-4 ml-3 pt-4" alt="" />
        <div class="spacer"></div>
        <b-col md="12" class="mt-sm-4 p-lg-3 p-1" >
            <div class="content-card">
            <nuxt-link to="/question-one"><i class="material-icons mb-2 mt-5 text-block">arrow_upward</i></nuxt-link>
                <h5>Are you...?</h5>

                 <div _ngcontent-fvr-c48="" class="single-select-wrapper mt-5 pt-4 ng-star-inserted">
                 <button _ngcontent-fvr-c48="" class="prl-input question__input question__input--single-select-binary ng-star-inserted" data-cy="genderInput2"> Female </button>
               <button _ngcontent-fvr-c48="" class="prl-input ml-3 question__input question__input--single-select-binary btn2 ng-star-inserted" disabled="" data-cy="genderInput1"> Male </button><!---->
               </div>


              <p class="terms pt-3">This information helps us to ensure that responses to our surveys reflect the population as a whole. Find out more</p>


              <div class="d-flex my-5 pt-5">
                <h4 class="align-items-center d-flex">POINTS &nbsp; <span class="zero">0</span> </h4>
                <div class="d-flex justify-content-end ml-auto">
                  <nuxt-link  class="prl-btn action-button text-white" to="question-three">Next</nuxt-link>
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


[_nghost-fvr-c48] .question__input--single-select-binary[_ngcontent-fvr-c48] {
    margin: 56px 16px 0 0;
    display: inline-block;
    background-color: #fff;
    cursor: pointer;
}


[_nghost-fvr-c48] .question__input[_ngcontent-fvr-c48] {
    margin: 56px 0 0;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
}

.prl-input[_ngcontent-fvr-c48] {
    padding: 22px 25px 22px ;
    border: 2px solid #433c54;
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
     font-family: 'Rawline SemiBold';
}
.prl-input {
    padding: 16px;
    border: 2px solid #433c54;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
     font-family: 'Rawline SemiBold';
}

.btn2 {
    background-color: #241d36;
    color: #fff;
}


</style>
