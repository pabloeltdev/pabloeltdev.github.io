import{V as R,i as S,O as z,s as f,c as B,a as w,b as j,g as F,d as b,e as u,r as G,f as J,h as K,j as V,k as D,l as _,m as O,n as E,o as x,p as W,q as Q,t as C,A as X,u as I,v as Y,w as Z,x as $,y as N}from"./index.a1ab4247.js";import{E as ii,l as ti}from"./index.19c07bad.js";import"./entry.fa10d76e.js";import"./swiper-vue.799c8af8.js";import"./Icon.c44fc0a7.js";import"./index.b8fe2cb5.js";import"./ContentRenderer.8bfe2b63.js";import"./ContentRendererMarkdown.vue.4bf820b7.js";import"./index.b0fe9fac.js";import"./preview.9ca7dcfa.js";import"./query.046ea17d.js";class ei{constructor(){this.radius=0,this.mass=0}load(i){i&&(i.mass!==void 0&&(this.mass=i.mass),i.radius!==void 0&&(this.radius=i.radius))}}class si extends R{constructor(){super(),this.density=5,this.value=50,this.limit=new ei}load(i){i&&(super.load(i),i.density!==void 0&&(this.density=i.density),S(i.limit)?this.limit.radius=i.limit:this.limit.load(i.limit))}}class M{constructor(){this.color=new z,this.color.value="#000000",this.draggable=!1,this.opacity=1,this.destroy=!0,this.orbits=!1,this.size=new si}load(i){i!==void 0&&(i.color!==void 0&&(this.color=z.create(this.color,i.color)),i.draggable!==void 0&&(this.draggable=i.draggable),this.name=i.name,i.opacity!==void 0&&(this.opacity=i.opacity),i.position!==void 0&&(this.position={},i.position.x!==void 0&&(this.position.x=f(i.position.x)),i.position.y!==void 0&&(this.position.y=f(i.position.y))),i.size!==void 0&&this.size.load(i.size),i.destroy!==void 0&&(this.destroy=i.destroy),i.orbits!==void 0&&(this.orbits=i.orbits))}}class ni{constructor(i,t,e,n){var a;this.absorbers=i,this.container=t,this._calcPosition=()=>{const o=B({size:this.container.canvas.size,position:this.options.position});return w.create(o.x,o.y)},this._updateParticlePosition=(o,h)=>{if(o.destroyed)return;const l=this.container,c=l.canvas.size;if(o.needsNewPosition){const d=j({size:c});o.position.setTo(d),o.velocity.setTo(o.initialVelocity),o.absorberOrbit=void 0,o.needsNewPosition=!1}if(this.options.orbits){if(o.absorberOrbit===void 0&&(o.absorberOrbit=w.create(0,0),o.absorberOrbit.length=F(o.getPosition(),this.position),o.absorberOrbit.angle=b()*Math.PI*2),o.absorberOrbit.length<=this.size&&!this.options.destroy){const g=Math.min(c.width,c.height);o.absorberOrbit.length=g*(1+(b()*.2-.1))}o.absorberOrbitDirection===void 0&&(o.absorberOrbitDirection=o.velocity.x>=0?"clockwise":"counter-clockwise");const d=o.absorberOrbit.length,p=o.absorberOrbit.angle,m=o.absorberOrbitDirection;o.velocity.setTo(w.origin);const y={x:m==="clockwise"?Math.cos:Math.sin,y:m==="clockwise"?Math.sin:Math.cos};o.position.x=this.position.x+d*y.x(p),o.position.y=this.position.y+d*y.y(p),o.absorberOrbit.length-=h.length,o.absorberOrbit.angle+=(o.retina.moveSpeed??0)*l.retina.pixelRatio/100*l.retina.reduceFactor}else{const d=w.origin;d.length=h.length,d.angle=h.angle,o.velocity.addTo(d)}},this.initialPosition=n?w.create(n.x,n.y):void 0,e instanceof M?this.options=e:(this.options=new M,this.options.load(e)),this.dragging=!1,this.name=this.options.name,this.opacity=this.options.opacity,this.size=u(this.options.size.value)*t.retina.pixelRatio,this.mass=this.size*this.options.size.density*t.retina.reduceFactor;const r=this.options.size.limit;this.limit={radius:r.radius*t.retina.pixelRatio*t.retina.reduceFactor,mass:r.mass},this.color=G(this.options.color)??{b:0,g:0,r:0},this.position=((a=this.initialPosition)==null?void 0:a.copy())??this._calcPosition()}attract(i){const t=this.container,e=this.options;if(e.draggable){const l=t.interactivity.mouse;l.clicking&&l.downPosition?F(this.position,l.downPosition)<=this.size&&(this.dragging=!0):this.dragging=!1,this.dragging&&l.position&&(this.position.x=l.position.x,this.position.y=l.position.y)}const n=i.getPosition(),{dx:r,dy:a,distance:o}=J(this.position,n),h=w.create(r,a);if(h.length=this.mass/Math.pow(o,2)*t.retina.reduceFactor,o<this.size+i.getRadius()){const l=i.getRadius()*.033*t.retina.pixelRatio;this.size>i.getRadius()&&o<this.size-i.getRadius()||i.absorberOrbit!==void 0&&i.absorberOrbit.length<0?e.destroy?i.destroy():(i.needsNewPosition=!0,this._updateParticlePosition(i,h)):(e.destroy&&(i.size.value-=l),this._updateParticlePosition(i,h)),(this.limit.radius<=0||this.size<this.limit.radius)&&(this.size+=l),(this.limit.mass<=0||this.mass<this.limit.mass)&&(this.mass+=l*this.options.size.density*t.retina.reduceFactor)}else this._updateParticlePosition(i,h)}draw(i){i.translate(this.position.x,this.position.y),i.beginPath(),i.arc(0,0,this.size,0,Math.PI*2,!1),i.closePath(),i.fillStyle=K(this.color,this.opacity),i.fill()}resize(){const i=this.initialPosition;this.position=i&&V(i,this.container.canvas.size,w.origin)?i:this._calcPosition()}}class oi{constructor(i){this.container=i,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],i.getAbsorber=t=>t===void 0||S(t)?this.array[t||0]:this.array.find(e=>e.name===t),i.addAbsorber=(t,e)=>this.addAbsorber(t,e)}addAbsorber(i,t){const e=new ni(this,this.container,i,t);return this.array.push(e),e}draw(i){for(const t of this.array)t.draw(i)}handleClickMode(i){const t=this.absorbers,e=this.interactivityAbsorbers;if(i==="absorber"){const n=D(e),r=n??D(t),a=this.container.interactivity.mouse.clickPosition;this.addAbsorber(r,a)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers,_(this.absorbers,i=>{this.addAbsorber(i)})}particleUpdate(i){for(const t of this.array)if(t.attract(i),i.destroyed)break}removeAbsorber(i){const t=this.array.indexOf(i);t>=0&&this.array.splice(t,1)}resize(){for(const i of this.array)i.resize()}stop(){this.array=[]}}class ri{constructor(){this.id="absorbers"}getPlugin(i){return new oi(i)}loadOptions(i,t){var e,n;!this.needsPlugin(i)&&!this.needsPlugin(t)||(t!=null&&t.absorbers&&(i.absorbers=_(t.absorbers,r=>{const a=new M;return a.load(r),a})),i.interactivity.modes.absorbers=_((n=(e=t==null?void 0:t.interactivity)==null?void 0:e.modes)==null?void 0:n.absorbers,r=>{const a=new M;return a.load(r),a}))}needsPlugin(i){var e,n,r;if(!i)return!1;const t=i.absorbers;return O(t)?!!t.length:t?!0:!!((r=(n=(e=i.interactivity)==null?void 0:e.events)==null?void 0:n.onClick)!=null&&r.mode&&E("absorber",i.interactivity.events.onClick.mode))}}async function ai(s,i=!0){await s.addPlugin(new ri,i)}class li{load(i){i&&(i.bottom!==void 0&&(this.bottom=f(i.bottom)),i.left!==void 0&&(this.left=f(i.left)),i.right!==void 0&&(this.right=f(i.right)),i.top!==void 0&&(this.top=f(i.top)))}}class hi extends R{constructor(){super(),this.value=3}}class di extends R{constructor(){super(),this.value={min:4,max:9}}}class ci{constructor(){this.count=1,this.factor=new hi,this.rate=new di,this.sizeOffset=!0}load(i){i&&(i.color!==void 0&&(this.color=z.create(this.color,i.color)),i.count!==void 0&&(this.count=i.count),this.factor.load(i.factor),this.rate.load(i.rate),this.particles=_(i.particles,t=>x({},t)),i.sizeOffset!==void 0&&(this.sizeOffset=i.sizeOffset),i.colorOffset&&(this.colorOffset=this.colorOffset??{},i.colorOffset.h!==void 0&&(this.colorOffset.h=i.colorOffset.h),i.colorOffset.s!==void 0&&(this.colorOffset.s=i.colorOffset.s),i.colorOffset.l!==void 0&&(this.colorOffset.l=i.colorOffset.l)))}}class ui{constructor(){this.bounds=new li,this.mode="none",this.split=new ci}load(i){i&&(i.mode&&(this.mode=i.mode),i.bounds&&this.bounds.load(i.bounds),this.split.load(i.split))}}function fi(s,i,t,e){const n=t.options.destroy;if(!n)return;const r=n.split,a=Q(s,i,t.options),o=W(r.factor),h=t.getFillColor();r.color?a.color.load(r.color):r.colorOffset&&h?a.color.load({value:{hsl:{h:h.h+u(r.colorOffset.h??0),s:h.s+u(r.colorOffset.s??0),l:h.l+u(r.colorOffset.l??0)}}}):a.color.load({value:{hsl:t.getFillColor()}}),a.move.load({center:{x:t.position.x,y:t.position.y,mode:"precise"}}),S(a.size.value)?a.size.value/=o:(a.size.value.min/=o,a.size.value.max/=o),a.load(e);const l=r.sizeOffset?f(-t.size.value,t.size.value):0,c={x:t.position.x+C(l),y:t.position.y+C(l)};return i.particles.addParticle(c,a,t.group,d=>d.size.value<.5?!1:(d.velocity.length=C(f(t.velocity.length,d.velocity.length)),d.splitCount=(t.splitCount??0)+1,d.unbreakable=!0,setTimeout(()=>{d.unbreakable=!1},500),!0))}function pi(s,i,t){const e=t.options.destroy;if(!e)return;const n=e.split;if(n.count>=0&&(t.splitCount===void 0||t.splitCount++>n.count))return;const r=W(n.rate),a=D(n.particles);for(let o=0;o<r;o++)fi(s,i,t,a)}class mi{constructor(i,t){this.engine=i,this.container=t}init(i){const t=this.container,e=i.options,n=e.destroy;if(!n)return;i.splitCount=0;const r=n.bounds;i.destroyBounds||(i.destroyBounds={});const{bottom:a,left:o,right:h,top:l}=r,{destroyBounds:c}=i,d=t.canvas.size;a&&(c.bottom=u(a)*d.height/100),o&&(c.left=u(o)*d.width/100),h&&(c.right=u(h)*d.width/100),l&&(c.top=u(l)*d.height/100)}isEnabled(i){return!i.destroyed}loadOptions(i,...t){i.destroy||(i.destroy=new ui);for(const e of t)i.destroy.load(e==null?void 0:e.destroy)}particleDestroyed(i,t){if(t)return;const e=i.options.destroy;e&&e.mode==="split"&&pi(this.engine,this.container,i)}update(i){if(!this.isEnabled(i))return;const t=i.getPosition(),e=i.destroyBounds;e&&(e.bottom!==void 0&&t.y>=e.bottom||e.left!==void 0&&t.x<=e.left||e.right!==void 0&&t.x>=e.right||e.top!==void 0&&t.y<=e.top)&&i.destroy()}}async function yi(s,i=!0){await s.addParticleUpdater("destroy",t=>new mi(s,t),i)}class bi{randomPosition(i,t,e){const n=(d,p)=>{const m=b()/4,y=Math.atan(p/d*Math.tan(2*Math.PI*m)),g=b();return g<.25?y:g<.5?Math.PI-y:g<.75?Math.PI+y:-y},r=(d,p,m)=>d*p/Math.sqrt((p*Math.cos(m))**2+(d*Math.sin(m))**2),[a,o]=[t.width/2,t.height/2],h=n(a,o),l=r(a,o,h),c=e?l*Math.sqrt(b()):l;return{x:i.x+c*Math.cos(h),y:i.y+c*Math.sin(h)}}}class gi{constructor(){this.wait=!1}load(i){i&&(i.count!==void 0&&(this.count=i.count),i.delay!==void 0&&(this.delay=f(i.delay)),i.duration!==void 0&&(this.duration=f(i.duration)),i.wait!==void 0&&(this.wait=i.wait))}}class wi{constructor(){this.quantity=1,this.delay=.1}load(i){i!==void 0&&(i.quantity!==void 0&&(this.quantity=f(i.quantity)),i.delay!==void 0&&(this.delay=f(i.delay)))}}class H{constructor(){this.mode="percent",this.height=0,this.width=0}load(i){i!==void 0&&(i.mode!==void 0&&(this.mode=i.mode),i.height!==void 0&&(this.height=i.height),i.width!==void 0&&(this.width=i.width))}}class v{constructor(){this.autoPlay=!0,this.fill=!0,this.life=new gi,this.rate=new wi,this.shape="square",this.startCount=0}load(i){i&&(i.autoPlay!==void 0&&(this.autoPlay=i.autoPlay),i.size!==void 0&&(this.size||(this.size=new H),this.size.load(i.size)),i.direction!==void 0&&(this.direction=i.direction),this.domId=i.domId,i.fill!==void 0&&(this.fill=i.fill),this.life.load(i.life),this.name=i.name,this.particles=_(i.particles,t=>x({},t)),this.rate.load(i.rate),i.shape!==void 0&&(this.shape=i.shape),i.position!==void 0&&(this.position={},i.position.x!==void 0&&(this.position.x=f(i.position.x)),i.position.y!==void 0&&(this.position.y=f(i.position.y))),i.spawnColor!==void 0&&(this.spawnColor===void 0&&(this.spawnColor=new X),this.spawnColor.load(i.spawnColor)),i.startCount!==void 0&&(this.startCount=i.startCount))}}class vi{constructor(i,t,e,n,r){var o,h;this.emitters=t,this.container=e,this._calcPosition=()=>B({size:this.container.canvas.size,position:this.options.position}),this._destroy=()=>{this.emitters.removeEmitter(this),this._engine.dispatchEvent("emitterDestroyed",{container:this.container,data:{emitter:this}})},this._emit=()=>{if(this._paused)return;const l=u(this.options.rate.quantity);this._emitParticles(l)},this._emitParticles=l=>{var m,y;const c=this.getPosition(),d=this.getSize(),p=D(this._particlesOptions);for(let g=0;g<l;g++){const P=x({},p);if(this.spawnColor){const k=(m=this.options.spawnColor)==null?void 0:m.animation;k&&(this.spawnColor.h=this._setColorAnimation(k.h,this.spawnColor.h,360),this.spawnColor.s=this._setColorAnimation(k.s,this.spawnColor.s,100),this.spawnColor.l=this._setColorAnimation(k.l,this.spawnColor.l,100)),P.color?P.color.value=this.spawnColor:P.color={value:this.spawnColor}}if(!c)return;const L=((y=this._shape)==null?void 0:y.randomPosition(c,d,this.fill))??c;this.container.particles.addParticle(L,P)}},this._prepareToDie=()=>{var c;if(this._paused)return;const l=((c=this.options.life)==null?void 0:c.duration)!==void 0?u(this.options.life.duration):void 0;this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal)&&l!==void 0&&l>0&&(this._duration=l*1e3)},this._setColorAnimation=(l,c,d)=>{const p=this.container;if(!l.enable)return c;const m=C(l.offset),y=u(this.options.rate.delay),g=1e3*y/p.retina.reduceFactor,P=u(l.speed??0);return(c+P*p.fpsLimit/g+m*3.6)%d},this._engine=i,this._currentDuration=0,this._currentEmitDelay=0,this._currentSpawnDelay=0,this._initialPosition=r,n instanceof v?this.options=n:(this.options=new v,this.options.load(n)),this._spawnDelay=u(this.options.life.delay??0)*1e3/this.container.retina.reduceFactor,this.position=this._initialPosition??this._calcPosition(),this.name=this.options.name,this._shape=(o=this._engine.emitterShapeManager)==null?void 0:o.getShape(this.options.shape),this.fill=this.options.fill,this._firstSpawn=!this.options.life.wait,this._startParticlesAdded=!1;let a=x({},this.options.particles);a??(a={}),a.move??(a.move={}),(h=a.move).direction??(h.direction=this.options.direction),this.options.spawnColor&&(this.spawnColor=I(this.options.spawnColor)),this._paused=!this.options.autoPlay,this._particlesOptions=a,this.size=this.options.size??(()=>{const l=new H;return l.load({height:0,mode:"percent",width:0}),l})(),this._lifeCount=this.options.life.count??-1,this._immortal=this._lifeCount<=0,this._engine.dispatchEvent("emitterCreated",{container:e,data:{emitter:this}}),this.play()}externalPause(){this._paused=!0,this.pause()}externalPlay(){this._paused=!1,this.play()}getPosition(){if(this.options.domId){const i=this.container,t=document.getElementById(this.options.domId);if(t){const e=t.getBoundingClientRect();return{x:(e.x+e.width/2)*i.retina.pixelRatio,y:(e.y+e.height/2)*i.retina.pixelRatio}}}return this.position}getSize(){const i=this.container;if(this.options.domId){const t=document.getElementById(this.options.domId);if(t){const e=t.getBoundingClientRect();return{width:e.width*i.retina.pixelRatio,height:e.height*i.retina.pixelRatio}}}return Y(this.size,i.canvas.size)}pause(){this._paused||delete this._emitDelay}play(){if(!this._paused&&this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal||!this.options.life.count)&&(this._firstSpawn||this._currentSpawnDelay>=(this._spawnDelay??0))){if(this._emitDelay===void 0){const i=u(this.options.rate.delay);this._emitDelay=1e3*i/this.container.retina.reduceFactor}(this._lifeCount>0||this._immortal)&&this._prepareToDie()}}resize(){const i=this._initialPosition;this.position=i&&V(i,this.container.canvas.size,w.origin)?i:this._calcPosition()}update(i){this._paused||(this._firstSpawn&&(this._firstSpawn=!1,this._currentSpawnDelay=this._spawnDelay??0,this._currentEmitDelay=this._emitDelay??0),this._startParticlesAdded||(this._startParticlesAdded=!0,this._emitParticles(this.options.startCount)),this._duration!==void 0&&(this._currentDuration+=i.value,this._currentDuration>=this._duration&&(this.pause(),this._spawnDelay!==void 0&&delete this._spawnDelay,this._immortal||this._lifeCount--,this._lifeCount>0||this._immortal?(this.position=this._calcPosition(),this._spawnDelay=u(this.options.life.delay??0)*1e3/this.container.retina.reduceFactor):this._destroy(),this._currentDuration-=this._duration,delete this._duration)),this._spawnDelay!==void 0&&(this._currentSpawnDelay+=i.value,this._currentSpawnDelay>=this._spawnDelay&&(this._engine.dispatchEvent("emitterPlay",{container:this.container}),this.play(),this._currentSpawnDelay-=this._currentSpawnDelay,delete this._spawnDelay)),this._emitDelay!==void 0&&(this._currentEmitDelay+=i.value,this._currentEmitDelay>=this._emitDelay&&(this._emit(),this._currentEmitDelay-=this._emitDelay)))}}class _i{constructor(i,t){this.container=t,this._engine=i,this.array=[],this.emitters=[],this.interactivityEmitters={random:{count:1,enable:!1},value:[]},t.getEmitter=e=>e===void 0||S(e)?this.array[e||0]:this.array.find(n=>n.name===e),t.addEmitter=(e,n)=>this.addEmitter(e,n),t.removeEmitter=e=>{const n=t.getEmitter(e);n&&this.removeEmitter(n)},t.playEmitter=e=>{const n=t.getEmitter(e);n&&n.externalPlay()},t.pauseEmitter=e=>{const n=t.getEmitter(e);n&&n.externalPause()}}addEmitter(i,t){const e=new v;e.load(i);const n=new vi(this._engine,this,this.container,e,t);return this.array.push(n),n}handleClickMode(i){const t=this.emitters,e=this.interactivityEmitters;if(i!=="emitter")return;let n;if(e&&O(e.value))if(e.value.length>0&&e.random.enable){n=[];const o=[];for(let h=0;h<e.random.count;h++){const l=Z(e.value);if(o.includes(l)&&o.length<e.value.length){h--;continue}o.push(l),n.push($(e.value,l))}}else n=e.value;else n=e==null?void 0:e.value;const r=n??t,a=this.container.interactivity.mouse.clickPosition;_(r,o=>{this.addEmitter(o,a)})}async init(){if(this.emitters=this.container.actualOptions.emitters,this.interactivityEmitters=this.container.actualOptions.interactivity.modes.emitters,!!this.emitters)if(O(this.emitters))for(const i of this.emitters)this.addEmitter(i);else this.addEmitter(this.emitters)}pause(){for(const i of this.array)i.pause()}play(){for(const i of this.array)i.play()}removeEmitter(i){const t=this.array.indexOf(i);t>=0&&this.array.splice(t,1)}resize(){for(const i of this.array)i.resize()}stop(){this.array=[]}update(i){for(const t of this.array)t.update(i)}}const A=new Map;class Pi{constructor(i){this._engine=i}addShape(i,t){this.getShape(i)||A.set(i,t)}getShape(i){return A.get(i)}getSupportedShapes(){return A.keys()}}function T(s,i){return s+i*(b()-.5)}class Oi{randomPosition(i,t,e){if(e)return{x:T(i.x,t.width),y:T(i.y,t.height)};{const n=t.width/2,r=t.height/2,a=Math.floor(b()*4),o=(b()-.5)*2;switch(a){case 0:return{x:i.x+o*n,y:i.y-r};case 1:return{x:i.x-n,y:i.y+o*r};case 2:return{x:i.x+o*n,y:i.y+r};case 3:default:return{x:i.x+n,y:i.y+o*r}}}}}class zi{constructor(i){this._engine=i,this.id="emitters"}getPlugin(i){return new _i(this._engine,i)}loadOptions(i,t){var n,r;if(!this.needsPlugin(i)&&!this.needsPlugin(t))return;t!=null&&t.emitters&&(i.emitters=_(t.emitters,a=>{const o=new v;return o.load(a),o}));const e=(r=(n=t==null?void 0:t.interactivity)==null?void 0:n.modes)==null?void 0:r.emitters;if(e)if(O(e))i.interactivity.modes.emitters={random:{count:1,enable:!0},value:e.map(a=>{const o=new v;return o.load(a),o})};else{const a=e;if(a.value!==void 0)if(O(a.value))i.interactivity.modes.emitters={random:{count:a.random.count??1,enable:a.random.enable??!1},value:a.value.map(o=>{const h=new v;return h.load(o),h})};else{const o=new v;o.load(a.value),i.interactivity.modes.emitters={random:{count:a.random.count??1,enable:a.random.enable??!1},value:o}}else(i.interactivity.modes.emitters={random:{count:1,enable:!1},value:new v}).value.load(e)}}needsPlugin(i){var e,n,r;if(!i)return!1;const t=i.emitters;return O(t)&&!!t.length||t!==void 0||!!((r=(n=(e=i.interactivity)==null?void 0:e.events)==null?void 0:n.onClick)!=null&&r.mode)&&E("emitter",i.interactivity.events.onClick.mode)}}async function xi(s,i=!0){s.emitterShapeManager||(s.emitterShapeManager=new Pi(s)),s.addEmitterShape||(s.addEmitterShape=(e,n)=>{var r;(r=s.emitterShapeManager)==null||r.addShape(e,n)});const t=new zi(s);await s.addPlugin(t,i),s.addEmitterShape("circle",new bi),s.addEmitterShape("square",new Oi)}class Si{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(i){i&&(i.delay!==void 0&&(this.delay=i.delay),i.quantity!==void 0&&(this.quantity=i.quantity),i.particles!==void 0&&(this.particles=x({},i.particles)),i.pauseOnStop!==void 0&&(this.pauseOnStop=i.pauseOnStop))}}class ki extends ii{constructor(i){super(i),this._delay=0}clear(){}init(){}async interact(i){var l,c,d,p;const t=this.container,{interactivity:e}=t;if(!t.retina.reduceFactor)return;const n=t.actualOptions,r=n.interactivity.modes.trail;if(!r)return;const a=r.delay*1e3/this.container.retina.reduceFactor;if(this._delay<a&&(this._delay+=i.value),this._delay<a)return;const o=!(r.pauseOnStop&&(e.mouse.position===this._lastPosition||((l=e.mouse.position)==null?void 0:l.x)===((c=this._lastPosition)==null?void 0:c.x)&&((d=e.mouse.position)==null?void 0:d.y)===((p=this._lastPosition)==null?void 0:p.y))),h=t.interactivity.mouse.position;h?this._lastPosition={...h}:delete this._lastPosition,o&&t.particles.push(r.quantity,t.interactivity.mouse,r.particles),this._delay-=a}isEnabled(i){const t=this.container,e=t.actualOptions,n=t.interactivity.mouse,r=((i==null?void 0:i.interactivity)??e.interactivity).events;return n.clicking&&n.inside&&!!n.position&&E("trail",r.onClick.mode)||n.inside&&!!n.position&&E("trail",r.onHover.mode)}loadModeOptions(i,...t){i.trail||(i.trail=new Si);for(const e of t)i.trail.load(e==null?void 0:e.trail)}reset(){}}async function Ci(s,i=!0){await s.addInteractor("externalTrail",t=>new ki(t),i)}function Di(s){const i=s.options.roll;if(!(i!=null&&i.enable)){s.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0};return}if(s.roll={enable:i.enable,horizontal:i.mode==="horizontal"||i.mode==="both",vertical:i.mode==="vertical"||i.mode==="both",angle:b()*Math.PI*2,speed:u(i.speed)/360},i.backColor)s.backColor=I(i.backColor);else if(i.darken.enable&&i.enlighten.enable){const t=b()>=.5?"darken":"enlighten";s.roll.alter={type:t,value:u(t==="darken"?i.darken.value:i.enlighten.value)}}else i.darken.enable?s.roll.alter={type:"darken",value:u(i.darken.value)}:i.enlighten.enable&&(s.roll.alter={type:"enlighten",value:u(i.enlighten.value)})}function Ei(s,i){const t=s.options.roll,e=s.roll;if(!e||!(t!=null&&t.enable))return;const n=e.speed*i.factor,r=2*Math.PI;e.angle+=n,e.angle>r&&(e.angle-=r)}class q{constructor(){this.enable=!1,this.value=0}load(i){i&&(i.enable!==void 0&&(this.enable=i.enable),i.value!==void 0&&(this.value=f(i.value)))}}class Mi{constructor(){this.darken=new q,this.enable=!1,this.enlighten=new q,this.mode="vertical",this.speed=25}load(i){i&&(i.backColor!==void 0&&(this.backColor=z.create(this.backColor,i.backColor)),this.darken.load(i.darken),i.enable!==void 0&&(this.enable=i.enable),this.enlighten.load(i.enlighten),i.mode!==void 0&&(this.mode=i.mode),i.speed!==void 0&&(this.speed=f(i.speed)))}}class Ri{getTransformValues(i){var r;const t=((r=i.roll)==null?void 0:r.enable)&&i.roll,e=t&&t.horizontal,n=t&&t.vertical;return{a:e?Math.cos(t.angle):void 0,d:n?Math.sin(t.angle):void 0}}init(i){Di(i)}isEnabled(i){const t=i.options.roll;return!i.destroyed&&!i.spawning&&!!(t!=null&&t.enable)}loadOptions(i,...t){i.roll||(i.roll=new Mi);for(const e of t)i.roll.load(e==null?void 0:e.roll)}update(i,t){this.isEnabled(i)&&Ei(i,t)}}async function Ai(s,i=!0){await s.addParticleUpdater("roll",()=>new Ri,i)}class Ii{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(i){i&&(i.enable!==void 0&&(this.enable=i.enable),i.speed!==void 0&&(this.speed=f(i.speed)),i.decay!==void 0&&(this.decay=f(i.decay)),i.sync!==void 0&&(this.sync=i.sync))}}class Fi extends R{constructor(){super(),this.animation=new Ii,this.direction="clockwise",this.enable=!1,this.value=0}load(i){super.load(i),i&&(this.animation.load(i.animation),i.direction!==void 0&&(this.direction=i.direction),i.enable!==void 0&&(this.enable=i.enable))}}function Ti(s,i){if(!s.tilt||!s.options.tilt)return;const t=s.options.tilt,e=t.animation,n=(s.tilt.velocity??0)*i.factor,r=2*Math.PI,a=s.tilt.decay??1;if(e.enable){switch(s.tilt.status){case"increasing":s.tilt.value+=n,s.tilt.value>r&&(s.tilt.value-=r);break;case"decreasing":default:s.tilt.value-=n,s.tilt.value<0&&(s.tilt.value+=r);break}s.tilt.velocity&&a!==1&&(s.tilt.velocity*=a)}}class qi{constructor(i){this.container=i}getTransformValues(i){var e;const t=((e=i.tilt)==null?void 0:e.enable)&&i.tilt;return{b:t?Math.cos(t.value)*t.cosDirection:void 0,c:t?Math.sin(t.value)*t.sinDirection:void 0}}init(i){var r;const t=i.options.tilt;if(!t)return;i.tilt={enable:t.enable,value:u(t.value)*Math.PI/180,sinDirection:b()>=.5?1:-1,cosDirection:b()>=.5?1:-1};let e=t.direction;switch(e==="random"&&(e=Math.floor(b()*2)>0?"counter-clockwise":"clockwise"),e){case"counter-clockwise":case"counterClockwise":i.tilt.status="decreasing";break;case"clockwise":i.tilt.status="increasing";break}const n=(r=i.options.tilt)==null?void 0:r.animation;n!=null&&n.enable&&(i.tilt.decay=1-u(n.decay),i.tilt.velocity=u(n.speed)/360*this.container.retina.reduceFactor,n.sync||(i.tilt.velocity*=b()))}isEnabled(i){var e;const t=(e=i.options.tilt)==null?void 0:e.animation;return!i.destroyed&&!i.spawning&&!!(t!=null&&t.enable)}loadOptions(i,...t){i.tilt||(i.tilt=new Fi);for(const e of t)i.tilt.load(e==null?void 0:e.tilt)}update(i,t){this.isEnabled(i)&&Ti(i,t)}}async function Ui(s,i=!0){await s.addParticleUpdater("tilt",t=>new qi(t),i)}class U{constructor(){this.enable=!1,this.frequency=.05,this.opacity=1}load(i){i&&(i.color!==void 0&&(this.color=z.create(this.color,i.color)),i.enable!==void 0&&(this.enable=i.enable),i.frequency!==void 0&&(this.frequency=i.frequency),i.opacity!==void 0&&(this.opacity=f(i.opacity)))}}class Bi{constructor(){this.lines=new U,this.particles=new U}load(i){i&&(this.lines.load(i.lines),this.particles.load(i.particles))}}class Vi{getColorStyles(i,t,e,n){const r=i.options,a=r.twinkle;if(!a)return{};const o=a.particles,h=o.enable&&b()<o.frequency,l=i.options.zIndex,c=(1-i.zIndexFactor)**l.opacityRate,d=h?u(o.opacity)*c:n,p=I(o.color),m=p?N(p,d):void 0,y={},g=h&&m;return y.fill=g?m:void 0,y.stroke=g?m:void 0,y}init(){}isEnabled(i){const t=i.options,e=t.twinkle;return e?e.particles.enable:!1}loadOptions(i,...t){i.twinkle||(i.twinkle=new Bi);for(const e of t)i.twinkle.load(e==null?void 0:e.twinkle)}update(){}}async function Wi(s,i=!0){await s.addParticleUpdater("twinkle",()=>new Vi,i)}class Hi{constructor(){this.angle=50,this.move=10}load(i){i&&(i.angle!==void 0&&(this.angle=f(i.angle)),i.move!==void 0&&(this.move=f(i.move)))}}class Li{constructor(){this.distance=5,this.enable=!1,this.speed=new Hi}load(i){if(i&&(i.distance!==void 0&&(this.distance=f(i.distance)),i.enable!==void 0&&(this.enable=i.enable),i.speed!==void 0))if(S(i.speed))this.speed.load({angle:i.speed});else{const t=i.speed;t.min!==void 0?this.speed.load({angle:t}):this.speed.load(i.speed)}}}function ji(s,i){const{wobble:t}=s.options,{wobble:e}=s;if(!(t!=null&&t.enable)||!e)return;const n=e.angleSpeed*i.factor,r=e.moveSpeed*i.factor,a=r*((s.retina.wobbleDistance??0)*i.factor)/(1e3/60),o=2*Math.PI,{position:h}=s;e.angle+=n,e.angle>o&&(e.angle-=o),h.x+=a*Math.cos(e.angle),h.y+=a*Math.abs(Math.sin(e.angle))}class Gi{constructor(i){this.container=i}init(i){const t=i.options.wobble;t!=null&&t.enable?i.wobble={angle:b()*Math.PI*2,angleSpeed:u(t.speed.angle)/360,moveSpeed:u(t.speed.move)/10}:i.wobble={angle:0,angleSpeed:0,moveSpeed:0},i.retina.wobbleDistance=u((t==null?void 0:t.distance)??0)*this.container.retina.pixelRatio}isEnabled(i){var t;return!i.destroyed&&!i.spawning&&!!((t=i.options.wobble)!=null&&t.enable)}loadOptions(i,...t){i.wobble||(i.wobble=new Li);for(const e of t)i.wobble.load(e==null?void 0:e.wobble)}update(i,t){this.isEnabled(i)&&ji(i,t)}}async function Ji(s,i=!0){await s.addParticleUpdater("wobble",t=>new Gi(t),i)}async function nt(s,i=!0){await yi(s,!1),await Ai(s,!1),await Ui(s,!1),await Wi(s,!1),await Ji(s,!1),await Ci(s,!1),await ai(s,!1),await xi(s,!1),await ti(s,i)}export{nt as loadFull};
