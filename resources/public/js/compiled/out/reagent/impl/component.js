// Compiled by ClojureScript 0.0-2202
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){var sa = (this$["cljsState"]);if(!((sa == null)))
{return sa;
} else
{return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
reagent.impl.component.state = (function state(this$){return cljs.core.deref.call(null,reagent.impl.component.state_atom.call(null,this$));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,this$),new_state);
});
reagent.impl.component.set_state = (function set_state(this$,new_state){return cljs.core.swap_BANG_.call(null,reagent.impl.component.state_atom.call(null,this$),cljs.core.merge,new_state);
});
reagent.impl.component.do_render = (function do_render(c){var _STAR_current_component_STAR_13200 = reagent.impl.component._STAR_current_component_STAR_;try{reagent.impl.component._STAR_current_component_STAR_ = c;
var f = (c["cljsRender"]);var _ = ((reagent.impl.util.clj_ifn_QMARK_.call(null,f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",-520791343,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')))})());var p = (c["props"]);var res = ((((c["componentFunction"]) == null))?f.call(null,c):(function (){var argv = (p["argv"]);var n = cljs.core.count.call(null,argv);var G__13201 = n;if(cljs.core._EQ_.call(null,5,G__13201))
{return f.call(null,cljs.core.nth.call(null,argv,1),cljs.core.nth.call(null,argv,2),cljs.core.nth.call(null,argv,3),cljs.core.nth.call(null,argv,4));
} else
{if(cljs.core._EQ_.call(null,4,G__13201))
{return f.call(null,cljs.core.nth.call(null,argv,1),cljs.core.nth.call(null,argv,2),cljs.core.nth.call(null,argv,3));
} else
{if(cljs.core._EQ_.call(null,3,G__13201))
{return f.call(null,cljs.core.nth.call(null,argv,1),cljs.core.nth.call(null,argv,2));
} else
{if(cljs.core._EQ_.call(null,2,G__13201))
{return f.call(null,cljs.core.nth.call(null,argv,1));
} else
{if(cljs.core._EQ_.call(null,1,G__13201))
{return f.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.apply.call(null,f,cljs.core.subvec.call(null,argv,1));
} else
{return null;
}
}
}
}
}
}
})());if(cljs.core.vector_QMARK_.call(null,res))
{return (c["asComponent"])(res,(p["level"]));
} else
{if(cljs.core.ifn_QMARK_.call(null,res))
{(c["cljsRender"] = res);
return do_render.call(null,c);
} else
{return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_13200;
}});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__13203 = key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),G__13203))
{return ((function (G__13203){
return (function (){var c = this;reagent.impl.batching.dispose.call(null,c);
if((f == null))
{return null;
} else
{return f.call(null,c);
}
});
;})(G__13203))
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),G__13203))
{return ((function (G__13203){
return (function (oldprops){var c = this;return f.call(null,c,(oldprops["argv"]));
});
;})(G__13203))
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),G__13203))
{return ((function (G__13203){
return (function (nextprops){var c = this;return f.call(null,c,(nextprops["argv"]));
});
;})(G__13203))
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),G__13203))
{return ((function (G__13203){
return (function (nextprops,nextstate){var or__7883__auto__ = reagent.impl.util._STAR_always_update_STAR_;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{var c = this;var old_argv = (c["props"]["argv"]);var new_argv = (nextprops["argv"]);if((f == null))
{return cljs.core.not.call(null,reagent.impl.util.equal_args.call(null,old_argv,new_argv));
} else
{return f.call(null,c,old_argv,new_argv);
}
}
});
;})(G__13203))
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",2122862542),G__13203))
{return ((function (G__13203){
return (function (props){var c = this;return f.call(null,c,(props["argv"]));
});
;})(G__13203))
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),G__13203))
{return ((function (G__13203){
return (function (){var c = this;return reagent.impl.component.set_state.call(null,c,f.call(null,c));
});
;})(G__13203))
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"getDefaultProps","getDefaultProps",1976256919),G__13203))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){if(cljs.core.ifn_QMARK_.call(null,f))
{return (function() { 
var G__13204__delegate = function (args){var c = this;return cljs.core.apply.call(null,f,c,args);
};
var G__13204 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13204__delegate.call(this,args);};
G__13204.cljs$lang$maxFixedArity = 0;
G__13204.cljs$lang$applyTo = (function (arglist__13205){
var args = cljs.core.seq(arglist__13205);
return G__13204__delegate(args);
});
G__13204.cljs$core$IFn$_invoke$arity$variadic = G__13204__delegate;
return G__13204;
})()
;
} else
{return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cljsRender","cljsRender",2584602394),null,new cljs.core.Keyword(null,"render","render",4374279432),null,new cljs.core.Keyword(null,"componentFunction","componentFunction",1139645287),null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){if(cljs.core.ifn_QMARK_.call(null,f))
{var G__13207 = f;(G__13207["__reactDontBind"] = true);
return G__13207;
} else
{return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){if(cljs.core.truth_(reagent.impl.component.dont_wrap.call(null,key)))
{return reagent.impl.component.dont_bind.call(null,f);
} else
{var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);if(cljs.core.truth_((function (){var and__7871__auto__ = wrap;if(cljs.core.truth_(and__7871__auto__))
{return f;
} else
{return and__7871__auto__;
}
})()))
{if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
} else
{}
var or__7883__auto__ = wrap;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return reagent.impl.component.default_wrapper.call(null,f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){return cljs.core.reduce_kv.call(null,(function (m,k,v){return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){return cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"cljsRender","cljsRender",2584602394),render_f,new cljs.core.Keyword(null,"render","render",4374279432),(cljs.core.truth_(reagent.impl.util.is_client)?(function (){var c = this;return reagent.impl.batching.run_reactively.call(null,c,((function (c){
return (function (){return reagent.impl.component.do_render.call(null,c);
});})(c))
);
}):(function (){var c = this;return reagent.impl.component.do_render.call(null,c);
})));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){var render_fun = (function (){var or__7883__auto__ = new cljs.core.Keyword(null,"componentFunction","componentFunction",1139645287).cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return new cljs.core.Keyword(null,"render","render",4374279432).cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();var _ = ((reagent.impl.util.clj_ifn_QMARK_.call(null,render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.call(null,render_fun))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",-520791343,null),new cljs.core.Symbol(null,"render-fun","render-fun",-447610239,null))))].join('')))})());var name = (function (){var or__7883__auto__ = new cljs.core.Keyword(null,"displayName","displayName",2728053215).cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (render_fun["displayName"]);if(cljs.core.truth_(or__7883__auto____$1))
{return or__7883__auto____$1;
} else
{return (render_fun["name"]);
}
}
})();var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_.call(null,name))?[cljs.core.str(cljs.core.gensym.call(null,"reagent"))].join(''):name);var fmap = reagent.impl.component.add_render.call(null,cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"displayName","displayName",2728053215),name_SINGLEQUOTE_),render_fun);return cljs.core.reduce_kv.call(null,((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){return cljs.core.reduce_kv.call(null,(function (o,k,v){var G__13209 = o;(G__13209[cljs.core.name.call(null,k)] = v);
return G__13209;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function create_class(body,as_component){if(cljs.core.map_QMARK_.call(null,body))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"body","body",-1637502117,null))))].join('')));
}
var spec = reagent.impl.component.cljsify.call(null,body);var _ = (spec["asComponent"] = reagent.impl.component.dont_bind.call(null,as_component));var res = (React["createClass"])(spec);var f = ((function (spec,_,res){
return (function() { 
var G__13210__delegate = function (args){return as_component.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__13210 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13210__delegate.call(this,args);};
G__13210.cljs$lang$maxFixedArity = 0;
G__13210.cljs$lang$applyTo = (function (arglist__13211){
var args = cljs.core.seq(arglist__13211);
return G__13210__delegate(args);
});
G__13210.cljs$core$IFn$_invoke$arity$variadic = G__13210__delegate;
return G__13210;
})()
;})(spec,_,res))
;reagent.impl.util.cache_react_class.call(null,f,res);
reagent.impl.util.cache_react_class.call(null,res,res);
return f;
});

//# sourceMappingURL=component.js.map