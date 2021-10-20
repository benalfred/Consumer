<template>
  <div style="background: #f7f6fa !important">
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <div class="spacer"></div>
        <b-col md="6" class="my-sm-5 mt-3 pt-5 order-sm-1 order-2 pr-md-0">
          <nuxt-link to="/news">
            <i class="material-icons mb-3">keyboard_backspace</i>
          </nuxt-link>
          <h1 style="line-height: 65px">How does Consumer work?</h1>
          <p class="pt-5 mt-1 lead-text col-md-11 ml-n2">
            You'll be invited to answer questions on a wide range of topics, by
            email or in the YouGov app. You'll earn points every time you answer
            a survey. The longer the survey, the more points you'll earn.
          </p>

          <nuxt-link
            v-if="$auth.user.RequireNewPassword"
            class="prl-btn action-button"
            to="/intro"
            >Start</nuxt-link
          >
          <nuxt-link
            v-else
            class="prl-btn action-button"
            to="/industry/32/Technology"
            >Start</nuxt-link
          >
        </b-col>

        <b-col
          md="6"
          class="
            my-sm-4
            order-sm-2 order-1
            mb-0
            pb-0
            ml-0
            px-0
            offset-sm-1 offset-md-1 offset-0
          "
        >
          <img
            src="~/assets/img/howitworksimage.png"
            width="700"
            class="image___"
            alt=""
          />
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
  computed: {
    fetchedSectors() {
      return this.$store ? this.$store.state.notifications.sectorsFetched : [];
    },
  },
  methods: {
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
html {
  background: #f7f6fa !important;
}
h1 {
  color: #241d36;
  font-family: "Rawline Bold";
  font-size: 46px;
  font-weight: bolder;
}

.lead-text {
  color: #241d36;
  font-size: 23px;
  font-weight: 500;
  font-family: "Rawline Medium";
}

.prl-btn {
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
  font-family: "Rawline Medium";
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 65px !important;
}

a {
  font-family: "Rawline SemiBold";
  color: #241d36;
  font-size: 19px;
}

.under {
  margin-top: 35px !important;
}

.under a:hover {
  text-decoration: underline !important;
}

i {
  font-weight: bold;
  color: #241d36;
  font-size: 29px;
  position: relative;
  bottom: 30px;
  cursor: pointer;
}
</style>
