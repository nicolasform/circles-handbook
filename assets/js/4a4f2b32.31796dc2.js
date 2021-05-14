(self.webpackChunkcircles_handbook=self.webpackChunkcircles_handbook||[]).push([[882],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return h},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return a?r.createElement(m,s(s({ref:t},h),{},{components:a})):r.createElement(m,s({ref:t},h))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4564:function(e,t,a){"use strict";var r=a(5697),n=a.n(r),i=a(7294),s=function(e){var t=e.relativesize,a=e.src,r=e.alt;return i.createElement("img",{alt:r,src:a,style:{width:t,height:t,padding:"1.2rem",display:"block",marginLeft:"auto",marginRight:"auto"}})};s.propTypes={alt:n().string.isRequired,relativesize:n().string.isRequired,src:n().string.isRequired},t.Z=s},1749:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=a(4786),n=a(6843),i=(a(7294),a(3905)),s=a(4564),o={id:"transfer-limitations-in-practice",title:"The limitation of transitive transactions in practice",slug:"/developers/transitive-transactions/transfer-limitations-in-practice"},c={unversionedId:"developers/transitive-transactions/transfer-limitations-in-practice",id:"developers/transitive-transactions/transfer-limitations-in-practice",isDocsHomePage:!1,title:"The limitation of transitive transactions in practice",description:"In progress",source:"@site/docs/developers/transitive-transactions/transfer-limitations-in-practice.mdx",sourceDirName:"developers/transitive-transactions",slug:"/developers/transitive-transactions/transfer-limitations-in-practice",permalink:"/docs/developers/transitive-transactions/transfer-limitations-in-practice",editUrl:"https://github.com/CirclesUBI/circles-handbook/edit/main/docs/developers/transitive-transactions/transfer-limitations-in-practice.mdx",version:"current",frontMatter:{id:"transfer-limitations-in-practice",title:"The limitation of transitive transactions in practice",slug:"/developers/transitive-transactions/transfer-limitations-in-practice"},sidebar:"developers",previous:{title:"Whitepaper",permalink:"/docs/developers/whitepaper"},next:{title:"Circles by hand with sbt-ethereum",permalink:"/docs/developers/tutorials/circles-by-hand-with-sbt-ethereum"}},l=[{value:"Transfer steps",id:"transfer-steps",children:[{value:"Our pathfinder used for circles.garden",id:"our-pathfinder-used-for-circlesgarden",children:[]},{value:"Criseth&#39;s pathfinder",id:"criseths-pathfinder",children:[]},{value:"An example of counting transfer steps",id:"an-example-of-counting-transfer-steps",children:[]}]},{value:"Gas limitations",id:"gas-limitations",children:[]},{value:"What this means in terms of number of transfer steps",id:"what-this-means-in-terms-of-number-of-transfer-steps",children:[]},{value:"What this means in terms of maximum transfer amount",id:"what-this-means-in-terms-of-maximum-transfer-amount",children:[]}],h={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In progress")),(0,i.kt)("h2",{id:"transfer-steps"},"Transfer steps"),(0,i.kt)("p",null,"We define the number of transfer steps as the number of transactions that need to happen to complete the transitive transaction.\nWhat path(s) to chose for a transitive transaction is a mathematical problem that can be solved in different ways depending on what one wants to optimize for. We call the service for finding a path a pathfinder and there are already more than one available."),(0,i.kt)("h3",{id:"our-pathfinder-used-for-circlesgarden"},"Our pathfinder used for circles.garden"),(0,i.kt)("p",null,"You can follow the first two steps in ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/estimate-gas-cost"},"this tutorial")," to find the transfer steps that ",(0,i.kt)("a",{parentName:"p",href:"https://circles.garden"},"circles.garden")," would use for any hypothetical transaction of your choice. "),(0,i.kt)("h3",{id:"criseths-pathfinder"},"Criseth's pathfinder"),(0,i.kt)("p",null,"There is another pathfinder being developed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chriseth/pathfinder"},"here"),".\nYou can use ",(0,i.kt)("a",{parentName:"p",href:"https://chriseth.github.io/pathfinder/"},"this visual interface")," of this pathfinder to explore the circles trust network and find different transactions. This pathfinder works slightly differently from ours. The paths found in this interface are not necessarily the same that ",(0,i.kt)("a",{parentName:"p",href:"https://circles.garden"},"circles.garden")," would use. "),(0,i.kt)("h3",{id:"an-example-of-counting-transfer-steps"},"An example of counting transfer steps"),(0,i.kt)("p",null,"Below is an example from Criseth's pathfinder for transferring 1000 CRC between two users. We can see that this graph has 18 edges and the transaction thus requires 18 transfer steps."),(0,i.kt)(s.Z,{relativesize:"75%",src:a(9370).Z,alt:"Screenshot show profile",mdxType:"FormattedImage"}),(0,i.kt)("h2",{id:"gas-limitations"},"Gas limitations"),(0,i.kt)("p",null,"Each transfer in a transitive transaction costs gas. Transactions made through ",(0,i.kt)("a",{parentName:"p",href:"https://circles.garden"},"circles.garden"),' are paid for by the Circles Coop in Eth. In terms of CRC a small fee in circles is added for each transaction to "compensate" for this.'),(0,i.kt)("p",null,"On the Ethereum block chains all contract calls or transactions end up inside a block. A block is either accepted or rejected on the blockchain.\nAll transactions in a transitive transaction should end up in the same block to make sure that all or none of the transfer steps go through. The maximum gas for a block is 12.500.000. This means that the total gas cost for a transitive transaction must not exceed this."),(0,i.kt)("p",null,"In practice it is dangerous to get close to this limit. A transaction with a gas cost close to this limit might have to wait a very, very long time to fit into a block with other contract calls, because of how the Ethereum blockchain works. "),(0,i.kt)("h2",{id:"what-this-means-in-terms-of-number-of-transfer-steps"},"What this means in terms of number of transfer steps"),(0,i.kt)("p",null,"Because of the limitations to the gas costs we have to set a maximum limit to the number of transfer steps in a transaction. This limit is currently set to 52. Here we explain why."),(0,i.kt)("p",null,"Following the steps in ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/estimate-gas-cost"},"this tutorial")," gas costs for a number of hypothetical transactions were estimated. The results are displayed in this figure:"),(0,i.kt)(s.Z,{relativesize:"75%",src:a(6702).Z,alt:"Screenshot show profile",mdxType:"FormattedImage"}),(0,i.kt)("p",null,"Extrapolating the results suggests that 107 steps would mean a gas cost of around 12.500.000. As we don't want to get close to the gas limit we decided (quite arbitrarily) that we don't want to exceed half the block gas limit (6.250.000). According to the extrapolation above, we end up at 52 steps (expected to cost 6.200.000). "),(0,i.kt)("p",null,"This limit is debateable but it is very important that we don't get to close to the gas limit. Since all transactions go through the relayer, a transaction which has to wait will block all other circles transactions. So the more complex the transactions, the longer the wait for all other circles transactions."),(0,i.kt)("p",null,"It is also worth noting that the diagram above shows the gas estimate and not the actual gas, which usually ends up being about half of the actual gas cost. This gives us some extra margin too. Below are some data points for transfers of 1 CRC. The values are taken from blockscout for transactions that were actually sent."),(0,i.kt)(s.Z,{relativesize:"50%",src:a(6208).Z,alt:"Screenshot show profile",mdxType:"FormattedImage"}),(0,i.kt)("p",null,"The maximum transfer step limit is defined programmatically in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CirclesUBI/circles-core/blob/7ba6de02de2a197c5a8f470a3f53b623fa149e10/src/token.js#L8"},"circles-core"),"."),(0,i.kt)("h2",{id:"what-this-means-in-terms-of-maximum-transfer-amount"},"What this means in terms of maximum transfer amount"),(0,i.kt)("p",null,"When making a transfer in the ",(0,i.kt)("a",{parentName:"p",href:"https://circles.garden"},"circles.garden")," wallet you will get an indication of the maximum transferable amount. This number is the theoretical maximum that you can transitively transfer. It is the amount that the safes along the way will accept in terms of trusted tokens, without worrying about the number of transfer steps along the way. However, now we know there is in practice a limit to the number of transfer steps in a single transfer and that we have defined the maximum transfer steps to 52 in our code. "),(0,i.kt)("p",null,"When transferring to a friend or a friend's friend this maximum limit is probably quite accurate because we probably won't need more than 52 steps. But what happens if the account we transfer to is a bit further away in the trust network? "),(0,i.kt)("p",null,"As an example we will use two accounts that are 7 trust steps away from each other - as displayed in the following graph. Please note that it is generally unusual to find accounts that are so far away from eacother."),(0,i.kt)(s.Z,{relativesize:"75%",src:a(2757).Z,alt:"Screenshot show profile",mdxType:"FormattedImage"}),(0,i.kt)("p",null,"The diagram below shows the number of steps needed for different amounts of CRC between the two example accounts, as calculated by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CirclesUBI/circles-api"},"circles api")," (version 1.3.8)."),(0,i.kt)(s.Z,{relativesize:"75%",src:a(6117).Z,alt:"Screenshot show profile",mdxType:"FormattedImage"}),(0,i.kt)("p",null,"In practice, the maximum transferrable amount in a single transaction is less than 200 CRC and about one tenth of the theoretical maximum. The theoretical maximum requires around 150 steps. Also note that the number of steps increases rapidly in the begining and the number of CRC transferred is displayed logarithmically for this reason."),(0,i.kt)("p",null,"However, it doesn't have to be this bad. In this transfer graph you can see the different transfer steps for transferring the theoretical maximum (1700 CRC) between the two users, according to Chriseth's pathfinder (around 40 steps):"),(0,i.kt)(s.Z,{relativesize:"75%",src:a(9042).Z,alt:"Screenshot show profile",mdxType:"FormattedImage"}),(0,i.kt)("p",null,"In conclusion, a user might not be able to make a single transfer as large as the theoretical maximum suggested by the circles.garden UI. However if we would improve the pathfind this would be far less likely to happen. It would perhaps also make sense to display the practical limit per (52 step) transaction instead of the theoretical maximum. (Currently the user is told that the transaction failed due to too many hops and that they should ask the recipient to trust them directly.)"),(0,i.kt)("p",null,"We can also conclude that a steps limit of 52 can take us a long way in terms of large transfers to remote accounts, when using an efficient pathfinder."))}p.isMDXComponent=!0},6117:function(e,t,a){"use strict";t.Z=a.p+"aefb6bf6431d8d0dc042cba3b3df2096.png"},6208:function(e,t,a){"use strict";t.Z=a.p+"b4a823439d2c3ecc3d27ead2cdf96a95.png"},9042:function(e,t,a){"use strict";t.Z=a.p+"e5017a395091ae87312878a4e892d5fc.png"},9370:function(e,t,a){"use strict";t.Z=a.p+"abfb0d5c6cc05feb5b045597336a5cc8.png"},6702:function(e,t,a){"use strict";t.Z=a.p+"71f5bc31243bc4555747fe64bcd7114e.png"},2757:function(e,t,a){"use strict";t.Z=a.p+"1513b87df7cd8d5644511d0cf105ab47.png"}}]);