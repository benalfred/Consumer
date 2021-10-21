<template>
  <div>
    <div class="nav-list mr-4" style="cursor: pointer; margin-top: 12px">
      <div v-if="$auth.loggedIn" class="notification">
        <img
          src="~/assets/img/user-thumbnail.png"
          width="50"
          class="img-fluid mr-3 mb-2 rounded-circle"
          alt=""
        />
      </div>

      <div class="cart sub-menu">
        <div class="cart_box">
          <ul class="cart_list">
            <li>
              <div class="d-flex"></div>
            </li>
          </ul>

          <div class="mt-4">
            <div class="row">
              <a v-if="$auth.loggedIn" @click="modalShow = !modalShow" class="dropdown-item text-left_">
                <div class="cart_buttons_madesoft col-12 d-flex">Refer</div>
              </a>


              <div class="cart_buttons_madesoft col-12 mb-3 d-flex" @click="$auth.logout()">
                <span class="las la-sign-out-alt pt-1"></span>
                <span class="pr-3 pl-1">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



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
                <p>For every friend referred, you gain an additional 10 points</p>
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
                <b-form-group class="newpost mt-">
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
  </div>
</template>

<script>
export default {
  name: "ImageDropdown",
  async fetch() {
    await this.getReferrals();
  },
  data() {
    return {
       modalShow: false,
      showCart: false,
      cartOpen: false,
      email: null,
      email2:false,
      email3:false,
      email2Value:null,
      email3Value:null,
      form: {
        Emails: [],
      },

      referrals: [],
      spinner: false,
      referSpinner: false,
    };
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
    setFalse(){
     this.form.Email = []
        this.email = null,
        this.email2 = false,
        this.email3 = false,
        this.email2Value = null,
        this.email3Value = null
    },
    async referAFriend() {
      this.email3Value ? this.form.Emails.push(this.email3Value) : ''
       this.email2Value ? this.form.Emails.push(this.email2Value) : ''
      this.referSpinner = true;
      try {
        await this.$axios.post("/Emails/ReferAFriend", this.form);
        this.referSpinner = false;
        this.form.Email = []
        this.email = null,
        this.email2 = false,
        this.email3 = false,
        this.email2Value = null,
        this.email3Value = null
        swal({
          title: "Success!",
          text: "Thank you, Friend referred!",
          icon: "success",
        });
         await this.getReferrals()
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
      this.email2 = true
    },
    email2Value(){
      this.email3 = true
    },
    // email3Value(){
    //   this.form.Emails.push(this.email2Value)
    // }
  },
};
//TODO test mobile responsiveness of menu and dropdowns
//TODO make fixed menu onscroll
</script>

<style scoped>
.d-flex__ {
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0px -1px 37px rgba(0, 0, 0, 0.05);
  padding: 40px 30px 20px;
  border-radius: 3px;
}

.modalDialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 99999;
  opacity: 0;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  pointer-events: none;
  overflow: auto;
}
.modalDialog:target {
  opacity: 1;
  pointer-events: auto;
}
.modalDialog > div {
  max-width: 600px;
  width: 60%;
  position: relative;
  margin: 5% auto;
  border-radius: 10px;
  background: #626d73;
  border-radius: 10px;
}
.close {
  font-family: Arial, Helvetica, sans-serif;
  background: black;
  font-size: 12px;
  color: #fff;
  line-height: 25px;
  position: absolute;
  right: 17px;
  text-align: center;
  top: 0px;
  padding: 10px 13px 5px;
  text-decoration: none;
  font-weight: bold;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-box-shadow: 1px 1px 3px #000;
  -webkit-box-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 3px #000;
  padding-top: 5px;
}
.close:hover {
  background: #fa3f6f;
}
.page {
  padding-top: 100px;
}

img {
  width: 40px;
  height: 40px;
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
.text-left_ {
  position: relative;
  left: -20px;
  bottom: 2px;
}
.danger_ {
  width: 10px;
}
.notification {
  position: relative;
  bottom: 5px;
  left: 18px;
}
.cart_buttons_madesoft {
  margin: 0;
  padding: 10px 0;
  text-align: start;
  position: relative;
  left: 30px;
}

.cart_buttons_madesoft span {
  font-size: 15px;
}

.cart_buttons_madesoft .view-cart_madesoft,
.cart_buttons_madesoft .checkout_madesoft {
  background-color: #e57718;
  color: #fff;
  margin: 0 5px !important;
  padding: 0.375rem 0.75rem !important;
  float: none !important;
}

.cart_buttons_madesoft .view-cart_madesoft:hover,
.cart_buttons_madesoft .checkout_madesoft:hover {
  background-color: #4fbfa3;
}

.cart_count {
  position: relative;
  top: -13px;
  right: 13px;
  font-size: 10px;
  background-color: #0e93d8;
  border-radius: 50%;
  height: 16px;
  min-width: 16px;
  line-height: 16px;
  padding: 0 5px;
  color: #fff;
  font-weight: normal;
}

.nav-fixed .cart_count {
  top: 8px;
}

.cart_box {
  background-color: white;
  width: 200px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 13px 42px 11px rgba(0, 0, 0, 0.1);
  /*top: 65px;*/
  right: -60px;
  top: 10px;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 1000;
}

@media screen and (min-width: 800px) {
  .cart_box {
    position: absolute;
  }
}

.cart_list li {
  border-bottom: 1px solid rgba(119, 119, 119, 0.05);
  /*padding: 4px 14px;*/
  width: 100%;
  line-height: 40px;
  font-weight: bold;
  list-style: none;
}

.cart_list li:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.cart_list img {
  background-color: #ffffff;
  margin-right: 10px;
  max-width: 60px;
  vertical-align: top;
}

.cart_list {
  font-size: 14px;
}

.cart_list a:hover {
  color: #ddd !important;
}

.cart_quantity {
  font-size: 12px;
  font-weight: lighter;
  color: #4fbfa3;
}

.cart_total {
  margin: 0;
  padding: 10px 20px;
  text-align: right;
  line-height: 1;
}

.cart_total strong {
  float: left;
}

.cart_buttons {
  margin: 0;
  padding: 10px 20px 20px;
  text-align: center;
}

.cart_buttons .view-cart,
.cart_buttons .checkout {
  background-color: #4fbfa3;
  color: #fff !important;
  margin: 0 5px !important;
  padding: 0.375rem 0.75rem !important;
  float: none !important;
}

.cart_buttons .view-cart:hover,
.cart_buttons .checkout:hover {
  background-color: #4fbfa3;
}

.trash {
  cursor: pointer;
}

.cartProdName {
  white-space: nowrap;
  max-width: 165px;
  overflow: hidden;
  font-size: 14px;
  line-height: 16px;
  text-overflow: ellipsis;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.sub-menu {
  /*width: 270px;*/
  display: block;
  position: absolute;
  border-top: 2px solid #4fbfa3;
  background-color: #fefefe;
  z-index: 250;
  opacity: 0;
  visibility: hidden;
  top: 160px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3), 0 -18px 60px -10px rgba(0, 0, 0, 0.025);
  transition: all 650ms ease;
}

.nav-list:hover > .sub-menu {
  top: 80px;
  opacity: 1;
  visibility: visible;
}
</style>
