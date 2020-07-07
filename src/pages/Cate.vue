<template>
  <div id="fenlei">
    <p>
        <input placeholder="回车搜索商品" type="text">
    </p>
    <div>
      <ol>
        <li 
            class="feired">所有分类</li>
        <li 
            class="feired">居家</li>
        <li 
            class="red">配件装饰</li>
        <li 
            class="feired">服装</li>
        <li 
            class="feired">电器</li>
      </ol>
      <div >
        <div >
          <div 
               class="antd_img van-swipe">
            <div class="van-swipe__track"
                 style="width: 1000px; transition-duration: 500ms; transform: translateX(-750px);">
              <div 
                   class="van-swipe-item"
                   style="width: 250px; height: 100%; transform: translateX(0px);"><img 
                     src="/static/img/微信图片_20191013183855.c78e2c4.jpg"
                     alt=""
                     class="img_weixin"></div>
              <div 
                   class="van-swipe-item"
                   style="width: 250px; height: 100%; transform: translateX(0px);"><img 
                     src="/static/img/微信图片_20191013185220.2acdd0f.jpg"
                     alt=""
                     class="img_weixin"></div>
              <div 
                   class="van-swipe-item"
                   style="width: 250px; height: 100%; transform: translateX(0px);"><img 
                     src="/static/img/微信图片_20191013185233.2dd6c9c.jpg"
                     alt=""
                     class="img_weixin"></div>
              <div 
                   class="van-swipe-item"
                   style="width: 250px; height: 100%; transform: translateX(0px);"><img 
                     src="/static/img/微信图片_20191013185236.a853d34.jpg"
                     alt=""
                     class="img_weixin"></div>
            </div>
            <div class="van-swipe__indicators"><i class="van-swipe__indicator"
                 style=""></i><i class="van-swipe__indicator"
                 style=""></i><i class="van-swipe__indicator"
                 style=""></i><i class="van-swipe__indicator van-swipe__indicator--active"
                 style="background-color: skyblue;"></i></div>
          </div>
        </div>
        <ul >
          <li 
              class=""><img 
                 data-src="https://cdn.it120.cc/apifactory/2018/06/01/ca165a3f816ee07bcab6d052b884d39e.png"
                 src="https://cdn.it120.cc/apifactory/2018/06/01/ca165a3f816ee07bcab6d052b884d39e.png"
                 lazy="loaded">
            <p >配件装饰</p>
          </li>
          <li 
              class=""><img 
                 data-src="https://cdn.it120.cc/apifactory/2018/11/07/f9e64699f2b30840926558f7e6fef5b7.png"
                 src="https://cdn.it120.cc/apifactory/2018/11/07/f9e64699f2b30840926558f7e6fef5b7.png"
                 lazy="loaded">
            <p >首饰</p>
          </li>
          <li 
              class=""><img 
                 data-src="https://cdn.it120.cc/apifactory/2018/11/07/04ff245798456499336ab2ef6dd833ec.png"
                 src="https://cdn.it120.cc/apifactory/2018/11/07/04ff245798456499336ab2ef6dd833ec.png"
                 lazy="loaded">
            <p >眼镜</p>
          </li>
          <li 
              class=""><img 
                 data-src="https://cdn.it120.cc/apifactory/2018/11/07/1917c4b6918dabe384a0c17b8ef613b0.png"
                 src="https://cdn.it120.cc/apifactory/2018/11/07/1917c4b6918dabe384a0c17b8ef613b0.png"
                 lazy="loaded">
            <p >腰带</p>
          </li>
          <li 
              class=""><img 
                 data-src="https://cdn.it120.cc/apifactory/2018/11/07/7bdf83cc4a65fb6e201fb7af34e77efb.png"
                 src="https://cdn.it120.cc/apifactory/2018/11/07/7bdf83cc4a65fb6e201fb7af34e77efb.png"
                 lazy="loaded">
            <p >袜子</p>
          </li>
          <li 
              class=""><img 
                 data-src="https://cdn.it120.cc/apifactory/2018/06/01/7a6e5b5227cb606c48a097d712d4ee2f.png"
                 src="https://cdn.it120.cc/apifactory/2018/06/01/7a6e5b5227cb606c48a097d712d4ee2f.png"
                 lazy="loaded">
            <p >行李箱</p>
          </li>
          <li 
              class=""><img 
                 data-src="https://cdn.it120.cc/apifactory/2018/06/01/d3d0a300076c3e8337bca84dc2dfd496.png"
                 src="https://cdn.it120.cc/apifactory/2018/06/01/d3d0a300076c3e8337bca84dc2dfd496.png"
                 lazy="loaded">
            <p >钱包及小皮件</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
<style lang="less">
#fenlei{
  >p:nth-of-type(1){
    width: 100%;
    height: 0.5rem;
    border-bottom: 0.01rem solid #F3F3F3;
    display: flex;
    align-items: center;
    input{
      width: 3.47rem;
      height: 0.35rem;
      background: #F5F5F5;
      border: none;
      border-radius: 0.2rem;
      margin-left: 0.2rem;
      padding-left: 0.2rem;

    }
  }
  >div:nth-of-type(1){
    display: flex;
    ol{
      width: 1.27rem;
      border-right: 0.01rem solid #E9E9E9;
      // height: 5.3rem;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0.51rem;
      overflow: auto;
      background: white;
      z-index: 1;
      li{
        width: 1.27rem;
        height: 0.5rem;
        // border-left: 0.03rem solid white;//#D41515
        font-size: 0.2rem;
        // color: #675D56;
        text-align: center;
        line-height: 0.5rem;
        margin-top: 0.1rem;
      }
    }
    >div{
      position: fixed;
      left: 1.27rem;
      top: 0.51rem;
      overflow: auto;
      height: 100%;
      >div{
        width: 3.92rem;
      }
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        // overflow: auto;
        // height: 5.3rem;
        width: 3.72rem;
        text-align: center;
        padding: 0 0.1rem;
        li{
          width: 30%;
          margin-top: 0.1rem;
          img{
            width: 1.1rem;
            height: 1.1rem;
            display: block;
          }
          p{
            font-size: 0.16rem;
            color: #3E4561;
            margin-top: 0.05rem;
          }
        }
      }
    }
  }
}
.red{
  border-left: 0.03rem solid #D41515;
  color: #D41515;
}
.feired{
  border-left: 0.03rem solid white;
  color: #675D56;
}
.img_weixin{
  width: 100%;
  height: 1.8rem;
}
.antd_img{
  width: 80%;
  margin: 0 auto;
  border-radius: 0.06rem;
  margin-top: 0.1rem;
}
</style>