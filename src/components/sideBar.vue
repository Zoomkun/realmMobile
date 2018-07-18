<template>
    <div class="nav" :class="classObject">
        <div class="btn" @click="fnSideBarIn">
        </div>
        <div class="shadow" :class="" @click="fnSideBarOut"></div>
        <div class="menuBox" >
            <div class="close" @click="fnSideBarOut"></div>
            <p v-for="(item,index) in nav" :class="{active:page===index}" @click="getPageIndex(index)">{{item}}</p>
        </div>
    </div>
</template>

<script>
    import bus from '@/js/event'
    export default {
        name: 'Header',
        data () {
            return {
                nav:['首页','区世界','团队介绍', '商务合作'],
                page:0,
                sideBarIn:'',
            }
        },
        methods:{
            getPageIndex(index){
                this.page = index
                bus.$emit('toChangePage',index);
                bus.$emit('overFlowHidden',false);
                this.sideBarIn = false;
            },
            fnSideBarIn(){
                this.sideBarIn = true;
                bus.$emit('overFlowHidden',true);
            },
            fnSideBarOut(){
                this.sideBarIn = false;
                bus.$emit('overFlowHidden',false);
            }
        },
        computed:{
            classObject: function () {
                var self = this
                if(self.sideBarIn){
                    return 'sideBarIn';
                }else if(self.sideBarIn === false){
                    return 'sideBarOut';
                }else {
                    return''
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/sideBar.less"></style>
