import csv
import os

# Three Lists
indexes = [1, 2, 3, 4]
employees = ["Michael", "Dwight", "Meredith", "Kelly"]
department = ["Boss", "Sales", "Sales", "HR"]

# Zip all three lists together into tuples
roster = zip(indexes, employees, department)


# Print the contents of each row
# For the code to write into the file, you have to comment this out
# Zipped variables/data are lazy iterators, so once it is being iterated, it will not store the data for reuse.
print("Before:", list(roster))
for employee in roster:
    print(employee)
print("After:", list(roster))

# save the output file path
output_file = os.path.join("output.csv")

# open the output file, create a header row, and then write the zipped object to the csv
with open(output_file, "w") as datafile:
    writer = csv.writer(datafile)

    writer.writerow(["Index", "Employee", "Department"])
    
    # Instead of using just roster, type cast it to list:
    for row in roster:
        writer.writerow(row)


# # to print out to terminal:
# #comment out above code and run the code below
# for employee in roster:
#     print(employee)
