// Compiled by ClojureScript 0.0-2202
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_13259 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_13259;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",1544652043,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join('')));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13263__delegate = function (x,p__13260){var map__13262 = p__13260;var map__13262__$1 = ((cljs.core.seq_QMARK_.call(null,map__13262))?cljs.core.apply.call(null,cljs.core.hash_map,map__13262):map__13262);var validator = cljs.core.get.call(null,map__13262__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__13262__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__13263 = function (x,var_args){
var p__13260 = null;if (arguments.length > 1) {
  p__13260 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13263__delegate.call(this,x,p__13260);};
G__13263.cljs$lang$maxFixedArity = 1;
G__13263.cljs$lang$applyTo = (function (arglist__13264){
var x = cljs.core.first(arglist__13264);
var p__13260 = cljs.core.rest(arglist__13264);
return G__13263__delegate(x,p__13260);
});
G__13263.cljs$core$IFn$_invoke$arity$variadic = G__13263__delegate;
return G__13263;
})()
;
atom = function(x,var_args){
var p__13260 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch.call(null,self__.ratom,key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch.call(null,self__.ratom,key);
});
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Cursor: ");
cljs.core.pr_writer.call(null,self__.path,writer,opts);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,self__.ratom,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._meta.call(null,self__.ratom);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y);
});
reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y,more);
});
reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){return (new reagent.ratom.RCursor(path,ratom));
});
reagent.ratom.cursor = (function cursor(path,ra){return (new reagent.ratom.RCursor(path,ra));
});
reagent.ratom.IDisposable = (function (){var obj13266 = {};return obj13266;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__7871__auto__ = this$;if(and__7871__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__8510__auto__ = (((this$ == null))?null:this$);return (function (){var or__7883__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj13268 = {};return obj13268;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__7871__auto__ = this$;if(and__7871__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__7871__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__8510__auto__ = (((this$ == null))?null:this$);return (function (){var or__7883__auto__ = (reagent.ratom.run[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (reagent.ratom.run["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj13270 = {};return obj13270;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__7871__auto__ = this$;if(and__7871__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__7871__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__8510__auto__ = (((this$ == null))?null:this$);return (function (){var or__7883__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__7871__auto__ = k;if(and__7871__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__7871__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__8510__auto__ = (((k == null))?null:k);return (function (){var or__7883__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__7871__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__7871__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__7871__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__7883__auto__ = self__.auto_run;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__13271_13283 = cljs.core.seq.call(null,derefed);var chunk__13272_13284 = null;var count__13273_13285 = 0;var i__13274_13286 = 0;while(true){
if((i__13274_13286 < count__13273_13285))
{var w_13287 = cljs.core._nth.call(null,chunk__13272_13284,i__13274_13286);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_13287))
{} else
{cljs.core.add_watch.call(null,w_13287,this$__$1,reagent.ratom._handle_change);
}
{
var G__13288 = seq__13271_13283;
var G__13289 = chunk__13272_13284;
var G__13290 = count__13273_13285;
var G__13291 = (i__13274_13286 + 1);
seq__13271_13283 = G__13288;
chunk__13272_13284 = G__13289;
count__13273_13285 = G__13290;
i__13274_13286 = G__13291;
continue;
}
} else
{var temp__4126__auto___13292 = cljs.core.seq.call(null,seq__13271_13283);if(temp__4126__auto___13292)
{var seq__13271_13293__$1 = temp__4126__auto___13292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13271_13293__$1))
{var c__8631__auto___13294 = cljs.core.chunk_first.call(null,seq__13271_13293__$1);{
var G__13295 = cljs.core.chunk_rest.call(null,seq__13271_13293__$1);
var G__13296 = c__8631__auto___13294;
var G__13297 = cljs.core.count.call(null,c__8631__auto___13294);
var G__13298 = 0;
seq__13271_13283 = G__13295;
chunk__13272_13284 = G__13296;
count__13273_13285 = G__13297;
i__13274_13286 = G__13298;
continue;
}
} else
{var w_13299 = cljs.core.first.call(null,seq__13271_13293__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_13299))
{} else
{cljs.core.add_watch.call(null,w_13299,this$__$1,reagent.ratom._handle_change);
}
{
var G__13300 = cljs.core.next.call(null,seq__13271_13293__$1);
var G__13301 = null;
var G__13302 = 0;
var G__13303 = 0;
seq__13271_13283 = G__13300;
chunk__13272_13284 = G__13301;
count__13273_13285 = G__13302;
i__13274_13286 = G__13303;
continue;
}
}
} else
{}
}
break;
}
var seq__13275_13304 = cljs.core.seq.call(null,self__.watching);var chunk__13276_13305 = null;var count__13277_13306 = 0;var i__13278_13307 = 0;while(true){
if((i__13278_13307 < count__13277_13306))
{var w_13308 = cljs.core._nth.call(null,chunk__13276_13305,i__13278_13307);if(cljs.core.contains_QMARK_.call(null,derefed,w_13308))
{} else
{cljs.core.remove_watch.call(null,w_13308,this$__$1);
}
{
var G__13309 = seq__13275_13304;
var G__13310 = chunk__13276_13305;
var G__13311 = count__13277_13306;
var G__13312 = (i__13278_13307 + 1);
seq__13275_13304 = G__13309;
chunk__13276_13305 = G__13310;
count__13277_13306 = G__13311;
i__13278_13307 = G__13312;
continue;
}
} else
{var temp__4126__auto___13313 = cljs.core.seq.call(null,seq__13275_13304);if(temp__4126__auto___13313)
{var seq__13275_13314__$1 = temp__4126__auto___13313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13275_13314__$1))
{var c__8631__auto___13315 = cljs.core.chunk_first.call(null,seq__13275_13314__$1);{
var G__13316 = cljs.core.chunk_rest.call(null,seq__13275_13314__$1);
var G__13317 = c__8631__auto___13315;
var G__13318 = cljs.core.count.call(null,c__8631__auto___13315);
var G__13319 = 0;
seq__13275_13304 = G__13316;
chunk__13276_13305 = G__13317;
count__13277_13306 = G__13318;
i__13278_13307 = G__13319;
continue;
}
} else
{var w_13320 = cljs.core.first.call(null,seq__13275_13314__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_13320))
{} else
{cljs.core.remove_watch.call(null,w_13320,this$__$1);
}
{
var G__13321 = cljs.core.next.call(null,seq__13275_13314__$1);
var G__13322 = null;
var G__13323 = 0;
var G__13324 = 0;
seq__13275_13304 = G__13321;
chunk__13276_13305 = G__13322;
count__13277_13306 = G__13323;
i__13278_13307 = G__13324;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__13279_13325 = cljs.core.seq.call(null,self__.watching);var chunk__13280_13326 = null;var count__13281_13327 = 0;var i__13282_13328 = 0;while(true){
if((i__13282_13328 < count__13281_13327))
{var w_13329 = cljs.core._nth.call(null,chunk__13280_13326,i__13282_13328);cljs.core.remove_watch.call(null,w_13329,this$__$1);
{
var G__13330 = seq__13279_13325;
var G__13331 = chunk__13280_13326;
var G__13332 = count__13281_13327;
var G__13333 = (i__13282_13328 + 1);
seq__13279_13325 = G__13330;
chunk__13280_13326 = G__13331;
count__13281_13327 = G__13332;
i__13282_13328 = G__13333;
continue;
}
} else
{var temp__4126__auto___13334 = cljs.core.seq.call(null,seq__13279_13325);if(temp__4126__auto___13334)
{var seq__13279_13335__$1 = temp__4126__auto___13334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13279_13335__$1))
{var c__8631__auto___13336 = cljs.core.chunk_first.call(null,seq__13279_13335__$1);{
var G__13337 = cljs.core.chunk_rest.call(null,seq__13279_13335__$1);
var G__13338 = c__8631__auto___13336;
var G__13339 = cljs.core.count.call(null,c__8631__auto___13336);
var G__13340 = 0;
seq__13279_13325 = G__13337;
chunk__13280_13326 = G__13338;
count__13281_13327 = G__13339;
i__13282_13328 = G__13340;
continue;
}
} else
{var w_13341 = cljs.core.first.call(null,seq__13279_13335__$1);cljs.core.remove_watch.call(null,w_13341,this$__$1);
{
var G__13342 = cljs.core.next.call(null,seq__13279_13335__$1);
var G__13343 = null;
var G__13344 = 0;
var G__13345 = 0;
seq__13279_13325 = G__13342;
chunk__13280_13326 = G__13343;
count__13281_13327 = G__13344;
i__13282_13328 = G__13345;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__7883__auto__ = self__.auto_run;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__9332__auto___13346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(typeof console !== 'undefined')
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__9332__auto___13346))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__7883__auto__ = self__.auto_run;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__13347){var map__13349 = p__13347;var map__13349__$1 = ((cljs.core.seq_QMARK_.call(null,map__13349))?cljs.core.apply.call(null,cljs.core.hash_map,map__13349):map__13349);var derefed = cljs.core.get.call(null,map__13349__$1,new cljs.core.Keyword(null,"derefed","derefed",2569894915));var on_dispose = cljs.core.get.call(null,map__13349__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__13349__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__13349__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__13347 = null;if (arguments.length > 1) {
  p__13347 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__13347);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__13350){
var f = cljs.core.first(arglist__13350);
var p__13347 = cljs.core.rest(arglist__13350);
return make_reaction__delegate(f,p__13347);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map