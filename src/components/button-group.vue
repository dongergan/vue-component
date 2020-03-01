<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
.button-group {
    display: inline-flex;
    vertical-align: middle;
}
.button-group .button {
     border-radius: 0;
}
.button:not(:first-child){
    margin-left: -2px;
}
.button:first-child{
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
}
.button:last-child{
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
}
.button:hover{
    position: relative;
    z-index: 1;
}
</style>