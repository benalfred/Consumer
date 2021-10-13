<template>
  <div>
    <header>
    <b-navbar toggleable="lg" class="d-flex pt-4 mb-5 " style="  background: #f7f6fa!important;">
      <div class="container-fluid">
        <b-navbar-brand to="/">
          <img src="~/assets/img/logo.png"  width="180" class="img-fluid" alt="" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>


          <b-navbar-nav class="ml-auto login___">
            <SecNav class="mt-1" />

            <li class="d-block d-sm-none">
              <a v-if="$auth.loggedIn" @click="modalShow = !modalShow" class="dropdown-item text-left_">
                <div class="cart_buttons_madesoft col-12 d-flex">Refer</div></a
              >

              <div class="cart_buttons_madesoft col-12 mb-3 d-flex">
                <span class="las la-sign-out-alt pt-1"></span>
                <span class="pr-3 pl-1" @click="$auth.logout()">Logout</span>
              </div>
            </li>

            <li class="cursor-pointer action-btn mr-3 mt-lg-3">

            </li>
            <li
              class="cursor-pointer action-btn ml-lg-auto mt-2"
              v-if="!$auth.loggedIn"
            >
              <nuxt-link class="sub navigation-link" to="/login">
                <span
                  class="py-1 p-3 px-4 text-white"
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
            </li>

            <li>
              <ImageDropdown class="nav-hide-mob mt-2 d-none d-sm-block" />
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>

   <b-modal v-model="modalShow" size="lg" header-bg-variant="white" hide-footer header-class="border-0" scrollable centered body-bg-variant="white">

     <b-container class="px-4">
            <b-row>
              <b-col md="6">
                <h4 class="font-weight-bold">Refer a friend</h4>
              </b-col>
              <b-col md="6" class="d-flex justify-content-end">

              </b-col>
              <b-col md="12">
                <div
                  style="
                    border-radius: 79px;
                    margin-bottom: 1rem;
                    background-color: #626d73;
                    height: 1px;
                  "
                  class="mt-3"
                ></div>
                <p>For every friend reffered, you gain an additional 10 points</p>
                <p style="font-size: 13px">
                  Insert email address in field below to refer a friend
                </p>
              </b-col>

              <b-col md="8">
                <div>
                  <div class="mt-">
                    <div>
                      <b-form-input
                        v-model="email"
                        placeholder="Enter email"
                      ></b-form-input>
                    </div>
                  </div>
                   <div class="mt-2" v-if="email2">
                    <div>
                      <b-form-input
                        v-model="email2Value"
                        placeholder="Enter email"
                      ></b-form-input>
                    </div>
                  </div>
                  <div class="mt-2" v-if="email3">
                    <div>
                      <b-form-input
                        v-model="email3Value"
                        placeholder="Enter email"
                      ></b-form-input>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="4" class="newpost_">
                <b-form-group class="newpost mt-3">
                  <button
                    @click="referAFriend"
                    :disabled="!email || referSpinner"
                    class="btn-sacademy_"
                    style="font-size: 16px"
                    type="submit"
                    value="Send"
                  >
                    Send invite
                    <b-spinner
                      v-if="referSpinner"
                      label="Spinning"
                      style="margin-left: 3%"
                    ></b-spinner>
                  </button>
                </b-form-group>
              </b-col>

              <b-col>
                <p style="font-size: 13px" class="pt-4">
                  Previously refered friends listed below:
                </p>
              </b-col>
            </b-row>
          </b-container>

          <b-container class="mt-3 p-4">
            <b-row class="d-flex" v-if="referrals.length && !spinner">
              <b-col
                md="6"
                class="d-flex"
                v-for="referred in referrals"
                :key="referred.Id"
              >
                <img src="~/assets/img/ellipse7.png" class="img-fluid" />
                <p class="mt-2 ml-1">{{ referred }}</p>
              </b-col>
            </b-row>
            <h5 class="mt-2 ml-1" v-if="!referrals.length && !spinner">
              None referred yet, please refer someone
            </h5>
            <b-row>
              <b-col md="3" class="d-flex">
                <b-spinner v-if="spinner" label="Spinning"></b-spinner>
              </b-col>
            </b-row>
          </b-container>

  </b-modal>

  <Nuxt />
  </div>

</template>

<script>
import CartComponent from "@/components/CartComponent";
import SecDropdown from "@/components/SecDropdown.vue";
import ImageDropdown from "@/components/ImageDropdown";
import SecNav from "@/components/SecNav";
export default {
  name: "headerlayout",
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
      modalShow: false,
      sectors: [],
      sectors2: [],
      page: 1,
      id: this.colorCheckingId,
      pageSize: 1,
      email3Value:null,
      email2Value:null,
      email3:null,
      email: null,
      email2:null,
      form: {
        Emails: [],
      },
      referrals: [],
      spinner: false,
      referSpinner: false,
    };
  },
  async fetch() {
    await this.fetchSectors();
    await this.getReferrals();
  },
  computed: {
    colorCheckingId() {
      return (this.id = this.$route.params.id);
    },
  },

  methods: {
      makeToast() {
      this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
        title: this.$store.state.notifications.type,
        autoHideDelay: 5000,
        variant: this.$store.state.notifications.type === "error" ? "danger" : "info",
        solid: true,
      });
    },

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
     async referAFriend() {
      this.referSpinner = true;
      try {
        await this.$axios.post("/Emails/ReferAFriend", this.form);
        this.referSpinner = false;
        swal({
          title: "Success!",
          text: "Thank you, Friend referred!",
          icon: "success",
        });
      } catch (e) {
        if (e.response) {
          this.referSpinner = false;
          this.$store.commit("notifications/error", e.response.data);
          this.makeToast();
        } else {
          this.$store.commit("notifications/error", "something went wrong");
          this.makeToast();
        }
      }
    },
    async getReferrals() {
      try {
        this.spinner = true;
        const response = await this.$axios.get("/Emails/GetMyReferredEmails");
        this.referrals = response.data;
        this.spinner = false;
      } catch (e) {
        this.spinner = false;
      }
    },
  },
  watch: {
    email() {
      this.form.Emails = [this.email];
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 100px;
}

@media screen and (max-width: 740px) {
.login___ {
  margin-bottom: 40px!important;
}
.action-btn {
  margin-top: 15px;
}
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
  font-size: 18px;
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

.btn-sacademy_ {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 100%;
  padding: 5px 0px 7px;
  border: 0;
  border-radius: 25px;
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

