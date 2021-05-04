<template>
  <div class="page">
    <b-container>
      <b-row>
        <b-col md="6">
          <h4 class="font-weight-bold">Refer a friend</h4>
        </b-col>
        <b-col md="6" class=" d-flex justify-content-end">
          <i style="cursor: pointer" class="fas fa-times-circle fa-2x"></i>
        </b-col>
        <b-col md="12">
           <div
               style="border-radius:79px; margin-bottom: 1rem; background-color:  #626D73; height: 1px" class="mt-3">
          </div>
          <p>For every friend reffered, you gain an additional 10 points</p>
          <p style="font-size: 13px">Insert email address in field below to refer a friend</p>

        </b-col>

        <b-col md="8">
          <div>
            <div class="mt-1">
                  <b-form-input list="input-list" id="input-with-list" style="font-size: 13px" placeholder="email, comma seperated "></b-form-input>
                  <b-form-datalist id="input-list" :options="options"></b-form-datalist>
            </div>
          </div>
        </b-col>
        <b-col md="4" class="newpost_">
              <b-form-group class="newpost mt-1">
                <button class=" btn-sacademy_" style="font-size: 16px" type="submit" value="Send">Send invite</button>
              </b-form-group>
        </b-col>

        <b-col>
           <p style="font-size: 13px" class="pt-4">Previously refered friends listed below:</p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-5">
      <b-row class="d-flex">
        <b-col md="3" class="d-flex">
          <img src="~/assets/img/Ellipse7.png" class="img-fluid" />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
        <b-col md="3" class="d-flex">
          <img src="~/assets/img/Ellipse8.png" class="img-fluid"  />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
        <b-col md="3" class="d-flex">
          <img src="~/assets/img/Ellipse7.png" class="img-fluid" />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
        <b-col md="3" class="d-flex">
          <img src="~/assets/img/Ellipse9.png" class="img-fluid" />
          <p class="mt-2 ml-1">refered@email.com</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    layout: 'headerr',
  data() {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']
    }
  }
}
</script>

<style scoped>
.page {
  padding-top: 100px;
}

img {
  width: 40px;
  height: 40px;
}

  .btn-sacademy_ {
    color: #fff !important;
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 100%;
    padding: 5px 0px 7px;
    border: 0;
    border-radius: 25px;
}
</style>
