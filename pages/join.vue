<template>
  <div>
    <section class="pb-2">
      <b-container class="mt-3 pb-5 ">
        <div class=" mb-4 mx-0 justify-content-center">
         <h3 class="text-white text-center  pb-5 h3" data-aos="fade-in">Join the community today to share your opinions!</h3>
        </div>

        <b-row class=" justify-content-center ml-lg-5">
        <b-col md="6" class=" mb-5  d-flex justify-content-center ">
        <div class="login-form login-form_">
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

              <div class="text-center pt-2">
                <p class="terms">Already have an account? <a href="/login" class="a">Login in</a></p>
              </div>



              <!-- <div class="d-flex justify-content-end">
                <div>
                  <button class="bg-sea-blue  btn-lg btn mb-4 br-0" style="font-size: 11px"> SEND MESSAGE</button>
                </div>
              </div> -->


            </b-form>
          </div>
        </div>
        </b-col>

        <b-col md="6" class="mt-5 bmedia">
          <div class="mb-5 mt-3">
          <b-media data-aos="fade-right" data-aos-delay="50">
            <template #aside>
              <img src="~/assets/img/rectangle.png" class="img-fluid pt-3" alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white">Express your Opinion <br> about <span class="font-weight-bold">interesting <br> topics</span> </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>

        <div class="mb-5">
          <b-media data-aos="fade-right" data-aos-delay="150">
            <template #aside>
              <img src="~/assets/img/rectangle.png" class="img-fluid pt-2" alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white">Make your Opinion <br> <span class="font-weight-bold">speak loud </span> </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>

          <div class="mb-5">
          <b-media data-aos="fade-right" data-aos-delay="300">
            <template #aside>
              <img src="~/assets/img/rectangle.png" class="img-fluid pt-2" alt="">
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
.a {
  color: #E57718!important;
  font-weight: bold;
}

.h3 {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 33px;
line-height: 54px;
}

.contact-form h3 {
  font-size: 19px;
}

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
  background-color: white;
  color:  #000;
  border-radius: 0;
  border: 1px solid #A0A0A0;
  border-radius: 8px;
  padding: 1.2rem 1rem;
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
      width: 155%;
    padding: 10px 43px 20px;
    margin-left: -35px;
    position: relative;
    left: 20px;
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
    padding: 11px 0px 11px;
    border: 0;
    border-radius: 25px;
}

</style>

