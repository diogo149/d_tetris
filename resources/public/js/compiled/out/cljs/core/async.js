// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14822 = (function (f,fn_handler,meta14823){
this.f = f;
this.fn_handler = fn_handler;
this.meta14823 = meta14823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14822.cljs$lang$type = true;
cljs.core.async.t14822.cljs$lang$ctorStr = "cljs.core.async/t14822";
cljs.core.async.t14822.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t14822");
});
cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14824){var self__ = this;
var _14824__$1 = this;return self__.meta14823;
});
cljs.core.async.t14822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14824,meta14823__$1){var self__ = this;
var _14824__$1 = this;return (new cljs.core.async.t14822(self__.f,self__.fn_handler,meta14823__$1));
});
cljs.core.async.__GT_t14822 = (function __GT_t14822(f__$1,fn_handler__$1,meta14823){return (new cljs.core.async.t14822(f__$1,fn_handler__$1,meta14823));
});
}
return (new cljs.core.async.t14822(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14826 = buff;if(G__14826)
{var bit__8533__auto__ = null;if(cljs.core.truth_((function (){var or__7883__auto__ = bit__8533__auto__;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return G__14826.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14826.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14826);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14826);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14827 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14827);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14827,ret){
return (function (){return fn1.call(null,val_14827);
});})(val_14827,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8731__auto___14828 = n;var x_14829 = 0;while(true){
if((x_14829 < n__8731__auto___14828))
{(a[x_14829] = 0);
{
var G__14830 = (x_14829 + 1);
x_14829 = G__14830;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14831 = (i + 1);
i = G__14831;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14835 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14835 = (function (flag,alt_flag,meta14836){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14836 = meta14836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14835.cljs$lang$type = true;
cljs.core.async.t14835.cljs$lang$ctorStr = "cljs.core.async/t14835";
cljs.core.async.t14835.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t14835");
});})(flag))
;
cljs.core.async.t14835.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14837){var self__ = this;
var _14837__$1 = this;return self__.meta14836;
});})(flag))
;
cljs.core.async.t14835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14837,meta14836__$1){var self__ = this;
var _14837__$1 = this;return (new cljs.core.async.t14835(self__.flag,self__.alt_flag,meta14836__$1));
});})(flag))
;
cljs.core.async.__GT_t14835 = ((function (flag){
return (function __GT_t14835(flag__$1,alt_flag__$1,meta14836){return (new cljs.core.async.t14835(flag__$1,alt_flag__$1,meta14836));
});})(flag))
;
}
return (new cljs.core.async.t14835(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14841 = (function (cb,flag,alt_handler,meta14842){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14842 = meta14842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14841.cljs$lang$type = true;
cljs.core.async.t14841.cljs$lang$ctorStr = "cljs.core.async/t14841";
cljs.core.async.t14841.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t14841");
});
cljs.core.async.t14841.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14843){var self__ = this;
var _14843__$1 = this;return self__.meta14842;
});
cljs.core.async.t14841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14843,meta14842__$1){var self__ = this;
var _14843__$1 = this;return (new cljs.core.async.t14841(self__.cb,self__.flag,self__.alt_handler,meta14842__$1));
});
cljs.core.async.__GT_t14841 = (function __GT_t14841(cb__$1,flag__$1,alt_handler__$1,meta14842){return (new cljs.core.async.t14841(cb__$1,flag__$1,alt_handler__$1,meta14842));
});
}
return (new cljs.core.async.t14841(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14844_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14844_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14845_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14845_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7883__auto__ = wport;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14846 = (i + 1);
i = G__14846;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7883__auto__ = ret;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7871__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7871__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7871__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14847){var map__14849 = p__14847;var map__14849__$1 = ((cljs.core.seq_QMARK_.call(null,map__14849))?cljs.core.apply.call(null,cljs.core.hash_map,map__14849):map__14849);var opts = map__14849__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14847 = null;if (arguments.length > 1) {
  p__14847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14847);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14850){
var ports = cljs.core.first(arglist__14850);
var p__14847 = cljs.core.rest(arglist__14850);
return alts_BANG___delegate(ports,p__14847);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14858 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14858 = (function (ch,f,map_LT_,meta14859){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14859 = meta14859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14858.cljs$lang$type = true;
cljs.core.async.t14858.cljs$lang$ctorStr = "cljs.core.async/t14858";
cljs.core.async.t14858.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t14858");
});
cljs.core.async.t14858.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14858.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14861 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14861 = (function (fn1,_,meta14859,ch,f,map_LT_,meta14862){
this.fn1 = fn1;
this._ = _;
this.meta14859 = meta14859;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14862 = meta14862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14861.cljs$lang$type = true;
cljs.core.async.t14861.cljs$lang$ctorStr = "cljs.core.async/t14861";
cljs.core.async.t14861.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t14861");
});})(___$1))
;
cljs.core.async.t14861.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14861.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14851_SHARP_){return f1.call(null,(((p1__14851_SHARP_ == null))?null:self__.f.call(null,p1__14851_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14863){var self__ = this;
var _14863__$1 = this;return self__.meta14862;
});})(___$1))
;
cljs.core.async.t14861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14863,meta14862__$1){var self__ = this;
var _14863__$1 = this;return (new cljs.core.async.t14861(self__.fn1,self__._,self__.meta14859,self__.ch,self__.f,self__.map_LT_,meta14862__$1));
});})(___$1))
;
cljs.core.async.__GT_t14861 = ((function (___$1){
return (function __GT_t14861(fn1__$1,___$2,meta14859__$1,ch__$2,f__$2,map_LT___$2,meta14862){return (new cljs.core.async.t14861(fn1__$1,___$2,meta14859__$1,ch__$2,f__$2,map_LT___$2,meta14862));
});})(___$1))
;
}
return (new cljs.core.async.t14861(fn1,___$1,self__.meta14859,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7871__auto__ = ret;if(cljs.core.truth_(and__7871__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7871__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14858.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14858.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14860){var self__ = this;
var _14860__$1 = this;return self__.meta14859;
});
cljs.core.async.t14858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14860,meta14859__$1){var self__ = this;
var _14860__$1 = this;return (new cljs.core.async.t14858(self__.ch,self__.f,self__.map_LT_,meta14859__$1));
});
cljs.core.async.__GT_t14858 = (function __GT_t14858(ch__$1,f__$1,map_LT___$1,meta14859){return (new cljs.core.async.t14858(ch__$1,f__$1,map_LT___$1,meta14859));
});
}
return (new cljs.core.async.t14858(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14867 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14867 = (function (ch,f,map_GT_,meta14868){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14868 = meta14868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14867.cljs$lang$type = true;
cljs.core.async.t14867.cljs$lang$ctorStr = "cljs.core.async/t14867";
cljs.core.async.t14867.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t14867");
});
cljs.core.async.t14867.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14867.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14867.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14869){var self__ = this;
var _14869__$1 = this;return self__.meta14868;
});
cljs.core.async.t14867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14869,meta14868__$1){var self__ = this;
var _14869__$1 = this;return (new cljs.core.async.t14867(self__.ch,self__.f,self__.map_GT_,meta14868__$1));
});
cljs.core.async.__GT_t14867 = (function __GT_t14867(ch__$1,f__$1,map_GT___$1,meta14868){return (new cljs.core.async.t14867(ch__$1,f__$1,map_GT___$1,meta14868));
});
}
return (new cljs.core.async.t14867(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14873 = (function (ch,p,filter_GT_,meta14874){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14874 = meta14874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14873.cljs$lang$type = true;
cljs.core.async.t14873.cljs$lang$ctorStr = "cljs.core.async/t14873";
cljs.core.async.t14873.cljs$lang$ctorPrWriter = (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t14873");
});
cljs.core.async.t14873.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14873.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14873.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14873.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14875){var self__ = this;
var _14875__$1 = this;return self__.meta14874;
});
cljs.core.async.t14873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14875,meta14874__$1){var self__ = this;
var _14875__$1 = this;return (new cljs.core.async.t14873(self__.ch,self__.p,self__.filter_GT_,meta14874__$1));
});
cljs.core.async.__GT_t14873 = (function __GT_t14873(ch__$1,p__$1,filter_GT___$1,meta14874){return (new cljs.core.async.t14873(ch__$1,p__$1,filter_GT___$1,meta14874));
});
}
return (new cljs.core.async.t14873(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10402__auto___14958 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___14958,out){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___14958,out){
return (function (state_14937){var state_val_14938 = (state_14937[1]);if((state_val_14938 === 7))
{var inst_14933 = (state_14937[2]);var state_14937__$1 = state_14937;var statearr_14939_14959 = state_14937__$1;(statearr_14939_14959[2] = inst_14933);
(statearr_14939_14959[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 1))
{var state_14937__$1 = state_14937;var statearr_14940_14960 = state_14937__$1;(statearr_14940_14960[2] = null);
(statearr_14940_14960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 4))
{var inst_14919 = (state_14937[7]);var inst_14919__$1 = (state_14937[2]);var inst_14920 = (inst_14919__$1 == null);var state_14937__$1 = (function (){var statearr_14941 = state_14937;(statearr_14941[7] = inst_14919__$1);
return statearr_14941;
})();if(cljs.core.truth_(inst_14920))
{var statearr_14942_14961 = state_14937__$1;(statearr_14942_14961[1] = 5);
} else
{var statearr_14943_14962 = state_14937__$1;(statearr_14943_14962[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 6))
{var inst_14919 = (state_14937[7]);var inst_14924 = p.call(null,inst_14919);var state_14937__$1 = state_14937;if(cljs.core.truth_(inst_14924))
{var statearr_14944_14963 = state_14937__$1;(statearr_14944_14963[1] = 8);
} else
{var statearr_14945_14964 = state_14937__$1;(statearr_14945_14964[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 3))
{var inst_14935 = (state_14937[2]);var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14937__$1,inst_14935);
} else
{if((state_val_14938 === 2))
{var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14937__$1,4,ch);
} else
{if((state_val_14938 === 11))
{var inst_14927 = (state_14937[2]);var state_14937__$1 = state_14937;var statearr_14946_14965 = state_14937__$1;(statearr_14946_14965[2] = inst_14927);
(statearr_14946_14965[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 9))
{var state_14937__$1 = state_14937;var statearr_14947_14966 = state_14937__$1;(statearr_14947_14966[2] = null);
(statearr_14947_14966[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 5))
{var inst_14922 = cljs.core.async.close_BANG_.call(null,out);var state_14937__$1 = state_14937;var statearr_14948_14967 = state_14937__$1;(statearr_14948_14967[2] = inst_14922);
(statearr_14948_14967[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 10))
{var inst_14930 = (state_14937[2]);var state_14937__$1 = (function (){var statearr_14949 = state_14937;(statearr_14949[8] = inst_14930);
return statearr_14949;
})();var statearr_14950_14968 = state_14937__$1;(statearr_14950_14968[2] = null);
(statearr_14950_14968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14938 === 8))
{var inst_14919 = (state_14937[7]);var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14937__$1,11,out,inst_14919);
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
}
}
}
});})(c__10402__auto___14958,out))
;return ((function (switch__10338__auto__,c__10402__auto___14958,out){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_14954 = [null,null,null,null,null,null,null,null,null];(statearr_14954[0] = state_machine__10339__auto__);
(statearr_14954[1] = 1);
return statearr_14954;
});
var state_machine__10339__auto____1 = (function (state_14937){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_14937);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e14955){if((e14955 instanceof Object))
{var ex__10342__auto__ = e14955;var statearr_14956_14969 = state_14937;(statearr_14956_14969[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14970 = state_14937;
state_14937 = G__14970;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_14937){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_14937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___14958,out))
})();var state__10404__auto__ = (function (){var statearr_14957 = f__10403__auto__.call(null);(statearr_14957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___14958);
return statearr_14957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___14958,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10402__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto__){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto__){
return (function (state_15136){var state_val_15137 = (state_15136[1]);if((state_val_15137 === 7))
{var inst_15132 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15138_15179 = state_15136__$1;(statearr_15138_15179[2] = inst_15132);
(statearr_15138_15179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 20))
{var inst_15102 = (state_15136[7]);var inst_15113 = (state_15136[2]);var inst_15114 = cljs.core.next.call(null,inst_15102);var inst_15088 = inst_15114;var inst_15089 = null;var inst_15090 = 0;var inst_15091 = 0;var state_15136__$1 = (function (){var statearr_15139 = state_15136;(statearr_15139[8] = inst_15088);
(statearr_15139[9] = inst_15089);
(statearr_15139[10] = inst_15090);
(statearr_15139[11] = inst_15113);
(statearr_15139[12] = inst_15091);
return statearr_15139;
})();var statearr_15140_15180 = state_15136__$1;(statearr_15140_15180[2] = null);
(statearr_15140_15180[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 1))
{var state_15136__$1 = state_15136;var statearr_15141_15181 = state_15136__$1;(statearr_15141_15181[2] = null);
(statearr_15141_15181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 4))
{var inst_15077 = (state_15136[13]);var inst_15077__$1 = (state_15136[2]);var inst_15078 = (inst_15077__$1 == null);var state_15136__$1 = (function (){var statearr_15142 = state_15136;(statearr_15142[13] = inst_15077__$1);
return statearr_15142;
})();if(cljs.core.truth_(inst_15078))
{var statearr_15143_15182 = state_15136__$1;(statearr_15143_15182[1] = 5);
} else
{var statearr_15144_15183 = state_15136__$1;(statearr_15144_15183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 15))
{var state_15136__$1 = state_15136;var statearr_15148_15184 = state_15136__$1;(statearr_15148_15184[2] = null);
(statearr_15148_15184[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 21))
{var state_15136__$1 = state_15136;var statearr_15149_15185 = state_15136__$1;(statearr_15149_15185[2] = null);
(statearr_15149_15185[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 13))
{var inst_15088 = (state_15136[8]);var inst_15089 = (state_15136[9]);var inst_15090 = (state_15136[10]);var inst_15091 = (state_15136[12]);var inst_15098 = (state_15136[2]);var inst_15099 = (inst_15091 + 1);var tmp15145 = inst_15088;var tmp15146 = inst_15089;var tmp15147 = inst_15090;var inst_15088__$1 = tmp15145;var inst_15089__$1 = tmp15146;var inst_15090__$1 = tmp15147;var inst_15091__$1 = inst_15099;var state_15136__$1 = (function (){var statearr_15150 = state_15136;(statearr_15150[8] = inst_15088__$1);
(statearr_15150[9] = inst_15089__$1);
(statearr_15150[14] = inst_15098);
(statearr_15150[10] = inst_15090__$1);
(statearr_15150[12] = inst_15091__$1);
return statearr_15150;
})();var statearr_15151_15186 = state_15136__$1;(statearr_15151_15186[2] = null);
(statearr_15151_15186[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 22))
{var state_15136__$1 = state_15136;var statearr_15152_15187 = state_15136__$1;(statearr_15152_15187[2] = null);
(statearr_15152_15187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 6))
{var inst_15077 = (state_15136[13]);var inst_15086 = f.call(null,inst_15077);var inst_15087 = cljs.core.seq.call(null,inst_15086);var inst_15088 = inst_15087;var inst_15089 = null;var inst_15090 = 0;var inst_15091 = 0;var state_15136__$1 = (function (){var statearr_15153 = state_15136;(statearr_15153[8] = inst_15088);
(statearr_15153[9] = inst_15089);
(statearr_15153[10] = inst_15090);
(statearr_15153[12] = inst_15091);
return statearr_15153;
})();var statearr_15154_15188 = state_15136__$1;(statearr_15154_15188[2] = null);
(statearr_15154_15188[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 17))
{var inst_15102 = (state_15136[7]);var inst_15106 = cljs.core.chunk_first.call(null,inst_15102);var inst_15107 = cljs.core.chunk_rest.call(null,inst_15102);var inst_15108 = cljs.core.count.call(null,inst_15106);var inst_15088 = inst_15107;var inst_15089 = inst_15106;var inst_15090 = inst_15108;var inst_15091 = 0;var state_15136__$1 = (function (){var statearr_15155 = state_15136;(statearr_15155[8] = inst_15088);
(statearr_15155[9] = inst_15089);
(statearr_15155[10] = inst_15090);
(statearr_15155[12] = inst_15091);
return statearr_15155;
})();var statearr_15156_15189 = state_15136__$1;(statearr_15156_15189[2] = null);
(statearr_15156_15189[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 3))
{var inst_15134 = (state_15136[2]);var state_15136__$1 = state_15136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15136__$1,inst_15134);
} else
{if((state_val_15137 === 12))
{var inst_15122 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15157_15190 = state_15136__$1;(statearr_15157_15190[2] = inst_15122);
(statearr_15157_15190[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 2))
{var state_15136__$1 = state_15136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15136__$1,4,in$);
} else
{if((state_val_15137 === 23))
{var inst_15130 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15158_15191 = state_15136__$1;(statearr_15158_15191[2] = inst_15130);
(statearr_15158_15191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 19))
{var inst_15117 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15159_15192 = state_15136__$1;(statearr_15159_15192[2] = inst_15117);
(statearr_15159_15192[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 11))
{var inst_15102 = (state_15136[7]);var inst_15088 = (state_15136[8]);var inst_15102__$1 = cljs.core.seq.call(null,inst_15088);var state_15136__$1 = (function (){var statearr_15160 = state_15136;(statearr_15160[7] = inst_15102__$1);
return statearr_15160;
})();if(inst_15102__$1)
{var statearr_15161_15193 = state_15136__$1;(statearr_15161_15193[1] = 14);
} else
{var statearr_15162_15194 = state_15136__$1;(statearr_15162_15194[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 9))
{var inst_15124 = (state_15136[2]);var inst_15125 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15136__$1 = (function (){var statearr_15163 = state_15136;(statearr_15163[15] = inst_15124);
return statearr_15163;
})();if(cljs.core.truth_(inst_15125))
{var statearr_15164_15195 = state_15136__$1;(statearr_15164_15195[1] = 21);
} else
{var statearr_15165_15196 = state_15136__$1;(statearr_15165_15196[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 5))
{var inst_15080 = cljs.core.async.close_BANG_.call(null,out);var state_15136__$1 = state_15136;var statearr_15166_15197 = state_15136__$1;(statearr_15166_15197[2] = inst_15080);
(statearr_15166_15197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 14))
{var inst_15102 = (state_15136[7]);var inst_15104 = cljs.core.chunked_seq_QMARK_.call(null,inst_15102);var state_15136__$1 = state_15136;if(inst_15104)
{var statearr_15167_15198 = state_15136__$1;(statearr_15167_15198[1] = 17);
} else
{var statearr_15168_15199 = state_15136__$1;(statearr_15168_15199[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 16))
{var inst_15120 = (state_15136[2]);var state_15136__$1 = state_15136;var statearr_15169_15200 = state_15136__$1;(statearr_15169_15200[2] = inst_15120);
(statearr_15169_15200[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15137 === 10))
{var inst_15089 = (state_15136[9]);var inst_15091 = (state_15136[12]);var inst_15096 = cljs.core._nth.call(null,inst_15089,inst_15091);var state_15136__$1 = state_15136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15136__$1,13,out,inst_15096);
} else
{if((state_val_15137 === 18))
{var inst_15102 = (state_15136[7]);var inst_15111 = cljs.core.first.call(null,inst_15102);var state_15136__$1 = state_15136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15136__$1,20,out,inst_15111);
} else
{if((state_val_15137 === 8))
{var inst_15090 = (state_15136[10]);var inst_15091 = (state_15136[12]);var inst_15093 = (inst_15091 < inst_15090);var inst_15094 = inst_15093;var state_15136__$1 = state_15136;if(cljs.core.truth_(inst_15094))
{var statearr_15170_15201 = state_15136__$1;(statearr_15170_15201[1] = 10);
} else
{var statearr_15171_15202 = state_15136__$1;(statearr_15171_15202[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10402__auto__))
;return ((function (switch__10338__auto__,c__10402__auto__){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_15175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15175[0] = state_machine__10339__auto__);
(statearr_15175[1] = 1);
return statearr_15175;
});
var state_machine__10339__auto____1 = (function (state_15136){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_15136);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e15176){if((e15176 instanceof Object))
{var ex__10342__auto__ = e15176;var statearr_15177_15203 = state_15136;(statearr_15177_15203[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15204 = state_15136;
state_15136 = G__15204;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_15136){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_15136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto__))
})();var state__10404__auto__ = (function (){var statearr_15178 = f__10403__auto__.call(null);(statearr_15178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto__);
return statearr_15178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto__))
);
return c__10402__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10402__auto___15299 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___15299){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___15299){
return (function (state_15275){var state_val_15276 = (state_15275[1]);if((state_val_15276 === 7))
{var inst_15271 = (state_15275[2]);var state_15275__$1 = state_15275;var statearr_15277_15300 = state_15275__$1;(statearr_15277_15300[2] = inst_15271);
(statearr_15277_15300[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 1))
{var state_15275__$1 = state_15275;var statearr_15278_15301 = state_15275__$1;(statearr_15278_15301[2] = null);
(statearr_15278_15301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 4))
{var inst_15254 = (state_15275[7]);var inst_15254__$1 = (state_15275[2]);var inst_15255 = (inst_15254__$1 == null);var state_15275__$1 = (function (){var statearr_15279 = state_15275;(statearr_15279[7] = inst_15254__$1);
return statearr_15279;
})();if(cljs.core.truth_(inst_15255))
{var statearr_15280_15302 = state_15275__$1;(statearr_15280_15302[1] = 5);
} else
{var statearr_15281_15303 = state_15275__$1;(statearr_15281_15303[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 13))
{var state_15275__$1 = state_15275;var statearr_15282_15304 = state_15275__$1;(statearr_15282_15304[2] = null);
(statearr_15282_15304[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 6))
{var inst_15254 = (state_15275[7]);var state_15275__$1 = state_15275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15275__$1,11,to,inst_15254);
} else
{if((state_val_15276 === 3))
{var inst_15273 = (state_15275[2]);var state_15275__$1 = state_15275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15275__$1,inst_15273);
} else
{if((state_val_15276 === 12))
{var state_15275__$1 = state_15275;var statearr_15283_15305 = state_15275__$1;(statearr_15283_15305[2] = null);
(statearr_15283_15305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 2))
{var state_15275__$1 = state_15275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15275__$1,4,from);
} else
{if((state_val_15276 === 11))
{var inst_15264 = (state_15275[2]);var state_15275__$1 = state_15275;if(cljs.core.truth_(inst_15264))
{var statearr_15284_15306 = state_15275__$1;(statearr_15284_15306[1] = 12);
} else
{var statearr_15285_15307 = state_15275__$1;(statearr_15285_15307[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 9))
{var state_15275__$1 = state_15275;var statearr_15286_15308 = state_15275__$1;(statearr_15286_15308[2] = null);
(statearr_15286_15308[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 5))
{var state_15275__$1 = state_15275;if(cljs.core.truth_(close_QMARK_))
{var statearr_15287_15309 = state_15275__$1;(statearr_15287_15309[1] = 8);
} else
{var statearr_15288_15310 = state_15275__$1;(statearr_15288_15310[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 14))
{var inst_15269 = (state_15275[2]);var state_15275__$1 = state_15275;var statearr_15289_15311 = state_15275__$1;(statearr_15289_15311[2] = inst_15269);
(statearr_15289_15311[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 10))
{var inst_15261 = (state_15275[2]);var state_15275__$1 = state_15275;var statearr_15290_15312 = state_15275__$1;(statearr_15290_15312[2] = inst_15261);
(statearr_15290_15312[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15276 === 8))
{var inst_15258 = cljs.core.async.close_BANG_.call(null,to);var state_15275__$1 = state_15275;var statearr_15291_15313 = state_15275__$1;(statearr_15291_15313[2] = inst_15258);
(statearr_15291_15313[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
});})(c__10402__auto___15299))
;return ((function (switch__10338__auto__,c__10402__auto___15299){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_15295 = [null,null,null,null,null,null,null,null];(statearr_15295[0] = state_machine__10339__auto__);
(statearr_15295[1] = 1);
return statearr_15295;
});
var state_machine__10339__auto____1 = (function (state_15275){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_15275);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e15296){if((e15296 instanceof Object))
{var ex__10342__auto__ = e15296;var statearr_15297_15314 = state_15275;(statearr_15297_15314[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15315 = state_15275;
state_15275 = G__15315;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_15275){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_15275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___15299))
})();var state__10404__auto__ = (function (){var statearr_15298 = f__10403__auto__.call(null);(statearr_15298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___15299);
return statearr_15298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___15299))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10402__auto___15416 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___15416,tc,fc){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___15416,tc,fc){
return (function (state_15391){var state_val_15392 = (state_15391[1]);if((state_val_15392 === 7))
{var inst_15387 = (state_15391[2]);var state_15391__$1 = state_15391;var statearr_15393_15417 = state_15391__$1;(statearr_15393_15417[2] = inst_15387);
(statearr_15393_15417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 1))
{var state_15391__$1 = state_15391;var statearr_15394_15418 = state_15391__$1;(statearr_15394_15418[2] = null);
(statearr_15394_15418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 4))
{var inst_15368 = (state_15391[7]);var inst_15368__$1 = (state_15391[2]);var inst_15369 = (inst_15368__$1 == null);var state_15391__$1 = (function (){var statearr_15395 = state_15391;(statearr_15395[7] = inst_15368__$1);
return statearr_15395;
})();if(cljs.core.truth_(inst_15369))
{var statearr_15396_15419 = state_15391__$1;(statearr_15396_15419[1] = 5);
} else
{var statearr_15397_15420 = state_15391__$1;(statearr_15397_15420[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 13))
{var state_15391__$1 = state_15391;var statearr_15398_15421 = state_15391__$1;(statearr_15398_15421[2] = null);
(statearr_15398_15421[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 6))
{var inst_15368 = (state_15391[7]);var inst_15374 = p.call(null,inst_15368);var state_15391__$1 = state_15391;if(cljs.core.truth_(inst_15374))
{var statearr_15399_15422 = state_15391__$1;(statearr_15399_15422[1] = 9);
} else
{var statearr_15400_15423 = state_15391__$1;(statearr_15400_15423[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 3))
{var inst_15389 = (state_15391[2]);var state_15391__$1 = state_15391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15391__$1,inst_15389);
} else
{if((state_val_15392 === 12))
{var state_15391__$1 = state_15391;var statearr_15401_15424 = state_15391__$1;(statearr_15401_15424[2] = null);
(statearr_15401_15424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 2))
{var state_15391__$1 = state_15391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15391__$1,4,ch);
} else
{if((state_val_15392 === 11))
{var inst_15368 = (state_15391[7]);var inst_15378 = (state_15391[2]);var state_15391__$1 = state_15391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15391__$1,8,inst_15378,inst_15368);
} else
{if((state_val_15392 === 9))
{var state_15391__$1 = state_15391;var statearr_15402_15425 = state_15391__$1;(statearr_15402_15425[2] = tc);
(statearr_15402_15425[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 5))
{var inst_15371 = cljs.core.async.close_BANG_.call(null,tc);var inst_15372 = cljs.core.async.close_BANG_.call(null,fc);var state_15391__$1 = (function (){var statearr_15403 = state_15391;(statearr_15403[8] = inst_15371);
return statearr_15403;
})();var statearr_15404_15426 = state_15391__$1;(statearr_15404_15426[2] = inst_15372);
(statearr_15404_15426[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 14))
{var inst_15385 = (state_15391[2]);var state_15391__$1 = state_15391;var statearr_15405_15427 = state_15391__$1;(statearr_15405_15427[2] = inst_15385);
(statearr_15405_15427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 10))
{var state_15391__$1 = state_15391;var statearr_15406_15428 = state_15391__$1;(statearr_15406_15428[2] = fc);
(statearr_15406_15428[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15392 === 8))
{var inst_15380 = (state_15391[2]);var state_15391__$1 = state_15391;if(cljs.core.truth_(inst_15380))
{var statearr_15407_15429 = state_15391__$1;(statearr_15407_15429[1] = 12);
} else
{var statearr_15408_15430 = state_15391__$1;(statearr_15408_15430[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
});})(c__10402__auto___15416,tc,fc))
;return ((function (switch__10338__auto__,c__10402__auto___15416,tc,fc){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_15412 = [null,null,null,null,null,null,null,null,null];(statearr_15412[0] = state_machine__10339__auto__);
(statearr_15412[1] = 1);
return statearr_15412;
});
var state_machine__10339__auto____1 = (function (state_15391){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_15391);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e15413){if((e15413 instanceof Object))
{var ex__10342__auto__ = e15413;var statearr_15414_15431 = state_15391;(statearr_15414_15431[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15432 = state_15391;
state_15391 = G__15432;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_15391){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_15391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___15416,tc,fc))
})();var state__10404__auto__ = (function (){var statearr_15415 = f__10403__auto__.call(null);(statearr_15415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___15416);
return statearr_15415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___15416,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10402__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto__){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto__){
return (function (state_15479){var state_val_15480 = (state_15479[1]);if((state_val_15480 === 7))
{var inst_15475 = (state_15479[2]);var state_15479__$1 = state_15479;var statearr_15481_15497 = state_15479__$1;(statearr_15481_15497[2] = inst_15475);
(statearr_15481_15497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15480 === 6))
{var inst_15465 = (state_15479[7]);var inst_15468 = (state_15479[8]);var inst_15472 = f.call(null,inst_15465,inst_15468);var inst_15465__$1 = inst_15472;var state_15479__$1 = (function (){var statearr_15482 = state_15479;(statearr_15482[7] = inst_15465__$1);
return statearr_15482;
})();var statearr_15483_15498 = state_15479__$1;(statearr_15483_15498[2] = null);
(statearr_15483_15498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15480 === 5))
{var inst_15465 = (state_15479[7]);var state_15479__$1 = state_15479;var statearr_15484_15499 = state_15479__$1;(statearr_15484_15499[2] = inst_15465);
(statearr_15484_15499[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15480 === 4))
{var inst_15468 = (state_15479[8]);var inst_15468__$1 = (state_15479[2]);var inst_15469 = (inst_15468__$1 == null);var state_15479__$1 = (function (){var statearr_15485 = state_15479;(statearr_15485[8] = inst_15468__$1);
return statearr_15485;
})();if(cljs.core.truth_(inst_15469))
{var statearr_15486_15500 = state_15479__$1;(statearr_15486_15500[1] = 5);
} else
{var statearr_15487_15501 = state_15479__$1;(statearr_15487_15501[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15480 === 3))
{var inst_15477 = (state_15479[2]);var state_15479__$1 = state_15479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15479__$1,inst_15477);
} else
{if((state_val_15480 === 2))
{var state_15479__$1 = state_15479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15479__$1,4,ch);
} else
{if((state_val_15480 === 1))
{var inst_15465 = init;var state_15479__$1 = (function (){var statearr_15488 = state_15479;(statearr_15488[7] = inst_15465);
return statearr_15488;
})();var statearr_15489_15502 = state_15479__$1;(statearr_15489_15502[2] = null);
(statearr_15489_15502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10402__auto__))
;return ((function (switch__10338__auto__,c__10402__auto__){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_15493 = [null,null,null,null,null,null,null,null,null];(statearr_15493[0] = state_machine__10339__auto__);
(statearr_15493[1] = 1);
return statearr_15493;
});
var state_machine__10339__auto____1 = (function (state_15479){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_15479);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e15494){if((e15494 instanceof Object))
{var ex__10342__auto__ = e15494;var statearr_15495_15503 = state_15479;(statearr_15495_15503[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15504 = state_15479;
state_15479 = G__15504;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_15479){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_15479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto__))
})();var state__10404__auto__ = (function (){var statearr_15496 = f__10403__auto__.call(null);(statearr_15496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto__);
return statearr_15496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto__))
);
return c__10402__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10402__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto__){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto__){
return (function (state_15578){var state_val_15579 = (state_15578[1]);if((state_val_15579 === 7))
{var inst_15560 = (state_15578[2]);var state_15578__$1 = state_15578;var statearr_15580_15603 = state_15578__$1;(statearr_15580_15603[2] = inst_15560);
(statearr_15580_15603[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 1))
{var inst_15554 = cljs.core.seq.call(null,coll);var inst_15555 = inst_15554;var state_15578__$1 = (function (){var statearr_15581 = state_15578;(statearr_15581[7] = inst_15555);
return statearr_15581;
})();var statearr_15582_15604 = state_15578__$1;(statearr_15582_15604[2] = null);
(statearr_15582_15604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 4))
{var inst_15555 = (state_15578[7]);var inst_15558 = cljs.core.first.call(null,inst_15555);var state_15578__$1 = state_15578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15578__$1,7,ch,inst_15558);
} else
{if((state_val_15579 === 13))
{var inst_15572 = (state_15578[2]);var state_15578__$1 = state_15578;var statearr_15583_15605 = state_15578__$1;(statearr_15583_15605[2] = inst_15572);
(statearr_15583_15605[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 6))
{var inst_15563 = (state_15578[2]);var state_15578__$1 = state_15578;if(cljs.core.truth_(inst_15563))
{var statearr_15584_15606 = state_15578__$1;(statearr_15584_15606[1] = 8);
} else
{var statearr_15585_15607 = state_15578__$1;(statearr_15585_15607[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 3))
{var inst_15576 = (state_15578[2]);var state_15578__$1 = state_15578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15578__$1,inst_15576);
} else
{if((state_val_15579 === 12))
{var state_15578__$1 = state_15578;var statearr_15586_15608 = state_15578__$1;(statearr_15586_15608[2] = null);
(statearr_15586_15608[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 2))
{var inst_15555 = (state_15578[7]);var state_15578__$1 = state_15578;if(cljs.core.truth_(inst_15555))
{var statearr_15587_15609 = state_15578__$1;(statearr_15587_15609[1] = 4);
} else
{var statearr_15588_15610 = state_15578__$1;(statearr_15588_15610[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 11))
{var inst_15569 = cljs.core.async.close_BANG_.call(null,ch);var state_15578__$1 = state_15578;var statearr_15589_15611 = state_15578__$1;(statearr_15589_15611[2] = inst_15569);
(statearr_15589_15611[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 9))
{var state_15578__$1 = state_15578;if(cljs.core.truth_(close_QMARK_))
{var statearr_15590_15612 = state_15578__$1;(statearr_15590_15612[1] = 11);
} else
{var statearr_15591_15613 = state_15578__$1;(statearr_15591_15613[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 5))
{var inst_15555 = (state_15578[7]);var state_15578__$1 = state_15578;var statearr_15592_15614 = state_15578__$1;(statearr_15592_15614[2] = inst_15555);
(statearr_15592_15614[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 10))
{var inst_15574 = (state_15578[2]);var state_15578__$1 = state_15578;var statearr_15593_15615 = state_15578__$1;(statearr_15593_15615[2] = inst_15574);
(statearr_15593_15615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 8))
{var inst_15555 = (state_15578[7]);var inst_15565 = cljs.core.next.call(null,inst_15555);var inst_15555__$1 = inst_15565;var state_15578__$1 = (function (){var statearr_15594 = state_15578;(statearr_15594[7] = inst_15555__$1);
return statearr_15594;
})();var statearr_15595_15616 = state_15578__$1;(statearr_15595_15616[2] = null);
(statearr_15595_15616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
});})(c__10402__auto__))
;return ((function (switch__10338__auto__,c__10402__auto__){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_15599 = [null,null,null,null,null,null,null,null];(statearr_15599[0] = state_machine__10339__auto__);
(statearr_15599[1] = 1);
return statearr_15599;
});
var state_machine__10339__auto____1 = (function (state_15578){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_15578);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e15600){if((e15600 instanceof Object))
{var ex__10342__auto__ = e15600;var statearr_15601_15617 = state_15578;(statearr_15601_15617[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15618 = state_15578;
state_15578 = G__15618;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_15578){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_15578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto__))
})();var state__10404__auto__ = (function (){var statearr_15602 = f__10403__auto__.call(null);(statearr_15602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto__);
return statearr_15602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto__))
);
return c__10402__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15620 = {};return obj15620;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7871__auto__ = _;if(and__7871__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8510__auto__ = (((_ == null))?null:_);return (function (){var or__7883__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15622 = {};return obj15622;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15844 = (function (cs,ch,mult,meta15845){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15845 = meta15845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15844.cljs$lang$type = true;
cljs.core.async.t15844.cljs$lang$ctorStr = "cljs.core.async/t15844";
cljs.core.async.t15844.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t15844");
});})(cs))
;
cljs.core.async.t15844.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15844.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15844.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15844.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15844.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15846){var self__ = this;
var _15846__$1 = this;return self__.meta15845;
});})(cs))
;
cljs.core.async.t15844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15846,meta15845__$1){var self__ = this;
var _15846__$1 = this;return (new cljs.core.async.t15844(self__.cs,self__.ch,self__.mult,meta15845__$1));
});})(cs))
;
cljs.core.async.__GT_t15844 = ((function (cs){
return (function __GT_t15844(cs__$1,ch__$1,mult__$1,meta15845){return (new cljs.core.async.t15844(cs__$1,ch__$1,mult__$1,meta15845));
});})(cs))
;
}
return (new cljs.core.async.t15844(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10402__auto___16065 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___16065,cs,m,dchan,dctr,done){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___16065,cs,m,dchan,dctr,done){
return (function (state_15977){var state_val_15978 = (state_15977[1]);if((state_val_15978 === 7))
{var inst_15973 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_15979_16066 = state_15977__$1;(statearr_15979_16066[2] = inst_15973);
(statearr_15979_16066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 20))
{var inst_15878 = (state_15977[7]);var inst_15888 = cljs.core.first.call(null,inst_15878);var inst_15889 = cljs.core.nth.call(null,inst_15888,0,null);var inst_15890 = cljs.core.nth.call(null,inst_15888,1,null);var state_15977__$1 = (function (){var statearr_15980 = state_15977;(statearr_15980[8] = inst_15889);
return statearr_15980;
})();if(cljs.core.truth_(inst_15890))
{var statearr_15981_16067 = state_15977__$1;(statearr_15981_16067[1] = 22);
} else
{var statearr_15982_16068 = state_15977__$1;(statearr_15982_16068[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 27))
{var inst_15920 = (state_15977[9]);var inst_15918 = (state_15977[10]);var inst_15925 = (state_15977[11]);var inst_15849 = (state_15977[12]);var inst_15925__$1 = cljs.core._nth.call(null,inst_15918,inst_15920);var inst_15926 = cljs.core.async.put_BANG_.call(null,inst_15925__$1,inst_15849,done);var state_15977__$1 = (function (){var statearr_15983 = state_15977;(statearr_15983[11] = inst_15925__$1);
return statearr_15983;
})();if(cljs.core.truth_(inst_15926))
{var statearr_15984_16069 = state_15977__$1;(statearr_15984_16069[1] = 30);
} else
{var statearr_15985_16070 = state_15977__$1;(statearr_15985_16070[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 1))
{var state_15977__$1 = state_15977;var statearr_15986_16071 = state_15977__$1;(statearr_15986_16071[2] = null);
(statearr_15986_16071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 24))
{var inst_15878 = (state_15977[7]);var inst_15895 = (state_15977[2]);var inst_15896 = cljs.core.next.call(null,inst_15878);var inst_15858 = inst_15896;var inst_15859 = null;var inst_15860 = 0;var inst_15861 = 0;var state_15977__$1 = (function (){var statearr_15987 = state_15977;(statearr_15987[13] = inst_15858);
(statearr_15987[14] = inst_15861);
(statearr_15987[15] = inst_15859);
(statearr_15987[16] = inst_15860);
(statearr_15987[17] = inst_15895);
return statearr_15987;
})();var statearr_15988_16072 = state_15977__$1;(statearr_15988_16072[2] = null);
(statearr_15988_16072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 39))
{var state_15977__$1 = state_15977;var statearr_15992_16073 = state_15977__$1;(statearr_15992_16073[2] = null);
(statearr_15992_16073[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 4))
{var inst_15849 = (state_15977[12]);var inst_15849__$1 = (state_15977[2]);var inst_15850 = (inst_15849__$1 == null);var state_15977__$1 = (function (){var statearr_15993 = state_15977;(statearr_15993[12] = inst_15849__$1);
return statearr_15993;
})();if(cljs.core.truth_(inst_15850))
{var statearr_15994_16074 = state_15977__$1;(statearr_15994_16074[1] = 5);
} else
{var statearr_15995_16075 = state_15977__$1;(statearr_15995_16075[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 15))
{var inst_15858 = (state_15977[13]);var inst_15861 = (state_15977[14]);var inst_15859 = (state_15977[15]);var inst_15860 = (state_15977[16]);var inst_15874 = (state_15977[2]);var inst_15875 = (inst_15861 + 1);var tmp15989 = inst_15858;var tmp15990 = inst_15859;var tmp15991 = inst_15860;var inst_15858__$1 = tmp15989;var inst_15859__$1 = tmp15990;var inst_15860__$1 = tmp15991;var inst_15861__$1 = inst_15875;var state_15977__$1 = (function (){var statearr_15996 = state_15977;(statearr_15996[13] = inst_15858__$1);
(statearr_15996[14] = inst_15861__$1);
(statearr_15996[15] = inst_15859__$1);
(statearr_15996[16] = inst_15860__$1);
(statearr_15996[18] = inst_15874);
return statearr_15996;
})();var statearr_15997_16076 = state_15977__$1;(statearr_15997_16076[2] = null);
(statearr_15997_16076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 21))
{var inst_15899 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16001_16077 = state_15977__$1;(statearr_16001_16077[2] = inst_15899);
(statearr_16001_16077[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 31))
{var inst_15925 = (state_15977[11]);var inst_15929 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15930 = cljs.core.async.untap_STAR_.call(null,m,inst_15925);var state_15977__$1 = (function (){var statearr_16002 = state_15977;(statearr_16002[19] = inst_15929);
return statearr_16002;
})();var statearr_16003_16078 = state_15977__$1;(statearr_16003_16078[2] = inst_15930);
(statearr_16003_16078[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 32))
{var inst_15920 = (state_15977[9]);var inst_15919 = (state_15977[20]);var inst_15918 = (state_15977[10]);var inst_15917 = (state_15977[21]);var inst_15932 = (state_15977[2]);var inst_15933 = (inst_15920 + 1);var tmp15998 = inst_15919;var tmp15999 = inst_15918;var tmp16000 = inst_15917;var inst_15917__$1 = tmp16000;var inst_15918__$1 = tmp15999;var inst_15919__$1 = tmp15998;var inst_15920__$1 = inst_15933;var state_15977__$1 = (function (){var statearr_16004 = state_15977;(statearr_16004[9] = inst_15920__$1);
(statearr_16004[20] = inst_15919__$1);
(statearr_16004[10] = inst_15918__$1);
(statearr_16004[21] = inst_15917__$1);
(statearr_16004[22] = inst_15932);
return statearr_16004;
})();var statearr_16005_16079 = state_15977__$1;(statearr_16005_16079[2] = null);
(statearr_16005_16079[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 40))
{var inst_15945 = (state_15977[23]);var inst_15949 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15950 = cljs.core.async.untap_STAR_.call(null,m,inst_15945);var state_15977__$1 = (function (){var statearr_16006 = state_15977;(statearr_16006[24] = inst_15949);
return statearr_16006;
})();var statearr_16007_16080 = state_15977__$1;(statearr_16007_16080[2] = inst_15950);
(statearr_16007_16080[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 33))
{var inst_15936 = (state_15977[25]);var inst_15938 = cljs.core.chunked_seq_QMARK_.call(null,inst_15936);var state_15977__$1 = state_15977;if(inst_15938)
{var statearr_16008_16081 = state_15977__$1;(statearr_16008_16081[1] = 36);
} else
{var statearr_16009_16082 = state_15977__$1;(statearr_16009_16082[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 13))
{var inst_15868 = (state_15977[26]);var inst_15871 = cljs.core.async.close_BANG_.call(null,inst_15868);var state_15977__$1 = state_15977;var statearr_16010_16083 = state_15977__$1;(statearr_16010_16083[2] = inst_15871);
(statearr_16010_16083[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 22))
{var inst_15889 = (state_15977[8]);var inst_15892 = cljs.core.async.close_BANG_.call(null,inst_15889);var state_15977__$1 = state_15977;var statearr_16011_16084 = state_15977__$1;(statearr_16011_16084[2] = inst_15892);
(statearr_16011_16084[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 36))
{var inst_15936 = (state_15977[25]);var inst_15940 = cljs.core.chunk_first.call(null,inst_15936);var inst_15941 = cljs.core.chunk_rest.call(null,inst_15936);var inst_15942 = cljs.core.count.call(null,inst_15940);var inst_15917 = inst_15941;var inst_15918 = inst_15940;var inst_15919 = inst_15942;var inst_15920 = 0;var state_15977__$1 = (function (){var statearr_16012 = state_15977;(statearr_16012[9] = inst_15920);
(statearr_16012[20] = inst_15919);
(statearr_16012[10] = inst_15918);
(statearr_16012[21] = inst_15917);
return statearr_16012;
})();var statearr_16013_16085 = state_15977__$1;(statearr_16013_16085[2] = null);
(statearr_16013_16085[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 41))
{var inst_15936 = (state_15977[25]);var inst_15952 = (state_15977[2]);var inst_15953 = cljs.core.next.call(null,inst_15936);var inst_15917 = inst_15953;var inst_15918 = null;var inst_15919 = 0;var inst_15920 = 0;var state_15977__$1 = (function (){var statearr_16014 = state_15977;(statearr_16014[9] = inst_15920);
(statearr_16014[20] = inst_15919);
(statearr_16014[10] = inst_15918);
(statearr_16014[21] = inst_15917);
(statearr_16014[27] = inst_15952);
return statearr_16014;
})();var statearr_16015_16086 = state_15977__$1;(statearr_16015_16086[2] = null);
(statearr_16015_16086[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 43))
{var state_15977__$1 = state_15977;var statearr_16016_16087 = state_15977__$1;(statearr_16016_16087[2] = null);
(statearr_16016_16087[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 29))
{var inst_15961 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16017_16088 = state_15977__$1;(statearr_16017_16088[2] = inst_15961);
(statearr_16017_16088[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 44))
{var inst_15970 = (state_15977[2]);var state_15977__$1 = (function (){var statearr_16018 = state_15977;(statearr_16018[28] = inst_15970);
return statearr_16018;
})();var statearr_16019_16089 = state_15977__$1;(statearr_16019_16089[2] = null);
(statearr_16019_16089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 6))
{var inst_15909 = (state_15977[29]);var inst_15908 = cljs.core.deref.call(null,cs);var inst_15909__$1 = cljs.core.keys.call(null,inst_15908);var inst_15910 = cljs.core.count.call(null,inst_15909__$1);var inst_15911 = cljs.core.reset_BANG_.call(null,dctr,inst_15910);var inst_15916 = cljs.core.seq.call(null,inst_15909__$1);var inst_15917 = inst_15916;var inst_15918 = null;var inst_15919 = 0;var inst_15920 = 0;var state_15977__$1 = (function (){var statearr_16020 = state_15977;(statearr_16020[9] = inst_15920);
(statearr_16020[20] = inst_15919);
(statearr_16020[10] = inst_15918);
(statearr_16020[29] = inst_15909__$1);
(statearr_16020[21] = inst_15917);
(statearr_16020[30] = inst_15911);
return statearr_16020;
})();var statearr_16021_16090 = state_15977__$1;(statearr_16021_16090[2] = null);
(statearr_16021_16090[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 28))
{var inst_15917 = (state_15977[21]);var inst_15936 = (state_15977[25]);var inst_15936__$1 = cljs.core.seq.call(null,inst_15917);var state_15977__$1 = (function (){var statearr_16022 = state_15977;(statearr_16022[25] = inst_15936__$1);
return statearr_16022;
})();if(inst_15936__$1)
{var statearr_16023_16091 = state_15977__$1;(statearr_16023_16091[1] = 33);
} else
{var statearr_16024_16092 = state_15977__$1;(statearr_16024_16092[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 25))
{var inst_15920 = (state_15977[9]);var inst_15919 = (state_15977[20]);var inst_15922 = (inst_15920 < inst_15919);var inst_15923 = inst_15922;var state_15977__$1 = state_15977;if(cljs.core.truth_(inst_15923))
{var statearr_16025_16093 = state_15977__$1;(statearr_16025_16093[1] = 27);
} else
{var statearr_16026_16094 = state_15977__$1;(statearr_16026_16094[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 34))
{var state_15977__$1 = state_15977;var statearr_16027_16095 = state_15977__$1;(statearr_16027_16095[2] = null);
(statearr_16027_16095[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 17))
{var state_15977__$1 = state_15977;var statearr_16028_16096 = state_15977__$1;(statearr_16028_16096[2] = null);
(statearr_16028_16096[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 3))
{var inst_15975 = (state_15977[2]);var state_15977__$1 = state_15977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15977__$1,inst_15975);
} else
{if((state_val_15978 === 12))
{var inst_15904 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16029_16097 = state_15977__$1;(statearr_16029_16097[2] = inst_15904);
(statearr_16029_16097[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 2))
{var state_15977__$1 = state_15977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15977__$1,4,ch);
} else
{if((state_val_15978 === 23))
{var state_15977__$1 = state_15977;var statearr_16030_16098 = state_15977__$1;(statearr_16030_16098[2] = null);
(statearr_16030_16098[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 35))
{var inst_15959 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16031_16099 = state_15977__$1;(statearr_16031_16099[2] = inst_15959);
(statearr_16031_16099[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 19))
{var inst_15878 = (state_15977[7]);var inst_15882 = cljs.core.chunk_first.call(null,inst_15878);var inst_15883 = cljs.core.chunk_rest.call(null,inst_15878);var inst_15884 = cljs.core.count.call(null,inst_15882);var inst_15858 = inst_15883;var inst_15859 = inst_15882;var inst_15860 = inst_15884;var inst_15861 = 0;var state_15977__$1 = (function (){var statearr_16032 = state_15977;(statearr_16032[13] = inst_15858);
(statearr_16032[14] = inst_15861);
(statearr_16032[15] = inst_15859);
(statearr_16032[16] = inst_15860);
return statearr_16032;
})();var statearr_16033_16100 = state_15977__$1;(statearr_16033_16100[2] = null);
(statearr_16033_16100[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 11))
{var inst_15878 = (state_15977[7]);var inst_15858 = (state_15977[13]);var inst_15878__$1 = cljs.core.seq.call(null,inst_15858);var state_15977__$1 = (function (){var statearr_16034 = state_15977;(statearr_16034[7] = inst_15878__$1);
return statearr_16034;
})();if(inst_15878__$1)
{var statearr_16035_16101 = state_15977__$1;(statearr_16035_16101[1] = 16);
} else
{var statearr_16036_16102 = state_15977__$1;(statearr_16036_16102[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 9))
{var inst_15906 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16037_16103 = state_15977__$1;(statearr_16037_16103[2] = inst_15906);
(statearr_16037_16103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 5))
{var inst_15856 = cljs.core.deref.call(null,cs);var inst_15857 = cljs.core.seq.call(null,inst_15856);var inst_15858 = inst_15857;var inst_15859 = null;var inst_15860 = 0;var inst_15861 = 0;var state_15977__$1 = (function (){var statearr_16038 = state_15977;(statearr_16038[13] = inst_15858);
(statearr_16038[14] = inst_15861);
(statearr_16038[15] = inst_15859);
(statearr_16038[16] = inst_15860);
return statearr_16038;
})();var statearr_16039_16104 = state_15977__$1;(statearr_16039_16104[2] = null);
(statearr_16039_16104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 14))
{var state_15977__$1 = state_15977;var statearr_16040_16105 = state_15977__$1;(statearr_16040_16105[2] = null);
(statearr_16040_16105[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 45))
{var inst_15967 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16041_16106 = state_15977__$1;(statearr_16041_16106[2] = inst_15967);
(statearr_16041_16106[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 26))
{var inst_15909 = (state_15977[29]);var inst_15963 = (state_15977[2]);var inst_15964 = cljs.core.seq.call(null,inst_15909);var state_15977__$1 = (function (){var statearr_16042 = state_15977;(statearr_16042[31] = inst_15963);
return statearr_16042;
})();if(inst_15964)
{var statearr_16043_16107 = state_15977__$1;(statearr_16043_16107[1] = 42);
} else
{var statearr_16044_16108 = state_15977__$1;(statearr_16044_16108[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 16))
{var inst_15878 = (state_15977[7]);var inst_15880 = cljs.core.chunked_seq_QMARK_.call(null,inst_15878);var state_15977__$1 = state_15977;if(inst_15880)
{var statearr_16045_16109 = state_15977__$1;(statearr_16045_16109[1] = 19);
} else
{var statearr_16046_16110 = state_15977__$1;(statearr_16046_16110[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 38))
{var inst_15956 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16047_16111 = state_15977__$1;(statearr_16047_16111[2] = inst_15956);
(statearr_16047_16111[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 30))
{var state_15977__$1 = state_15977;var statearr_16048_16112 = state_15977__$1;(statearr_16048_16112[2] = null);
(statearr_16048_16112[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 10))
{var inst_15861 = (state_15977[14]);var inst_15859 = (state_15977[15]);var inst_15867 = cljs.core._nth.call(null,inst_15859,inst_15861);var inst_15868 = cljs.core.nth.call(null,inst_15867,0,null);var inst_15869 = cljs.core.nth.call(null,inst_15867,1,null);var state_15977__$1 = (function (){var statearr_16049 = state_15977;(statearr_16049[26] = inst_15868);
return statearr_16049;
})();if(cljs.core.truth_(inst_15869))
{var statearr_16050_16113 = state_15977__$1;(statearr_16050_16113[1] = 13);
} else
{var statearr_16051_16114 = state_15977__$1;(statearr_16051_16114[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 18))
{var inst_15902 = (state_15977[2]);var state_15977__$1 = state_15977;var statearr_16052_16115 = state_15977__$1;(statearr_16052_16115[2] = inst_15902);
(statearr_16052_16115[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 42))
{var state_15977__$1 = state_15977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15977__$1,45,dchan);
} else
{if((state_val_15978 === 37))
{var inst_15849 = (state_15977[12]);var inst_15945 = (state_15977[23]);var inst_15936 = (state_15977[25]);var inst_15945__$1 = cljs.core.first.call(null,inst_15936);var inst_15946 = cljs.core.async.put_BANG_.call(null,inst_15945__$1,inst_15849,done);var state_15977__$1 = (function (){var statearr_16053 = state_15977;(statearr_16053[23] = inst_15945__$1);
return statearr_16053;
})();if(cljs.core.truth_(inst_15946))
{var statearr_16054_16116 = state_15977__$1;(statearr_16054_16116[1] = 39);
} else
{var statearr_16055_16117 = state_15977__$1;(statearr_16055_16117[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15978 === 8))
{var inst_15861 = (state_15977[14]);var inst_15860 = (state_15977[16]);var inst_15863 = (inst_15861 < inst_15860);var inst_15864 = inst_15863;var state_15977__$1 = state_15977;if(cljs.core.truth_(inst_15864))
{var statearr_16056_16118 = state_15977__$1;(statearr_16056_16118[1] = 10);
} else
{var statearr_16057_16119 = state_15977__$1;(statearr_16057_16119[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10402__auto___16065,cs,m,dchan,dctr,done))
;return ((function (switch__10338__auto__,c__10402__auto___16065,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_16061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16061[0] = state_machine__10339__auto__);
(statearr_16061[1] = 1);
return statearr_16061;
});
var state_machine__10339__auto____1 = (function (state_15977){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_15977);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e16062){if((e16062 instanceof Object))
{var ex__10342__auto__ = e16062;var statearr_16063_16120 = state_15977;(statearr_16063_16120[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16121 = state_15977;
state_15977 = G__16121;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_15977){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_15977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___16065,cs,m,dchan,dctr,done))
})();var state__10404__auto__ = (function (){var statearr_16064 = f__10403__auto__.call(null);(statearr_16064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___16065);
return statearr_16064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___16065,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16123 = {};return obj16123;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7871__auto__ = m;if(and__7871__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8510__auto__ = (((m == null))?null:m);return (function (){var or__7883__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16243 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16243 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16244){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16244 = meta16244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16243.cljs$lang$type = true;
cljs.core.async.t16243.cljs$lang$ctorStr = "cljs.core.async/t16243";
cljs.core.async.t16243.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t16243");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16243.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16245){var self__ = this;
var _16245__$1 = this;return self__.meta16244;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16245,meta16244__$1){var self__ = this;
var _16245__$1 = this;return (new cljs.core.async.t16243(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16244__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16243 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16244){return (new cljs.core.async.t16243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16244));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16243(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10402__auto___16362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___16362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___16362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16315){var state_val_16316 = (state_16315[1]);if((state_val_16316 === 7))
{var inst_16259 = (state_16315[7]);var inst_16264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16259);var state_16315__$1 = state_16315;var statearr_16317_16363 = state_16315__$1;(statearr_16317_16363[2] = inst_16264);
(statearr_16317_16363[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 20))
{var inst_16274 = (state_16315[8]);var state_16315__$1 = state_16315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16315__$1,23,out,inst_16274);
} else
{if((state_val_16316 === 1))
{var inst_16249 = (state_16315[9]);var inst_16249__$1 = calc_state.call(null);var inst_16250 = cljs.core.seq_QMARK_.call(null,inst_16249__$1);var state_16315__$1 = (function (){var statearr_16318 = state_16315;(statearr_16318[9] = inst_16249__$1);
return statearr_16318;
})();if(inst_16250)
{var statearr_16319_16364 = state_16315__$1;(statearr_16319_16364[1] = 2);
} else
{var statearr_16320_16365 = state_16315__$1;(statearr_16320_16365[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 24))
{var inst_16267 = (state_16315[10]);var inst_16259 = inst_16267;var state_16315__$1 = (function (){var statearr_16321 = state_16315;(statearr_16321[7] = inst_16259);
return statearr_16321;
})();var statearr_16322_16366 = state_16315__$1;(statearr_16322_16366[2] = null);
(statearr_16322_16366[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 4))
{var inst_16249 = (state_16315[9]);var inst_16255 = (state_16315[2]);var inst_16256 = cljs.core.get.call(null,inst_16255,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16257 = cljs.core.get.call(null,inst_16255,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16258 = cljs.core.get.call(null,inst_16255,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16259 = inst_16249;var state_16315__$1 = (function (){var statearr_16323 = state_16315;(statearr_16323[7] = inst_16259);
(statearr_16323[11] = inst_16257);
(statearr_16323[12] = inst_16258);
(statearr_16323[13] = inst_16256);
return statearr_16323;
})();var statearr_16324_16367 = state_16315__$1;(statearr_16324_16367[2] = null);
(statearr_16324_16367[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 15))
{var state_16315__$1 = state_16315;var statearr_16325_16368 = state_16315__$1;(statearr_16325_16368[2] = null);
(statearr_16325_16368[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 21))
{var inst_16267 = (state_16315[10]);var inst_16259 = inst_16267;var state_16315__$1 = (function (){var statearr_16326 = state_16315;(statearr_16326[7] = inst_16259);
return statearr_16326;
})();var statearr_16327_16369 = state_16315__$1;(statearr_16327_16369[2] = null);
(statearr_16327_16369[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 13))
{var inst_16311 = (state_16315[2]);var state_16315__$1 = state_16315;var statearr_16328_16370 = state_16315__$1;(statearr_16328_16370[2] = inst_16311);
(statearr_16328_16370[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 22))
{var inst_16309 = (state_16315[2]);var state_16315__$1 = state_16315;var statearr_16329_16371 = state_16315__$1;(statearr_16329_16371[2] = inst_16309);
(statearr_16329_16371[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 6))
{var inst_16313 = (state_16315[2]);var state_16315__$1 = state_16315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16315__$1,inst_16313);
} else
{if((state_val_16316 === 25))
{var state_16315__$1 = state_16315;var statearr_16330_16372 = state_16315__$1;(statearr_16330_16372[2] = null);
(statearr_16330_16372[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 17))
{var inst_16289 = (state_16315[14]);var state_16315__$1 = state_16315;var statearr_16331_16373 = state_16315__$1;(statearr_16331_16373[2] = inst_16289);
(statearr_16331_16373[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 3))
{var inst_16249 = (state_16315[9]);var state_16315__$1 = state_16315;var statearr_16332_16374 = state_16315__$1;(statearr_16332_16374[2] = inst_16249);
(statearr_16332_16374[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 12))
{var inst_16289 = (state_16315[14]);var inst_16275 = (state_16315[15]);var inst_16270 = (state_16315[16]);var inst_16289__$1 = inst_16270.call(null,inst_16275);var state_16315__$1 = (function (){var statearr_16333 = state_16315;(statearr_16333[14] = inst_16289__$1);
return statearr_16333;
})();if(cljs.core.truth_(inst_16289__$1))
{var statearr_16334_16375 = state_16315__$1;(statearr_16334_16375[1] = 17);
} else
{var statearr_16335_16376 = state_16315__$1;(statearr_16335_16376[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 2))
{var inst_16249 = (state_16315[9]);var inst_16252 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16249);var state_16315__$1 = state_16315;var statearr_16336_16377 = state_16315__$1;(statearr_16336_16377[2] = inst_16252);
(statearr_16336_16377[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 23))
{var inst_16300 = (state_16315[2]);var state_16315__$1 = state_16315;if(cljs.core.truth_(inst_16300))
{var statearr_16337_16378 = state_16315__$1;(statearr_16337_16378[1] = 24);
} else
{var statearr_16338_16379 = state_16315__$1;(statearr_16338_16379[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 19))
{var inst_16297 = (state_16315[2]);var state_16315__$1 = state_16315;if(cljs.core.truth_(inst_16297))
{var statearr_16339_16380 = state_16315__$1;(statearr_16339_16380[1] = 20);
} else
{var statearr_16340_16381 = state_16315__$1;(statearr_16340_16381[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 11))
{var inst_16274 = (state_16315[8]);var inst_16280 = (inst_16274 == null);var state_16315__$1 = state_16315;if(cljs.core.truth_(inst_16280))
{var statearr_16341_16382 = state_16315__$1;(statearr_16341_16382[1] = 14);
} else
{var statearr_16342_16383 = state_16315__$1;(statearr_16342_16383[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 9))
{var inst_16267 = (state_16315[10]);var inst_16267__$1 = (state_16315[2]);var inst_16268 = cljs.core.get.call(null,inst_16267__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16269 = cljs.core.get.call(null,inst_16267__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16270 = cljs.core.get.call(null,inst_16267__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16315__$1 = (function (){var statearr_16343 = state_16315;(statearr_16343[10] = inst_16267__$1);
(statearr_16343[17] = inst_16269);
(statearr_16343[16] = inst_16270);
return statearr_16343;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16315__$1,10,inst_16268);
} else
{if((state_val_16316 === 5))
{var inst_16259 = (state_16315[7]);var inst_16262 = cljs.core.seq_QMARK_.call(null,inst_16259);var state_16315__$1 = state_16315;if(inst_16262)
{var statearr_16344_16384 = state_16315__$1;(statearr_16344_16384[1] = 7);
} else
{var statearr_16345_16385 = state_16315__$1;(statearr_16345_16385[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 14))
{var inst_16275 = (state_16315[15]);var inst_16282 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16275);var state_16315__$1 = state_16315;var statearr_16346_16386 = state_16315__$1;(statearr_16346_16386[2] = inst_16282);
(statearr_16346_16386[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 26))
{var inst_16305 = (state_16315[2]);var state_16315__$1 = state_16315;var statearr_16347_16387 = state_16315__$1;(statearr_16347_16387[2] = inst_16305);
(statearr_16347_16387[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 16))
{var inst_16285 = (state_16315[2]);var inst_16286 = calc_state.call(null);var inst_16259 = inst_16286;var state_16315__$1 = (function (){var statearr_16348 = state_16315;(statearr_16348[7] = inst_16259);
(statearr_16348[18] = inst_16285);
return statearr_16348;
})();var statearr_16349_16388 = state_16315__$1;(statearr_16349_16388[2] = null);
(statearr_16349_16388[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 10))
{var inst_16274 = (state_16315[8]);var inst_16275 = (state_16315[15]);var inst_16273 = (state_16315[2]);var inst_16274__$1 = cljs.core.nth.call(null,inst_16273,0,null);var inst_16275__$1 = cljs.core.nth.call(null,inst_16273,1,null);var inst_16276 = (inst_16274__$1 == null);var inst_16277 = cljs.core._EQ_.call(null,inst_16275__$1,change);var inst_16278 = (inst_16276) || (inst_16277);var state_16315__$1 = (function (){var statearr_16350 = state_16315;(statearr_16350[8] = inst_16274__$1);
(statearr_16350[15] = inst_16275__$1);
return statearr_16350;
})();if(cljs.core.truth_(inst_16278))
{var statearr_16351_16389 = state_16315__$1;(statearr_16351_16389[1] = 11);
} else
{var statearr_16352_16390 = state_16315__$1;(statearr_16352_16390[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 18))
{var inst_16269 = (state_16315[17]);var inst_16275 = (state_16315[15]);var inst_16270 = (state_16315[16]);var inst_16292 = cljs.core.empty_QMARK_.call(null,inst_16270);var inst_16293 = inst_16269.call(null,inst_16275);var inst_16294 = cljs.core.not.call(null,inst_16293);var inst_16295 = (inst_16292) && (inst_16294);var state_16315__$1 = state_16315;var statearr_16353_16391 = state_16315__$1;(statearr_16353_16391[2] = inst_16295);
(statearr_16353_16391[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 8))
{var inst_16259 = (state_16315[7]);var state_16315__$1 = state_16315;var statearr_16354_16392 = state_16315__$1;(statearr_16354_16392[2] = inst_16259);
(statearr_16354_16392[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10402__auto___16362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10338__auto__,c__10402__auto___16362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_16358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16358[0] = state_machine__10339__auto__);
(statearr_16358[1] = 1);
return statearr_16358;
});
var state_machine__10339__auto____1 = (function (state_16315){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_16315);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e16359){if((e16359 instanceof Object))
{var ex__10342__auto__ = e16359;var statearr_16360_16393 = state_16315;(statearr_16360_16393[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16394 = state_16315;
state_16315 = G__16394;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_16315){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_16315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___16362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10404__auto__ = (function (){var statearr_16361 = f__10403__auto__.call(null);(statearr_16361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___16362);
return statearr_16361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___16362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16396 = {};return obj16396;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7871__auto__ = p;if(and__7871__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7871__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8510__auto__ = (((p == null))?null:p);return (function (){var or__7883__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8510__auto__)]);if(or__7883__auto__)
{return or__7883__auto__;
} else
{var or__7883__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7883__auto____$1)
{return or__7883__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7883__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7883__auto__,mults){
return (function (p1__16397_SHARP_){if(cljs.core.truth_(p1__16397_SHARP_.call(null,topic)))
{return p1__16397_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16397_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7883__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16512 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16513){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16513 = meta16513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16512.cljs$lang$type = true;
cljs.core.async.t16512.cljs$lang$ctorStr = "cljs.core.async/t16512";
cljs.core.async.t16512.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8450__auto__,writer__8451__auto__,opt__8452__auto__){return cljs.core._write.call(null,writer__8451__auto__,"cljs.core.async/t16512");
});})(mults,ensure_mult))
;
cljs.core.async.t16512.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16512.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16512.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16512.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16514){var self__ = this;
var _16514__$1 = this;return self__.meta16513;
});})(mults,ensure_mult))
;
cljs.core.async.t16512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16514,meta16513__$1){var self__ = this;
var _16514__$1 = this;return (new cljs.core.async.t16512(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16513__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16512 = ((function (mults,ensure_mult){
return (function __GT_t16512(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16513){return (new cljs.core.async.t16512(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16513));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16512(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10402__auto___16626 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___16626,mults,ensure_mult,p){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___16626,mults,ensure_mult,p){
return (function (state_16582){var state_val_16583 = (state_16582[1]);if((state_val_16583 === 7))
{var inst_16578 = (state_16582[2]);var state_16582__$1 = state_16582;var statearr_16584_16627 = state_16582__$1;(statearr_16584_16627[2] = inst_16578);
(statearr_16584_16627[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 20))
{var state_16582__$1 = state_16582;var statearr_16585_16628 = state_16582__$1;(statearr_16585_16628[2] = null);
(statearr_16585_16628[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 1))
{var state_16582__$1 = state_16582;var statearr_16586_16629 = state_16582__$1;(statearr_16586_16629[2] = null);
(statearr_16586_16629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 4))
{var inst_16517 = (state_16582[7]);var inst_16517__$1 = (state_16582[2]);var inst_16518 = (inst_16517__$1 == null);var state_16582__$1 = (function (){var statearr_16587 = state_16582;(statearr_16587[7] = inst_16517__$1);
return statearr_16587;
})();if(cljs.core.truth_(inst_16518))
{var statearr_16588_16630 = state_16582__$1;(statearr_16588_16630[1] = 5);
} else
{var statearr_16589_16631 = state_16582__$1;(statearr_16589_16631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 15))
{var inst_16559 = (state_16582[2]);var state_16582__$1 = state_16582;var statearr_16590_16632 = state_16582__$1;(statearr_16590_16632[2] = inst_16559);
(statearr_16590_16632[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 21))
{var inst_16565 = (state_16582[8]);var inst_16573 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16565);var state_16582__$1 = state_16582;var statearr_16591_16633 = state_16582__$1;(statearr_16591_16633[2] = inst_16573);
(statearr_16591_16633[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 13))
{var inst_16541 = (state_16582[9]);var inst_16543 = cljs.core.chunked_seq_QMARK_.call(null,inst_16541);var state_16582__$1 = state_16582;if(inst_16543)
{var statearr_16592_16634 = state_16582__$1;(statearr_16592_16634[1] = 16);
} else
{var statearr_16593_16635 = state_16582__$1;(statearr_16593_16635[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 22))
{var inst_16575 = (state_16582[2]);var state_16582__$1 = (function (){var statearr_16594 = state_16582;(statearr_16594[10] = inst_16575);
return statearr_16594;
})();var statearr_16595_16636 = state_16582__$1;(statearr_16595_16636[2] = null);
(statearr_16595_16636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 6))
{var inst_16517 = (state_16582[7]);var inst_16565 = (state_16582[8]);var inst_16565__$1 = topic_fn.call(null,inst_16517);var inst_16566 = cljs.core.deref.call(null,mults);var inst_16567 = cljs.core.get.call(null,inst_16566,inst_16565__$1);var inst_16568 = cljs.core.async.muxch_STAR_.call(null,inst_16567);var state_16582__$1 = (function (){var statearr_16596 = state_16582;(statearr_16596[8] = inst_16565__$1);
return statearr_16596;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16582__$1,19,inst_16568,inst_16517);
} else
{if((state_val_16583 === 17))
{var inst_16541 = (state_16582[9]);var inst_16550 = cljs.core.first.call(null,inst_16541);var inst_16551 = cljs.core.async.muxch_STAR_.call(null,inst_16550);var inst_16552 = cljs.core.async.close_BANG_.call(null,inst_16551);var inst_16553 = cljs.core.next.call(null,inst_16541);var inst_16527 = inst_16553;var inst_16528 = null;var inst_16529 = 0;var inst_16530 = 0;var state_16582__$1 = (function (){var statearr_16597 = state_16582;(statearr_16597[11] = inst_16552);
(statearr_16597[12] = inst_16529);
(statearr_16597[13] = inst_16528);
(statearr_16597[14] = inst_16527);
(statearr_16597[15] = inst_16530);
return statearr_16597;
})();var statearr_16598_16637 = state_16582__$1;(statearr_16598_16637[2] = null);
(statearr_16598_16637[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 3))
{var inst_16580 = (state_16582[2]);var state_16582__$1 = state_16582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16582__$1,inst_16580);
} else
{if((state_val_16583 === 12))
{var inst_16561 = (state_16582[2]);var state_16582__$1 = state_16582;var statearr_16599_16638 = state_16582__$1;(statearr_16599_16638[2] = inst_16561);
(statearr_16599_16638[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 2))
{var state_16582__$1 = state_16582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16582__$1,4,ch);
} else
{if((state_val_16583 === 19))
{var inst_16570 = (state_16582[2]);var state_16582__$1 = state_16582;if(cljs.core.truth_(inst_16570))
{var statearr_16600_16639 = state_16582__$1;(statearr_16600_16639[1] = 20);
} else
{var statearr_16601_16640 = state_16582__$1;(statearr_16601_16640[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 11))
{var inst_16527 = (state_16582[14]);var inst_16541 = (state_16582[9]);var inst_16541__$1 = cljs.core.seq.call(null,inst_16527);var state_16582__$1 = (function (){var statearr_16602 = state_16582;(statearr_16602[9] = inst_16541__$1);
return statearr_16602;
})();if(inst_16541__$1)
{var statearr_16603_16641 = state_16582__$1;(statearr_16603_16641[1] = 13);
} else
{var statearr_16604_16642 = state_16582__$1;(statearr_16604_16642[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 9))
{var inst_16563 = (state_16582[2]);var state_16582__$1 = state_16582;var statearr_16605_16643 = state_16582__$1;(statearr_16605_16643[2] = inst_16563);
(statearr_16605_16643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 5))
{var inst_16524 = cljs.core.deref.call(null,mults);var inst_16525 = cljs.core.vals.call(null,inst_16524);var inst_16526 = cljs.core.seq.call(null,inst_16525);var inst_16527 = inst_16526;var inst_16528 = null;var inst_16529 = 0;var inst_16530 = 0;var state_16582__$1 = (function (){var statearr_16606 = state_16582;(statearr_16606[12] = inst_16529);
(statearr_16606[13] = inst_16528);
(statearr_16606[14] = inst_16527);
(statearr_16606[15] = inst_16530);
return statearr_16606;
})();var statearr_16607_16644 = state_16582__$1;(statearr_16607_16644[2] = null);
(statearr_16607_16644[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 14))
{var state_16582__$1 = state_16582;var statearr_16611_16645 = state_16582__$1;(statearr_16611_16645[2] = null);
(statearr_16611_16645[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 16))
{var inst_16541 = (state_16582[9]);var inst_16545 = cljs.core.chunk_first.call(null,inst_16541);var inst_16546 = cljs.core.chunk_rest.call(null,inst_16541);var inst_16547 = cljs.core.count.call(null,inst_16545);var inst_16527 = inst_16546;var inst_16528 = inst_16545;var inst_16529 = inst_16547;var inst_16530 = 0;var state_16582__$1 = (function (){var statearr_16612 = state_16582;(statearr_16612[12] = inst_16529);
(statearr_16612[13] = inst_16528);
(statearr_16612[14] = inst_16527);
(statearr_16612[15] = inst_16530);
return statearr_16612;
})();var statearr_16613_16646 = state_16582__$1;(statearr_16613_16646[2] = null);
(statearr_16613_16646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 10))
{var inst_16529 = (state_16582[12]);var inst_16528 = (state_16582[13]);var inst_16527 = (state_16582[14]);var inst_16530 = (state_16582[15]);var inst_16535 = cljs.core._nth.call(null,inst_16528,inst_16530);var inst_16536 = cljs.core.async.muxch_STAR_.call(null,inst_16535);var inst_16537 = cljs.core.async.close_BANG_.call(null,inst_16536);var inst_16538 = (inst_16530 + 1);var tmp16608 = inst_16529;var tmp16609 = inst_16528;var tmp16610 = inst_16527;var inst_16527__$1 = tmp16610;var inst_16528__$1 = tmp16609;var inst_16529__$1 = tmp16608;var inst_16530__$1 = inst_16538;var state_16582__$1 = (function (){var statearr_16614 = state_16582;(statearr_16614[12] = inst_16529__$1);
(statearr_16614[13] = inst_16528__$1);
(statearr_16614[14] = inst_16527__$1);
(statearr_16614[15] = inst_16530__$1);
(statearr_16614[16] = inst_16537);
return statearr_16614;
})();var statearr_16615_16647 = state_16582__$1;(statearr_16615_16647[2] = null);
(statearr_16615_16647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 18))
{var inst_16556 = (state_16582[2]);var state_16582__$1 = state_16582;var statearr_16616_16648 = state_16582__$1;(statearr_16616_16648[2] = inst_16556);
(statearr_16616_16648[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16583 === 8))
{var inst_16529 = (state_16582[12]);var inst_16530 = (state_16582[15]);var inst_16532 = (inst_16530 < inst_16529);var inst_16533 = inst_16532;var state_16582__$1 = state_16582;if(cljs.core.truth_(inst_16533))
{var statearr_16617_16649 = state_16582__$1;(statearr_16617_16649[1] = 10);
} else
{var statearr_16618_16650 = state_16582__$1;(statearr_16618_16650[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10402__auto___16626,mults,ensure_mult,p))
;return ((function (switch__10338__auto__,c__10402__auto___16626,mults,ensure_mult,p){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_16622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16622[0] = state_machine__10339__auto__);
(statearr_16622[1] = 1);
return statearr_16622;
});
var state_machine__10339__auto____1 = (function (state_16582){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_16582);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e16623){if((e16623 instanceof Object))
{var ex__10342__auto__ = e16623;var statearr_16624_16651 = state_16582;(statearr_16624_16651[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16652 = state_16582;
state_16582 = G__16652;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_16582){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_16582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___16626,mults,ensure_mult,p))
})();var state__10404__auto__ = (function (){var statearr_16625 = f__10403__auto__.call(null);(statearr_16625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___16626);
return statearr_16625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___16626,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10402__auto___16789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___16789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___16789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16759){var state_val_16760 = (state_16759[1]);if((state_val_16760 === 7))
{var state_16759__$1 = state_16759;var statearr_16761_16790 = state_16759__$1;(statearr_16761_16790[2] = null);
(statearr_16761_16790[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 1))
{var state_16759__$1 = state_16759;var statearr_16762_16791 = state_16759__$1;(statearr_16762_16791[2] = null);
(statearr_16762_16791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 4))
{var inst_16723 = (state_16759[7]);var inst_16725 = (inst_16723 < cnt);var state_16759__$1 = state_16759;if(cljs.core.truth_(inst_16725))
{var statearr_16763_16792 = state_16759__$1;(statearr_16763_16792[1] = 6);
} else
{var statearr_16764_16793 = state_16759__$1;(statearr_16764_16793[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 15))
{var inst_16755 = (state_16759[2]);var state_16759__$1 = state_16759;var statearr_16765_16794 = state_16759__$1;(statearr_16765_16794[2] = inst_16755);
(statearr_16765_16794[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 13))
{var inst_16748 = cljs.core.async.close_BANG_.call(null,out);var state_16759__$1 = state_16759;var statearr_16766_16795 = state_16759__$1;(statearr_16766_16795[2] = inst_16748);
(statearr_16766_16795[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 6))
{var state_16759__$1 = state_16759;var statearr_16767_16796 = state_16759__$1;(statearr_16767_16796[2] = null);
(statearr_16767_16796[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 3))
{var inst_16757 = (state_16759[2]);var state_16759__$1 = state_16759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16759__$1,inst_16757);
} else
{if((state_val_16760 === 12))
{var inst_16745 = (state_16759[8]);var inst_16745__$1 = (state_16759[2]);var inst_16746 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16745__$1);var state_16759__$1 = (function (){var statearr_16768 = state_16759;(statearr_16768[8] = inst_16745__$1);
return statearr_16768;
})();if(cljs.core.truth_(inst_16746))
{var statearr_16769_16797 = state_16759__$1;(statearr_16769_16797[1] = 13);
} else
{var statearr_16770_16798 = state_16759__$1;(statearr_16770_16798[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 2))
{var inst_16722 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16723 = 0;var state_16759__$1 = (function (){var statearr_16771 = state_16759;(statearr_16771[7] = inst_16723);
(statearr_16771[9] = inst_16722);
return statearr_16771;
})();var statearr_16772_16799 = state_16759__$1;(statearr_16772_16799[2] = null);
(statearr_16772_16799[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 11))
{var inst_16723 = (state_16759[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16759,10,Object,null,9);var inst_16732 = chs__$1.call(null,inst_16723);var inst_16733 = done.call(null,inst_16723);var inst_16734 = cljs.core.async.take_BANG_.call(null,inst_16732,inst_16733);var state_16759__$1 = state_16759;var statearr_16773_16800 = state_16759__$1;(statearr_16773_16800[2] = inst_16734);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16759__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 9))
{var inst_16723 = (state_16759[7]);var inst_16736 = (state_16759[2]);var inst_16737 = (inst_16723 + 1);var inst_16723__$1 = inst_16737;var state_16759__$1 = (function (){var statearr_16774 = state_16759;(statearr_16774[10] = inst_16736);
(statearr_16774[7] = inst_16723__$1);
return statearr_16774;
})();var statearr_16775_16801 = state_16759__$1;(statearr_16775_16801[2] = null);
(statearr_16775_16801[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 5))
{var inst_16743 = (state_16759[2]);var state_16759__$1 = (function (){var statearr_16776 = state_16759;(statearr_16776[11] = inst_16743);
return statearr_16776;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16759__$1,12,dchan);
} else
{if((state_val_16760 === 14))
{var inst_16745 = (state_16759[8]);var inst_16750 = cljs.core.apply.call(null,f,inst_16745);var state_16759__$1 = state_16759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16759__$1,16,out,inst_16750);
} else
{if((state_val_16760 === 16))
{var inst_16752 = (state_16759[2]);var state_16759__$1 = (function (){var statearr_16777 = state_16759;(statearr_16777[12] = inst_16752);
return statearr_16777;
})();var statearr_16778_16802 = state_16759__$1;(statearr_16778_16802[2] = null);
(statearr_16778_16802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 10))
{var inst_16727 = (state_16759[2]);var inst_16728 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16759__$1 = (function (){var statearr_16779 = state_16759;(statearr_16779[13] = inst_16727);
return statearr_16779;
})();var statearr_16780_16803 = state_16759__$1;(statearr_16780_16803[2] = inst_16728);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16759__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16760 === 8))
{var inst_16741 = (state_16759[2]);var state_16759__$1 = state_16759;var statearr_16781_16804 = state_16759__$1;(statearr_16781_16804[2] = inst_16741);
(statearr_16781_16804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
});})(c__10402__auto___16789,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10338__auto__,c__10402__auto___16789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_16785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16785[0] = state_machine__10339__auto__);
(statearr_16785[1] = 1);
return statearr_16785;
});
var state_machine__10339__auto____1 = (function (state_16759){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_16759);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e16786){if((e16786 instanceof Object))
{var ex__10342__auto__ = e16786;var statearr_16787_16805 = state_16759;(statearr_16787_16805[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16806 = state_16759;
state_16759 = G__16806;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_16759){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_16759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___16789,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10404__auto__ = (function (){var statearr_16788 = f__10403__auto__.call(null);(statearr_16788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___16789);
return statearr_16788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___16789,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10402__auto___16914 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___16914,out){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___16914,out){
return (function (state_16890){var state_val_16891 = (state_16890[1]);if((state_val_16891 === 7))
{var inst_16870 = (state_16890[7]);var inst_16869 = (state_16890[8]);var inst_16869__$1 = (state_16890[2]);var inst_16870__$1 = cljs.core.nth.call(null,inst_16869__$1,0,null);var inst_16871 = cljs.core.nth.call(null,inst_16869__$1,1,null);var inst_16872 = (inst_16870__$1 == null);var state_16890__$1 = (function (){var statearr_16892 = state_16890;(statearr_16892[9] = inst_16871);
(statearr_16892[7] = inst_16870__$1);
(statearr_16892[8] = inst_16869__$1);
return statearr_16892;
})();if(cljs.core.truth_(inst_16872))
{var statearr_16893_16915 = state_16890__$1;(statearr_16893_16915[1] = 8);
} else
{var statearr_16894_16916 = state_16890__$1;(statearr_16894_16916[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 1))
{var inst_16861 = cljs.core.vec.call(null,chs);var inst_16862 = inst_16861;var state_16890__$1 = (function (){var statearr_16895 = state_16890;(statearr_16895[10] = inst_16862);
return statearr_16895;
})();var statearr_16896_16917 = state_16890__$1;(statearr_16896_16917[2] = null);
(statearr_16896_16917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 4))
{var inst_16862 = (state_16890[10]);var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16890__$1,7,inst_16862);
} else
{if((state_val_16891 === 6))
{var inst_16886 = (state_16890[2]);var state_16890__$1 = state_16890;var statearr_16897_16918 = state_16890__$1;(statearr_16897_16918[2] = inst_16886);
(statearr_16897_16918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 3))
{var inst_16888 = (state_16890[2]);var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16890__$1,inst_16888);
} else
{if((state_val_16891 === 2))
{var inst_16862 = (state_16890[10]);var inst_16864 = cljs.core.count.call(null,inst_16862);var inst_16865 = (inst_16864 > 0);var state_16890__$1 = state_16890;if(cljs.core.truth_(inst_16865))
{var statearr_16899_16919 = state_16890__$1;(statearr_16899_16919[1] = 4);
} else
{var statearr_16900_16920 = state_16890__$1;(statearr_16900_16920[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 11))
{var inst_16862 = (state_16890[10]);var inst_16879 = (state_16890[2]);var tmp16898 = inst_16862;var inst_16862__$1 = tmp16898;var state_16890__$1 = (function (){var statearr_16901 = state_16890;(statearr_16901[10] = inst_16862__$1);
(statearr_16901[11] = inst_16879);
return statearr_16901;
})();var statearr_16902_16921 = state_16890__$1;(statearr_16902_16921[2] = null);
(statearr_16902_16921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 9))
{var inst_16870 = (state_16890[7]);var state_16890__$1 = state_16890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16890__$1,11,out,inst_16870);
} else
{if((state_val_16891 === 5))
{var inst_16884 = cljs.core.async.close_BANG_.call(null,out);var state_16890__$1 = state_16890;var statearr_16903_16922 = state_16890__$1;(statearr_16903_16922[2] = inst_16884);
(statearr_16903_16922[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 10))
{var inst_16882 = (state_16890[2]);var state_16890__$1 = state_16890;var statearr_16904_16923 = state_16890__$1;(statearr_16904_16923[2] = inst_16882);
(statearr_16904_16923[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16891 === 8))
{var inst_16862 = (state_16890[10]);var inst_16871 = (state_16890[9]);var inst_16870 = (state_16890[7]);var inst_16869 = (state_16890[8]);var inst_16874 = (function (){var c = inst_16871;var v = inst_16870;var vec__16867 = inst_16869;var cs = inst_16862;return ((function (c,v,vec__16867,cs,inst_16862,inst_16871,inst_16870,inst_16869,state_val_16891,c__10402__auto___16914,out){
return (function (p1__16807_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16807_SHARP_);
});
;})(c,v,vec__16867,cs,inst_16862,inst_16871,inst_16870,inst_16869,state_val_16891,c__10402__auto___16914,out))
})();var inst_16875 = cljs.core.filterv.call(null,inst_16874,inst_16862);var inst_16862__$1 = inst_16875;var state_16890__$1 = (function (){var statearr_16905 = state_16890;(statearr_16905[10] = inst_16862__$1);
return statearr_16905;
})();var statearr_16906_16924 = state_16890__$1;(statearr_16906_16924[2] = null);
(statearr_16906_16924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
});})(c__10402__auto___16914,out))
;return ((function (switch__10338__auto__,c__10402__auto___16914,out){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_16910 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16910[0] = state_machine__10339__auto__);
(statearr_16910[1] = 1);
return statearr_16910;
});
var state_machine__10339__auto____1 = (function (state_16890){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_16890);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e16911){if((e16911 instanceof Object))
{var ex__10342__auto__ = e16911;var statearr_16912_16925 = state_16890;(statearr_16912_16925[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16926 = state_16890;
state_16890 = G__16926;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___16914,out))
})();var state__10404__auto__ = (function (){var statearr_16913 = f__10403__auto__.call(null);(statearr_16913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___16914);
return statearr_16913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___16914,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10402__auto___17019 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___17019,out){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___17019,out){
return (function (state_16996){var state_val_16997 = (state_16996[1]);if((state_val_16997 === 7))
{var inst_16978 = (state_16996[7]);var inst_16978__$1 = (state_16996[2]);var inst_16979 = (inst_16978__$1 == null);var inst_16980 = cljs.core.not.call(null,inst_16979);var state_16996__$1 = (function (){var statearr_16998 = state_16996;(statearr_16998[7] = inst_16978__$1);
return statearr_16998;
})();if(inst_16980)
{var statearr_16999_17020 = state_16996__$1;(statearr_16999_17020[1] = 8);
} else
{var statearr_17000_17021 = state_16996__$1;(statearr_17000_17021[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 1))
{var inst_16973 = 0;var state_16996__$1 = (function (){var statearr_17001 = state_16996;(statearr_17001[8] = inst_16973);
return statearr_17001;
})();var statearr_17002_17022 = state_16996__$1;(statearr_17002_17022[2] = null);
(statearr_17002_17022[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 4))
{var state_16996__$1 = state_16996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16996__$1,7,ch);
} else
{if((state_val_16997 === 6))
{var inst_16991 = (state_16996[2]);var state_16996__$1 = state_16996;var statearr_17003_17023 = state_16996__$1;(statearr_17003_17023[2] = inst_16991);
(statearr_17003_17023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 3))
{var inst_16993 = (state_16996[2]);var inst_16994 = cljs.core.async.close_BANG_.call(null,out);var state_16996__$1 = (function (){var statearr_17004 = state_16996;(statearr_17004[9] = inst_16993);
return statearr_17004;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16996__$1,inst_16994);
} else
{if((state_val_16997 === 2))
{var inst_16973 = (state_16996[8]);var inst_16975 = (inst_16973 < n);var state_16996__$1 = state_16996;if(cljs.core.truth_(inst_16975))
{var statearr_17005_17024 = state_16996__$1;(statearr_17005_17024[1] = 4);
} else
{var statearr_17006_17025 = state_16996__$1;(statearr_17006_17025[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 11))
{var inst_16973 = (state_16996[8]);var inst_16983 = (state_16996[2]);var inst_16984 = (inst_16973 + 1);var inst_16973__$1 = inst_16984;var state_16996__$1 = (function (){var statearr_17007 = state_16996;(statearr_17007[8] = inst_16973__$1);
(statearr_17007[10] = inst_16983);
return statearr_17007;
})();var statearr_17008_17026 = state_16996__$1;(statearr_17008_17026[2] = null);
(statearr_17008_17026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 9))
{var state_16996__$1 = state_16996;var statearr_17009_17027 = state_16996__$1;(statearr_17009_17027[2] = null);
(statearr_17009_17027[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 5))
{var state_16996__$1 = state_16996;var statearr_17010_17028 = state_16996__$1;(statearr_17010_17028[2] = null);
(statearr_17010_17028[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 10))
{var inst_16988 = (state_16996[2]);var state_16996__$1 = state_16996;var statearr_17011_17029 = state_16996__$1;(statearr_17011_17029[2] = inst_16988);
(statearr_17011_17029[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16997 === 8))
{var inst_16978 = (state_16996[7]);var state_16996__$1 = state_16996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16996__$1,11,out,inst_16978);
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
}
}
}
});})(c__10402__auto___17019,out))
;return ((function (switch__10338__auto__,c__10402__auto___17019,out){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_17015 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17015[0] = state_machine__10339__auto__);
(statearr_17015[1] = 1);
return statearr_17015;
});
var state_machine__10339__auto____1 = (function (state_16996){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_16996);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e17016){if((e17016 instanceof Object))
{var ex__10342__auto__ = e17016;var statearr_17017_17030 = state_16996;(statearr_17017_17030[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17031 = state_16996;
state_16996 = G__17031;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_16996){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_16996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___17019,out))
})();var state__10404__auto__ = (function (){var statearr_17018 = f__10403__auto__.call(null);(statearr_17018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___17019);
return statearr_17018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___17019,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10402__auto___17128 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___17128,out){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___17128,out){
return (function (state_17103){var state_val_17104 = (state_17103[1]);if((state_val_17104 === 7))
{var inst_17098 = (state_17103[2]);var state_17103__$1 = state_17103;var statearr_17105_17129 = state_17103__$1;(statearr_17105_17129[2] = inst_17098);
(statearr_17105_17129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17104 === 1))
{var inst_17080 = null;var state_17103__$1 = (function (){var statearr_17106 = state_17103;(statearr_17106[7] = inst_17080);
return statearr_17106;
})();var statearr_17107_17130 = state_17103__$1;(statearr_17107_17130[2] = null);
(statearr_17107_17130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17104 === 4))
{var inst_17083 = (state_17103[8]);var inst_17083__$1 = (state_17103[2]);var inst_17084 = (inst_17083__$1 == null);var inst_17085 = cljs.core.not.call(null,inst_17084);var state_17103__$1 = (function (){var statearr_17108 = state_17103;(statearr_17108[8] = inst_17083__$1);
return statearr_17108;
})();if(inst_17085)
{var statearr_17109_17131 = state_17103__$1;(statearr_17109_17131[1] = 5);
} else
{var statearr_17110_17132 = state_17103__$1;(statearr_17110_17132[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17104 === 6))
{var state_17103__$1 = state_17103;var statearr_17111_17133 = state_17103__$1;(statearr_17111_17133[2] = null);
(statearr_17111_17133[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17104 === 3))
{var inst_17100 = (state_17103[2]);var inst_17101 = cljs.core.async.close_BANG_.call(null,out);var state_17103__$1 = (function (){var statearr_17112 = state_17103;(statearr_17112[9] = inst_17100);
return statearr_17112;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17103__$1,inst_17101);
} else
{if((state_val_17104 === 2))
{var state_17103__$1 = state_17103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17103__$1,4,ch);
} else
{if((state_val_17104 === 11))
{var inst_17083 = (state_17103[8]);var inst_17092 = (state_17103[2]);var inst_17080 = inst_17083;var state_17103__$1 = (function (){var statearr_17113 = state_17103;(statearr_17113[7] = inst_17080);
(statearr_17113[10] = inst_17092);
return statearr_17113;
})();var statearr_17114_17134 = state_17103__$1;(statearr_17114_17134[2] = null);
(statearr_17114_17134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17104 === 9))
{var inst_17083 = (state_17103[8]);var state_17103__$1 = state_17103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17103__$1,11,out,inst_17083);
} else
{if((state_val_17104 === 5))
{var inst_17080 = (state_17103[7]);var inst_17083 = (state_17103[8]);var inst_17087 = cljs.core._EQ_.call(null,inst_17083,inst_17080);var state_17103__$1 = state_17103;if(inst_17087)
{var statearr_17116_17135 = state_17103__$1;(statearr_17116_17135[1] = 8);
} else
{var statearr_17117_17136 = state_17103__$1;(statearr_17117_17136[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17104 === 10))
{var inst_17095 = (state_17103[2]);var state_17103__$1 = state_17103;var statearr_17118_17137 = state_17103__$1;(statearr_17118_17137[2] = inst_17095);
(statearr_17118_17137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17104 === 8))
{var inst_17080 = (state_17103[7]);var tmp17115 = inst_17080;var inst_17080__$1 = tmp17115;var state_17103__$1 = (function (){var statearr_17119 = state_17103;(statearr_17119[7] = inst_17080__$1);
return statearr_17119;
})();var statearr_17120_17138 = state_17103__$1;(statearr_17120_17138[2] = null);
(statearr_17120_17138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
});})(c__10402__auto___17128,out))
;return ((function (switch__10338__auto__,c__10402__auto___17128,out){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_17124 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17124[0] = state_machine__10339__auto__);
(statearr_17124[1] = 1);
return statearr_17124;
});
var state_machine__10339__auto____1 = (function (state_17103){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_17103);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e17125){if((e17125 instanceof Object))
{var ex__10342__auto__ = e17125;var statearr_17126_17139 = state_17103;(statearr_17126_17139[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17140 = state_17103;
state_17103 = G__17140;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_17103){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_17103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___17128,out))
})();var state__10404__auto__ = (function (){var statearr_17127 = f__10403__auto__.call(null);(statearr_17127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___17128);
return statearr_17127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___17128,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10402__auto___17275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___17275,out){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___17275,out){
return (function (state_17245){var state_val_17246 = (state_17245[1]);if((state_val_17246 === 7))
{var inst_17241 = (state_17245[2]);var state_17245__$1 = state_17245;var statearr_17247_17276 = state_17245__$1;(statearr_17247_17276[2] = inst_17241);
(statearr_17247_17276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 1))
{var inst_17208 = (new Array(n));var inst_17209 = inst_17208;var inst_17210 = 0;var state_17245__$1 = (function (){var statearr_17248 = state_17245;(statearr_17248[7] = inst_17209);
(statearr_17248[8] = inst_17210);
return statearr_17248;
})();var statearr_17249_17277 = state_17245__$1;(statearr_17249_17277[2] = null);
(statearr_17249_17277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 4))
{var inst_17213 = (state_17245[9]);var inst_17213__$1 = (state_17245[2]);var inst_17214 = (inst_17213__$1 == null);var inst_17215 = cljs.core.not.call(null,inst_17214);var state_17245__$1 = (function (){var statearr_17250 = state_17245;(statearr_17250[9] = inst_17213__$1);
return statearr_17250;
})();if(inst_17215)
{var statearr_17251_17278 = state_17245__$1;(statearr_17251_17278[1] = 5);
} else
{var statearr_17252_17279 = state_17245__$1;(statearr_17252_17279[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 15))
{var inst_17235 = (state_17245[2]);var state_17245__$1 = state_17245;var statearr_17253_17280 = state_17245__$1;(statearr_17253_17280[2] = inst_17235);
(statearr_17253_17280[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 13))
{var state_17245__$1 = state_17245;var statearr_17254_17281 = state_17245__$1;(statearr_17254_17281[2] = null);
(statearr_17254_17281[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 6))
{var inst_17210 = (state_17245[8]);var inst_17231 = (inst_17210 > 0);var state_17245__$1 = state_17245;if(cljs.core.truth_(inst_17231))
{var statearr_17255_17282 = state_17245__$1;(statearr_17255_17282[1] = 12);
} else
{var statearr_17256_17283 = state_17245__$1;(statearr_17256_17283[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 3))
{var inst_17243 = (state_17245[2]);var state_17245__$1 = state_17245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17245__$1,inst_17243);
} else
{if((state_val_17246 === 12))
{var inst_17209 = (state_17245[7]);var inst_17233 = cljs.core.vec.call(null,inst_17209);var state_17245__$1 = state_17245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17245__$1,15,out,inst_17233);
} else
{if((state_val_17246 === 2))
{var state_17245__$1 = state_17245;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17245__$1,4,ch);
} else
{if((state_val_17246 === 11))
{var inst_17225 = (state_17245[2]);var inst_17226 = (new Array(n));var inst_17209 = inst_17226;var inst_17210 = 0;var state_17245__$1 = (function (){var statearr_17257 = state_17245;(statearr_17257[7] = inst_17209);
(statearr_17257[10] = inst_17225);
(statearr_17257[8] = inst_17210);
return statearr_17257;
})();var statearr_17258_17284 = state_17245__$1;(statearr_17258_17284[2] = null);
(statearr_17258_17284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 9))
{var inst_17209 = (state_17245[7]);var inst_17223 = cljs.core.vec.call(null,inst_17209);var state_17245__$1 = state_17245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17245__$1,11,out,inst_17223);
} else
{if((state_val_17246 === 5))
{var inst_17218 = (state_17245[11]);var inst_17209 = (state_17245[7]);var inst_17210 = (state_17245[8]);var inst_17213 = (state_17245[9]);var inst_17217 = (inst_17209[inst_17210] = inst_17213);var inst_17218__$1 = (inst_17210 + 1);var inst_17219 = (inst_17218__$1 < n);var state_17245__$1 = (function (){var statearr_17259 = state_17245;(statearr_17259[11] = inst_17218__$1);
(statearr_17259[12] = inst_17217);
return statearr_17259;
})();if(cljs.core.truth_(inst_17219))
{var statearr_17260_17285 = state_17245__$1;(statearr_17260_17285[1] = 8);
} else
{var statearr_17261_17286 = state_17245__$1;(statearr_17261_17286[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 14))
{var inst_17238 = (state_17245[2]);var inst_17239 = cljs.core.async.close_BANG_.call(null,out);var state_17245__$1 = (function (){var statearr_17263 = state_17245;(statearr_17263[13] = inst_17238);
return statearr_17263;
})();var statearr_17264_17287 = state_17245__$1;(statearr_17264_17287[2] = inst_17239);
(statearr_17264_17287[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 10))
{var inst_17229 = (state_17245[2]);var state_17245__$1 = state_17245;var statearr_17265_17288 = state_17245__$1;(statearr_17265_17288[2] = inst_17229);
(statearr_17265_17288[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17246 === 8))
{var inst_17218 = (state_17245[11]);var inst_17209 = (state_17245[7]);var tmp17262 = inst_17209;var inst_17209__$1 = tmp17262;var inst_17210 = inst_17218;var state_17245__$1 = (function (){var statearr_17266 = state_17245;(statearr_17266[7] = inst_17209__$1);
(statearr_17266[8] = inst_17210);
return statearr_17266;
})();var statearr_17267_17289 = state_17245__$1;(statearr_17267_17289[2] = null);
(statearr_17267_17289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
});})(c__10402__auto___17275,out))
;return ((function (switch__10338__auto__,c__10402__auto___17275,out){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_17271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17271[0] = state_machine__10339__auto__);
(statearr_17271[1] = 1);
return statearr_17271;
});
var state_machine__10339__auto____1 = (function (state_17245){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_17245);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e17272){if((e17272 instanceof Object))
{var ex__10342__auto__ = e17272;var statearr_17273_17290 = state_17245;(statearr_17273_17290[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17291 = state_17245;
state_17245 = G__17291;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_17245){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_17245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___17275,out))
})();var state__10404__auto__ = (function (){var statearr_17274 = f__10403__auto__.call(null);(statearr_17274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___17275);
return statearr_17274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___17275,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10402__auto___17434 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10402__auto___17434,out){
return (function (){var f__10403__auto__ = (function (){var switch__10338__auto__ = ((function (c__10402__auto___17434,out){
return (function (state_17404){var state_val_17405 = (state_17404[1]);if((state_val_17405 === 7))
{var inst_17400 = (state_17404[2]);var state_17404__$1 = state_17404;var statearr_17406_17435 = state_17404__$1;(statearr_17406_17435[2] = inst_17400);
(statearr_17406_17435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 1))
{var inst_17363 = [];var inst_17364 = inst_17363;var inst_17365 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17404__$1 = (function (){var statearr_17407 = state_17404;(statearr_17407[7] = inst_17364);
(statearr_17407[8] = inst_17365);
return statearr_17407;
})();var statearr_17408_17436 = state_17404__$1;(statearr_17408_17436[2] = null);
(statearr_17408_17436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 4))
{var inst_17368 = (state_17404[9]);var inst_17368__$1 = (state_17404[2]);var inst_17369 = (inst_17368__$1 == null);var inst_17370 = cljs.core.not.call(null,inst_17369);var state_17404__$1 = (function (){var statearr_17409 = state_17404;(statearr_17409[9] = inst_17368__$1);
return statearr_17409;
})();if(inst_17370)
{var statearr_17410_17437 = state_17404__$1;(statearr_17410_17437[1] = 5);
} else
{var statearr_17411_17438 = state_17404__$1;(statearr_17411_17438[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 15))
{var inst_17394 = (state_17404[2]);var state_17404__$1 = state_17404;var statearr_17412_17439 = state_17404__$1;(statearr_17412_17439[2] = inst_17394);
(statearr_17412_17439[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 13))
{var state_17404__$1 = state_17404;var statearr_17413_17440 = state_17404__$1;(statearr_17413_17440[2] = null);
(statearr_17413_17440[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 6))
{var inst_17364 = (state_17404[7]);var inst_17389 = inst_17364.length;var inst_17390 = (inst_17389 > 0);var state_17404__$1 = state_17404;if(cljs.core.truth_(inst_17390))
{var statearr_17414_17441 = state_17404__$1;(statearr_17414_17441[1] = 12);
} else
{var statearr_17415_17442 = state_17404__$1;(statearr_17415_17442[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 3))
{var inst_17402 = (state_17404[2]);var state_17404__$1 = state_17404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17404__$1,inst_17402);
} else
{if((state_val_17405 === 12))
{var inst_17364 = (state_17404[7]);var inst_17392 = cljs.core.vec.call(null,inst_17364);var state_17404__$1 = state_17404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17404__$1,15,out,inst_17392);
} else
{if((state_val_17405 === 2))
{var state_17404__$1 = state_17404;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17404__$1,4,ch);
} else
{if((state_val_17405 === 11))
{var inst_17372 = (state_17404[10]);var inst_17368 = (state_17404[9]);var inst_17382 = (state_17404[2]);var inst_17383 = [];var inst_17384 = inst_17383.push(inst_17368);var inst_17364 = inst_17383;var inst_17365 = inst_17372;var state_17404__$1 = (function (){var statearr_17416 = state_17404;(statearr_17416[11] = inst_17384);
(statearr_17416[7] = inst_17364);
(statearr_17416[12] = inst_17382);
(statearr_17416[8] = inst_17365);
return statearr_17416;
})();var statearr_17417_17443 = state_17404__$1;(statearr_17417_17443[2] = null);
(statearr_17417_17443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 9))
{var inst_17364 = (state_17404[7]);var inst_17380 = cljs.core.vec.call(null,inst_17364);var state_17404__$1 = state_17404;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17404__$1,11,out,inst_17380);
} else
{if((state_val_17405 === 5))
{var inst_17372 = (state_17404[10]);var inst_17368 = (state_17404[9]);var inst_17365 = (state_17404[8]);var inst_17372__$1 = f.call(null,inst_17368);var inst_17373 = cljs.core._EQ_.call(null,inst_17372__$1,inst_17365);var inst_17374 = cljs.core.keyword_identical_QMARK_.call(null,inst_17365,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17375 = (inst_17373) || (inst_17374);var state_17404__$1 = (function (){var statearr_17418 = state_17404;(statearr_17418[10] = inst_17372__$1);
return statearr_17418;
})();if(cljs.core.truth_(inst_17375))
{var statearr_17419_17444 = state_17404__$1;(statearr_17419_17444[1] = 8);
} else
{var statearr_17420_17445 = state_17404__$1;(statearr_17420_17445[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 14))
{var inst_17397 = (state_17404[2]);var inst_17398 = cljs.core.async.close_BANG_.call(null,out);var state_17404__$1 = (function (){var statearr_17422 = state_17404;(statearr_17422[13] = inst_17397);
return statearr_17422;
})();var statearr_17423_17446 = state_17404__$1;(statearr_17423_17446[2] = inst_17398);
(statearr_17423_17446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 10))
{var inst_17387 = (state_17404[2]);var state_17404__$1 = state_17404;var statearr_17424_17447 = state_17404__$1;(statearr_17424_17447[2] = inst_17387);
(statearr_17424_17447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17405 === 8))
{var inst_17372 = (state_17404[10]);var inst_17364 = (state_17404[7]);var inst_17368 = (state_17404[9]);var inst_17377 = inst_17364.push(inst_17368);var tmp17421 = inst_17364;var inst_17364__$1 = tmp17421;var inst_17365 = inst_17372;var state_17404__$1 = (function (){var statearr_17425 = state_17404;(statearr_17425[14] = inst_17377);
(statearr_17425[7] = inst_17364__$1);
(statearr_17425[8] = inst_17365);
return statearr_17425;
})();var statearr_17426_17448 = state_17404__$1;(statearr_17426_17448[2] = null);
(statearr_17426_17448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
});})(c__10402__auto___17434,out))
;return ((function (switch__10338__auto__,c__10402__auto___17434,out){
return (function() {
var state_machine__10339__auto__ = null;
var state_machine__10339__auto____0 = (function (){var statearr_17430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17430[0] = state_machine__10339__auto__);
(statearr_17430[1] = 1);
return statearr_17430;
});
var state_machine__10339__auto____1 = (function (state_17404){while(true){
var ret_value__10340__auto__ = (function (){try{while(true){
var result__10341__auto__ = switch__10338__auto__.call(null,state_17404);if(cljs.core.keyword_identical_QMARK_.call(null,result__10341__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10341__auto__;
}
break;
}
}catch (e17431){if((e17431 instanceof Object))
{var ex__10342__auto__ = e17431;var statearr_17432_17449 = state_17404;(statearr_17432_17449[5] = ex__10342__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17404);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10340__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17450 = state_17404;
state_17404 = G__17450;
continue;
}
} else
{return ret_value__10340__auto__;
}
break;
}
});
state_machine__10339__auto__ = function(state_17404){
switch(arguments.length){
case 0:
return state_machine__10339__auto____0.call(this);
case 1:
return state_machine__10339__auto____1.call(this,state_17404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10339__auto____0;
state_machine__10339__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10339__auto____1;
return state_machine__10339__auto__;
})()
;})(switch__10338__auto__,c__10402__auto___17434,out))
})();var state__10404__auto__ = (function (){var statearr_17433 = f__10403__auto__.call(null);(statearr_17433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10402__auto___17434);
return statearr_17433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10404__auto__);
});})(c__10402__auto___17434,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map