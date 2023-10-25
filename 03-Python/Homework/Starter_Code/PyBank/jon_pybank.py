# Importing libraries
import csv # To read CSV files
import os # To navigate file & path directories

# This is the file path to the file we want to read
budget_data_path = os.path.join("Resources", "budget_data.csv")

# Opening the file so that we can begin reading the data
with open(budget_data_path) as budget_data:
    """
    In short, after you are able to read the file line-by-line, 
    it is time to strategize how you want to approach this.

    Total Months - Doing a split in the first column, and separating them into its individual columns
    Net total amount of Profit/Losses - Aggregating the values to get a total number
    Changes in Profit/Losses - Aggregating the differences between the values, and then averaging those changes.
    Greatest increase in profits - Looking for the highest value of profits
    Greatest decrease in profits - Looking for the lowest value of profits.
    """
    # Initializing the reader object
    reader = csv.reader(budget_data)

    # Extract the header row
    # There are 2 columns - Date, Profit/Losses
    header = next(reader)
    print(header)

    # Reading lines
    line = budget_data.readline()
    line_before = None
    line_after = None

    while line:
        print(line)
        """
        Option 1
        This is to store before and after values while we are looping
        """
        if line_before is None:
            line_before = line
        
        if line_after is None:
            line_before = line
        

        if line != line_before:
            line_after = line

            # Do logic here

        print(f"line before: {line_before}")
        print(f"line after: {line_after}")

        """
        Option 2:
        Store every line in a dictionary/list
        """

        line = budget_data.readline()
