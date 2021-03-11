<template>
  <header class=" shadow-sm p-2 mb-4 bg-white rounded">
    <b-navbar class="container text-white" toggleable="lg">
      <b-navbar-brand to="/">
        <img src="~/assets/images/Logo.png" class="img-fluid " alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="toggle"></b-navbar-toggle>

      <b-collapse  id="nav-collapse" is-nav class="isnav">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto text-header">
          <b-nav-item to="" class="pr-4">join</b-nav-item>
          <div class="login">
          <b-nav-item to="" class="pr-1">Login <img src="~/assets/images/vector.png" class="img-fluid " alt=""></b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
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

<style>

.btn-sacademy {
    color: #fff !important;
    border-radius: 50px;
    background-color: #3671E9;
    padding: 7px 20px 6px;
}

/* .navbar-light .navbar-nav .nav-link {
  color: white!important;
} */

header {
  position: relative;
}


.login {
  background: rgba(229, 119, 24, 0.2);
  border-radius: 50px;
  padding: 0px 10px 0px;
}

</style>
