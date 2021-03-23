<template>
  <div class="mb-5">
      <div class="px-5">
      <b-container>
        <b-row>
          <b-col md="7" class="mt-5" data-aos="fade-left" data-aos-offset="30"
                       data-aos-delay="700">
              <img src="~/assets/img/Logo.png" class="img-fluid " alt="">
              <h4 class="h4 pt-5 font-weight-bold" style="color: #E57718;" data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="750">About CONSUMERHALLA</h4>
              <p class="consumer-text pt-3" data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="800">"An Advocacy platform aimed at enhancing relationship between consumers and brands. "</p>
              <div class="row mt-5 ml-1 icons_">
              <div class="icons">
                <img src="~/assets/img/facebook.png" width="15" class="img-fluid " alt="">
              </div>

              <div class="icons ml-3">
                <img src="~/assets/img/twitter.png" width="15" class="img-fluid " alt="">
              </div>

              <div class="icons ml-3">
                <img src="~/assets/img/instagram.png" width="15" class="img-fluid " alt="">
              </div>
              </div>
          </b-col>

        <div class="pl-5 sectors">
          <b-col md="5" class="pl-5 mb-5 d-sm-none d-md-block text-header" style="margin-top: 160px; position: relative; left: 40px">
            <p style="color: #E57718; font-weight: bold">Sectors</p>
            <p>Technology</p>
            <p>Banking</p>
            <p>Fashion</p>
            <p>Economy</p>
          </b-col>
        </div>
        </b-row>
      </b-container>
      </div>

      <div class="px-5 mb-5">
      <b-container>
        <b-row>
           <b-col md="12">
               <div class="line mr-5 mt-4 mb-4" style=" width: 835px; border-radius:79px; position: absolute; background-color: #656565; height: 1px"></div>
          </b-col>
        </b-row>
      </b-container>
      </div>
  </div>
</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {

      mounted() {
          AOS.init({
          offset: 100,
          duration: 1000
        })
      }


}
</script>


