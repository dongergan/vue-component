<template>
    <div class="collapseItem">
        <div class="title" @click="open = !open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'Gcollapseitem',
    props:{
        title:{
            type:String,
            required:true
        }
    },
    data() {
        return {
            open:false
        }
    },
}
</script>

<style lang="">
.collapseItem .title {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.collapseItem:first-child .title {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.collapseItem:last-child .title:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>