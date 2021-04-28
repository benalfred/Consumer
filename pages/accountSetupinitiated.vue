<template>
  <div>
    <section>
      <b-container>
        <b-row class="mt-5 pt-2">
          <b-col md="12" class="text-center mt-5 pt-5">
              <h2 class="text-white font-weight-bold">Account setup initiated</h2>
              <p class="pt-5 text-white">A link has been sent to your registered email address. <br class="d-none d-sm-block">
              Please visit to continue with your account setup.</p>

          </b-col>


          <b-col md="4" class="newpost_ mt-5 pt-3">
              <b-form-group class="newpost mt-3">
                <button class=" mt-2 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Explore</button>
              </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
   layout: 'headerr',
}
</script>


<style scoped>
section {
   background: #626D73;
   padding: 7rem 1.5rem;
   min-height:(100vh - 0);
}

  .btn-sacademy {
    color: #fff !important;
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 100%;
    padding: 12px 0px 12px;
    border: 0;
    border-radius: 25px;
}

@media screen and (min-width: 700px) {
  .newpost_ {
    margin-left: 380px;
  }
}

</style>
