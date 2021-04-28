<template>
  <div>
    <section>
      <b-container>
        <b-row class="mt-5 pt-1 mx-0 justify-content-center">
          <b-col md="12" class="text-center mt-5 pt-5">
              <h2 class="text-white font-weight-bold">Congratulations User 1</h2>
              <p class="pt-5 text-white">Your acoount has been successfully created. <br class="d-none d-sm-block">
              Click the button below to login with your newly created password.</p>
          </b-col>


          <b-col md="4" class="newpost_ mt-4 pt-5">
              <b-form-group class="newpost mt-3">
                <button class=" mt-2 btn-sacademy" style="font-size: 16px" type="submit" value="Send">Join with email</button>
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

  }
}

</style>
