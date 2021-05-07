<template>
  <div>
    <section class="pb-5">
      <b-container class="mt-5 pb-5">

        <b-row class="mx-0 justify-content-center">
          <b-col md="6" class=" mb-5">
        <div class="login-form login-form_ ">
         <div class="contact-form avenir pt-4 small raleway">
           <h3 class="text-center font-weight-bold mb-4 pb-2 pt-2">Create Password</h3>
            <b-form  @submit.prevent="sendEmail">
              <b-form-group>
                <b-form-input placeholder="password" name="user_password" type="text" id="password">

                </b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input placeholder="Comfirm Password" name="user_name" type="text" id="Comfirm-Password">

                </b-form-input>
              </b-form-group>


              <div class="d-flex mt-5 pt-5">
                <button class=" mt-5 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Back</button>

                <button class="next mt-5 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Next</button>
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


        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'headerr',
   data() {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange'],
      foods: ['Apple', 'mango', 'Grape', 'Kiwi', 'Orange'],
    }
  }
}
</script>

<style scoped>
.bmedia p{
  font-size: 20px;
}
section {

  padding: 7rem 1.5rem;
  min-height:(100vh - 0);
}

@media screen and (min-width: 800px) {
  section {
    background: #626D73;
  padding: 7rem 1.5rem;
  min-height:(100vh - 0);
  }
}

  .contact-form input, .contact-form textarea, .contact-form .form-control:focus {
  font-size: 15px;
  background-color: white;
  color:  #000;
  border-radius: 8px;
  border: 1px solid #A0A0A0;
  padding: 1.7rem 1rem;
  margin: 0px 0px 20px;
}

.next {
  margin-left: 120px;
}

.login-form {

  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 30px 30px #00000026;
  opacity: 1;

  padding: 10px 33px 20px;

}

@media screen and (max-width: 500px) {
  .login-form_ {
      width: 140%;
    padding: 10px 43px 20px;
    margin-left: -55px;
    margin-top: 30px;
  }
}

@media screen and (min-width: 900px) {
  .login-form_ {

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
    width: 35%;
    padding: 14px 0px 14px;
    border: 0;
    border-radius: 25px;
}

.login-form h3 {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
}
</style>

