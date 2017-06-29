<!--标题、关闭按钮是统一的，但是中间正文的内容（包括样式）是想自定义的，这时候就会用到Vue组件的slot来分发内容。比如子组件的template的内容为：-->
<template>
    <div class="m-dialog-wrapper">
        <div class="box">
            <h1>弹窗标题</h1>
            <slot name="dialogsContain"></slot>
            <div>
                <span class="m-btn">确定</span>
                <span class="m-btn" @click="dialogCancel()">取消</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .f-arctileBox,.m-mask {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
    }

.m-dialog-wrapper{
    @extend .f-arctileBox;
    .boxBg{
        background: #fff;
        opacity: 1;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 20px 0 50px 0;
    }
    .box{
        background: #fff;
        margin: auto;
        box-shadow: 3px 3px 5px #ccc;
        border: 1px solid #cdcdcd;
        padding: 20px;
        width: 300px;
        position: relative;
    }
}
</style>
<script>
import {store} from '../vuex/store.js'
export default{
    data(){
        return {
            count:0,
            dialogBool:store.state.dialogBool,
            title:'0'
        }
    },
    methods:{
        dialogCancel(){
            store.commit('dialogBoolFalse');
            console.log(store.state.dialogBool)
        }
    }
}
</script>
