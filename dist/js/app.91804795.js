(function(e){function t(t){for(var c,l,a=t[0],i=t[1],u=t[2],p=0,d=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={app:0},o=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},"1a1a":function(e,t,n){"use strict";n("281c")},2:function(e,t){},"281c":function(e,t,n){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t){var n=Object(c["g"])("Wallet");return Object(c["d"])(),Object(c["b"])(n,{msg:"Welcome To Recovering Private Key"})}var o=n("dbd0"),l=n.n(o),a=Object(c["k"])("data-v-2ec17898");Object(c["f"])("data-v-2ec17898");var i={class:"hello"},u=Object(c["c"])("img",{alt:"Vue logo",src:l.a,style:{width:"200px"}},null,-1),s=Object(c["c"])("p",null," This tool was created to easily recover a private key from a ETH-based BIP32 HD wallet using a recovery phrase. This entire page is run locally, and nothing is transmitted to any server. We advise for added security to download, and run locally for added safety. ",-1),p=Object(c["c"])("h3",null,"Mnemonic",-1),d=Object(c["c"])("p",null,"Enter an existing BIP39 mnemonic. The words require a particular structure with the last word containing a checksum.",-1),b=Object(c["c"])("br",null,null,-1),f=Object(c["c"])("hr",null,null,-1),h=Object(c["c"])("h3",null,"Result",-1),m=Object(c["c"])("h5",null,"Wallet Private Key is:",-1),j={style:{"white-space":"pre-line"}},O=Object(c["c"])("h5",null,"Receiving Address:",-1),g={style:{"white-space":"pre-line"}},v=Object(c["c"])("hr",null,null,-1),y=Object(c["c"])("h3",null,"Import To Metamask",-1),w=Object(c["c"])("p",null,[Object(c["c"])("a",{href:"https://metamask.zendesk.com/hc/en-us/articles/360015489331-Importing-an-Account"},"Follow this walk-through to import the private key into your metamask.")],-1),k=Object(c["c"])("h3",null,"Resources",-1),_=Object(c["c"])("ul",null,[Object(c["c"])("li",null,[Object(c["c"])("a",{href:"https://metamask.zendesk.com/hc/en-us",target:"_blank",rel:"noopener"},"Metamask Support")]),Object(c["c"])("li",null,[Object(c["c"])("a",{href:"https://iancoleman.io/bip39/",target:"_blank",rel:"noopener"},"bip39 Mnemonic Utility")]),Object(c["c"])("li",null,[Object(c["c"])("a",{href:"https://github.com/ethereumjs/ethereumjs-wallet",target:"_blank",rel:"noopener"},"Implementing BIP32 HD Wallets in Eth")]),Object(c["c"])("li",null,[Object(c["c"])("a",{href:"https://github.com/bitcoinjs/bip39#readme",target:"_blank",rel:"noopener"},"Implementing BIP39 Standard")]),Object(c["c"])("li",null,[Object(c["c"])("a",{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"},"vue-loader")])],-1);Object(c["e"])();var P=a((function(e,t){return Object(c["d"])(),Object(c["b"])("div",i,[u,Object(c["c"])("h1",null,Object(c["h"])(e.msg),1),s,p,d,Object(c["j"])(Object(c["c"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.mnemonic=t}),style:{width:"500px"},placeholder:"12 or 24 word recovery phrase"},null,512),[[c["i"],e.mnemonic]]),b,Object(c["c"])("button",{onClick:t[2]||(t[2]=function(){return e.getMnemonic&&e.getMnemonic.apply(e,arguments)})},"I'm Ready To Get Key"),f,h,m,Object(c["c"])("p",j,Object(c["h"])(e.privateKey),1),O,Object(c["c"])("p",g,Object(c["h"])(e.address),1),v,y,w,k,_])})),x=(n("d3b7"),n("25f0"),n("00a5")),M=n("3d42"),S={name:"Wallet",data:function(){return{mnemonic:"",privateKey:"",address:""}},methods:{getMnemonic:function(){try{console.info(this.mnemonic);var e=x.mnemonicToSeed(this.mnemonic),t=M.fromMasterSeed(e);this.privateKey=t.getWallet()._privKey.toString("hex"),this.address=t.getWallet().getChecksumAddressString()}catch(n){throw console.log(n),new Error("Failed to initialize wallet")}}},props:{msg:String,methods:{go:function(){console.log(this.mnemonic)}}}};n("1a1a");S.render=P,S.__scopeId="data-v-2ec17898";var I=S,T={name:"App",components:{Wallet:I}};n("64be");T.render=r;var W=T;Object(c["a"])(W).mount("#app")},6:function(e,t){},"64be":function(e,t,n){"use strict";n("c894")},7:function(e,t){},8:function(e,t){},9:function(e,t){},c894:function(e,t,n){},dbd0:function(e,t,n){e.exports=n.p+"img/eth-logo.802c0b9a.png"}});
//# sourceMappingURL=app.91804795.js.map