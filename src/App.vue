<template>
  <div id="app">
    <Grow gutter="20">
      <Gcol span="4" >1</Gcol>
      <Gcol span="20">2</Gcol>
    </Grow>
    <Grow gutter="10">
      <Gcol  gutter="10">1</Gcol>
      <Gcol  gutter="10">2</Gcol>
      <Gcol  gutter="10">3</Gcol>
    </Grow>
    <hr>
    <Gcollapse>
      <Gcollapseitem title="标题1">内容1</Gcollapseitem>
      <Gcollapseitem title="标题2">内容2</Gcollapseitem>
      <Gcollapseitem title="标题3">内容3</Gcollapseitem>
    </Gcollapse>
    <hr>
    <Gpopover position="top">
      <template slot="content" >
        <div>popover内容</div>
      </template>
      <template>
        <button>点我</button>
      </template>
    </Gpopover>
    <Gpopover position="right">
      <template slot="content" >
        <div>popover内容</div>
      </template>
      <template>
        <button>点我</button>
      </template>
    </Gpopover>
    <hr>
    <button @click="showToast">点我</button>
    <hr>
    <Glayout style="height:50vh;">
      <Gheader class="demo">header</Gheader>
      <Glayout>
        <Gsider class="demo">sider</Gsider>
        <Gcontent class="demo">content</Gcontent>
      </Glayout>
      <Gfooter class="demo">footer</Gfooter>
    </Glayout>
    <Glayout style="height:50vh;">
      <Gsider class="demo">sider</Gsider>
      <Glayout>
        <Gheader class="demo">header</Gheader>
        <Gcontent class="demo">content</Gcontent>
        <Gfooter class="demo">footer</Gfooter>
      </Glayout>
    </Glayout>
    <hr>
    <Grow>
      <Gcol span="2"></Gcol>
      <Gcol span="22"></Gcol>
    </Grow>
    <Grow>
      <Gcol span="4"></Gcol>
      <Gcol span="20" offset="2"></Gcol>
    </Grow>
    <Grow gutter="20">
      <Gcol></Gcol>
      <Gcol></Gcol>
    </Grow>
    <hr>
    <Ginput value="张三"></Ginput>
    <Ginput value="李四" readonly></Ginput>
    <Ginput value="王二" disabled></Ginput>
    <Ginput value="张三" error="姓名不能少于两个字"></Ginput>
    <div class="sbutton">
      <Gbutton :loading="loading1" @click="loading1 = !loading1">默认按钮</Gbutton>
      <Gbutton icon="chilun" :loading="loading2" @click="loading2 = !loading2">设置按钮</Gbutton>
      <Gbutton icon="chilun" :loading="loading3" icon-position="right" @click="loading3 = !loading3">设置按钮</Gbutton>
      <Gbutton icon="xiazai">下载按钮</Gbutton>
      <Buttongroup>
        <Gbutton icon="zuo">上一页</Gbutton>
        <Gbutton icon="you">下一页</Gbutton>
      </Buttongroup>
    </div>
  </div>
</template>

<script>
import Gbutton from '@/components/button'
import Buttongroup from '@/components/button-group'
import Ginput from '@/components/input'
import Grow from '@/components/row'
import Gcol from '@/components/col'
import Glayout from '@/components/layout'
import Gheader from '@/components/header'
import Gfooter from '@/components/footer'
import Gsider from '@/components/sider'
import Gcontent from '@/components/content'
import Gtoast from '@/components/toast'
import Gtabs from '@/components/tabs'
import Gtabshead from '@/components/tabs-heade'
import Gtabsbody from '@/components/tabs-body'
import Gtabspane from '@/components/tabs-pane'
import Gtabsitem from '@/components/tabs-item'
import Gpopover from '@/components/popover'
import Gcollapse from '@/components/collapse'
import Gcollapseitem from '@/components/collapse-item'
import Gpopover3 from '@/components/popover3'
export default {
  name: 'App',
  components:{
    Gbutton,Buttongroup,Ginput,Grow,Gcol,Glayout,Gheader,Gfooter,Gsider,Gcontent,Gtoast,
                Gtabs,Gtabsbody,Gtabshead,Gtabsitem,Gtabspane,Gpopover,Gcollapse,Gcollapseitem,Gpopover3
  },
  data(){
    return{
      loading1:false,
      loading2:false,
      loading3:false,
      loading4:false,
      selectedTab:'sports'
    }

  },
  methods: {
    showToast(){
      this.$toast('我是message')
    }
  },
}
</script>

<style>
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
.sbutton {
  margin-top: 20px;
}
.demo {
  border: 1px solid green;
  min-height: 100px;
}

</style>
