<template>
  <div>

        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
            <b-row>
            <b-col md="6">
                 <h1 class="">Technology! <span style="font-size: 24px;">at its very best</span></h1>
           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </b-col>
            <b-col md="6">

            </b-col>
            <b-col lg="6" xl="6" class="">
                <div class="Opinion1 p-5 mt-5">
                      <div>
                      <div class="d-flex">
                        <p class="add pb-2">Full Review Breakdown</p>
                      </div>
                      <div class=" mb-2"  style="background: rgba(0, 0, 0, 0.1);height: 1px;">
                              </div>
                      </div>

                <div class="d-flex_ row ">
                    <div class="col-md-12">
                        <button type="button" class="button_">VIEW FULL REVIEW CHARTS

                        </button>
                    </div>
                </div>
                </div>

                <div class="Opinion1 p-5 mt-5">
                      <div>
                      <div class="d-flex">
                        <p class="add pb-2">Download Report</p>
                      </div>
                      <div class=" mb-2"  style="background: rgba(0, 0, 0, 0.1);height: 1px;">
                              </div>
                      </div>

                <div class="d-flex_ row ">
                    <div class="col-md-12">
                        <button type="button" class="button_">CLICK TO DOWNLOAD REPORT <img class="pl-2" src="~/assets/img/Group.png" alt="">
                        </button>
                    </div>
                </div>
                </div>

                <div class="Opinion1 p-5 mt-5">
                      <div>
                      <div class="d-flex">
                        <p class="add pb-2">Add and Remove Sectors</p>
                      </div>
                      <div class=" mb-2"  style="background: rgba(0, 0, 0, 0.1);height: 1px;">
                              </div>
                      </div>

                <div class="d-flex_ row ">
                    <div class="col-md-4">
                        <button type="button" class="button_">Technology
                            <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                    <div class="col-md-4 pl-4">
                        <button type="button" class="button_">FINANCE
                            <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="button_">FASHION
                        <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                </div>
                </div>
            </b-col>


            <b-col lg="6" xl="6" class="all pl-lg-5">
            <div class="search-wrapper mb-3">
            <div class="wrapper">
              <div class="input-data">
                <span class="las la-search search"></span>
                <b-input
                  type="text"
                  required
                  debounce="1000"
                  v-model="filter"
                  class="pl-5 pt-2 input"
                  placeholder="Search for user"
                ></b-input>
              </div>
            </div>
                </div>

               <div class="d-flex">
                   <div class="">
                    <button type="button" class="btn1">ALL</button>
                  </div>
                   <div class="ml-lg-2">
                    <button type="button" class="btn2">Technology</button>
                  </div>
                   <div class="ml-lg-2">
                    <button type="button" class="btn2">FASHION</button>
                  </div>
                   <div class="ml-lg-2">
                    <button type="button" class="btn2">ECONOMY</button>
                  </div>
               </div>

              <UserResponse />
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
.all {
  position: relative;
  bottom: 100px;
}
.img1 {
 background: #E57718;
border-radius: 19.5px;
}

.text {
  font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 15px;
text-transform: uppercase;
color: #FFFFFF;
}

.sidebar {
  background-color: #F3CEAE;
  color: black!important;
}

.Opinion{
  background: #E57718;
  border-radius: 5px;
}
.Opinion1{
   background: #FFFFFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
   border-radius: 5px;
}

.btn_ {
background: #FFFFFF;
border: none;
padding: 5px 20px 5px;
color: black;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #000000;
}
.btn1_ {
background: #FFFFFF;
border: none;
padding: 5px 20px 5px;
color: black;
opacity: 0.6;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
/* identical to box height */

color: #000000;
}
.btn2_ {
background: #FFFFFF;
border: none;
padding: 5px 20px 5px;
color: black;
opacity: 0.2;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #000000;
}

.btn1 {
 background: #00B5D3;
border: none;
padding: 5px 20px 5px;
color: black;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #fff;
}
.btn2 {
 background: #00B5D3;
border: none;
padding: 5px 20px 5px;
color: black;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #fff;
opacity: 0.2;
}

.add {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #373737;
}

.button_{
    background: #00B5D3;
border: none;
padding: 8px 32px 8px;
color: black;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #fff;
margin: 15px 0px 10px;
}

.sector {
  background: #656565;
}
</style>
