<template>
    <div class="content-business clear">
        <h2 class="title">商业合作联系方式</h2>
        <p class="prompt">如果您需要任何帮助，请与我们联系或发送电子邮件给我们。<br/> 我们会尽快答复您</p>
        <div class="companyInfo clear">
            <dl class="phoneBox">
                <dd></dd>
                <dt>
                    <p>联系人：曹先生</p>
                    <p>手机：187-0755-9295<span>座机：0755-86525405</span></p>
                </dt>
            </dl>
            <dl class="addressBox">
                <dd></dd>
                <dt>
                    <p>深圳市南山区科技北三路天工道1号宏益嘉瑞大厦301、302室</p>
                </dt>
            </dl>
            <dl class="qrCodeBox">
                <dd></dd>
                <dt>
                    <p></p>
                </dt>
            </dl>
        </div>
        <h2 class="title">邮件联系</h2>
        <p class="prompt">如果您有任何问题，请不要犹豫，给我们发送邮件。</p>
        <div class="postMsg clear">
            <p class="input-text clear">
                <input type="text" v-model="msg.userName" placeholder="您的名字">
                <input type="text" v-model="msg.email" placeholder="您的邮箱">
                <input type="text" v-model="msg.title" placeholder="标题">
            </p>
            <textarea name="" id="" cols="30" v-model="msg.content" rows="10" placeholder="在此输入您的内容">
            </textarea>
            <span class="btn" @click="sedMsg">发送</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Content-business',
        data() {
            return {
                msg:{
                    userName:'',
                    email:'',
                    title:'',
                    content:'',
                }
            }
        },
        methods: {
            sedMsg(){
                var self = this
                self.$ajax.post('url',self.msg,function(data){
                    if(data.code === 1){
                        alert('发送成功')
                    }
                })
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/contentBusiness.less"></style>
