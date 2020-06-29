<template>
  <div id="home_popularity">
    <div>
      <p class="">人气推荐</p> <i class="van-icon van-icon-arrow">
        <!----></i>
    </div>
    <ul>
      <li class=""><img src="https://dcdn.it120.cc/2019/07/24/e2d4f82f-f9af-48ff-9865-61561fd4c2f1.jpg"
             alt="">
        <p>重返校园 男式连帽牛仔外套</p>
        <p>复古校园感，青春活力</p>
        <p>￥0.9</p>
      </li>
      <li class=""><img src="https://cdn.it120.cc/apifactory/2018/11/06/035117f304fe7d475f4f2b3b317e7719.png"
             alt="">
        <p>男式天鹅绒保暖牛仔裤</p>
        <p>柔软中包裹充盈的热量，抗冬无惧</p>
        <p>￥1</p>
      </li>
      <li class=""><img src="https://dcdn.it120.cc/2019/07/24/a30b67dd-61be-41bd-841c-7e3f8844e958.jpg"
             alt="">
        <p>男式羊羔绒休闲外套</p>
        <p>仿羊绒内里，却有真实安全感</p>
        <p>￥1</p>
      </li>
      <li class=""><img src="https://cdn.it120.cc/apifactory/2018/11/06/cb9a3a9d23faf30742cdf76b21b6e29a.jpg"
             alt="">
        <p>挚·商务简约提花四件套</p>
        <p>140支脂密纯棉，双丝光工艺，轻奢美学</p>
        <p>￥1</p>
      </li>
    </ul>
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
#home_popularity {
  width: 100%;
  border-bottom: 0.14rem solid #f5f5f5;
  > div:nth-of-type(1) {
    font-size: 0.22rem;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
    text-align: center;
    height: 0.65rem;
    // border-bottom: 0.01rem solid #E9E9E9;
    > i {
      font-size: 0.2rem;
    }
  }
  > ul {
    width: 4.8rem;
    display: flex;
    padding: 0 0.2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    > li {
      img {
        width: 2.33rem;
        height: 3rem;
        display: block;
      }
      > p:nth-of-type(1) {
        font-size: 0.2rem;
        color: #000000;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > p:nth-of-type(2) {
        font-size: 0.14rem;
        color: #b2b2b2;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.1rem;
      }
      > p:nth-of-type(3) {
        font-size: 0.16rem;
        color: #d00000;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>