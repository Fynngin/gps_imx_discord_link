(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,n,t){e.exports={square_btn:"connectBtnStyle_square_btn__3KQd4",connectBtnText:"connectBtnStyle_connectBtnText__2c_Wj",imx_logo:"connectBtnStyle_imx_logo__C-M-z",kolectiv_input:"connectBtnStyle_kolectiv_input__3cqwQ"}},300:function(e,n,t){},302:function(e,n,t){},328:function(e,n){},330:function(e,n){},350:function(e,n){},352:function(e,n){},353:function(e,n){},376:function(e,n){},378:function(e,n){},411:function(e,n){},413:function(e,n){},418:function(e,n){},420:function(e,n){},427:function(e,n){},439:function(e,n){},442:function(e,n){},458:function(e,n){},460:function(e,n){},495:function(e,n){},498:function(e,n){},512:function(e,n){},532:function(e,n,t){"use strict";t.r(n);var r=t(68),c=t.n(r),o=t(277),s=t.n(o),i=(t(300),t(4)),a=t.n(i),u=t(174),d=t(178),l=(t(302),t(278)),h=t(21);function f(e){var n=e.user;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{style:{width:"150px",height:"150px",borderRadius:"100%"},src:"https://cdn.discordapp.com/avatars/".concat(n.id,"/").concat(n.avatar,".png"),alt:"User Avatar"}),Object(h.jsxs)("h2",{children:["Hello ",n.username]})]})}var p,j=t(126),b=t.n(j),m=t(288),x=t.n(m);!function(e){e[e.Initializing=0]="Initializing",e[e.DiscordError=1]="DiscordError",e[e.DiscordConnected=2]="DiscordConnected",e[e.ImxError=3]="ImxError",e[e.ImxConnected=4]="ImxConnected",e[e.RoleGrantingError=5]="RoleGrantingError",e[e.RoleGranted=6]="RoleGranted",e[e.EthAddrDoesntMatchKolectiv=7]="EthAddrDoesntMatchKolectiv",e[e.NoAssets=8]="NoAssets",e[e.KolectivUserNotFound=9]="KolectivUserNotFound"}(p||(p={}));var g=function(){var e=Object(r.useState)({}),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(p.Initializing),s=Object(d.a)(o,2),i=s[0],j=s[1];function m(){return(m=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g().then((function(e){var n=e.address;j(p.ImxConnected),_(n,t.id)})).catch((function(){j(p.ImxError)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return new l.a("https://link.x.immutable.com").setup({})}function _(e,n){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(a.a.mark((function e(n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({url:"https://fynngin.api.stdlib.com/greenpark-nft-verification@dev/nft_role_grant",data:JSON.stringify({discordUser:t,address:n}),method:"POST",headers:{"content-type":"application/json"}}).then((function(){j(p.RoleGranted)})).catch((function(e){switch(e.response.data.error.err_code){case"eth_addr_no_match":j(p.EthAddrDoesntMatchKolectiv);break;case"no_assets":j(p.NoAssets);break;case"no_imx_address":j(p.ImxError);break;case"kolectiv_user_not_found":j(p.KolectivUserNotFound);break;case"no_discord_user":j(p.DiscordError);break;default:j(p.RoleGrantingError)}}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=new URLSearchParams(window.location.hash.slice(1)),n=[e.get("access_token"),e.get("token_type")],t=n[0],r=n[1];t?fetch("https://discord.com/api/users/@me",{headers:{authorization:"".concat(r," ").concat(t)}}).then((function(e){return e.json()})).then((function(e){c(e),j(p.DiscordConnected)})).catch((function(){j(p.DiscordError),console.error()})):j(p.DiscordError)}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[[p.NoAssets,p.RoleGranted].includes(i)?Object(h.jsx)("p",{children:"Wallet linked!"}):Object(h.jsx)(h.Fragment,{}),function(){switch(i){case p.Initializing:return Object(h.jsx)("p",{children:"Getting discord information..."});case p.DiscordError:return Object(h.jsx)("p",{children:"There was an error linking your Discord account. Please try again."});case p.DiscordConnected:return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{user:t}),Object(h.jsx)("form",{onSubmit:function(){return function(){return m.apply(this,arguments)}()},children:Object(h.jsx)("div",{children:Object(h.jsxs)("button",{type:"submit",className:b.a.square_btn,children:[Object(h.jsx)("h2",{className:b.a.connectBtnText,children:"Connect"}),Object(h.jsx)("img",{className:b.a.imx_logo,src:"".concat("/gps_imx_discord_link","/imx_logo.svg"),alt:"ImmutableX Logo"})]})})})]});case p.ImxError:return Object(h.jsx)("p",{children:"There was an error linking your Immutable Wallet. Please try again."});case p.ImxConnected:return Object(h.jsx)("p",{children:"Immutable Wallet connected! Checking assets and granting the role..."});case p.RoleGrantingError:return Object(h.jsx)("p",{children:"Couldn't grant the Discord Role. Do you own a Greenpark NFT?"});case p.KolectivUserNotFound:return Object(h.jsx)("p",{children:"We couldn't find that Kolectiv user :( Maybe a typo?"});case p.EthAddrDoesntMatchKolectiv:return Object(h.jsx)("p",{children:"Your Ethereum Address doesn't match the given Kolectiv user."});case p.NoAssets:return Object(h.jsx)("p",{children:"Seems like you don't own any Greenpark NFTs :("});case p.RoleGranted:return Object(h.jsx)("p",{children:"Role successfully granted! Enjoy :)"});default:return Object(h.jsx)("p",{children:"An unknown error occured. Please try again."})}}()]})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,541)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),_()}},[[532,1,2]]]);
//# sourceMappingURL=main.b0659779.chunk.js.map