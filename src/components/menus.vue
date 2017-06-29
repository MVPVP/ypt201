<template>
    <div class="m-menus">
        <ul>
            <li v-for="(childMenu,key,childIndex) in menuList" class="childMenu">
                <router-link :to="childMenu.to" :from="childMenu.to">{{childMenu.text}}</router-link>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" src="../assets/scss/_menus.scss" scoped></style>
<script>
    import {menuDatas} from '../assets/datas/jsondata.js'
    import {store} from '../vuex/store.js'
    export default {
        name: 'menus',
        data () {
            return {
               menuList:menuDatas
            }
        },
        methods:{

        }
    }
</script>
