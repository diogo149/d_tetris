// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__14456,args){var map__14458 = p__14456;var map__14458__$1 = ((cljs.core.seq_QMARK_.call(null,map__14458))?cljs.core.apply.call(null,cljs.core.hash_map,map__14458):map__14458);var debug = cljs.core.get.call(null,map__14458__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__14456,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__14456,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14459){
var p__14456 = cljs.core.first(arglist__14459);
var args = cljs.core.rest(arglist__14459);
return log__delegate(p__14456,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__14460){var map__14462 = p__14460;var map__14462__$1 = ((cljs.core.seq_QMARK_.call(null,map__14462))?cljs.core.apply.call(null,cljs.core.hash_map,map__14462):map__14462);var websocket_url = cljs.core.get.call(null,map__14462__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__14463,callback){var map__14465 = p__14463;var map__14465__$1 = ((cljs.core.seq_QMARK_.call(null,map__14465))?cljs.core.apply.call(null,cljs.core.hash_map,map__14465):map__14465);var msg = map__14465__$1;var dependency_file = cljs.core.get.call(null,map__14465__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__14465__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__14465__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7883__auto__ = dependency_file;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__14465,map__14465__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__14465,map__14465__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__14466,p__14467){var map__14470 = p__14466;var map__14470__$1 = ((cljs.core.seq_QMARK_.call(null,map__14470))?cljs.core.apply.call(null,cljs.core.hash_map,map__14470):map__14470);var opts = map__14470__$1;var url_rewriter = cljs.core.get.call(null,map__14470__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__14471 = p__14467;var map__14471__$1 = ((cljs.core.seq_QMARK_.call(null,map__14471))?cljs.core.apply.call(null,cljs.core.hash_map,map__14471):map__14471);var d = map__14471__$1;var file = cljs.core.get.call(null,map__14471__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__14472,p__14473){var map__14514 = p__14472;var map__14514__$1 = ((cljs.core.seq_QMARK_.call(null,map__14514))?cljs.core.apply.call(null,cljs.core.hash_map,map__14514):map__14514);var opts = map__14514__$1;var on_jsload = cljs.core.get.call(null,map__14514__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__14514__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__14515 = p__14473;var map__14515__$1 = ((cljs.core.seq_QMARK_.call(null,map__14515))?cljs.core.apply.call(null,cljs.core.hash_map,map__14515):map__14515);var files = cljs.core.get.call(null,map__14515__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10402__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto__,map__14514,map__14514__$1,opts,on_jsload,before_jsload,map__14515,map__14515__$1,files){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto__,map__14514,map__14514__$1,opts,on_jsload,before_jsload,map__14515,map__14515__$1,files){
return (function (state_14537){var state_val_14538 = (state_14537[1]);if((state_val_14538 === 6))
{var inst_14520 = (state_14537[7]);var inst_14529 = (state_14537[2]);var inst_14530 = [inst_14520];var inst_14531 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14530,null));var inst_14532 = cljs.core.apply.call(null,on_jsload,inst_14531);var state_14537__$1 = (function (){var statearr_14539 = state_14537;(statearr_14539[8] = inst_14529);
return statearr_14539;
})();var statearr_14540_14554 = state_14537__$1;(statearr_14540_14554[2] = inst_14532);
(statearr_14540_14554[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14538 === 5))
{var inst_14535 = (state_14537[2]);var state_14537__$1 = state_14537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14537__$1,inst_14535);
} else
{if((state_val_14538 === 4))
{var state_14537__$1 = state_14537;var statearr_14541_14555 = state_14537__$1;(statearr_14541_14555[2] = null);
(statearr_14541_14555[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14538 === 3))
{var inst_14520 = (state_14537[7]);var inst_14523 = console.debug("Figwheel: loaded these files");var inst_14524 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_14520);var inst_14525 = cljs.core.prn_str.call(null,inst_14524);var inst_14526 = console.log(inst_14525);var inst_14527 = cljs.core.async.timeout.call(null,10);var state_14537__$1 = (function (){var statearr_14542 = state_14537;(statearr_14542[9] = inst_14526);
(statearr_14542[10] = inst_14523);
return statearr_14542;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14537__$1,6,inst_14527);
} else
{if((state_val_14538 === 2))
{var inst_14520 = (state_14537[7]);var inst_14520__$1 = (state_14537[2]);var inst_14521 = cljs.core.not_empty.call(null,inst_14520__$1);var state_14537__$1 = (function (){var statearr_14543 = state_14537;(statearr_14543[7] = inst_14520__$1);
return statearr_14543;
})();if(cljs.core.truth_(inst_14521))
{var statearr_14544_14556 = state_14537__$1;(statearr_14544_14556[1] = 3);
} else
{var statearr_14545_14557 = state_14537__$1;(statearr_14545_14557[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14538 === 1))
{var inst_14516 = before_jsload.call(null,files);var inst_14517 = figwheel.client.add_request_urls.call(null,opts,files);var inst_14518 = figwheel.client.load_all_js_files.call(null,inst_14517);var state_14537__$1 = (function (){var statearr_14546 = state_14537;(statearr_14546[11] = inst_14516);
return statearr_14546;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14537__$1,2,inst_14518);
} else
{return null;
}
}
}
}
}
}
});})(c__10402__auto__,map__14514,map__14514__$1,opts,on_jsload,before_jsload,map__14515,map__14515__$1,files))
;return ((function (switch__10338__auto__,c__10402__auto__,map__14514,map__14514__$1,opts,on_jsload,before_jsload,map__14515,map__14515__$1,files){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_14550 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14550[0] = state_machine__10339__auto__);
(statearr_14550[1] = 1);
return statearr_14550;
});
var state_machine__10339__auto____1 = (function (state_14537){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_14537);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e14551){if((e14551 instanceof Object))
{var ex__10342__auto__ = e14551;var statearr_14552_14558 = state_14537;(statearr_14552_14558[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14559 = state_14537;
state_14537 = G__14559;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_14537){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_14537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto__,map__14514,map__14514__$1,opts,on_jsload,before_jsload,map__14515,map__14515__$1,files))
})();var state__10404__auto__ = (function (){var statearr_14553 = f__10403__auto__.call(null);(statearr_14553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto__);
return statearr_14553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto__,map__14514,map__14514__$1,opts,on_jsload,before_jsload,map__14515,map__14515__$1,files))
);
return c__10402__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__14560,link_href){var map__14562 = p__14560;var map__14562__$1 = ((cljs.core.seq_QMARK_.call(null,map__14562))?cljs.core.apply.call(null,cljs.core.hash_map,map__14562):map__14562);var request_url = cljs.core.get.call(null,map__14562__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__14562__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10402__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto__,parent){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto__,parent){
return (function (state_14583){var state_val_14584 = (state_14583[1]);if((state_val_14584 === 2))
{var inst_14580 = (state_14583[2]);var inst_14581 = parent.removeChild(orig_link);var state_14583__$1 = (function (){var statearr_14585 = state_14583;(statearr_14585[7] = inst_14580);
return statearr_14585;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14583__$1,inst_14581);
} else
{if((state_val_14584 === 1))
{var inst_14578 = cljs.core.async.timeout.call(null,200);var state_14583__$1 = state_14583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14583__$1,2,inst_14578);
} else
{return null;
}
}
});})(c__10402__auto__,parent))
;return ((function (switch__10338__auto__,c__10402__auto__,parent){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_14589 = [null,null,null,null,null,null,null,null];(statearr_14589[0] = state_machine__10339__auto__);
(statearr_14589[1] = 1);
return statearr_14589;
});
var state_machine__10339__auto____1 = (function (state_14583){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_14583);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e14590){if((e14590 instanceof Object))
{var ex__10342__auto__ = e14590;var statearr_14591_14593 = state_14583;(statearr_14591_14593[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14594 = state_14583;
state_14583 = G__14594;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_14583){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_14583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto__,parent))
})();var state__10404__auto__ = (function (){var statearr_14592 = f__10403__auto__.call(null);(statearr_14592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto__);
return statearr_14592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto__,parent))
);
return c__10402__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__14595){var map__14597 = p__14595;var map__14597__$1 = ((cljs.core.seq_QMARK_.call(null,map__14597))?cljs.core.apply.call(null,cljs.core.hash_map,map__14597):map__14597);var f_data = map__14597__$1;var request_url = cljs.core.get.call(null,map__14597__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__14597__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__14598,files_msg){var map__14620 = p__14598;var map__14620__$1 = ((cljs.core.seq_QMARK_.call(null,map__14620))?cljs.core.apply.call(null,cljs.core.hash_map,map__14620):map__14620);var opts = map__14620__$1;var on_cssload = cljs.core.get.call(null,map__14620__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__14621_14641 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__14622_14642 = null;var count__14623_14643 = 0;var i__14624_14644 = 0;while(true){
if((i__14624_14644 < count__14623_14643))
{var f_14645 = cljs.core._nth.call(null,chunk__14622_14642,i__14624_14644);figwheel.client.reload_css_file.call(null,f_14645);
{
var G__14646 = seq__14621_14641;
var G__14647 = chunk__14622_14642;
var G__14648 = count__14623_14643;
var G__14649 = (i__14624_14644 + 1);
seq__14621_14641 = G__14646;
chunk__14622_14642 = G__14647;
count__14623_14643 = G__14648;
i__14624_14644 = G__14649;
continue;
}
} else
{var temp__4126__auto___14650 = cljs.core.seq.call(null,seq__14621_14641);if(temp__4126__auto___14650)
{var seq__14621_14651__$1 = temp__4126__auto___14650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14621_14651__$1))
{var c__8631__auto___14652 = cljs.core.chunk_first.call(null,seq__14621_14651__$1);{
var G__14653 = cljs.core.chunk_rest.call(null,seq__14621_14651__$1);
var G__14654 = c__8631__auto___14652;
var G__14655 = cljs.core.count.call(null,c__8631__auto___14652);
var G__14656 = 0;
seq__14621_14641 = G__14653;
chunk__14622_14642 = G__14654;
count__14623_14643 = G__14655;
i__14624_14644 = G__14656;
continue;
}
} else
{var f_14657 = cljs.core.first.call(null,seq__14621_14651__$1);figwheel.client.reload_css_file.call(null,f_14657);
{
var G__14658 = cljs.core.next.call(null,seq__14621_14651__$1);
var G__14659 = null;
var G__14660 = 0;
var G__14661 = 0;
seq__14621_14641 = G__14658;
chunk__14622_14642 = G__14659;
count__14623_14643 = G__14660;
i__14624_14644 = G__14661;
continue;
}
}
} else
{}
}
break;
}
var c__10402__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto__,map__14620,map__14620__$1,opts,on_cssload){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto__,map__14620,map__14620__$1,opts,on_cssload){
return (function (state_14631){var state_val_14632 = (state_14631[1]);if((state_val_14632 === 2))
{var inst_14627 = (state_14631[2]);var inst_14628 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_14629 = on_cssload.call(null,inst_14628);var state_14631__$1 = (function (){var statearr_14633 = state_14631;(statearr_14633[7] = inst_14627);
return statearr_14633;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14631__$1,inst_14629);
} else
{if((state_val_14632 === 1))
{var inst_14625 = cljs.core.async.timeout.call(null,100);var state_14631__$1 = state_14631;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14631__$1,2,inst_14625);
} else
{return null;
}
}
});})(c__10402__auto__,map__14620,map__14620__$1,opts,on_cssload))
;return ((function (switch__10338__auto__,c__10402__auto__,map__14620,map__14620__$1,opts,on_cssload){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_14637 = [null,null,null,null,null,null,null,null];(statearr_14637[0] = state_machine__10339__auto__);
(statearr_14637[1] = 1);
return statearr_14637;
});
var state_machine__10339__auto____1 = (function (state_14631){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_14631);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e14638){if((e14638 instanceof Object))
{var ex__10342__auto__ = e14638;var statearr_14639_14662 = state_14631;(statearr_14639_14662[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14631);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14663 = state_14631;
state_14631 = G__14663;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_14631){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_14631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto__,map__14620,map__14620__$1,opts,on_cssload))
})();var state__10404__auto__ = (function (){var statearr_14640 = f__10403__auto__.call(null);(statearr_14640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto__);
return statearr_14640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto__,map__14620,map__14620__$1,opts,on_cssload))
);
return c__10402__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__14664){var map__14669 = p__14664;var map__14669__$1 = ((cljs.core.seq_QMARK_.call(null,map__14669))?cljs.core.apply.call(null,cljs.core.hash_map,map__14669):map__14669);var opts = map__14669__$1;var on_compile_fail = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__14670 = cljs.core._EQ_;var expr__14671 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__14670.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__14671)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14670.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__14671)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14670.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__14671)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__14669,map__14669__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14676 = {"detail":url};return obj14676;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__14677){var map__14679 = p__14677;var map__14679__$1 = ((cljs.core.seq_QMARK_.call(null,map__14679))?cljs.core.apply.call(null,cljs.core.hash_map,map__14679):map__14679);var class$ = cljs.core.get.call(null,map__14679__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__14679__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14680){var map__14686 = p__14680;var map__14686__$1 = ((cljs.core.seq_QMARK_.call(null,map__14686))?cljs.core.apply.call(null,cljs.core.hash_map,map__14686):map__14686);var ed = map__14686__$1;var exception_data = cljs.core.get.call(null,map__14686__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__14686__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__14687_14691 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__14688_14692 = null;var count__14689_14693 = 0;var i__14690_14694 = 0;while(true){
if((i__14690_14694 < count__14689_14693))
{var msg_14695 = cljs.core._nth.call(null,chunk__14688_14692,i__14690_14694);console.log(msg_14695);
{
var G__14696 = seq__14687_14691;
var G__14697 = chunk__14688_14692;
var G__14698 = count__14689_14693;
var G__14699 = (i__14690_14694 + 1);
seq__14687_14691 = G__14696;
chunk__14688_14692 = G__14697;
count__14689_14693 = G__14698;
i__14690_14694 = G__14699;
continue;
}
} else
{var temp__4126__auto___14700 = cljs.core.seq.call(null,seq__14687_14691);if(temp__4126__auto___14700)
{var seq__14687_14701__$1 = temp__4126__auto___14700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14687_14701__$1))
{var c__8631__auto___14702 = cljs.core.chunk_first.call(null,seq__14687_14701__$1);{
var G__14703 = cljs.core.chunk_rest.call(null,seq__14687_14701__$1);
var G__14704 = c__8631__auto___14702;
var G__14705 = cljs.core.count.call(null,c__8631__auto___14702);
var G__14706 = 0;
seq__14687_14691 = G__14703;
chunk__14688_14692 = G__14704;
count__14689_14693 = G__14705;
i__14690_14694 = G__14706;
continue;
}
} else
{var msg_14707 = cljs.core.first.call(null,seq__14687_14701__$1);console.log(msg_14707);
{
var G__14708 = cljs.core.next.call(null,seq__14687_14701__$1);
var G__14709 = null;
var G__14710 = 0;
var G__14711 = 0;
seq__14687_14691 = G__14708;
chunk__14688_14692 = G__14709;
count__14689_14693 = G__14710;
i__14690_14694 = G__14711;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7883__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__14712){var map__14714 = p__14712;var map__14714__$1 = ((cljs.core.seq_QMARK_.call(null,map__14714))?cljs.core.apply.call(null,cljs.core.hash_map,map__14714):map__14714);var opts = map__14714__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14712 = null;if (arguments.length > 0) {
  p__14712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__14712);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14715){
var p__14712 = cljs.core.seq(arglist__14715);
return watch_and_reload__delegate(p__14712);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map