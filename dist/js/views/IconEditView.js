(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};define("views/IconEditView",["views/ProtoView","models/IconModel","underscore","jquery","helpers"],function(e,n,r,i,s){var o,u;return o=function(e){function o(){return u=o.__super__.constructor.apply(this,arguments),u}return t(o,e),o.prototype.model=n,o.prototype.template="#icon-edit-view-template",o.prototype.events={"click #js-destroy":"destroy","keyup #js-shape":"preSetShape","keyup #js-name":"preSetName"},o.prototype.bindings={"#js-name":{observe:"name",onSet:"setName"},"#js-shape":{observe:"shape",onSet:"setShape"}},o.prototype.preSetShape=function(e){return this.setShape(i(e.target).val()),this.$("#js-shape").toggleClass("is-error",!this.model.get("isShapeValid"))},o.prototype.preSetName=function(e){return this.$("#js-name").toggleClass("is-error",!this.model.get("isNameValid"))},o.prototype.setShape=function(e){var t,n,r;return t=i("<g>").html(e),r=s.generateHash(),t.attr("id",r),this.model.set("hash",r),this.model.collection.parentModel.get("isMulticolor")||t.find("*").each(function(e,t){var n;if(!this.model.get("isMulticolor")){n=i(t);if(n.attr("fill")!=="none"&&!n.attr("fill").match(/url/gi))return n.removeAttr("fill")}}),n=this.$svg.find("#"+r),n.length&&n.remove(),this.$svg.append(t),s.refreshSvg(),this.$svg=i("#svg-source"),this.model.attributes.shape=t.html(),this.model.set("isShapeValid",t.children().length?!0:!1),e},o.prototype.setName=function(e){return this.model.set("isNameValid",i.trim(e).length>0?!0:!1),e!=null?e.toLowerCase():void 0},o.prototype.initialize=function(e){return this.o=e!=null?e:{},this.$svg=i("#svg-source"),this.$svgWrap=App.$svgWrap,this.bindModelEvents(),this.model.on("change:name",r.bind(this.modelChange,this)),this.model.on("change:shape",r.bind(this.modelChange,this)),o.__super__.initialize.apply(this,arguments),this.model.get("shape")&&this.model.collection.mode!=="edit"&&this.setShape(this.model.get("shape")),this},o.prototype.modelChange=function(){return this.model.set("isValid",this.model.get("isNameValid")&&this.model.get("isShapeValid")),App.vent.trigger("edit-collection:change")},o.prototype.render=function(){var e;return e=this.$(":focus").attr("id"),o.__super__.render.apply(this,arguments),this.stickit(),this.$("#"+e).focus(),this},o.prototype.bindModelEvents=function(){return this.model.on("change:shape",this.render),this.model.on("change:isNameValid",this.render),this.model.on("change:isShapeValid",this.render)},o.prototype.destroy=function(){return this.model.collection.length===1&&this.model.collection.add({}),this.model.destroy(),App.vent.trigger("edit-collection:change")},o}(e),o})}).call(this);