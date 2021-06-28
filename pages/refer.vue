<template>
  <div class="page">
    <b-container>
      <b-row>
        <b-col md="6">
          <h4 class="font-weight-bold">Refer a friend</h4>
        </b-col>
        <b-col md="6" class="d-flex justify-content-end">
          <i style="cursor: pointer" class="fas fa-times-circle fa-2x"></i>
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
      <h5 class="mt-2 ml-1" v-if="!referrals.length && !spinner">None referred yet, please refer someone</h5>
      <b-row>
       <b-col md="3" class="d-flex">
        <b-spinner
        v-if="spinner"
        label="Spinning"
      ></b-spinner>
       </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "headerr",
  data() {
    return {
      email: null,
      referrals: [],
      spinner: false,
      referSpinner: false,
    };
  },

  async fetch(){
   await this.getReferrals()
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
        await this.$axios.post("/Emails/ReferAFriend", { Email: [this.email] });
        this.referSpinner = false;
        swal({
          title: "Success!",
          text: "Thank you, Friend referred!",
          icon: "success",
        });
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getReferrals() {
      try {
        this.spinner = true;
        const response = await this.$axios.get("/Emails/GetMyReferredEmails");
        this.referrals = response.data;
        this.spinner = false;
      } catch (e) {
        console.log(e)
        this.spinner = false
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
  },
};
</script>

<style scoped>
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
