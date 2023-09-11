"use strict";(self.webpackChunkrobinlinacre=self.webpackChunkrobinlinacre||[]).push([[25],{9625:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Et},default:function(){return jt},output_order:function(){return St}});var n=a(7294),r=a(7506),o=a(7825);function i(e){return e`# Arquero

Arquero is a library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of [dplyr](https://dplyr.tidyverse.org/), Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations. Arquero is Spanish for "archer": if datasets are [arrows](https://observablehq.com/@theneuralbit/introduction-to-apache-arrow), Arquero helps their aim stay true.`}function l(e){return e`Import Arquero and extend it to print HTML tables in Observable:`}async function s(e,t,a,n){const r=await e(`arquero@${t}`);return(await Promise.all(a.map((t=>e(t))))).forEach((e=>r.addPackage(e))),r.addTableMethod("view",n,{override:!0}),r}function u(){return"4.2.0"}function c(){return[]}function m(e){return e`Export a global reference to Arquero operations:`}function _(e){return e.op}function d(e){return e`To use the same setup in your own notebooks, add a cell with the following code:
~~~ js
import { aq, op } from '@uwdata/arquero'
~~~
`}function f(e){return e`To get started, see the [Introducing Arquero](https://observablehq.com/@uwdata/introducing-arquero) and [Arquero Cookbook](https://observablehq.com/@uwdata/arquero-cookbook) notebooks.`}function b(e){return e`To use Arquero outside of Observable, see [https://github.com/uwdata/arquero](https://github.com/uwdata/arquero).`}function p(e){return e`<hr>
## Examples

The core abstractions in Arquero are *data tables*, which model each column as an array of values, and *verbs* that transform data and return new tables. Verbs are table methods, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.
`}function h(e){return e`Average hours of sunshine per month, from [https://usclimatedata.com/](https://usclimatedata.com/):`}function g(e){return e.table({Seattle:[69,108,178,207,253,268,312,281,221,142,72,52],Chicago:[135,136,187,215,281,311,318,283,226,193,113,106],"San Francisco":[165,182,251,281,314,330,300,272,267,243,189,156]})}function v(e){return e`Sorted differences between Seattle and Chicago:`}function y(e,t){return e.derive({month:e=>t.row_number(),diff:e=>e.Seattle-e.Chicago}).select("month","diff").orderby("month").view({height:400})}function w(e){return e`Is Seattle more correlated with San Francisco or Chicago?`}function x(e,t){return e.rollup({corr_sf:t.corr("Seattle","San Francisco"),corr_chi:t.corr("Seattle","Chicago")}).view()}function k(e){return e`Summary statistics per city, as output objects:`}function q(e,t,a){return e.fold(t.all(),{as:["city","sun"]}).groupby("city").rollup({min:e=>a.min(e.sun),max:e=>a.max(e.sun),avg:e=>a.average(e.sun),med:e=>a.median(e.sun),skew:({sun:e})=>(a.mean(e)-a.median(e))/a.stdev(e)||0}).objects()}function E(e){return e`<hr>
## Utilities
`}function S(e){const t=e=>`<span style="color: #999;">${e}</span>`;return function(a,n={}){"number"==typeof n&&(n={limit:n});const r={...n.color};if("function"==typeof n.color)a.columnNames().forEach((e=>r[e]=n.color));else for(const e in r){const t=r[e];r[e]="function"==typeof t?t:()=>t}const o=(e,t,a)=>`padding: 1px 5px; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; max-width: ${+n.maxCellWidth||300}px;`+(r[e]?` background-color: ${r[e](t,a)};`:""),i=`max-height: ${+(n={limit:100,null:t,...n,style:{table:"margin: 0; border-collapse: collapse; width: initial;",td:o,th:o}}).height||270}px`,l=e`<div style="${`${i}; overflow-x: auto; overflow-y: auto;`}">${a.toHTML(n)}</div>`;return l.value=a,l}}function A(e,t){const a=e.module();return a.variable(t()).define(["md"],i),a.variable(t()).define(["md"],l),a.variable(t("aq")).define("aq",["require","aq_version","aq_packages","toView"],s),a.variable(t("aq_version")).define("aq_version",u),a.variable(t("aq_packages")).define("aq_packages",c),a.variable(t()).define(["md"],m),a.variable(t("op")).define("op",["aq"],_),a.variable(t()).define(["md"],d),a.variable(t()).define(["md"],f),a.variable(t()).define(["md"],b),a.variable(t()).define(["md"],p),a.variable(t()).define(["md"],h),a.variable(t("dt")).define("dt",["aq"],g),a.variable(t()).define(["md"],v),a.variable(t()).define(["dt","op"],y),a.variable(t()).define(["md"],w),a.variable(t()).define(["dt","op"],x),a.variable(t()).define(["md"],k),a.variable(t()).define(["dt","aq","op"],q),a.variable(t()).define(["md"],E),a.variable(t("toView")).define("toView",["html"],S),a}function j(e){return e`# Fellegi Sunter utils`}function $(){return[{uid:"1_l",fname:"John",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_l",fname:"Tom",sname:"Hanks",dob:"1956-07-09",town:"Concord"},{uid:"3_l",fname:"David",sname:"Smith",dob:"1981-08-21",town:"London"}]}function T(){return[{uid:"1_r",fname:"Jonathan",sname:"Smith",dob:"1989-03-02",town:"Bristol"},{uid:"2_r",fname:"David",sname:"Smith",dob:"1981-08-21",town:"Peckham"}]}function C(e,t){return e.from(t)}function M(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"fname",u_probabilities:[.8,.2],m_probabilities:[.2,.8],case_expression:e=>e.fname_l==e.fname_r?1:0},{num_levels:3,col_name:"sname",u_probabilities:[.9,.1],m_probabilities:[.2,.8],case_expression:e=>e.sname_l==e.sname_r?1:0},{col_name:"dob",u_probabilities:[.99,.01],m_probabilities:[.2,.8],case_expression:e=>e.dob_l==e.dob_r?1:0},{col_name:"town",u_probabilities:[.7,.3],m_probabilities:[.3,.7],case_expression:e=>e.town_l==e.town_r?1:0}]}}function N(e,t,a){return e(t,a)}function P(e){return e.view()}function L(e,t,a){return e(t,a)}function F(e){return e.view()}function W(e,t,a,n){return e(t,a,n).view()}function I(e,t){return function(a,n,r={}){let o=a.objects().map((function(t){return t.match_probability=e(t,n,r),t})),i=t.from(o);return i=i.relocate(["match_probability"],{after:"uid_r"}),i}}function D(e,t){return function(a,n,r={}){let o=n.comparison_columns,i=e(n.proportion_of_matches),l=o.reduce(((e,t)=>{let n="𝛾_"+t.col_name,o=a[n];if(-1==o)return e;let i=t.m_probabilities[o],l=t.u_probabilities[o],s=a[t.col_name+"_l"].toLowerCase(),u=a[t.col_name+"_r"].toLowerCase();if(s==u&&t.col_name in r){let e=r[t.col_name],a=e[s]||0,n=e[u]||0,o=Math.max(a,n);o>0&&(l=o)}return e+Math.log2(i/l)}),i);return t(l)}}function B(e,t){return function(a,n,r){null==r&&(r=n.comparison_columns.length);let o=n.comparison_columns.slice(0,r),i=e(n.proportion_of_matches),l={comparison_vector:[],gamma_symbols:[],m_values:[],u_values:[],m_symbols:[],u_symbols:[],bayes_factors:[],log2_bayes_factors:[],col_names:[],match_probability:null,lam:n.proportion_of_matches};o.forEach((e=>{let t="𝛾_"+e.col_name,n=a[t],r=e.m_probabilities[n],o=e.u_probabilities[n],i=e.col_name.replace("_","\\_");l.comparison_vector.push(n),l.gamma_symbols.push(`\\gamma_\\text{${i}}`),l.col_names.push(t),l.m_values.push(r),l.m_symbols.push(`m_{\\text{${i}},${n}}`),l.u_values.push(o),l.u_symbols.push(`u_{\\text{${i}},${n}}`),l.bayes_factors.push(r/o),l.log2_bayes_factors.push(Math.log2(r/o))}));let s=l.log2_bayes_factors.reduce(((e,t)=>e+t),i);l.match_probability=t(s);let u=n.proportion_of_matches;return l.size_of_match_portion=u*l.m_values.reduce(((e,t)=>e*t),1),l.size_of_non_match_portion=(1-u)*l.u_values.reduce(((e,t)=>e*t),1),l}}function O(e){return function(t,a,n){let r=e(t,a,n),o=r.m_values.map((e=>e.toPrecision(3))),i=r.u_values.map((e=>e.toPrecision(3))),l=r.lam.toPrecision(3),s=[l].concat(o),u=[`(1 - ${l})`].concat(i),c=s.join(" \\times "),m=u.join(" \\times "),_=r.match_probability.toPrecision(3),d=r.size_of_match_portion.toPrecision(3);return`\\frac{${c}}{(${c}) + (${m})}  \\newline[10pt] = \\frac{${d}}{${d} + ${r.size_of_non_match_portion.toPrecision(3)}}  \\newline[10pt] = ${_}`}}function R(e){return function(t,a){let n=e(t,a),r=n.m_symbols,o=n.u_symbols,i=(n.lam,["\\lambda"].concat(r)),l=["(1 - \\lambda)"].concat(o),s=i.join(" ");return`\\frac{${s}}{${s}) + ${l.join(" ")}}`}}function z(e,t,a,n){return e`${t(a.objects()[0],n)}
`}function H(e){return function(t,a,n){let r=e(t,a,n);return`\\bm{\\gamma} = [${r.gamma_symbols.join(", ")}]= [${r.comparison_vector.join(", ")}]`}}function J(e,t,a,n){return e`${t(a.objects()[0],n)}
`}function U(e){return e`\bm{\gamma} = [\gamma_\text{fname}, \gamma_\text{sname}]`}function V(e,t,a,n){return e`${t(a.objects()[0],n)}`}function Z(e,t,a){return e(t.objects()[0],a)}function G(e){return function(t,a){let n=e.from(t),r=e.from(a),o=n.join(r,((e,t)=>!0),null,{suffix:["_l","_r"]}),i=n.columnNames(),l=[];return i.forEach((e=>{l.push(e+"_l"),l.push(e+"_r")})),o=o.select(l),o}}function K(e){return function(t,a){let n=a.comparison_columns,r=t.objects();n.forEach((function(e){r.forEach((function(t){t["𝛾_"+e.col_name]=e.case_expression(t)}))})),r=e.from(r);let o=["uid_l","uid_r"];return n.forEach((e=>{o.push(e.col_name+"_l"),o.push(e.col_name+"_r"),o.push("𝛾_"+e.col_name)})),r=r.select(o),r}}function Y(){return function(e){return e/(e+1)}}function Q(e){return function(t){return e(2**t)}}function X(){return function(e){return e/(1-e)}}function ee(e){return function(t){return Math.log2(e(t))}}function te(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function ae(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/last_name.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.surname]=e.freq})),t}))}function ne(e,t){return{fname:e,sname:t}}function re(e){return e.fname.joshua}function oe(e){return e.sname.linacre}function ie(e,t){const a=e.module();a.variable(t()).define(["md"],j),a.variable(t("records_l")).define("records_l",$),a.variable(t("records_r")).define("records_r",T),a.variable(t("df_r")).define("df_r",["aq","records_r"],C),a.variable(t("splink_settings")).define("splink_settings",M),a.variable(t("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],N),a.variable(t()).define(["df_comparison"],P),a.variable(t("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],L),a.variable(t()).define(["df_gammas"],F),a.variable(t()).define(["get_df_e","df_gammas","splink_settings","term_freqs"],W),a.variable(t("get_df_e")).define("get_df_e",["get_match_probability","aq"],I),a.variable(t("get_match_probability")).define("get_match_probability",["prob_to_log2_bf","log2_bf_to_prob"],D),a.variable(t("get_match_probability_components")).define("get_match_probability_components",["prob_to_log2_bf","log2_bf_to_prob"],B),a.variable(t("get_m_u_formula_numbers")).define("get_m_u_formula_numbers",["get_match_probability_components"],O),a.variable(t("get_m_u_formula_symbols")).define("get_m_u_formula_symbols",["get_match_probability_components"],R),a.variable(t()).define(["tex","get_m_u_formula_symbols","df_gammas","splink_settings"],z),a.variable(t("get_comparison_vector_symbols_and_numbers")).define("get_comparison_vector_symbols_and_numbers",["get_match_probability_components"],H),a.variable(t()).define(["tex","get_comparison_vector_symbols_and_numbers","df_gammas","splink_settings"],J),a.variable(t()).define(["tex"],U),a.variable(t()).define(["tex","get_m_u_formula_numbers","df_gammas","splink_settings"],V),a.variable(t()).define(["get_match_probability_components","df_gammas","splink_settings"],Z),a.variable(t("get_df_comparison")).define("get_df_comparison",["aq"],G),a.variable(t("get_df_gammas")).define("get_df_gammas",["aq"],K),a.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Y),a.variable(t("log2_bf_to_prob")).define("log2_bf_to_prob",["bayes_factor_to_prob"],Q),a.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",X),a.variable(t("prob_to_log2_bf")).define("prob_to_log2_bf",["prob_to_bayes_factor"],ee);const n=e.module(A);return a.import("aq",n),a.import("op",n),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],te),a.variable(t("surname_lookup")).define("surname_lookup",["d3"],ae),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],ne),a.variable(t()).define(["term_freqs"],re),a.variable(t()).define(["term_freqs"],oe),a}function le(e){return e`# Waterfall chart`}function se(e){return e`### Objective

Take 
- a Splink settings object 
- A row of data from \`df_e\`
And turn it into the data needed for the waterfall chart.

`}function ue(e){return e`## Example`}function ce(){return{proportion_of_matches:.01,comparison_columns:[{num_levels:3,col_name:"first_name",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{num_levels:3,col_name:"surname",u_probabilities:[.8,.2],m_probabilities:[.2,.8]},{col_name:"date_of_birth",u_probabilities:[.99,.01],m_probabilities:[.2,.8]}]}}function me(){return{first_name_l:"John",first_name_r:"John","𝛾_first_name":1,surname_l:"Smith",surname_r:"Smith","𝛾_surname":1,date_of_birth_l:"1992-04-01",date_of_birth_l:"1992-04-02","𝛾_date_of_birth":0,other:"hi"}}function _e(){return{height:200}}function de(e,t,a,n){return e(t,a,n,!0)}function fe(e,t,a,n){return e(t,a,n,!1)}function be(e){return e`## Code`}function pe(e,t,a){return function(n,r,o,i,l={}){let s=e(n,r,l);return t(a(s,o,i))}}function he(){return function(e){let t={};return e.comparison_columns.forEach((e=>{let a=e.col_name;t[a]=e})),t}}function ge(e,t,a){return function(n,r,o={}){let i=e(r),l=t(n,r,o),s=[i].concat(l),u=a(r),c=s.reduce(((e,t)=>e+t.log2_bayes_factor),0);return u.bayes_factor=2**c,u.log2_bayes_factor=c,s.concat([u])}}function ve(e,t){return function(a,n,r,o){let i,l,s=a,u=n[s],c=s.replace("𝛾_",""),m=e(r)[c],_=n[c+"_l"],d=n[c+"_r"];if(-1==u)i=.5,l=.5;else if(i=m.u_probabilities[u],l=m.m_probabilities[u],_==d&&c in o){i=o[c][_]||i}let f=l/i;return{bayes_factor:f,column_name:c,gamma_column_name:"𝛾_"+c,gamma_index:u,level_name:"level_"+u,log2_bayes_factor:t(f),m_probability:l,num_levels:null,u_probability:i,value_l:_,value_r:d}}}function ye(e,t){return function(a){return{bayes_factor:e(a.proportion_of_matches),column_name:"Prior",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:t(a.proportion_of_matches),m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}}}function we(e){return function(t,a,n){let r=Object.keys(t);return r=r.filter((e=>e.includes("𝛾_"))),r.map((r=>e(r,t,a,n)))}}function xe(){return function(e){return{bayes_factor:null,column_name:"Final score",gamma_column_name:"",gamma_index:"",level_name:null,log2_bayes_factor:null,m_probability:null,num_levels:null,u_probability:null,value_l:"",value_r:""}}}function ke(e){return function(t,a,n=!1){let r=JSON.parse(JSON.stringify(e));r.data.values=t;let o={...r,...a};if(n){o.layer[1].encoding.y.axis=!1,o.layer[0].layer[2].encoding.text={type:"nominal",field:"up_down_emoji"},o.layer[0].layer[2].encoding.opacity={condition:{value:0,test:"datum.column_name == 'Final score' || datum.column_name == 'Prior'"}};let e="format(1 / (1 + pow(2, -1*datum.value)), '.2r')";o.layer[0].layer[1].encoding.y.axis.labelExpr=e,o.layer[0].layer[1].encoding.y.axis.title="probability",o.layer[0].layer[1].encoding.tooltip=[{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}]}return o}}function qe(){return{config:{view:{continuousHeight:300,continuousWidth:400}},title:{text:"Bayes factor intuition chart",subtitle:"How each comparison column contributes to the final match score"},transform:[{filter:"(datum.bayes_factor !== 1.0)"},{window:[{op:"sum",field:"log2_bayes_factor",as:"sum"},{op:"lead",field:"column_name",as:"lead"}],frame:[null,0]},{calculate:'datum.column_name === "Final score" ? datum.sum - datum.log2_bayes_factor : datum.sum',as:"sum"},{calculate:"datum.lead === null ? datum.column_name : datum.lead",as:"lead"},{calculate:'datum.column_name === "Final score" || datum.column_name === "Prior lambda" ? 0 : datum.sum - datum.log2_bayes_factor',as:"previous_sum"},{calculate:'datum.sum > datum.previous_sum ? datum.column_name : ""',as:"top_label"},{calculate:'datum.sum < datum.previous_sum ? datum.column_name : ""',as:"bottom_label"},{calculate:"datum.sum > datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_top"},{calculate:"datum.sum < datum.previous_sum ? datum.sum : datum.previous_sum",as:"sum_bottom"},{calculate:"(datum.sum + datum.previous_sum) / 2",as:"center"},{calculate:'(datum.log2_bayes_factor > 0 ? "+" : "") + datum.log2_bayes_factor',as:"text_log2_bayes_factor"},{calculate:"datum.sum < datum.previous_sum ? 4 : -4",as:"dy"},{calculate:'datum.sum < datum.previous_sum ? "top" : "bottom"',as:"baseline"},{calculate:"1. / (1 + pow(2, -1.*datum.sum))",as:"prob"},{calculate:"0*datum.sum",as:"zero"},{calculate:'datum.sum > datum.previous_sum ? "↑" : "↓"',as:"up_down_emoji"}],layer:[{layer:[{mark:"rule",encoding:{y:{field:"zero",type:"quantitative"},size:{value:.5},color:{value:"black"}}},{mark:{type:"bar",width:60},encoding:{color:{condition:{value:"red",test:"(datum.log2_bayes_factor < 0)"},value:"green"},opacity:{condition:{value:1,test:"datum.column_name == 'Prior' || datum.column_name == 'Final score'"},value:.5},tooltip:[{type:"nominal",field:"column_name",title:"Comparison column"},{type:"nominal",field:"value_l",title:"Value (L)"},{type:"nominal",field:"value_r",title:"Value (R)"},{type:"nominal",field:"gamma_index",title:"Gamma level"},{type:"quantitative",field:"bayes_factor",format:".3r",title:"Bayes factor"},{type:"quantitative",field:"log2_bayes_factor",format:".3r",title:"log2(Bayes factor)"},{type:"quantitative",field:"prob",format:".3r",title:"Cumulative match probability"}],x:{type:"nominal",axis:{labelExpr:"datum.value == 'Prior' || datum.value == 'Final score' ? '' : datum.value",labelAlign:"center",labelPadding:10,title:"Column",grid:!0,tickBand:"extent"},field:"column_name",sort:null},y:{type:"quantitative",axis:{grid:!1,orient:"left",title:"log2(Bayes factor)"},field:"previous_sum"},y2:{field:"sum"}}},{mark:{type:"text",fontWeight:"bold"},encoding:{color:{value:"white"},text:{condition:{type:"nominal",field:"log2_bayes_factor",format:".2f",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",axis:{orient:"left"},field:"center"}}},{mark:{type:"text",baseline:"bottom",dy:-5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"top_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_top"}}},{mark:{type:"text",baseline:"top",dy:5,fontWeight:"bold"},encoding:{color:{value:"black"},text:{condition:{type:"nominal",field:"bottom_label",test:"abs(datum.log2_bayes_factor) > 1"},value:""},x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},y:{type:"quantitative",field:"sum_bottom"}}}]},{mark:{type:"rule",color:"black",strokeWidth:2,x2Offset:30,xOffset:-30},encoding:{x:{type:"nominal",axis:{labelAngle:0,title:"Column"},field:"column_name",sort:null},x2:{field:"lead"},y:{type:"quantitative",axis:{labelExpr:"format(1 / (1 + pow(2, -1*datum.value)), '.2r')",orient:"right",title:"Probability"},field:"sum",scale:{zero:!1}}}}],height:450,resolve:{axis:{y:"independent"}},width:{step:75},$schema:"https://vega.github.io/schema/vega-lite/v4.8.1.json",data:{values:null}}}function Ee(e){return e("vega-embed@6")}function Se(){return function(e){return e/(e+1)}}function Ae(){return Math.log2}function je(){return function(e){return e/(1-e)}}function $e(e,t){return function(a){return e(t(a))}}function Te(e){return function(t){return e(2**t)}}function Ce(e){return e.csv("https://gist.githubusercontent.com/RobinL/0ee2e59db8cbecc105942fe4b101e847/raw/110e5bb3b574b7584b5452d4accfcfad71f2b19d/first_name_noyear.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function Me(e){return{first_name:e}}function Ne(e,t){const a=e.module();return a.variable(t()).define(["md"],le),a.variable(t()).define(["md"],se),a.variable(t()).define(["md"],ue),a.variable(t("splink_settings")).define("splink_settings",ce),a.variable(t("row")).define("row",me),a.variable(t("overrides")).define("overrides",_e),a.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],de),a.variable(t()).define(["get_waterfall_chart","row","splink_settings","overrides"],fe),a.variable(t()).define(["md"],be),a.variable(t("get_waterfall_chart")).define("get_waterfall_chart",["get_waterfall_chart_data","embed","get_chart_spec"],pe),a.variable(t("get_comparison_column_lookup")).define("get_comparison_column_lookup",he),a.variable(t("get_waterfall_chart_data")).define("get_waterfall_chart_data",["get_waterfall_data_lambda_row","get_waterfall_data_other_rows","get_waterfall_data_final_row"],ge),a.variable(t("get_waterfall_row_gamma")).define("get_waterfall_row_gamma",["get_comparison_column_lookup","log2"],ve),a.variable(t("get_waterfall_data_lambda_row")).define("get_waterfall_data_lambda_row",["prob_to_bayes_factor","prob_to_log2_bayes_factor"],ye),a.variable(t("get_waterfall_data_other_rows")).define("get_waterfall_data_other_rows",["get_waterfall_row_gamma"],we),a.variable(t("get_waterfall_data_final_row")).define("get_waterfall_data_final_row",xe),a.variable(t("get_chart_spec")).define("get_chart_spec",["base_spec"],ke),a.variable(t("base_spec")).define("base_spec",qe),a.variable(t("embed")).define("embed",["require"],Ee),a.variable(t("bayes_factor_to_prob")).define("bayes_factor_to_prob",Se),a.variable(t("log2")).define("log2",Ae),a.variable(t("prob_to_bayes_factor")).define("prob_to_bayes_factor",je),a.variable(t("prob_to_log2_bayes_factor")).define("prob_to_log2_bayes_factor",["log2","prob_to_bayes_factor"],$e),a.variable(t("log2_bayes_factor_to_prob")).define("log2_bayes_factor_to_prob",["bayes_factor_to_prob"],Te),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],Ce),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup"],Me),a}function Pe(e){return e`# An Interactive Introduction to Probabilistic Record Linkage`}function Le(e){return e`*A final version of this notebook can be viewed on my blog [here](https://www.robinlinacre.com/intro_to_probabilistic_linkage/).*`}function Fe(e){return e`Probablistic record linkage is a technique used to link together records that lack unique identifiers.  

In the absence of a unique identifier such as a National Insurance number, we can use a combination of individually non-unique variables such as name, gender and date of birth to identify individuals.

Record linkage can be done within datasets (deduplication) or between datasets (linkage), or both.
`}function We(e){return e`Linkage is probabilistic in the sense that it relies on the balance on evidence.  In a large dataset, observing that two records match on the full name 'John Smith' provides some evidence that these two records may refer to the same person, but this evidence is inconclusive.  

More broadly, it is often impossible to classify pairs of records as matches or non-matches beyond any doubt.  Instead, the aim of probabilisitic record linkage to to quantify the probability that a pair of records refer to the same entity by considering evidence in favour and against a match and weighting it appropriately.
`}function Ie(e){return e`In probabilistic record linkage, we start with a prior, which represents the probability that two records drawn at random are a match.  We then compare the two records, increasing the match probability where columns agree, and decreasing it when columns disagree.  

`}function De(e){return e`The most common type of probabilistic record linkage model is called the Fellegi-Sunter model. 

Let's take a look at at an example of a trained Fellegi-Sunter model to calculate match probability interactively.  This model will compare the two records in the table, and assess whether they refer to the same person, or different people.`}function Be(e){return e`
✨<span style="background-color:yellow">You can edit the records in the table, and the match probability will be estimated.</span>✨`}function Oe(e){return e`
<table id="data-table" >

<tr>

<th>First name</th>
<th>Middle name</th>
<th>Surname</th>
<th>DOB</th>
<th>Postcode</th>

</tr>
<tr contenteditable>

<td>Mary</td>
<td>Emma</td>
<td>Smith</td>
<td>1990-05-09</td>
<td>SW1A 1AA</td>

</tr>
<tr contenteditable>

<td>Mary</td>
<td>Emma</td>
<td>Smith</td>
<td>1990-05-09</td>
<td>SW1A 1AA</td>
</tr>

</table>
`}function Re(e,t){return e`<h3 style="font-family:Helvetica,Arial,Sans-Serif">Estimated match probability = <span style="background-color:yellow">${t}%</h3>`}function ze(e){return e`We can represent the model graphically using a waterfall chart, which is read left to right.  We start with the prior, and take each column into account in turn, with different match weights being applied to each column.  You can hover over the bars to see how the probability changes as each subsequent field is taken into account.

`}function He(e){return e.toggle({label:"Show details in waterfall chart"})}function Je(e,t,a,n,r,o){return e(t.objects()[0],a,n,!r,o)}function Ue(e){return e`Columns with higher number of distinct values, such as date of birth, tend to represent stronger evidence in favour of a match since it's less likely that two records chosen at random would match by coincidence.  

Where a column does not match, this is usually evidence against a match.  However, the evidence may not be strong - for example, people move house, which could cause a mismatch on the 'postcode' column.

This, in a nutshell, is how probabilistic record linkage works.  By comparing records and weighting evidence appropriately, we estimate the probability of a match.`}function Ve(e){return e`## Structure of this training material`}function Ze(e){return e` The rest of this training material explores the theory and practice of building probabilistic linkage models, focussing on the Fellegi-Sunter model. The sections are as follows:

1. [The mathematics of the Fellegi-Sunter model](https://www.robinlinacre.com/maths_of_fellegi_sunter/)
2. [Visualising the Fellegi Sunter model](https://www.robinlinacre.com/visualising_fellegi_sunter/)
3. [The intuition behind match weights](https://www.robinlinacre.com/understanding_match_weights/)

These materials align closely to the probabilisic model used by [Splink](https://github.com/moj-analytical-services/splink), a piece of open source software for record linkage at scale.

`}function Ge(e,t,a,n){return(100*e(t.objects()[0],a,n)).toPrecision(4)}function Ke(e,t,a){return e.observe((e=>{const n=n=>e(t(a));return a.addEventListener("input",n,!1),e(t(a)),()=>window.removeEventListener("input",n)}))}function Ye(){return function(e){const t=[];e.querySelectorAll("tr").forEach(((e,a)=>{let n=e.cells,r=[];for(let t of n){let e=t.innerText;e=e.trim(),e=e.toLowerCase(),""==e&&(e=null),r.push(e)}t.push(r)}));return t.reduce(((e,t,a)=>{if(0==a)e.properties=t;else{const n={};n.uid=a,e.properties.forEach(((e,a)=>{n[e]=t[a]})),e.push(n)}return e}),[])}}function Qe(e,t,a){return e(t,a)}function Xe(e,t,a){return e(t,a)}function et(e,t,a){return e(t,a)}function tt(e,t){return[e(t[0])]}function at(e,t){return[e(t[1])]}function nt(){return function(e){return{uid:e.uid,fname:e["first name"],mname:e["middle name"],sname:e.surname,dob:e.dob,pc:e.postcode}}}function rt(e,t){return function(a){return null===a.fname_l||null===a.fname_r?-1:a.fname_l==a.fname_r?3:e(a.fname_l,a.fname_r)?2:t(a.fname_l,a.fname_r)>.85?1:0}}function ot(e,t){return function(a){return null===a.mname_l||null===a.mname_r?-1:a.mname_l==a.mname_r?3:e(a.mname_l,a.mname_r)?2:t(a.mname_l,a.mname_r)>.85?1:0}}function it(e,t){return function(a){return null===a.sname_l||null===a.sname_r?-1:a.sname_l==a.sname_r?3:e(a.sname_l,a.sname_r)?2:t(a.sname_l,a.sname_r)>.85?1:0}}function lt(){return function(e,t){let a=new Date(e),n=new Date(t);return Math.abs(a-n)/31536e6}}function st(e,t){return function(a){return null===a.dob_l||null===a.dob_r?-1:a.dob_l==a.dob_r&&"01-01"==a.dob_l.slice(-5)?4:a.dob_l==a.dob_r?5:e(a.dob_l,a.dob_r)<=1?3:t(a.dob_l,a.dob_r)<1?2:t(a.dob_l,a.dob_r)<10?1:0}}function ut(){return function(e){return null===e.pc_l||null===e.pc_r?-1:e.pc_l==e.pc_r?5:e.pc_l.slice(0,3)==e.pc_r.slice(0,3)?4:0}}function ct(e,t,a,n,r){return{proportion_of_matches:1/6e7,comparison_columns:[{num_levels:4,col_name:"fname",u_probabilities:[.9883897757902356,.004639565877697178,.002783859108435161,.004186799223632191],m_probabilities:[.013910835049471115,.03580070792581899,.0026304325373041827,.9431284756772805],case_expression:e},{num_levels:4,col_name:"mname",u_probabilities:[.9883897757902356,.004639565877697178,.002783859108435161,.004186799223632191],m_probabilities:[.013910835049471115,.03580070792581899,.0026304325373041827,.9431284756772805],case_expression:t},{num_levels:4,col_name:"sname",u_probabilities:[.9971958658858057,.0015765242689686637,.0003754879678726784,.0008521218773530913],m_probabilities:[.01809857679375992,.02769695651313621,.0014468181425986496,.9514336326024172],case_expression:a},{col_name:"dob",u_probabilities:[.2807916467157474,.20073737664045227,.5164828418823143,.0019211842885877536,9.766061108210657e-7,6597386678746452e-20],m_probabilities:[.00024675771766021674,.0017179728285089994,.009868620663422667,.023118927215599792,.0036827860949234354,.9571689718277999],case_expression:n},{col_name:"pc",u_probabilities:[.6751190264364737,.22792766449447727,.09517523421356786,17091033037790942e-22,.0017755009047047013,8.648474727307328e-7],m_probabilities:[.18962646163517627,.02145498887358967,.4023991769621992,.11064711462002584,.07144100324386156,.20090472079462598],case_expression:r}]}}function mt(){return{title:{text:"Match weights and their cumulative contribution to match probability",subtitle:""},height:200}}function _t(e){return e("https://bundle.run/double-metaphone@2.0.0")}function dt(e){return e("jaro-winkler@0.2.8/index.js")}function ft(e){return function(t,a){let n=e.doubleMetaphone(t),r=e.doubleMetaphone(a);return n.filter((e=>r.includes(e))).length>0}}function bt(e){return e.csv("https://gist.githubusercontent.com/RobinL/66df3f5d7dbea3d1add1a8e6067c7624/raw/d4d642e631563418e7b7889496c7a9149f259447/firstname_noyear_count2.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.firstname]=e.freq})),t}))}function pt(e){return e.csv("https://gist.githubusercontent.com/RobinL/3fe7f712ff93393fe0a28cbb1b8c3e46/raw/a87f572e194122dde4743dd905c1ce6c22fd33db/surname_noyear_count2.csv",e.autoType).then((e=>{let t={};return e.forEach((e=>{t[e.surname]=e.freq})),t}))}function ht(e,t){return{fname:e,mname:e,sname:t}}function gt(){return function(e,t){if(0==e.length)return t.length;if(0==t.length)return e.length;var a,n,r=[];for(a=0;a<=t.length;a++)r[a]=[a];for(n=0;n<=e.length;n++)r[0][n]=n;for(a=1;a<=t.length;a++)for(n=1;n<=e.length;n++)t.charAt(a-1)==e.charAt(n-1)?r[a][n]=r[a-1][n-1]:r[a][n]=Math.min(r[a-1][n-1]+1,Math.min(r[a][n-1]+1,r[a-1][n]+1));return r[t.length][e.length]}}function vt(e){return e("d3@6")}function yt(e){return e("@observablehq/inputs")}function wt(e,t){const a=e.module();a.variable(t("title")).define("title",["md"],Pe),a.variable(t()).define(["md"],Le),a.variable(t("para_1")).define("para_1",["md"],Fe),a.variable(t("para_2")).define("para_2",["md"],We),a.variable(t("para_3")).define("para_3",["md"],Ie),a.variable(t("para_4")).define("para_4",["md"],De),a.variable(t("para_5")).define("para_5",["md"],Be),a.variable(t("table")).define("table",["html"],Oe),a.variable(t("estimated_probability")).define("estimated_probability",["html","match_prob"],Re),a.variable(t("para_6")).define("para_6",["md"],ze),a.variable(t("viewof show_complex")).define("viewof show_complex",["inputs"],He),a.variable(t("show_complex")).define("show_complex",["Generators","viewof show_complex"],((e,t)=>e.input(t))),a.variable(t("waterfall_chart")).define("waterfall_chart",["get_waterfall_chart","df_gammas","splink_settings","overrides","show_complex","term_freqs"],Je),a.variable(t("para_7")).define("para_7",["md"],Ue),a.variable(t("structure")).define("structure",["md"],Ve),a.variable(t("para_8")).define("para_8",["md"],Ze),a.variable(t("match_prob")).define("match_prob",["get_match_probability","df_gammas","splink_settings","term_freqs"],Ge),a.variable(t("tableData")).define("tableData",["Generators","parseTableData","table"],Ke),a.variable(t("parseTableData")).define("parseTableData",Ye);const n=e.module(ie);a.import("get_df_gammas",n),a.import("get_df_e",n),a.import("get_df_comparison",n),a.import("get_match_probability",n),a.variable(t("df_e")).define("df_e",["get_df_e","df_gammas","splink_settings"],Qe),a.variable(t("df_gammas")).define("df_gammas",["get_df_gammas","df_comparison","splink_settings"],Xe),a.variable(t("df_comparison")).define("df_comparison",["get_df_comparison","records_l","records_r"],et),a.variable(t("records_l")).define("records_l",["rename_dict_keys","tableData"],tt),a.variable(t("records_r")).define("records_r",["rename_dict_keys","tableData"],at),a.variable(t("rename_dict_keys")).define("rename_dict_keys",nt),a.variable(t("fname_case_stmt")).define("fname_case_stmt",["dm_intersect","distance"],rt),a.variable(t("mname_case_stmt")).define("mname_case_stmt",["dm_intersect","distance"],ot),a.variable(t("sname_case_stmt")).define("sname_case_stmt",["dm_intersect","distance"],it),a.variable(t("abs_date_diff_in_years")).define("abs_date_diff_in_years",lt),a.variable(t("dob_case_stmt")).define("dob_case_stmt",["levenshtein","abs_date_diff_in_years"],st),a.variable(t("pc_case_stmt")).define("pc_case_stmt",ut),a.variable(t("splink_settings")).define("splink_settings",["fname_case_stmt","mname_case_stmt","sname_case_stmt","dob_case_stmt","pc_case_stmt"],ct),a.variable(t("overrides")).define("overrides",mt);const r=e.module(Ne);return a.import("get_waterfall_chart",r),a.variable(t("dm")).define("dm",["require"],_t),a.variable(t("distance")).define("distance",["require"],dt),a.variable(t("dm_intersect")).define("dm_intersect",["dm"],ft),a.variable(t("first_name_lookup")).define("first_name_lookup",["d3"],bt),a.variable(t("surname_lookup")).define("surname_lookup",["d3"],pt),a.variable(t("term_freqs")).define("term_freqs",["first_name_lookup","surname_lookup"],ht),a.variable(t("levenshtein")).define("levenshtein",gt),a.variable(t("d3")).define("d3",["require"],vt),a.variable(t("inputs")).define("inputs",["require"],yt),a}var xt=a(5860),kt=a(2692),qt=a(6702);const Et=e=>n.createElement(o.H,{frontmatter:e.pageContext.frontmatter}),St=["title","para_1","para_2","para_3","para_4","para_5","table","estimated_probability","para_6","viewof show_complex","waterfall_chart","para_7","structure","para_8"];function At(e){return n.createElement(n.Fragment,null,n.createElement(qt.Z,{frontmatter:e.pageContext.frontmatter}),"\n",n.createElement(xt.Z,{notebook:wt,cells:St}),"\n",n.createElement(kt.Z,{frontmatter:e.pageContext.frontmatter}))}var jt=function(e){return void 0===e&&(e={}),n.createElement(r.fE,e,n.createElement(At,e))}},6702:function(e,t,a){var n=a(7294),r=a(4160);t.Z=e=>{var t,a,o,i,l,s;let{frontmatter:u}=e;const{tutorial_number:c}=u,m=(0,r.K2)("4236107564"),_=m.allMdx.edges.map((e=>e.node.frontmatter.tutorial_number)),d=_.includes(c-1),f=_.includes(c+1),b=null===(t=m.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===c-1)))||void 0===t||null===(a=t.node)||void 0===a||null===(o=a.fields)||void 0===o?void 0:o.slug,p=null===(i=m.allMdx.edges.find((e=>e.node.frontmatter.tutorial_number===c+1)))||void 0===i||null===(l=i.node)||void 0===l||null===(s=l.fields)||void 0===s?void 0:s.slug;return n.createElement("div",{className:"bg-gray-100 p-2 mt-2 mb-2 italic rounded-md text-gray-600 text-xs"},n.createElement("div",{className:"flex justify-between"},n.createElement("div",{className:"w-1/3 text-left"},d&&n.createElement(r.rU,{to:b,className:"text-blue-500 hover:underline"},"← Previous article")),n.createElement("div",{className:"w-1/3 text-center"},n.createElement("span",null,"This is part ",c," of the tutorial")),n.createElement("div",{className:"w-1/3 text-right"},f&&n.createElement(r.rU,{to:p,className:"text-blue-500 hover:underline"},"Next article →"))))}},5860:function(e,t,a){var n=a(7294),r=a(6493);const o="mdx-container-div",i=new r.Zu,l=Object.assign({},i,{width:function(){return i.Generators.observe((e=>{let t=e(document.getElementById(o).clientWidth);function a(){let a=document.getElementById(o).clientWidth;a!==t&&e(t=a)}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}))}});t.Z=function(e){let{notebook:t,cells:a,customClassName:o}=e;const i=(0,n.useRef)(a.map((()=>n.createRef())));return(0,n.useEffect)((()=>{const e=new r.r_(l);return e.module(t,(e=>{const t=a.indexOf(e);if(-1!==t)return new r.lj(i.current[t].current)})),()=>e.dispose()}),[t,a]),n.createElement("div",{className:o},i.current.map(((e,t)=>n.createElement("div",{key:t,ref:e}))))}},7825:function(e,t,a){a.d(t,{H:function(){return o}});var n=a(7294),r=a(4160);const o=e=>{let{frontmatter:t}=e;const{title:a,description:o,image:i,siteUrl:l,twitterUsername:s}=(0,r.K2)("1865044719").site.siteMetadata,u={title:(null==t?void 0:t.title)||a,description:(null==t?void 0:t.description)||o,image:""+l+((null==t?void 0:t.image)||i),url:""+l+((null==t?void 0:t.pathname)||""),twitterUsername:s,...t};return n.createElement(n.Fragment,null,n.createElement("title",null,u.title),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{name:"image",content:u.image}))}},2692:function(e,t,a){var n=a(7294),r=a(4160);t.Z=e=>{let{frontmatter:t}=e;const{tutorial_number:a,title:o}=t,i=(0,r.K2)("1842021157").allMdx.edges.sort(((e,t)=>e.node.frontmatter.tutorial_number-t.node.frontmatter.tutorial_number));return n.createElement("div",{className:"bg-blue-100  p-4 mt-8  mb-4 rounded-lg "},n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"text-blue-800 font-semibold text-base mb-2"},"Probabilistic Linkage Tutorial Navigation:"),n.createElement("ol",{className:"space-y-2 text-sm"},i.map((e=>n.createElement("li",{key:e.node.frontmatter.tutorial_number,className:"text-blue-600 text-sm"},a===e.node.frontmatter.tutorial_number?n.createElement("span",{className:"font-bold text-sm"},e.node.frontmatter.title):n.createElement(r.rU,{to:e.node.fields.slug,className:"hover:underline"},e.node.frontmatter.title)))))))}}}]);
//# sourceMappingURL=component---src-mdx-intro-to-probabilistic-linkage-mdx-861307980a75289e5ec9.js.map