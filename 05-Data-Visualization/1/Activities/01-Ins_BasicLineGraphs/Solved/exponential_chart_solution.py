# Import Numpy for calculations and matplotlib for charting
import numpy as np
import matplotlib.pyplot as plt

# Creates a numpy array from 0 to 5 with each step being 0.1 higher than the last
x_axis = np.arange(0, 5, 0.1)

# Creates an exponential series of values which we can then chart
e_x = [np.exp(x) for x in x_axis]

# Create a graph based upon the list and array we have created
plt.plot(x_axis, e_x)

# Show the graph that we have created
plt.show()