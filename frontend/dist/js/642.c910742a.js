"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[642],{6642:function(n,e,t){t.r(e),t.d(e,{Geolocation:function(){return a},GeolocationWeb:function(){return i}});var o=t(9895);class i extends o.Uw{async getCurrentPosition(n){return new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition((n=>{e(n)}),(n=>{t(n)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},n))}))}async watchPosition(n,e){const t=navigator.geolocation.watchPosition((n=>{e(n)}),(n=>{e(null,n)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},n));return`${t}`}async clearWatch(n){window.navigator.geolocation.clearWatch(parseInt(n.id,10))}async checkPermissions(){if("undefined"===typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");const n=await window.navigator.permissions.query({name:"geolocation"});return{location:n.state,coarseLocation:n.state}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const a=new i}}]);
//# sourceMappingURL=642.c910742a.js.map