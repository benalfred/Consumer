<template>
  <div style="background: #f7f6fa !important">
    <div class="loader_bg">
      <div class="loader"></div>
    </div>
    <div class="line_ container-fluid px-lg-5">
      <b-row class="">
        <div class="spacer"></div>
        <b-col md="6" class="my-sm-5 mt-lg-5 pt-5 order-sm-1 order-2 pr-md-0">
          <h1 style="line-height: 65px">
            Share your opinion. <br class="d-none d-sm-block" />
            Earn money. <br class="d-none d-sm-block" />
            Shape the news.
          </h1>
          <p class="pt-4 lead-text">
            Join millions of others in sharing your opinion on <br />
            politics, sport, entertainment and more
          </p>
          <nuxt-link
            v-if="$auth.user && $auth.user.RequireNewPassword"
            class="prl-btn action-button"
            to="/intro"
            >Start</nuxt-link
          >
          <button v-else @click="showModal" class="prl-btn action-button">
            Start
          </button>

          <div class="under">
            <p>
              <nuxt-link to="/earn">What will I earn?</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/news">How will I shape the news?</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/how-it-works">How does Consumer work?</nuxt-link>
            </p>
          </div>
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
            src="~/assets/img/homeimage.png"
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
  mounted() {
    this.load();
    this.fetchSectors()
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
  data() {
    return {
      title: "Home",
      pageSize: 1,
      page: 1,
      industries: [],
    };
  },
  // middleware: "account_setup",
  computed: {
    fetchedSectors() {
      return this.$store ? this.$store.state.notifications.sectorsFetched : [];
    },
  },
  methods: {
    load() {
      setTimeout(function () {
        $(".loader_bg").fadeToggle();
      }, 1000);
    },
    showModal() {
      this.$bvModal.show("explore");
    },
    linkToIndustries(sector) {
      this.$router.push(`/industry/${sector.Id}/${sector.Name}`);
    },
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
  background: #07072f;
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
</style>
