"""
A vertex is a node in a graph. V = vertex. edges are the connected lines in teh graph. e stands for edges.
Depth-firstSearch method on a node class traverses a tree navigating from left to right and stores all the nodes
names each time it enteres a new node/vertex.
Time complexity is O(v+e) since for every vertex we enter we also have a for loop for each of the edges/children.
Space complexity is O(v) since the call stack will be at most O(v) if its a graph with all of vertices being single children of each other. a -> b--> c --> d instead of
    a
    /\
   b  c
   /\ /\
  d e f g
"""

class Node:
  def __init__(self, name):
    self.children = []
    self.name = name

    def addChild(self, name):
      self.children.append(Node(name))
      return self

    def depthFirstSearch(self, array):
      array.append(self.name)
      for child in self.children:
        child.depthFirstSearch(array)
      return array
