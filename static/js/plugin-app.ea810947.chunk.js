(self.webpackChunkdata_visualizer_app=self.webpackChunkdata_visualizer_app||[]).push([[2143],{8584:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>he});var s=a(3135),n=a(8594),l=a(4479),i=a(6329),r=a(3338),o=a(1006),u=a.n(o),d=a(4436),c=a(3665),p=a.n(c),f=a(2085),v=a(4805),m=a(6609),h=a(2703),g=a(2644),b=a(9551),y=a(7427),w=a(7538),E=a(1054),S=a(6206),D=a.n(S);const V={resource:"legendSets",params:e=>{let{ids:t}=e;return{fields:"id,displayName~rename(name),legends[id,displayName~rename(name),startValue,endValue,color]",filter:`id:in:[${t.join(",")}]`}}};var q=a(9630),C=a(4048),z=a(4110),x=a(7363),P=a(8943);const k=e=>(0,P.CU)(x.fW).getPeriods().find((t=>t.id===e[0].id))?x.fW:(0,P.CU)(x.O5).getPeriods().find((t=>t.id===e[0].id))?x.O5:void 0,O=v.vi,R=async(e,t,a)=>{const s=z.Z.getAnalytics(e),n=(new s.request).fromVisualization(t).withParameters(a).withIncludeNumDen(t.type===g.Zp),l=await s.aggregate.get(n);return[new s.response(l)]},T=e=>{let{yearlySeriesRes:t,currentMonth:a,currentDay:s}=e;const n=[],l=[],i=t.metaData.dimensions[O].slice().sort().reverse(),r="02"===a&&"29"===s;return i.forEach((e=>{n.push(t.metaData.items[e].name);const i=29===new Date(e,1,29).getDate();r&&!i?l.push(`${e}-02-28`):l.push(`${e}-${a}-${s}`)})),{yearlySeriesLabels:n,periodDates:l}},L=async e=>{let{analyticsEngine:t,visualization:a,options:s,yearlySeriesRes:n,currentMonth:l,currentDay:i}=e;const r=[],o=[],u=n.metaData.dimensions[O].slice().sort().reverse(),d=u.shift();r.push(n.metaData.items[d].name),o.push(`${d}-${l}-${i}`);const c=(new t.request).fromVisualization(a).withParameters(s).withRelativePeriodDate(`${d}-${l}-${i}`).withSkipData(!0).withSkipMeta(!1),p=(await t.aggregate.fetch(c)).metaData.dimensions[O].pop(),[f,v]=p.split("W"),m=d-f,h=u.reduce(((e,t)=>(r.push(n.metaData.items[t].name),e.push(`${t-m}W${v}`),"53"===v&&e.push(t-m+"W52"),e)),[]);if(h.length){const e=(new t.request).addPeriodDimension(h).withSkipData(!0).withSkipMeta(!1).withIncludeMetadataDetails(!0),a=await t.aggregate.fetch(e),s=[];a.metaData.dimensions[O].sort().reverse().forEach((e=>{const t=e.substr(0,4);if(!s.includes(t)){const n=new Date(a.metaData.items[e].endDate);n.setDate(n.getDate()+1),o.push(`${n.getFullYear()}-${(""+(n.getMonth()+1)).padStart(2,0)}-${(""+n.getDate()).padStart(2,0)}`),s.unshift(t)}}))}return{yearlySeriesLabels:r,periodDates:o}};const M={axes:{requestable:!1,savable:!0,defaultValue:[]},colorSet:{defaultValue:a(222).C7,requestable:!1,savable:!0},cumulativeValues:{defaultValue:!1,requestable:!1,savable:!0},hideEmptyRowItems:{defaultValue:"NONE",requestable:!1,savable:!0},seriesKey:{defaultValue:{},requestable:!1,savable:!0},legend:{defaultValue:{},requestable:!1,savable:!0},noSpaceBetweenColumns:{defaultValue:!1,requestable:!1,savable:!0},percentStackedValues:{defaultValue:!1,requestable:!1,savable:!0},regressionType:{defaultValue:"NONE",requestable:!1,savable:!0},showData:{defaultValue:!0,requestable:!1,savable:!0},aggregationType:{defaultValue:"DEFAULT",requestable:!0,savable:!0},completedOnly:{defaultValue:!1,requestable:!0,savable:!0},hideSubtitle:{defaultValue:!1,requestable:!1,savable:!0},hideTitle:{defaultValue:!1,requestable:!1,savable:!0},sortOrder:{defaultValue:"0",requestable:!1,savable:!0},subtitle:{defaultValue:void 0,requestable:!1,savable:!0},title:{defaultValue:void 0,requestable:!1,savable:!0},series:{defaultValue:[],requestable:!1,savable:!0},fontStyle:{defaultValue:{},requestable:!1,savable:!0},outlierAnalysis:{requestable:!1,savable:!0,defaultValue:null},icons:{defaultValue:!1,requestable:!1,savable:!0},colTotals:{defaultValue:!1,requestable:!1,savable:!0},colSubTotals:{defaultValue:!1,requestable:!1,savable:!0},rowTotals:{defaultValue:!1,requestable:!1,savable:!0},rowSubTotals:{defaultValue:!1,requestable:!1,savable:!0},showDimensionLabels:{defaultValue:!1,requestable:!1,savable:!0},hideEmptyColumns:{defaultValue:!1,requestable:!1,savable:!0},hideEmptyRows:{defaultValue:!1,requestable:!1,savable:!0},skipRounding:{defaultValue:!1,requestable:!0,savable:!0},numberType:{defaultValue:"VALUE",requestable:!1,savable:!0},showHierarchy:{defaultValue:!1,requestable:!0,savable:!0},displayDensity:{defaultValue:"NORMAL",requestable:!1,savable:!0},fontSize:{defaultValue:"NORMAL",requestable:!1,savable:!0},digitGroupSeparator:{defaultValue:"SPACE",requestable:!1,savable:!0},approvalLevel:{defaultValue:void 0,requestable:!0,savable:!1},fixColumnHeaders:{defaultValue:!1,requestable:!1,savable:!0},fixRowHeaders:{defaultValue:!1,requestable:!1,savable:!0},reportingPeriod:{defaultValue:!1,requestable:!1,savable:!0},organisationUnit:{defaultValue:!1,requestable:!1,savable:!0},parentOrganisationUnit:{defaultValue:!1,requestable:!1,savable:!0},grandParentOrganisationUnit:{defaultValue:!1,requestable:!1,savable:!0},regression:{defaultValue:!1,requestable:!1,savable:!0},cumulative:{defaultValue:!1,requestable:!1,savable:!0},measureCriteria:{defaultValue:void 0,requestable:!0,savable:!0},topLimit:{defaultValue:"0",requestable:!1,savable:!0}},$=()=>Object.entries(M).filter((e=>e[1].requestable)),j=e=>(e||[]).map((e=>{var t;return{...e,items:null==e||null===(t=e.items)||void 0===t?void 0:t.filter((e=>e.id!==q.aW))}})),I=async e=>{let{dataEngine:t,visualization:a,filters:s,forDashboard:n,displayProperty:l}=e;const i={...a,columns:j(a.columns),rows:j(a.rows),filters:j(a.filters)},r=((e,t,a)=>{const s=$().reduce(((t,a)=>{let[s,n]=a;return void 0!==e[s]&&e[s]!==n.defaultValue&&(t[s]=e[s]),t}),{});if(t.relativePeriodDate&&(s.relativePeriodDate=t.relativePeriodDate),a&&(s.displayProperty=a.toUpperCase()),t.userOrgUnit&&t.userOrgUnit.length){const e=t.userOrgUnit.map((e=>e.split("/").slice(-1)[0]));s.userOrgUnit=e.join(";")}return s})(i,s,l),o={dashboard:n};if((0,g.zD)(i.type)){const{responses:e,yearlySeriesLabels:a}=await(async(e,t,a)=>{const s=z.Z.getAnalytics(e);let n=(new s.request).addPeriodDimension(t.yearlySeries).withSkipData(!0).withSkipMeta(!1).withIncludeMetadataDetails(!0);a.relativePeriodDate&&(n=n.withRelativePeriodDate(a.relativePeriodDate));const l=await s.aggregate.fetch(n),i=[],r=[],o=new Date,u=(""+o.getDate()).padStart(2,0),d=(""+(o.getMonth()+1)).padStart(2,0),c=(0,C.Z)(t,O);if(k(c)===x.fW&&!c[0].id===x.uu){const e=await L({analyticsEngine:s,visualization:t,options:a,yearlySeriesRes:l,currentMonth:d,currentDay:u});i.push(...e.periodDates),r.push(...e.yearlySeriesLabels)}else if(k(c)===x.O5){const e=T({yearlySeriesRes:l,currentMonth:d,currentDay:u});i.push(...e.periodDates),r.push(...e.yearlySeriesLabels)}else l.metaData.dimensions[O].sort().reverse().forEach((e=>{r.push(l.metaData.items[e].name),i.push(`${e}-${d}-${u}`)}));const p=i.reduce(((e,n)=>{const l=(new s.request).fromVisualization(t).withParameters(a).withRelativePeriodDate(n);return e.push(s.aggregate.get(l)),e}),[]);return Promise.all(p).then((e=>({responses:e.map((e=>new s.response(e))),yearlySeriesLabels:r})))})(t,i,r),s=(0,C.Z)(i,v.vi),n=k(s),l=((e,t)=>{const a=e.reduce(((e,t)=>(e.push(t.metaData.dimensions.pe),e)),[]);if(t===x.O5){a.sort(((e,t)=>e[0].substr(-2)-t[0].substr(-2)));const e=a.shift().map((e=>[e]));return a.forEach((t=>{t.forEach((t=>{const a=t.match(/(\d{4})(\d{2})(\d{2})/),s=a[2],n=a[3],l=e.findIndex((e=>e[0].substr(4)===`${s}${n}`));if(-1!==l)e[l].push(t);else if("02"===s&&"29"===n){const a=e.findIndex((e=>-1!==e.findIndex((e=>/0228$/.test(e)))));-1!==a?e.splice(a+1,0,[t]):e.push([t])}else e.push([t])}))})),e}if(t===x.fW){a.sort(((e,t)=>t[0].split("W")[1]-e[0].split("W")[1]));const e=a.shift().map((e=>[e]));return a.forEach((t=>{t.forEach((t=>{const[a,s]=t.split("W"),n=e.findIndex((e=>e[0].split("W")[1]===s));if(-1!==n)e[n].push(t);else if("1"===s){const a=e.findIndex((e=>-1!==e.findIndex((e=>/W2$/.test(e)))));-1!==a?e[a].push(t):e.push([t])}else{const n=e.findIndex((e=>-1!==e.findIndex((e=>e===`${a}W${s-1}`))));e.splice(n+1,0,[t])}}))})),e}{const e=a.reduce(((e,t)=>(t.forEach(((t,a)=>{e[a].push(t)})),e)),Array.from({length:a[0].length},(()=>[])));return e}})(e,n),u=l.reduce(((e,t,a)=>(t.forEach((t=>e[t]=a)),e)),{}),d=n?((e,t)=>{switch(t){case x.fW:return e.map((e=>e[0].substr(4))).flat();case x.O5:return e.map((e=>e[0].substr(4).replace(/(\d{2})(\d{2})/,"$2-$1"))).flat()}})(l,n):(e=>{const t=e.reduce(((e,t)=>(e.metaData?t.metaData.dimensions.pe.length>e.metaData.dimensions.pe.length&&(e=t):e=t,e)),{}).metaData;return t.dimensions.pe.reduce(((e,a)=>{const s=t.items[a].name;return e.push(s.replace(/\s+\d{4}$/,"")),e}),[])})(e);return{responses:e,extraOptions:{...o,yearlySeries:a,xAxisLabels:d,periodKeyAxisIndexMap:u}}}return{responses:await R(t,i,r),extraOptions:o}};var N=a(5282);const W=e=>{let{visualization:t,responses:a,extraOptions:s,legendSets:n,id:l,style:i,onChartGenerated:r,animation:o,onToggleContextualMenu:u}=e;const d=(0,f.useRef)(void 0),c=(0,f.useRef)(i),p=(0,f.useRef)(l),v=(0,f.useCallback)((e=>{const l=(0,N.cw)(a,t,d.current,{...s,animation:e,legendSets:n,onToggleContextualMenu:u},void 0,void 0,(0,g.Nh)(t.type)?"dhis":"highcharts");(0,g.Nh)(t.type)?r(l.visualization):r(l.visualization.getSVGForExport({sourceHeight:768,sourceWidth:1024}))}),[d,t,r,u,a,s,n]);return(0,f.useEffect)((()=>{v(o)}),[t,a,s]),(0,f.useEffect)((()=>{l!==p.current&&(v(0),p.current=l)}),[l]),(0,f.useEffect)((()=>{i.width===c.current.width&&i.height===c.current.height||(v(0),c.current=i)}),[i]),f.createElement("div",{ref:d,style:i})};W.defaultProps={visualization:{},filters:{},style:{},animation:200,id:null,onChartGenerated:Function.prototype},W.propTypes={extraOptions:p().object.isRequired,legendSets:p().arrayOf(p().object).isRequired,responses:p().arrayOf(p().object).isRequired,visualization:p().object.isRequired,animation:p().number,id:p().number,style:p().object,onChartGenerated:p().func,onToggleContextualMenu:p().func};const _=W;var A=a(6259),Z=a(4196),U=a(9676),F=a(1463),G=a(4813);const B=e=>{let{style:t={width:18,height:18}}=e;return f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:t},f.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),f.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",fill:"black"}))};B.propTypes={style:p().object};const H=B,K=e=>{let{style:t={width:18,height:18}}=e;return f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:t},f.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),f.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z",fill:"black"}))};K.propTypes={style:p().object};const Y=K,Q=e=>{let{config:t,ouLevels:a,onClick:n,reference:l,dataTest:i}=e;const r=(0,s.bQ)(),[o,u]=(0,f.useState)(void 0),[d,c]=(0,f.useState)(void 0),p=(0,f.useCallback)((async e=>await(0,m.M7)(r,e)),[r]);(0,f.useEffect)((()=>{u(null);t.ouId&&(async()=>{const e=await p(t.ouId);u(e)})()}),[t]),(0,f.useEffect)((()=>{if(c(null),null!=o&&o.children.length){const t=(e=o.children[0].level,a.find((t=>t.level===e)));t&&c(t)}var e}),[o]);const v={display:"inline-block",minWidth:200};return o?f.createElement(Z.r,{reference:l,placement:"right-start",dataTest:i},f.createElement(U.q,null,f.createElement(F.s,{dense:!0,label:A.Z.t("Change org unit"),dataTest:`${i}-org-unit`},(null==o?void 0:o.parent)&&f.createElement(f.Fragment,null,f.createElement(F.s,{dense:!0,icon:f.createElement(Y,null),label:f.createElement("span",{style:v},o.parent.name),onClick:()=>n({ou:{id:o.parent.id}}),dataTest:`${i}-org-unit-drill-up`}),d&&f.createElement(G.i,null)),d&&f.createElement(F.s,{dense:!0,icon:f.createElement(H,null),label:f.createElement("span",{style:v},A.Z.t("{{level}} level in {{orgunit}}",{level:d.name,orgunit:o.name})),onClick:()=>n({ou:{id:o.id,path:o.path,level:d.id}}),dataTest:`${i}-org-unit-drill-down`})))):null};Q.propTypes={config:p().object,dataTest:p().string,ouLevels:p().array,reference:p().object,onClick:p().func};const J=Q;var X=a(7209);const ee=e=>{let{responses:t,legendSets:a,visualization:s,style:n,id:l,onToggleContextualMenu:i}=e;return f.createElement("div",{style:n},f.createElement(X.Z,{visualization:s,data:t[0].response,legendSets:a,renderCounter:l,onToggleContextualMenu:i}))};ee.defaultProps={style:{}},ee.propTypes={legendSets:p().arrayOf(p().object).isRequired,responses:p().arrayOf(p().object).isRequired,visualization:p().object.isRequired,id:p().number,style:p().object,onToggleContextualMenu:p().func};const te=ee,ae="VisualizationPlugin_container__zLI-6",se="VisualizationPlugin_chartWrapper__qJc7d",ne="VisualizationPlugin_legendKey__rY4a7",le="VisualizationPlugin_legendKeyToggle__yN1ab",ie="VisualizationPlugin_wrapper__qtDqn",re="VisualizationPlugin_buttonMargin__Zo0d5",oe=e=>{var t,a;let{visualization:l,displayProperty:i,filters:r,forDashboard:o,id:u,style:d,onChartGenerated:c,onError:p,onLoadingComplete:S,onResponsesReceived:q,onDrill:C}=e;const z=(0,s.bQ)(),[x,P]=(0,f.useState)(void 0),[k,O]=(0,f.useState)(null),[R,T]=(0,f.useState)(void 0),[L,M]=(0,f.useState)({}),[$,j]=(0,f.useState)(!1),[N,W]=(0,f.useState)(u),[A,Z]=(0,f.useState)({width:0,height:0}),U=(0,f.useCallback)((e=>{if(null===e)return;const t=()=>Z({width:e.clientWidth,height:e.clientHeight}),a=new window.ResizeObserver(t);return a.observe(e),t(),a.disconnect}),[]);(0,f.useEffect)((()=>W(u)),[u]);const F=(e,t)=>{if(t.ouId)M(t),T(e);else if(t.category&&(1===l.rows.length&&l.rows[0].dimension===v.rx||2===l.rows.length&&l.rows[1].dimension===v.rx)){var a;const s=null===(a=Object.values(k.responses[0].metaData.items).find((e=>e.name===t.category&&k.responses[0].metaData.dimensions[v.rx].includes(e.uid))))||void 0===a?void 0:a.uid;M({ouId:s}),T(e)}else if(t.category&&l.columns.some((e=>e.dimension===v.rx))){var s;const a=null===(s=Object.values(k.responses[0].metaData.items).find((e=>e.name===t.series&&k.responses[0].metaData.dimensions[v.rx].includes(e.uid))))||void 0===s?void 0:s.uid;M({ouId:a}),T(e)}},G=()=>T(void 0),B=(0,f.useCallback)((async()=>{const e=await I({dataEngine:z,visualization:l,filters:r,forDashboard:o,displayProperty:i});return e.responses.length&&q(e.responses),e}),[z,r,o,i,q,l]),H=(0,f.useCallback)((async e=>{if(!e.length)return[];return await(async(e,t)=>(await e.query({legendSets:V},{variables:{ids:t}})).legendSets.legendSets)(z,e)}),[z]);if((0,f.useEffect)((()=>{(async()=>{const e=await(0,m.qB)(z);P(e)})()}),[z]),(0,f.useEffect)((()=>{O(null);(async()=>{var e,t,a,s,n,i,u;const{responses:d,extraOptions:c}=await B(l,r,o),p=d[0].metaData.dimensions.dx||[];if(Boolean(null===(e=l.icons)||void 0===e?void 0:e.length)&&p[0]&&null!==(t=d[0].metaData.items[p[0]])&&void 0!==t&&null!==(a=t.style)&&void 0!==a&&a.icon){const e=await fetch(d[0].metaData.items[p[0]].style.icon),t=(await e.text()).replaceAll("#333333","currentColor");c.icon=t}const f=[];switch(null===(s=l.legend)||void 0===s?void 0:s.strategy){case h.zv:null!==(n=l.legend)&&void 0!==n&&null!==(i=n.set)&&void 0!==i&&i.id&&f.push(l.legend.set.id);break;case h.EE:p.forEach((e=>{const t=d[0].metaData.items[e].legendSet;t&&f.push(t)}))}const v=await H(f);O({visualization:l,legendSets:v,responses:d,extraOptions:c}),j(null===(u=l.legend)||void 0===u?void 0:u.showKey),S()})().catch((e=>{p(e)}))}),[l,r,o]),!k||!x)return null;const K=null==R?void 0:R.getBoundingClientRect(),Y=K?{getBoundingClientRect:()=>K}:null;let Q=[];switch(null===(t=l.legend)||void 0===t?void 0:t.strategy){case h.EE:{if(!k.visualization.columns.some((e=>"dx"===e.dimension)))break;const e=Object.values(k.responses[0].metaData.items).filter((e=>k.legendSets.map((e=>e.id)).includes(e.legendSet))).map((e=>({itemId:e.uid,legendSet:e.legendSet}))),t=(l.series||[]).filter((e=>e.type===g.Cj)).map((e=>e.dimensionItem));Q=k.legendSets.filter((a=>e.filter((e=>!t.includes(e.itemId))).map((e=>e.legendSet)).includes(a.id)))}break;case h.zv:Q=k.legendSets}const X=(null===(a=Q)||void 0===a?void 0:a.length)>0&&(0,g.Dm)(k.visualization.type),ee=o&&X?{...d,width:d.width||A.width-($?200:36)}:d;ee.height||(ee.height=A.height||"100%");return f.createElement("div",{className:ae,ref:U},f.createElement("div",{className:se},k.visualization.type&&k.visualization.type!==g.Zp?f.createElement(_,{visualization:(0,y.C)(x,k.visualization),responses:k.responses,extraOptions:k.extraOptions,legendSets:Q,onToggleContextualMenu:C?F:void 0,id:o?N:u,onChartGenerated:c,style:ee}):f.createElement(te,{visualization:(0,y.C)(x,k.visualization),responses:k.responses,legendSets:Q,onToggleContextualMenu:C?F:void 0,id:u,style:ee})),X&&o?f.createElement(f.Fragment,null,$&&f.createElement("div",{className:ne,"data-test":"visualization-legend-key"},f.createElement("div",{className:D()(ie,re)},f.createElement(b.Z,{legendSets:Q}))),f.createElement("div",{className:le},f.createElement(w.z,{small:!0,secondary:!0,onClick:()=>{j(!$),W(N+1)},icon:f.createElement(E.Z,null),toggled:$}))):X&&null!==(oe=k.visualization.legend)&&void 0!==oe&&oe.showKey?f.createElement("div",{className:ne,"data-test":"visualization-legend-key"},f.createElement("div",{className:ie},f.createElement(b.Z,{legendSets:Q}))):void 0,K&&f.createElement(n.m,{onClick:G,dataTest:"visualization-drill-down-backdrop"},f.createElement(J,{reference:Y,config:L,ouLevels:x,onClick:e=>{G(),C(e)},dataTest:"visualization-drill-down-menu"})));var oe};oe.defaultProps={displayProperty:"name",filters:{},forDashboard:!1,onChartGenerated:Function.prototype,onError:Function.prototype,onLoadingComplete:Function.prototype,onResponsesReceived:Function.prototype,style:{},visualization:{}},oe.propTypes={displayProperty:p().string.isRequired,visualization:p().object.isRequired,filters:p().object,forDashboard:p().bool,id:p().number,style:p().object,onChartGenerated:p().func,onDrill:p().func,onError:p().func,onLoadingComplete:p().func,onResponsesReceived:p().func};const ue="READY",de="INSTALLING";function ce(e){let{installingWorker:t,onStateChange:a}=e;t.onstatechange=()=>{"activated"===t.state&&a(ue)}}function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},pe.apply(this,arguments)}const fe=()=>f.createElement(n.m,null,f.createElement(l.M,null,f.createElement(i.V,null))),ve=e=>{let{id:t,children:a,cacheNow:n,isParentCached:l}=e;const{startRecording:i,isCached:r,remove:o}=(0,s.Of)(t);return(0,f.useEffect)((()=>{n&&i({onError:console.error})}),[n]),(0,f.useEffect)((()=>{const e=u().on("removeCachedData",{window:window.parent},(()=>o()));return()=>e.cancel()}),[o]),(0,f.useEffect)((()=>{!l&&r&&o()}),[l]),f.createElement(s.MW,{id:t,loadingMask:fe},a)};ve.propTypes={cacheNow:p().bool,children:p().node,id:p().string,isParentCached:p().bool};const me=e=>{u().send(window.parent,"installationStatus",{installationStatus:e})},he=()=>{const[e,t]=(0,f.useState)(),[a,s]=(0,f.useState)(null),n=e=>t(e.data);return(0,f.useEffect)((()=>{u().send(window.parent,"getProps").then(n).catch((e=>console.error(e))),async function(e){let{onStateChange:t}=e;if(!navigator.serviceWorker)return null;const a=await navigator.serviceWorker.getRegistration();return a?a.active?ue:a.installing?(ce({installingWorker:a.installing,onStateChange:t}),de):(a.onupdatefound=()=>{t(de);const e=a.installing;e&&ce({installingWorker:e,onStateChange:t})},null):null}({onStateChange:me}).then(me);const e=u().on("newProps",{window:window.parent},n);return()=>e.cancel()}),[]),(0,f.useLayoutEffect)((()=>{const e=(0,d.Z)((()=>s((e=>"number"==typeof e?e+1:1))),300);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e?f.createElement("div",{style:{display:"flex",height:"100%",overflow:"hidden"}},f.createElement(ve,{id:e.cacheId,cacheNow:e.recordOnNextLoad,isParentCached:e.isParentCached},f.createElement(oe,pe({id:a},e))),f.createElement(r.k,{colors:!0,spacers:!0,elevations:!0})):null}},2480:()=>{},5042:()=>{}}]);