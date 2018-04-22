people = ['john', 'sara', 'tim', 'bob']
for person in people:
  print('Current Person: ', person)

for i in range(len(people)):
  print('Current Person: ', people[i])

count = 0
while count < 10:
  print('Count: ', count)
  if count == 5:
    break
  count = count + 1