<template>
  <div class="kanjia">
    <div id="product">
      <div>
        <p class="">全民砍价</p> 
        <i class="van-icon van-icon-arrow">
          <!----></i>
      </div>
      <ul>
        <li class="">
          <div><img src="https://dcdn.it120.cc/2019/07/24/a30b67dd-61be-41bd-841c-7e3f8844e958.jpg"
                 alt="">
            <div>
              <p>男式羊羔绒休闲外套</p>
              <p>仿羊绒内里，却有真实安全感</p>
              <ol>
                <li>
                  <p>￥1</p>
                  <p>低价</p>
                </li>
                <li>
                  <p>￥429</p>
                  <p>原价</p>
                </li>
                <li>
                  <p>100件</p>
                  <p>限量</p>
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li class="">
          <div><img src="https://cdn.it120.cc/apifactory/2018/11/06/035117f304fe7d475f4f2b3b317e7719.png"
                 alt="">
            <div>
              <p>男式天鹅绒保暖牛仔裤</p>
              <p>柔软中包裹充盈的热量，抗冬无惧</p>
              <ol>
                <li>
                  <p>￥1</p>
                  <p>低价</p>
                </li>
                <li>
                  <p>￥269</p>
                  <p>原价</p>
                </li>
                <li>
                  <p>200件</p>
                  <p>限量</p>
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li class="">
          <div><img src="https://dcdn.it120.cc/2019/07/24/e2d4f82f-f9af-48ff-9865-61561fd4c2f1.jpg"
                 alt="">
            <div>
              <p>重返校园 男式连帽牛仔外套</p>
              <p>复古校园感，青春活力</p>
              <ol>
                <li>
                  <p>￥0.9</p>
                  <p>低价</p>
                </li>
                <li>
                  <p>￥1</p>
                  <p>原价</p>
                </li>
                <li>
                  <p>200件</p>
                  <p>限量</p>
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ul>
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