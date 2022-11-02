# Van Emde Boas Trees

Van Emde Boas trees can take advantage of "breaking past" the O n log n lower bound of sorting in counting sorts like radix sort. It can achieve O(log log n) worst case, when keys are non-negative integers and there are no duplicates.

The following operations are supported: Search, Insert, Delete, Minimum, Maximum, Successor and Predecessor. All in O (log log n) time.

One part of the approach is to have a tree of degree of the square root of u, where u is essentially the maximum number in the set of integers.

The book starts with a proto-van Emde Boas tree and then relaxes some of the constraints. Specifically, it allows u (the max number, or universe of numbers) to be a power of 2, not 2 ^ (2 ^ n).

Note that it takes Theta (u) time to instantiate a van Emde Boas tree, whereas a red-black tree takes constant time. So with fewer operations, RB tree is better.
