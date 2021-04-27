<template>
  <div>
    <section class="pb-2">
      <b-container class="mt-3 pb-5 px-5 ml-lg-5">
        <div class=" mb-4">
         <h3 class="text-white text-center ml-lg-5 pb-5">Join the community today to share your opinions!</h3>
        </div>

        <b-row class="ml-lg-5">
          <b-col md="6" class=" mb-5 ml-md-5 ml-lg-5">
        <div class="login-form login-form_ ml-lg-5">
         <div class="contact-form avenir pt-4 small raleway">
           <h3 class="text-center font-weight-bold mb-4 pb-2 pt-2">Join now</h3>
            <b-form  @submit.prevent="sendEmail">
              <b-form-group>
                <b-form-input placeholder="first name" name="user_name" type="text" id="full-name">

                </b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input placeholder="last name" name="user_name" type="text" id="full-name">

                </b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input placeholder="email" type="email" name="user_email" id="email">

                </b-form-input>
              </b-form-group>
                <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1">
                 <p class="terms">I agree to  the Privacy Policy and Terms and Conditions</p>
                </b-form-checkbox>


              <b-form-group class="newpost">
                <button class=" mt-2 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Join with email</button>
              </b-form-group>



              <!-- <div class="d-flex justify-content-end">
                <div>
                  <button class="bg-sea-blue  btn-lg btn mb-4 br-0" style="font-size: 11px"> SEND MESSAGE</button>
                </div>
              </div> -->


            </b-form>
          </div>
        </div>
        </b-col>

        <b-col class="ml-2 mt-5 bmedia ml-lg-2">
          <div class="mb-5">
          <b-media>
            <template #aside>
              <img src="~/assets/img/Rectangle.png" class="img-fluid pt-3" alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white">Express your Opinion <br> about <span class="font-weight-bold">interesting <br> topics</span> </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>

          <div class="mb-5">
          <b-media>
            <template #aside>
              <img src="~/assets/img/Rectangle.png" class="img-fluid pt-2" alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white">Make your Opinion <br> <span class="font-weight-bold">speak loud </span> </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>

          <div class="mb-5">
          <b-media>
            <template #aside>
              <img src="~/assets/img/Rectangle.png" class="img-fluid pt-2" alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white ">Earn well while <br> <span class="font-weight-bold"> you share</span> </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>
        </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'headerr',
}
</script>

<style scoped>
.bmedia p{
  font-size: 20px;
}
section {
   /* background: #373737; */
   background: #e48c3e;
  padding: 7rem 1.5rem;
  min-height:(100vh - 0);
}
  .contact-form input, .contact-form textarea, .contact-form .form-control:focus {
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  color:  #000;
  border-radius: 0;
  border: none;
  border-radius: 8px;
  padding: 1.7rem 1rem;
  margin: 0px 0px 8px;
}

.login-form {
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 30px 30px #00000026;
  opacity: 1;
  width: 85%;
  padding: 10px 43px 20px;

}

@media screen and (max-width: 500px) {
  .login-form_ {
      width: 135%;
    padding: 10px 43px 20px;
    margin-left: -45px;
  }
}

.log {
  background: transparent linear-gradient(0deg, #E22A6F 0%, #FE6666 100%) 0% 0% no-repeat padding-box;
opacity: 1;
}

.btn-sacademy {
    color: #fff !important;
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 100%;
    padding: 17px 0px 17px;
    border: 0;
    border-radius: 25px;
}

</style>

