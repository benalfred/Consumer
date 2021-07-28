<template>
      <div class="mt-2">
          <h4 class="font-weight-bold mb-4">Period</h4>

           <div>
               <div  class=" d-flex">
            <b-form-checkbox size="lg"  style="border-radius: 0px!important" ></b-form-checkbox>
                <h6 class="pt-1 pl-3">Monthly</h6>
            </div>
            <div class="number mb-4 ml-4 pl-3">
              <span>1st</span>
              <span>2st</span>
              <span class="span" >3st</span>
              <span class="span">4st</span>
              <span class="span">5st</span>
              <span class="span">6st</span>
            </div>
           </div>

           <div>
               <div  class=" d-flex">
            <b-form-checkbox size="lg"  style="border-radius: 0px!important" ></b-form-checkbox>
                <h6 class="pt-1 pl-3">Quartely</h6>
            </div>
            <div class="number mb-4 ml-4 pl-3">
              <span>1st</span>
              <span class="span">2st</span>
              <span class="span">3st</span>
              <span class="span">4st</span>
            </div>
           </div>

           <div>
               <div  class="d-flex">
            <b-form-checkbox size="lg"  style="border-radius: 0px!important" ></b-form-checkbox>
                <h6 class="pt-1 pl-3">Bi-Annual</h6>
            </div>
            <div class="number mb-4 ml-4 pl-3">
              <span>1st</span>
              <span class="span">2st</span>
            </div>
           </div>

           <div>
               <div  class="d-flex">
            <b-form-checkbox size="lg"  style="border-radius: 0px!important" ></b-form-checkbox>
                <h6 class="pt-1 mb-4 pl-3">Annual</h6>
            </div>
           </div>

           <div>
               <div  class="d-flex">
            <b-form-checkbox size="lg"  style="border-radius: 0px!important" ></b-form-checkbox>
                <h6 class="pt-1 mb-4 pl-3">Date Range</h6>
            </div>
               <div class="row d-flex">
                  <div class=" " style="width: 130px; position: relative; left: 50px">
                  <b-form-group>
                  <div class="form-group small-select2">
                    <v-select
                      v-model="templateType"
                      :options="emailTemplatesTypes"
                      placeholder="Start Date"
                      :reduce="(type) => type.Id"
                      @input="fetchEmailTemplate"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>

              </div>
                  <div class=" " style="width: 140px; position: relative; left: 55px">
                  <b-form-group>
                  <div class="form-group small-select2">
                    <v-select
                      v-model="templateType"
                      :options="emailTemplatesTypes"
                      placeholder="End Date"
                      :reduce="(type) => type.Id"
                      @input="fetchEmailTemplate"
                      label="Name"
                    ></v-select>
                  </div>
                </b-form-group>
              </div>
               </div>
           </div>
          </div>
</template>


<script>
export default {
  name: "ChartSideBarPeriod"
}
</script>

<style scoped>
.number span {
  font-size: 6px;
  padding: 0px 5px 0px;
  cursor: pointer;

}

.number .span {
  opacity: 0.5;
}

h6 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;
  color: #626D73;
}
</style>

