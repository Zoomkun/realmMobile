<template>
    <div class="banner">
        <div v-show="page.pageNow === 0" class="banner-bg">
            <div class="banner-box">
                <div class="swiper-container banner-container">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="http://nxh.bcrealm.com" target="_blank">
                                <img src="@/assets/home/banner1.jpg" style="width: 100%" alt="">
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="http://bbm.bcrealm.com" target="_blank">
                                <img src="@/assets/home/banner2.jpg" style="width: 100%" alt="">
                            </a>
                        </li>
                    </ul>
                    <span class="banner-bullets"></span>
                </div>
            </div>
        </div>
        <div v-if="page.pageNow !== 0" class="banner-small">
            <div v-if="page.pageNow === 1" class="idea"></div>
            <div v-if="page.pageNow === 2" class="team"></div>
            <div v-if="page.pageNow === 3" class="business"></div>
        </div>
        <div class="triangle">
        </div>
    </div>

</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import bus from '@/js/event'

    export default {
        name: 'Banner',
        data() {
            return {
                page: {
                    pageNow: 0
                }
            }
        },
        mounted() {
            var self = this
            self.swiperRoll()
            bus.$on('toChangePage', function (index) {
                self.$forceUpdate()
                self.$set(self.page, 'pageNow', index)
            })
        },
        methods: {
            swiperRoll() {
                // swiper動畫
                var swiper = new Swiper('.swiper-container', {
                    effect: 'fade',
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.banner-bullets',
                        bulletClass: 'banner-bullet',
                        bulletActiveClass: 'banner-bullet-active'
                    },
                    on: {
                        touchMove: function () {
                            bus.$emit('toChangeSwiper', swiper.realIndex)
                        },
                        autoplay: function () {
                            bus.$emit('toChangeSwiper', swiper.realIndex)
                        }
                    },
                })
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/banner.less"></style>
<style>
    .banner-bullets {
        position: absolute;
        left: 0;
        bottom: .3rem !important;
        height: .05rem;
        line-height: .05rem;
        text-align: center;
        z-index: 2;
    }

    .banner-bullet {
        display: inline-block;
        width: .35rem;
        height: .05rem;
        margin-right: .05rem;
        vertical-align: top;
        border-radius: 0;
        background: #fff;
        opacity: .5;
    }

    .banner-bullet-active {
        opacity: 1;
    }
</style>
