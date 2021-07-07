<template>
  <div>
    <b-row class="mb-2">
      <b-col md="6">
        <nuxt-link to="email-setting"  class="email-setting p-3 d-block">
            <div class="pt-2"><p class="p-2">Email Setting</p></div>
      </nuxt-link
        >
      </b-col>
      <b-col md="6">
        <nuxt-link to="review-setting"  class="email-setting p-3 d-block">
            <div class="pt-2"><p class="p-2">Review Setting</p></div>
        </nuxt-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <nuxt-link to="add-rating"
           class="email-setting p-3 d-block">
            <div class="pt-2"><p class="p-2">Add rating tag</p></div>
          </nuxt-link
        >
      </b-col>
      <b-col md="6">
        <nuxt-link to="add-lga" class="email-setting p-3 d-block">
            <div class="pt-2"><p class="p-2">Add LGA</p></div>
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style>

.container {
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;
}
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}
.text-dark_ {
  color: #000;
  font-weight: 600;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 100%;
  padding: 12px 0px 12px;
  border: 0;
  border-radius: 25px;
}

.email-setting {
  background: #c4c4c4;
  color: #fff
}
.email-setting1 {
  background: #c4c4c4;
}

.email-setting p,
.email-setting1 p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.email-tittle {
  border: 1px solid rgba(14, 10, 10, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow: hidden;
  overflow-y: scroll;
  height: 300px;
  width: 500px;
  outline: None !important;
}

.email-tittle::-webkit-scrollbar {
  width: 7px;
  border-radius: 50px;
}

/* Track */
.email-tittle::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.email-tittle::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.email-tittle::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 100%;
  padding: 10px 0px 10px;
  border: 0;
  border-radius: 25px;
}

.nuxt-link-exact-active.nuxt-link-active.email-setting {
   background-color: #0083ca !important;
   color: #fff !important;
}
</style>
