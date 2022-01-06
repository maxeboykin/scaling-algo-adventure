"""

"""

class BinaryTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None


def branchSums(root, prevSum = 0, sumArr = []):
  newRunningSum = prevSum + root.value

  ##base case if at leaf
  if root.left is None and root.right is None:
      sumArr.append(newRunningSum)

      if root.left is not None:
        branchSums(root.left, newRunningSum, sumArr)
      if root.right is not None:
        branchSums(root.right, newRunningSum, sumArr)

      return sumArr


  def nodeDepthsRecursiveSimple(node, depth = 0):
    if node is None:
      return 0
    return depth + nodeDepthsRecursiveSimple(node.left, depth + 1) + nodeDepthsRecursiveSimple(node.right, depth + 1)

  def nodeDepths(node):
    stack = [{"node": node, "depth": 0}]
    sumOfDepths = 0
    while len(stack) > 0:
      nodeInfo = stack.pop()
      node, depth = nodeInfo["node"], nodeInfo["depth"]
      if node is None:
        continue
      sumOfDepths += depth
      stack.append[{"node": node.left, "depth": depth + 1}]
      stack.append[{"node": node.left, "depth": depth + 1}]
    return sumOfDepths
