import{_ as s,c as a,o as l,d as n}from"./app.5dcb9a9b.js";const C=JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[{"level":2,"title":"All available interfaces","slug":"all-available-interfaces","link":"#all-available-interfaces","children":[]}],"relativePath":"guide/examples.md","lastUpdated":1675937533000}'),e={name:"guide/examples.md"},p=n(`<h1 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h1><h2 id="all-available-interfaces" tabindex="-1">All available interfaces <a class="header-anchor" href="#all-available-interfaces" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">calendrier</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:calendar</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;gregory&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">new Date()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:week-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;saturday&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">calendar</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">date</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {{ date }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">day</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">date</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {{ date.getDate() }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">calendrier</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,3),o=[p];function t(c,r,D,F,y,i){return l(),a("div",null,o)}const A=s(e,[["render",t]]);export{C as __pageData,A as default};
