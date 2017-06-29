/**
 * Created by Administrator on 2017/3/20.
 */
//考虑如何更好地在组件外部管理状态(把组件的共享状态抽取出来,以一个全局单例模式管理呢)
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建Store实例
const store = new Vuex.Store({
    // 创建一个对象来保存应用启动时的初始状态
    state: {
        count: 0,
        adminName:'系统管理员Admin系统管理员',
        dialogBool:false
    },
    mutations: {
        inc: state => state.count++,
        dec: state => state.count--,
        dialogBoolTrue(state){
          state.dialogBool=true;
        },
        dialogBoolFalse(state){
          state.dialogBool=false;
        }
    }
})
export {store}


//const store = new Vuex.Store({
//// 存储状态值
//    state: {
//
//    },
//// 状态值的改变方法,操作状态值
//// 提交mutations是更改Vuex状态的唯一方法
//    mutations: {
//
//},
//// 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
//getters: {
//
//},
//<!--可以给组件使用的函数，用来派发 Mutation-->
//actions: {
//
//}
//})
//// 要改变状态值只能通过提交mutations来完成
//
///* eslint-disable no-new */
//new Vue({
//    el: '#app',
//    template: '<App/>',
//    components: { App },
//// 将store实例注入到根组件下的所有子组件中
//    store
//// 子组件通过this.$store来方位store
//})
