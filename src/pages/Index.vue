<template>
  <div class="index">
            <Ban></Ban>
            <Kj></Kj>
            <Zt></Zt>
            <Tj></Tj>

  </div>
</template>

<script>
import Banner from "../components/Banner"
import Kj from "../components/Kj"
import Zt from "../components/Zt"
import Tj from "../components/Tj"
export default {
  components:{
        Ban:Banner,
        Kj,
        Zt,
        Tj,
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.wrapper{}
</style>