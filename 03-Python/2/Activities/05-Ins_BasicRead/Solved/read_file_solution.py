# Store the file path associated with the file (note the backslash may be OS specific)
import os # this is a module

file = '../Resources/input.txt'
#file = "input.txt"

#print(os.path.isfile(file))

"""
Reading by blocks.
"""
# Open the file in "read" mode ('r') and store the contents in the variable "text"
with open(file, 'r') as text:
    # This stores a reference to a file stream
    #print(text)

    # Store all of the text inside a variable called "lines"
    # This is not storing by lines. This is storing the entire file within a buffer.
    # The naming convention threw me off.
    lines = text.read()
    

    # Print the contents of the text file
    print(lines)
    print("-----------")
    
    # How to prove if it is reading the entire file
    line_list = lines.split(" ")
    print(line_list)

"""
Reading by lines
"""
with open(file, 'r') as text:
    # To count the number of lines
    num_lines = 0

    # How to read lines instead?
    each_line = text.readline()

    # there is a line, keep reading.
    while each_line:
        print(str(num_lines) + " " +  each_line)
        each_line = text.readline()
        num_lines += 1

    print(f"Number of lines in file: {num_lines}")

    

