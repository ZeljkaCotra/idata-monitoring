(this.webpackJsonpidata=this.webpackJsonpidata||[]).push([[0],{141:function(e,t,a){e.exports=a.p+"static/media/logo.39fadd87.png"},149:function(e,t,a){e.exports=a(680)},155:function(e,t,a){},680:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(9),l=a.n(n),i=(a(154),a(155),a(74)),s=a.n(i),c=a(138),d=a(78),m=a(21),u=a(22),p=a(24),h=a(23),f=a(50),y=a.n(f),E=a(701),v=a(145),b=a(699),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(m.a)(this,a),(o=t.call(this,e)).change=function(e){"Process name"===e.target.placeholder?(o.props.callFilterProcess(e.target.value),o.setState({value:e.target.value})):(o.props.callFilterStatus(e.target.value),o.setState({value:e.target.value}))},o.state={value:""},o}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tabSelect,a=this.props.onChange;return"Data"===t?r.a.createElement(E.a,{className:"form-inline datasetForm",role:"form"},r.a.createElement(E.a.Row,{className:"row d-flex dtSetRow"},r.a.createElement(E.a.Group,{controlId:"formGridDatasetName",className:"form-group form-dataset-name"},r.a.createElement(E.a.Label,{className:"col-md-auto control-label formLabel"},"Dataset name"),r.a.createElement("div",{className:"col colDts"},r.a.createElement(E.a.Control,{placeholder:"Enter dataset name",className:"form-control-static selectOpt",onChange:a}))),!this.props.author&&r.a.createElement(E.a.Group,{controlId:"formGridResult",className:"form-group flex-grow-1 mr-auto form-group"},r.a.createElement(E.a.Label,{className:"col-md-auto control-label formLabel"},"Status"),r.a.createElement("div",{className:"col colRsp"},r.a.createElement(E.a.Control,{as:"select",defaultValue:"All",className:"form-control-static selectOpt",onChange:a},r.a.createElement("option",null,"All"),r.a.createElement("option",null,"Info"),r.a.createElement("option",null,"Warning"),r.a.createElement("option",null,"Error"))),r.a.createElement("div",{className:"refreshBtnDiv",onClick:this.props.loadMoreData()},r.a.createElement(b.a,{"aria-label":"refresh",className:"refreshBtn",size:"small"},r.a.createElement("i",{className:"fa fa-refresh float-right","aria-hidden":"true"})))),this.props.author&&r.a.createElement(E.a.Group,{controlId:"formBtn",className:"form-group flex-grow-1 mr-auto"},r.a.createElement("div",{className:"col col-new-dataset"},r.a.createElement(v.a,{className:"btn btn-primary float-right",onClick:this.props.addNewDataset},"New dataset"))))):"Logs"===t?r.a.createElement(E.a,{className:"form-inline",role:"form"},r.a.createElement(E.a.Row,{className:"row d-flex dtSetRow form-row"},r.a.createElement(E.a.Group,{controlId:"formBtn",className:"form-group"},r.a.createElement("div",{className:"col"},r.a.createElement("svg",{width:"2.3em",height:"2.3em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-square-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",onClick:function(e){return window.location.href="/"}},r.a.createElement("path",{fillRule:"evenodd",d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"})))),r.a.createElement(E.a.Group,{controlId:"formGridState",className:"form-group logsGroup"},r.a.createElement(E.a.Label,{className:"col formLabel"},"State"),r.a.createElement("div",{className:"col colLog"},r.a.createElement(E.a.Control,{as:"select",className:"form-control-static selectOptState",onChange:this.change,value:this.state.value},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"end"},"End"),r.a.createElement("option",{value:"begin"},"Begin"),r.a.createElement("option",{value:"processing"},"Processing")))),r.a.createElement(E.a.Group,{controlId:"formGridLogsName",className:"form-group flex-grow-1 mr-auto form-group form-group"},r.a.createElement(E.a.Label,{className:"col-md-auto control-label formLabel form-label"},"Process name"),r.a.createElement("div",{className:"col colLog"},r.a.createElement(E.a.Control,{placeholder:"Process name",className:"form-control-static selectOpt form-control processFilter",onChange:this.change,style:{width:"95%"}})),r.a.createElement("div",{className:"refreshBtnDiv",onClick:function(){return e.props.pipelineToken(e.props.refreshToken)}},r.a.createElement(b.a,{"aria-label":"refresh",className:"refreshBtn",size:"small"},r.a.createElement("i",{className:"fa fa-refresh float-right","aria-hidden":"true"})))))):void 0}}]),a}(o.Component),g=a(144),w=a(38),k=a(139),F=a.n(k),T=a(40),N=a.n(T),C=a(700),x=a(698),O=a(20),D={All:"",end:"end",begin:"begin",processing:"processing"},I=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(m.a)(this,a),(o=t.call(this,e)).columnHover=function(e,t,a,o){return e},o.formatCopyData=function(e){return delete e.id,delete e.copy,JSON.stringify(e,null,2).replace(/["{[,}\]]/g,"").replace(/\\n/g,"").replace(/\\t/g,"")},o.toggle=o.toggle.bind(Object(w.a)(o)),o.tooltipCopyFormatter=o.tooltipCopyFormatter.bind(Object(w.a)(o)),o.formatCopyData=o.formatCopyData.bind(Object(w.a)(o)),o.state={pipelineToken:"",popoverOpen:!1,columnWidths:[178.05,160,190,190,190,100,100,200,50]},o}return Object(u.a)(a,[{key:"enumFormatter",value:function(e,t,a){return a[e]}},{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"showCopyIcn",value:function(e){this.setState({showCopyIcon:!0})}},{key:"tooltipFormatter",value:function(e,t){return r.a.createElement(C.a,{placement:"left",overlay:r.a.createElement(x.a,{id:String(t.id)},e)},r.a.createElement("span",null,e))}},{key:"copyToClipboard",value:function(e){if("undefined"!=typeof navigator.clipboard)navigator.clipboard.writeText(e).then((function(){}),(function(e){console.log("unsuccessful!",e)}));else{var t=document.createElement("textarea");t.value=e,t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(a){console.log("Was not possible to copy te text: ",a)}document.body.removeChild(t)}}},{key:"tooltipCopyFormatter",value:function(e,t){var a=this,o=this.formatCopyData(t);return r.a.createElement(C.a,{placement:"left",overlay:r.a.createElement(x.a,{id:String(t.id)},"Copy")},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-copy",onClick:function(){a.copyToClipboard(o),alert(o)}})))}},{key:"componentWillReceiveProps",value:function(e){e.filterKeyword&&this.refs.stateNameCol.applyFilter(e.filterKeyword),""===e.filterProcessKeyword&&this.refs.processNameCol.applyFilter(e.filterProcessKeyword),e.filterProcessKeyword&&this.refs.processNameCol.applyFilter(e.filterProcessKeyword)}},{key:"componentDidMount",value:function(){for(var e=this,t=function(t){if(0===window.$(".react-bs-container-header .table th:eq(".concat(t,")")).length)return"break";window.$(".react-bs-container-header .table th:eq(".concat(t,")")).resizable({minWidth:50,handles:"e",resize:function(a,o){var r=Object(g.a)(e.state.columnWidths);r[t]=o.size.width,e.setState({columnWidths:r})}})},a=0;a<12;a+=1){if("break"===t(a))break}}},{key:"render",value:function(){var e=this,t=this.props,a=t.columns,o=t.dataSource,n=this.props.isSelect,l=this.props.keyField;this.props.dataSource.forEach((function(e){e.copy="true"}));var i={onClick:function(t,a,o){"pipelineToken"in a&&(e.props.setRefreshToken(a.pipelineToken),e.props.pipelineToken(a.pipelineToken))}},s={mode:"checkbox",clickToSelect:!0,hideSelectAll:!0,style:{width:"2%"},onSelect:function(t,a,o,r){"pipelineToken"in t&&(e.props.setRefreshToken(t.pipelineToken),e.props.pipelineToken(t.pipelineToken),e.props.onTurn("logs"))}};return n?r.a.createElement("div",{className:"container table-responsive"},r.a.createElement(F.a,{bootstrap4:!0,keyField:l,bordered:!1,striped:!0,hover:!0,selectRow:s,data:o,sort:{dataField:"endTime",order:"desc"},columns:a,filter:N()(),rowEvents:i,headerClasses:"custom-row-class"})):r.a.createElement("div",{className:"table-responsive"},r.a.createElement(O.BootstrapTable,{data:this.props.dataSource,bordered:!1,striped:!0,hover:!0,dataFormat:this.props.dataFormat,filter:N()(),containerStyle:{width:"1424.371"},tableStyle:{},bodyStyle:{},headerStyle:{}},r.a.createElement(O.TableHeaderColumn,{dataField:"sqsDateTime",dataFormat:this.tooltipFormatter,dataSort:!0,thStyle:{width:"".concat(this.state.columnWidths[0],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[0],"px")}},"TIME"),r.a.createElement(O.TableHeaderColumn,{isKey:!0,dataField:"processName",dataFormat:this.tooltipFormatter,dataSort:!0,thStyle:{width:"".concat(this.state.columnWidths[1],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[1],"px")},ref:"processNameCol",filter:{type:"TextFilter",defaultValue:""}},"PROCESS"),r.a.createElement(O.TableHeaderColumn,{dataField:"publisherToken",dataSort:!0,dataFormat:this.tooltipFormatter,thStyle:{width:"".concat(this.state.columnWidths[2],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[2],"px")}},"PUBLISHER TOKEN"),r.a.createElement(O.TableHeaderColumn,{dataField:"pipelineToken",dataSort:!0,dataFormat:this.tooltipFormatter,thStyle:{width:"".concat(this.state.columnWidths[3],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[3],"px")}},"PIPELINE TOKEN"),r.a.createElement(O.TableHeaderColumn,{dataField:"filename",dataSort:!0,dataFormat:this.tooltipFormatter,thStyle:{width:"".concat(this.state.columnWidths[4],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[4],"px")}},"FILENAME"),r.a.createElement(O.TableHeaderColumn,{dataField:"state",thStyle:{width:"".concat(this.state.columnWidths[5],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[5],"px")},dataSort:!0,ref:"stateNameCol",filterFormatted:!0,dataFormat:this.enumFormatter,formatExtraData:D,filter:{type:"SelectFilter",options:D}},"STATE"),r.a.createElement(O.TableHeaderColumn,{dataField:"code",dataFormat:this.tooltipFormatter,dataSort:!0,thStyle:{width:"".concat(this.state.columnWidths[6],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[6],"px")}},"CODE"),r.a.createElement(O.TableHeaderColumn,{dataField:"description",dataSort:!0,dataFormat:this.tooltipFormatter,thStyle:{width:"".concat(this.state.columnWidths[7],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[7],"px")}},"DESCRIPTION"),r.a.createElement(O.TableHeaderColumn,{dataField:"copy",dataFormat:this.tooltipCopyFormatter,thStyle:{width:"".concat(this.state.columnWidths[8],"px"),border:"1px solid white"},tdStyle:{width:"".concat(this.state.columnWidths[8],"px")}})))}}]),a}(o.Component),j=[{dataField:"sqsDatatimeCreated",text:"TIME"},{dataField:"processName",text:"PROCESS"},{dataField:"publisherToken",text:"PUBLISHER TOKEN"},{dataField:"pipelineToken",text:"PIPELINE TOKEN"},{dataField:"filename",text:"FILENAME"},{dataField:"state",text:"STATE"},{dataField:"code",text:"CODE"},{dataField:"description",text:"DESCRIPTION",classes:"descr",ids:"descr"}],A=a(37),P=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(e){var a;return Object(m.a)(this,o),(a=t.call(this,e)).onResultFilter=null,a.onStatusFilter=null,a.onDsNameFilter=null,a.onStateFilter=null,a.onProcessFilter=null,a.columnsData=[{dataField:"pipelineToken",hidden:!0},{dataField:"dataset",text:"DATASET",filter:Object(T.customFilter)(),sort:!0,filterRenderer:function(e,t){return a.onDsNameFilter=e,null},onSelect:function(e,t,o,r){a.setState({columnSelected:!0}),a.setState({key:"logs"})}},{dataField:"process",text:"CURRENT PROCESS"},{dataField:"startTime",text:"START TIME"},{dataField:"endTime",text:"END TIME"},{dataField:"totalTime",text:"TOTAL TIME"},{dataField:"status",text:"STATUS",filter:Object(T.customFilter)(),filterRenderer:function(e,t){return a.onResultFilter=e,null}}],a.onValueChange=function(e){var t="",o=e.target.id,r=e.target.value;"formGridResult"===o&&("All"!==r&&(t=r),a.onResultFilter(t)),"formGridStatus"===o&&("All"!==r&&(t=r),a.onStatusFilter(t)),"formGridDatasetName"===o&&("All"!==r&&(t=r),a.onDsNameFilter(t))},a.showError=r.a.createRef(),a.state={mounted:!1,applyFilter:!1,filterKeyword:"",filterProcessKeyword:"",columnSelected:!1,key:"data",i:0,filterValue:"",refreshToken:"",datasets:[],dataSourceLogs:[]},a}return Object(u.a)(o,[{key:"componentDidUpdate",value:function(e){JSON.stringify(this.props.dataSource)!==JSON.stringify(e.dataSource)&&this.setState({datasets:this.props.dataSource})}},{key:"setupAWSSdk",value:function(){var e=a(115);return e.config=new e.Config,e.config.accessKeyId="AKIAXUQUGMXPL565SOHN",e.config.secretAccessKey="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",e.config.region="us-east-1",e}},{key:"setActive",value:function(e){this.setState({active:e})}},{key:"onTurn",value:function(e){this.setState({key:e})}},{key:"alreadyMounted",value:function(e){this.setState({mounted:e})}},{key:"setRefreshToken",value:function(e){this.setState({refreshToken:e})}},{key:"callFilterStatus",value:function(e){this.setState({applyFilter:!0,filterKeyword:e})}},{key:"callFilterProcess",value:function(e){this.setState({applyFilter:!0,filterProcessKeyword:e})}},{key:"fetchLogsData",value:function(e){var t=this;Object(A.trackPromise)(y.a.get("https://32na4au3tj.execute-api.us-east-1.amazonaws.com/dev/dataset/status/"+e,{headers:{"X-API-Key":"egW3Iiig443VKm1dad1ae89VZA7EcInc6NSY0JmL"}}).then((function(e){t.setState({dataSourceLogs:e.data})})).catch((function(e){console.log(e)})))}},{key:"render",value:function(){var e=this.state.datasets,t=[];return e.forEach((function(e){t.push(e.name)})),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 tabWrapper"},"data"===this.state.key&&r.a.createElement("div",{className:"container-fluid tabCont"},r.a.createElement(S,{tabSelect:"Data",author:!1,onChange:this.onValueChange,loadMoreData:this.props.loadMoreData}),r.a.createElement(I,{keyField:"pipelineToken",columns:this.columnsData,dataSource:e,isSelect:!0,onTurn:this.onTurn.bind(this),pipelineToken:this.fetchLogsData.bind(this),setRefreshToken:this.setRefreshToken.bind(this)})),"logs"===this.state.key&&r.a.createElement("div",{className:"container-fluid tabCont"},r.a.createElement(S,{tabSelect:"Logs",callFilterStatus:this.callFilterStatus.bind(this),callFilterProcess:this.callFilterProcess.bind(this),loadMoreData:this.props.loadMoreData,refreshToken:this.state.refreshToken,pipelineToken:this.fetchLogsData.bind(this)}),r.a.createElement(I,{keyField:"pipelineToken",columns:j,resizable:!0,dataSource:this.state.dataSourceLogs,applyFilter:this.state.applyFilter,filterKeyword:this.state.filterKeyword,filterProcessKeyword:this.state.filterProcessKeyword,setRefreshToken:this.setRefreshToken.bind(this),setActive:this.setActive})))))}}]),o}(o.Component),W=a(77),L=a(141),R=a.n(L),K=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(W.a,{bg:"light",variant:"light"},r.a.createElement(W.a.Brand,null,r.a.createElement("img",{alt:"logo",src:R.a,height:"70",className:"d-inline-block align-top"})," "))}}]),a}(o.Component),M=a(142),H=a(13),G=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(e){var a;return Object(m.a)(this,o),(a=t.call(this,e)).handleClick=function(){a.setState(Object(d.a)(Object(d.a)({},a.state),{},{isEmptyState:!0,isAddTripState:!1}))},a.state={dataset:[],newDataSource:[],isEmptyState:!0,isAddTripState:!1,showErrorAlert:!1},a}return Object(u.a)(o,[{key:"fetchData",value:function(){var e=this;Object(A.trackPromise)(y.a.get("https://32na4au3tj.execute-api.us-east-1.amazonaws.com/dev/dataset/status/",{headers:{"X-API-Key":"egW3Iiig443VKm1dad1ae89VZA7EcInc6NSY0JmL"}}).then((function(t){var a=t.data;e.setState({dataset:a})})).catch((function(e){console.log(e)})))}},{key:"setupAWSSdk",value:function(){var e=a(115);return e.config=new e.Config,e.config.accessKeyId="AKIAXUQUGMXPL565SOHN",e.config.secretAccessKey="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",e.config.region="us-east-1",e}},{key:"getDynamoDbData",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,o,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.setupAWSSdk()).config.update({dynamoDbCrc32:!1}),a=new t.DynamoDB.DocumentClient,e.prev=3,o={TableName:"edl-dataset"},e.next=7,a.scan(o).promise();case 7:r=e.sent,this.setState({newDataSource:r.Items}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getDynamoDbData(),this.fetchData()}},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement("div",null,"Loading..."):r.a.createElement(M.a,null,r.a.createElement(K,{onClick:function(){return e.handleClick.bind(e)}}),r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/"},r.a.createElement(P,{isDataset:!1,isAddTripState:!1,dataSource:this.state.dataset,loadMoreData:function(){return e.fetchData.bind(e)}}))))}}]),o}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(143),V=a.n(B),X=function(e){var t=Object(A.usePromiseTracker)().promiseInProgress;return console.disableYellowBox=!0,t&&r.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(V.a,{type:"ThreeDots",color:"#343a40",height:"50",width:"50"}))};l.a.render(r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t){}},[[149,1,2]]]);
//# sourceMappingURL=main.8b87b206.chunk.js.map