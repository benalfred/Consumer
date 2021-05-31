<template>
  <div>
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
           <h1 class="mb-5">Welcome Back!</h1>
            <b-row>
            <b-col lg="6" xl="6" class="">
                <div class="Opinion p-3 pl-lg-5">
                    <h4 class="h4 pb-3">Opinion Ratings</h4>
                    <p class="text-white text" style="position: relative; top: 10px;">POSIVIE OPINIONS</p>
                    <div class="d-lg-flex">
                    <div class="d-flex">
                        <button type="button" v-b-modal.modal-lg class="btn_">Technology</button>

                        <div class="ml-2">
                        <a href="#openModal-about">
                        <button type="button" class="btn1_">Technology</button>
                        </a>
                        </div>
                    </div>
                     <div class="ml-lg-2 mt-2">
                        <button type="button" class="btn2_">Technology</button>
                        </div>
                    </div>

                    <div class="mt-4">
                            <p class="text-white text" style="position: relative; top: 10px;">NEGATIVE OPINIONS</p>
                      <div class="d-lg-flex">
                    <div class="d-flex">
                        <button type="button" class="btn_">ECONOMY</button>

                        <div class="ml-2">
                        <button type="button" class="btn1_">FASHION</button>
                        </div>
                    </div>
                     <div class="ml-lg-2">
                        <button type="button" class="btn2_">FINANCE</button>
                      </div>

                      </div>
                    </div>

                </div>

                <div class="Opinion1 p-3 p-lg-5 mt-5">
                      <div>
                      <div class="d-flex">
                        <p class="add pb-2">Add and Remove Sectors</p>
                      </div>
                      <div class=" mb-2"  style="background: rgba(0, 0, 0, 0.1);height: 1px;">
                              </div>
                      </div>

                <div class="d-flex_ row ">
                    <div class="col-md-4">

                        <button type="button" class="button">Technology
                            <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                    <div class="col-md-4 pl-lg-4">
                        <button type="button" class="button">FINANCE
                            <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="button">FASHION
                        <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="button">ECONOMY
                          <img style="position: absolute; bottom: 35px" class="pl-4" src="~/assets/img/cancel.png" alt="">
                        </button>
                    </div>
                </div>

                <div class="sector p-3 mt-5">
                     <b-row class="my-1">
                        <b-col sm="9">
                          <b-form-input id="input-large" v-model="sector" class="input-sector" size="lg" placeholder="New Sector"></b-form-input>
                        </b-col>
                         <b-col sm="3" class="pl-4 pt-0">
                            <button class="btn outline-none">
                                <img src="~assets/img/sectoricon.png" alt="">
                            </button>
                        </b-col>
                      </b-row>
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

        <!-- <b-modal
          id="modal-lg"
          size="lg" class="popup"
          centered scrollable title=""
          body-bg-variant="light"
          header-bg-variant="light" hide-footer>


        </b-modal> -->


<!--modals-->
    <div id="openModal-about" class="modalDialog">
      <div>
         <a href="#close" title="Close" class="close">X</a>
           <div class=" pt-5 pb-5">
              <h3 class="text-center pb-4 text-white mt-5">Are you sure?</h3>

               <div class="d-flex justify-content-center">
                   <div>
                      <b-form-group class="newpost mt-3">
                    <button class="mt-2 mr-4 btn-sacademy"  style="font-size: 16px" type="submit" value="Send">cancel</button>
                  </b-form-group>
                   </div>

                   <div>
                      <b-form-group class="newpost mt-3">
                    <button class=" mt-2 btn-sacademy1"  style="font-size: 16px" type="submit" value="Send">okay</button>
                  </b-form-group>
                   </div>
               </div>

               <div style="background: #333536;" class="p-4 mt-5"></div>
          </div>
       </div>
    </div>

  </div>
</template>

<script>
import UserResponse from "@/components/UserResponse.vue"
import ProfileComponent from "@/components/ProfileComponent.vue"
export default {
    layout: "dashlayout",
    component: {UserResponse, ProfileComponent},
    data(){
      return {
        filter: "",
        sector:null,
        addSectorSpinner:null
      }
    },
    methods: {
      async addSector(){
        this.addSectorSpinner = true
        try {
         await this.$axios.post('Industries/CreateIndustry',this.sector)
         this.addSectorSpinner = false;
         this.sector = null
        swal({
          title: "Success!",
          text: "sector added!",
          icon: "success",
        });
        } catch (e) {

        }
      }
    },
}
</script>


<style scoped>
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
  background: #fff;
  border-radius: 10px;
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
  border-radius: 3px;
  background: #626D73;
  border-radius: 10px;
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

  .btn-sacademy {
    color: #fff !important;
    background: #D91925;
    border-radius: 25px;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    padding: 8px 34px 8px;
    border: 0;
}
  .btn-sacademy1 {
    color: #fff !important;
    background: #18E5B4;
    border-radius: 25px;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    padding: 8px 34px 8px;
    border: 0;
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

.button{
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

.input-sector {
  background: #656565;
  border: 1px solid #A0A0A0;
box-sizing: border-box;
border-radius: 5px;
color: white;
}
</style>
