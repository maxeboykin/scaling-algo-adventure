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


