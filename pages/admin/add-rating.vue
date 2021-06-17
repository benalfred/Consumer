<template>
  <div>
     <div id="" class="d-flex flex-column">
        <div id="content">
           <div class="container-fluid">
                 <b-row>
            <b-col md="6">
            <nuxt-link to="review-setting">
                  <div class="email-setting1 p-3">
                      <p class="pt-2">Review Setting</p>
                  </div>
            </nuxt-link>
              </b-col>
              <b-col md="6">
              <nuxt-link to="email-setting">
                  <div class="email-setting p-3">
                      <p class="pt-2">Email Setting</p>
                  </div>
              </nuxt-link>
              </b-col>
            </b-row>

            <div class="row mt-5">
              <div class="col-md-6">
                  <div class="Opinion1 p-5 mt-5">
                         <b-form-group>
                    <div class="form-group small-select">
                    <label for="" class="text-dark_" style="font-weight: 700" >Add new rating</label>
                      <v-select

                        placeholder="add new rating"
                        label="Name"
                      ></v-select>
                    </div>
                  </b-form-group>
                  </div>

                  <div class="sector p-3 mt-5">
                  <b-row class="my-1">
                    <b-col sm="9">
                      <b-form-input
                        id="input-large"
                        v-model="Name"
                        class="input-sector"
                        size="lg"
                        placeholder="New Rating"
                      ></b-form-input>
                    </b-col>
                    <b-col sm="3" class="pl-4 pt-0">
                      <button
                        v-if="!addSectorSpinner"
                        class="btn outline-none"
                        @click="addSector"
                        :disabled="!Name"
                      >
                        <img src="~assets/img/sectoricon.png" alt="" />
                      </button>

                    </b-col>
                  </b-row>
                </div>
              </div>

              <div class="col-md-6">
                <img src="~assets/img/rating.jpg" class="img-fluid" alt="">
              </div>
            </div>
           </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  layout: "dashlayout",

   data() {
    return {
      logoutMenuState: false,
      threeOpen: false,
      filter: "",
    };
  },
  props:{
 sectors2: {
      type: Array,
      default: () => {
        return [];
      },
    },
    bpg: {
      type: Number,
      default: 1,
    },
  },


  methods: {
    //  ...mapMutations('data-fetching', ["setBpg"]),
    //  ...mapActions("data-fetching", [
    //    "fetchSectors"
    //  ]),
    threeMenuOpen() {
      this.threeOpen = !this.threeOpen;
    },
  },

  watch: {
    bpg() {
      this.fetchSectors();
    },
  },

}

</script>


<style scoped>
.sector {
  background: #656565;
}
.email-setting {
  background: #0083CA;
}
.email-setting1 {
  background: #C4C4C4;
}
.email-setting p,
.email-setting1 p
 {
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
align-items: center;
text-align: center;
color: #FFFFFF;
}

.text-dark_ {
  color: #000;
  font-weight: bold;
    font-family: Poppins;
    font-size: 13px;
}


.Opinion1 {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}



</style>
