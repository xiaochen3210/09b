<template>
    <div class="home">
           <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item of banners" :key="item.id">
                       <img :src="item.picUrl" alt="">
                </van-swipe-item>
             
            </van-swipe>

    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
          return {
              banners:[]
          }
    },
    created(){
            axios.get("https://api.it120.cc/small4/banner/list").then((msg)=>{
                     
                     console.log(msg)
                    this.banners = msg.data.data

            })

    }
}
</script>
<style>
.my-swipe{
    height: 426px;
    overflow: hidden;
}
.my-swipe .van-swipe-item {
   
  }
  .my-swipe .van-swipe-item img{
      width:100%
  }
</style>