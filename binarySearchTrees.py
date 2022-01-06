"""
In a BST, a nodse value must be greater than the nodes to the left
and less than or equal to the nodes to the right. All nodes should
satisfy this property.
Average case for time is O(logn) and O(logn) for space if the BST is
balanced. We will traverse on average half of the tree each time.
Worst case is O(N) for both time and space if the tree is extremely
unbalanced (either always left or always right node).
"""


class BST:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None



def findClosestValueInBstHelper(tree, target, closest = tree.value):
  if tree is None:
    return closest
  if abs(tree.value - target) < abs(closest - target):
    closest = tree.value
  if target < tree.value:
    return findClosestValueInBstHelper(tree.left, target, closest)
  elif target > tree.value:
    return findClosestValueInBstHelper(tree.right, target, closest)
  else:
    return closest
