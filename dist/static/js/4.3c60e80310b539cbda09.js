webpackJsonp([4],{"1Rx3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("bEjd"),s=i("S2Wm"),a={name:"right-slider",data:function(){return{}},props:{width:{type:String,default:"760px"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},computed:{style:function(){var t={};return this.width&&(t.width=this.width),t}},methods:{handleClose:function(){this.hide(),this.$emit("update:visible",!1)},hide:function(){}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"r-slider-show"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"r-slider-container",style:t.style},[i("div",{staticClass:"r-slider__header"},[i("span",[t._v(t._s(t.title))]),t._v(" "),i("el-button",{staticClass:"close-button",attrs:{icon:"el-icon-close",type:"text",circle:"",size:"mini"},on:{click:t.handleClose}})],1),t._v(" "),i("div",{staticClass:"r-slider__body"},[t._t("default")],2)])])},staticRenderFns:[]};var l=i("VU/8")(a,r,!1,function(t){i("r7UW")},"data-v-3f64728c",null).exports,o=i("2hfY"),d=i("QUe6"),c=i("mMlH"),u={name:"admin",data:function(){return{listLoading:!1,today:Object(o.b)(new Date),currentScheduler:{},customerInfo:{},isShowRightSlide:!1,list:null,textMap:{create:"创建客户",update:"更新信息"},dialogStatus:"create",customerForm:{name:"",phone:"",gender:"",age:"",address:""},dialogVisible:!1,rules:{}}},components:{PanelGroup:n.default,RightSlider:l,SliderContent:s.default},created:function(){this.fetchEvent()},methods:{fetchEvent:function(){var t=this;this.listLoading=!0,d.a.getDateEvents(this.today).then(function(e){t.list=e.data,t.listLoading=!1})},rowClick:function(t){console.log(t),this.currentScheduler=t,this.isShowRightSlide=!0,this.retriveCustomer(t.event.customer.id)},retriveCustomer:function(t){var e=this;c.a.retriveCustomer(t).then(function(t){console.log(t.data),e.customerInfo=t.data})}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard-container"},[i("h1",[t._v("今日工作安排")]),t._v(" "),i("div",{staticClass:"table-wrapper"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:0,attrs:{data:t.list,"element-loading-text":"正在载入",border:"",fit:"","highlight-current-row":""},on:{"row-click":t.rowClick}},[i("el-table-column",{attrs:{align:"center",label:"预约时间",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.event.bookingTime))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"用户id",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.event.customer.id))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"姓名",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.event.customer.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"备注",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.event.memo))])]}}])})],1)],1),t._v(" "),i("right-slider",{attrs:{width:"760px",title:"详细信息",visible:t.isShowRightSlide},on:{"update:visible":function(e){t.isShowRightSlide=e}}},[i("slider-content",{attrs:{model:t.currentScheduler,customerInfo:t.customerInfo}})],1)],1)},staticRenderFns:[]};var v=i("VU/8")(u,h,!1,function(t){i("8ZCL")},"data-v-9ba7acf0",null);e.default=v.exports},"8ZCL":function(t,e){},r7UW:function(t,e){}});
//# sourceMappingURL=4.3c60e80310b539cbda09.js.map