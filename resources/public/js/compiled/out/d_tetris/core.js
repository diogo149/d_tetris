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
d_tetris.core.coord_PLUS_ = (function coord_PLUS_(p__13018,p__13019){var vec__13022 = p__13018;var h = cljs.core.nth.call(null,vec__13022,0,null);var v = cljs.core.nth.call(null,vec__13022,1,null);var vec__13023 = p__13019;var h_delta = cljs.core.nth.call(null,vec__13023,0,null);var v_delta = cljs.core.nth.call(null,vec__13023,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(h + h_delta),(v + v_delta)], null);
});
/**
* clockwise
*/
d_tetris.core.rotate_delta = (function rotate_delta(p__13024){var vec__13026 = p__13024;var h_delta = cljs.core.nth.call(null,vec__13026,0,null);var v_delta = cljs.core.nth.call(null,vec__13026,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v_delta,(- h_delta)], null);
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
d_tetris.core.valid_coord_QMARK_ = (function valid_coord_QMARK_(p__13027){var vec__13029 = p__13027;var h = cljs.core.nth.call(null,vec__13029,0,null);var v = cljs.core.nth.call(null,vec__13029,1,null);return (((d_tetris.core.num_rows > h)) && ((h > -1))) && (((d_tetris.core.num_cols > v)) && ((v > -1))) && (cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,d_tetris.core.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,v], null))));
});
d_tetris.core.can_move_QMARK_ = (function can_move_QMARK_(coord,delta){return d_tetris.core.valid_coord_QMARK_.call(null,d_tetris.core.coord_PLUS_.call(null,coord,delta));
});
d_tetris.core.try_move_player = (function try_move_player(delta){if(cljs.core.every_QMARK_.call(null,(function (p1__13030_SHARP_){return d_tetris.core.can_move_QMARK_.call(null,p1__13030_SHARP_,delta);
}),d_tetris.core.player_pieces.call(null)))
{return cljs.core.swap_BANG_.call(null,d_tetris.core.player_location,d_tetris.core.coord_PLUS_,delta);
} else
{return null;
}
});
d_tetris.core.new_player_piece_BANG_ = (function new_player_piece_BANG_(){cljs.core.reset_BANG_.call(null,d_tetris.core.player_location,d_tetris.core.starting_location);
cljs.core.reset_BANG_.call(null,d_tetris.core.current_piece,(function (){var or__7883__auto__ = cljs.core.deref.call(null,d_tetris.core.next_piece);if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
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
d_tetris.core.clear_completed_rows_BANG_ = (function clear_completed_rows_BANG_(){return cljs.core.swap_BANG_.call(null,d_tetris.core.board,(function (b){var b__$1 = cljs.core.remove.call(null,(function (p1__13031_SHARP_){return cljs.core.every_QMARK_.call(null,cljs.core.identity,p1__13031_SHARP_);
}),b);var num_completed = (d_tetris.core.num_rows - cljs.core.count.call(null,b__$1));cljs.core.swap_BANG_.call(null,d_tetris.core.score,cljs.core._PLUS_,num_completed);
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,num_completed,d_tetris.core.a_row),b__$1));
}));
});
d_tetris.core.next_turn_BANG_ = (function next_turn_BANG_(){var player_ps = d_tetris.core.player_pieces.call(null);var player_color = d_tetris.core.current_color.call(null);if(cljs.core.every_QMARK_.call(null,((function (player_ps,player_color){
return (function (p1__13032_SHARP_){return d_tetris.core.can_move_QMARK_.call(null,p1__13032_SHARP_,d_tetris.core.down);
});})(player_ps,player_color))
,player_ps))
{return cljs.core.swap_BANG_.call(null,d_tetris.core.player_location,d_tetris.core.coord_PLUS_,d_tetris.core.down);
} else
{d_tetris.core.new_player_piece_BANG_.call(null);
var seq__13037_13041 = cljs.core.seq.call(null,player_ps);var chunk__13038_13042 = null;var count__13039_13043 = 0;var i__13040_13044 = 0;while(true){
if((i__13040_13044 < count__13039_13043))
{var piece_13045 = cljs.core._nth.call(null,chunk__13038_13042,i__13040_13044);cljs.core.swap_BANG_.call(null,d_tetris.core.board,cljs.core.assoc_in,piece_13045,player_color);
{
var G__13046 = seq__13037_13041;
var G__13047 = chunk__13038_13042;
var G__13048 = count__13039_13043;
var G__13049 = (i__13040_13044 + 1);
seq__13037_13041 = G__13046;
chunk__13038_13042 = G__13047;
count__13039_13043 = G__13048;
i__13040_13044 = G__13049;
continue;
}
} else
{var temp__4126__auto___13050 = cljs.core.seq.call(null,seq__13037_13041);if(temp__4126__auto___13050)
{var seq__13037_13051__$1 = temp__4126__auto___13050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13037_13051__$1))
{var c__8631__auto___13052 = cljs.core.chunk_first.call(null,seq__13037_13051__$1);{
var G__13053 = cljs.core.chunk_rest.call(null,seq__13037_13051__$1);
var G__13054 = c__8631__auto___13052;
var G__13055 = cljs.core.count.call(null,c__8631__auto___13052);
var G__13056 = 0;
seq__13037_13041 = G__13053;
chunk__13038_13042 = G__13054;
count__13039_13043 = G__13055;
i__13040_13044 = G__13056;
continue;
}
} else
{var piece_13057 = cljs.core.first.call(null,seq__13037_13051__$1);cljs.core.swap_BANG_.call(null,d_tetris.core.board,cljs.core.assoc_in,piece_13057,player_color);
{
var G__13058 = cljs.core.next.call(null,seq__13037_13051__$1);
var G__13059 = null;
var G__13060 = 0;
var G__13061 = 0;
seq__13037_13041 = G__13058;
chunk__13038_13042 = G__13059;
count__13039_13043 = G__13060;
i__13040_13044 = G__13061;
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
cljs.core.reset_BANG_.call(null,d_tetris.core.high_score,(function (){var x__8190__auto__ = cljs.core.deref.call(null,d_tetris.core.high_score);var y__8191__auto__ = cljs.core.deref.call(null,d_tetris.core.score);return ((x__8190__auto__ > y__8191__auto__) ? x__8190__auto__ : y__8191__auto__);
})());
cljs.core.reset_BANG_.call(null,d_tetris.core.score,0);
d_tetris.core.new_player_piece_BANG_.call(null);
return cljs.core.reset_BANG_.call(null,d_tetris.core.board,d_tetris.core.initial_board);
});
d_tetris.core.keypress_handler = (function keypress_handler(event){var key = (function (){var G__13064 = event.which;if(cljs.core._EQ_.call(null,32,G__13064))
{return new cljs.core.Keyword(null,"space","space",1123542136);
} else
{if(cljs.core._EQ_.call(null,100,G__13064))
{return new cljs.core.Keyword(null,"right","right",1122416014);
} else
{if(cljs.core._EQ_.call(null,97,G__13064))
{return new cljs.core.Keyword(null,"left","left",1017222009);
} else
{if(cljs.core._EQ_.call(null,115,G__13064))
{return new cljs.core.Keyword(null,"down","down",1016993812);
} else
{if(cljs.core._EQ_.call(null,119,G__13064))
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
})();var G__13065 = key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"space","space",1123542136),G__13065))
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
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__13065))
{return d_tetris.core.try_move_player.call(null,d_tetris.core.right);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__13065))
{return d_tetris.core.try_move_player.call(null,d_tetris.core.left);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__13065))
{return d_tetris.core.try_move_player.call(null,d_tetris.core.down);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__13065))
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
{d_tetris.core.keypress_watch = jQuery(document).keypress((function (p1__13066_SHARP_){return d_tetris.core.keypress_handler.call(null,p1__13066_SHARP_);
}));
}
d_tetris.core.elem_comp = (function elem_comp(row_num,col_num,e){var player_elem_QMARK_ = d_tetris.core.player_pieces.call(null).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_((function (){var or__7883__auto__ = e;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return player_elem_QMARK_;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(function (){var or__7883__auto__ = e;if(cljs.core.truth_(or__7883__auto__))
{return or__7883__auto__;
} else
{return d_tetris.core.current_color.call(null);
}
})()], null)], null):null)], null);
});
d_tetris.core.board_comp = (function board_comp(){cljs.core.deref.call(null,d_tetris.core.player_location);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731)], null),(function (){var iter__8600__auto__ = (function iter__13107(s__13108){return (new cljs.core.LazySeq(null,(function (){var s__13108__$1 = s__13108;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13108__$1);if(temp__4126__auto__)
{var s__13108__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13108__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__13108__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__13110 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__13109 = 0;while(true){
if((i__13109 < size__8599__auto__))
{var vec__13129 = cljs.core._nth.call(null,c__8598__auto__,i__13109);var row_num = cljs.core.nth.call(null,vec__13129,0,null);var row = cljs.core.nth.call(null,vec__13129,1,null);cljs.core.chunk_append.call(null,b__13110,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8600__auto__ = ((function (i__13109,vec__13129,row_num,row,c__8598__auto__,size__8599__auto__,b__13110,s__13108__$2,temp__4126__auto__){
return (function iter__13130(s__13131){return (new cljs.core.LazySeq(null,((function (i__13109,vec__13129,row_num,row,c__8598__auto__,size__8599__auto__,b__13110,s__13108__$2,temp__4126__auto__){
return (function (){var s__13131__$1 = s__13131;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13131__$1);if(temp__4126__auto____$1)
{var s__13131__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13131__$2))
{var c__8598__auto____$1 = cljs.core.chunk_first.call(null,s__13131__$2);var size__8599__auto____$1 = cljs.core.count.call(null,c__8598__auto____$1);var b__13133 = cljs.core.chunk_buffer.call(null,size__8599__auto____$1);if((function (){var i__13132 = 0;while(true){
if((i__13132 < size__8599__auto____$1))
{var vec__13136 = cljs.core._nth.call(null,c__8598__auto____$1,i__13132);var col_num = cljs.core.nth.call(null,vec__13136,0,null);var elem = cljs.core.nth.call(null,vec__13136,1,null);cljs.core.chunk_append.call(null,b__13133,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null));
{
var G__13147 = (i__13132 + 1);
i__13132 = G__13147;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13133),iter__13130.call(null,cljs.core.chunk_rest.call(null,s__13131__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13133),null);
}
} else
{var vec__13137 = cljs.core.first.call(null,s__13131__$2);var col_num = cljs.core.nth.call(null,vec__13137,0,null);var elem = cljs.core.nth.call(null,vec__13137,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null),iter__13130.call(null,cljs.core.rest.call(null,s__13131__$2)));
}
} else
{return null;
}
break;
}
});})(i__13109,vec__13129,row_num,row,c__8598__auto__,size__8599__auto__,b__13110,s__13108__$2,temp__4126__auto__))
,null,null));
});})(i__13109,vec__13129,row_num,row,c__8598__auto__,size__8599__auto__,b__13110,s__13108__$2,temp__4126__auto__))
;return iter__8600__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),row));
})())));
{
var G__13148 = (i__13109 + 1);
i__13109 = G__13148;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13110),iter__13107.call(null,cljs.core.chunk_rest.call(null,s__13108__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13110),null);
}
} else
{var vec__13138 = cljs.core.first.call(null,s__13108__$2);var row_num = cljs.core.nth.call(null,vec__13138,0,null);var row = cljs.core.nth.call(null,vec__13138,1,null);return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8600__auto__ = ((function (vec__13138,row_num,row,s__13108__$2,temp__4126__auto__){
return (function iter__13139(s__13140){return (new cljs.core.LazySeq(null,((function (vec__13138,row_num,row,s__13108__$2,temp__4126__auto__){
return (function (){var s__13140__$1 = s__13140;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13140__$1);if(temp__4126__auto____$1)
{var s__13140__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13140__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__13140__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__13142 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__13141 = 0;while(true){
if((i__13141 < size__8599__auto__))
{var vec__13145 = cljs.core._nth.call(null,c__8598__auto__,i__13141);var col_num = cljs.core.nth.call(null,vec__13145,0,null);var elem = cljs.core.nth.call(null,vec__13145,1,null);cljs.core.chunk_append.call(null,b__13142,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null));
{
var G__13149 = (i__13141 + 1);
i__13141 = G__13149;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13142),iter__13139.call(null,cljs.core.chunk_rest.call(null,s__13140__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13142),null);
}
} else
{var vec__13146 = cljs.core.first.call(null,s__13140__$2);var col_num = cljs.core.nth.call(null,vec__13146,0,null);var elem = cljs.core.nth.call(null,vec__13146,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d_tetris.core.elem_comp,row_num,col_num,elem], null),iter__13139.call(null,cljs.core.rest.call(null,s__13140__$2)));
}
} else
{return null;
}
break;
}
});})(vec__13138,row_num,row,s__13108__$2,temp__4126__auto__))
,null,null));
});})(vec__13138,row_num,row,s__13108__$2,temp__4126__auto__))
;return iter__8600__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),row));
})())),iter__13107.call(null,cljs.core.rest.call(null,s__13108__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8600__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),cljs.core.deref.call(null,d_tetris.core.board)));
})());
});
d_tetris.core.next_piece_preview_comp = (function next_piece_preview_comp(){var center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null);var map__13171 = cljs.core.deref.call(null,d_tetris.core.next_piece);var map__13171__$1 = ((cljs.core.seq_QMARK_.call(null,map__13171))?cljs.core.apply.call(null,cljs.core.hash_map,map__13171):map__13171);var color = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"color","color",1108746965));var cells = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"cells","cells",1108448963));var colored_cells = cljs.core.set.call(null,cljs.core.map.call(null,d_tetris.core.coord_PLUS_,cljs.core.repeat.call(null,center),cells));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"Preview:"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",2025644731)], null),(function (){var iter__8600__auto__ = ((function (center,map__13171,map__13171__$1,color,cells,colored_cells){
return (function iter__13172(s__13173){return (new cljs.core.LazySeq(null,((function (center,map__13171,map__13171__$1,color,cells,colored_cells){
return (function (){var s__13173__$1 = s__13173;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13173__$1);if(temp__4126__auto__)
{var s__13173__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13173__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__13173__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__13175 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__13174 = 0;while(true){
if((i__13174 < size__8599__auto__))
{var row_num = cljs.core._nth.call(null,c__8598__auto__,i__13174);cljs.core.chunk_append.call(null,b__13175,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8600__auto__ = ((function (i__13174,row_num,c__8598__auto__,size__8599__auto__,b__13175,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells){
return (function iter__13184(s__13185){return (new cljs.core.LazySeq(null,((function (i__13174,row_num,c__8598__auto__,size__8599__auto__,b__13175,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells){
return (function (){var s__13185__$1 = s__13185;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13185__$1);if(temp__4126__auto____$1)
{var s__13185__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13185__$2))
{var c__8598__auto____$1 = cljs.core.chunk_first.call(null,s__13185__$2);var size__8599__auto____$1 = cljs.core.count.call(null,c__8598__auto____$1);var b__13187 = cljs.core.chunk_buffer.call(null,size__8599__auto____$1);if((function (){var i__13186 = 0;while(true){
if((i__13186 < size__8599__auto____$1))
{var col_num = cljs.core._nth.call(null,c__8598__auto____$1,i__13186);cljs.core.chunk_append.call(null,b__13187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null));
{
var G__13192 = (i__13186 + 1);
i__13186 = G__13192;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13187),iter__13184.call(null,cljs.core.chunk_rest.call(null,s__13185__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13187),null);
}
} else
{var col_num = cljs.core.first.call(null,s__13185__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null),iter__13184.call(null,cljs.core.rest.call(null,s__13185__$2)));
}
} else
{return null;
}
break;
}
});})(i__13174,row_num,c__8598__auto__,size__8599__auto__,b__13175,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells))
,null,null));
});})(i__13174,row_num,c__8598__auto__,size__8599__auto__,b__13175,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells))
;return iter__8600__auto__.call(null,cljs.core.range.call(null,4));
})())));
{
var G__13193 = (i__13174 + 1);
i__13174 = G__13193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13175),iter__13172.call(null,cljs.core.chunk_rest.call(null,s__13173__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13175),null);
}
} else
{var row_num = cljs.core.first.call(null,s__13173__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959)], null),cljs.core.vec.call(null,(function (){var iter__8600__auto__ = ((function (row_num,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells){
return (function iter__13188(s__13189){return (new cljs.core.LazySeq(null,((function (row_num,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells){
return (function (){var s__13189__$1 = s__13189;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13189__$1);if(temp__4126__auto____$1)
{var s__13189__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13189__$2))
{var c__8598__auto__ = cljs.core.chunk_first.call(null,s__13189__$2);var size__8599__auto__ = cljs.core.count.call(null,c__8598__auto__);var b__13191 = cljs.core.chunk_buffer.call(null,size__8599__auto__);if((function (){var i__13190 = 0;while(true){
if((i__13190 < size__8599__auto__))
{var col_num = cljs.core._nth.call(null,c__8598__auto__,i__13190);cljs.core.chunk_append.call(null,b__13191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null));
{
var G__13194 = (i__13190 + 1);
i__13190 = G__13194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13191),iter__13188.call(null,cljs.core.chunk_rest.call(null,s__13189__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13191),null);
}
} else
{var col_num = cljs.core.first.call(null,s__13189__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.elem","span.elem",4619616037),(cljs.core.truth_(colored_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),color], null)], null):null)], null),iter__13188.call(null,cljs.core.rest.call(null,s__13189__$2)));
}
} else
{return null;
}
break;
}
});})(row_num,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells))
,null,null));
});})(row_num,s__13173__$2,temp__4126__auto__,center,map__13171,map__13171__$1,color,cells,colored_cells))
;return iter__8600__auto__.call(null,cljs.core.range.call(null,4));
})())),iter__13172.call(null,cljs.core.rest.call(null,s__13173__$2)));
}
} else
{return null;
}
break;
}
});})(center,map__13171,map__13171__$1,color,cells,colored_cells))
,null,null));
});})(center,map__13171,map__13171__$1,color,cells,colored_cells))
;return iter__8600__auto__.call(null,cljs.core.range.call(null,2));
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