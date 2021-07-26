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
              <span>3st</span>
              <span>4st</span>
              <span>5st</span>
              <span>6st</span>
            </div>
           </div>

           <div>
               <div  class=" d-flex">
            <b-form-checkbox size="lg"  style="border-radius: 0px!important" ></b-form-checkbox>
                <h6 class="pt-1 pl-3">Quartely</h6>
            </div>
            <div class="number mb-4 ml-4 pl-3">
              <span>1st</span>
              <span>2st</span>
              <span>3st</span>
              <span>4st</span>
            </div>
           </div>

           <div>
               <div  class="d-flex">
            <b-form-checkbox size="lg"  style="border-radius: 0px!important" ></b-form-checkbox>
                <h6 class="pt-1 pl-3">Bi-Annual</h6>
            </div>
            <div class="number mb-4 ml-4 pl-3">
              <span>1st</span>
              <span>2st</span>
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

h6 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 27px;
  color: #626D73;
}
</style>

