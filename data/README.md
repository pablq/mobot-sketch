mobot-persp-objects:
type -> 
  x = rock
  y = tree
  o = bush
  p = person
object-size -> estimated relative size of the object (range: 0 - 10)
view-range -> where the object lies in the field of vision starting from the left (range: 0 - 360)
distance -> relative distance from the viewer (range: 0 - 100)

mobot-persp-horiz:
value-at-0 -> relative distance from viewer on left edge of field of vision (range: 0 - 100)
value-at-360 -> relative distance from viewer on right edge of field of vision (range: 0 - 100)

mobot-map:
type ->
  x = rock
  y = tree
  o = bush
  w = water
  p = person
  m = misc
x -> range 0 - 100
y -> range 0 - 60
z -> range 0 - 20
