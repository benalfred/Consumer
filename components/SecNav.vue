<template>
  <div>
    <b-container class="mt-5">
      <b-row class="justify-content-center">
        <div class="display-text d-lg-flex m-3 d-none d-sm-block">
          <nuxt-link
            :class="[id == sector.Id ? 'color-orange' : '']"
            :to="`/industry/${sector.Id}/${sector.Name}`"
            v-for="sector in sectors"
            :key="sector.id"
            >{{ sector.Name }}</nuxt-link
          >

          <SecDropdown :sectors2="sectors2" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SecDropdown from "./SecDropdown.vue";
export default {
  name: "SecNav",
  components: { SecDropdown },
  data() {
    return {
      sectors: [],
      sectors2: [],
      page: 1,
      id: this.colorCheckingId,
      pageSize: 1,
    };
  },
  async fetch() {
    await this.fetchSectors();
  },
  computed: {
    colorCheckingId() {
      return (this.id = this.$route.params.id);
    },
  },

  methods: {
    async fetchSectors() {
      try {
        this.pageSize -= 1;
        const response = await this.$axios.get(
          `Industries/GetLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
        if (response.data.Results.length) {
          response.data.Results.filter((sec) => {
            if (this.sectors.length != 5) {
              this.sectors.push(sec);
            }
          });
          let ctx = this;
          response.data.Results.filter((com, index) => {
            if (index > 4) {
              ctx.sectors2.push(com);
            }
          });
        }
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
        return;
      }
    },
  },
};
</script>

<style scoped>
.display-text a {
  padding: 0px 25px 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;
  text-align: center;
  color: #373737;
}
</style>
