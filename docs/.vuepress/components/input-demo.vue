<template>
    <div>
        <g-input value="中文"></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" readonly></g-input>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Input from '../../../src/components/input'
export default {
     components: {
        'g-input': Input
    },
    data () {
      return {
        selected: '1',
        content: `
<g-input></g-input>
<g-input value="中文"></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" readonly></g-input>
      `.trim()
      }
    }
}
</script>