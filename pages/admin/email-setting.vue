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
                  <div class="email-setting1 p-3">
                      <p class="pt-2">Review Setting</p>
                  </div>
              </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col md="6">
                    <h3>Configure Email Template</h3>
                    <p class="pt-3"> Here is an email configuration theme that gives flexibility to email settings</p>

                    <div class="mt-5">
                       <b-form-group>
                    <div class="form-group">
                    <label for="" class="text-dark" style="font-weight: 700" >Choose email template</label>
                      <v-select

                        placeholder="select state"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                       <b-form-group>
                    <div class="form-group">
                    <label for="" class="text-dark" style="font-weight: 700" >Choose address format</label>
                      <v-select

                        placeholder="select state"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>
                    </div>
                </b-col>

                <b-col md="5" class="mt-4">
                  <h6 class="pt-4 mt-3" style="color: #000; font-weight: 600">Password generation email</h6>
                  <div class="mt-3 email-tittle p-3">
                      <h6 class="mt-2 font-weight-bold" style="color: #000;">Email tittle</h6>
                      <p class="pt-3">Dear [[Lastname]] [[Firstname]],</p>
                      <p>Your acccount to Consumerhalla with the email address [[email-address]] has been successfully set up. Please, use the password <span class="font-weight-bold" style="color: #000">XMG_2VxLB</span> to login into your account for the first time.</p>

                      <p class="mt-4">Warm Regards</p>
                      <a href="www.consumerhalla.com" class="mt-1 text-decoration-none" style="color: #000; font-weight: 600">www.consumerhalla.com</a>
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
  border: 1px solid #626D73;
  overflow: hidden;
  overflow-y: scroll;
  height: 300px;
  scrollbar-width: thin;
}
</style>
