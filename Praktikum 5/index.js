const Song = require("./lib/jasmine_examples/Song.js")
const Player = require("./lib/jasmine_examples/Player.js")

let song = new Song()
song.title = "Sava x Bm x Mini (Haringey Borough)"
let player = new Player()

player.play(song)

if (player.isPlaying) {
  console.log("Currently playing: " + player.currentlyPlayingSong.title)
} else {
  console.log("No song is currently playing")
}
