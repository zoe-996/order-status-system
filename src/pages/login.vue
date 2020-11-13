<template>
    <div class="loginBox">
        <div style="margin:1.8rem auto;width:3rem;">
            <div style="display:flex;">
                <img src="../assets/logo2.png" style="margin: 20px auto">
            </div>
            <div class="line">
                <a-input v-model="username" :placeholder="$t('username')">
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.35)" />
                </a-input>
            </div>
            <div class="line">
                <a-input-password v-model="password" type="password" :placeholder="$t('password')">
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.35)" />
                </a-input-password>
            </div>
            <div class="line">
                <a-select v-model="lang" style="width: 3rem;" @change="handleChange">
                    <a-select-option value="1">
                        简体中文
                    </a-select-option>
                    <a-select-option value="2">
                        English
                    </a-select-option>
                </a-select>
            </div>
            <div class="line">
                <a-button type="primary" block @click="onLogin">{{$t('login')}}</a-button>
            </div>
        </div>
    </div>
</template>
<script>
import{ Input, Icon, Button, Select } from 'ant-design-vue'
export default {
    components:{
        AInput: Input,
        AIcon: Icon,
        AButton: Button,
        AInputPassword: Input.Password,
        ASelect: Select,
        ASelectOption: Select.Option
    },
    data(){
        return {
            username: '',
            password: '',
            lang: '1'
        }
    },
    mounted(){
        window.addEventListener('keydown',this.handleKeydown);
    },
    methods:{
        handleKeydown(event){
            if (event.keyCode == 13 || event.keyCode == 108) {
                this.onLogin();
            }
        },
        handleChange(){
            if(this.lang==='1'){
                this.$i18n.locale = "zh";
            }else if(this.lang==='2'){
                this.$i18n.locale = "en";
            }
        },
        onLogin(){
            if(this.username=='' || this.password==''){
                alert(this.$t('inputerr'));
                return;
            }
            this.$axios.post(this.$baseurl + 'login','username=' + this.username + '&password=' + this.password).then((res)=>{
                if (res.data.msg==='1') {
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("username",res.data.username);
                    localStorage.setItem("auth",res.data.authority);
                    this.$router.push('/homepage/orderlist');
                } else {
                    alert(this.$t('pwderr'));
                }
            }).catch(()=>{
                alert(this.$t('loginerr'));
            });
        }
    },
    destroyed () {
        window.removeEventListener('keydown',this.handleKeydown);
    }
}
</script>
<style scoped>
.loginBox{
    width: 100%;
    height: 100%;
    background-color: #384657;
}
.line{
    width: 3rem;
    margin-bottom: 20px;
}
</style>
