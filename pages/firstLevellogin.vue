<template>
  <div class="">
    <section class="bg">
      <b-container class="mt-3">
        <b-row class="mx-0 justify-content-center">
          <b-col md="5" class=" mb-5">
        <div class="login-form login-form_ " data-aos="fade-up">
         <div class="contact-form avenir pt-4 small raleway">
           <h3 class="text-center font-weight-bold mb-4 pb-4 pt-4">Login to your account</h3>
            <b-form  @submit.prevent="sendEmail">
              <b-form-group>
                <b-form-input placeholder="Email" name="user_email" type="text" id="email">

                </b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input placeholder="Password" name="user_password" type="text" id="password">

                </b-form-input>
              </b-form-group>

              <b-form-group class="newpost mb-5 pb-5">
                <button class=" mt-2 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Continue</button>
              </b-form-group>

            </b-form>
          </div>
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
  /* background: #E57718; */
  padding: 7rem 1.5rem;
  min-height:(100vh - 0);
}

.bg {
  background-image: url('~assets/img/bg.png');
}

  .contact-form input, .contact-form textarea, .contact-form .form-control:focus {
  font-size: 15px;
  background-color: white;
  color:  #000;
  border-radius: 0;
  border: 1px solid #A0A0A0;
  border-radius: 8px;
  padding: 1.7rem 1rem;
  margin: 0px 0px 8px;
}

.contact-form h3 {
  font-size: 19px;
}

.login-form {
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 30px 30px #00000026;
  opacity: 1;
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
    padding: 13px 0px 13px;
    border: 0;
    border-radius: 25px;
}

.a {
  color: #E57718!important;
  font-weight: bold;
}

</style>

