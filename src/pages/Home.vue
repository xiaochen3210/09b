<template>
    <div class="home">
            <Ban></Ban>
            <Kj></Kj>
       
    </div>
</template>
<script>
import Banner from "../components/Banner"
import Kj from "../components/Kj"
import Zt from "../components/Zt"
import Tj from "../components/Tj"
import TabBar from "../components/TabBar"
export default {
    data(){
          return {
              
          }
    },
    components:{
        Ban:Banner,
        Kj,
        Zt,
        Tj,
        TabBar
    }

}
</script>
<style lang="less">
.home{
    .a{
        width:200px;
        height:200px;
        background: #aaa;
        p{
            color:#f00
        }
    }

}
</style>