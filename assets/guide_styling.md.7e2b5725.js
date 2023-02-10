import{_ as s,c as a,o as n,d as l}from"./app.5dcb9a9b.js";const d=JSON.parse('{"title":"Styling","description":"","frontmatter":{},"headers":[],"relativePath":"guide/styling.md","lastUpdated":1676069072000}'),p={name:"guide/styling.md"},e=l(`<h1 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-hidden="true">#</a></h1><p>Using <a href="https://getbem.com/introduction/" target="_blank" rel="noreferrer">BEM CSS methodology</a>, you can easily apply your own CSS to all of the calendar component sub parts.</p><p>If you&#39;re using SASS or SCSS use the following code snippet to customize the calendar.</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Calendrier</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">__calendar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">__days</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">__day</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#A6ACCD;">--weekend </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#A6ACCD;">--today </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,4),o=[e];function t(c,r,i,y,D,C){return n(),a("div",null,o)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
