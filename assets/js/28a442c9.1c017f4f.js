(self.webpackChunkanshulrgoyal=self.webpackChunkanshulrgoyal||[]).push([[7170],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8113:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],s={title:"All in one guide for creating a killer API with Strapi",slug:"strapi",author:"Anshul Goyal",author_url:"https://github.com/anshulrgoyal",author_image_url:"/img/anshul.jpg",tags:["strapi","nodejs","cms","backend"]},l=void 0,p={permalink:"/anshulrgoyal/blog/strapi",source:"@site/blog/2020-05-24-strapi.md",title:"All in one guide for creating a killer API with Strapi",description:"This article was originally published here",date:"2020-05-24T00:00:00.000Z",formattedDate:"May 24, 2020",tags:[{label:"strapi",permalink:"/anshulrgoyal/blog/tags/strapi"},{label:"nodejs",permalink:"/anshulrgoyal/blog/tags/nodejs"},{label:"cms",permalink:"/anshulrgoyal/blog/tags/cms"},{label:"backend",permalink:"/anshulrgoyal/blog/tags/backend"}],readingTime:11.375,truncated:!0,prevItem:{title:"Rust Auth Libraries",permalink:"/anshulrgoyal/blog/auth-table"},nextItem:{title:"A beginners guide to gRPC with Rust",permalink:"/anshulrgoyal/blog/grpc-rust"}},c=[{value:"This article was originally published here",id:"this-article-was-originally-published-here",children:[]},{value:"Creating Database Schema",id:"creating-database-schema",children:[]},{value:"Documentation Plugin",id:"documentation-plugin",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Setting Up Permission",id:"setting-up-permission",children:[]},{value:"Adding Comments",id:"adding-comments",children:[]},{value:"Homepage",id:"homepage",children:[]},{value:"Blog Page",id:"blog-page",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"this-article-was-originally-published-here"},"This article was originally published ",(0,r.kt)("a",{parentName:"h2",href:"https://blog.logrocket.com/how-to-create-an-api-with-strapi/"},"here")),(0,r.kt)("p",null,"CMS has been around for quite some time. CMS refers to the content management system. Strapi is a headless CMS for Node.js. Strapi provides GUI for creating different content types and user management baked in the platform. Strapi supports both Restful API and GraphQL. Strapi supports both NoSQL and SQL databases. Changing the database is as simple as changing environment variables."),(0,r.kt)("h1",{id:"setting-up-the-work-environment"},"Setting up the work environment"),(0,r.kt)("p",null,"Strapi requires Node.js installed on the system. Node.js can be downloaded from the official website. Strapi provides a boilerplate generator ",(0,r.kt)("inlineCode",{parentName:"p"},"create-strapi-app"),", for setting up the application. It can be installed globally using npm using the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i -g create-strapi-app\n")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"create-strapi-app")," is simple just pass the name of the project. ",(0,r.kt)("inlineCode",{parentName:"p"},"--quickstart")," will create a project with a default setting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create-strapi-app my-blog --quickstart\n")),(0,r.kt)("p",null,"An admin user is required to be created before Strapi can be used. Start the server using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run develop"),".It starts the server on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1337"),". Admin user is created using ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1337/admin/auth/register"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590234211220_image.png",alt:"Example for Admin User"})),(0,r.kt)("p",null,"Once the boiler-plate is ready. Admin UI can be used to build database schema for API."),(0,r.kt)("h1",{id:"backend"},"Backend"),(0,r.kt)("p",null,"Strapi provides easy UI for the creation of database schema. For changing configuration, we have to edit out project files. For example, for changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," variable we have to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/environments")," folder."),(0,r.kt)("h2",{id:"creating-database-schema"},"Creating Database Schema"),(0,r.kt)("p",null,"Strapi includes a content-builder plugin which provides a great UI for creating a database schema. The plugin is independent of the database. The same schema can be used in the SQL and NoSQL databases. The demo website would have a Blog Collection type and Comment Collection type. The blog would store most of the content of different articles. Comment collection will store comments on blog and user information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creating a Collection"),"\nWe will start by login into our admin at http://localhost:1337/admin. We now open the Content-Types builder page by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Content-Types Builder")," from the sidebar."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590245355602_image.png",alt:null})),(0,r.kt)("p",null,"Now create a new collection named \u201cBlog\u201d. This would store blogs for the site. It would have the title, image, and content."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590245980107_image.png",alt:null})),(0,r.kt)("p",null,"Now we would create a collection named \u201cComment\u201d. This would store comments for the blog. It would have content, user, blog. ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," field store the link to the blog on which comment was created and user store details about the user who created it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590246246530_image.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590246377435_image.png",alt:null})),(0,r.kt)("p",null,"We have created links from comments, one to user collection, and other to blog collection. Blog collection and user collection don\u2019t have information about the link. Now our backend is all set."),(0,r.kt)("h2",{id:"documentation-plugin"},"Documentation Plugin"),(0,r.kt)("p",null,"We would install documentation-plugin from the \u201cMarketplace\u201d section for easy access to API details. This plugin would create the swagger specification for the API."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590473880995_image.png",alt:null})),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Authentication is a very important aspect of any application. Strapi has JWT based authentication out of the box. A default key is used for signing JWT. Signing key can be changed in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"/extensions/users-permissions/config/jwt.json"),". API for user signup and login is already baked in the platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "jwtSecret": "f1b4e23e-480b-4e58-923e-b759a593c2e0"\n}\n')),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," provider for authentication. This password and email/username are used for authenticating a user. If we open \u201cDocumentation\u201d from the Sidebar, it will provide an option to see the swagger API documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590474793994_image.png",alt:null})),(0,r.kt)("p",null,"We click on \u201cOpen the Documentation\u201d to view swagger API Documentation. If we navigate to \u201cUsersPermissions- User\u201d we can see there are API to create a user and login user."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590475203429_image.png",alt:null})),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"/auth/local")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/auth/local/register"),"."),(0,r.kt)("h2",{id:"setting-up-permission"},"Setting Up Permission"),(0,r.kt)("p",null,"Strapi has two roles by default. These roles are used to control access to content."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Public role is for an unauthenticated user"),(0,r.kt)("li",{parentName:"ol"},"Authenticated is for an authenticated user.")),(0,r.kt)("p",null,"These roles are automatically assigned to a user based on authentication status. We would allow \u201cPublic\u201d users to read blogs and comments and \u201cAuthenticated\u201d users can comment on the blog and edit comments. Roles can be edited in the \u201cRoles and Permission\u201d section."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590485724497_image.png",alt:null})),(0,r.kt)("p",null,"Edit public Roles to allow access to Blogs and Comments"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590486276961_image.png",alt:null})),(0,r.kt)("h2",{id:"adding-comments"},"Adding Comments"),(0,r.kt)("p",null,"Now let us add comments to our demo website. For adding comments a user must be authenticated. We need to control write access to comment collection by customizing controller for \u201cComment\u201d collection. The controller for every collection is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," folder. For changing controller edit file ",(0,r.kt)("inlineCode",{parentName:"p"},"api/comment/controllers/comment.js"),"."),(0,r.kt)("p",null,"We need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"strapi-util"),"s for editing our controller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i strapi-utils\n\n\n// file: api/comment/controllers/comment.js\n\nconst { sanitizeEntity } = require('strapi-utils');\n\nmodule.exports = {\n    // this method is called when api to create comment is called\n    async create(ctx) {\n        // add user from the request and add it to the body of request\n        ctx.request.body.user = ctx.state.user.id;\n        // call the function to creating comment with data\n        let entity = await strapi.services.comment.create(ctx.request.body);\n        // return data for api after removing field which are not exported\n        return sanitizeEntity(entity, { model: strapi.models.comment });\n    },\n    async update(ctx) {\n        // get the id of comment which is updated\n        const { id } = ctx.params;\n        // finding the comment for user and id\n        const [comment] = await strapi.services.comment.find({\n            id: ctx.params.id,\n            'user.id': ctx.state.user.id,\n        });\n        // comment does not exist send error\n        if (!comment) {\n            return ctx.unauthorized(`You can't update this entry`);\n        }\n        // update the comment\n        let entity = await strapi.services.comment.update({ id }, ctx.request.body);\n         // return data for api after removing field which are not exported\n        return sanitizeEntity(entity, { model: strapi.models.comment });\n    },\n    async delete(ctx) {\n        // get the id of comment which is updated\n        const { id } = ctx.params;\n        // finding the comment for user and id\n        const [comment] = await strapi.services.comment.find({\n            id: ctx.params.id,\n            'user.id': ctx.state.user.id,\n        });\n        // comment does not exist send error\n        if (!comment) {\n            return ctx.unauthorized(`You can't update this entry`);\n        }\n        // delete the comment\n        let entity = await strapi.services.comment.delete({ id });\n         // return data for api after removing field which are not exported\n        return sanitizeEntity(entity, { model: strapi.models.comment });\n    },\n};\n")),(0,r.kt)("p",null,"We just add an extra layer over the function provided by strapi, so that we can add user data to the request body, and rest is handled by strapi. Now we need to change the \u201cAuthenticated\u201d user role so that users can create, edit, and delete comments."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590587444113_image.png",alt:null})),(0,r.kt)("p",null,"We give a user permission to create, delete, edit comments."),(0,r.kt)("h1",{id:"frontend"},"Frontend"),(0,r.kt)("p",null,"For the frontend, we will use Gatsbyjs. We would create a new gatsby project using ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby new frontend"),". File structure for our project is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src/\n\u251c\u2500\u2500 components\n\u2502   \u251c\u2500\u2500 card.js\n\u2502   \u2514\u2500\u2500 dialog.js\n\u251c\u2500\u2500 images\n\u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 404.js\n    \u251c\u2500\u2500 blog.js\n    \u2514\u2500\u2500 index.js\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Different Compoments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"card.js contains a simple card component that displays information provided to it as props."),(0,r.kt)("li",{parentName:"ul"},"dialog.js contains a dialog for sign in and signup."),(0,r.kt)("li",{parentName:"ul"},"blog.js is used to display blogs and comments."),(0,r.kt)("li",{parentName:"ul"},"index.js is the homepage, it display list of blogs"),(0,r.kt)("li",{parentName:"ul"},"404.js shows URL not found.")),(0,r.kt)("h2",{id:"homepage"},"Homepage"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590834989946_image.png",alt:null})),(0,r.kt)("p",null,"We make a GET request to API ",(0,r.kt)("inlineCode",{parentName:"p"},"/blogs")," to fetch all the blogs. Then it maps over a list of blogs and displays Card component for each blog. It also contains code for displaying login/register dialog. When the user clicks on a Card it navigates them to ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import React, { useState } from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Grid from \'@material-ui/core/Grid\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Card from "../components/card";\nimport Dialog from "../components/dialog"\nimport { Button } from \'@material-ui/core\';\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    flexGrow: 1,\n    textAlign: "center"\n  },\n  paper: {\n    height: 500,\n    width: 400,\n  },\n  control: {\n    padding: theme.spacing(2),\n  },\n}));\nexport default function () {\n  const classes = useStyles();\n  const [blogs, setBlogs] = useState([])\n  const [open, setOpen] = useState(false)\n  const [login, setLogin] = useState(false)\n  // fetch all blogs\n  React.useEffect(() => {\n    fetch("http://localhost:1337/blogs").then(res => res.json()).then(val => setBlogs(val))\n  }, [])\n  return (\n    <>\n    {/*dialog for authentication */}\n      <Dialog open={open} setOpen={setOpen} login={login} />\n      <Grid container className={classes.root} spacing={2}>\n        <Grid item xs={12}>\n          <Grid container justify="center">\n            <Grid item xs={10}>\n              <Typography variant="h3" component="h2" gutterBottom gutterLeft>Blogs</Typography>\n            </Grid>\n            {/*check if token is present or not */}\n            {\n              !localStorage.getItem("token") ? [<Grid item xs={1}>\n                <Button onClick={() => { setOpen(true); setLogin(true) }}>Login</Button>\n              </Grid>,\n              <Grid item xs={1}>\n                <Button onClick={() => { setOpen(true); setLogin(false) }}> Register</Button>\n              </Grid>] : ""\n            }\n          </Grid>\n        </Grid>\n        <Grid item xs={12}>\n          <Grid container justify="center" spacing={10}>\n            {/*map through list of blog and create list of cards */}\n            {blogs.map((value) => (\n              <Grid key={value} item>\n                <Card value={value} />\n              </Grid>\n            ))}\n          </Grid>\n        </Grid>\n      </Grid>\n    </>\n  );\n}\n')),(0,r.kt)("p",null,"Card Component"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590834819604_image.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Card from '@material-ui/core/Card';\nimport CardHeader from '@material-ui/core/CardHeader';\nimport CardMedia from '@material-ui/core/CardMedia';\nimport CardContent from '@material-ui/core/CardContent';\nimport CardActions from '@material-ui/core/CardActions';\nimport Collapse from '@material-ui/core/Collapse';\nimport Typography from '@material-ui/core/Typography';\nimport { red } from '@material-ui/core/colors';\nimport { Link } from 'gatsby';\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    maxWidth: 345,\n  },\n  media: {\n    height: 0,\n    paddingTop: '56.25%', // 16:9\n  },\n  expand: {\n    transform: 'rotate(0deg)',\n    marginLeft: 'auto',\n    transition: theme.transitions.create('transform', {\n      duration: theme.transitions.duration.shortest,\n    }),\n  },\n  expandOpen: {\n    transform: 'rotate(180deg)',\n  },\n  avatar: {\n    backgroundColor: red[500],\n  },\n}));\nexport default function NewCard({ value }) {\n  const classes = useStyles();\n  return (\n    <Link to={`/blog`} state={{ value }}>\n      <Card className={classes.root}>\n        <CardHeader\n          subheader={`Published On ${new Date(value.created_at).toLocaleDateString(\"in\")}`}\n        />\n        <CardMedia\n          className={classes.media}\n          image={\"http://localhost:1337\" + value.image.url}\n        />\n        <CardContent>\n          <Typography variant=\"body2\" color=\"textSecondary\" component=\"p\">\n            {value.title}\n          </Typography>\n        </CardContent>\n      </Card></Link>\n  );\n}\n")),(0,r.kt)("p",null,"Dialog Component"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590834887038_image.png",alt:null})),(0,r.kt)("p",null,"We make a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/auth/local/register")," for user signup with a username, email, and password. When a register is successful, a JWT token is returned which is saved in local storage and can be used later. For log in we make a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/auth/local")," with two fields ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," can be email or username."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import React, { useState } from \'react\';\nimport Button from \'@material-ui/core/Button\';\nimport TextField from \'@material-ui/core/TextField\';\nimport Dialog from \'@material-ui/core/Dialog\';\nimport DialogActions from \'@material-ui/core/DialogActions\';\nimport DialogContent from \'@material-ui/core/DialogContent\';\nimport DialogContentText from \'@material-ui/core/DialogContentText\';\nimport DialogTitle from \'@material-ui/core/DialogTitle\';\nexport default function FormDialog({ open, setOpen, login }) {\n    const [pass, setPass] = useState("")\n    const [email, setEmail] = useState("")\n    const [user, setUser] = useState("")\n    const handleSubmit = () => {\n        if (!login)\n            fetch("http://localhost:1337/auth/local/register", {\n                method: "post",\n                headers: {\n                    "content-type": "application/json"\n                },\n                body: JSON.stringify({\n                    password: pass,\n                    email,\n                    username: user\n                })\n            }).then((res) => res.json())\n                .then(res => localStorage.setItem("token", res.jwt)).finally(() => setOpen(false))\n        else\n            fetch("http://localhost:1337/auth/local", {\n                method: "post",\n                headers: {\n                    "content-type": "application/json"\n                },\n                body: JSON.stringify({\n                    password: pass,\n                    identifier: user || email\n                })\n            }).then((res) => res.json())\n                .then(res => localStorage.setItem("token", res.jwt)).finally(() => setOpen(false))\n    };\n    const handleClose = () => {\n        setOpen(false);\n    };\n    return (\n        <div>\n            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">\n                <DialogTitle id="form-dialog-title">{login ? "Login" : "Register"}</DialogTitle>\n                <DialogContent>\n                    <DialogContentText>\n                        Please provide details\n          </DialogContentText>\n                    <TextField\n                        autoFocus\n                        margin="dense"\n                        id="email"\n                        label="Email Address"\n                        type="email"\n                        fullWidth\n                        value={email}\n                        onChange={(e) => { setEmail(e.target.value) }}\n                    />\n                    <TextField\n                        autoFocus\n                        margin="dense"\n                        id="username"\n                        label="Username"\n                        type="email"\n                        fullWidth\n                        value={user}\n                        onChange={(e) => { setUser(e.target.value) }}\n                    />\n                    <TextField\n                        autoFocus\n                        margin="dense"\n                        id="password"\n                        label="Password"\n                        type="password"\n                        fullWidth\n                        value={pass}\n                        onChange={(e) => { setPass(e.target.value) }}\n                    />\n                </DialogContent>\n                <DialogActions>\n                    <Button onClick={handleClose} color="primary">\n                        Cancel\n          </Button>\n                    <Button onClick={handleSubmit} color="primary">\n                        Submit\n          </Button>\n                </DialogActions>\n            </Dialog>\n        </div>\n    );\n}\n')),(0,r.kt)("h2",{id:"blog-page"},"Blog Page"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_CC88355492B2A98EAA40B097B1643DA8AE3D35CE509F7D881364ACA0FE320D6E_1590834917875_image.png",alt:null})),(0,r.kt)("p",null,"We will take the details of the blog from the location prop passed to the page. We will fetch comments for the blog using a GET request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/comments?blog={{blog-id}}")," ",(0,r.kt)("inlineCode",{parentName:"p"},"blog-id")," is the id of the current blog. We make a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/comments")," with JWT token in the header. This token is saved in the local storage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import React, { useState, useEffect } from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Grid from \'@material-ui/core/Grid\';\nimport Typography from \'@material-ui/core/Typography\';\nimport List from \'@material-ui/core/List\';\nimport ListItem from \'@material-ui/core/ListItem\';\nimport ListItemIcon from \'@material-ui/core/ListItemIcon\';\nimport ListItemText from \'@material-ui/core/ListItemText\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport { TextareaAutosize } from \'@material-ui/core\';\nimport Button from "@material-ui/core/Button"\nconst useStyles = makeStyles((theme) => ({\n    root: {\n        flexGrow: 1,\n        textAlign: "center"\n    },\n    paper: {\n        height: 500,\n        width: 400,\n    },\n    control: {\n        padding: theme.spacing(2),\n    },\n    content: {\n        margin: "100px"\n    }\n}));\nexport default function ({ location }) {\n    const classes = useStyles();\n    const [comments, setComments] = useState([])\n    const [content, setContent] = useState("")\n    useEffect(() => {\n        fetch(`http://localhost:1337/comments?blog=${location.state.value.id}`).then(res => res.json()).then(val => setComments(val))\n    }, [])\n    const submitComment = () => {\n        fetch("http://localhost:1337/comments", {\n            method: "post",\n            headers: {\n                "content-type": "application/json",\n                authorization: `Bearer ${localStorage.getItem("token")}`\n            },\n            body: JSON.stringify({\n                content,\n                blog: location.state.value.id\n            })\n        }).then(() => fetch(`http://localhost:1337/comments?blog=${location.state.value.id}`).then(res => res.json()).then(val => setComments(val)))\n    }\n    return (\n        <>\n            <Grid container className={classes.root} spacing={2}>\n                <Grid item xs={12}>\n                    <Grid container justify="center">\n                        <Grid item xs={10}>\n                            <Typography variant="h3" component="h2" gutterBottom gutterLeft>{location.state.value.title}</Typography>\n                        </Grid>\n                    </Grid>\n                </Grid>\n                <Grid container justify="center">\n                    <img src={"http://localhost:1337" + location.state.value.image.url}></img>\n                </Grid>\n                <Grid item xs={12} className={classes.content}>\n                    <Grid container justify="center" spacing={10}>\n                        {location.state.value.content}\n                    </Grid>\n                </Grid>\n                <Typography variant="h4" component="h2" gutterBottom gutterLeft>Comments</Typography>\n                <Grid item xs={12}><TextareaAutosize minLength={10} rowsMin={10} style={{ width: "100%" }} value={content} onChange={(e) => setContent(e.target.value)} /></Grid>\n                <Grid item xs={12}><Button onClick={submitComment}>Submit comment</Button></Grid>\n                <Grid item xs={12}>\n                    <Grid container justify="left">\n                        <List>\n                            {\n                                comments.map((val) => <ListItem>\n                                    <ListItemIcon><Avatar>{val.user.username[0]}</Avatar></ListItemIcon>\n                                    <ListItemText primary={`${val.user.username} said  `} />\n                                    <ListItemText secondary={": " + val.content} />\n                                </ListItem>)\n                            }\n                        </List>\n                    </Grid>\n                </Grid>\n            </Grid>\n        </>\n    );\n}\n')),(0,r.kt)("h1",{id:"database"},"Database"),(0,r.kt)("p",null,"Strapi support both NoSQL and SQL database. Changing the database is as simple as changing the env variable in the configuration folder. By default, Strapi uses SQLite which is good for local testing but in production one should use a production-ready database like PostgresSQL or MySQL. We will use PostgreSQL. For changing the database we will edit ",(0,r.kt)("inlineCode",{parentName:"p"},"config/environments/production/database.json")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "defaultConnection": "default",\n  "connections": {\n    "default": {\n      "connector": "bookshelf",\n      "settings": {\n        "client": "postgres",\n        "host": "${process.env.DATABASE_HOST }",\n        "port": "${process.env.DATABASE_PORT }",\n        "database": "${process.env.DATABASE_NAME }",\n        "username": "${process.env.DATABASE_USERNAME }",\n        "password": "${process.env.DATABASE_PASSWORD }"\n      },\n      "options": {}\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Now it will pick database credentials from the environment variable in production."),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We have gone through some of basic of Strapi. Strapi is great for creating a backend API. It is very customizable and supports a wide array of integration. Strapi can be used with Nuxtjs, Reactjs, Angular any frontend framework. We learned how to create database schema with relations, authentication, customizing controllers, and filtering data."))}d.isMDXComponent=!0}}]);