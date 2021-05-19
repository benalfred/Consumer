<template>
  <header>
    <b-navbar class="navbar mt-lg-4 mt-md-4 mt-sm-4" toggleable="lg">
      <div class="container-fluid">
      <b-navbar-brand to="/" class="brand">
        <img src="~/assets/img/logo.png" class="img-fluid Vec pt-lg-4 mt-lg-2 ml-lg-2 pl-lg-5" alt="">
        <img src="~/assets/img/vector1.png" class="img-fluid d-none d-sm-block" width="300" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!-- <b-button class="my-2 my-sm-0 btn-secondary mr-lg-4">Contact Us</b-button> -->
          <!-- <b-nav-item to="/contact-us" class="btn btn-secondary">Contact Us</b-nav-item> -->
          <b-navbar-nav class="mr-5">
          </b-navbar-nav>

                         <li class=" cursor-pointer mr-3 mt-lg-4">
                            <nuxt-link v-if="!$auth.loggedIn" class="" to="/join">
                                <span class="join py-1 px-4 text-white join"
                                      >Join</span>
                            </nuxt-link>
                        </li>
                        <li class="cursor-pointer action-btn ml-lg-auto mt-4" v-if="!$auth.loggedIn">
                            <nuxt-link class="sub navigation-link" to="/login">
                                <span class="py-1 px-4 text-white"
                                      style="background-color: #E57718">Login  <img src="~/assets/img/vector4.png" class="img-fluid pl-2" width="22" alt=""> </span>
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
import ImageDropdown from "./ImageDropdown"
  export default{
    name:"headerComponent",
    component: {ImageDropdown},
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
@media screen and (max-width: 650px) {
  .action_btn {
      margin-bottom: 20px;
  }
  .action-btn {
    margin-bottom: 20px;
  }
}
   .action-btn span {
            border-radius: 50px;
            -webkit-box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
            box-shadow: 0 15px 10px -22px rgba(17, 17, 17, 0.36);
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
.navbar-light .navbar-nav .nav-link {
  color: #000;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #E57718;
}


.btn-sacademy {
    background-color:  #E57718 !important;
    color: #fff !important;
    transition: 0.5s;
    border-color: #E57718 !important;
    font-size: 15px;
    padding: 8px 25px;

}



@media screen and (min-width: 700px) {
    .brand .Vec {
  position: absolute;
}
}

.vec5 {
  position: absolute;
  z-index: -1000;
}

.navbar {
    -webkit-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    width: 100%;
    z-index: 1000;
    height: 70px;
}

@media screen and (min-width: 550px) {
  .navbar {
      background: #656565;
  }

}

@media screen and (max-width: 550px) {
  .sticky {
      background: #fafafa;
      position: fixed;
  }
  .join {
    color: black!important;
  }
}

.sticky {
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


.smallscreen{
  -webkit-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    width: 100%;
    z-index: 1000;
    height: 70px;
    background: #fff;
    position: fixed;
}
</style>
