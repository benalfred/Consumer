<template>
  <div>
    <section id="hero" class="hero d-flex align-items-center">
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Explore what Nigerians are saying</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              We consumerHalla are team of talented people making things easy
              for you with Our idea
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-lg-start">
                <a
                  href="#"
                  class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span v-b-modal.comingsoon>Get Started</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="~/assets/img/heroimg.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

     <b-modal id="comingsoon" hide-footer header-bg-variant="light" centered body-bg-variant="light">

           <b-container>
      <b-row>
        <b-col md="6">
          <h4 class="font-weight-bold">Refer a friend</h4>
        </b-col>
        <b-col md="6" class=" d-flex justify-content-end">
          <i style="cursor: pointer" class="fas fa-times-circle fa-2x"></i>
        </b-col>
        <b-col md="12">
           <div
               style="border-radius:79px; margin-bottom: 1rem; background-color:  #626D73; height: 1px" class="mt-3">
          </div>
          <p>For every friend reffered, you gain an additional 10 points</p>
          <p style="font-size: 13px">Insert email address in field below to refer a friend</p>

        </b-col>

        <b-col md="8">
          <div>
            <div class="mt-1">
                  <b-form-input list="input-list" id="input-with-list" style="font-size: 13px" placeholder="email, comma seperated "></b-form-input>
                  <b-form-datalist id="input-list" :options="options"></b-form-datalist>
            </div>
          </div>
        </b-col>
        <b-col md="4" class="newpost_">
              <b-form-group class="newpost mt-1">
                <button class=" btn-sacademy_" style="font-size: 16px" type="submit" value="Send">Send invite</button>
              </b-form-group>
        </b-col>

        <b-col>
           <p style="font-size: 13px" class="pt-4">Previously refered friends listed below:</p>
        </b-col>
      </b-row>
          </b-container>

    <b-container class="mt-5">
      <b-row class="d-flex">
        <b-col md="6" class="d-flex">
          <img src="~/assets/img/Ellipse7.png" class="img-fluid" />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
        <b-col md="6" class="d-flex">
          <img src="~/assets/img/Ellipse8.png" class="img-fluid"  />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
        <b-col md="6" class="d-flex mt-4">
          <img src="~/assets/img/Ellipse7.png" class="img-fluid" />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
        <b-col md="6" class="d-flex mt-4">
          <img src="~/assets/img/Ellipse9.png" class="img-fluid" />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
      </b-row>
    </b-container>
        </b-modal>

    <main id="main">

      <!-- ======= Why Us Section ======= -->
      <section id="values" class="values">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Our Values</h2>
            <p>No 1 advocacy platform in nigeria</p>
          </header>

          <div class="row">
            <div class="col-lg-4">
              <div class="box_" data-aos="fade-up" data-aos-delay="200">
                <img src="~/assets/img/values-1.png" class="img-fluid" alt="" />
                <h3>Relationship</h3>
                <p>
                 Consumerhalla values and helps you strengthen existing business relationships between brands and consumers.
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box_" data-aos="fade-up" data-aos-delay="400">
                <img src="~/assets/img/values-2.png" class="img-fluid" alt="" />
                <h3>Business growth or publishing</h3>
                <p>
                 Consumerhalla values and helps you grow your business by Publishing/Advert through different avenues the platform offers
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box_" data-aos="fade-up" data-aos-delay="600">
                <img src="~/assets/img/values-3.png" class="img-fluid" alt="" />
                <h3>Your voice is our topmost priority</h3>
                <p>
              Quick resolution of complaint and issues are our top most priority.
                  <span style="color: #e57718" class="font-weight-bold"
                    > At Consumer Halla, we make your voice count</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End value Section -->

      <section id="features" class="features">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Features</h2>
            <p>Technology at it very best</p>
          </header>

          <div class="row">
            <div class="col-lg-6">
              <img src="~/assets/img/features.png" class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div class="row align-self-center gy-4">
                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>We Are Fast</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>We Are Trusted</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>We Respond Fast</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>We listen</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>We are always available</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>We Are Consumer Halla.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / row -->
        </div>
      </section>


      <section class="py-5">
        <div class="container">
          <div class="d-flex justify-content-end">

          <div>
            <h3 data-aos="fade-left" data-aos-offset="30">What We Offer You</h3>
            <div data-aos="fade-left" data-aos-offset="50" class="d-flex justify-content-end">
              <div
                style="width: 100px; border-radius:79px; margin-bottom: 1rem; background-color: #e57718; height: 8px"></div>
            </div>
          </div>
          </div>

          <div class="n-shadow my-5">
                  <div class="accordion" role="tablist">
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-1 variant="light"
                          >Real Time Advert Of Your Product For Business Growth</b-button
                        >
                      </b-card-header>
                      <b-collapse
                        id="accordion-1"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
                          <b-card-text>
                            {{ text }}
                            <code
                              ><nuxt-link to="/" target="_blank"
                                >Advert</nuxt-link
                              ></code
                            >
                            and
                            <code
                              ><nuxt-link
                                to="/"
                                target="_blank"
                                >Advertise Your Product</nuxt-link
                              ></code
                            >
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-2 variant="light"
                          >Latest Deals Best suited for you</b-button
                        >
                      </b-card-header>
                      <b-collapse
                        id="accordion-2"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            {{ text }}
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-3 variant="light"
                          >Flexibility
                        </b-button>
                      </b-card-header>
                      <b-collapse
                        id="accordion-3"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            {{ text }}
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-4 variant="light"
                          >Guaranteed User Experience</b-button
                        >
                      </b-card-header>
                      <b-collapse
                        id="accordion-4"
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text>
                            {{ text }}
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </div>

        </div>
      </section>





    <!-- <div class="container">
        <h2 class="bank">Banking</h2>
          <div data-aos="fade-right" data-aos-offset="50" class="d-flex justify-content-start">
              <div
                style="width: 90px; border-radius:79px; margin-bottom: 1rem; background-color: #E57718; height: 8px"></div>
            </div>
    </div> -->



    <div class="container">
        <h2 class="tech">Banking</h2>
          <div data-aos="fade-right" data-aos-offset="50" class="d-flex justify-content-start">
              <div
                style="width: 90px; border-radius:79px; margin-bottom: 1rem; background-color: #E57718; height: 8px"></div>
            </div>
    </div>

      <section id="clients" class="clients  mb-5 section-bg">
        <carousel
        class="container"
          :autoplay="true"
          :nav="false"
          :autoplayTimeout="800"
          :autoHeight="true"
          :slideSpeed="100"
          :items="9"
          :loop="true"
        >
          <img
            src="~/assets/img/GTBank.png"
            class=""
            style="width:30%;border:"
          />
          <img
            src="~/assets/img/Zenithbank.png"
            style="width:30%;border"
            class=""
          />
          <img
            src="~/assets/img/GTBank.png"
            style="width:30%;"
            class="border-radius:rounded"
          />
          <img
            src="~/assets/img/Zenithbank.png"
            style="width:30%;border"
            class=""
          />
          <img
            src="~/assets/img/GTBank.png"
            style="width:30%;border"
            class=""
          />
          <img
            src="~/assets/img/Zenithbank.png"
            style="width:30%;border"
            class
          />
        </carousel>
      </section>



       <div class="container">
        <h2 class="tech mt-5">Technology</h2>
        <div data-aos="fade-right" data-aos-offset="50" class="d-flex justify-content-start">
              <div
                style="width: 100px; border-radius:79px; margin-bottom: 1rem; background-color: #E57718; height: 8px"></div>
            </div>
       </div>

        <section id="clients" class="clients clients_ mt-2 section-bg">
          <div class="container">
            <div class="row">

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center col1" data-aos="zoom-in">
                <img src="~/assets/img/Dell.png" class="img-fluid" alt="">
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center col2" data-aos="zoom-in">
                <img src="~/assets/img/Dell.png" class="img-fluid" alt="">
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center col3" data-aos="zoom-in">
                <img src="~/assets/img/Dell.png" class="img-fluid" alt="">
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center col4" data-aos="zoom-in">
                <img src="~/assets/img/Dell.png" class="img-fluid" alt="">
              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center col5" data-aos="zoom-in">

                <img src="~/assets/img/Dell.png" class="img-fluid" alt="">

              </div>

              <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center col6" data-aos="zoom-in">
                <img src="~/assets/img/Dell.png" class="img-fluid" alt="">
              </div>

            </div>
          </div>
        </section>

      <div class="mt-5 mb-5">
        <div id="footer" class="footer mt-5 p-5">
          <div class="footer-newsletter">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                  <h4 class="pb-3">Share Opinion</h4>
                  <p>
                    Share your own opinion and earn up to
                    <span style="color: #e57718">100 points </span> to get a
                    gift
                  </p>
                </div>
                <div class="col-lg-6">
                  <form action="" method="post">
                    <input type="email" name="email" /><input
                      type="submit"
                      value="Share your Opinion"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ======= Trainers Section ======= -->
      <!-- <section id="trainers" class="trainers">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Banking</h2>

        </div>

        <div class="row media1">
          <b-media class="pt-1 col-md-2 b-media" data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="700">
          <template #aside>
            <img src="~/assets/img/zenith.png" width="37" class="img-fluid rounded-circle ellipse" alt="">
          </template>
          <div class="">
          <p class="text-header dell text-left pl-5">Zenith Bank</p>
          </div>
          </b-media>

          <b-media class="pt-1 col-md-2 b-media"  data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="750">
          <template #aside>
            <img src="~/assets/img/gtb.png" width="38" class="img-fluid rounded-circle ellipse" alt="">
          </template>
          <div class="">
          <p class="text-header dell text-left pl-5">GT Bank</p>
          </div>
          </b-media>

           <b-media class="pt-1 col-md-2 b-media"  data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="800">
          <template #aside>
            <img src="~/assets/img/zenith.png" width="37" class="img-fluid rounded-circle ellipse" alt="">
          </template>
          <div class="">
          <p class="text-header dell text-left pl-5">Zenith Bank</p>
          </div>
          </b-media>

          <b-media class="pt-1 col-md-2 b-media"  data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="850">
          <template #aside>
            <img src="~/assets/img/gtb.png" width="38" class="img-fluid rounded-circle ellipse" alt="">
          </template>
          <div class="">
          <p class="text-header dell text-left pl-5">GT Bank</p>
          </div>
          </b-media>

          <b-media class="pt-1 col-md-2 b-media"  data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="900">
          <template #aside>
            <img src="~/assets/img/zenith.png" width="37" class="img-fluid rounded-circle ellipse" alt="">
          </template>
          <div class="">
          <p class="text-header dell text-left pl-5">Zenith Bank</p>
          </div>
          </b-media>

           <b-media class="pt-1 col-md-2 b-media"  data-aos="fade-up" data-aos-offset="30"
                       data-aos-delay="950">
          <template #aside>
            <img src="~/assets/img/gtb.png" width="38" class="img-fluid rounded-circle ellipse" alt="">
          </template>
          <div class="">
          <p class="text-header dell text-left pl-5">GT Bank</p>
          </div>
          </b-media>
        </div>

      </div>
    </section>End Trainers Section -->

      <!-- <section style="background: #373737; margin-top: 50px" class="container pt-5 mb-5 pb-5">
      <b-container>
          <b-row>
            <b-col md="12">
              <h3 class="h3_ text-center">Share your own opinion and earn up to <span style="color: #E57718;">100 points </span> to get a gift </h3>
              <p class="text-header text-center text-white pt-3">You can refer people to share their opinions and earn points</p>
            </b-col>
          </b-row>

          <div class="ml-4 pl-5 mt-3 row text-header btnshift">
            <b-col md="10" class="justify-content-center ml-lg-5 mb-3 pl-lg-5">
              <a href="/contact-us" class="btn btn-sacademyy pt-2 ml-lg-3" role="button">Share your Opinion</a>
              <a href="/contact-us" class="btn btn-sacademyy pt-2 ml-lg-5" role="button">Share your Opinion</a>
            </b-col>

            <b-col md="12" class="mt-4 ml-md-5 pl-md-5">
              <div class="ml-md-5 pl-md-5">
                <a href="/contact-us" class="btn btn-academyy pt-2 ml-lg-5" role="button">Share your Opinion</a>
              </div>
            </b-col>
          </div>
      </b-container>
      </section> -->
    </main>
    <!-- End #main -->
    <footer />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import footer from '~/components/footer';
