<template>
  <header>
    <b-navbar toggleable="lg">
      <div class="container">
      <b-navbar-brand to="/">
        <img src="~/assets/img/logo.png" class="img-fluid " alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="mx-auto">

      </b-navbar-nav>


        <b-navbar-nav class="ml-auto">




            <li class=" cursor-pointer mr-3 mt-lg-4">
                            <nuxt-link v-if="!$auth.loggedIn" class="" to="/join">
                                <span class="join py-1 px-4 text-white join"
                                      >Join</span>
                            </nuxt-link>
                        </li>
                        <li class="cursor-pointer action-btn ml-lg-auto mt-4 mr-3" v-if="!$auth.loggedIn">
                            <nuxt-link class="sub navigation-link" to="/login">
                                <span class="py-1 px-4 text-white"
                                      style="background-color: #E57718; text-decoration: none;">Login  <img src="~/assets/img/vector4.png" class="img-fluid pl-2" width="22" alt=""> </span>
                            </nuxt-link>
                            <!-- <nuxt-link class="sub navigation-link" to="/login">
                                <span class="py-1 px-4 text-white"
                                      style="background-color: #E57718">Logout <img src="~/assets/img/vector4.png" class="img-fluid pl-2"  width="22" alt="">  </span>
                            </nuxt-link> -->
                        </li>
                         <li>
                            <ImageDropdown class="nav-hide-mob "/>
             </li>

        </b-navbar-nav>
      </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
import CartComponent from "./CartComponent";
import ImageDropdown from "./ImageDropdown"

  export default{
    name:"headerComponent",
    component: {CartComponent, ImageDropdown},
    mounted() {
      if (process.client){
        window.onscroll = function () {
          OffSetTop()
        };
      }

      function OffSetTop() {
        if (process.client) {
          let header = document.querySelector(".navbar");
          let sticky = header.offsetTop;
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }
      }
    },

  }
</script>

<style scoped>
header {
   width: 100%;
        height: 80px;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #E57718;
}

.navbar-light .navbar-nav .nav-link {
    color: #000;
    font-weight: 500;
    font-size: 20px;
}

.active {
  color: #E57718;
}

 .sub {

        color: #094063;
        position: relative;

        font-size: 14px;
        text-transform: capitalize;
        -webkit-transition: color 650ms;
        -o-transition: color 650ms;
        transition: color 650ms;
    }

 .action-btn span {
            border-radius: 50px;
            -webkit-box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
            box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
    }

.btn-sacademy {
    background-color:  #E57718 !important;
    color: #fff !important;
    transition: 0.5s;
    border-color: #E57718 !important;
    font-size: 15px;
    padding: 8px 25px;
    border-radius: 50px;
}

.btn-sacademy {
    background-color: #EF4323 !important;
    color: #fff !important;
    border-color: #EF4323 !important;
}

.navbar {
    position: fixed;
    -webkit-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    width: 100%;
    z-index: 1000;
    background-color: #fff;

}

.sticky {
    position: fixed;
    top: 0;
    background-color: #fff;
    width: 100%;
    -webkit-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
    box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
}

.sticky+.content {
    padding-top: 102px;
    -webkit-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}
</style>




