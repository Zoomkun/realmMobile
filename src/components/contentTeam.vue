<template>
    <div class="content-team clear">
        <dl v-for="(item,index) in team"  class="team-left clear">
            <dd><img :src="item.image" alt=""></dd>
            <dt>
                <h4 v-html="item.name">{{item.name}}</h4>
                <p>{{item.position}}</p>
                <div class="team-info" v-html="item.info">{{item.info}}</div>
            </dt>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'Content-team',
        data() {
            return {
                team:[
                    {
                        name:'岳师聿',
                        image:require('@/assets/home/photo1.png'),
                        position:'商业模式设计',
                        info:'商业模式设计师、投融资顾问、天使投资人<br/>创建原本企业策划，曾参与香港中远集团、农业银行等百余家企业互联网服务平台规划<br/>赛百味（中国）、梧桐智慧基金等项目合伙人<br/>钜丰黄金、摩天之星投资人<br/>区世界项目主发起人及商业模式负责人'
                    },
                    {
                        name:'贾凌云',
                        image:require('@/assets/home/photo2.png'),
                        position:'游戏开发负责人',
                        info:'北京航空航天大学软件工程硕士，<br/>10年游戏研发经历.<br/>曾担任主程序项目经理、游戏制作人<br/>2010《梦幻修仙》中国首款突破3000w月流水产品<br/>2014《战龙三国》月流水5千万，腾讯游戏同类排行第一'
                    },
                    {
                        name:'闫嘉峰',
                        image:require('@/assets/home/photo4.png'),
                        position:'运营负责人',
                        info:'十四年市场营销、管理培训经验<br/>两年互联网+平台市场运营经验<br/>广州寻蜜鸟科技有限公司负责全国市场运营<br/>创建并经营数字资产交易所，区块链项目发行及市值管理<br/>链圈科技创始人、参与区块链社区平台创建<br/>数金集团运营总裁，负责DGS发行、市值管理'
                    },
                    {
                        name:'周昆',
                        position:'平台搭建负责人',
                        image:require('@/assets/home/photo5.png'),
                        info:'西北工业大学软件工程硕士，<br/>曾服务BEA，QUEST，SEGUE等美国知名软件企业，拥有20年大型应用软件平台研发，搭建和运维管理经验。领导过逾200人以上的项目技术研发团队。项目涉及邮政，银行，国家电力，机场等大型企业核心应用系统。<br/>时刻追踪最新区块链技术发展，熟悉区块链底层软件技术框架，对搭建大型区块链分布式应用有一定造诣。'
                    },
                    {
                        name:'申凌&emsp;博士',
                        image:require('@/assets/home/photo3.png'),
                        position:'项目总架构设计',
                        info:'中科院声学所硕士，新加坡国立大学计算机博士<br/>区块链+天使投资人，专注股权投资和区块链思想研究<br/>圆富全球区块链研究院成员<br/>参与中科院八五重大项目。<br/>曾任北京大学深圳研究生导师'
                    },
                ]
            }
        },
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/contentTeam.less"></style>
