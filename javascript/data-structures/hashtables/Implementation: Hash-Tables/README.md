# Hashtables

Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

## Challenge
Implement a Hashtable Class with the following methods:

* set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.

* get
Arguments: key
Returns: Value associated with that key in the table

* contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

* keys
Returns: Collection of keys

* hash
Arguments: key
Returns: Index in the collection for that key

## Approach & Efficiency

Big O Space: O(1)
Big O Time: O(1)
