<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Glayout',
    data() {
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'Gsider'){
                this.layoutClass.hasSider =true
            }
        })
    },
}
</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.layout.hasSider {
    flex-direction: row;
}
</style>
