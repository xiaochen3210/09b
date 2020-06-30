<template>
  <div class="kanjia">
    <div id="product">
      <div>
        <p class="">全民砍价</p> 
        <i class="van-icon van-icon-arrow">
          <!----></i>
      </div>
      <van-loading v-if="loading" /> 
      <ul v-else>
          <Item v-for="c in list " :d ="c" ></Item>
      </ul>
    </div>

  </div>
</template>

<script>
import Item from "./Item"
export default {
  components: {
      Item
  },
  props: {},
  data() {
    return {
        list:{},
        loading:true
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
      this.http.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((msg)=>{

              //console.log(msg)
              this.list = msg.data.data.goodsMap
              this.loading = false

      })
  },
  mounted() {}
}
</script>
<style lang="less">
#product {
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
    border-bottom: 0.01rem solid #e9e9e9;
    > i {
      font-size: 0.2rem;
    }
  }
  > ul {
    > li {
      > div {
        display: flex;
        padding: 0.1rem;
        border-bottom: 0.01rem solid #e9e9e9;
        > img {
          width: 1.58rem;
          height: 1.58rem;
          border-radius: 0.06rem;
          display: block;
        }
        > div {
          margin-left: 0.14rem;
          > p:nth-of-type(1) {
            font-size: 0.2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          > p:nth-of-type(2) {
            font-size: 0.15rem;
            color: #b2b2b2;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 0.1rem;
          }
          > ol {
            display: flex;
            align-items: center;
            li {
              text-align: center;
              margin-left: 0.5rem;
              margin-top: 0.46rem;
              > p:nth-of-type(1) {
                color: #b2b2b2;
                font-size: 0.18rem;
              }
              > p:nth-of-type(2) {
                color: #b2b2b2;
                font-size: 0.18rem;
                margin-top: 0.06rem;
              }
            }
            > li:nth-of-type(1) {
              margin-left: 0;
              > p:nth-of-type(1) {
                color: #d00000;
                font-weight: 700;
              }
              > p:nth-of-type(2) {
                color: #000000;
              }
            }
          }
        }
      }
    }
  }
}
</style>