// Compiled by ClojureScript 0.0-2202
goog.provide('d_tetris.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
d_tetris.core.speedup_factor = 0.5;
d_tetris.core.num_rows = 20;
d_tetris.core.num_cols = 10;
d_tetris.core.left = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null);
d_tetris.core.right = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null);
d_tetris.core.down = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null);
cljs.core.enable_console_print_BANG_.call(null);
d_tetris.core.a_row = cljs.core.vec.call(null,cljs.core.repeat.call(null,d_tetris.core.num_cols,null));
d_tetris.core.initial_board = cljs.core.vec.call(null,cljs.core.repeat.call(null,d_tetris.core.num_rows,d_tetris.core.a_row));
if(typeof d_tetris.core.board !== 'undefined')
{} else
{d_tetris.core.board = reagent.core.atom.call(null,null);
}
d_tetris.core.starting_location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,((d_tetris.core.num_cols / 2) | 0)], null);
d_tetris.core.pieces = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",1108448963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,2], null)], null),new cljs.core.Keyword(null,"color","color",1108746965),"aqua"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",1108448963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null),new cljs.core.Keyword(null,"color","color",1108746965),"yellow"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",1108448963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null),new cljs.core.Keyword(null,"color","color",1108746965),"blue"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",1108448963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null)], null),new cljs.core.Keyword(null,"color","color",1108746965),"orange"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",1108448963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null)], null),new cljs.core.Keyword(null,"color","color",1108746965),"purple"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",1108448963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null),new cljs.core.Keyword(null,"color","color",1108746965),"red"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",1108448963),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,-1], null)], null),new cljs.core.Keyword(null,"color","color",1108746965),"green"], null)], null);
d_tetris.core.coord_PLUS_ = (function coord_PLUS_(p__13375,p__13376){var vec__13379 = p__13375;var h = cljs.core.nth.call(null,vec__13379,0,null);var v = cljs.core.nth.call(null,vec__13379,1,null);var vec__13380 = p__13376;var h_delta = cljs.core.nth.call(null,vec__13380,0,null);var v_delta = cljs.core.nth.call(null,vec__13380,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(h + h_delta),(v + v_delta)], null);
});
/**
* clockwise
*/
d_tetris.core.rotate_delta = (function rotate_delta(p__13381){var vec__13383 = p__13381;var h_delta = cljs.core.nth.call(null,vec__13383,0,null);var v_delta = cljs.core.nth.call(null,vec__13383,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v_delta,(- h_delta)], null);
});
if(typeof d_tetris.core.player_location !== 'undefined')
{} else
{d_tetris.core.player_location = reagent.core.atom.call(null,null);
}
if(typeof d_tetris.core.next_piece !== 'undefined')
{} else
{d_tetris.core.next_piece = reagent.core.atom.call(null,null);
}
if(typeof d_tetris.core.current_piece !== 'undefined')
{} else
{d_tetris.core.current_piece = reagent.core.atom.call(null,null);
}
if(typeof d_tetris.core.score !== 'undefined')
{} else
{d_tetris.core.score = reagent.core.atom.call(null,0);
}
if(typeof d_tetris.core.high_score !== 'undefined')
{} else
{d_tetris.core.high_score = reagent.core.atom.call(null,0);
}
d_tetris.core.current_color = (function current_color(){return new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d_tetris.core.current_piece));
});
d_tetris.core.player_pieces = (function player_pieces(){return cljs.core.set.call(null,cljs.core.map.call(null,d_tetris.core.coord_PLUS_,cljs.core.repeat.call(null,cljs.core.deref.call(null,d_tetris.core.player_location)),new cljs.core.Keyword(null,"cells","cells",1108448963).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d_tetris.core.current_piece))));
});
d_tetris.core.valid_coord_QMARK_ = (function valid_coord_QMARK_(p__13384){var vec__13386 = p__13384;var h = cljs.core.nth.call(null,vec__13386,0,null);var v = cljs.core.nth.call(null,vec__13386,1,null);return (((d_tetris.core.num_rows > h)) && ((h > -1))) && (((d_tetris.core.num_cols > v)) && ((v > -1))) && (cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,d_tetris.core.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,v], null))));
});
d_tetris.core.can_move_QMARK_ = (function can_move_QMARK_(coord,delta){return d_tetris.core.valid_coord_QMARK_.call(null,d_tetris.core.coord_PLUS_.call(null,coord,delta));
});
d_tetris.core.try_move_player = (function try_move_player(delta){if(cljs.core.every_QMARK_.call(null,(function (p1__13387_SHARP_){return d_tetris.core.can_move_QMARK_.call(null,p1__13387_SHARP_,delta);
}),d_tetris.core.player_pieces.call(null)))
{return cljs.core.swap_BANG_.call(null,d_tetris.core.player_location,d_tetris.core.coord_PLUS_,delta);
} else
{return null;
}
});
d_tetris.core.new_player_piece_BANG_ = (function new_player_piece_BANG_(){cljs.core.reset_BANG_.call(null,d_tetris.core.player_location,d_tetris.core.starting_location);
cljs.core.reset_BANG_.call(null,d_tetris.core.current_piece,(function (){var or__7885__auto__ = cljs.core.deref.call(null,d_tetris.core.next_piece);if(cljs.core.truth_(or__7885__auto__))
{return or__7885__auto__;
} else
{return cljs.core.rand_nth.call(null,d_tetris.core.pieces);
}
})());
return cljs.core.reset_BANG_.call(null,d_tetris.core.next_piece,cljs.core.rand_nth.call(null,d_tetris.core.pieces));
});
d_tetris.core.rotate_player_BANG_ = (function rotate_player_BANG_(){var deltas = new cljs.core.Keyword(null,"cells","cells",1108448963).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d_tetris.core.current_piece));var rotated_ds = cljs.core.mapv.call(null,d_tetris.core.rotate_delta,deltas);var new_pieces = cljs.core.mapv.call(null,d_tetris.core.coord_PLUS_,cljs.core.repeat.call(null,cljs.core.deref.call(null,d_tetris.core.player_location)),rotated_ds);if(cljs.core.every_QMARK_.call(null,d_tetris.core.valid_coord_QMARK_,new_pieces))
{return cljs.core.swap_BANG_.call(null,d_tetris.core.current_piece,cljs.core.assoc,new cljs.core.Keyword(null,"cells","cells",1108448963),rotated_ds);
} else
{return null;
}
});
d_tetris.core.clear_completed_rows_BANG_ = (function clear_completed_rows_BANG_(){return cljs.core.swap_BANG_.call(null,d_tetris.core.board,(function (b){var b__$1 = cljs.core.remove.call(null,(function (p1__13388_SHARP_){return cljs.core.every_QMARK_.call(null,cljs.core.identity,p1__13388_SHARP_);
}),b);var num_completed = (d_tetris.core.num_rows - cljs.core.count.call(null,b__$1));cljs.core.swap_BANG_.call(null,d_tetris.core.score,cljs.core._PLUS_,num_completed);
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,num_completed,d_tetris.core.a_row),b__$1));
}));
});
d_tetris.core.next_turn_BANG_ = (function next_turn_BANG_(){var player_ps = d_tetris.core.player_pieces.call(null);var player_color = d_tetris.core.current_color.call(null);if(cljs.core.every_QMARK_.call(null,((function (player_ps,player_color){
return (function (p1__13389_SHARP_){return d_tetris.core.can_move_QMARK_.call(null,p1__13389_SHARP_,d_tetris.core.down);
});})(player_ps,player_color))
,player_ps))
{return cljs.core.swap_BANG_.call(null,d_tetris.core.player_location,d_tetris.core.coord_PLUS_,d_tetris.core.down);
} else
{d_tetris.core.new_player_piece_BANG_.call(null);
var seq__13394_13398 = cljs.core.seq.call(null,player_ps);var chunk__13395_13399 = null;var count__13396_13400 = 0;var i__13397_13401 = 0;while(true){
if((i__13397_13401 < count__13396_13400))
{var piece_13402 = cljs.core._nth.call(null,chunk__13395_13399,i__13397_13401);cljs.core.swap_BANG_.call(null,d_tetris.core.board,cljs.core.assoc_in,piece_13402,player_color);
{
var G__13403 = seq__13394_13398;
var G__13404 = chunk__13395_13399;
var G__13405 = count__13396_13400;
var G__13406 = (i__13397_13401 + 1);
seq__13394_13398 = G__13403;
chunk__13395_13399 = G__13404;
count__13396_13400 = G__13405;
i__13397_13401 = G__13406;
continue;
}
} else
{var temp__4126__auto___13407 = cljs.core.seq.call(null,seq__13394_13398);if(temp__4126__auto___13407)
{var seq__13394_13408__$1 = temp__4126__auto___13407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13394_13408__$1))
{var c__8633__auto___13409 = cljs.core.chunk_first.call(null,seq__13394_13408__$1);{
var G__13410 = cljs.core.chunk_rest.call(null,seq__13394_13408__$1);
var G__13411 = c__8633__auto___13409;
var G__13412 = cljs.core.count.call(null,c__8633__auto___13409);
var G__13413 = 0;
seq__13394_13398 = G__13410;
chunk__13395_13399 = G__13411;
count__13396_13400 = G__13412;
i__13397_13401 = G__13413;
continue;
}
} else
{var piece_13414 = cljs.core.first.call(null,seq__13394_13408__$1);cljs.core.swap_BANG_.call(null,d_tetris.core.board,cljs.core.assoc_in,piece_13414,player_color);
{
var G__13415 = cljs.core.next.call(null,seq__13394_13408__$1);
var G__13416 = null;
var G__13417 = 0;
var G__13418 = 0;
seq__13394_13398 = G__13415;
chunk__13395_13399 = G__13416;
count__13396_13400 = G__13417;
i__13397_13401 = G__13418;
continue;
}
}
} else
{}
}
break;
}
d_tetris.core.clear_completed_rows_BANG_.call(null);
d_tetris.core.set_timer_BANG_.call(null,Math.pow.call(null,d_tetris.core.speedup_factor,cljs.core.deref.call(null,d_tetris.core.score)));
if(!(cljs.core.every_QMARK_.call(null,d_tetris.core.valid_coord_QMARK_,d_tetris.core.player_pieces.call(null))))
{alert("Game over!");
return d_tetris.core.restart_BANG_.call(null);
} else
{return null;
}
}
});
d_tetris.core.starting_timer_time = 1000;
if(typeof d_tetris.core.timer !== 'undefined')
{} else
{d_tetris.core.timer = cljs.core.atom.call(null,null);
}
d_tetris.core.set_timer_BANG_ = (function set_timer_BANG_(ratio){return cljs.core.swap_BANG_.call(null,d_tetris.core.timer,(function (t){if(cljs.core.truth_(t))
{clearInterval(t);
} else
{}
return setInterval((function (){return d_tetris.core.next_turn_BANG_.call(null);
}),(ratio * d_tetris.core.starting_timer_time));
}));
});
d_tetris.core.restart_BANG_ = (function restart_BANG_(){d_tetris.core.set_timer_BANG_.call(null,1.0);
cljs.core.reset_BANG_.call(null,d_tetris.core.high_score,(function (){var x__8192__auto__ = cljs.core.deref.call(null,d_tetris.core.high_score);var y__8193__auto__ = cljs.core.deref.call(null,d_tetris.core.score);return ((x__8192__auto__ > y__8193__auto__) ? x__8192__auto__ : y__8193__auto__);
})());
cljs.core.reset_BANG_.call(null,d_tetris.core.score,0);
d_tetris.core.new_player_piece_BANG_.call(null);
return cljs.core.reset_BANG_.call(null,d_tetris.core.board,d_tetris.core.initial_board);
});
d_tetris.core.keypress_handler = (function keypress_handler(event){var key = (function (){var G__13421 = event.which;if(cljs.core._EQ_.call(null,32,G__13421))
{return new cljs.core.Keyword(null,"space","space",1123542136);
} else
{if(cljs.core._EQ_.call(null,100,G__13421))
{return new cljs.core.Keyword(null,"right","right",1122416014);
} else
{if(cljs.core._EQ_.call(null,97,G__13421))
{return new cljs.core.Keyword(null,"left","left",1017222009);
} else
{if(cljs.core._EQ_.call(null,115,G__13421))
{return new cljs.core.Keyword(null,"down","down",1016993812);
} else
{if(cljs.core._EQ_.call(null,119,G__13421))
{return new cljs.core.Keyword(null,"up","up",1013907981);
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
})();var G__13422 = key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"space","space",1123542136),G__13422))
{while(true){
if(cljs.core.truth_(d_tetris.core.try_move_player.call(null,d_tetris.core.down)))
{{
continue;
}
} else
{return null;
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__13422))
{return d_tetris.core.try_move_player.call(null,d_tetris.core.right);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__13422))
{return d_tetris.core.try_move_player.call(null,d_tetris.core.left);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__13422))
{return d_tetris.core.try_move_player.call(null,d_tetris.core.down);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__13422))
{return d_tetris.core.rotate_player_BANG_.call(null);
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
});
if(typeof d_tetris.core.keypress_watch !== 'undefined')
{} else
{d_tetris.core.keypress_watch = jQuery(document).keypress((function (p1__13423_SHARP_){return d_tetris.core.keypress_handler.call(null,p1__13423_SHARP_);
}));
}
d_tetris.core.elem_comp = (function elem_comp(row_num,col_num,e){var player_elem_QMARK_ = d_tetris.core.player_pieces.call(null).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_((function (){var or__7885__auto__ = e;if(cljs.core.truth_(or__7885__auto__))
{return or__7885__auto__;
} else
{return player_elem_QMARK_;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(function (){var or__7885__auto__ = e;if(cljs.core.truth_(or__7885__auto__))
{return or__7885__auto__;
} else
{return d_tetris.core.current_color.call(null);
}
})()], null)], null):null)], null);
});
d_tetris.core.board_comp = (function board_comp(){cljs.core.deref.call(null,d_tetris.core.player_location);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731)], null),(function (){var iter__8602__auto__ = (function iter__13464(s__13465){return (new cljs.core.LazySeq(null,(function (){var s__13465__$1 = s__13465;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13465__$1);if(temp__4126__auto__)
{var s__13465__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13465__$2))
{var c__8600__auto__ = cljs.core.chunk_first.call(null,s__13465__$2);var size__8601__auto__ = cljs.core.count.call(null,c__8600__auto__);var b__13467 = cljs.core.chunk_buffer.call(null,size__8601__auto__);if((function (){var i__13466 = 0;while(true){
if((i__13466 < size__8601__auto__))
{var vec__13486 = cljs.core._nth.call(null,c__8600__auto__,i__13466);var row_num = cljs.core.nth.call(null,vec__13486,0,null);var row = cljs.core.nth.call(null,vec__13486,1,null);cljs.core.chunk_append.call(null,b__13467,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8602__auto__ = ((function (i__13466,vec__13486,row_num,row,c__8600__auto__,size__8601__auto__,b__13467,s__13465__$2,temp__4126__auto__){
return (function iter__13487(s__13488){return (new cljs.core.LazySeq(null,((function (i__13466,vec__13486,row_num,row,c__8600__auto__,size__8601__auto__,b__13467,s__13465__$2,temp__4126__auto__){
return (function (){var s__13488__$1 = s__13488;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13488__$1);if(temp__4126__auto____$1)
{var s__13488__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13488__$2))
{var c__8600__auto____$1 = cljs.core.chunk_first.call(null,s__13488__$2);var size__8601__auto____$1 = cljs.core.count.call(null,c__8600__auto____$1);var b__13490 = cljs.core.chunk_buffer.call(null,size__8601__auto____$1);if((function (){var i__13489 = 0;while(true){
if((i__13489 < size__8601__auto____$1))
{var vec__13493 = cljs.core._nth.call(null,c__8600__auto____$1,i__13489);var col_num = cljs.core.nth.call(null,vec__13493,0,null);var elem = cljs.core.nth.call(null,vec__13493,1,null);cljs.core.chunk_append.call(null,b__13490,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null));
{
var G__13504 = (i__13489 + 1);
i__13489 = G__13504;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13490),iter__13487.call(null,cljs.core.chunk_rest.call(null,s__13488__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13490),null);
}
} else
{var vec__13494 = cljs.core.first.call(null,s__13488__$2);var col_num = cljs.core.nth.call(null,vec__13494,0,null);var elem = cljs.core.nth.call(null,vec__13494,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null),iter__13487.call(null,cljs.core.rest.call(null,s__13488__$2)));
}
} else
{return null;
}
break;
}
});})(i__13466,vec__13486,row_num,row,c__8600__auto__,size__8601__auto__,b__13467,s__13465__$2,temp__4126__auto__))
,null,null));
});})(i__13466,vec__13486,row_num,row,c__8600__auto__,size__8601__auto__,b__13467,s__13465__$2,temp__4126__auto__))
;return iter__8602__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),row));
})())));
{
var G__13505 = (i__13466 + 1);
i__13466 = G__13505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13467),iter__13464.call(null,cljs.core.chunk_rest.call(null,s__13465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13467),null);
}
} else
{var vec__13495 = cljs.core.first.call(null,s__13465__$2);var row_num = cljs.core.nth.call(null,vec__13495,0,null);var row = cljs.core.nth.call(null,vec__13495,1,null);return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8602__auto__ = ((function (vec__13495,row_num,row,s__13465__$2,temp__4126__auto__){
return (function iter__13496(s__13497){return (new cljs.core.LazySeq(null,((function (vec__13495,row_num,row,s__13465__$2,temp__4126__auto__){
return (function (){var s__13497__$1 = s__13497;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13497__$1);if(temp__4126__auto____$1)
{var s__13497__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13497__$2))
{var c__8600__auto__ = cljs.core.chunk_first.call(null,s__13497__$2);var size__8601__auto__ = cljs.core.count.call(null,c__8600__auto__);var b__13499 = cljs.core.chunk_buffer.call(null,size__8601__auto__);if((function (){var i__13498 = 0;while(true){
if((i__13498 < size__8601__auto__))
{var vec__13502 = cljs.core._nth.call(null,c__8600__auto__,i__13498);var col_num = cljs.core.nth.call(null,vec__13502,0,null);var elem = cljs.core.nth.call(null,vec__13502,1,null);cljs.core.chunk_append.call(null,b__13499,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null));
{
var G__13506 = (i__13498 + 1);
i__13498 = G__13506;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13499),iter__13496.call(null,cljs.core.chunk_rest.call(null,s__13497__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13499),null);
}
} else
{var vec__13503 = cljs.core.first.call(null,s__13497__$2);var col_num = cljs.core.nth.call(null,vec__13503,0,null);var elem = cljs.core.nth.call(null,vec__13503,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null),iter__13496.call(null,cljs.core.rest.call(null,s__13497__$2)));
}
} else
{return null;
}
break;
}
});})(vec__13495,row_num,row,s__13465__$2,temp__4126__auto__))
,null,null));
});})(vec__13495,row_num,row,s__13465__$2,temp__4126__auto__))
;return iter__8602__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),row));
})())),iter__13464.call(null,cljs.core.rest.call(null,s__13465__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8602__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.deref.call(null,d_tetris.core.board)));
})());
});
d_tetris.core.next_piece_preview_comp = (function next_piece_preview_comp(){var center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null);var map__13528 = cljs.core.deref.call(null,d_tetris.core.next_piece);var map__13528__$1 = ((cljs.core.seq_QMARK_.call(null,map__13528))?cljs.core.apply.call(null,cljs.core.hash_map,map__13528):map__13528);var color = cljs.core.get.call(null,map__13528__$1,new cljs.core.Keyword(null,"color","color",1108746965));var cells = cljs.core.get.call(null,map__13528__$1,new cljs.core.Keyword(null,"cells","cells",1108448963));var colored_cells = cljs.core.set.call(null,cljs.core.map.call(null,d_tetris.core.coord_PLUS_,cljs.core.repeat.call(null,center),cells));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"Preview:"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731)], null),(function (){var iter__8602__auto__ = ((function (center,map__13528,map__13528__$1,color,cells,colored_cells){
return (function iter__13529(s__13530){return (new cljs.core.LazySeq(null,((function (center,map__13528,map__13528__$1,color,cells,colored_cells){
return (function (){var s__13530__$1 = s__13530;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13530__$1);if(temp__4126__auto__)
{var s__13530__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13530__$2))
{var c__8600__auto__ = cljs.core.chunk_first.call(null,s__13530__$2);var size__8601__auto__ = cljs.core.count.call(null,c__8600__auto__);var b__13532 = cljs.core.chunk_buffer.call(null,size__8601__auto__);if((function (){var i__13531 = 0;while(true){
if((i__13531 < size__8601__auto__))
{var row_num = cljs.core._nth.call(null,c__8600__auto__,i__13531);cljs.core.chunk_append.call(null,b__13532,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8602__auto__ = ((function (i__13531,row_num,c__8600__auto__,size__8601__auto__,b__13532,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells){
return (function iter__13541(s__13542){return (new cljs.core.LazySeq(null,((function (i__13531,row_num,c__8600__auto__,size__8601__auto__,b__13532,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells){
return (function (){var s__13542__$1 = s__13542;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13542__$1);if(temp__4126__auto____$1)
{var s__13542__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13542__$2))
{var c__8600__auto____$1 = cljs.core.chunk_first.call(null,s__13542__$2);var size__8601__auto____$1 = cljs.core.count.call(null,c__8600__auto____$1);var b__13544 = cljs.core.chunk_buffer.call(null,size__8601__auto____$1);if((function (){var i__13543 = 0;while(true){
if((i__13543 < size__8601__auto____$1))
{var col_num = cljs.core._nth.call(null,c__8600__auto____$1,i__13543);cljs.core.chunk_append.call(null,b__13544,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null));
{
var G__13549 = (i__13543 + 1);
i__13543 = G__13549;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13544),iter__13541.call(null,cljs.core.chunk_rest.call(null,s__13542__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13544),null);
}
} else
{var col_num = cljs.core.first.call(null,s__13542__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null),iter__13541.call(null,cljs.core.rest.call(null,s__13542__$2)));
}
} else
{return null;
}
break;
}
});})(i__13531,row_num,c__8600__auto__,size__8601__auto__,b__13532,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells))
,null,null));
});})(i__13531,row_num,c__8600__auto__,size__8601__auto__,b__13532,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells))
;return iter__8602__auto__.call(null,cljs.core.range.call(null,4));
})())));
{
var G__13550 = (i__13531 + 1);
i__13531 = G__13550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13532),iter__13529.call(null,cljs.core.chunk_rest.call(null,s__13530__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13532),null);
}
} else
{var row_num = cljs.core.first.call(null,s__13530__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8602__auto__ = ((function (row_num,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells){
return (function iter__13545(s__13546){return (new cljs.core.LazySeq(null,((function (row_num,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells){
return (function (){var s__13546__$1 = s__13546;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13546__$1);if(temp__4126__auto____$1)
{var s__13546__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13546__$2))
{var c__8600__auto__ = cljs.core.chunk_first.call(null,s__13546__$2);var size__8601__auto__ = cljs.core.count.call(null,c__8600__auto__);var b__13548 = cljs.core.chunk_buffer.call(null,size__8601__auto__);if((function (){var i__13547 = 0;while(true){
if((i__13547 < size__8601__auto__))
{var col_num = cljs.core._nth.call(null,c__8600__auto__,i__13547);cljs.core.chunk_append.call(null,b__13548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null));
{
var G__13551 = (i__13547 + 1);
i__13547 = G__13551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13548),iter__13545.call(null,cljs.core.chunk_rest.call(null,s__13546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13548),null);
}
} else
{var col_num = cljs.core.first.call(null,s__13546__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null),iter__13545.call(null,cljs.core.rest.call(null,s__13546__$2)));
}
} else
{return null;
}
break;
}
});})(row_num,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells))
,null,null));
});})(row_num,s__13530__$2,temp__4126__auto__,center,map__13528,map__13528__$1,color,cells,colored_cells))
;return iter__8602__auto__.call(null,cljs.core.range.call(null,4));
})())),iter__13529.call(null,cljs.core.rest.call(null,s__13530__$2)));
}
} else
{return null;
}
break;
}
});})(center,map__13528,map__13528__$1,color,cells,colored_cells))
,null,null));
});})(center,map__13528,map__13528__$1,color,cells,colored_cells))
;return iter__8602__auto__.call(null,cljs.core.range.call(null,2));
})())], null);
});
d_tetris.core.score_comp = (function score_comp(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"High score:",cljs.core.deref.call(null,d_tetris.core.high_score)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"Your score:",cljs.core.deref.call(null,d_tetris.core.score)], null)], null);
});
d_tetris.core.other_data_comp = (function other_data_comp(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.next_piece_preview_comp], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.score_comp], null)], null);
});
d_tetris.core.tetris_comp = (function tetris_comp(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Tetris!"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",1124231110)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.board_comp], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.other_data_comp], null)], null)], null)], null)], null)], null);
});
if(typeof d_tetris.core.__placeholder !== 'undefined')
{} else
{d_tetris.core.__placeholder = d_tetris.core.restart_BANG_.call(null);
}
d_tetris.core.setup = (function setup(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.tetris_comp], null),document.getElementById("main-area"));
});
d_tetris.core.setup.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return d_tetris.core.setup.call(null);
}));

//# sourceMappingURL=core.js.map