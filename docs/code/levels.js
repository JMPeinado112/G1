var GAME_LEVELS = [`

################################################################################################
#..............a........a..........a..........a.........a........a.......a..........a......a...#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#....d.........................................................................................#
#o..4........................................................................................@.#
################################################################################################
`, `
################################################################################################
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#.../...../../...!...*..!......!..*...!...*......!......*...!........!.....*..1.!...1..!..1....#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#-.............................................................................................#
#-.......................................................................-....................-#
#........................................................................-....................-#
#...@........................................................................................o.#
################################################################################################
`, `
################################################################################################
#..........g...g........g....hh....g...h......g.....g...h........h...g...h..........h..........#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#..............................................................................................#
#....d.........................................................................................#
#....d.........................................................................................#
#o..b........................................................................................@.#
################################################################################################
`, `
..................................................................................................................
...............................................................####.....####......................................
..............................................................##...........##.....................................
.............................................................##.............##....................................
.............................................................#....................................................
.............................................................#.....o...o..........................................
.............................................................#....................................................
.............................................................#.....#...#..........................................
.............................................................##..|...|...|..##....................................
..............................................................##+++++++++++##..#..................................
...............................................................####+++++####.....#......................#.........
..................................................................#######...............#.....##.................#
.............................................................................................................#....
..................................................................................................................
.....................................................###.................................................#........
.................................######......##.......................................................#...........
.........o................###.................................................................#..#................
........####......###..........................................#........................##........................
.......##........#..##...............................................#......#......#..............................
......##.............##...........................................................................................
......#.......#...................................................................................................
......#.....o...o.................................................................................................
......#...........................................................................................................
......#.....#...#.................................................................................................
......##..|...|...|..##...........................................................................................
.......##+++++++++++##....#.......................................................................................
........####+++++####.............................................................................................
...........#######...............#................................................................................
......................................#...........................................................................
..............................................#...................................................................
...................................................#..............................................................
........................................................#.........................................................
..................................................................................................................
.............................................................#....................................................
......................................................................#..............................@............
...............................................................................#........#.......########.........o
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#
##################################################################################################################
`, `
###############################################################################################################
#..........g...g........g....hh....g...h......g.........g...h............h..........g...h..........h..........#
#.............................................................................................................#
#.../...../.../...!.....*..!............*...!...*......................*.....................*..1...1....1....#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#.............................................................................................................#
#..........................................................................................................i..#
#.d...........................................................................................................#
#..........................................................................................................i..#
#.........................................######..............................................................#
#.............................######.................######...................................................#
#....d......................................................######............................................#
#....B................................................................########................................#
#...d..............................................................................#########..................#
#o..........................................................................................................@.#
###############################################################################################################
`];

if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = GAME_LEVELS;
if (typeof global != "undefined" && !global.GAME_LEVELS)
  global.GAME_LEVELS = GAME_LEVELS;
