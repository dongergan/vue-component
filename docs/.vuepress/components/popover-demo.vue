<template>
    <div style="padding-top: 16px;">
    <h2>Popover</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-popover position="top">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>

        <p>
          <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Gbutton from '../../../src/components/button'
import Gpopover from '../../../src/components/popover'
export default {
    components:{
        'g-button':Gbutton,
        'g-popover':Gpopover
    },
    data () {
      return {
        content: `
<g-popover position="top">
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>左方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right">
  <g-button>右方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>

      `.trim()
      }
    }
}
</script>