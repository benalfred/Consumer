<template>
  <div>

        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
            <b-row>
            <b-col md="6">
                   <div class="d-flex">
                 <h1 class="">Technology <span style="font-size: 24px;">at its very best</span></h1>
                 <div class="ml-4" style="cursor: pointer">
                      <img v-b-modal.modal-xl  src="~assets/img/bx_bxs-edit-alt.png" alt="">
                 </div>
            </div>
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
                        <button type="button" class="button__">VIEW FULL REVIEW CHARTS

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
                        <button type="button" class="button__">CLICK TO DOWNLOAD REPORT <img class="pl-2" src="~/assets/img/Group.png" alt="">
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
                        <button type="button" class="button__">Technology
                            <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                    <div class="col-md-4 pl-lg-4">
                        <button type="button" class="button__">FINANCE
                            <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="button__">FASHION
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

               <div class="d-flex profile-dropdown">
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
                  <ProfileComponent />
               </div>

              <UserResponse />
            </b-col>
            </b-row>


       </div>
        </div>
        </div>

         <b-modal
          id="modal-xl"
          size="xl" class="popup"
          centered scrollable title="Technology"
          body-bg-variant="light"
          header-bg-variant="light" hide-footer>

              <div class="item-wrapper one">
              <h1 class="text-center font-weight-bold mt-5" style="color: #000;">Technology <br> <span style="font-size: 27px; color: #626D73;">at its very best</span></h1>
              <p class="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="item">
                    <form data-validation="true" action="#" method="post" enctype="multipart/form-data">
                        <div class="item-inner">
                            <div class="item-content">
                                <div class="image-upload"> <label style="cursor: pointer;" for="file_upload"> <img src="" alt="" class="uploaded-image">
                                        <div class="h-100">
                                            <div class="dplay-tbl">
                                                <div class="dplay-tbl-cell"> <i class="fa fa-cloud-upload"></i>
                                                    <h5><b>Choose Your Image to Upload</b></h5>
                                                    <h6 class="mt-10 mb-70">Or Drop Your Image Here</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <!--upload-content--> <input data-required="image" type="file" name="image_name" id="file_upload" class="image-input" data-traget-resolution="image_resolution" value="">
                                    </label> </div>
                            </div>
                            <!--item-content-->
                        </div>
                        <!--item-inner-->
                    </form>
                </div>

              <b-row class="justify-content-center">
              <b-col md="4" class="newpost_ justify-content-center">
              <b-form-group class="newpost">
                <button class=" btn-sacademy" style="font-size: 16px" type="submit" value="Send">Update</button>
              </b-form-group>
              </b-col>
            </b-row>
            </div>

          </b-modal>

  </div>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent.vue"
import UserResponse from "@/components/UserResponse.vue"
export default {
    layout: "dashlayout",
    component: {UserResponse, ProfileComponent},
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
.profile-dropdown{
  overflow: auto;
}

  .btn-sacademy {
    color: #fff !important;
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 100%;
    padding: 12px 0px 12px;
    border: 0;
    border-radius: 25px;
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

.button__{
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
