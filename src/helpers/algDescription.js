export const algDescriptions = {
  "Bubble Sort": {
    description:
      'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems',
    performance: {
      timeComplexity: {
        worst: "O(n^2)",
        avg: "O(n^2)",
        best: "O(n)",
      },
      spaceComplexity: "O(1)",
    },
    url: "https://en.wikipedia.org/wiki/Bubble_sort",
  },
  "Selection Sort": {
    description:
      "Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.",
    performance: {
      timeComplexity: {
        worst: "O(n^2)",
        avg: "O(n^2)",
        best: "O(n^2)",
      },
      spaceComplexity: "O(1)",
    },
    url: "https://en.wikipedia.org/wiki/Selection_sort",
  },
  "Insertion Sort": {
    description:
      "Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.",
    performance: {
      timeComplexity: {
        worst: "O(n^2)",
        avg: "O(n^2)",
        best: "O(n)",
      },
      spaceComplexity: "O(1)",
    },
    url: "https://en.wikipedia.org/wiki/Insertion_sort",
  },
};
