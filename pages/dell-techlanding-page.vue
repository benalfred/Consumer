<template>
  <div class="">
    <section class="bg">
      <b-container>
       <SecNav />
        <b-row>
            <b-col md="12">
                <h4 class="text-center pb-1" data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="50">Here’s what Nigerian’s are saying about the Technology Industry</h4>
            </b-col>
            <b-col md="12" class="mt-3">
                <img src="~/assets/img/dellbg.png" class="img-fluid" alt="">
                <div style="background: #0083CA;" class="p-2"></div>
            </b-col>
        </b-row>
      </b-container>
    </section>

    <b-container class="mb-5 second-con">

        <b-row class="mt-5 pt-5 d-lg-flex">
            <b-col md="5">
                <p class="header-p" data-aos="fade-right" data-aos-offset="30"
                       data-aos-delay="50">Dell Technology</p>
                <p class="pt-3 dell-p" data-aos="fade-right" data-aos-offset="30"
                       data-aos-delay="200">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                 <b-form-group class="newpost mt-3" data-aos="fade-right" data-aos-offset="30"
                       data-aos-delay="300">
                <button class=" mt-2 btn-sacademy" v-b-modal.modal-xl style="font-size: 16px" type="submit" value="Send">Share your Opinion</button>
              </b-form-group>
            </b-col>

            <b-col class="md-1">

            </b-col>

                <b-col md="5" class="dell-card" >
              <p class="pb-3 header-p">OTHER POPULAR TECHNOLOGIES</p>
                     <div class="d-flex_ row p-5" data-aos="flip-right">
                    <div class="col-md-3 ">
                            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-3">
                            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-3">
                            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-3">
                            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-3">
                            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-3">
                            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-3">
                            <img src="~/assets/img/dell-icon.png" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-3">
                        <button class="btn"> <img src="~/assets/img/viewall.png" class="img-fluid pt-2" alt=""> </button>
                    </div>
                  </div>
                 </b-col>

        </b-row>



      </b-container>

      <agegender />
      <Footer />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import SecNav from "@/components/SecNav.vue"
import agegender from "@/components/agegender.vue"
import footer from "@/components/footer.vue"
export default {
  layout: "headerr",
  component: {agegender, footer, SecNav},

   mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },

};
</script>

<style scoped>
@media screen and (min-width: 720px) {
    .bg{
height: 65vh;
  background: #FFDFC4;
}
.second-con {
  margin-top: 320px;
}
}
h4 {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 44px;
text-align: center;
color: #373737;
}

.header-p {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 60px;
color: #626D73;
}

.dell-p {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
color: #000000;
}

.display-text a{
  padding: 0px 25px 0px;
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
text-decoration: none;
text-align: center;
color: #373737;
}

  .btn-sacademy {
    color: #fff !important;
    background: #E57718;
    box-shadow: 0px 20px 10px #00000026;
    opacity: 1;
    width: 60%;
    padding: 12px 0px 12px;
    border: 0;
    border-radius: 25px;
}

.d-flex_  {
  background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
box-sizing: border-box;
box-shadow: 0px -1px 37px rgba(0, 0, 0, 0.05);
border-radius: 10px;
}


.dell-card img{
    margin: 20px 0px 10px;
}

</style>
