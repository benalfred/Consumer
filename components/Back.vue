<template>
  <div>
    <i @click="back" class="material-icons mb-2 mt-5 text-block">arrow_upward</i>
  </div>
</template>

<script>
export default {
  name: 'Back',
data(){
  return {

  }
},
methods:{
  back(){
    this.$router.back()
  }
}
}
</script>

<style scoped>
body,
html{
  background: #f7f6fa!important;
}



h5 {
  color: #241d36;
  font-family: 'Rawline Bold';
  font-size: 36px;
  font-weight: bolder;
}

h4 {
  color: #000000DE;
  font-family: 'Rawline Medium';
}


a{
  font-family: 'Rawline SemiBold';
  color: #241d36;
  font-size: 19px;
}
a:hover {
  text-decoration: underline;
}

.under {
  margin-top: 35px!important;
}

.under a:hover{
  text-decoration: underline!important;
}

i{
  color: #000;
  font-size: 40px;
  position: relative;
  bottom: 30px;
  cursor: pointer;
}

.terms {
  margin-top: 50px;
}



</style>
