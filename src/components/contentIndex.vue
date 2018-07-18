<template>
    <div class="content-index">
        <dl class="gameBox clear">
            <dd>
                <div class="gameImage" :style="{backgroundImage:'url(' + gameData[swiper.swiperIndex].image+')'}"></div>
                <p>币家摇钱树</p>
            </dd>
            <dt v-html="gameData[swiper.swiperIndex].info">
                {{gameData[swiper.swiperIndex].info}}
            </dt>
        </dl>
    </div>
</template>

<script>
    import bus from '@/js/event'

    export default {
        name: 'Content-index',
        data() {
            return {
                swiper: {
                    swiperIndex: 0
                },
                gameData: [
                    {
                        image: require('@/assets/home/gameImage.png'),
                        info:'<span style="font-weight: bold;">币家摇钱树1</span>是由腾讯游戏开发并运行的_款运营在Android、IOS平台上的MOBA类手机游戏，于2015年11月26日在Android、IOS平台上正式公测，游戏前期使用名称有《英雄战迹》、《王者联盟》。<br/>币家摇钱树的欧美版本于2018年在任天堂Switch平台发售。<br/>游戏是类dota手游，游戏中的玩法以战为主，玩家间进行1V1、3V3、5V5等多种放的PVP对战，顾以参加游戏的冒险模式，进行PVE的闯关模式，在满足条件后可以参加游戏排位赛等。<br/>2016年11月，币家摇钱树荣登2016中国泛娱乐指数盛典"中国IP价值榜-游戏榜toplO"。'
                    },
                    {
                        image: require('@/assets/home/gameImage.png'),
                        info:'<span style="font-weight: bold;">币家摇钱树2</span>是由腾讯游戏开发并运行的_款运营在Android、IOS平台上的MOBA类手机游戏，于2015年11月26日在Android、IOS平台上正式公测，游戏前期使用名称有《英雄战迹》、《王者联盟》。<br/>币家摇钱树的欧美版本于2018年在任天堂Switch平台发售。<br/>游戏是类dota手游，游戏中的玩法以战为主，玩家间进行1V1、3V3、5V5等多种放的PVP对战，顾以参加游戏的冒险模式，进行PVE的闯关模式，在满足条件后可以参加游戏排位赛等。<br/>2016年11月，币家摇钱树荣登2016中国泛娱乐指数盛典"中国IP价值榜-游戏榜toplO"。'
                    }
                ]
            }
        },
        mounted() {
            var self = this
            bus.$on('toChangeSwiper', function (index) {
                self.$forceUpdate()
                self.$set(self.swiper, 'swiperIndex', index)
            })
        },
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/contentIndex.less"></style>
