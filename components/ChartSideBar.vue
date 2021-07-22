<template>
<div class="mt-5">
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
</div>
</template>


<script>
export default {
  name: "ChartSideBar"
}
</script>

