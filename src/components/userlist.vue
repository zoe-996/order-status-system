<template>
  <div>
    <a-button type="primary" icon="plus" @click="showDrawer">{{$t('adduser')}}</a-button>
    <a-modal v-model="visible" :title="$t('modifyuser')" @cancel="onClose">
      <template slot="footer">
        <a-button key="submit" type="primary" @click="onSubmit">
          {{$t('sumbit')}}
        </a-button>
      </template>
      <div class="line">{{$t('username')}}</div>
      <a-input  v-model="username" :disabled="ismodify"/>
      <div class="line">{{$t('password')}}</div>
      <a-input-password v-model="password"/>
      <div class="line">{{$t('auth')}}</div>
      <a-radio-group v-model="authvalue">
        <a-radio-button value="1">{{$t('admin')}}</a-radio-button>
        <a-radio-button value="2">{{$t('normuser')}}</a-radio-button>
      </a-radio-group>
    </a-modal>
    <div style="color: #aaa;margin:10px;">{{$t('userlist')}}</div>
    <a-table :columns="columns" :data-source="data" :row-key="record => record._id">
      <span slot="authority" slot-scope="authority">
        <a-tag :color="authority == 1 ? 'green' : 'geekblue'">
          {{ authority == 1 ? $t('admin') : $t('normuser') }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="record">
        <a :id="record.username" @click="onDelete">{{$t('delete')}}</a>
        <a-divider type="vertical" />
        <a :id="record.username" @click="onModify">{{$t('modify')}}</a>
      </span>
    </a-table>
  </div>
</template>
<script>
import { Table, Tag, Divider, Button, Input, Radio } from 'ant-design-vue'
export default {
  components:{
    ATable: Table,
    ATag: Tag,
    ADivider: Divider,
    AButton: Button,
    AInput: Input,
    AInputPassword: Input.Password,
    ARadioGroup: Radio.Group,
    ARadioButton: Radio.Button
  },
  data() {
    return {
      columns: [
        { dataIndex: 'username', title: this.$t('username'), align: 'center'},
        { dataIndex: 'password', title: this.$t('password'), align: 'center'},
        { dataIndex: 'authority', title: this.$t('auth'), scopedSlots: { customRender: 'authority' }, align: 'center'},
        { dataIndex: 'regtime', title: this.$t('registtime'), align: 'center'},
        { key: 'action', title: this.$t('action'), scopedSlots: { customRender: 'action' }, align: 'center'},
      ],
      data: [],
      visible: false,
      username: '',
      password: '',
      authvalue: '1',
      ismodify: false
    };
  },
  mounted(){
    this.getUserlist();
  },
  methods:{
    getUserlist(){
      this.$axios.get(this.$baseurl + 'userlist').then((res)=>{
        this.data = res.data;
      })
    },
    showDrawer(){
      this.visible = true;
    },
    onClose(){
      this.visible = false;
      this.ismodify = false;
      this.username = '';
      this.password = '';
    },
    onSubmit(){
      if(this.username=='' || this.password==''){
        return;
      }
      if (this.ismodify) {
        this.$axios.post(this.$baseurl + 'modifyuser','username=' + this.username + '&password=' + this.password + '&authority=' + this.authvalue).then((res)=>{
          if (res.data == 1) {
            alert(this.$t('modifyok'));
            this.onClose();
            this.getUserlist();
          } else {
            alert(this.$t('modifyerr'));
          }
        }).catch(()=>{
          alert(this.$t('modifyerr'));
        })
      } else {
        this.$axios.post(this.$baseurl + 'regist','username=' + this.username + '&password=' + this.password + '&authority=' + this.authvalue).then((res)=>{
          if (res.data == 1) {
            alert(this.$t('addok'));
            this.onClose();
            this.getUserlist();
          } else {
            alert(this.$t('addexist'));
            this.username = '';
            this.password = '';
          }
        }).catch(()=>{
          alert(this.$t('adderr'));
        })
      }
    },
    onDelete(e){
      if(confirm(this.$t('confdelete1'))){
        let u = e.target.id;
        this.$axios.post(this.$baseurl + 'deluser','username=' + u).then((res)=>{
          if (res.data == 1) {
            this.getUserlist();
          } else {
            alert(this.$t('delecterr'));
          }
        }).catch(()=>{
          alert(this.$t('delecterr'));
        })
      }
    },
    onModify(e){
      this.username = e.target.id;
      this.ismodify = true;
      this.visible = true;
    }
  }
};
</script>
<style scoped>
.line{
  height:40px;
  line-height:40px;
}
</style>
