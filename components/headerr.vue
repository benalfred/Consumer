<template>
  <header>
    <b-navbar toggleable="lg">
      <div class="container">
        <b-navbar-brand to="/">
          <img src="~/assets/img/logo.png" class="img-fluid" alt="" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto display-text">
            <nuxt-link
              :class="[id == sector.Id ? 'color-orange' : '']"
              :to="`/industry/${sector.Id}/${sector.Name}`"
              v-for="sector in sectors"
              :key="sector.Id"
              class="d-block d-sm-none"
              >{{ sector.Name }}
            </nuxt-link>
            <SecDropdown :sectors2="sectors2" class="d-none" />
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <SecNav class="mt-4" />

            <li class="d-block d-sm-none">
              <div class="cart_buttons_madesoft col-12 d-flex">
                <nuxt-link to="/refer" class="dropdown-item text-left_"
                  >Refer</nuxt-link
                >
              </div>

              <div class="cart_buttons_madesoft col-12 mb-3 d-flex">
                <span class="las la-sign-out-alt pt-1"></span>
                <span class="pr-3 pl-1" @click="$auth.logout()">Logout</span>
              </div>
            </li>

            <li class="cursor-pointer action-btn mr-3 mt-lg-4">
              <nuxt-link
                class="sub navigation-link"
                v-if="!$auth.loggedIn"
                to="/join"
              >
                <span
                  class="join py-1 px-4 text-white join"
                  style="background-color: #e57718; text-decoration: none"
                  >Join</span
                >
              </nuxt-link>
            </li>
            <li
              class="cursor-pointer action-btn ml-lg-auto mt-4 mr-3"
              v-if="!$auth.loggedIn"
            >
              <nuxt-link class="sub navigation-link" to="/login">
                <span
                  class="py-1 px-4 text-white"
                  style="background-color: #e57718; text-decoration: none"
                  >Login
                  <img
                    src="~/assets/img/vector4.png"
                    class="img-fluid pl-2"
                    width="22"
                    alt=""
                  />
                </span>
              </nuxt-link>
              <!-- <nuxt-link class="sub navigation-link" to="/login">
                                <span class="py-1 px-4 text-white"
                                      style="background-color: #E57718">Logout <img src="~/assets/img/vector4.png" class="img-fluid pl-2"  width="22" alt="">  </span>
                            </nuxt-link> -->
            </li>

            <li>
              <ImageDropdown class="nav-hide-mob d-none d-sm-block" />
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
import CartComponent from "./CartComponent";
import SecDropdown from "./SecDropdown.vue";
import ImageDropdown from "./ImageDropdown";
import SecNav from "./SecNav";
export default {
  name: "headerComponent",
  component: { CartComponent, ImageDropdown, SecNav, SecDropdown },
  mounted() {
    if (process.client) {
      window.onscroll = function () {
        OffSetTop();
      };
    }

    function OffSetTop() {
      if (process.client) {
        let header = document.querySelector(".navbar");
        let sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    }
  },

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
          console.log(this.sectors2);
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
header {
  width: 100%;
  height: 100px;
}

.display-text a {
  padding: 0px 25px 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-decoration: none;
  line-height: 30px;
  margin-top: 13px;
  text-align: start;
  color: #373737;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #e57718;
}

.navbar-light .navbar-nav .nav-link {
  color: #000;
  font-weight: 500;
  font-size: 20px;
}

.active {
  color: #e57718;
}

.sub {
  color: #094063;
  position: relative;

  font-size: 14px;
  text-transform: capitalize;
  -webkit-transition: color 650ms;
  -o-transition: color 650ms;
  transition: color 650ms;
}

.action-btn span {
  border-radius: 50px;
  -webkit-box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
  box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
}

.btn-sacademy {
  background-color: #e57718 !important;
  color: #fff !important;
  transition: 0.5s;
  border-color: #e57718 !important;
  font-size: 15px;
  padding: 8px 25px;
  border-radius: 50px;
}

.btn-sacademy {
  background-color: #ef4323 !important;
  color: #fff !important;
  border-color: #ef4323 !important;
}

.navbar {
  position: fixed;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
}

.sticky {
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
  box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
}

.sticky + .content {
  padding-top: 102px;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
</style>




