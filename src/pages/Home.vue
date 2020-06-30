<template>
    <div class="home">
            <router-view />
            <TabBar></TabBar>
    </div>
</template>
<script>

import TabBar from "../components/TabBar"
export default {
    data(){
          return {
              
          }
    },
    components:{
     
        TabBar

        
    }

}
</script>
<style lang="less">

</style>