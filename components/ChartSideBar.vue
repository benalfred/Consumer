<template>
      <div class="mt-5 ChartSideBar">
            <div class="d-flex">
                <div>
                <b-form-checkbox size="lg" style="border-radius: 0px!important" ></b-form-checkbox>
                </div>
                 <div class="ml-2" style="width: 150px;">
                  <b-form-group>
                  <div class="form-group small-select2">
                    <label for="" class="text-dark_" style=""
                      >Gender</label>
                    <v-select
                      v-model="templateType"
                      :options="emailTemplatesTypes"
                      placeholder="All"
                      :reduce="(type) => type.Id"
                      @input="fetchEmailTemplate"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>
              </div>
            </div>

            <div class="d-flex">
                <div>
                <b-form-checkbox size="lg" style="border-radius: 0px!important" ></b-form-checkbox>
                </div>

                 <div class="ml-2" style="width: 210px;">
                  <b-form-group>
                  <div class="form-group small-select2">
                    <label for="" class="text-dark_" style=""
                      >Age</label>
                    <v-select
                      v-model="templateType"
                      :options="emailTemplatesTypes"
                      placeholder="All"
                      :reduce="(type) => type.Id"
                      @input="fetchEmailTemplate"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>
              </div>
            </div>

             <div class="d-flex">
              <div>
                <b-form-checkbox size="lg" style="border-radius: 0px!important" ></b-form-checkbox>
                </div>
                 <div class="ml-2" style="width: 210px;">
                  <b-form-group>
                  <div class="form-group small-select2">
                    <label for="" class="text-dark_" style=""
                      >States</label>
                    <v-select
                      v-model="templateType"
                      :options="emailTemplatesTypes"
                      placeholder="All"
                      :reduce="(type) => type.Id"
                      @input="fetchEmailTemplate"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>
              </div>
             </div>

              <div class="d-flex">
              <div>
                <b-form-checkbox size="lg" style="border-radius: 0px!important" ></b-form-checkbox>
                </div>
                 <div class="ml-2" style="width: 210px;">
                  <b-form-group>
                  <div class="form-group small-select2">
                    <label for="" class="text-dark_" style=""
                      >Local Gov’t Area</label>
                    <v-select
                      v-model="templateType"
                      :options="emailTemplatesTypes"
                      placeholder="All"
                      :reduce="(type) => type.Id"
                      @input="fetchEmailTemplate"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>
              </div>
             </div>
        <div>
            <ChartSideBarPeriod />
        </div>

      </div>
</template>


<script>
import ChartSideBarPeriod from './ChartSideBarPreiod.vue'
export default {
  name: "ChartSideBar",
  components: { ChartSideBarPeriod },
  data() {
    return {
       emailTemplatesTypes: [],
      templateType: null,
      spinner: false,
      emailTemplates: [],
      template: null,
    }
  },
  methods: {
     async fetchEmailTemplate(id) {
      try {
        const response = await this.$axios.get(
          `/EmailTemplates/GetEmailTemplate?emailType=${id}`
        );
        this.emailTemplates = [response.data];
        this.template = response.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
  }
}
</script>

<style>
.ChartSideBar {
  overflow: hidden;
  overflow-y: scroll;
  max-height: 650px;
}

.ChartSideBar::-webkit-scrollbar {
  width: 3px;
  border-radius: 50px;
}

/* Track */
.ChartSideBar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.ChartSideBar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.ChartSideBar::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

</style>

