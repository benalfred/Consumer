<template>
  <div>

           <div class="d-flex profile-dropdown mr-5">
                <div class="profile-dropdown_" v-for="sector in sector2" :key="sector.Id">
                  <button type="button" class="btn1 ">{{sector.Name}}</button>
                </div>
                <ProfileComponent/>
           </div>


              <UserResponse :opinions="opinions"/>
  </div>
</template>

<script>
import ProfileComponent from '~/components/ProfileComponent.vue'
import UserResponse from '~/components/UserResponse.vue'
export default {
  components: {ProfileComponent, UserResponse},
  
   props:{
   totalRows: {
      type: Number,
      default: 0,
    },
    bpg: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },

  computed: {
    sector2(){
      return this.$store ? this.$store.state.data-fetching.sector2 : null;
    }
  },

}
</script>


<style scoped>


.btn2_ {
  background: #ffffff;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  opacity: 0.2;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
}

.profile-dropdown_ {
  padding: 0px 5px 0px;
  margin-left: -5px;
}

.btn1 {
  background: #00b5d3;
  border: none;
  height: 35px;
  width: 90px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
}


.btn2 {
  background: #00b5d3;
  border: none;
  padding: 5px 20px 5px;
  color: black;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  opacity: 0.2;
}
</style>

