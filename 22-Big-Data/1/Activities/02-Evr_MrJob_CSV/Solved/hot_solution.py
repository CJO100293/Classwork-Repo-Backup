"""
Find the number of hot days in Austin for 2017
"""
from mrjob.job import MRJob


class Hot_Days(MRJob):

    def mapper(self, key, line):
        """
        In short, the mapper reads files or blocks of data in bytes and processes them line-by-line.

        Advanced Info (for Spark streaming):
        MRJob is able to process partitions within Spark.
        """
        (station, name, state, date, snow, tmax, tmin) = line.split(",")

        
        
        # If tmax exist and the value is greater or equal to 100
        if tmax and int(tmax) >= 100:
            yield name, 1


    def reducer(self, name, hot):
        """
        This method takes the "yield" values (in our case: "name" and 1) and starts summing them according to the key (name).

        Note:
        If you're going to do computation/math on the values, make sure you're passing a number from the mapper!
        """
        yield name, sum(hot)


if __name__ == "__main__":
    Hot_Days.run()
