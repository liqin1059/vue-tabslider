<template>
<div id="app">
  <vue-tabslider :duration="300"
        :position="'top'"
        :title="titleData"
        :titleStyles="titleStyles"
        :activeStyle="activeStyle"
        :titleBoxStyles="titleBoxStyles"
         style="width:100vw;height:100vh;">
      <template>
        <div class="tab-slider" style="background:#fde1e1">
          first
        </div>
        <div class="tab-slider" style="background:#b2c0f1">
          second
        </div>
        <div class="tab-slider" style="background:#e6f5ea">
          third
        </div>
        <div class="tab-slider" style="background:#e6d3f5">
          four
        </div>
      </template>
  </vue-tabslider>
</div>
</template>
<script>
import vueTabslider from './packages/tabslider';

export default {
  name: 'tabs-example',
  components: {
    vueTabslider
  },
  props: {},
  data() {
    return {
      titleData: [
        {
          background: 'red',
          name: '首页'
        },
        {
          background: 'blue',
          name: '数据页'
        },
        {
          background: 'red',
          name: '我的'
        },
        {
          background: 'red',
          name: '更多'
        }
      ],
      contentData: [
        {
          background: '#d28888',
          name: 'first'
        },
        {
          background: '#9f96d0',
          name: 'second'
        },
        {
          background: '#96d0a5',
          name: 'third'
        }
      ],
      titleStyles: {
        borderRight: '1px solid #333'
      },
      titleBoxStyles: {
        paddingLeft: '1px',
        background: '#FFFFFF',
        width: '100%'
      },
      activeStyle: {
        color: '#745fe4'
      }
    };
  },
  watch: {},
  computed: {},
  mounted() {
  },
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #dcdcdc;
}
* {
  margin: 0;
  padding: 0;
}
ul, li{
  list-style: none;
}
*, *:before, *:after {  
  -webkit-tap-highlight-color: transparent;
} 
</style>
