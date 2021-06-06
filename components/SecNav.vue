<template>
  <div>
    <b-container>
      <b-row class="justify-content-center">
        <div class="display-text d-lg-flex m-3 d-none d-sm-block">
          <nuxt-link
            :class="[id == sector.Id ? 'color-orange' : '']"
            :to="`/industry/${sector.Id}/${sector.Name}`"
            v-for="sector in sectors"
            :key="sector.id"
            >{{ sector.Name }}</nuxt-link
          >

          <SecDropdown />

        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SecDropdown from './SecDropdown.vue'
export default {
  name: "SecNav",
  components: { SecDropdown },
  data() {
    return {
      sectors: [],
      page: 1,
      id: this.colorCheckingId,
      pageSize: 1,
    };
  },
  async fetch() {
    await this.fetchSectors();
  },
  computed: {
    colorCheckingId(){
      return this.id = this.$route.params.id
    }
  },

  methods: {
    async fetchSectors() {
      try {
        this.pageSize -= 1;
        const sectors = await this.$axios.get(
          `Industries/GetLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
        this.sectors = sectors.data.Results;
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
