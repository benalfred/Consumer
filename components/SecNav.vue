<template>
  <div>
      <b-container>
        <b-row class="justify-content-center">
        <div class="display-text d-lg-flex m-3  d-none d-sm-block">
            <nuxt-link to="/technology-landingpage" style="color: #E57718;">Technology</nuxt-link>
            <nuxt-link to="/dell-techlanding-page">Banking</nuxt-link>
            <nuxt-link to="/dell-technology"><p>Fashion</p></nuxt-link>
            <nuxt-link to="">Economy</nuxt-link>
        </div>
        </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: "SecNav",
  
}
</script>



<style scoped>
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
</style>