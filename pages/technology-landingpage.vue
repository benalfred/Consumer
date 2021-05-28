<template>
  <div class="">
    <section class="">
      <b-container>
        <b-row class="justify-content-center pt-3">
        <div class="display-text d-lg-flex m-3  d-none d-sm-block">
            <nuxt-link to="" style="color: #E57718;">Technology</nuxt-link>
            <nuxt-link to="">Banking</nuxt-link>
            <nuxt-link to=""><p>Fashion</p></nuxt-link>
            <nuxt-link to="">Economy</nuxt-link>
        </div>
        </b-row>

        <b-row class="mb-3">
            <b-col md="12">
                <h4 class="text-center pb-1" data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="50">Here’s what Nigerian’s are saying about the Technology Industry</h4>
            </b-col>
            <b-col md="12" class="mt-3">
                <img src="~/assets/img/technologybg.png" class="img-fluid" alt="">

            </b-col>
        </b-row>

        <p>ConsumerHalla Overall Ratings (%)</p>

        <div class="row mb-1 pl-2">
          <div class="col-md-2 p-2" style="background: #E57718">
              <b-media>
                <template #aside>
                    <img src="~/assets/img/thumbs.png" class="img-fluid p-2 mt-4 ml-3 img1" alt="">
                </template>

                <div class="d-flex b-media">
                  <h6 class="pt-2 mt-1">20</h6>
                  <p class="ml-2 pt-4">Some <br> text</p>
                </div>
                </b-media>
        </div>

          <div class="col-md-2 p-2 ml-2" style="background: #07072F;">
              <b-media>
                <template #aside>
                    <img src="~/assets/img/thumbs.png" class="img-fluid p-2 mt-4 ml-2 img1" alt="">
                </template>

                <div class="d-flex b-media">
                  <h6 class="pt-2 mt-1">50</h6>
                  <p class="ml-1 pt-4">NEGATIVe <br> Opinion </p>
                </div>
                </b-media>
        </div>

          <div class="col-md-2 p-2 ml-2" style="background: #626D73;">
              <b-media>
                <template #aside>
                    <img src="~/assets/img/thumbs.png" class="img-fluid p-2 mt-4 ml-2 img1" alt="">
                </template>

                <div class="d-flex b-media">
                  <h6 class="pt-2 mt-1">40</h6>
                  <p class="ml-1 pt-4">NAGATIVE <br> Opinion </p>
                </div>
                </b-media>
        </div>

          <div class="col-md-2 p-2 ml-2" style="background: #00B5D3;">
              <b-media>
                <template #aside>
                    <img src="~/assets/img/thumbs.png" class="img-fluid p-2 mt-4 ml-2 img1" alt="">
                </template>

                <div class="d-flex b-media">
                  <h6 class="pt-2 mt-1">190</h6>
                  <p class="ml-1 pt-4">REVIES <br> SUBMITTED </p>
                </div>
                </b-media>
        </div>
        <div class="col-md-3">
            <p class="reviews-p ml-3 align-items-center">With over 200 reviews, here are the rating datas collated by consumerhalla </p>
        </div>
        </div>
        <div style="background: #07072F;" class="p-4 ml-0 row"></div>

      </b-container>
    </section>



  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import agegender from "@/components/agegender.vue"
import footer from "@/components/footer.vue"
export default {
  layout: "headerr",
  component: {agegender, footer},

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


.dell-card img{
    margin: 20px 0px 10px;
}

.img1 {
  background: #fff;
border-radius: 19.5px;
}

.b-media h6 {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
}

.b-media p {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 124.4%;
text-transform: uppercase;
color: #FFFFFF
}

.reviews-p {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 27px;
color: #656565;
}
</style>
