<template>
   <div>
       <g-button>默认按钮</g-button>
       <g-button icon="chilun">默认按钮</g-button>
       <g-button loading="true" icon="chilun">默认按钮</g-button>
       <g-button disabled>默认按钮</g-button>
       <g-button icon="xiazai">默认按钮</g-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
   </div>
</template>
<script>
import Button from '../../../src/components/button'
export default {
    components: {
        'g-button': Button
    },
     data () {
      return {
        content: `
<g-button>默认按钮</g-button>
<g-button icon="chilun">默认按钮</g-button>
<g-button loading="true" icon="chilun">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
<g-button icon="xiazai">默认按钮</g-button>
      `.trim()
      }
    }
  
}
</script>