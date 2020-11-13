<template>
  <form id="oForm" @submit="onSubmit">
    <div class="item">
      <span class="itemtext">{{$t('PINo')}}</span>
      <div class="inputwidth"><a-input name="PINo" v-model="orderinfo.PINo" disabled/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('No')}}</span>
      <div class="inputwidth"><a-input name="No" v-model="orderinfo.No"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('BVNo')}}</span>
      <div class="inputwidth"><a-input name="BVNo" v-model="orderinfo.BVNo" disabled/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('modelName')}}</span>
      <div class="inputwidth"><a-input name="modelName" v-model="orderinfo.modelName"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('quantit')}}</span>
      <div class="inputwidth"><a-input name="quantit" v-model="orderinfo.quantit"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('modelType')}}</span>
      <div class="inputwidth"><a-input name="modelType" v-model="orderinfo.modelType"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('PIDate')}}</span>
      <div class="inputwidth"><a-input name="PIDate" v-model="orderinfo.PIDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('modelDate')}}</span>
      <div class="inputwidth"><a-input name="modelDate" v-model="orderinfo.modelDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('payDate')}}</span>
      <div class="inputwidth"><a-input name="payDate" v-model="orderinfo.payDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('orderConfDate')}}</span>
      <div class="inputwidth"><a-input name="orderConfDate" v-model="orderinfo.orderConfDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('sysDate')}}</span>
      <div class="inputwidth"><a-input name="sysDate" v-model="orderinfo.sysDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('houseDate')}}</span>
      <div class="inputwidth"><a-input name="houseDate" v-model="orderinfo.houseDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('lensDate')}}</span>
      <div class="inputwidth"><a-input name="lensDate" v-model="orderinfo.lensDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('boardDate')}}</span>
      <div class="inputwidth"><a-input name="boardDate" v-model="orderinfo.boardDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('cableDate')}}</span>
      <div class="inputwidth"><a-input name="cableDate" v-model="orderinfo.cableDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('poeDate')}}</span>
      <div class="inputwidth"><a-input name="poeDate" v-model="orderinfo.poeDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('pcbDate')}}</span>
      <div class="inputwidth"><a-input name="pcbDate" v-model="orderinfo.pcbDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('mainboardDate')}}</span>
      <div class="inputwidth"><a-input name="mainboardDate" v-model="orderinfo.mainboardDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('productDate')}}</span>
      <div class="inputwidth"><a-input name="productDate" v-model="orderinfo.productDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('qc1Date')}}</span>
      <div class="inputwidth"><a-input name="qc1Date" v-model="orderinfo.qc1Date" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('qc2Date')}}</span>
      <div class="inputwidth"><a-input name="qc2Date" v-model="orderinfo.qc2Date" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('packDate')}}</span>
      <div class="inputwidth"><a-input name="packDate" v-model="orderinfo.packDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('warehousDate')}}</span>
      <div class="inputwidth"><a-input name="warehousDate" v-model="orderinfo.warehousDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('pqcDate')}}</span>
      <div class="inputwidth"><a-input name="pqcDate" v-model="orderinfo.pqcDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('testDate')}}</span>
      <div class="inputwidth"><a-input name="testDate" v-model="orderinfo.testDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('retestDate')}}</span>
      <div class="inputwidth"><a-input name="retestDate" v-model="orderinfo.retestDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('outDate')}}</span>
      <div class="inputwidth"><a-input name="outDate" v-model="orderinfo.outDate" v-day/></div>
    </div>
    <div><span>{{$t('remark')}}</span><a-textarea name="remark" v-model="orderinfo.remark" :auto-size="{ minRows: 2, maxRows: 3 }"/></div>
    <div
      :style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
      }"
    >
      <a-button style="width: 150px" type="primary" html-type="submit">
        {{$t('sumbit')}}
      </a-button>
    </div>
  </form>
</template>

<script>
import { Input, Button } from "ant-design-vue";
export default {
  components: {
    AInput: Input,
    AButton: Button,
    ATextarea: Input.TextArea
  },
  props:{
    id: {
        type: String
    },
  },
  data() {
    return {
        orderinfo: {}
    };
  },
  watch: {
    id:  {
      immediate: true,
      handler (val) {
        this.$axios.get(this.$baseurl + 'oneorder?id=' + val).then((res)=>{
            this.orderinfo = res.data[0];
        });
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let fd = new FormData(document.getElementById("oForm"));
      fd.append("id",this.$props.id)
      this.$axios.post(this.$baseurl + 'modifyorder', fd).then((res)=>{
        if (res.data==1) {
            alert(this.$t('modifyok'));
            this.$emit("modifyok",this.orderinfo);
        } else {
            alert(this.$t('modifyerr'));
        }
      })
    },
  },
};
</script>
<style scoped>
.item {
  display: inline-block;
  margin: 0 15px 6px 0;
}
.itemtext {
  display: inline-block;
  width: 180px;
}
.inputwidth {
  display: inline-block;
  width: 190px;
}
</style>