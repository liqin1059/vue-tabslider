<template>
  <div style="width:100%;heigh:100%;background:#dcdcdc;position:relative;">
    <div class="tab-content">
      <div class="tab-bg"
          :style="{
            'width': title.length * 100 + '%',
            'transform': 'translate3d(' + (-activeIndex * clientWidth) + 'px, 0px, 0px)',
            'transition': 'transform ' + duration + 'ms ease',
            'paddingBottom': position === 'bottom' ? '0.8rem' : '0',
            'paddingTop': position === 'top' ? '0.8rem' : '0'
          }"
          @touchstart="touchStart($event)" 
          @touchmove='touchMove($event)' 
          @touchend='touchEnd($event)' >
          <slot></slot>
      </div>
    </div>
    <ul class="tab-title"
        :style="[titleBoxStyles]"
        :class="{
          'title-bottom': position === 'bottom',
          'title-top': position === 'top'
        }">
      <li class="tab-div"
          :style="[
            titleStyles,
            activeIndex === index ? activeStyle : []
          ]"
          v-for="(item, index) in title"
          :key="index"
          @click="titleClick(item, index)">
          {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'vue-tabslider',
  components: {},
  props: {
    position: {
      type: String,
      default: 'top',
      required: false
    },
    tabs: {
      type: Number,
      default: 3,
      required: false
    },
    title: {
      type: Array,
      default: () => {
        return [
          {
            name: '我的'
          }
        ];
      },
      required: false
    },
    duration: {
      type: Number,
      default: 300,
      required: false
    },
    titleStyles: {
      type: Object,
      default: () => {
        return {};
      },
      required: false
    },
    titleBoxStyles: {
      type: Object,
      default: () => {
        return {};
      },
      required: false
    },
    activeStyle: {
      type: Object,
      default: () => {
        return {};
      },
      required: false
    }
  },
  data() {
    return {
      activeIndex: 0,
      contentActive: 0,
      contentData: [
        {
          background: '#d09696'
        },
        {
          background: '#9f96d0'
        },
        {
          background: '#96d0a5'
        }
      ],
      touchStartX: 0,
      touchEndX: 0,
      moveX: 0,
      clientWidth: 0
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.$data.clientWidth = document.body.clientWidth;
  },
  methods: {
    // 点击设置活动index
    titleClick(item, index) {
      this.$data.activeIndex = index;
    },
    // 拖动开始时
    touchStart(e) {
      e.preventDefault();
      this.$data.touchStartX = e.changedTouches[0].pageX;
    },
    // 拖动时
    touchMove(e) {
      e.preventDefault();
    },
    // 拖动结束时
    touchEnd(e) {
      e.preventDefault();
      this.$data.touchEndX = e.changedTouches[0].pageX;
      let X = this.$data.touchEndX - this.$data.touchStartX;
      let count = this.title.length - 1;
      if (X > 0) {
        // console.log('向右滑动');
        if (this.$data.activeIndex > 0 && this.$data.activeIndex <= count) {
          this.$data.activeIndex--;
        } else if (this.$data.activeIndex <= 0) {
          this.$data.activeIndex = 0;
        } else if (this.$data.activeIndex > count) {
          this.$data.activeIndex = count;
        }
      } else if (X < 0) {
        // console.log('向左滑动');
        if (this.$data.activeIndex >= 0 && this.$data.activeIndex < count) {
          this.$data.activeIndex++;
        } else if (this.$data.activeIndex < 0) {
          this.$data.activeIndex = 0;
        } else if (this.$data.activeIndex >= count) {
          this.$data.activeIndex = count;
        }
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab-title{
  display: flex;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  left: 0;
  font-size: 16px;
  & > .tab-div{
    flex: 1;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    cursor: pointer;
    &.title-active{
      color: rgb(112, 112, 241);
    }
  }
}
.title-top{
  top: 0;
}
.title-bottom{
  bottom: 0;
}
.tab-content{
  overflow-x: scroll;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  &::-webkit-scrollbar{
    display: none;
  }
  & > .tab-bg{
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
.tab-slider{
  flex: 1;
  height: 100%;
}
</style>
