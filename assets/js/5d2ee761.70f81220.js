(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),c=(n(0),n(137)),s=["components"],o={slug:"filesafe/aws",id:"filesafe-aws",title:"FileSafe with Amazon S3",sidebar_label:"Amazon S3",description:"How to use Amazon S3 with Standard Notes FileSafe.",keywords:["standard notes","docs","notes app","end-to-end encryption","FileSafe","AWS Amazon S3"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},i={unversionedId:"usage/filesafe-aws",id:"usage/filesafe-aws",isDocsHomePage:!1,title:"FileSafe with Amazon S3",description:"How to use Amazon S3 with Standard Notes FileSafe.",source:"@site/docs/usage/filesafe-aws.md",sourceDirName:"usage",slug:"/usage/filesafe/aws",permalink:"/usage/filesafe/aws",editUrl:"https://github.com/standardnotes/app/blob/main/packages/docs/docs/usage/filesafe-aws.md",version:"current",lastUpdatedAt:1672778609,formattedLastUpdatedAt:"1/3/2023",sidebar_label:"Amazon S3",frontMatter:{slug:"filesafe/aws",id:"filesafe-aws",title:"FileSafe with Amazon S3",sidebar_label:"Amazon S3",description:"How to use Amazon S3 with Standard Notes FileSafe.",keywords:["standard notes","docs","notes app","end-to-end encryption","FileSafe","AWS Amazon S3"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Log In",id:"log-in",children:[]},{value:"Create the S3 bucket",id:"create-the-s3-bucket",children:[]},{value:"Create the IAM user with the required permissions",id:"create-the-iam-user-with-the-required-permissions",children:[]},{value:"Create the policy",id:"create-the-policy",children:[]},{value:"Create the group",id:"create-the-group",children:[]},{value:"Creating the user",id:"creating-the-user",children:[]},{value:"Standard Notes",id:"standard-notes",children:[{value:"Testing the integration",id:"testing-the-integration",children:[]}]}],b={toc:u};function l(e){var t=e.components,o=Object(r.a)(e,s);return Object(c.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"This guide will help you set up your AWS account with an S3 bucket and User to be used by the Standard Notes FileSafe extension."),Object(c.b)("h2",{id:"log-in"},"Log In"),Object(c.b)("p",null,"Start by logging into your ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com"},"AWS account"),". Make sure to pick your preferred region in the top right corner."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(201).default})),Object(c.b)("p",null,"Check the ",Object(c.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"list of regions")," and take note of the region code you picked. In the example above I picked ",Object(c.b)("strong",{parentName:"p"},"Paris")," so my region code is ",Object(c.b)("strong",{parentName:"p"},"eu-west-3"),"."),Object(c.b)("h2",{id:"create-the-s3-bucket"},"Create the S3 bucket"),Object(c.b)("p",null,"In the Services dropdown of the AWS console pick the ",Object(c.b)("strong",{parentName:"p"},"S3 storage service")," and click on the ",Object(c.b)("strong",{parentName:"p"},"Create bucket")," button."),Object(c.b)("p",null,"Choose a name for your bucket and select the region you chose before."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(202).default})),Object(c.b)("p",null,"You can ",Object(c.b)("strong",{parentName:"p"},"skip directly to step 3")," if you don't want any additional features such as ",Object(c.b)("em",{parentName:"p"},"versioning")," or ",Object(c.b)("em",{parentName:"p"},"logging")," for your bucket."),Object(c.b)("p",null,"In ",Object(c.b)("strong",{parentName:"p"},"step 3")," make sure to keep ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"Block all public access"))," selected."),Object(c.b)("p",null,"After confirming your settings you should see your new bucket."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(203).default})),Object(c.b)("h2",{id:"create-the-iam-user-with-the-required-permissions"},"Create the IAM user with the required permissions"),Object(c.b)("p",null,"We'll start by creating the read/write policy for the new bucket, then, we'll create a group with that policy and finally create our user and assign it to our group."),Object(c.b)("h2",{id:"create-the-policy"},"Create the policy"),Object(c.b)("p",null,"In the services dropdown select ",Object(c.b)("strong",{parentName:"p"},"IAM")," and go to ",Object(c.b)("strong",{parentName:"p"},"Policies.")," Click on the ",Object(c.b)("strong",{parentName:"p"},"Create policy")," button and you should see the following screen:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(204).default})),Object(c.b)("p",null,"Now click on the JSON tab and add the following policy configuration:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:ListBucket"],\n      "Resource": ["arn:aws:s3:::<bucket-name>"]\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject"],\n      "Resource": ["arn:aws:s3:::<bucket-name>/*"]\n    }\n  ]\n}\n')),Object(c.b)("p",null,"Make sure to replace ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"<bucket-name>"))," with the name of the bucket you created in the previous step."),Object(c.b)("p",null,"Click on the ",Object(c.b)("strong",{parentName:"p"},"Review policy")," button, pick the name for your policy and create the policy."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(205).default})),Object(c.b)("h2",{id:"create-the-group"},"Create the group"),Object(c.b)("p",null,"Back on the ",Object(c.b)("strong",{parentName:"p"},"IAM")," console pick ",Object(c.b)("strong",{parentName:"p"},"Groups")," from the side menu and click on ",Object(c.b)("strong",{parentName:"p"},"Create New Group."),"\nChoose your group name, click N",Object(c.b)("strong",{parentName:"p"},"ext Step")," and pick the policy you created previously."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(206).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(207).default})),Object(c.b)("p",null,"After reviewing your configuration create the group."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(208).default})),Object(c.b)("h2",{id:"creating-the-user"},"Creating the user"),Object(c.b)("p",null,"Back on the ",Object(c.b)("strong",{parentName:"p"},"IAM")," console pick ",Object(c.b)("strong",{parentName:"p"},"Users")," from the side menu and click on ",Object(c.b)("strong",{parentName:"p"},"Add user"),"."),Object(c.b)("p",null,"Choose a user name and make sure to select ",Object(c.b)("strong",{parentName:"p"},"Programmatic access.")),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(209).default})),Object(c.b)("p",null,"On the next screen add our user to the group we just created."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(210).default})),Object(c.b)("p",null,"You can skip the tags screen and create the user."),Object(c.b)("p",null,"In the success screen make sure to either download the ",Object(c.b)("strong",{parentName:"p"},"CSV")," or copy the ",Object(c.b)("strong",{parentName:"p"},"Access key ID")," and ",Object(c.b)("strong",{parentName:"p"},"Secret access key")," as you won't be able to view the secret access key in the future."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(211).default})),Object(c.b)("h2",{id:"standard-notes"},"Standard Notes"),Object(c.b)("p",null,"In ",Object(c.b)("strong",{parentName:"p"},"Standard Notes")," pick ",Object(c.b)("strong",{parentName:"p"},"Add New")," from the ",Object(c.b)("strong",{parentName:"p"},"Integrations")," section in ",Object(c.b)("strong",{parentName:"p"},"FileSafe"),"."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(212).default})),Object(c.b)("p",null,"In the ",Object(c.b)("strong",{parentName:"p"},"Link Integrations")," page pick the ",Object(c.b)("strong",{parentName:"p"},"AWS S3")," option and fill all the required information."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(213).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(214).default})),Object(c.b)("p",null,"Copy the code generated to ",Object(c.b)("strong",{parentName:"p"},"Standard Notes")," and you should see the ",Object(c.b)("strong",{parentName:"p"},"AWS S3")," integration in the app."),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(215).default})),Object(c.b)("h3",{id:"testing-the-integration"},"Testing the integration"),Object(c.b)("p",null,"Simply attach a file to your note to test the integration. The file should be available in ",Object(c.b)("strong",{parentName:"p"},"Standard Notes")," and in your ",Object(c.b)("strong",{parentName:"p"},"S3 bucket")," under ",Object(c.b)("strong",{parentName:"p"},"FileSafe"),":"),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(216).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"image",src:n(217).default})),Object(c.b)("p",null,"Congratulations! ",Object(c.b)("strong",{parentName:"p"},"FileSafe")," is now integrated with your ",Object(c.b)("strong",{parentName:"p"},"S3 bucket"),"."))}l.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=b(n),g=a,d=l["".concat(s,".").concat(g)]||l[g]||p[g]||c;return n?r.a.createElement(d,o(o({ref:t},u),{},{components:n})):r.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<c;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},201:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY4AAAB1CAYAAABZJgYSAAAgAElEQVR4Ae2dCXhN1/rG38wjMs+REJWYx1JT1Vyqqmqqci9utVp0uBRVSuuiXFddNFyUVqmi5j8xlXLLNRQxVYkhZjGGRBIZ/8+7dB8nOSfJOaZzTn3reY6z99pr+PZv76x3r+9b27ErX61hHiQJASEgBISAEDCRgL2J5aSYEBACQkAICAFFQIRDbgQhIASEgBAwi4AIh1m4pLAQEAJCQAiIcMg9IASEgBAQAmYREOEwC5cUFgJCQAgIAREOuQeEgBAQAkLALAIiHGbhksJCQAgIASEgwiH3gBAQAkJACJhFQITDLFxSWAgIASEgBEQ45B4QAkJACAgBswiIcJiFy/KFF307HR990NfyhogFQkAIPLUEHJ/aM7exE4+MCEOr5o1RvVplBAUF4PyFS4jb+DOSk2/Z2JmIuUJACNg6ATv5Tw6t/xJ269weI4cNxH937MKx4ydQooQnXmhYHx6e7ujd9+84cOg36z8JsVAICIE/DQGZcVj5pXy+QR0Mev8d9Ok3ENu2785n7eQJozBnxiQ0e6mLVc08WjRtBH9fH3y/ZGU+e43tuLi6wNPdDddvJBs7/FTkuTjmwskBSL375/Ic8wGndFgITpw+g7sZd5+Ka/m0nKQIh5Vf6b+80RkLlyw3EA2aPWrsl9i8ZjG6dnwZM2bPt5oz6fhKG4SFhZgkHCOHfoAmz9dHvaavWI39phiys382HO3tVNHs3Dwcv3oX769yw8108wf/8a3TUCvMBY2mm1/XFFufdJmO7dvgr290gr+fr67rtLR0DBz2OfYfOKLLs4aNaf8ajbPnLmDC5BnWYI7N2PDnuFNtBrf5hpaPKotde/YZrcj4RsKJU6hds7rR45bKzMnOQl5urknd/3vqVxgwYIBJZa2pUF5eHpbsvIymn/2K4YtO4Bk/Z3zVPv2BTBy94hp6xB59oLrWVsnXxwsD33sb2VlZ6Ny5MypXrowhQ4YgJeU2ggP9rc1clIkIR5mIMKuzy9oNkhmHlV+hwGL+2C4lJSE4MNCiZ8Eny9jJYxEWEoS8PCA3N0fnOuMf5pwZ/4Kri4uy8U5aOib+ezrWbdyKBXOmIDQkGGl30tDmtb9a9BwepPPkLAdcc6+G5SfTUevXq2hf+97AOKpFCl6MdlMzEs5G/peYgQ//z1N1MaB+KmqF2mH/xVy8GOOMszezEX/BC3VL+6HnEsDTJRdT26WjQqALOKG5kZaDYXF52HfR9UFMfOJ1KsU8Azs7O/xn5mwknL8JN98IxG3Zhe++r4eA0Ei4unliyfz/YO++A/hiUuw9Jn17okWTRmjX5W9qf0vcYpw6fQbPRJWBs7Mzkq5cxd/eHYRr129i+JABqFu7JjIzsxASHIicnBzM/2EpZny9QNdWpw4vw9nJCZzlfDHpK2z4aZs69v3cqbhw4RJKliyBZ6LK4lLSFfj4eMPb2ws/r1uCGzduokO3t1RZ+adoAiIcRfOxiqMHjxwr1I4LFy9bXDhiv/wHQoICsGLFCuzeswcfDRqkszcr6y527dqFtWvWIC0tDZ8MH46PB/ZXwjH1q1j06NYV1apW1ZUvbmPDyvsuuZavdEfB/eLqP8rj9vb2cHZxVZ9nQh2QnnlvlnXyYirGHb2M/SdvoUZUKYzoUBZvVE/FgnhP+DjfReVgL4R5ZWPr0WScu5mNMD9XBHreE9ZhTe6gQqAb3pl9FBmZuejZJATBHk4AzBOOX/tno/a0J//nvXHLNmRlZWHYx0PwXP0G2L7zV2zbsRvuHiV16H28SsKr5D0hZSa3S3ndP+7m6oqoMhFY8P1ChAQHoWXLluj/9l8xauxkeJcqqVxg8QcOYsniRejRozv+0q2TEo5mLzTAG1064MCBg1i69Ef069cPo4YNxL74Q0p0vEuVQtnICFy5cgW7d+9C4tlzCArogOvXb+C7+fORfDtVZ2NRGwXvuYL7RdX9sxx78nfWn4XcEzgPBsbv3EnTPb0b6zIlNRXlypUxduiJ5Hl4eCA8LBTLV6zA0JHj4OLqjtdeO43IiEjV/5lzFzHs0zHo9noXVKoQjezsHLj8Mfv4efte1H32WVQ1QziaNm2KzZs3q7b1/2CZ71gi5Imcs9ZJk2gPhPunIDrAERFeHhi7MhFAFL76xRHPR5VEu+f9EOCZB846orwzVTW6uJLvZKHc4MPw8AqEs7MLJrxy363nlJuFnFxXOJUKwc5EF/T87ho8S/rA4/44q3Vf6DdFg8kS4uHi4oaevXrji3Fj8WKLJurDc969dz8GjxinC5Ln5d0/ZzVNLXA2476YgCUr4pCVlYm1K8qiWpVKqgTbunXrFl7t3B3unqWwactW/N/KZWhYrza6dX5FidYrnd5AiVK+2LP3AOLWrES3Tq9gyoxvkIc8xMfHo83LHeBR0gtOLu5o26Y1rl69ih+Wr4eDgwNc3TwKWGK4a033oKF1TyZHYhxPhvMD9VKxQnkVwyiq8v927YOnhweqValYVLHHdqxSTDnV9pZtO+DtG6SeLO3tHHT9tWzWGL9sWY+3//YXlI0sDfs/Asos4OrqAXsH855dKA78w9VPlhAN9h9QwglR3nY4fSkNr//7AL456KXMWtLHHbO7+6F5eRd4udiBg52dXswnMycPkdG14R8YjlLeAfqngokbbiE5LRuxXbxwYLArlr3rhxA/01VDEw2t0YL7Wv7j/P7t1GU816gpgoOD0bdvX+zdu1e5l3p2e83kbimWJb394RsQisQz5/IF2mEHBIZEokRJb1y+ka74PvdsDfh6e6vZRFBoGXh4lsTV25nIzs5GUKCfrt+7mVkoXa4yfAPCULKUDwA72NnZq/KmiAYbsqZ7UHdiT3hDhOMJAzenu5fbtMTKNeuLrMJ3OJKSruK19m2KLPe4Du7ZG6+arljx3hNhwX569+iC1NQUhIdHoMELLTFz1pyCRcze1//DtZRo0Oh52y6h3piz6PHNbRzKiEbJUr4o7ZWNaiGueG/uUVT/9CQ6z7qBq7ezTD7Hc5mhqDj0GOoP34Np686hVrgr3qxtmgtFXySqj7ui61M/X5f5mDa8vUvB07MkwstUQHh0beyMT0CnN3ojNzcX1f94uGFcQpt1mmJGTEw00tONLzyoV7eWiqmcPXsWycnJ8PO/LxKMnzk6OiIpKel+N3b3VsLdz4Cqr79vyra13IOm2Po4ypj3uPc4LJA2jRJo27q5il2s3bDF6HH9zO+XLEOfXt0xaeqsIt1a+nUe1XZOHtRUv2vH9jh95hwC/P1RqXIFpPzhL759KxlhYcFo26Eb3N3d8FafNx9J1/zDZYyD35ZKLu5uKF02Il/3KekUCWfUqRSMhFwvtI5OR5CXM3A2LV+5wnbGvnQX+88/g9VHHLHs95t4p2Uert9i3fsxgMLq6sc0yKX2tMJKPr78dq2b4W9/7YbFy1Zjw+ZtcHVxRc/uncB40E+bf1YdH09IQLWqVVC2TGlUrRSDJi88b2BQjRpVsOPXA+jR5VWEhYZg3foNujKurq6oWrkCSni6Y8iH7ypRWr12I+yRhw/e74+hf38XCxavwMiPP1B1lq1aq6tbcOPkqVOoEBMNCp6/nw+OJ5wuWKTQfWu4Bws17jEfEOF4zIAfpHm6nT4bPgif/uOfJgkB3+Hg7GT+11PR9rW/PEiXD1zH3s4OsdP/g09HfILxo4crt4H+0+GESVMwd1YsZsdOVH3QP62f9F1X+vm2un0t3RnLdiehe51AdK8DpGe5ICuH3vU8dUpcdUbXlX7S37XLvosRLbwxogWQm+eH3y/ewfTt9nArXjf0m7TYdnz8QaS81g7du76mPjSE57t8+XJ8u3CZcgl9Pfc7TJ40Ht/PmaaO3bp1G6729xYHaIY3bdwIzZs0VrsJCQkYOmI03DzpWgJcnF0wc+p4tU1X1NCPh+FORja+/m4xnqtbG+1fflF92O/06dNx+uxlODpygYEh+2/nfY8vJ32BuGXfIS09A03bdFbl5J+iCch/OVI0H4scXbNsHoICA7Bw8QqT+48uH4XnGzyHUWMmYqEJb2yb3LAJBdNSb+Pq+eOoW7cOtm/fAdg7wsHJBZHPVEFmZibOJhxAg3p1cOTIEaSmZSIzIxXlqzVULU8cMwxVKlVAq/Y9TOjJeookHNoB/9AoePkYLoW+mnQOeTfPorSvAw4nMcaRC++AcPgFhuFa0nmkJl9DZPT9d2+uXzmP2zeuoExMTbDuraQziAlwwLGruXD29EFoZAwo0LaQMjMzcPHMMWRn3FGLHjiwHz58BP5hUSoGxnO4ezcd504cwrO1amDv3n2wd3RBdnYWylV6Vp3izi2rMGLEp4iLW4tr164h18ENQeHlFAPtfomJiUFUVBSO/n4MoWWrwP2P1QNXLp9FbnoyatSooe5Fv7ByyoXIhhOPHYB7KR8EBIXrUGq2VIwpj3MXkxAYHq07JhuFExDhKJyNxY5wNVXdZ2vm6792jWoIDgqE/nsdi5auREpKfv937Kx5aiVWvspPYCc3Lw/ZWXfh5ORi1GfMAcXR0Vm5LGjO3On/gn+AH/x8vLFs+XJMmDL3CVj55LrIyc1BTnaOeg/B3F7JMjcnC/YOTjYjGAXP8d453FvdpT3tFyzDhwpHJ8NzpHD8c9I0LF6xFnb29rC3ux+KVcJRuQJatOuu3hdyNLK4IjcvF9lZbJvvwpgmuBQuLtQwtXzBc3na9kU4bOSK8z86bPpCQ/BNcooHl+nWbNDKRqw3NPPllo1Q59ma+H7BfPxv329Gn9wNa0nO00Dg7+90x9JVG3Hmgl5Q+48Tb1CnCiL439ksK3rRyNPAyZLnKMJhSfpm9v35iEGILhelZh4DBg236f8Vl+6tjPRUeJTwUu9+mIlCiv+JCSTfSFLvrhibqWRk3EFWZqZaivsnRmD1pybCYfWXSAwUAkJACFgXgfvOQ+uyS6wRAkJACAgBKyUgwmGlF0bMEgJCQAhYKwERDmu9MmKXEBACQsBKCYhwWOmFEbOEgBAQAtZKQITDWq+M2CUEhIAQsFICIhxWemHELCEgBISAtRIQ4bDWKyN2CQEhIASslIAIh5VeGDFLCAgBIWCtBEQ4rPXKiF1CQAgIASslIMJhpRdGzBICQkAIWCsBu19//TX/jwNYq6VilxAQAkJACFgFAbvbKSlWKRz8ecmMjHQcPnQYzZs3twpYYoQQeBoIbNq0CZWrVIarqxscHO7/fvzTcO5yjqYRsGpXlf4vo5l2OlJKCAiBR0FA/vYeBcU/bxtWLRx/XuxyZkJACAgB2yUgwmG7104sFwJCQAhYhIAIh0WwS6dCQAgIAdslIMJhu9dOLBcCQkAIWISACIdFsEunQkAICAHbJSDCYbvXTiwXAkJACFiEgAiHRbBLp0JACAgB2yUgwmG7104sFwJCQAhYhIAIh0WwS6dCQAgIAdslIMJhu9dOLBcCQkAIWISACIdFsEunQkAICAHbJSDCYbvXTiwXAkJACFiEgAiHRbBLp0JACAgB2yUgwmG7104sFwJCQAhYhIAIh0WwS6dCQAgIAdslIMJhu9dOLBcCQkAIWISACIdFsEunQkAICAHbJSDCYbvXTiwXAkJACFiEgAiHRbBLp0JACAgB2yUgwmG7104sFwJCQAhYhIAIh0WwS6dCQAgIAdslIMJhu9dOLBcCQkAIWISAo0V6taFOMzIyELcuDg0bNIS/v38+y9evX4/IyEhER0er/MtJl7F+3XpcuHAB3t7eaNCgAapWrZqvjrZz+PBhJJxI0HZ133awQ/v27XX7j3ojNTUV06ZNw4cffoi1cWsREx2DChUq5Otm06ZN6rzKlSuXL19/5/fff8fx48fRrl07/Wy1vXr1apQvXx6nTp1C9erVERwcbFCmqIy9e/fC2dkZVapUKaoYzpw5g5MnT6Jp06aFllu7di28vL1Qv179QsvIASEgBMwjIDOOYnhxoI39Khbnz583KDl9+nTs3LlT5R89ehQ9uvfAL7/8AldXV2zfvh0DBw7E4sWLDeoxY+vWrardjRs2Qv+zYcMGo+VNyUxLT1OiY8xWrf4PP/yAvLw8ZGZmqv4/+ugj3L59WzusvmfPno09e/bkyyu4wzpTp05V4qF/7MSJE5gyZQrS09PVN8XD3LRs2TJs2bKl2Gr79+/HnDlziiwXFhaGsWPGKnuKLCgHhYAQMJmAzDhMRlV0wQULFoBP6LGxsbCzs1OFR44ciblz56Jjx46wtzfU6MDAQFW+6JZNP5qXm4c7d+7g7t27RislJydj0aJFmDV7lu44y06ePBmffvqpLs+UjVq1asHR0VEJIGcXWuKA7+LiomZaS5YsgZubm3bI5O/hw4cb5VWwgZdeegktW7UsmJ1vnzM+Ly8vxMXFoUOHDvmOyY4QEAIPRsBwNHuwdp76Wrdu3UJWVhZycnJ0LPr27YtevXqpfF2miRucwbz55pto0aIFWrduDYqQJggckOnO4rGuXbuq2U3imUTVF5vnLGLp0qUGPXHwLFu2LCIjInXHXn/9dfz3v/8tdoahq/DHhoODg+p/48aN+Q6xjzZt2qiBn+6wAwcOIDs7W9lJF9Q777yDMWPG4LfffsPbb7+t2uB5UnAnTZqk2uKMh+fINHbsWFCU+/fvr8p27twZBw8eVMdo92ejPlPbFMUhQ4YoVuTSp08fXLx4UR3r1KkTfvzxR7Ut/wgBIfDwBEQ4Hp6haqFLly7K587ZBQfAn376ST1tc6DjE7ixRDfYqlWr8n3ofmHi4B8QEAC6w0aPHo0dO3Zg165dqo+ZM2firbfeUrOZ+vXrY9SoUfD18cX777+v6lKs6tWrZ9DlsWPHEBUVlS+/Tp06aNasmRrM6eoyJ7Vs2RI3b95UcQbWo5sqJSUFrVq1Us3QZUaXFV1j169fB2cSjKc0adpE2crY0IwZM1T55cuX49KlS6re5cuXcePGDbXNvG+++UaJEWMzZDJhwgR1jO4yxpOYOGs6ffo0xo8fr5jRDrrlmMqUKYOrV6/q2lSZ8o8QEAIPTECE44HR5a/YsGFDNZAzWJyQkIAvvvgCfNJlHIADp7FEtxKf0PU/hw4dUrMWPmFTPCIiIuDu7q7cQhykXVzviRCD03ySp4B8+eWXKq7CQDRTxYoVERISYtAlB3Zj+QMGDFBtzZg+w6BOURmVKlWCh4eHLh5BN5Wvr6+BOGltvPrqq3jvvfdw/tx5Ve+DDz5QZcmpcuXKWjGDb7LlLIZCwxlSUlKSQRmK1bhx41Q7FGpPT0+dUAQEBqjy2gzEoLJkCAEhYBYBiXEUg0uLTaRnpBuU1FxHObk5SDydiNDQUPTu3Vt9uBqLT9EM3taoUQMc/Aomxjg4ozCW2Ha/fv3UE73+aq6gwCAMHjIE382bpwSHcQaKFcWiuMSnfh8fH4NiHPyHfTIMIz8dCc4iTE2M5dCNxoA+3U10WxlbZaW1x7gIEwdwBq01tszjrODcuXNa0Xzf4eHhun0uPDCW3NzdMHHiRCQmJqJUqVIg/6CgIFWUszEmzkIkCQEh8PAEZMZRDEMGVpm2/rw1X0m6ffjEry01ZTxj8+bNujIc4Ph0zFTYgKgrXGCDbdMtwzbXrFmDefPmoUSJEqoUZx1hoaEqj6uPOGDzm6u5iksMVF+5csVoMS5Xpdvr888/VyuujBYyktm8eXMlblyaTNuat2hupNS9LAoUk5+fn1qlpj8T4yyt0PTHYoPCjlO4Px76MTgDWrFihXJR8Vy0RLuYtGul5cu3EBACD0ZAhKMYbnwqZhxg27ZtKhZB3zuDsxzYmWrWrAkHewc16DLAy2WsFBTGCxYuXKgrY6wbLomlX77gRxvoOINhwH3lypVqUOZTNJ+o6e6Jj49X7hjtKZ7Bau0J/uzZs6r/gn3ynZOi3DUMZvOpXP/JnLMmxhgKS4yZ0D3FGAMD75wRFZcaN26sVn9xxRnffWEfdL09aOLsjMzphnN0ckT8gXjlPiMvihNjJkyc5UgSAkLg4QmIq8oEhoMHD1YBWcYr+GHi0zNX/PDpmWnI0CGY+M+JGDZsmNrnP/S1M06hvSCoOwCoJbsUCMYoCiauAOIgzBkHU0xMDKpVqwauNmLAl8tQ2a6WGjVqhLp166o4CPuiXQzKc2WRfuILiRQhJm3JsPbNPM6u2C5jBVpikP/atWvo2bOnlmXw3bZtW3z77bfKLoODehlaX3Q9jRgxQokNxZUuO9pGkdSSVpZiaF/MjMPdzR20gW4/fvjyJWMenK0x7sIgOvugW0+SEBACD0/A7nZKivHI7cO3/VAtcFkrV+QcOXwYdIdYQ+ITLAOzFA0+ZWuDm75tLEN3EN989g/wV7MR/ePmbFNYGAznwJibm6sGQM11xqdsDoh0YRXm9y/YF2cSfJeBsyVjYlaw/OPa5yxj3959Kj7C68wBnYsBuOKKcZ0HTVxsQPHRGHGJbsmSJdG9e3e1VJnLdCUVT4D/c0ClypXVqkDOZCUJgYIE5BGsIJEi9jlAc5VTUYllSpcuXVQRk4/xyVlLfPLWBkTmcTajHzTXyhX1TZHhCia+F8FYhqWSk6OTWgm2b98+PPfcc9i9ezcY1xk0aNBDmaTFULRGyIvvjjBxybEkISAEHg0BiXE8Go4200qPHj1AVxEDypZKnK3NmjVLxWj4dMvlxnyfgzGYR504C6H7UIv/POr2pT0h8DQSEFfV03jV5ZyFQBEExFVVBBw5pAjIjENuBCEgBISAEDCLgAiHWbiksBAQAkJACIhwyD0gBISAEBACZhEQ4TALlxQWAkJACAgBEQ65B4SAEBACQsAsAiIcZuGSwkJACAgBISDCIfeAEBACQkAImEVAhMMsXFJYCAgBISAERDjkHhACQkAICAGzCIhwmIVLCgsBISAEhIAIh9wDQkAICAEhYBYBEQ6zcElhISAEhIAQEOGQe0AICAEhIATMIiDCYRYuKSwEhIAQEAIiHHIPCAEhIASEgFkERDjMwiWFhYAQEAJCQH46tph7gL8hHrcuDg0bNDT4qdb169erX63Tfr+bv6W9ft16XLhwAfzZ1wYNGqBq1apGezh8+DASTiQYHLODHdq3b2+Q/6gyUlNT1W+ODx48WP0qXlpaGnbs2IHffvsNTk5O6ne/GzZsqH4HnH3yJ12vXr0K5hVM/A3zTT9tQtuX2qq6BY9r+2vXroWXtxfq16uvZcm3EBACNkxAZhzFXDwOtLFfxeL8+fMGJadPn46dO3eq/KNHj6JH9x745ZdfwN8d3759OwYOHIjFixcb1GPG1q1bVbsbN2yE/mfDhg1Gy5uSmZaepkTHmK1a/R9++AF5eXlKNM6ePYuePXti8uTJuHHjhjrH8ePHo2/fvrh+/bqqsmvXLvUb5Vp9/e/rN66rc6C4FpXCwsIwdsxYpKenF1VMjgkBIWAjBGTG8Ygu1IIFC1CuXDnExsbCzs5OtTpy5EjMnTsXHTt2NPqb14GBgar8IzIBebl54G9s371712iTycnJWLRoEWbNnqXEY/jw4fDw8MDXX3+NEiVKqDpXrlxB//79MWHCBFBEikqlw0tj2bJlurqFleWsy8vLC3FxcejQoUNhxSRfCAgBGyEgM45HdKFu3bqFrKws5OTk6Frkk3uvXr1Uvi7TxA3OYN588020aNECrVu3BkVIE4QlS5aomQWPde3aVc1uEs8kqr7Y/EcffYSlS5ca9MSBu2zZsoiMiMS+fftw6dIlDB06NN/AHxAQoISDxzkjYaIYffLJJ8qWtm3bKrFgPuv36dNHHef+iRMn8O6776pyFIi538xFTu49Hp06dcKPP/6o2pN/hIAQsG0CIhyP6Pp16dIFZ86cUbOLSZMm4aeffoKbmxs6d+4MFxcXo73QDbZq1ap8n/3796uyHPw5iNMdNnr0aBWHoNuIfcycORNvvfWWms3Ur18fo0aNgq+PL95//31Vl2JVr149gz4Zr4iKilL5x48fV3Zp8Rn9wnXr1lW7J0+eVN8UCM6OaEurVq3UN2cvWdlZyqWVm5sL7g8YMAB+fn7qOAVk8aLFmDdvnmqjTJkyKlZCl5gkISAEbJuAuKoe0fVj8JhuKcYo9uzZo9wybLpdu3bqCV5zX+l3xyd5zgL0Ewd8unboLuIA7unpiczMTBWsvnnzJspHl1fFf//9d1SsWFEJSNOmTVVcpXr16uoY80NCQvSbVducEbz44otqm4Ftd3d3gzLM0ISOsygmurNoj729vYqJUOzo0nJ2cdbV37RpExwcHNTMhPXptrt48aKK8fTq2QsBgQGqLPN8fHx09WRDCAgB2yMgwlHMNeNgyZSeYRjY1VxHdMcknk5EaGgoevfurT4MGC9fvhxz5sxBjRo1jK5K0p7ijZnAtvv16weKhb+/v65IUGAQBg8Zgu/mzVOi4+joqMSJYlFcYsBbG7QpLGyb7jWuptJPXEXFxKA2V1sFBwfrYjQM/DMxwK6fOCvh+Wuiw2Ply5dX7jWeC2dETBQsSUJACNg2AXFVFXP9GNRl2vrz1nwl6fbJzs5WgyoPMJ6xefNmXRkOsK+//rraP3funC7flA22PW3aNNXmmjVrlLtHC15zsA8LDVV5DEwzDsJvruYqLtF1xpkCU82aNdX3unXrDKqtWLFCzXBiYmIMjhWW4evri6SkJNBtpSWKCYWNYkK7mShCkoSAELBtAiIcxVw/zjjq1KmDbdu2qVgEffQHDx5UAzurcgB2sHcAYw1cUUU3FQWFS2MXLlyoWtcG6YJd0QV1+vRpg482yPIJnjOClStXqoGXs5jExES89957iI+PV26sWrVqqWbpJtJmRwxqs/+CKTIyUrmPmM8ZB91oU6ZMwerVq1WM4tq1a5g/f75yL1GQ6CYzNTVu3FgFyWfPng3aSfHjai0G8JkuX76svjmLkSQEhIBtExBXlQnXjy/LcXnq1KlT1YdV6PcfO3asCgZzf8jQIZj4z4kYNmyYrkU+aTPIbSwAzZRcrnIAAAIxSURBVJgHBYJB7oKJq4+4+omzGCY++VerVg0clPkexksvvaTa1eo1atRIxUP4dM++aBeD8lzxpJ/4QiJFSEuMW9B1RcGjgDDRZr5/osVCKEbG4jMsy5cVtUSRY5B+3Lhx4KovJvbX951753Dq1CkVYKeNkoSAELBtAna3U1LyO6ut5Hy4rJUvjB05fBjNmze3Cqv4JE13DEWDrhljAyrLqMCxszP8A/zVbORBjaewuLi6wN3NXbmAbt++rd6HYHuMG3CfLiwt7lBcP4wvcJks3WAFxYxvvTs7OetiIMW1VdRx2k27NJFgPOSNN95Qy4W1GUhR9eWYZQlwoUOlypXVqkDOZCUJgYIExFVVkEgR+xygIyIi1CzDmGiwKsuULl0aQUFBDyUabIv/bQlFg4lP/lq8hfucGTBobqposA4Hc75PwZcVCyYG3bXAecFj5u7Tbk00WJfvhDA1a9bM3KakvBAQAlZIQITDCi/K4zSpR48eCA8P172Y9zj70trmsmO68LQYjJYv30JACNgmAXE42+Z1e2CrubKqYOzjgRszseLzzz9vYkkpJgSEgC0QkBmHLVwlsVEICAEhYEUERDis6GKIKUJACAgBWyAgwmELV0lsFAJCQAhYEQERDiu6GGKKEBACQsAWCIhw2MJVEhuFgBAQAlZEQITDii6GmCIEhIAQsAUCIhy2cJXERiEgBISAFREQ4bCiiyGmCAEhIARsgYAIhy1cJbFRCAgBIWBFBP4fjUqldgEQVysAAAAASUVORK5CYII="},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-bucket-851abf1bc592c4c870c12151c278ef1b.png"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/block-all-public-access-402527d2bb780b555060dd1a80ddf08b.png"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-policy-41918db59edf2c5fd436353bf6cefb3a.png"},205:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/review-policy-386b454a45b581399624fb2201164ab7.png"},206:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-group-f4eac66de9f8c5b9166f1858aee04a71.png"},207:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/attach-policy-to-group-f3c6c6f1e9aad469318cbc46714526b2.png"},208:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/review-group-f920c6ad884c37cfeacf442fb5fcb630.png"},209:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create-user-a6d1b7afb93102ed79a292ad24f13b71.png"},210:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/add-user-to-group-613f141b3ae1c49a6657ccffaad174da.png"},211:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/copy-access-key-3c13561a0ec3f6872f606da9aec5071c.png"},212:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/add-integration-in-sn-ac701528b5a683dee337972ffe311536.png"},213:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/link-integrations-37dbf3aef6792f4052aae4739e52dae1.png"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/submit-integration-59fc1604a535d37f787fbabbbb80dea9.png"},215:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/test-integration-1-45ea3387460ee07c669abc13328e9df2.png"},216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/test-integration-2-bf1276d2f06191c6a25913165595f2ac.png"},217:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/view-test-integration-in-aws-c7d81913380d594fd062f7fc6ba3338d.png"}}]);