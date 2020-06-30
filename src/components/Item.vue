<template>
        <li class="">
          <div>
              <img :src="d.pic"
                 alt="">
            <div>
              <p>{{ d.name}}</p>
              <p>{{ d.characteristic }}</p>
              <ol>
                <li>
                  <p>￥{{d.minPrice}}</p>
                  <p>低价</p>
                </li>
                <li>
                  <p>￥{{d.originalPrice}}</p>
                  <p>原价</p>
                </li>
                <li>
                  <p>{{ d.stores }}件</p>
                  <p>限量</p>
                </li>
              </ol>
            </div>
          </div>
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