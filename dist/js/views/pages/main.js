(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("views/pages/main",["views/pages/PageView","views/IconSelectView","models/IconSelectModel","underscore","hammer","tween","helpers"],function(e,n,r,i,s,o,u){var a,f;return console.log(s),a=function(e){function s(){return f=s.__super__.constructor.apply(this,arguments),f}return t(s,e),s.prototype.template="#main-template",s.prototype.className="cf",s.prototype.events={"click .js-download":"download"},s.prototype.initialize=function(e){return this.o=e!=null?e:{},this.isNoPageAnima=!0,s.__super__.initialize.apply(this,arguments),this},s.prototype.render=function(){var e=this;return s.__super__.render.apply(this,arguments),this.iconSelectView=new n({model:new r,$el:this.$("#js-icons-select-view-place"),isRender:!0,pageNum:this.o.pageNum}),this.$mainLogo=this.$(".main-logo-b"),this.$melon=this.$(".logo-large-e"),this.$mainSection=this.$("#js-icons-select-view-place"),i.defer(function(){return!App.mainAnimated&&e.animate(),App.mainAnimated&&e.show()}),this.hammerTime(),this},s.prototype.hammerTime=function(){var e,t,n,r,i,s=this;return e=this.$("#js-main-logo-icon"),n=e.hammer(),r=20,t=0,i=u.prefix(),n.on("drag",function(n){return o.removeAll(),t=n.gesture.deltaX,t=t>r?r:t,t=t<-r?-r:t,e.css(""+i+"transform","rotate("+t+"deg)")}),n.on("release",function(n){var r;return r=(new o.Tween({amount:t})).to({amount:0},2e3).easing(function(e){var t;return t=Math.exp(-e*5)*Math.cos(Math.PI*2*e*5),1-t}).onUpdate(function(){return e.css(""+i+"transform","rotate("+this.amount+"deg)")}).start(),r.start(),!s.animateStarted&&s.animateTween()})},s.prototype.animateTween=function(){var e=this;return this.animateStarted=!0,requestAnimationFrame(function(){return e.animateTween()}),o.update()},s.prototype.download=function(){var e=this;if(App.iconsSelected.length===0){App.notifier.show({type:"error",text:"select at least one icon to download"});return}return this.$downloadBtn=this.$(".js-download"),this.$downloadBtn.addClass("loading-eff"),$.ajax({type:"post",url:"/download-icons",data:{icons:App.iconsSelected,filters:App.filtersSelected},success:function(e){return location.href="/generated-icons/"+e+".zip"},error:function(e){return console.error(e)},complete:function(){return e.$downloadBtn.removeClass("loading-eff")}})},s.prototype.animate=function(){var e=this;return this.$mainLogo.addClass("animated fadeInRightBig"),this.$melon.addClass("animated swing"),setTimeout(function(){return e.$mainSection.addClass("animated fadeInDown"),App.mainAnimated=!0},1e3)},s.prototype.show=function(){return this.$mainLogo.addClass("is-no-translateX"),this.$melon.removeClass("is-rotated"),this.$mainSection.addClass("animated fadeInDown"),this.$mainLogo.addClass("animated fadeInDown")},s.prototype.teardown=function(){return this.iconSelectView.teardown(),s.__super__.teardown.apply(this,arguments),this},s}(e),a})}).call(this);