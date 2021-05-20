<template>
  <div>
    <Headerr />
    <Nuxt />
  </div>
</template>

<script>

import Headerr from '~/components/headerr.vue'
import accountSetup1 from '../pages/setup-account.vue'

export default {
  components: { Headerr },
  name: 'headerr'
}
</script>

<style>

</style>
