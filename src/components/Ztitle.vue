<template>
          <li>
            <img :src="d.pic"
               alt="">
          <p>{{ d.title }}</p>
          <p>{{ d.descript }}</p>
        </li>
</template>

<script>
export default {
  components:{},
  props:["d"],
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