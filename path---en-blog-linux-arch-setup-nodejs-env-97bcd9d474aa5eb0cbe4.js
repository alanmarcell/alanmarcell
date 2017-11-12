webpackJsonp([0xab4a3deb9b5e],{"./node_modules/json-loader/index.js!./.cache/json/en-blog-linux-arch-setup-nodejs-env.json":function(n,e){n.exports={data:{markdownRemark:{fileAbsolutePath:"/home/angeloocana/dev/angeloocana/src/pages/blog/linux/arch/setup-nodejs-env.en.md",html:'<h2>Install git</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S <span class="token function">git</span>\n</code></pre>\n      </div>\n<h2>Install Nodejs</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S nodejs\n</code></pre>\n      </div>\n<h2>Install NPM</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S <span class="token function">npm</span>\n</code></pre>\n      </div>\n<h3>Fix global permissions error</h3>\n<p><a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions">https://docs.npmjs.com/getting-started/fixing-npm-permissions</a></p>\n<p>Make a directory for global installations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">mkdir</span> ~/.npm-global\n</code></pre>\n      </div>\n<p>Configure npm to use the new directory path:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">npm</span> config <span class="token keyword">set</span> prefix <span class="token string">\'~/.npm-global\'</span>\n</code></pre>\n      </div>\n<p>Open or create a ~/.profile file and add this line:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">export</span> PATH<span class="token operator">=</span>~/.npm-global/bin:<span class="token variable">$PATH</span>\n</code></pre>\n      </div>\n<p>Back on the command line, update your system variables:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">source</span> ~/.profile\n</code></pre>\n      </div>\n<h2>Install vs code</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    yaourt -S visual-studio-code\n</code></pre>\n      </div>\n<h2>Install Python for Gatsby</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S python2\n</code></pre>\n      </div>',excerpt:"Install git Install Nodejs Install NPM Fix global permissions error https://docs.npmjs.com/getting-started/fixing-npm-permissions Make a...",fields:{tagSlugs:[{tag:"Linux",link:"/en/tags/linux/"},{tag:"Arch",link:"/en/tags/arch/"},{tag:"NodeJs",link:"/en/tags/node-js/"},{tag:"Dev env",link:"/en/tags/dev-env/"},{tag:"Npm",link:"/en/tags/npm/"},{tag:"Git",link:"/en/tags/git/"},{tag:"Vs code",link:"/en/tags/vs-code/"}],slug:"/en/blog/linux/arch/setup-nodejs-env/",readNextPosts:[{excerpt:"Tests, correct pronunciation, tips and more. Learn and contribute to this collection of free content to learn English. (New links weekly...",frontmatter:{title:"Learn English links",date:"2017-10-16"},fields:{slug:"/en/blog/languages/english/learn-english-links/",langKey:"en"}},{excerpt:"If you want to learn this amazing language, here you can find my link collection of free content. Links Learn French with Vincent\n https...",frontmatter:{title:"Learn French links",date:"2017-08-03"},fields:{slug:"/en/blog/languages/french/learn-french-links/",langKey:"en"}},{excerpt:"",frontmatter:{title:"Functional Programming Examples",date:"2017-06-23"},fields:{slug:"/en/blog/functional-programming/examples/",langKey:"en"}}]},frontmatter:{youtubeId:null,title:"Setup dev env Arch linux",tags:["Linux","Arch","NodeJs","Dev env","Npm","Git","Vs code"],date:"2017-07-30",structuredData:null}}},pathContext:{path:"/en/blog/linux/arch/setup-nodejs-env/",langKey:"en"}}}});
//# sourceMappingURL=path---en-blog-linux-arch-setup-nodejs-env-97bcd9d474aa5eb0cbe4.js.map