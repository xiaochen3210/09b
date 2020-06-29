<template>
    <div class="home">
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
    data(){
          return {
              
          }
    },
    components:{
        Ban:Banner,
        Kj,
        Zt,
        Tj
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