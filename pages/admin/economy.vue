<template>
  <div>

        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
            <b-row>
            <b-col md="6">
                 <h1 class="">Technology <span style="font-size: 24px;">at its very best</span></h1>
           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </b-col>
            <b-col md="6" class="text-end">

            </b-col>



            <b-col md="6" class="mt-4">
                <div class="age p-5">
                <span class="text-center text-white" style="left: calc(103% - 83.93px/2 - 55.52px);top: 30px;
                  background: #E57718; position: absolute; width: 70.93px; height: 28px;">AGE</span>
                  <div class="d-flex">
                  <div class="pt-5">
                  <img src="~/assets/img/vector6.png" alt="">
                  </div>
                  <h6 class="text-head pb-2 mt-5">Opinions most popular with Millenials</h6>
                  </div>
                    <p class="pb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                  <div class="d-lg-flex mt-4">
                    <div class="col-md-3 pt-5 mt-4 text-para">
                        <p>mILLENIAL</p>

                        <p>GENERATION </p>
                        <div>
                           <!-- <img class="ml-4" src="~/assets/img/B.png" width="8" alt=""> -->
                        <p>BABY BOOMERS</p>
                        </div>
                    </div>

                    <img class="pl-2 d-none d-sm-block" height="220" src="~/assets/img/line7.png" alt="">

                    <div class="col-md-3  text-p">
                     <h6 class="text-center">Positive Opinion</h6>
                        <p>50%</p>
                        <p>20%</p>
                        <p>30%</p>
                    </div>

                    <img class="pl-2 d-none d-sm-block" height="220" src="~/assets/img/line7.png" alt="">

                     <div class="col-md-3  text-p">
                     <h6 class="text-center">Positive Opinion</h6>
                        <p>50%</p>
                        <p>20%</p>
                        <p>30%</p>
                    </div>

                    <img class="pl-2 d-none d-sm-block" height="220" src="~/assets/img/line7.png" alt="">
                    

                      <div class="col-md-3  text-p">
                     <h6 class="text-center">Positive Opinion</h6>
                        <p>50%</p>
                        <p>20%</p>
                        <p>30%</p>
                    </div>
                  </div>
                </div>
            </b-col>

            <b-col md="6" class="mt-4">
             <span class="text-center text-white pt-1" style="left: calc(101% - 83.93px/2 - 55.52px);top: 26px;
                  background: #00B5D3; position: absolute; width: 80.93px; height: 36px;">GENDER</span>
                <div class="age p-5">
                <div class="d-flex">
                <div class="pt-4">
                  <img src="~/assets/img/union.jpg" alt="">
                </div>
                    <h5 class="text-head pb-2 mt-5">Opinions most popular with Millenials</h5>
                </div>
                    <p class="pb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                  <div class="d-lg-flex mt-4">
                    <div class="col-md-3 pt-5 mt-4 text-para">
                        <p>mILLENIAL</p>

                        <p>GENERATION </p>
                        <div>
                           <!-- <img class="ml-4" src="~/assets/img/B.png" width="8" alt=""> -->
                        <p>BABY BOOMERS</p>
                        </div>
                    </div>

                    <img class="pl-2" height="220" src="~/assets/img/line7.png" alt="">

                     <div class="col-md-3  text-p">
                     <h6 class="text-center">Positive Opinion</h6>
                        <p>50%</p>
                        <p>20%</p>
                        <p>30%</p>
                    </div>

                    <img class="pl-2" height="220" src="~/assets/img/line7.png" alt="">

                     <div class="col-md-3  text-p">
                     <h6 class="text-center">Positive Opinion</h6>
                        <p>50%</p>
                        <p>20%</p>
                        <p>30%</p>
                    </div>

                    <img class="pl-2" height="220" src="~/assets/img/line7.png" alt="">

                      <div class="col-md-3  text-p">
                     <h6 class="text-center">Positive Opinion</h6>
                        <p>50%</p>
                        <p>20%</p>
                        <p>30%</p>
                    </div>
                  </div>
                </div>
            </b-col>

            </b-row>


       </div>
        </div>
        </div>

  </div>
</template>

<script>
import UserResponse from "@/components/UserResponse.vue"
export default {
    layout: "dashlayout",
    component: {UserResponse},
}
</script>


<style scoped>
.text-head {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 36px;
color: #626D73;
}

.age {
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.text-p p {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 38px;
text-align: center;
text-transform: uppercase;
color: #373737;
}
.text-para p {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 20px;
text-align: center;
text-transform: uppercase;
color: #373737;
}


.text-p span {
 text-align: center;
 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: normal;
line-height: 124.4%;
text-transform: uppercase;
color: #373737;
}

.sector {
  background: #656565;
}
</style>
