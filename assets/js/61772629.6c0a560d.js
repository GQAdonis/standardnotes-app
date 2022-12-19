(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(137)),i=["components"],s={slug:"docker",id:"docker",title:"Self-hosting with Docker",sidebar_label:"Docker",description:"How to self-host the Standard Notes infrastructure with Docker.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","docker"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},l={unversionedId:"self-hosting/docker",id:"self-hosting/docker",isDocsHomePage:!1,title:"Self-hosting with Docker",description:"How to self-host the Standard Notes infrastructure with Docker.",source:"@site/docs/self-hosting/docker.md",sourceDirName:"self-hosting",slug:"/self-hosting/docker",permalink:"/self-hosting/docker",editUrl:"https://github.com/standardnotes/app/blob/main/packages/docs/docs/self-hosting/docker.md",version:"current",lastUpdatedAt:1671469756,formattedLastUpdatedAt:"12/19/2022",sidebar_label:"Docker",frontMatter:{slug:"docker",id:"docker",title:"Self-hosting with Docker",sidebar_label:"Docker",description:"How to self-host the Standard Notes infrastructure with Docker.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","docker"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},sidebar:"mainSidebar",previous:{title:"Getting Started with Self-hosting",permalink:"/self-hosting/getting-started"},next:{title:"Configuration options",permalink:"/self-hosting/configuration-options"}},c=[{value:"Prerequisities",id:"prerequisities",children:[]},{value:"Install Standard Notes",id:"install-standard-notes",children:[]},{value:"Securing your server",id:"securing-your-server",children:[]},{value:"Using your new server",id:"using-your-new-server",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide walks you through the process of installing the self-hosted backend of Standard Notes. In this example, we used a server running Ubuntu 20.04, with 2GB RAM and 1 CPU."),Object(o.b)("p",null,"Due to mounted volumes, we recommend running the setup as a root user. If you wish to run it as a non-root user, please see Docker's ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall#manage-docker-as-a-non-root-user"},"post-installation steps for Linux"),"."),Object(o.b)("h2",{id:"prerequisities"},"Prerequisities"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update your ",Object(o.b)("inlineCode",{parentName:"p"},"apt")," repositories and upgrade any out-of-date packages:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt update -y && sudo apt upgrade -y\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install Docker Engine:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},'# Remove any old Docker installations.\nsudo apt-get remove docker docker-engine docker.io containerd runc\n\n# Install dependencies.\nsudo apt install git ca-certificates curl gnupg lsb-release -y\n\n# Add Docker\'s GPG key.\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n\n# Set the Docker repo.\necho "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n# Install Docker Engine.\nsudo apt update -y\nsudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify that Docker is installed:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo docker run hello-world\n")),Object(o.b)("p",{parentName:"li"},"This should output something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"...\n\nUnable to find image 'hello-world:latest' locally\nlatest: Pulling from library/hello-world\n2db29710123e: Pull complete\nDigest: sha256:13e367d31ae85359f42d637adf6da428f76d75dc9afeb3c21faea0d976f5c651\nStatus: Downloaded newer image for hello-world:latest\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\n...\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify that Docker Compose is correctly installed:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker compose version\n")),Object(o.b)("p",{parentName:"li"},"This should output something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"Docker Compose version v2.6.0\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enable the ",Object(o.b)("inlineCode",{parentName:"p"},"ufw")," firewall:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw enable\n")),Object(o.b)("p",{parentName:"li"},"Enter ",Object(o.b)("inlineCode",{parentName:"p"},"y")," when prompted.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enable SSH connections:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw allow ssh\n")),Object(o.b)("p",{parentName:"li"},"This should output something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"Skipping adding existing rule\nSkipping adding existing rule (v6)\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Allow incoming TPC connections on ports ",Object(o.b)("inlineCode",{parentName:"p"},"80")," and ",Object(o.b)("inlineCode",{parentName:"p"},"443"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo ufw allow http\nsudo ufw allow https\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the status of your ",Object(o.b)("inlineCode",{parentName:"p"},"ufw")," settings:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"ufw status verbose\n")),Object(o.b)("p",{parentName:"li"},"This should output something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"Status: active\nLogging: on (low)\nDefault: deny (incoming), allow (outgoing), deny (routed)\nNew profiles: skip\n\nTo                         Action      From\n--                         ------      ----\n22/tcp                     ALLOW IN    Anywhere\n80/tcp                     ALLOW IN    Anywhere\n443/tcp                    ALLOW IN    Anywhere\n22/tcp (v6)                ALLOW IN    Anywhere (v6)\n80/tcp (v6)                ALLOW IN    Anywhere (v6)\n443/tcp (v6)               ALLOW IN    Anywhere (v6)\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure a domain name (or subdomain) to point to your server's IP address. Consult your domain registration provider for how to configure your domain name."))),Object(o.b)("h2",{id:"install-standard-notes"},"Install Standard Notes"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the ",Object(o.b)("inlineCode",{parentName:"p"},"standalone")," repo:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd ~\ngit clone --single-branch --branch main https://github.com/standardnotes/standalone.git\ncd standalone\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Initialize default configuration files:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"./server.sh setup\n")),Object(o.b)("p",{parentName:"li"},"This will output something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"Initializing default configuration\nDefault configuration files created as .env and docker/*.env files. Feel free to modify values if needed.\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Generate random values for the necessary environment variables:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},'sed -i "s/auth_jwt_secret/$(openssl rand -hex 32)/g" .env\nsed -i "s/legacy_jwt_secret/$(openssl rand -hex 32)/g" docker/auth.env\nsed -i "s/secret_key/$(openssl rand -hex 32)/g" docker/auth.env\nsed -i "s/server_key/$(openssl rand -hex 32)/g" docker/auth.env\nsed -i "s/secret/$(openssl rand -hex 32)/g" docker/auth.env\n')),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:")," If you are running ",Object(o.b)("inlineCode",{parentName:"p"},"sed")," on macOS or BSD, change instances of ",Object(o.b)("inlineCode",{parentName:"p"},"sed -i")," to ",Object(o.b)("inlineCode",{parentName:"p"},"sed -i ''"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Optional) Restart the server:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"reboot\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Optional) By default, the syncing server will run on port ",Object(o.b)("inlineCode",{parentName:"p"},"3000"),". If you have a different service running on that port, you can customize the port on which you want to run the infrastructure by editing the ",Object(o.b)("inlineCode",{parentName:"p"},"EXPOSED_PORT")," variable in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the server has finished rebooting, log back into the server and start the Standard Notes server process:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd standalone\n./server.sh start\n")),Object(o.b)("p",{parentName:"li"},"Docker will start outputting lots of information about the containers it is pulling in and installing. This process took about 8 minutes on a Ubuntu 20.04 server with 2GB RAM and 1 CPU.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once Docker has finished installing, the Standard Notes install script will output:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},"Infrastructure started. Give it a moment to warm up. If you wish, please run the './server.sh logs' command to see details.\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the status of your server:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"./server.sh status\n")),Object(o.b)("p",{parentName:"li"},"This will output something like:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},'Services State:\nNAME                                  COMMAND                  SERVICE                    STATUS              PORTS\napi-gateway-standalone                "./wait-for.sh auth \u2026"   api-gateway                running             0.0.0.0:3000->3000/tcp, :::3000->3000/tcp\nauth-standalone                       "./wait-for.sh db 33\u2026"   auth                       running\nauth-worker-standalone                "./wait-for.sh db 33\u2026"   auth-worker                running\ncache-standalone                      "docker-entrypoint.s\u2026"   cache                      running             6379/tcp\ndb-standalone                         "docker-entrypoint.s\u2026"   db                         running             3306/tcp\nfiles-standalone                      "./wait-for.sh db 33\u2026"   files                      running             0.0.0.0:3125->3000/tcp, :::3125->3000/tcp\nsyncing-server-js-standalone          "./wait-for.sh db 33\u2026"   syncing-server-js          running\nsyncing-server-js-worker-standalone   "./wait-for.sh db 33\u2026"   syncing-server-js-worker   running\n')),Object(o.b)("p",{parentName:"li"},"Your Standard Notes server is ready once all the services have a ",Object(o.b)("inlineCode",{parentName:"p"},"STATUS")," of ",Object(o.b)("inlineCode",{parentName:"p"},"Up"),". This process took about 11 minutes on a Ubuntu 20.04 server with 2GB RAM and 1 CPU.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You should be able now to check that the syncing server is running by checking ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/healthcheck"),". You must do this on the server:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3000/healthcheck\nOK\n")),Object(o.b)("p",{parentName:"li"},"If you changed the ",Object(o.b)("inlineCode",{parentName:"p"},"EXPOSED_PORT")," variable, check ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:{EXPOSED_PORT}/healthcheck"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You're done!"))),Object(o.b)("h2",{id:"securing-your-server"},"Securing your server"),Object(o.b)("p",null,"To start using your new server with the Standard Notes app at ",Object(o.b)("inlineCode",{parentName:"p"},"app.standardnotes.com,")," you have to configure an HTTPS reverse proxy. Head over to ",Object(o.b)("a",{parentName:"p",href:"/self-hosting/https-support"},"Securing HTTP traffic of your Sync server")," for more information on how to set up a reverse proxy."),Object(o.b)("h2",{id:"using-your-new-server"},"Using your new server"),Object(o.b)("p",null,"In the account menu, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced options")," and enter the address of your new server in ",Object(o.b)("inlineCode",{parentName:"p"},"Custom sync server"),". Then, register for a new account or log in to an existing account and begin using your private new secure Standard Notes server!"))}b.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);