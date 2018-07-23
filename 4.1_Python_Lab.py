import json

"""
Construct a dictionary that maps time to words!
For this lab, we will only be considering times ending in 00, 10, 15, 30, or 45.
For any other time inputs, output 'unknown'.
Examples
Time: '1:00'    Output: 'one '
Time: '2:10'    Output: 'two ten'
Time: '3:15'    Output: 'three fifteen'
Time: '4:30'    Output: 'four thirty'
Time: '5:45'    Output: 'five forty-five'
Time: '9:09'    Output: 'unknown'
"""

def main():
  # Construct a dictionary that will contain the necessary number to string
  # mappings for you to do translations.
  minute_mappings ={"00":" ", "10": " ten", "15":" fifteen", "30": " thirty", "45":" forty-five"} 
  hour_mapping={"1":" one","2":" two","3":" three","4":" four","5":" five","6":" six","7":" seven"}# YOUR CODE HERE
  # print(minute_mappings)
  # Load in this JSON data using the `loads` function from the imported `json` library
  appointments_data = '{"monday": "3:45", "tuesday": "4:00", "wednesday": "2:15", "thursday": "5:30", "friday": "7:23", "weekends": "1:10"}'
  appointments_dict = json.loads(appointments_data)
  # print(appointments_dict)
  # Extract all the times from the loaded data and store them in a list
  # For each time, you will need to separate it into hours (left of the :) and minutes (right of the :)
  # Hint: Lookup the `split` function for strings in Python
  #
  # YOUR CODE HERE
  appointments_dict.values()
  num = appointments_dict.values()
  # print(num)
  time_output_string = ""
  for x in num:
    # print(x)
    bro = x.split(":")
    minutes = bro[1]
    hours = bro[0]
    if minutes in minute_mappings.keys(): 
      if hours in hour_mapping.keys(): 
        minutes_in_word = minute_mappings[minutes]
        hours_in_word = hour_mapping[hours]
        time_output_string += "Time:" + x  +  "   Output:" + hours_in_word + minutes_in_word + "\n"
    else:
        time_output_string += "Time" + x  +  "   Output: unknown" + "\n"  
  return time_output_string
    
    
     
   

   
  # print(num.split(""))

  # Return the list of results
  #
  # YOUR CODE HERE

  

"""
The `if __name__ == "__main__":` structure is commonly seen in Python files.
It tests if this module is being run as the main program, and if so, enters the if clause
and executes that code block.
A module is a file containing Python definitions and statements--for example, this file!
Every module in Python has a special attribute called __name__.
When the Python interpreter is running a module as the main program, it sets value of __name__ to "__main__".
If this file is being imported from another module, __name__ will be set to that module's name.
"""
if __name__ == "__main__":
    print(main())
