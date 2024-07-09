import pandas as pd
csvFile = pd.read_csv('original-list.csv')
df = pd.DataFrame(csvFile)

print(df.sort_values(by=['Start Date']))
df = df.sort_values(by=['Start Date'])
# print(df[['Name','Start Date','End Date']]);
df.to_csv('sortby-date.csv', index=False)
# print(df.sort_values(by=['Start Date']))
