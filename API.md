<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="chords"><span class="type-signature"></span>chords<span class="signature">(name, tonic)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a chord from a name and a tonic</p>
<p>This function always return an array, even if its empty. This function is
currified so it can be partially applied (see examples)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>name</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the chord name</p></td>
</tr>
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the tonic of the chord (or false to get intervals)</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.chords/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.chords/blob/master/index.js#L23">lineno 23</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>a list of notes or intervals (or empty array if chord not found)</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>chords('7b5', 'C') // => ['C', 'E', 'Gb', 'Bb']
var M9 = chords('M9')
M9('C2') // => [ 'C2', 'E2', 'G2', 'B2', 'D3' ]</code></pre>
</dd>
<dt>
<h4 class="name" id="find"><span class="type-signature"></span>find<span class="signature">(notes)</span><span class="type-signature"> &rarr; {String}</span></h4>
</dt>
<dd>
<div class="description">
<p>Find a chord name by notes</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>notes</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the chord notes</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.chords/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.chords/blob/master/index.js#L51">lineno 51</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the chord name</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="names"><span class="type-signature"></span>names<span class="signature">(aliases)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get all available names</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>aliases</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>if true return aliases names</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.chords/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.chords/blob/master/index.js#L30">lineno 30</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array of chord names</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->