<template>
    <div class="toast">
        <slot></slot> 
        <div class="line"></div> 
        <span v-if="closeButton" class="close" @click="onclickclose">
            {{closeButton.text}}
        </span>      
    </div>
</template>

<script>


export default {
    name:"Gtoast",
    props:{
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            bype:Number,
            default:5
        },
        closeButton: {
            type:Object,
            default: ()=>{
                return {
                    text: '关闭', callback: (toast)=>{
                        this.close()
                    }
                }
            }
        },
        position: {
            type:String,
            default:'top'
        }
    },
    mounted() {
        if(this.autoClose){
            setTimeout(()=>{
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    },
    methods: {
        close(){
            this.$el.remove()
            this.$destroy()
        },
        onclickclose(){
            this.close()
        }
    }
}
</script>

<style lang="">
.toast {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 1.8;
    display: flex;
    align-items: center;
    background: rgba(0 , 0, 0, 0.75);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    border-radius: 4px;
    color: white;
    padding: 4px 16px;
}
.close {
    padding-left: 16px;
    cursor:pointer;
}
.line {
    height:100%;
    border-left: 1px soli #666;
    margin-left: 16px;
}
</style>