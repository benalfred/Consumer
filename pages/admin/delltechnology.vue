<template>
  <div>

        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
            <b-row>
            <b-col md="6">
                 <h1 class="">Dell Technology <span style="font-size: 24px;">at its very best</span></h1>
           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </b-col>
            <b-col md="6">

            </b-col>
            <b-col lg="6" xl="6" class="">
                <div class="Opinion1 p-3 p-lg-5 mt-5">
                      <div>
                      <div class="d-flex">
                        <p class="add pb-2">Full Review Breakdown</p>
                      </div>
                      <div class=" mb-2"  style="background: rgba(0, 0, 0, 0.1);height: 1px;">
                              </div>
                      </div>

                <div class="d-flex_ row ">
                    <div class="col-md-12">
                    <a href="#openModal-about">
                        <button type="button" class="button_">VIEW FULL REVIEW CHARTS
                        </button>
                    </a>
                    </div>
                </div>
                </div>

                <div class="Opinion1 p-3 p-lg-5 mt-5">
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
                  <ProfileComponent />
               </div>

              <UserResponse />
            </b-col>
            </b-row>


       </div>
        </div>
        </div>



        <div id="openModal-about" class="modalDialog justify-content-center text-center">
      <div class="pt-5 pb-5">
         <a href="#close" title="Close" class="close">X</a>
         <h2 class="report-h2 mb-5">Report Downloading</h2>
          <b-progress :max="max" class="mb-4">
      <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
    </b-progress>
    <div>
        <div>
          <b-form-group class="newpost mt-5">
                <button class=" mt-4 btn-sacademy" v-b-modal.modal-xl style="font-size: 16px" type="submit" value="Send">Completed</button>
              </b-form-group>
        </div>
    </div>
       </div>
    </div>

    <b-modal
      id="modal-xl"
      size="xl"
      class="popup"
      centered
      scrollable
      title="Technology"
      body-bg-variant="light"
      header-bg-variant="light"
      hide-footer
    >
      <div class="item-wrapper one justify-content-center">
        <div class="row justify-content-center text-center">
           <div class="col-md-4 justify-content-center text-center mb-3">
          <b-form-textarea
          id="textarea"
          style="font-size: 27px; color: #626d73"
          v-model="text"
          placeholder="Technology at its very best"
          rows="2">
        </b-form-textarea>
        </div>
        </div>
        <div class="row justify-content-center text-center">
             <div class="col-md-4 justify-content-center text-center mb-3">
          <b-form-textarea
          id="textarea"
          style="font-size: 13px; color: #626d73"
          v-model="text"
          placeholder="Text......"
          rows="1">
        </b-form-textarea>
        </div>
        </div>
        <div class="item">
          <form
            data-validation="true"
            action="#"
            method="post"
            enctype="multipart/form-data"
          >
            <div class="item-inner">
              <div class="item-content">
                <div class="image-upload">
                  <label style="cursor: pointer" for="file_upload">
                    <img src="" alt="" class="uploaded-image" />
                    <div class="h-100">
                      <div class="dplay-tbl">
                        <div class="dplay-tbl-cell">
                          <i class="fa fa-cloud-upload"></i>
                          <h5><b>Choose Your Image to Upload</b></h5>
                          <h6 class="mt-10 mb-70">Or Drop Your Image Here</h6>
                        </div>
                      </div>
                    </div>
                    <!--upload-content-->
                    <b-form-file
                      v-model="form.Banner"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                      name="image"
                    ></b-form-file>
                  </label>
                </div>
              </div>
              <!--item-content-->
            </div>
            <!--item-inner-->
          </form>
        </div>

        <b-row class="justify-content-center">
          <b-col md="4" class="newpost_ justify-content-center" v-if="!updateSpinner">
            <b-form-group class="newpost">
              <button
                @click="updateSector"
                class="btn-sacademy"
                style="font-size: 16px"
                type="submit"
                value="Send"
              >
                Update
              </button>
            </b-form-group>
          </b-col>
          <b-spinner
            v-if="updateSpinner"
            label="Spinning"
            style="margin-left: 5%"
          ></b-spinner>
        </b-row>
      </div>
    </b-modal>

  </div>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent.vue"
import UserResponse from "@/components/UserResponse.vue"
export default {
   data() {
      return {
        value: 33.333333333,
        max: 50
      }
   },
    layout: "dashlayout",
    component: {UserResponse, ProfileComponent},

}
</script>


<style scoped>
  .btn-sacademy {
    color: #fff !important;
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 40%;
    padding: 12px 0px 12px;
    border: 0;
    border-radius: 25px;
    opacity: 0.4;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.modalDialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
   height: 105vh;
  width: 99vw;
  background: url('~assets/img/bg-image.png');
  z-index: 99999;
  opacity:0;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  pointer-events: none;
}
.modalDialog:target {
  opacity:1;
  pointer-events: auto;
}
.modalDialog > div {
  max-width: 800px;
  width: 90%;
  position: relative;
  margin: 10% auto;
  background: #FFFFFF;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

}
.close {
  font-family: Arial, Helvetica, sans-serif;
  background: #f26d7d;
  color: #fff;
  line-height: 25px;
  position: absolute;
  right: -12px;
  text-align: center;
  top: -10px;
  width: 34px;
  height: 34px;
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

.report-h2 {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
/* identical to box height, or 83% */

text-align: center;

color: #000000;
}
</style>
