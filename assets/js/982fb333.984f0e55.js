(self.webpackChunkanshulrgoyal=self.webpackChunkanshulrgoyal||[]).push([[2862],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5265:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"Scraping with NodeJS and Cheerio",slug:"scrapping-nodejs",author:"Anshul Goyal",author_url:"https://github.com/anshulrgoyal",author_image_url:"/img/anshul.jpg",tags:["cheerio","nodejs","scrapping"],image:"https://unsplash.com/@ayahya09?utm_source=medium&utm_medium=referral"},s=void 0,c={permalink:"/anshulrgoyal/blog/scrapping-nodejs",source:"@site/blog/2019-01-20-scraping-nodejs.md",title:"Scraping with NodeJS and Cheerio",description:"Everybody says that python is best for scraping but I always wonder why we don't use NodeJs for Scraping?",date:"2019-01-20T00:00:00.000Z",formattedDate:"January 20, 2019",tags:[{label:"cheerio",permalink:"/anshulrgoyal/blog/tags/cheerio"},{label:"nodejs",permalink:"/anshulrgoyal/blog/tags/nodejs"},{label:"scrapping",permalink:"/anshulrgoyal/blog/tags/scrapping"}],readingTime:5.505,truncated:!0,prevItem:{title:"Creating Forms In React With Formik And Yup",permalink:"/anshulrgoyal/blog/react-formik"},nextItem:{title:"Setting A React Project From Scratch Using Babel And Webpack",permalink:"/anshulrgoyal/blog/react-setup"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Everybody says that python is best for scraping but I always wonder why we don't use NodeJs for Scraping?"),(0,o.kt)("p",null,"The answer is clear scraping is CPU intensive task since NodeJs is single threaded so scraping blocks the main thread. I have one solution for the problem worker threads. We would scrap the IMDB website for the data."),(0,o.kt)("p",null,"Our goal is to extract all the data from this ",(0,o.kt)("a",{parentName:"p",href:"https://www.imdb.com/title/tt2193021/?ref_=nv_sr_1"},"page"),". We would scrap all the details of the tv show, all awards won by the tv show, the cast of the tv show, episodes, seasons and much more."),(0,o.kt)("p",null,"The data provided from scraping is way more than provided by our script and would be more than provided by any third-party API."))}d.isMDXComponent=!0}}]);