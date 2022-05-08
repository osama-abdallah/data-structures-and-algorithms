# Quick Sort

A sorting technique that sequences a list by continuously dividing the list into two parts and moving the lower items to one side and the higher items to the other.

## Trace

Step 1 - Consider the first element of the list as pivot (i.e., Element at first position in the list).
Step 2 - Define two variables i and j. Set i and j to first and last elements of the list respectively.
Step 3 - Increment i until list[i] > pivot then stop.
Step 4 - Decrement j until list[j] < pivot then stop.
Step 5 - If i < j then exchange list[i] and list[j].
Step 6 - Repeat steps 3,4 & 5 until i > j.
Step 7 - Exchange the pivot element with list[j] element.

## Approach & Efficiency

Big O Time : O(log n)
Big O Space : O(1)