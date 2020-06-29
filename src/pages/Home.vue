<template>
    <div class="home">
            <Ban></Ban>
           <div class="a">
               <p>
                   11111111111
               </p>

           </div>
    </div>
</template>
<script>
import Banner from "../components/Banner"
export default {
    data(){
          return {
              
          }
    },
    components:{
        Ban:Banner
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