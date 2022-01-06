"""
First approach can be to sort through linked list and have a memoization object storing values already collected and if a next Node has a
repetitive value then have a while loop sorting through until the next node is distinct and make current node . next value to that node and keep going. This would be O(N) space.

The answer below runs at O(N) time due to having to go through
the entire linkedlist and then at O(1) space. Just resetting .next
values.
Maybe discuss the two whiles aspect."""


class LinkedList:
  def __init__(self, value):
    self.value = value
    self.next = None


def removeDuplicatesFromLinkedList(linkedList):
  currentNode = linkedList
  while currentNode is not None:
    nextDistinctNode = currentNode.next
    while nextDistinctNode is not None and nextDistinctNode.value === currentNode.value:
      nextDistinctNode = nextDistinctNode.next

    currentNode.next = nextDistinctNode
    currentNode = nextDistinctNode

  return linkedList


def minimumWaitingTime(queries):
  sum = 0
  queries.sort()
  for idx, duration in enumerate(queries):
    queriesLeft = len(queries) - idx + 1
    sum += duration * queriesLeft

  return sum

