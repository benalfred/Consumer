<template>
  <div>

        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
            <b-row>
            <b-col md="6">
                 <h1 class="">Technology <span style="font-size: 24px;">at its very best</span></h1>
           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </b-col>
            <b-col md="6" class="text-end">

            </b-col>


          <agegender />


            </b-row>


       </div>
        </div>
        </div>

  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import agegender from "@/components/agegender.vue"
import UserResponse from "@/components/UserResponse.vue"
export default {
    layout: "dashlayout",
    component: {UserResponse, agegender},

     mounted() {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  },
}
</script>


<style scoped>

.container-fluid::-webkit-scrollbar {
  width: 5px;
  border-radius: 50px;
}

.container-fluid{
  overflow-x: hidden;
}

.container-fluid::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

.container-fluid::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.container-fluid::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.text-head {
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 36px;
color: #626D73;
}

.age {
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
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
 font-family: 'Poppins', sans-serif;
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
