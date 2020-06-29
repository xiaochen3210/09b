<template>
  <div id="choiceness">
    <div>
      <p class="">精选专题</p> <i class="van-icon van-icon-arrow">
        <!----></i>
    </div>
    <div class="isc">
      <ul>
        <li><img src="https://cdn.it120.cc/apifactory/2018/11/06/da659b625bec741fc8aa906e7cb60cbe.png"
               alt="">
          <p>《影》螳螂捕蝉黄雀在后</p>
          <p>我记得被色彩惊艳到的《英雄》，视觉冲击会让人爱上这种感觉，似乎在色彩里，更能看出一个人物心情，和当时社会背景。</p>
        </li>
        <li><img src="https://cdn.it120.cc/apifactory/2018/11/06/04587c83c2ea0868def1c1c739f7259e.png"
               alt="">
          <p>因为相爱，终将相遇——《寻梦环游记》</p>
          <p>妈妈，我老了的时候，你还会在吗？我希望我老了，你还和我在一起。</p>
        </li>
        <li><img src="https://cdn.it120.cc/apifactory/2018/11/06/dd1f536692807fe6def6d232b82a501d.png"
               alt="">
          <p>逻辑|这样表达，事半功倍</p>
          <p>
            表达是生活工作中最重要的沟通方式，正式场合的表达，我们称为&amp;ldquo;演讲&amp;rdquo;、&amp;ldquo;汇报&amp;rdquo;、&amp;ldquo;发言&amp;rdquo;等；休闲场合的表达，我们称为&amp;ldquo;闲聊&amp;rdquo;、&amp;ldquo;侃大山&amp;rdquo;、&amp;ldquo;吹牛&amp;rdquo;等。
          </p>
        </li>
        <li><img src="https://cdn.it120.cc/apifactory/2018/11/06/83f7e48146b378d2ec2d0cffece65911.png"
               alt="">
          <p>每个迷茫的年轻人，都该去看看《无问西东》</p>
          <p>不是因为它人物塑造得有多好，它讲故事的方式有多好，它的剪辑手法有多厉害。事实上有很多地方人物的动机不明确，讲故事的手法有些拙劣，剪辑更是有些头重脚轻。</p>
        </li>
        <li><img src="https://cdn.it120.cc/apifactory/2018/11/06/ba5b3d543b663d76c3e743f160cb63d1.png"
               alt="">
          <p>我只是在努力地认真生活而已</p>
          <p>在职场上已经如此疲惫不堪的深海晶，在其他人眼里至少还是有那么一点幸福的&amp;mdash;&amp;mdash;她有一个交往了四年的男朋友，京谷。</p>
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
#choiceness {
  width: 100%;
  height: 4.42rem;
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
  > div:nth-of-type(2) {
    width: 100%;
    height: 3.78rem;
    // overflow: hidden;
    overflow: auto;
    > ul {
      width: 22.7rem;
      display: flex;
      > li {
        width: 4.42rem;
        height: 2.84rem;
        margin-left: 0.12rem;
        > img {
          width: 4.42rem;
          height: 2.84rem;
          display: block;
          border-radius: 0.06rem;
        }
        > p:nth-of-type(1) {
          font-size: 0.18rem;
          color: #2c2c2c;
          margin-top: 0.12rem;
          width: 4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        > p:nth-of-type(2) {
          font-size: 0.14rem;
          color: #a8a8a8;
          margin-top: 0.2rem;
          width: 3.24rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>