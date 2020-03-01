import Toast from './toast'

export default {
    install(Vue, options){
        Vue.prototype.$toast = function(message){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: {
                        text: '知道了'
                    }
                }
            })
            toast.$slots.default = [message]     //插槽传值
            toast.$mount()                       //mount一下，执行
            document.body.appendChild(toast.$el)
        }
    }
}