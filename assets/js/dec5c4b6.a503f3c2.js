(self.webpackChunkanshulrgoyal=self.webpackChunkanshulrgoyal||[]).push([[800],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7699:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],l={title:"Scraping with NodeJS and Cheerio",slug:"scrapping-nodejs",author:"Anshul Goyal",author_url:"https://github.com/anshulrgoyal",author_image_url:"/img/anshul.jpg",tags:["cheerio","nodejs","scrapping"],image:"https://unsplash.com/@ayahya09?utm_source=medium&utm_medium=referral"},s=void 0,c={permalink:"/anshulrgoyal/blog/scrapping-nodejs",source:"@site/blog/2019-01-20-scraping-nodejs.md",title:"Scraping with NodeJS and Cheerio",description:"Everybody says that python is best for scraping but I always wonder why we don't use NodeJs for Scraping?",date:"2019-01-20T00:00:00.000Z",formattedDate:"January 20, 2019",tags:[{label:"cheerio",permalink:"/anshulrgoyal/blog/tags/cheerio"},{label:"nodejs",permalink:"/anshulrgoyal/blog/tags/nodejs"},{label:"scrapping",permalink:"/anshulrgoyal/blog/tags/scrapping"}],readingTime:5.505,truncated:!0,prevItem:{title:"Creating Forms In React With Formik And Yup",permalink:"/anshulrgoyal/blog/react-formik"},nextItem:{title:"Setting A React Project From Scratch Using Babel And Webpack",permalink:"/anshulrgoyal/blog/react-setup"}},p=[{value:"What is Cheerio?",id:"what-is-cheerio",children:[]},{value:"Let&#39;s Get Started",id:"lets-get-started",children:[{value:"Getting Genre Data",id:"getting-genre-data",children:[]},{value:"Getting Image URL",id:"getting-image-url",children:[]}]},{value:"Using Mobile Site For Data",id:"using-mobile-site-for-data",children:[{value:"From The Ajax Calls",id:"from-the-ajax-calls",children:[]}]},{value:"Using Worker Thread",id:"using-worker-thread",children:[]},{value:"Observing Page Behavior",id:"observing-page-behavior",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Bonus",id:"bonus",children:[]}],h={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Everybody says that python is best for scraping but I always wonder why we don't use NodeJs for Scraping?"),(0,i.kt)("p",null,"The answer is clear scraping is CPU intensive task since NodeJs is single threaded so scraping blocks the main thread. I have one solution for the problem worker threads. We would scrap the IMDB website for the data."),(0,i.kt)("p",null,"Our goal is to extract all the data from this ",(0,i.kt)("a",{parentName:"p",href:"https://www.imdb.com/title/tt2193021/?ref_=nv_sr_1"},"page"),". We would scrap all the details of the tv show, all awards won by the tv show, the cast of the tv show, episodes, seasons and much more."),(0,i.kt)("p",null,"The data provided from scraping is way more than provided by our script and would be more than provided by any third-party API."),(0,i.kt)("h2",{id:"what-is-cheerio"},"What is Cheerio?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Fast, flexible, and lean implementation of core jQuery designed specifically for the server.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"**const** cheerio **=** require('cheerio')\n**const** $ **=** cheerio.load('<h2 class=\"title\">Hello world</h2>')\n\n$('h2.title').text('Hello there!')\n$('h2').addClass('welcome')\n$('.title').text()\n*//=> Hello there!*\n")),(0,i.kt)("p",null,"We can use cheerio to traverse the dom created from the HTML send by the IMDB website and get the required data."),(0,i.kt)("h2",{id:"lets-get-started"},"Let's Get Started"),(0,i.kt)("p",null,"First, we should install two dependencies cheerio and request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install cheerio request\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2724/1*nDXNx6CNMzGk7m4kh8X7lg.gif",alt:"How To Get CSS Selector on firefox"}),(0,i.kt)("em",{parentName:"p"},"How To Get CSS Selector on firefox")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const cheerio=require('cheerio')\n\nconst htmlString=`<html><body><p class=\"blessMe\">HI</p></body></html>`\n\nconst $=cheerio.load(htmlString)\n\n// we can use $('css selector')\nconst pText=$('.blessMe').text()\n//=> HI\n")),(0,i.kt)("p",null,"The cheerio uses syntax very close to JQuery. First, we load or create dom tree from the HTML string using load method on the cheerio and then we can use it for traverse the dom with using CSS selector. \\$('css selector') have many methods."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"text: gives the text inside the element (text children of the tree).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"html: inner HTML of the element.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"find: find children of the element using CSS selector.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"attribs : gives the attribute of the element."),(0,i.kt)("p",{parentName:"li"},'const request = require("request");\nconst cheerio = require("cheerio");'),(0,i.kt)("p",{parentName:"li"},"function getFull(id, callback) {\nrequest.get(",(0,i.kt)("inlineCode",{parentName:"p"},"[https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1"),"](",(0,i.kt)("a",{parentName:"p",href:"https://www.imdb.com/title/$%7Bid%7D/?ref_=fn_al_tt_1%60"},"https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1`"),'), function(\nerror,\nresponse,\ndata\n) {\nconst $ = cheerio.load(data);\ncallback(error, {\nstory: $("div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)")\n.text()\n.trim()\n});\n});\n}'))),(0,i.kt)("p",null,"The string div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1) is found using the firefox or chrome dev tools. In a similar way, we can get data for other fields"),(0,i.kt)("h3",{id:"getting-genre-data"},"Getting Genre Data"),(0,i.kt)("p",null,"The data would be an array of string, we would use find method for getting the data. The CSS selector is #titlestory > div:nth-child(10) ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"genre: $(\"#titleStoryLine > div:nth-child(10)\")\n        .find(\"a\")\n        .text()\n        .trim()\n        .split(\" \")\n//=>[ 'Action', 'Adventure', 'Crime', 'Drama', 'Mystery', 'Sci-Fi']\n")),(0,i.kt)("p",null,"First, we select the outer div of the genre line then we use find to get all the a tags and extract the text children from all the a tags. Splitting the extracted test gives us our genre."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In the same manner, we can get most of our data.")),(0,i.kt)("h3",{id:"getting-image-url"},"Getting Image URL"),(0,i.kt)("p",null,"We want are tv show to have a poster we would use attribute for this task. IMDB website uses a technique called late-loading for images. In this technique images are loaded after the whole page is rendered completely, the img tag src the attribute contains a placeholder image. The real source of the image is on the loadlate attribute. The image URL used by IMDB contains a parameter each alters the image quality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'poster:\n$(".poster >a:nth-child(1) >img:nth-child(1)")[0].attribs.src.split("@._")[0] + "@._V1_QL50.jpg"\n')),(0,i.kt)("p",null,'The poster image is given by the src attribute accessed using attribs property. "@.',"_",'" gives the quality of the image. The best quality is used in given example.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  "0": "@._V1_QL50.jpg",\n  "1": "@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",\n  "2": "@._V1_UX148_CR0,0,148,216_AL__QL50.jpg",\n  "3": "@._V1_UX86_CR0,0,86,86_AL_.jpg",\n  "4": "@._V1_UY99_CR43,0,99,99_AL_.jpg",\n  "5": "@._V1_UX32_CR0,0,32,44_AL_.jpg"\n')),(0,i.kt)("p",null,"The lower the number better is quality. Scraping requires an extensive study of the website. Now let us see a loadlate example, now let us try to get the related tv-shows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'related:Array.from(\n        $(".rec_poster").map(function(index, element) {\n          const id = $(this)\n            .find("a")[0]\n            .attribs.href.split("/")[2];\n          const _data = $(this).find(".rec_poster_img")[0].attribs;\n          return {\n            id,\n            poster: _data.loadlate.trim(),\n            name: _data.title.trim()\n          };\n        })\n      )\n')),(0,i.kt)("p",null,"The CSS selector is .rec_poster we get all the div in the selector using find and then mapping over the result to give us the required details. The image is taken from the laodlate attribute, not from the src . idis extracted from the link href attribute."),(0,i.kt)("h2",{id:"using-mobile-site-for-data"},"Using Mobile Site For Data"),(0,i.kt)("p",null,"Sometimes the desktop website use more JavaScript then it is not possible to use cheerio with it, we might use the mobile site as mobiles usually lack processing power. We would use it for scraping the cast of the tv show."),(0,i.kt)("p",null,"The sample data is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"cast": [\n        {\n            "name": "Stephen Amell",\n            "image": "[https://m.media-amazon.com/images/M/MV5BMTc3MTg0MDMyMV5BMl5BanBnXkFtZTcwMjc2MzQxOA@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTc3MTg0MDMyMV5BMl5BanBnXkFtZTcwMjc2MzQxOA@@._V1_QL50.jpg)",\n            "role": "Oliver Queen/Green Arrow/The Arrow/The Hood/Black Arrow/Elseworlds Flash(161 episodes, 2012-2019)"\n        },\n        {\n            "name": "David Ramsey",\n            "image": "[https://m.media-amazon.com/images/M/MV5BMTc1NDI3MDk2M15BMl5BanBnXkFtZTcwNjk4NDg4Mg@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTc1NDI3MDk2M15BMl5BanBnXkFtZTcwNjk4NDg4Mg@@._V1_QL50.jpg)",\n            "role": "John Diggle/Spartan/Green Arrow/The Hood(160 episodes, 2012-2019)"\n        },\n        {\n            "name": "Emily Bett Rickards",\n            "image": "[https://m.media-amazon.com/images/M/MV5BZTdkZjlmYTQtMGMwNS00Yzk3LTg4YWItMzVlNTY0MmNiMzM3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BZTdkZjlmYTQtMGMwNS00Yzk3LTg4YWItMzVlNTY0MmNiMzM3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL50.jpg)",\n            "role": "Felicity Smoak/Overwatch(154 episodes, 2012-2019)"\n        },\n        {\n            "name": "Katie Cassidy",\n            "image": "[https://m.media-amazon.com/images/M/MV5BMjMyMzA1MTY2MV5BMl5BanBnXkFtZTgwMzIyNzQ3MDE@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMjMyMzA1MTY2MV5BMl5BanBnXkFtZTgwMzIyNzQ3MDE@._V1_QL50.jpg)",\n            "role": "Laurel Lance/Black Canary/Black Siren(143 episodes, 2012-2019)"\n        },\n        {\n            "name": "Paul Blackthorne",\n            "image": "[https://m.media-amazon.com/images/M/MV5BMTQ1NjcyODAxMF5BMl5BanBnXkFtZTgwMjc5MDMwNzE@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTQ1NjcyODAxMF5BMl5BanBnXkFtZTgwMjc5MDMwNzE@._V1_QL50.jpg)",\n            "role": "Quentin Lance(139 episodes, 2012-2019)"\n        },\n        {\n            "name": "Willa Holland",\n            "image": "[https://m.media-amazon.com/images/M/MV5BNzgwMDk1NTUxMF5BMl5BanBnXkFtZTcwMTQxODY4Mg@@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BNzgwMDk1NTUxMF5BMl5BanBnXkFtZTcwMTQxODY4Mg@@._V1_QL50.jpg)",\n            "role": "Thea Queen/Speedy(132 episodes, 2012-2019)"\n        },\n        {\n            "name": "Echo Kellum",\n            "image": "[https://m.media-amazon.com/images/M/MV5BMTg5MTQwMzk2OV5BMl5BanBnXkFtZTgwMzEwNjI0NjE@._V1_QL50.jpg](https://m.media-amazon.com/images/M/MV5BMTg5MTQwMzk2OV5BMl5BanBnXkFtZTgwMzEwNjI0NjE@._V1_QL50.jpg)",\n            "role": "Curtis Holt/Mr. Terrific(79 episodes, 2015-2019)"\n        },\n    ]\n')),(0,i.kt)("h3",{id:"from-the-ajax-calls"},"From The Ajax Calls"),(0,i.kt)("p",null,"Often websites use ajax call for fetching data from the server."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2724/1*x5GOERaIdLxLI5NzI_86FQ.gif",alt:"Ajax call for the episodes"}),(0,i.kt)("em",{parentName:"p"},"Ajax call for the episodes")),(0,i.kt)("p",null,"The data from the ajax is faster since the amount of HTML received is much less and bandwidth is also saved. The URL for Ajax is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://www.imdb.com/title/tt2193021/episodes/_ajax?season=2\n")),(0,i.kt)("p",null,"We can make the request to this URL and scrap the data."),(0,i.kt)("h2",{id:"using-worker-thread"},"Using Worker Thread"),(0,i.kt)("p",null,"Worker threads are still in the experimental phase but we can test them in NodeJS 11.x without the experimental flag."),(0,i.kt)("h2",{id:"observing-page-behavior"},"Observing Page Behavior"),(0,i.kt)("p",null,"There is a good chance that the targeted page uses some sort of network call either be it HTTP, HTTPS, WebSocket or the other protocol if you are lucky it is in JSON format and you can simply format the JSON and get the required data. But in some case, the data can be XML or even worse JavaScript wrapper around the data, you can always parse the JavaScript in the sandbox. But if reverse engineer the page properly, extracting data is a piece of cake."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"It is just an overview of how to scrap the data from a different website. We discussed a few technique and methods. You may use many other tools like the puppeteer for scraping data from the pages which rely highly on the client side JavaScript."),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"All the Example For You ;)\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/anshulgoyal15/scrap-me"},(0,i.kt)("strong",{parentName:"a"},"anshulgoyal15/scrap-me"),(0,i.kt)("em",{parentName:"a"},"Example from my blog. Contribute to anshulgoyal15/scrap-me development by creating an account on GitHub."),"github.com")),(0,i.kt)("p",null,"All the Example are from My scraper\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/imdb-scrapper"},(0,i.kt)("strong",{parentName:"a"},"imdb-scrapper"),(0,i.kt)("em",{parentName:"a"},"scrap data from imdb web site"),"www.npmjs.com")))}m.isMDXComponent=!0}}]);