---
title: Numpy Array to tidy format
date: '2022-11-24T12:00:00.00Z'
description: 'Short code snippet to bring 2D-array into tidy table format.'
---

Lately I had a numpy-array containing a bunch of numbers from satellite imagery. 
For further use I needed to bring this into a tidy format, meaning one record per row. 
The following code solved my problem.  

First of all I create a bunch of numbers for demonstration purpose.

```python
import numpy as np
data = np.random.uniform(low=-1.0, high=1.0, size=(10,10))
```

Then I used `np.ndenumerate()` and pandas to bring the numbers into a dataframe. 

```python
import pandas as pd

# create dataframe
df = pd.DataFrame(np.ndenumerate(data), columns=["coordinates","value"])

# unpack coordinates tuple into single columns
df[["y","x"]]  = df["coordinates"].tolist()

# get rid of coordinates column
df.drop('coordinates', axis=1, inplace=True)
```

`df` now consists of three columns containing the numbers and coordinates. I looks something like this:  

```markdown
|     |     value |   y |   x |
|-----|-----------|-----|-----|
|   0 |  0.788830 |   0 |   0 |
|   1 |  0.413680 |   0 |   1 |
| ... |       ... | ... | ... |
|  99 | -0.361956 |   9 |   9 |
```



