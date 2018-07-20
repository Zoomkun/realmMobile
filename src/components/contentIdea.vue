<template>
    <div class="content-idea clear">
        <div class="idea-img" :style="{backgroundImage:'url('+image+')'}"></div>
        <div class="idea-content clear">
            <div v-for="(item,index) in companyIntroduction" class="clear">
                <div class="title-box"><span>{{item.title}}</span></div>
                <p v-html="item.content">{{item.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Content-idea',
        data() {
            return {
                image:require('@/assets/home/idea_photo.png'),
                companyIntroduction: [
                    {
                        title:'区世界介绍',
                        content:'&emsp;&emsp;深圳市胜凯达科技有限公司，缘起一群有梦想的年轻人。我们因为共同的理想和目标而汇聚在一起，利用这区块链这项世界最前沿的技术去设计和构建我们产品--区世界。<br/>&emsp;&emsp;在这个世界中的任何人都能够自由公平地创造受到保护价值”这是我们的核心价值观。区世界的设计过程中，我们毁掉了我们自己的世界观，价值观和人生观，重新建立了新的宇宙观，辩证观和平衡观。突破了自我的意识，去掉了中心与权威，将价值的创造权，话语权，决定权，交给到每一个人手上。我们可以遇见在未来的这个世界中，会有各行各业的人在各种各样世界中创造各种各样的价值和财富。小国寡民的景象离我们并不遥远。<br/>&emsp;&emsp;团队来自各行各业的精英，有美丽的天使，有好玩的游戏专家，有雄辩的商务，有Geek的技术怪咖。他们八仙过海各显神通默默地为这个人类共同的美好愿景贡献着自己的智慧和力量。'
                    },
                    {
                        title:'核心理念',
                        content:'&emsp;&emsp;每个人都能够进行自由公平地创造收到保护的价值，并能够自由流通。'
                    },
                    {
                        title:'产品特点',
                        content:'&emsp;&emsp;兼顾效率与公平帮助组织快速高效地形成共识自由，开放。去中心，自治。不可篡改，价值保护'
                    }
                ]
            }
        },
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/contentIdea.less"></style>
