<template>
  <div>
  <a href="#openModal-about1">Click here</a>
   <div id="openModal-about1" class="modalDialog">
      <div>

        <div class="d-flex__ row dell-card">
           <b-container>
      <b-row>
        <b-col md="6">
          <h4 class="font-weight-bold">Refer a friend</h4>
        </b-col>
        <b-col md="6" class="d-flex justify-content-end">
        <a href="#close" title="Close" class="close">X</a>
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
            <div class="mt-1">
              <div>
                <b-form-input v-model="email" placeholder="Enter email"></b-form-input>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4" class="newpost_">
          <b-form-group class="newpost mt-1">
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

    <b-container class="mt-5">
      <b-row class="d-flex" v-if="referrals.length && !spinner">
        <b-col md="3" class="d-flex" v-for="referred in referrals" :key="referred.Id">
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
        </div>
      </div>
   </div>

  </div>
</template>

<script>
export default {
  layout: "headerr",
  data() {
    return {
      email: null,
      form: {
        Emails: [],
      },
      referrals: [],
      spinner: false,
      referSpinner: false,
    };
  },

  async fetch() {
    await this.getReferrals();
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
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
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
</style>
