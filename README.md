## Sample Input:

`node sortedList.js 'Louis IX' 'Louis VIII' 'David II'`
`node sortedList.js 'George VI' 'William IX' 'Elizabeth I' 'William VI'`

## Sample Output:

`[ 'David II', 'Louis VIII', 'Louis IX' ]`
`[ 'Elizabeth I', 'George VI', 'William VI', 'William IX' ]`

## Sorted List

An ordinal number is a word representing rank or sequential order. The naming convention for royal names is to follow a given name with an ordinal number using a Roman numeral to indicate the birth order of two people of the same name.

The Roman numerals from 1 to 50 are defined as follows: The numbers 1 through 10 are written I, II, III, IV, V, VI, VII, VIII, IX, and X. The Roman numerals corresponding to the numbers 20, 30, 40, and 50 are XX, XXX, XL, and L. For any other two-digit number < 50, its Roman numeral representation is constructed by concatenating the numeral(s) for its multiples of ten with the numeral(s) for its values < 10. For example, 47 is 40 + 7 = "XL" + "VII" = "XLVII".

Given a list of royal name strings consisting of a given name followed by an ordinal number, first it must be sorted alphabetically by name, then by ordinal, increasing within any given name.

For example, if the royal names are [George VI, William II, Elizabeth I, William I] the result of the sort is [Elizabeth I, George VI, William I, William II].

getSortedList takes in a list of royal name strings and must return the list of names sorted first by given name, then by ordinal.

## Constraints:

There will be between 1 and 50 names in the list.
Each name is a single string composed of firstName and ordinal, separated by a space.

ordinal is a valid Roman numeral representing a number between 1 and 50, inclusive.

The length of firstName will be between 1 and 20.
Each firstName comprises only uppercase and lowercase ascii characters [A-Za-z].