export default {
  components: {
    carousel: () =>
      process.client
        ? import("vue-owl-carousel")
        : Promise.resolve({ render: (h) => h("div") }),
        footer
  },
  mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },

  data() {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange'],
      slide: 0,
      sliding: null,
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore.
        `,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
 .btn-sacademy_ {
    color: #fff !important;
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 100%;
    padding: 5px 0px 7px;
    border: 0;
    border-radius: 25px;
}
.col1 img{
  border-radius: 50px;
  background: #0083CA;
  padding: 6px 5px 6px;
}
.col2 img{
  border-radius: 50px;
  background: #F1138B 87%;
  padding: 6px 5px 6px;
}
.col3 img{
  background: #626D73;
  padding: 6px 5px 6px;
  border-radius: 50px;
}
.col3 img{
  background: #626D73;
  padding: 6px 5px 6px;
  border-radius: 50px;
}
.col3 img{
   background: #E57718;
  padding: 6px 5px 6px;
  border-radius: 50px;
}
.col4 img{
  background: #626D73;
  padding: 6px 5px 6px;
  border-radius: 50px;
}
.col5 img{
 background: #0083CA;
  padding: 6px 5px 6px;
  border-radius: 50px;
}
.col6 img{
  background: #626D73;
  padding: 6px 5px 6px;
  border-radius: 50px;
}

.values .box_ {
  padding: 30px;
  box-shadow: 0px 0 5px rgba(1, 41, 112, 0.08);
  text-align: center;
  transition: 0.3s;
  height: 100%;
}

.values .box_ img {
  padding: 30px 50px;
  transition: 0.5s;
  transform: scale(1.1);
}

.values .box_ h3 {
  font-size: 24px;
  color: #000;
  font-weight: 700;
  margin-bottom: 18px;
}

.values .box_:hover {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
}

.values .box_:hover img {
  transform: scale(1);
}

.dell {
  background: #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 50px 50px 0px;
  padding: 6px 0px 6px;
}

.ellipse {
  position: absolute;
  left: 20px;
}

.b-media {
  margin: 0px;
}

.media1 img {
  background: #ffdfc4;
  padding: 3px 7px 5px;
}

.btn-sacademyy {
  color: #fff !important;
  border-radius: 50px;
  background-color: #656565;
  padding: 4px 50px 7px;
}
.btn-academyy {
  color: #fff !important;
  border-radius: 50px;
  background-color: #e57718;
  padding: 4px 50px 7px;
}
.text-header {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
}
.h3_ {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
}

@media screen and (min-width: 1100px) {
  .btnshift {
    position: relative;
    left: 100px;
    padding-bottom: 10px;
  }
}
</style>
