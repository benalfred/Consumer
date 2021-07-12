<template>
  <div>
    <div class="container mt-4" style="overflow-x: hidden!important;">
      <b-row>
        <b-col md="6" class="mt-4">
          <div class="age p-5">
            <span
              class="text-center text-white"
              style="
                left: calc(103% - 83.93px / 2 - 55.52px);
                top: 30px;
                background: #e57718;
                position: absolute;
                width: 70.93px;
                height: 28px;
              "
              >AGE</span
            >
            <div class="d-flex">
              <div class="pt-5">
                <img src="~/assets/img/vector6.png" alt="" />
              </div>
              <h6 class="text-head pb-2 mt-5">Opinions most popular with Millenials</h6>
            </div>
            <p
              class="pb-4"

            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="d-lg-flex mt-4">
              <div class="col-md-3 pt-5 mt-4 text-para">
                <p>mILLENIAL</p>

                <p>GENERATION</p>
                <div>
                  <!-- <img class="ml-4" src="~/assets/img/B.png" width="8" alt=""> -->
                  <p>BABY BOOMERS</p>
                </div>
              </div>

              <img
                class="pl-2 d-none d-sm-block"
                height="220"
                src="~/assets/img/line7.png"
                alt=""
              />

              <div class="col-md-3 text-p">
                <h6 class="text-center">Positive Opinion</h6>
                <p >{{ MillenialRating ? MillenialRating.PositivePercent : 0 }}%</p>
                <p data-aos="fade-up" >{{GenerationXRating ? GenerationXRating.PositivePercent : 0}}%</p>
                <p >{{BabyBoomRating ? BabyBoomRating.PositivePercent : 0}}%</p>
              </div>

              <img
                class="pl-2 d-none d-sm-block"
                height="220"
                src="~/assets/img/line7.png"
                alt=""
              />

              <div class="col-md-3 text-p">
                <h6 class="text-center">Negative Opinion</h6>
                <p > {{MillenialRating.NegativePercent}}%</p>
                <p >{{GenerationXRating.NegativePercent}}%</p>
                <p >{{BabyBoomRating.NegativePercent}}%</p>
              </div>

              <img
                class="pl-2 d-none d-sm-block"
                height="220"
                src="~/assets/img/line7.png"
                alt=""
              />

              <div class="col-md-3 text-p">
                <h6 class="text-center">Neutral Opinion</h6>
                <p >{{ MillenialRating.NeutralPercent}}%</p>
                <p >{{GenerationXRating.NeutralPercent}}%</p>
                <p >{{BabyBoomRating.NeutralPercent}}%</p>
              </div>
            </div>
          </div>
        </b-col>

        <b-col md="6" class="mt-4">
          <span
            class="text-center text-white pt-1"
            style="
              left: calc(101% - 83.93px / 2 - 55.52px);
              top: 26px;
              background: #00b5d3;
              position: absolute;
              width: 80.93px;
              height: 36px;
            "
            >GENDER</span
          >
          <div class="age p-5">
            <div class="d-flex">
              <div class="pt-4">
                <img src="~/assets/img/union.jpg" alt="" />
              </div>
              <h5 class="text-head pb-2 mt-5">Opinions most popular with Millenials</h5>
            </div>
            <p class="pb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="d-lg-flex mt-4">
              <div class="col-md-3 pt-5 mt-4 text-para">

                <p>Female</p>
                <div>
                  <!-- <img class="ml-4" src="~/assets/img/B.png" width="8" alt=""> -->
                  <p>Male</p>
                </div>
              </div>

              <img
                class="pl-2 d-none d-sm-block"
                height="220"
                src="~/assets/img/line7.png"
                alt=""
              />

              <div class="col-md-3 text-p">
                <h6 class="text-center">Positive Opinion</h6>
                <p >{{FemaleRating.PositivePercent}}%</p>
                <p >{{MaleRating.PositivePercent}}%</p>
              </div>

              <img
                class="pl-2 d-none d-sm-block"
                height="220"
                src="~/assets/img/line7.png"
                alt=""
              />

              <div class="col-md-3 text-p">
                <h6 class="text-center">Negative Opinion</h6>
                <p >{{FemaleRating.NegativePercent}}%</p>
                <p>{{MaleRating.NegativePercent}}%</p>
              </div>

              <img
                class="pl-2 d-none d-sm-block"
                height="220"
                src="~/assets/img/line7.png"
                alt=""
              />

              <div class="col-md-3 text-p">
                <h6 class="text-center">Neutral Opinion</h6>
                <p>{{FemaleRating.NeutralPercent}}%</p>
                <p>{{MaleRating.NeutralPercent}}%</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "agegender",
  props: {
    MillenialRating: {
      type: Object,
      default: () => {
        return {};
      },
    },
    GenerationXRating: {
      type: Object,
      default: () => {
        return {};
      },
    },
     BabyBoomRating: {
      type: Object,
      default: () => {
        return {};
      },
    },
     FemaleRating: {
      type: Object,
      default: () => {
        return {};
      },
    },
     MaleRating: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style scoped>
html {
  overflow-x: hidden!important;
}

.text-head {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #626d73;
}

.age {
  background-color: #fefefe;
    box-shadow: -1px 9px 18px rgb(21 11 35 / 10%);
    border-radius: 10px;

}

.age  {
  overflow: auto;
  height: 500px;
}


.age::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 70px;
}

.age::-webkit-scrollbar {
  width: 5px;
  border-radius: 50px;
}

.age::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.age::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.text-p p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
}
.text-para p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
}

.text-p span {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 124.4%;
  text-transform: uppercase;
  color: #373737;
}

.sector {
  background: #656565;
}
</style>
