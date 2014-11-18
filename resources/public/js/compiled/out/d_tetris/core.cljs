(ns d_tetris.core
  (:require [figwheel.client :as fw]
            [reagent.core :as reagent]))

(declare restart!)

(def speedup-factor 0.5 #_0.97)
(def num-rows 20)
(def num-cols 10)
(def left [0 -1])
(def right [0 1])
(def down [1 0])

(enable-console-print!)

(def a-row (vec (repeat num-cols nil)))
(def initial-board (vec (repeat num-rows a-row)))

(defonce board (reagent/atom nil))

(def starting-location [0 (int (/ num-cols 2))])
(def pieces
  [{:cells [[0 -1] [0 0] [0 1] [0 2]]
    :color "aqua"}
   {:cells [[0 0] [0 1] [1 0] [1 1]]
    :color "yellow"}
   {:cells [[0 0] [0 1] [0 -1] [1 1]]
    :color "blue"}
   {:cells [[0 0] [0 1] [0 -1] [1 -1]]
    :color "orange"}
   {:cells [[0 0] [0 1] [0 -1] [1 0]]
    :color "purple"}
   {:cells [[0 0] [0 -1] [1 0] [1 1]]
    :color "red"}
   {:cells [[0 0] [0 1] [1 0] [1 -1]]
    :color "green"}])

(defn coord+
  [[h v] [h-delta v-delta]]
  [(+ h h-delta) (+ v v-delta)])

(defn rotate-delta
  "clockwise"
  [[h-delta v-delta]]
  [v-delta (- h-delta)])

(defonce player-location (reagent/atom nil))
(defonce next-piece (reagent/atom nil))
(defonce current-piece (reagent/atom nil))
(defonce score (reagent/atom 0))
(defonce high-score (reagent/atom 0))

(defn current-color
  []
  (:color @current-piece))

(defn player-pieces
  []
  (set (map coord+ (repeat @player-location) (:cells @current-piece))))

(defn valid-coord?
  [[h v]]
  (and (> num-rows h -1)
       (> num-cols v -1)
       (not (get-in @board [h v]))))

(defn can-move?
  [coord delta]
  (valid-coord? (coord+ coord delta)))

(defn try-move-player
  [delta]
  (when (every? #(can-move? % delta) (player-pieces))
    (swap! player-location coord+ delta)))

(defn new-player-piece!
  []
  (reset! player-location starting-location)
  (reset! current-piece (or @next-piece
                            (rand-nth pieces)))
  (reset! next-piece (rand-nth pieces)))

(defn rotate-player!
  []
  (let [deltas (:cells @current-piece)
        rotated-ds (mapv rotate-delta deltas)
        new-pieces (mapv coord+ (repeat @player-location) rotated-ds)]
    (when (every? valid-coord? new-pieces)
      (swap! current-piece assoc :cells rotated-ds))))

(defn clear-completed-rows!
  []
  (swap! board (fn [b]
                 (let [b (remove #(every? identity %) b)
                       num-completed (- num-rows (count b))]
                   (swap! score + num-completed)
                   (->> b
                        (concat (repeat num-completed a-row))
                        vec)))))

(defn next-turn!
  []
  (let [player-ps (player-pieces)
        player-color (current-color)]
    (if (every? #(can-move? % down) player-ps)
      (swap! player-location coord+ down) ;; TODO copy-pasted
      (do (new-player-piece!)
          (doseq [piece player-ps]
            (swap! board assoc-in piece player-color))
          (clear-completed-rows!)
          ;; make it faster the higher the score
          (set-timer! (Math/pow speedup-factor @score))
          (when (not (every? valid-coord? (player-pieces)))
            ;; game over
            (js/alert "Game over!")
            (restart!))))))

(def starting-timer-time 1000)
(defonce timer (atom nil))

(defn set-timer!
  [ratio]
  (swap! timer (fn [t]
                 (when t
                   (js/clearInterval t))
                 (js/setInterval #(next-turn!) (* ratio starting-timer-time)))))

(defn restart!
  []
  (set-timer! 1.0)
  (reset! high-score (max @high-score @score))
  (reset! score 0)
  (new-player-piece!)
  (reset! board initial-board))

(defn keypress-handler
  [event]
  (let [key (case (.-which event)
              119 :up ;; w
              115 :down ;; s
              97 :left ;; a
              100 :right ;; d
              32 :space
              nil)]
    (case key
      :up (rotate-player!)
      :down (try-move-player down)
      :left (try-move-player left)
      :right (try-move-player right)
      :space (loop []
               (when (try-move-player down)
                 (recur)))
      nil)))

(defonce keypress-watch
  (.keypress (js/jQuery js/document) #(keypress-handler %)))

(defn elem-comp
  [row-num col-num e]
  (let [player-elem? ((player-pieces) [row-num col-num])]
    [:span.elem
     (when (or e player-elem?)
       {:style {:background-color (or e (current-color))}})]))

(defn board-comp
  []
  @player-location ;; access player loc to re-render
  (into [:div.board]
        (for [[row-num row] (map vector (range) @board)]
          (into [:div.row]
                (vec (for [[col-num elem] (map vector (range) row)]
                       [elem-comp row-num col-num elem]))))))

(defn next-piece-preview-comp
  []
  (let [center [0 1]
        {:keys [cells color]} @next-piece
        colored-cells (set (map coord+ (repeat center) cells))]
    ;; TODO copy-paste
    [:div
     [:h3 "Preview:"]
     (into [:div.board]
           (for [row-num (range 2)]
             (into [:div.row]
                   (vec (for [col-num (range 4)]
                          [:span.elem
                           (when (colored-cells [row-num col-num])
                             {:style {:background-color color}})])))))]))

(defn score-comp
  []
  [:div
   [:h3 "High score:" @high-score]
   [:h3 "Your score:" @score]])

(defn other-data-comp
  []
  [:div
   [next-piece-preview-comp]
   [score-comp]])

(defn tetris-comp
  []
  [:div [:span [:h1 "Tetris!"]]
   [:table
    [:thead]
    [:tbody
     [:tr
      [:td [board-comp]]
      [:td [other-data-comp]]]]]])

(defonce __placeholder (restart!)) ;; init

(defn setup
  []
  (reagent/render-component [tetris-comp]
                            (js/document.getElementById "main-area")))

(setup)

(fw/watch-and-reload
  :websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (setup)))
