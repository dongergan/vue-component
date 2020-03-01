<template>
    <div class="popover" @click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop
        :class="{[`position-${position}`] : true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name:'Gpopover',
    data() {
        return {
            visible : false
        }
    },
    props:{
        position:{
            type:String
        }
    },
    methods: {
        xxx(){
            this.visible = !this.visible
            if (this.visible === true) {
                
                this.$nextTick( () => {
                    document.body.appendChild(this.$refs.contentWrapper)
                    let { width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                    if(this.position === 'top'){
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                    }else if(this.position === 'bottom'){
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + height + window.scrollY + 'px'
                    }else if(this.position === 'left'){
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        let{height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.top = top + window.scrollY +
                        (height - height2) / 2 +'px'
                    }else if(this.position === 'right'){
                        this.$refs.contentWrapper.style.left = left + window.scrollX +width + 'px'
                        let{height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.top = top + window.scrollY +
                        (height - height2) / 2 +'px'
                    }
                    
                    let eventHandler = ()=>{
                        this.visible = false
                        document.removeEventListener('click',eventHandler)
                    }
                    document.addEventListener('click',eventHandler)
                })
            }
        }
    },
   
}
</script>

<style scoped>
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    position: absolute;
    border: 1px solid #333;
    border-radius: 4px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    padding: .5em 1em;
    word-break: break-all;
}
.content-wrapper::before, .content-wrapper::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
}
.content-wrapper.position-top{
    transform: translateY(-100%);
    margin-top: -10px;
}
.content-wrapper.position-top::before, .content-wrapper.position-top::after {
    left: 10px;
}
.content-wrapper.position-top::before {
    border-top-color: black;
    border-bottom: none;
    top: 100%;
}
.content-wrapper.position-top::after {
    border-top-color: white;
    border-bottom: none;
    top: calc(100% - 1px);
}
.content-wrapper.position-bottom {
    margin-top: 10px;
}
.content-wrapper.position-bottom::before, .content-wrapper.position-bottom::after {
    left: 10px;
}
.content-wrapper.position-bottom::before {
    border-top: none;
    border-bottom-color: black;
    bottom: 100%;
}
.content-wrapper.position-bottom::after {
    border-top: none;
    border-bottom-color: white;
    bottom: calc(100% - 1px);
}

.content-wrapper.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
}
.content-wrapper.position-left::before, .content-wrapper.position-left::after {
    transform: translateY(-50%);
    top: 50%;
}
.content-wrapper.position-left::before {
    border-left-color: black;
    border-right: none;
    left: 100%;
}
.content-wrapper.position-left::after {
    border-left-color: white;
    border-right: none;
    left: calc(100% - 1px);
}
.content-wrapper.position-right {
    margin-left: 10px;
}
.content-wrapper.position-right::before, .content-wrapper.position-right::after {
    transform: translateY(-50%);
    top: 50%;
}
.content-wrapper.position-right::before {
    border-right-color: black;
    border-left: none;
    right: 100%;
}
.content-wrapper.position-right::after {
    border-right-color: white;
    border-left: none;
    right: calc(100% - 1px);
}
</style>