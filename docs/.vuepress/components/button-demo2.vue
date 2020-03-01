<template>
   <div>
        <g-button-group>
            <g-button icon="zuo">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="you">下一页</g-button>
        </g-button-group>
          

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
   </div>
</template>
<script>
import ButtonGroup from '../../../src/components/button-group'
import Button from '../../../src/components/button'
export default {
    components: {
        'g-button-group': ButtonGroup,
        'g-button':Button
    },
     data () {
      return {
        content: `
<g-button-group>
<g-button icon="zuo"></g-button>
<g-button icon="you"></g-button>
</g-button-group>
      `.trim()
      }
    }
  
}
</script>