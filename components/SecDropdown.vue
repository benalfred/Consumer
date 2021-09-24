<template>
  <div class="d-flex">

       <ul class="navbar-nav ml-auto align-items-lg-center d-none d-sm-block">
                <li class="m-mega-menu m-dropdown">
                  <nuxt-link style="font-size: 19px;" class="nav-link" to="/products"
                  >Services <i class="fa fa-angle-down m-dropdown-toggle ml-2"></i>
                  </nuxt-link>


                  <div class="m-dropdown-menu m-dropdown-mega-menu">
                    <div class="container-fliud">
                      <div class="row">
                        <div class="col-md-6 col-lg-3"  v-for="sector in sectors2" :key="sector.Id">
                          <ul class="mm-link">
                            <li>
                              <nuxt-link class="" :to="`/industry/${sector.Id}/${sector.Name}`"
                              >{{ sector.Name }}</nuxt-link>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
    <div
      class="nav-list justify-content-center align-items-center d-block d-sm-none"
      type="submit"
      @click="threeMenuOpen">

      <p class=" mr-4">Industries <i class="fas fa-angle-down pl-2 pt-1"></i> </p>


      <ul
        class="logout-sub-menu sub-menu mt-4 mr-4"
        id="logout-sub-menu" :class="{ submenuthreeopen: threeOpen }">

        <li  v-for="sector in sectors2"
            :key="sector.Id"
            class="">

             <nuxt-link
            :to="`/industry/${sector.Id}/${sector.Name}`"
            > {{ sector.Name }} </nuxt-link>
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

@media (min-width: 992px) {
  .m-dropdown .m-dropdown-toggle {
    vertical-align: middle; }
  .m-dropdown .m-dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: #ffffff;
    box-shadow: 0px 26px 21px 0px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #eee;
    width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    pointer-events: none;
    -moz-transition: ease all 0.55s;
    -o-transition: ease all 0.55s;
    -webkit-transition: ease all 0.55s;
    transition: ease all 0.55s;
    opacity: 0; }
    .m-dropdown .m-dropdown-menu > li > a {
      color: #233D63;
      padding: 10px 15px;
      display: block;
      font-size: 16px;
      font-weight: 400;
      border-left: 3px solid transparent; }
    .m-dropdown .m-dropdown-menu > li:hover > a {
      background: rgba(38, 92, 220, 0.08);
      color: #1181dd;
      border-left: 3px solid #1181dd; }
  .m-dropdown:hover .m-dropdown-menu {
    opacity: 1;
    top: 100%;
    pointer-events: auto; }

  .m-mega-menu {
    position: static !important; }
    .m-mega-menu .m-dropdown-mega-menu {
      width: 100%;
      padding: 10px 25px; }
    .m-mega-menu .mm-link {
      margin: 0;
      padding: 15px 0; }
      .m-mega-menu .mm-link li {
        list-style: none;
        position: relative;
        padding: 6px 0; }
        .m-mega-menu .mm-link li a {
          color: #233D63;
          display: block;
          position: relative;
          padding-left: 25px; }
          .m-mega-menu .mm-link li a i {
            position: absolute;
            top: 7px;
            left: 0;
            font-size: 13px;
            opacity: 0.6; }
        .m-mega-menu .mm-link li:hover a {
          color: #1181dd; } }
/* Mobile
--------------------*/
@media (max-width: 991px) {
  .m-dropdown .m-dropdown-menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    background: #252525;
    padding: 10px 15px; }
    .m-dropdown .m-dropdown-menu > li:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
    .m-dropdown .m-dropdown-menu > li > a {
      display: block;
      padding: 10px 0;
      font-size: 15px;
      color: #9d9d9d;
      vertical-align: top; }
      .m-dropdown .m-dropdown-menu > li > a.active {
        color: #ffffff; }
  .m-dropdown .m-dropdown-menu .container {
    padding: 0; }
  .m-dropdown .m-dropdown-menu .mm-link {
    margin: 0;
    padding: 0;
    list-style: none; }
    .m-dropdown .m-dropdown-menu .mm-link > li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
      .m-dropdown .m-dropdown-menu .mm-link > li > a {
        display: block;
        padding: 10px 0 10px 25px;
        font-size: 15px;
        color: #9d9d9d;
        vertical-align: top;
        position: relative; }
        .m-dropdown .m-dropdown-menu .mm-link > li > a i {
          position: absolute;
          top: 15px;
          left: 0;
          font-size: 13px;
          opacity: 0.6; }
        .m-dropdown .m-dropdown-menu .mm-link > li > a.active {
          color: #ffffff; }
  .m-dropdown.open-menu-parent .m-dropdown-menu {
    display: block; } }

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
  top: 70px;
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

.logout-sub-menu {
  right: 0px;
}

@media screen and (min-width: 750px) {
  .logout-sub-menu {
    right: 200px;

  }
}

.sectors {
  font-size: 19px;
  font-size: 600;
  color: #000;
  font-family: Poppins;
}
</style>
