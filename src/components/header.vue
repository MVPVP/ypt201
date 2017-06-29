<template>
    <div class="m-header">
        {{adminName}}
    </div>
</template>
<style lang="scss" src="../assets/scss/_header.scss" scoped></style>
<script>
    import {store} from '../vuex/store.js'
    export default{
        data () {
            return {
                adminNameName:store.state.adminName,
            }
        },
        //computed相当于属性的一个实时计算，如果实时计算里关联了对象，那么当对象的某个值改变的时候，同事会出发实时计算。
        computed:{
            adminName(){
                return '实时计算'+store.state.adminName;
            }
        }
    }
</script>
