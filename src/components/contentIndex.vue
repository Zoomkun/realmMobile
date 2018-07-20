<template>
    <div class="content-index">
        <dl class="gameBox clear">
            <dd>
                <div class="gameImage" :style="{backgroundImage:'url(' + gameData[swiper.swiperIndex].image+')'}"></div>
                <p>{{gameData[swiper.swiperIndex].name}}</p>
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
                        name:'币家摇钱树',
                        info:'<span style="font-weight: bold;">币家摇钱树</span>于2018年7月4日上线。<br/>在该游戏中，玩家需要通过与好友进行互动，学习了解最新的行业资讯等方式增加自己的种植能力，加快树木的成长。游戏中的排行榜功能，记录了每个用户对植树的贡献。该游戏在上线的短短十几天时间内，获得了数十万玩家的喜爱，形成了自己的游戏文化。'
                    },
                    {
                        image: require('@/assets/home/gameImage.png'),
                        name:'宁夏红传奇',
                        info:'<span style="font-weight: bold;">宁夏红传奇</span>是一部基于宁夏红枸杞酒的种酿造玩法的小游戏<br/>在游戏里，用户扮演的是酒庄庄主的身份，可以通过在庄园内种植并收集枸杞，每4斤枸杞才能酿造出一瓶宁夏红枸杞酒。酿造完成后即可获得相应的币奖励。<br/>在游戏中，您还可以添加好友与好友进行互动，分享酿酒心得，并了解当前最新的宁夏红产品资讯以及区块链知识。'
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
