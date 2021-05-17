<template>
  <header>
    <b-navbar class="navbar mt-4 d-none d-sm-block" toggleable="lg">
      <div class="container-fluid">
      <b-navbar-brand to="/" class="brand">
        <img src="~/assets/img/logo.png" class="img-fluid Vec pt-4 mt-2 ml-2 pl-5" alt="">
        <img src="~/assets/img/vector1.png" class="img-fluid " width="300" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!-- <b-button class="my-2 my-sm-0 btn-secondary mr-lg-4">Contact Us</b-button> -->
          <!-- <b-nav-item to="/contact-us" class="btn btn-secondary">Contact Us</b-nav-item> -->
          <b-navbar-nav class="mr-5">

          </b-navbar-nav>


                         <li class=" cursor-pointer mr-3 ">
                            <nuxt-link v-if="!$auth.loggedIn" class="" to="/join">
                                <span class="py-1 px-4 text-white"
                                      >Join</span>
                            </nuxt-link>
                        </li>
                        <li class="cursor-pointer action-btn ml-lg-auto" v-if="!$auth.loggedIn">
                            <nuxt-link class="sub navigation-link" to="/login">
                                <span class="py-1 px-4 text-white"
                                      style="background-color: #E57718">Login</span>
                            </nuxt-link>
                        </li>
        </b-navbar-nav>
      </b-collapse><!--        -->
      </div>
    </b-navbar>

    <b-navbar class="d-block d-sm-none smallscreen" toggleable="lg">
      <div class="container">
      <b-navbar-brand to="/">
        <img src="~/assets/img/logo.png" class="img-fluid " alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

           <!-- <b-nav-item to="/accountSetup1" class="mr-2 pt-2">Account</b-nav-item>
          <b-nav-item to="/accountSetup2" class="pt-2 mr-2">Fashion</b-nav-item>
          <b-nav-item to="/congratsUser1" class="pt-2 mr-2">Economy</b-nav-item>
          <b-nav-item to="/accountSetupinitiated" class="pt-2 mr-2">Fifth</b-nav-item>

          <b-navbar-nav class="mr-5 mt-2">
             <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Technology"
            toggle-class="nav-link-custom"
            left
          >


            <b-dropdown-item to="/login">Sixth</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/firstLevellogin">Others</b-dropdown-item>
          </b-nav-item-dropdown>
          </b-navbar-nav> -->
           <li v-if="$auth.loggedIn">
                            <CartComponent class="nav-hide-mob "/>
             </li>

          <nuxt-link v-if="!$auth.loggedIn" to="/join" class="btn btn-sacademy mt-2" role="button">Join Us</nuxt-link>

        </b-navbar-nav>
      </b-collapse><!--        -->
      </div>
    </b-navbar>
  </header>
</template>

<script>
  export default{
    name:"headerComponent",
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

.brand .Vec {
  position: absolute;

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
    background: #656565;
}

.sticky {
    top: 0;
    background: #656565;
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
