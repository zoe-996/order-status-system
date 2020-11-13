<template>
  <form id="orderForm" @submit="onSubmit">
    <div class="item">
      <span class="itemtext">{{$t('PINo')}}</span>
      <div class="inputwidth"><a-input name="PINo" /></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('No')}}</span>
      <div class="inputwidth"><a-input name="No"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('BVNo')}}</span>
      <div class="inputwidth"><a-input name="BVNo"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('modelName')}}</span>
      <div class="inputwidth"><a-input name="modelName"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('quantit')}}</span>
      <div class="inputwidth"><a-input name="quantit"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('modelType')}}</span>
      <div class="inputwidth"><a-input name="modelType"/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('PIDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="PIDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('modelDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="modelDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('payDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="payDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('orderConfDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="orderConfDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('sysDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="sysDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('houseDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="houseDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('lensDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="lensDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('boardDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="boardDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('cableDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="cableDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('poeDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="poeDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('pcbDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="pcbDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('mainboardDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="mainboardDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('productDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="productDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('qc1Date')}}</span>
      <div class="inputwidth"><a-input :value="today" name="qc1Date" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('qc2Date')}}</span>
      <div class="inputwidth"><a-input :value="today" name="qc2Date" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('packDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="packDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('warehousDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="warehousDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('pqcDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="pqcDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('testDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="testDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('retestDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="retestDate" v-day/></div>
    </div>
    <div class="item">
      <span class="itemtext">{{$t('outDate')}}</span>
      <div class="inputwidth"><a-input :value="today" name="outDate" v-day/></div>
    </div>
    <div><span>{{$t('remark')}}</span><a-textarea name="remark" :auto-size="{ minRows: 2, maxRows: 3 }"/></div>
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
  data() {
    return {
      today: ''
    };
  },
  mounted(){
    let day = new Date;
    let y = day.getFullYear();
    let m = day.getMonth() + 1;
    let d = day.getDate();
    this.today = y + '-' + m + '-' + d;
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let fd = new FormData(document.getElementById("orderForm"));
      this.$axios.post(this.$baseurl + 'orderdata', fd).then((res)=>{
        if (res.data==1) {
            alert(this.$t('addok'));
            this.$emit("addok");
        } else {
            alert(this.$t('adderr'));
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