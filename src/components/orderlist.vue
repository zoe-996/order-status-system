<template>
<div style="position: relative;flex:1;">
  <div style="margin-bottom:10px;">
    <a-button type="primary" icon="plus" @click="showDrawer" :disabled="auth != 1">{{$t('addorder')}}</a-button>
    <div style="float:right;">
      <a-radio-group v-model="searchMode" button-style="solid">
        <a-tooltip placement="topLeft" :title="$t('tip1')">
          <a-radio-button value="1">
            {{$t('PINo')}}
          </a-radio-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" :title="$t('tip2')">
          <a-radio-button value="2">
            {{$t('BVNo')}}
          </a-radio-button>
        </a-tooltip>
        <a-tooltip placement="topLeft" :title="$t('tip3')">
          <a-radio-button value="3">
            {{$t('modelName')}}
          </a-radio-button>
        </a-tooltip>
      </a-radio-group>
      <a-input-search enter-button @search="onSearch" style="width:300px;margin-left:10px;" v-model="searchValue"/>
    </div>
  </div>
  <div style="position: absolute;width: 100%; ">
    <a-table :columns="columns" :data-source="data" :scroll="{ x: true }" :row-key="record => record._id">
      <a slot="action" slot-scope="record" v-if="auth == 1">
          <a :id="record._id" @click="onDelete">{{$t('delete')}}</a>
          <a-divider type="vertical" />
          <a :id="record._id" @click="onModify">{{$t('modify')}}</a>
      </a>
    </a-table>
  </div>
  <a-modal v-model="visible" width="820px" :title="$t('addorder')">
    <Form v-on:addok="visible = false"></Form>
  </a-modal>
  <a-modal v-model="visiblem" width="820px" :title="$t('modifyorder')">
    <Formup v-bind:id="curid" v-on:modifyok="onUpdateList"></Formup>
  </a-modal>
</div>
</template>
<script>
import { Table, Divider, Button, Input, Radio, Tooltip } from 'ant-design-vue'
import Form from './form'
import Formup from './formup'
export default {
  components:{
    ATable: Table,
    ADivider: Divider,
    AButton: Button,
    AInputSearch: Input.Search,
    ARadioGroup: Radio.Group,
    ARadioButton: Radio.Button,
    ATooltip: Tooltip,
    Form,
    Formup
  },
  data() {
    return {
      columns: [
        { title: this.$t('PINo'), width: 140, dataIndex: 'PINo', fixed: 'left', align: 'center' },
        { title: this.$t('modelName'), width: 200, dataIndex: 'modelName', fixed: 'left', align: 'center'},
        { title: this.$t('BVNo'), width: 140, dataIndex: 'BVNo', fixed: 'left', align: 'center' },
        { title: this.$t('No'), width: 90, dataIndex: 'No', align: 'center' },
        { title: this.$t('quantit'), width: 110, dataIndex: 'quantit', align: 'center'},
        { title: this.$t('modelType'), width: 110 , dataIndex: 'modelType', align: 'center'},
        { title: this.$t('PIDate'), width: 140 , dataIndex: 'PIDate'},
        { title: this.$t('modelDate'), width: 140 , dataIndex: 'modelDate'},
        { title: this.$t('payDate'), width: 140 , dataIndex: 'payDate'},
        { title: this.$t('orderConfDate'), width: 110 , dataIndex: 'orderConfDate'},
        { title: this.$t('sysDate'), width: 120 , dataIndex: 'sysDate'},
        { title: this.$t('houseDate'), width: 120 , dataIndex: 'houseDate'},
        { title: this.$t('lensDate'), width: 120 , dataIndex: 'lensDate'},
        { title: this.$t('boardDate'), width: 120 , dataIndex: 'boardDate'},
        { title: this.$t('cableDate'), width: 110 , dataIndex: 'cableDate'},
        { title: this.$t('poeDate'), width: 110 , dataIndex: 'poeDate'},
        { title: this.$t('pcbDate'), width: 110 , dataIndex: 'pcbDate'},
        { title: this.$t('mainboardDate'), width: 110 , dataIndex: 'mainboardDate'},
        { title: this.$t('productDate'), width: 110 , dataIndex: 'productDate'},
        { title: this.$t('qc1Date'), width: 110 , dataIndex: 'qc1Date'},
        { title: this.$t('qc2Date'), width: 110 , dataIndex: 'qc2Date'},
        { title: this.$t('packDate'), width: 120 , dataIndex: 'packDate'},
        { title: this.$t('warehousDate'), width: 110 , dataIndex: 'warehousDate'},
        { title: this.$t('pqcDate'), width: 110 , dataIndex: 'pqcDate'},
        { title: this.$t('testDate'), width: 110 , dataIndex: 'testDate'},
        { title: this.$t('retestDate'), width: 120 , dataIndex: 'retestDate'},
        { title: this.$t('outDate'), dataIndex: 'outDate'},
        { title: this.$t('remark'),width: 1100, dataIndex: 'remark'},
        {title: this.$t('action'),key: 'operation',fixed: 'right',width: 140,scopedSlots: { customRender: 'action' },align: 'center'}
      ],
      data: [],
      auth: '',
      visible: false,
      visiblem: false,
      curid: '',
      searchMode: '1',
      searchValue: '',
    };
  },
  mounted(){
    this.$axios.get(this.$baseurl + 'allorderlist').then((res)=>{
      this.data = res.data;
    }).catch((err)=>{
      console.log(err);
    });
    this.auth = localStorage.getItem("auth");
  },
  methods:{
    showDrawer(){
      this.visible = true;
    },
    onDelete(e){
      if(confirm(this.$t('confdelete2'))){
        let u = e.target.id;
        this.$axios.post(this.$baseurl + 'delorder','id=' + u).then((res)=>{
          if (res.data == 1) {
            for(let i=0; i < this.data.length; i++){
              if(this.data[i]._id == u){
                this.data.splice(i,1);
              }
            }
          } else {
            alert(this.$t('delecterr'));
          }
        }).catch(()=>{
          alert(this.$t('delecterr'));
        })
      }
    },
    onModify(e){
      this.curid = e.target.id;
      this.visiblem = true;
    },
    onUpdateList(val){
      for(let i=0; i < this.data.length; i++){
        if(this.data[i]._id == val._id){
          this.data[i] = val;
        }
      }
      this.visiblem = false;
    },
    onSearch(){
      if(this.searchValue==''){
        return;
      }
      this.$axios.get(this.$baseurl + 'orderlist?no=' + this.searchValue + '&mode=' + this.searchMode).then((res)=>{
        this.data = res.data;
      }).catch(()=>{
        alert(this.$t('searcherr'))
      });
    }
  }
};
</script>

