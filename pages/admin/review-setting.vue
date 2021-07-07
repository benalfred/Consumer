<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">
        <Links/>
          <b-row class="mt-5">
            <b-col md="3">
              <div class="d-flex">
                <div class="emoji">
                  <p>😡</p>
                </div>
                <b-form-input
                  class="mt-2 ml-4"
                  v-model="text"
                  placeholder="Very bad"
                ></b-form-input>
              </div>

              <div class="d-flex">
                <div class="emoji">
                  <p>😞</p>
                </div>
                <b-form-input
                  class="mt-2 ml-4"
                  v-model="text"
                  placeholder="Bad"
                ></b-form-input>
              </div>

              <div class="d-flex">
                <div class="emoji">
                  <p>😑</p>
                </div>
                <b-form-input
                  class="mt-2 ml-4"
                  v-model="text"
                  placeholder="Fair"
                ></b-form-input>
              </div>

              <div class="d-flex">
                <div class="emoji">
                  <p>😊</p>
                </div>
                <b-form-input
                  class="mt-2 ml-4"
                  v-model="text"
                  placeholder="Good"
                ></b-form-input>
              </div>

              <div class="d-flex">
                <div class="emoji">
                  <p>😍</p>
                </div>
                <b-form-input
                  class="mt-2 ml-4"
                  v-model="text"
                  placeholder="Very Good"
                ></b-form-input>
              </div>
            </b-col>

            <b-col md="3" class="review pl-lg-4">
              <p>No. of Opinion to Display</p>
              <p>Dispaly by</p>
              <p>Date Format</p>
              <p>View Additional Opinion</p>
            </b-col>

            <b-col md="2" style="position: relative; left: 20px">
              <b-form-group class="mb-2 selectdate">
                <div class="form-group">
                  <v-select placeholder="3" label="Name"></v-select>
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate">
                <div class="form-group">
                  <v-select placeholder="Data Created" label="Name"></v-select>
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate">
                <div class="form-group">
                  <v-select placeholder="Day Month Year" label="Name"></v-select>
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate">
                <div class="form-group">
                  <v-select placeholder="Yes" label="Name"></v-select>
                </div>
              </b-form-group>
            </b-col>

            <b-col md="2" class="pl-lg-5 form-select">
              <h6 style="font-weight: 600; color: #626d73" class="pb-4">Set Age range</h6>
              <b-form-group class="">
                <div class="selectdate1">
                  <div class="w-100">Millenials</div>
                  <v-select placeholder="3" label="Name"></v-select>
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate1">
                <div class="form-group">
                  <div class="w-100">Generation X</div>
                  <v-select class="v-select_" placeholder="3" label="Name"></v-select>
                </div>
              </b-form-group>
            </b-col>

            <b-col md="2" class="pl-lg-5 mt-5 pt-4">
              <b-form-group class="pt-1">
                <div class="form-group selectdate2">
                  <v-select placeholder="3" label="Name"></v-select>
                </div>
              </b-form-group>

              <b-form-group class="mb-2 selectdate2">
                <div class="form-group">
                  <v-select class="v-select_" placeholder="3" label="Name"></v-select>
                </div>

                <v-calendar title-position="left" />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="justify-content-center">
            <b-col md="4" class="newpost_ mt-1 justify-content-center">
              <b-form-group class="newpost mt-3">
                <button
                  class="mt-2 btn-sacademy"
                  style="font-size: 16px"
                  type="submit"
                  value="Send"
                >
                  Update
                </button>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserResponse from "@/components/UserResponse.vue";
import Links from "@/components/Links.vue";
export default {
  layout: "dashlayout",
  component: { UserResponse,Links },
};
</script>

<style scoped>
.email-setting {
  background: #0083ca;
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
.emoji p {
  font-size: 34px;
  cursor: pointer;
}
.review p {
  line-height: 55px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #626d73;
}

.form-group {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  align-items: center;
  color: #626d73;
}

@media screen and (min-width: 700px) {
  .form-select {
    position: relative;
    left: 20px;
  }
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
</style>
