<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Gtabs',
    props:{
        selected: {
            type:String
        }
    },
    created() {
        //this.$emit('update:selected','xxx')
    },
}
</script>

<style scoped>

</style>