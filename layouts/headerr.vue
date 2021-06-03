<template>
  <div>
    <Headerr />
    <SecNav/>
    <Nuxt />
  </div>
</template>

<script>

import Headerr from '~/components/headerr.vue'
import SecNav from '~/components/SecNav'
import accountSetup1 from '../pages/setup-account.vue'

export default {
  components: { Headerr,SecNav },
  name: 'headerr'
}
</script>

<style>

</style>
