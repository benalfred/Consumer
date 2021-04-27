<template>
  <header >
    <b-navbar toggleable="lg">
      <div class="container">
      <b-navbar-brand to="/">
        <img src="~/assets/img/Logo.png" class="img-fluid " alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
           <b-nav-item to="/accountSetup1" class="mr-2 pt-2">Account</b-nav-item>
          <b-nav-item to="/accountSetup2" class="pt-2 mr-2">Fashion</b-nav-item>
          <b-nav-item to="/congratsUser1" class="pt-2 mr-2">Economy</b-nav-item>
          <b-nav-item to="/accountSetupinitiated" class="pt-2 mr-2">Fifth</b-nav-item>
          <!-- <b-button class="my-2 my-sm-0 btn-secondary mr-lg-4">Contact Us</b-button> -->
          <!-- <b-nav-item to="/contact-us" class="btn btn-secondary">Contact Us</b-nav-item> -->
          <b-navbar-nav class="mr-5 mt-2">
             <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Technology"
            toggle-class="nav-link-custom"
            left
          >


            <b-dropdown-item to="/load">Sixth</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item to="/load">Others</b-dropdown-item>
          </b-nav-item-dropdown>
          </b-navbar-nav>

          <nuxt-link to="/join" class="btn btn-sacademy mt-2" role="button">Join Us</nuxt-link>
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
