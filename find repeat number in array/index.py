def findRepeat(arr):
    if len(arr) < 2:
        return 'This Array is too short'
    dict = {}
    for i in range(len(arr)):
        if arr[i] in dict:
            return arr[i]
        else:
            dict[arr[i]] = 1
    return 'No duplicates'