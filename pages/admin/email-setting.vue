<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
          <b-row>
            <b-col md="6">
              <div class="email-setting p-3">
                <p class="pt-2">Email Setting</p>
              </div>
            </b-col>
            <b-col md="6">
              <nuxt-link to="review-setting">
                <div class="email-setting1 p-3">
                  <p class="pt-2">Review Setting</p>
                </div>
              </nuxt-link>
            </b-col>
          </b-row>

          <b-row class="mt-5">
            <b-col md="6">
              <h3 class="text-dark_">Configure Email Template</h3>
              <p class="pt-3 text-dark">
                Here is an email configuration theme that gives flexibility to email
                settings
              </p>

              <div class="mt-5">
                <b-form-group>
                  <div class="form-group small-select">
                    <label for="" class="text-dark_" style="font-weight: 700"
                      >Choose email template</label
                    >
                     <v-select
                        v-model="templateType"
                        :options="emailTemplatesTypes"
                        placeholder="choose email template"
                        :reduce="(type) => type.Id"
                        @input="fetchEmailTemplate"
                        label="Name"
                      ></v-select>
                  </div>
                </b-form-group>

                <b-form-group>
                  <div class="form-group small-select">
                    <label for="" class="text-dark_" style="font-weight: 700"
                      >Choose address format</label
                    >
                    <v-select
                        v-model="template"
                        :options="emailTemplates"
                        placeholder="choose email template"
                        label="Subject"
                      ></v-select>
                  </div>
                </b-form-group>
              </div>
            </b-col>

            <b-col md="6" class="mt-4">
              <h6 class="pt-4 mt-3" style="color: #000; font-weight: 600">
                Password generation email
              </h6>
              <textarea class="mt-3 email-tittle p-3" placeholder="" rows="10">
               bedbjcensknwsxkxd

              </textarea>
            </b-col>

            <b-col md="6"> </b-col>
            <b-col md="4" class="newpost_ mt-1 justify-content-center">
              <b-form-group class="newpost mt-3">
                <button
                  class="mt-2 btn-sacademy"
                  style="font-size: 16px"
                  type="submit"
                  value="Send"
                >
                  Update
                </button>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserResponse from "@/components/UserResponse.vue";
export default {
  layout: "dashlayout",
  component: { UserResponse },
  async fetch(){
   await this.fetchEmailTemplatesTypes()
  },
  data() {
    return {
      emailTemplatesTypes: [],
      templateType:null,
      emailTemplates:[],
      template:null,
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

    async fetchEmailTemplatesTypes() {
      try {
        const response = await this.$axios.get("/EmailTemplates/GetEmailTemplateTypes");
        this.emailTemplatesTypes = response.data;
        console.log(response.data)
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async fetchEmailTemplate(id){
      alert(id)
      try {
      const response = await this.$axios.get(`/EmailTemplates/GetEmailTemplate?emailType=${id}`)
      console.log(response.data)
      this.emailTemplates = [response.data]
      } catch (e) {
       this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    }
  },
};
</script>

<style scoped>
.text-dark_ {
  color: #000;
  font-weight: 600;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 100%;
  padding: 12px 0px 12px;
  border: 0;
  border-radius: 25px;
}

.email-setting {
  background: #0083ca;
}
.email-setting1 {
  background: #c4c4c4;
}

.email-setting p,
.email-setting1 p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.email-tittle {
  border: 1px solid rgba(14, 10, 10, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: hidden;
  overflow-y: scroll;
  height: 300px;
  width: 500px;
  outline: None!important;;
}

.email-tittle::-webkit-scrollbar {
  width: 7px;
  border-radius: 50px;
}

/* Track */
.email-tittle::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.email-tittle::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.email-tittle::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 100%;
  padding: 10px 0px 10px;
  border: 0;
  border-radius: 25px;
}

@import url(~/assets/css/stylee.css);
</style>
