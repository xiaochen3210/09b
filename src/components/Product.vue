<template>
       <li class="">
          <img :src="p.pic"
             alt="">
        <p>{{ p.name }}</p>
        <p>{{ p.characteristic }}</p>
        <p>￥{{ p.originalPrice }}</p>
      </li>
</template>

<script>
export default {
  components:{},
  props:["p"],
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