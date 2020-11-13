<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="../assets/logo2.png" v-show="!collapsed">
      </div>
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1" v-if="auth == 1">
          <router-link to="/homepage/userlist">
            <a-icon type="user" />
            <span>{{$t('usernav')}}</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/homepage/orderlist">
            <a-icon type="account-book" />
            <span>{{$t('ordernav')}}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div style="float: right;">
            <span>{{$t('curlogin')}}</span>
            <div class="userinfocss">{{username}}</div>
            <span>{{$t('curauth')}}</span>
            <div class="userinfocss">{{auth == 1 ? $t('admin') : $t('normuser')}}</div>
            <div class="logout" @click="onLogout">{{$t('exit')}} <a-icon type="logout" /></div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', width: '100%' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Icon, Layout, Menu } from 'ant-design-vue';

export default {
  components: {
    AIcon: Icon,
    ALayout: Layout,
    ALayoutSider: Layout.Sider,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    AMenu: Menu,
    AMenuItem: Menu.Item,
  },
  data() {
    return {
      collapsed: false,
      username: '',
      auth: ''
    };
  },
  mounted(){
    this.username = localStorage.getItem("username");
    this.auth = localStorage.getItem("auth");
  },
  methods:{
    onLogout(){
      window.location.href = "/";
      window.localStorage.clear();
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  overflow: hidden;
}
.userinfocss{
    display: inline-block;
    margin-right: 16px;
    color: #1890ff;
}
.logout{
    display: inline-block;
    margin-right: 20px;
    width: 55px;
    height: 64px;
    text-align: center;
    color: black;
    cursor: pointer;
}
.logout:hover{
    color: #fff;
    background-color: #1890ff;
}
</style>
