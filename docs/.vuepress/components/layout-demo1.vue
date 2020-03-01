<template>
    <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>

<script>
import Gcontent from '../../../src/components/content'
import Gheader from '../../../src/components/header'
import Gfooter from '../../../src/components/footer'
import Gsider from '../../../src/components/sider'
import Glayout from '../../../src/components/layout'
export default {
    components:{
        'g-content':Gcontent,
        'g-layout':Glayout,
        'g-header':Gheader,
        'g-sider':Gsider,
        'g-footer':Gfooter,
    },
     data () {
      return {
        content: `
<g-layout style="color: white; margin-bottom:50px;">
<g-header style="height: 50px; background:lightskyblue;">
  header
</g-header>
<g-content style="height: 100px; background:deepskyblue;">
  content
</g-content>
<g-footer style="height: 50px; background:lightskyblue;">
  footer
</g-footer>
</g-layout>
      `.trim()
      }
    }
}
</script>