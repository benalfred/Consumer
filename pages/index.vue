<template>
  <div style="background: #f7f6fa!important;">
    <div class="loader_bg">
      <div class="loader"></div>
    </div>
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <div class="spacer"></div>
        <b-col md="6" class="my-sm-5 mt-lg-5 pt-5 order-sm-1 order-2 pr-md-0" >
              <h1 style="line-height: 65px;">Share your opinion. <br class="d-none d-sm-block"> Earn money. <br class="d-none d-sm-block"> Shape the news.</h1>
              <p class="pt-4 lead-text">Join millions of others in sharing your opinion on <br> politics, sport, entertainment and more</p>
              <a  class="prl-btn action-button " href="/intro">Start</a>

              <div class=" under">
              <p>
              <nuxt-link to="/earn">What will I earn?</nuxt-link>
              </p>
              <p>
              <nuxt-link to="/news">How will I shape the news?</nuxt-link>
              </p>
              <p>
              <nuxt-link to="/howitworks">How does Consumer work?</nuxt-link>
              </p>
              </div>
        </b-col>

        <b-col
          md="6" class="my-sm-4 pl-lg-5 order-sm-2 order-1 mb-0 pb-0 ml-0 px-0 offset-sm-1 offset-md-1 offset-0">
          <div _ngcontent-ekb-c38="" class="layout-container__right-section"><div _ngcontent-ekb-c44="" class="right-section" style="background-image: url(&quot;https://d2jfd73ua7gtz4.cloudfront.net/registration/static/faces/gb.png&quot;);"><div _ngcontent-ekb-c44="" class="right-section__card"><mat-icon _ngcontent-ekb-c44="" role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true">format_quote</mat-icon><h4 _ngcontent-ekb-c44="" class="quote">Excellent - interesting surveys and good points and reward system. Definitely the best survey company I've used. wgjahdbsqwigSPJXHAJKciabxkW JHJJh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia pariatur quidem perspiciatis! Corrupti eos dolores, est, vel autem cupiditate vitae et voluptate facilis unde nesciunt maxime possimus quis quam veniam eveniet tenetur accusantium delectus laborum quia libero iure! Vero, illum.</h4><p _ngcontent-ekb-c44="" class="credit">App Store review Jan '21</p></div></div></div>
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
  layout: "headerlayout",

  components: {
    carousel: () =>
      process.client
        ? import("vue-owl-carousel")
        : Promise.resolve({ render: (h) => h("div") }),
    footer,
  },
  mounted() {
    this.load()
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  data() {
    return {
      title: "Home",
    };
  },
  // middleware: "account_setup",
  computed: {
    fetchedSectors() {
      return this.$store ? this.$store.state.notifications.sectorsFetched : [];
    },
  },
  methods: {
    load(){
      setTimeout(function() {
        $('.loader_bg').fadeToggle();
      }, 1000);
    },
    takeToSector(sector) {
      this.$router.push(`/industry/${sector.Id}/${sector.Name}`);
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

.lead-text {
  color: #241d36;
  font-size: 23px;
  font-weight: 500;
  font-family: 'Rawline Medium';
}

.prl-btn{
    padding: 26px 74px;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border: unset;
    border-radius: 50px;
    background: #e57718;
    color: #fff;
    font-weight: 700;
    font-size: 17px;
    font-family: 'Rawline Medium';
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    margin-top: 65px!important;
}

a{
   font-family: 'Rawline SemiBold';
   color: #241d36;
   font-size: 19px;
}

.under {
  margin-top: 35px!important;
}

.under a:hover{
  text-decoration: underline!important;
}
</style>
