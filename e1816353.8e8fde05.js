(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(237)),s={id:"index-usingnodejs",title:"How to cache JSON data in Redis with NodeJS",sidebar_label:"RedisJSON and NodeJS",slug:"/howtos/redisjson/using-nodejs"},i={unversionedId:"howtos/redisjson/using-nodejs/index-usingnodejs",id:"howtos/redisjson/using-nodejs/index-usingnodejs",isDocsHomePage:!1,title:"How to cache JSON data in Redis with NodeJS",description:"Node.js has become incredibly popular for both web and mobile application development. It is a runtime for JavaScript so it can run JavaScript code on the machine. Node.js can be installed on MacOS, Linux and Windows system. The Node Package Manager (npm) enables developers to reuse useful codes which are tried and tested and helps you to build strong and steady applications quickly.",source:"@site/docs/howtos/redisjson/using-nodejs/index-usingnodejs.mdx",slug:"/howtos/redisjson/using-nodejs",permalink:"/howtos/redisjson/using-nodejs",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/using-nodejs/index-usingnodejs.mdx",version:"current",sidebar_label:"RedisJSON and NodeJS",sidebar:"docs",previous:{title:"How to cache JSON data in Redis with Python",permalink:"/howtos/redisjson/using-python"},next:{title:"How to cache JSON data in Redis using Ruby",permalink:"/howtos/redisjson/using-ruby"}},d=[{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",children:[]},{value:"Step 2. Install Node",id:"step-2-install-node",children:[]},{value:"Step 3. Install Redis",id:"step-3-install-redis",children:[]},{value:"Step 4.  Install RedisJSON",id:"step-4--install-redisjson",children:[]},{value:"Step 5. Create a file",id:"step-5-create-a-file",children:[]},{value:"Step 6. Run the app",id:"step-6-run-the-app",children:[]},{value:"References",id:"references",children:[]}],l={toc:d};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Node.js has become incredibly popular for both web and mobile application development. It is a runtime for JavaScript so it can run JavaScript code on the machine. Node.js can be installed on MacOS, Linux and Windows system. The Node Package Manager (npm) enables developers to reuse useful codes which are tried and tested and helps you to build strong and steady applications quickly."),Object(a.b)("p",null,"Node.js is a fast web framework, but adding the power, speed and flexibility of Redis can take it to the next level.Redis is best suited to situations that require data to be retrieved and delivered to the client as quickly as possible\nIf you\u2019re using Node, you can use the node-redis module to interact with Redis. If you\u2019re using RediJSON, you can use redis-rejson module to interact with RedisJSON."),Object(a.b)("p",null,"The 'ReJSON Module plugin for node_redis' package allows node_redis (2.8+) to interface with the Redis module ReJSON.To use this module, you will need Redis 4.0 or higher and the rejson module installed."),Object(a.b)("p",null,"Follow the below steps to get started with RedisJSON and Node.js:"),Object(a.b)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),Object(a.b)("p",null,"This simple container image bundles together the latest stable releases of Redis and select Redis modules from Redis Lab. "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod:latest\n")),Object(a.b)("h3",{id:"step-2-install-node"},"Step 2. Install Node"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," brew install node\n")),Object(a.b)("h3",{id:"step-3-install-redis"},"Step 3. Install Redis"),Object(a.b)("p",null,"Node Redis is a high performance Node.js Redis client."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," npm install redis\n")),Object(a.b)("h3",{id:"step-4--install-redisjson"},"Step 4.  Install RedisJSON"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," npm  -i redis-rejson\n")),Object(a.b)("h3",{id:"step-5-create-a-file"},"Step 5. Create a file"),Object(a.b)("p",null,"Copy the below content and save the file as \u201capp.js\u201d"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," const redis=require(\"redis\"); \n rejson = require('redis-rejson');\n\n rejson(redis); /* important - this must come BEFORE creating the client */\n let client= redis.createClient({\n    port:6379,\n    host:'localhost'\n  });  \n\n let test_node_key = 'test_node';\n client.json_set(test_node_key, '.', '{\"node\":4303}', function (err) {\n   if (err) { throw err; }\n   console.log('Set JSON at key ' + test_node_key + '.');\n   client.json_get(test_node_key, '.node', function (err, value) {\n     if (err) { throw err; }\n     console.log('value of node:', value); //outputs 4303\n     client.quit();\n   });\n });\n")),Object(a.b)("h3",{id:"step-6-run-the-app"},"Step 6. Run the app"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," node app.js\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," Set JSON at key test_node.\n value of node: 4303\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'  % redis-cli\n 127.0.0.1:6379> monitor\n OK\n\n 1628071593.564178 [0 172.17.0.1:65054] "info"\n 1628071593.567058 [0 172.17.0.1:65054] "json.set" "test_node" "." "{\\"node\\":4303}"\n 1628071593.572035 [0 172.17.0.1:65054] "json.get" "test_node" ".node"\n')),Object(a.b)("h3",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/howtos/redisjson/using-python"}),"RedisJSON and Python")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/howtos/redisjson/storing-complex-json-document"}),"How to store and retrieve nested JSON document")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/howtos/redisjson/using-nodejs"}),"Importing JSON data into Redis using NodeJS")," "),Object(a.b)("li",{parentName:"ul"},"Learn more about ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisjson/"}),"RedisJSON")," in the Quickstart tutorial."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/howtos/shoppingcart"}),"How to build shopping cart app using NodeJS and RedisJSON")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://redislabs.com/blog/index-and-query-json-docs-with-redis/"}),"Indexing, Querying, and Full-Text Search of JSON Documents with Redis"))))}c.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,j=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return n?r.a.createElement(j,i(i({ref:t},l),{},{components:n})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);