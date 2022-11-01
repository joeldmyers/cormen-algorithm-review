# Van Emde Boas Trees

Van Emde Boas trees can take advantage of "breaking past" the O n log n lower bound of sorting in counting sorts like radix sort. It can achieve O(log log n) worst case, when keys are non-negative integers and there are no duplicates.

The following operations are supported: Search, Insert, Delete, Minimum, Maximum, Successor and Predecessor. All in O (log log n) time.
