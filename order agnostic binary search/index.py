# Order Agnostic Binary Search

# Given a sorted array of numbers, find if a given number target is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

# Write a function to return the index of the target if it is present in the array, otherwise return -1.

# Example 1:

# Input: [4, 6, 10], target = 10
# Output: 2
# Example 2:

# Input: [1, 2, 3, 4, 5, 6, 7], key = 5
# Output: 4
# Example 3:

# Input: [10, 6, 4], key = 10
# Output: 0
# Example 4:

# Input: [10, 6, 4], key = 4
# Output: 2


def order_agnostic_binary_search(arr, target):
    start = 0
    end = len(arr) -1

    # edge case if array is all duplicates
    if arr[start] == arr[end]:
        if target == arr[start]:
            return start
        else:
            return -1

    # check if array is ascending or descending
    is_ascending = arr[start] < arr[end]

    if is_ascending:
        return ascending_binary_search(arr, target)
        # this function is defined below

    else:
        return descending_binary_search(arr, target)
        # this function is defined below




def ascending_binary_search(arr, target):

    high_index = len(arr) - 1
    low_index = 0

    while low_index <= high_index:
        # this need to go in the while loop so it can be redone every loop
        midpoint = low_index + (high_index - low_index) // 2
        if target == arr[midpoint]:
            return midpoint
        if target < arr[midpoint]:
            high_index = midpoint - 1
        else:
            low_index = midpoint + 1

    return -1


def descending_binary_search(arr, target):

    high_index = len(arr) - 1
    low_index = 0

    while low_index <= high_index:
        midpoint = low_index + (high_index - low_index) // 2
        if target == arr[midpoint]:
            return midpoint
        if target < arr[midpoint]:
            low_index = midpoint + 1
        else:
            high_index = midpoint - 1

    return -1


arr1 = [1, 2, 3, 4, 5, 6, 7]
arr2 = [4, 6, 10]
arr3 = [10, 6, 4]
arr4 = [6, 5, 4, 3, 2, 1]
arr5 = [1,1,1,1,1,1,1,1,1,10]

print(order_agnostic_binary_search(arr1, 3))
print(order_agnostic_binary_search(arr4, 5))
print(order_agnostic_binary_search(arr5, 1))