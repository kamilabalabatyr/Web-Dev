def sum67(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 6:
            skip = True
        elif skip and num == 7:
            skip = False
        elif not skip:
            total += num
    return total