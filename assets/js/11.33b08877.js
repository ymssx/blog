(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{483:function(i,n,e){},538:function(i,n,e){"use strict";e(483)},561:function(i,n,e){"use strict";e.r(n);e(256);var t={props:["title","label"],data:function(){return{index:null}},beforeMount:function(){window.BLOG||(window.BLOG={}),window.BLOG.figure_index||(window.BLOG.figure_index={}),window.BLOG.figure_map||(window.BLOG.figure_map={});var i=this.$frontmatter,n=i.title+i.date;window.BLOG.figure_index.hasOwnProperty(n)||(window.BLOG.figure_index[n]=0),window.BLOG.figure_map.hasOwnProperty(n)||(window.BLOG.figure_map[n]={}),window.BLOG.figure_index[n]+=1,this.index=window.BLOG.figure_index[n],window.BLOG.figure_map[n][this.label]=window.BLOG.figure_index[n],setTimeout((function(){window.BLOG.figure_index[n]=0}),0)}},w=(e(538),e(22)),r=Object(w.a)(t,(function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("div",{staticClass:"figure",attrs:{id:i.label}},[i._t("default"),i._v(" "),e("p",{staticClass:"title"},[e("span",[i._v("图"+i._s(i.index))]),i._v(" "+i._s(i.title))])],2)}),[],!1,null,null,null);n.default=r.exports}}]);