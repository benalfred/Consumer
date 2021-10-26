<template>
  <div style="background: #f7f6fa !important">
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <div class="spacer"></div>
        <b-col md="6" class="my-sm-5 mt-lg-3 pt-5 order-sm-1 order-2 pr-md-0">
          <nuxt-link to="/earn">
            <i class="material-icons mb-3">keyboard_backspace</i>
          </nuxt-link>
          <h1 style="line-height: 55px">
            ConsumerHalla surveys <br class="d-none d-sm-block" />
            make the headlines every day
          </h1>
          <p class="pt-5 mt-1 lead-text col-md-10 ml-n2">
            ConsumerHalla is trusted by brands and the media to accurately
            measure opinion. The results of surveys you take will feature in the
            news, and be used by organisations all over the world to make better
            decisions.
          </p>
          <nuxt-link
            v-if="$auth.user && $auth.user.RequireNewPassword"
            class="prl-btn action-button"
            to="/intro"
            >Start</nuxt-link
          >
          <!-- <nuxt-link
            v-else
            class="prl-btn action-button"
            to="/industry/32/Technology"
            >Start</nuxt-link
          > -->

          <button v-else @click="showModal" class="prl-btn action-button">
            Start
          </button>
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
            src="~/assets/img/shapeimage.png"
            width="700"
            class="image___"
            alt=""
          />
        </b-col>
      </b-row>
    </div>
    <b-modal
      id="explore"
      size="lg"
      hide-footer
      scrollable
      centered
      title="Take a Survey With Sectors!"
    >
      <div class="d row">
        <div
          class="col-md-3"
          v-for="sector in industries"
          :key="sector.Id"
          style="cursor: pointer"
          @click="linkToIndustries(sector)"
        >
          <img
            v-if="sector.Logo"
            :src="sector.Logo"
            class="rounded img-fluid d-flex justify-content-center mx-auto"
            alt=""
          />
          <img
            v-else
            src="~/assets/img/share720.png"
            class="rounded img-fluid d-flex justify-content-center mx-auto"
            alt=""
          />
          <div class="company-name d-none d-sm-block mt-2" style="">
            <p
              class="
                p-2
                text-center
                d-none d-sm-block d-flex
                justify-content-center
                mx-auto
              "
              style="color: #fff"
            >
              {{ sector.Name }}
            </p>
          </div>
          <div
            class="
              company-name
              mb-3
              d-flex
              justify-content-center
              mx-auto
              d-block d-sm-none
              mt-2
            "
            style=""
          >
            <p
              class="
                pt-3
                text-center
                d-block d-sm-none d-flex
                justify-content-center
                mx-auto
              "
              style="color: #fff"
            >
              {{ sector.Name }}
            </p>
          </div>
        </div>
      </div>
    </b-modal>
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
  data() {
    return {
      pageSize: 1,
      title:'News',
      page: 1,
      industries: [],
    };
  },
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
    this.fetchSectors()
  },
   head() {
    return {
      title: `${this.title} | ConsumerHalla Survey`,
    };
  },
  // middleware: "account_setup",
  computed: {
    fetchedSectors() {
      return this.$store ? this.$store.state.notifications.sectorsFetched : [];
    },
  },
  methods: {
    async fetchSectors() {
      this.pageSize -= 1;
      try {
        const response = await this.$axios.get(
          `Industries/GetSemiLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
        this.industries = response.data.Results;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    showModal() {
      this.$bvModal.show("explore");
    },
    linkToIndustries(sector) {
      this.$router.push(`/industry/${sector.Id}/${sector.Name}`);
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

.active {
  opacity: 0.3;
}


.logo-img {
  width: 80px;
}

.bg-class {
color: #fff!important;
  background-color: #e57718;
}
.company-name {
  background: #e57718;
  width: 170px;
  color: white;
  margin: 0px 0px 0px;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  box-shadow: 0px 12px 12px #00000029;
}

.company-image img {
  height: 59px;
}

@media screen and (min-width: 750px) {
  .no-opinion-img {
    margin-left: 50px;
  }
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
