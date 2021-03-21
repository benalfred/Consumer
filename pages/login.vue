<template>
  <div>
    <section class="pb-5">
      <b-container class="mt-3 pb-5 px-5 ml-5">
        <div class=" mb-4">
         <h3 class="text-white ml-lg-5 pl-lg-5 pb-5">Join the community today to share your opinions!</h3>
        </div>

        <b-row>
          <b-col md="6" class=" mb-5">
        <div class="login-form">
         <div class="contact-form avenir pt-4 small raleway">
           <h3 class="text-center font-weight-bold mb-4 pb-2 pt-2">Login</h3>
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
                 <p class="pt-1">Stay Logged In</p>
                </b-form-checkbox>


              <b-form-group class="newpost">
                <button class=" mt-2 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Login</button>
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

        <b-col class="ml-2 mt-5 bmedia">
          <div class="mb-5">
          <b-media>
            <template #aside>
              <img src="~/assets/img/Rectangle.png" class="img-fluid " alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white pt-2">Express your Opinion <br> about <span class="font-weight-bold">interesting <br> topics</span> </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>

          <div class="mb-5">
          <b-media>
            <template #aside>
              <img src="~/assets/img/Rectangle.png" class="img-fluid " alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white pt-2">Make your Opinion <br> <span class="font-weight-bold">speak loud </span> </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>
        </div>

          <div class="mb-5">
          <b-media>
            <template #aside>
              <img src="~/assets/img/Rectangle.png" class="img-fluid " alt="">
            </template>

            <h2 class="text-white"></h2>
            <p class="text-white pt-2">Earn well while <br> <span class="font-weight-bold"> you share</span> </p>

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

}
</script>

<style scoped>
.bmedia p{
  font-size: 20px;
}
section {
   background: #373737;
  padding: 7rem 1.5rem;
  min-height:(100vh - 0);
}
  .contact-form input, .contact-form textarea, .contact-form .form-control:focus {
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  color:  #000;
  border-radius: 0;
  border: none;
  padding: 1.7rem 1rem;
  margin: 0px 0px 8px;
}

.login-form {
  background: #faf8f8 0% 0% no-repeat padding-box;
  box-shadow: 0px 30px 30px #00000026;
  opacity: 1;
  width: 85%;
  padding: 10px 43px 20px;
   margin-left: 50px;
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
}
</style>

