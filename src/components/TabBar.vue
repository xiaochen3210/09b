<template>

    <van-tabbar route active-color="#f00" >
                <van-tabbar-item  to="/home/index" icon="home-o">
                    首页            
                </van-tabbar-item>
                 <van-tabbar-item to="/home/cate" icon="qr">
                    分类            
                </van-tabbar-item>
                 <van-tabbar-item to="" icon="shopping-cart-o">
                    购物车            
                </van-tabbar-item>
                 <van-tabbar-item  to="" icon="manager-o">
                    我的           
                </van-tabbar-item>
    </van-tabbar>

</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped>
.wrapper {
}
</style>