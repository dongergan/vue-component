<template>
    <button class="button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <Icon v-if="icon && !loading" :name="icon"></Icon>
        <Icon name="jiazaizhong" class="loading" v-if="loading" ></Icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>   
</template>

<script>
import Icon from './icon'
import Buttongroup from './button-group'  
export default {
    name:'button',
    props:{
        icon:{},
        iconPosition:{
            type:String,
            default:'left'
        },
        loading:{
           type:Boolean,
           default:false
        }
    },  //在使用界面传入参数，这里接收，改变icon或者位置
    components:{Icon,Buttongroup},
    methods:{
    }
}

</script>


<style scoped>
@keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
}
.button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #999;
    background: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}
.button .icon {
    order: 1;
    margin-right: 0.3em;
    margin-left: 0;
}
.button .content {
    order: 2;
}
.button.icon-right .icon {
    order:2;
    margin-right: 0;
    margin-left: 0.3em;
}
.button.icon-right .content {
    order:1;
}
.button .loading {
    animation: spin 1s infinite linear;
}
</style>

