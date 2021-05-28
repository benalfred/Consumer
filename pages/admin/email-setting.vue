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
              <nuxt-link to="/review-setting">
                  <div class="email-setting1 p-3">
                    <p class="pt-2">Review Setting</p>
                  </div>
                </nuxt-link>
              </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col md="6">
                    <h3>Configure Email Template</h3>
                    <p class="pt-3"> Here is an email configuration theme that gives flexibility to email settings</p>

                    <div class="mt-5">
                       <b-form-group>
                    <div class="form-group small-select">
                    <label for="" class="text-dark" style="font-weight: 700" >Choose email template</label>
                      <v-select

                        placeholder="select state"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                       <b-form-group>
                    <div class="form-group small-select">
                    <label for="" class="text-dark" style="font-weight: 700" >Choose address format</label>
                      <v-select

                        placeholder="select state"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>
                    </div>
                </b-col>

                <b-col md="6" class="mt-4">
                  <h6 class="pt-4 mt-3" style="color: #000; font-weight: 600">Password generation email</h6>
                  <div class="mt-3 email-tittle p-3">
                      <h6 class="mt-2 font-weight-bold" style="color: #000;">Email tittle</h6>
                      <p class="pt-3">Dear [[Lastname]] [[Firstname]],</p>
                      <p>Your acccount to Consumerhalla with the email address [[email-address]] has been successfully set up. Please, use the password <span class="font-weight-bold" style="color: #000">XMG_2VxLB</span> to login into your account for the first time.</p>

                      <p class="mt-4">Warm Regards</p>
                      <a href="www.consumerhalla.com" class="mt-1 text-decoration-none" style="color: #000; font-weight: 600">www.consumerhalla.com</a>
                  </div>
                </b-col>

                <b-col md="6">

                </b-col>
                <b-col md="4" class="newpost_ mt-1  justify-content-center">
              <b-form-group class="newpost mt-3">
                <button class=" mt-2 btn-sacademy" v-b-modal.modal-xl style="font-size: 16px" type="submit" value="Send">Update</button>
              </b-form-group>
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
import UserResponse from "@/components/UserResponse.vue"
export default {
    layout: "dashlayout",
    component: {UserResponse},
}
</script>


<style scoped>


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

.email-setting {
  background: #0083CA;
}
.email-setting1 {
  background: #C4C4C4;
}

.email-setting p,
.email-setting1 p
 {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
align-items: center;
text-align: center;
color: #FFFFFF;
}

.email-tittle{
  border: 1px solid rgba(14, 10, 10, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: hidden;
  overflow-y: scroll;
  height: 300px;
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
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 100%;
    padding: 10px 0px 10px;
    border: 0;
    border-radius: 25px;
}

@import url(~/assets/css/stylee.css);
</style>
