<template>
  <div style="background: #f7f6fa!important;">
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <div class="spacer"></div>
        <b-col md="6" class="my-sm-5 mt-3 pt-5 order-sm-1 order-2 pr-md-0" >
          <nuxt-link to="/">
            <i class="material-icons mb-3">keyboard_backspace</i>
        </nuxt-link>
              <h1 style="line-height: 65px;">Get cash for taking <br class="d-none d-sm-block"> surveys</h1>
              <p class="pt-5 mt-1 lead-text col-md-10 ml-n2">There's no small print, you've earned those points by taking YouGov surveys! Choose your reward, we'll process it immediately. We add new rewards all the time, based on your feedback.</p>
              <a  class="prl-btn action-button " href="#">Start</a>

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
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  // middleware: "account_setup",
  // computed: {
  //   fetchedSectors() {
  //     return this.$store ? this.$store.state.notifications.sectorsFetched : [];
  //   },
  // },
  methods: {
    // takeToSector(sector){
    //   this.$router.push(`/industry/${sector.Id}/${sector.Name}`)
    // },
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

i{
  font-weight: bold;
   color: #241d36;
  font-size: 29px;
  position: relative;
  bottom: 30px;
  cursor: pointer;
}
</style>
