<template>
  <div class="">
   
        <b-container class="">
          <b-row class="">
            <b-col md="6" class=" my-sm-5 my-lg-auto  order-sm-1 order-2 pr-md-0">
              <h1 class="hero small-hero-text hero-text">
                Explore what <span style="color: #E57718;" class="font-weight-bold">Nigerians</span>
                 <br class="d-none d-md-block"/>
                are saying
              </h1>
              <p class="lead mb-5 mt-md-4">
                We consumerHalla are team of talented people making things easy for you with Our ideaz
              </p>
              <n-link class="button btn-lg text-white mt-md-5 mt-5" to="/register" role="button"
              >Join
              </n-link>
            </b-col>
            
            <div style="position: absolute; left: 500px; bottom: 250px" class="d-none d-sm-block">
             <img src="~/assets/img/group12.png" class="img-fluid pl-5"  alt="">
            </div>

            <b-col md="6" 
                   class=" my-sm-4 pl-5 order-sm-2 order-1 mb-0 pb-0 ml-0 px-0 offset-sm-1 offset-md-1 offset-0">
              <img
                  alt="Insurance made easy"
                  class="mr-0 mr-lg-2 d-xl-none offset-0 offset-sm-1 offset-lg-0 img-fluid"
                  src="~/assets/img/lady1.png"
              />
              <img
                  alt="Insurance made easy"
                  class="mr-md-2 d-none d-xl-block"
                  src="~/assets/img/lady1.png"
              />
            </b-col>
          </b-row>
        </b-container>
        
        <div class="container-fluid"  style="
              position: absolute;
              background: linear-gradient(0deg, #E57718, #E57718), #FFFFFF;
              height: 6px;
            ">
                <div
            class="mt-2"
         
          ></div>
        </div>

        <b-container class="mt-5 pt-5">
          <b-row class="">
          <b-col md="12" class="mx-0 justify-content-center text-center">
            <h2 style="color: #E57718;" class="font-weight-bold hero-text">No 1 advocacy platform in nigeria</h2>
            <p class="text-center lead pt-lg-5">We consumerHalla are team of talented people making things <br d-none d-md-block> easy for you with Our idea</p>
          </b-col>
          </b-row>

        <b-row class="mx-0 justify-content-center mt-5 mb-5">
          <b-col md="4">
              <img src="~/assets/img/group4.png" class="img-fluid"  alt="">
          </b-col>
          <b-col md="4">
              <img src="~/assets/img/group5.png" class="img-fluid"  alt="">
          </b-col>
          <b-col md="4">
              <img src="~/assets/img/group6.png" class="img-fluid "  alt="">
          </b-col>
          </b-row>
        </b-container>

        <div class="mt-5">
          <div class="container-fluid mt-5"  style="
              position: absolute;
              background: linear-gradient(0deg, #656565, #656565), #FFFFFF;
              height: 6px;
            ">
                <div></div>
        </div>
        </div>

        <b-container-fluid >
          <b-row >
            <b-col md="6" class="mt-5 pt-1">
              <img src="~/assets/img/Frame1.png" class="img-fluid "  alt="">
            </b-col>
             <b-col md="5" class="pl-5 my-sm-5 my-lg-auto  order-sm-1 order-2 pr-md-0">
              <h1 class="hero small-hero-text hero-text">
                <span style="color: #E57718;" class="font-weight-bold" >Technology</span> at it <br class="d-none d-md-block" > very best
              </h1>
              <p class="lead1 mb-5 mt-md-4 mb-4">
                Anim pariatur cliche reprehenderit, enim <br class="d-none d-md-block"> eiusmod high life accusamus terry <br class="d-none d-md-block"> richardson ad squid. 3 wolf moon officia <br class="d-none d-md-block"> aute, non cupidatat skateboard 
              </p>
              <div class="mt-5">
                    <n-link class="button1 btn-lg text-white mt-md-5 mt-5" to="/register" role="button"
              >Get Started
              </n-link>
              </div>
            </b-col>
          </b-row>
        </b-container-fluid>

        <div class="big-image">
          <div class="">
            <h3 class="centered">What We Offer You</h3>
          </div>
        </div>

        <b-container class="groups">
            <b-row>
              <b-col md="4">
                  <img src="~/assets/img/Group14.png" class="img-fluid "  alt="">
              </b-col>
                <b-col md="4">
                    <img src="~/assets/img/Group15.png" class="img-fluid "  alt="">
                </b-col>
                <b-col md="4">
                    <img src="~/assets/img/Group16.png" class="img-fluid "  alt="">
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <b-row class="ml-md-5">
              <b-col class="ml-5 pl-5">
                    <img src="~/assets/img/Rectangle16.png" class="img-fluid Rec"  alt="">
                    <img src="~/assets/img/Rectangle16.png" class="img-fluid Rec"  alt="">
              </b-col>
            </b-row>
        </b-container>
     
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import footer from '~/components/footer';
export default {
  components: {
    carousel: () =>
      process.client
        ? import("vue-owl-carousel")
        : Promise.resolve({ render: (h) => h("div") }),
        footer
  },
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>


<style  scoped>
.Rec {
  width: 419px;
}
.groups {
  position: relative;
  bottom: 50px;
}
.big-image {
  height: 90vh;
  width: 99vw;
  position: relative;
  background: url('~assets/img/MaskGroup.png');
  background-size: cover;
  background-color: #FAFAFA;
  background-position: 50% 50%;
  overflow: hidden;
  margin-top: 125px;
}

@media screen and (max-width: 700px){
  .big-image{
    height: 28vh;
  }
}

.centered {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h3 {
  font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 72px;
/* identical to box height */

display: flex;
align-items: center;

color: #FFFFFF;
}


</style>
