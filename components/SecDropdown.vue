<template>
  <div class="">
    <div
      class="nav-list  text-center d-flex justify-content-center align-items-center"
      type="submit"
      @click="threeMenuOpen">

      <p>Click here</p>

      <ul
        class="logout-sub-menu sub-menu"
        id="logout-sub-menu" :class="{ submenuthreeopen: threeOpen }">

        <li>
          <div
            v-for="sector in sectors2"
            :key="sector.Id"
            class="d-flex  align-items-start justify-content-start">
             <nuxt-link
            :to="`/industry/${sector.Id}/${sector.Name}`"
            > <p>{{ sector.Name }}</p> </nuxt-link
          >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
  name: "SecDropdown",
  data() {
    return {
      logoutMenuState: false,
      threeOpen: false,
      filter: "",
    };
  },
  props:{
 sectors2: {
      type: Array,
      default: () => {
        return [];
      },
    },
    bpg: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapState("data-fetching", [
      "sector3",
    ])
  },

  methods: {
    //  ...mapMutations('data-fetching', ["setBpg"]),
    //  ...mapActions("data-fetching", [
    //    "fetchSectors"
    //  ]),
    threeMenuOpen() {
      this.threeOpen = !this.threeOpen;
    },
  },

  watch: {
    bpg() {
      this.fetchSectors();
    },
  },
};
</script>

<style scoped>
.btn2 {
  background: #E57718;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  opacity: 0.5;
}

.user-icon {
  width: 30px;
  height: 30px;
  background-color: #E57718;
  border: none;
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  border-radius: 50%;
  display: inline-block;
}

.logout-sub-menu {
  position: absolute;
  top: 150px;
  z-index: 1000;
  box-shadow: 0 13px 42px 11px rgba(0, 0, 0, 0.05);
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}

@media all and (max-width: 1024px) {
  .user-icon {
    height: 30px;
    width: 30px;
    font-size: 14px;
  }
}

.sub-menu {
  /*width: 270px;*/
  display: block;
  position: absolute;
  background-color: #fefefe;
  z-index: 250;
  opacity: 0;
  visibility: hidden;
  width: 190px;
  right: -20px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3), 0 -18px 60px -10px rgba(0, 0, 0, 0.025);
  transition: all 650ms ease;
}

.nav-list li:hover > .sub-menu,
.nav-list li:active > .sub-menu,
.nav-list li:focus > .sub-menu {
  top: 60px;
  opacity: 1;
  visibility: visible;
}
.submenuthreeopen {
  opacity: 1;
  visibility: visible;
  max-height: initial;
}
li a {
  color: #333 !important;
  font-size: 14px;
  line-height: 32px;
  font-weight: 500;
  font-family: Poppins;
}
li {
  padding: 0.5rem 0;
}
.logout-sub-menu {
  right: 0px;
}

@media screen and (min-width: 750px) {
  .logout-sub-menu {
    right: 340px;
  }
}
</style>
