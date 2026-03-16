def last2(str):
      subs = str[-2:]
  count = 0
  for i in range(len(str)-2):
    l = str[i:i+2]
    if l == subs:
      count+=1
  return count
