<template>
  <div>

        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
            <b-row>
            <b-col md="6">
                  <div class="email-setting1 p-3">
                      <p class="pt-2">Review Setting</p>
                  </div>
              </b-col>
              <b-col md="6">
                  <div class="email-setting p-3">
                      <p class="pt-2">Email Setting</p>
                  </div>
              </b-col>
            </b-row>

            <b-row class="mt-5 ">
            <b-col md="3">
              <div class="d-flex">
                   <div class="emoji ">
              <p>😡</p>
            </div>
                    <b-form-input class="mt-2 ml-4" v-model="text" placeholder="Very bad"></b-form-input>
              </div>

              <div class="d-flex">
                   <div class="emoji ">
              <p>😞</p>
            </div>
                    <b-form-input class="mt-2 ml-4" v-model="text" placeholder="Bad"></b-form-input>
              </div>

              <div class="d-flex">
                   <div class="emoji ">
              <p>😑</p>
            </div>
                    <b-form-input class="mt-2 ml-4" v-model="text" placeholder="Fair"></b-form-input>
              </div>

              <div class="d-flex">
                   <div class="emoji ">
              <p>😊</p>
            </div>
                    <b-form-input class="mt-2 ml-4" v-model="text" placeholder="Good"></b-form-input>
              </div>

              <div class="d-flex">
                   <div class="emoji ">
              <p>😍</p>
            </div>
                    <b-form-input class="mt-2 ml-4" v-model="text" placeholder="Very Good"></b-form-input>
              </div>
              </b-col>

              <b-col md="3" class="review pl-lg-4">
                  <p>No. of Opinion to Display</p>
                  <p>Dispaly by</p>
                  <p>Date Format</p>
                  <p>View Additional Opinion</p>
              </b-col>

              <b-col md="2" style="position: relative; left: 20px">
                   <b-form-group class="mb-2">
                    <div class="form-group">
                      <v-select

                        placeholder="3"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                   <b-form-group class="mb-2">
                    <div class="form-group">
                      <v-select

                        placeholder="Data Created"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                   <b-form-group class="mb-2">
                    <div class="form-group">
                      <v-select

                        placeholder="Day Month Year"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                   <b-form-group class="mb-2">
                    <div class="form-group">
                      <v-select

                        placeholder="Yes"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>
              </b-col>

              <b-col md="2" class="pl-5 form-select">
              <h6 style="font-weight: 600; color: #626D73;" class="pb-3">Set Age range</h6>
                   <b-form-group class="">
                    <div class="form-group">
                    <label for="">Millenials</label>
                      <v-select
                        placeholder="3"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>

                   <b-form-group class="mb-2">
                    <div class="form-group">
                        <label for="">Millenials</label>
                      <v-select class="v-select"
                        placeholder="3"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>
              </b-col>

              <b-col md="2">
                   <b-form-group class="mb-2 form-select">
                    <div class="form-group">
                      <v-select

                        placeholder="3"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-center">
              <b-col md="4" class="newpost_ mt-1  justify-content-center">
              <b-form-group class="newpost mt-3">
                <button class=" mt-2 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Update</button>
              </b-form-group>
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
.emoji p {
  font-size: 34px;
  cursor: pointer;
}
.review p{
  line-height: 55px;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
display: flex;
align-items: center;
color: #626D73;
}

.form-group {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 27px;
align-items: center;
color: #626D73;
}

.form-select{
  width: 120px;
}

@media screen and (min-width: 700px) {
    .form-select {
        position: relative; left: 40px
    }
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


</style>
