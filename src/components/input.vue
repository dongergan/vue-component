<template>
    <div class="wraper" :class="{'error': error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
        <Gicon v-if="error" name="error" class="icon-error"></Gicon>
        <span v-if="error" class="errorMessage">{{error}}</span>
    </div>
</template>
<script>
import Gicon from './icon'
export default {
    name:'Ginput',
    components:{Gicon},
    props:{
        value:{
            type:String,

        },
        disabled: {
            type:Boolean,
            default:false
        },
        readonly: {
            type:Boolean,
            default:false
        },
        error: {
            type:String
        }
    }
}
</script>
<style scoped>
.wraper {
    font-size: 12px;
    display: inline-block;
}
.wraper input {
    height: 32px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 12px;
}
.wraper input:hover{
    border-color: #666;
}
.wraper input:focus{
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    outline: none;
}
.wraper input[disabled] {
    border-color: #aaa;
    color: #aaa;
    cursor: not-allowed;
}
.wraper input[readonly] {
    border-color: #aaa;
    color: #aaa;
    cursor: not-allowed;
}
.wraper.error input {
    border-color: #f1453d;
}
.icon-error {
    fill: #f1453d;
}
.errorMessage {
    color: red;
}
</style>