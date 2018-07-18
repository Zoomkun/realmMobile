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
                        content:'区块链项目+游戏+数字资产爱好者<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区世界” 是一个基于区块链思想，通过各种场景化的精美挖矿小游戏，将区块链项目方、技术开发方、区块链爱好者、数字资产爱好者等汇聚在区世界，是服务于区块链领域的开放式互动交流推广平台，意在整合区块链行业资源，加速优秀项目落地应用。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;游戏是数字资产最天然的应用场景领域：游戏和区块链的结合，对市场推广，导流吸粉、生态建设有重要价值，节省费用，高效且精准。区世界平台集聚了海量区块链和数字资产爱好者。通过平台各种精美好玩的区块链挖矿游戏。将大量的数字资产爱好者与区块链项目方、交易所等完美对接。'
                    },
                    {
                        title:'核心理念',
                        content:'共识共享、公平公正、众治众智、无域无我'
                    },
                    {
                        title:'发展历程',
                        content:'1项目筹备阶段2018.04-04<br/>项目发起，10人联合成立一致行动人，第一笔资金注入，试验性项目研发（币家城市）<br/>2平台搭建阶段2018.05-07<br/>第二笔资金注入，核心经营团队初步确立，积累流量20W，获得有效流量4W+，签约并开发“宁夏红项目”。启动平台开发，同时商业模式初步完成。<br/>3完成百万流量2018.07-09<br/>4平台开放、开源2018.10'
                    },
                    {
                        title:'产品服务',
                        content:'寻找优秀区块链创新创业团队为其提供从用户入口、产品推广的市场开发服务，为区块链创业公司降低市场开发运营成本 。<br/>区世界为合作方定制开发一款符合项目特征的场景化小游戏，玩家在玩游戏的过程中，可以获得合作方提供的代币奖励，在游戏互动中完成对潜力客户的价值传递。<br/>1、积聚百万玩家资源，直接对接海量精准用户数据。<br/>2、高活跃度、高转换率，快速推广、降低市场开发成本。<br/>3、数据统计分析功能，优选用户数据。<br/>4、趣味性，参与感，游戏互动中完成投资者教育。<br/>5、独立系统化的社群管理功能。<br/>6、区世界平台呈几何倍数的用户增长，能快速增加项目的传播范围。'
                    }
                ]
            }
        },
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/contentIdea.less"></style>
