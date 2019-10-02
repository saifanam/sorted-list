
const LIMIT = 50;
const NAME_LENGTH = 20;
const NAME_PATTERN = /^[A-Za-z ]+$/;

// converts a Roman number to its Arabic equivalent
function romanToEnglish(roman) {

    const romanDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let english = romanDict[roman.charAt(0)];

    for (let i = 1; i < roman.length; i++) {

        let current = romanDict[roman.charAt(i)];
        let previous = romanDict[roman.charAt(i - 1)];

        if (current > previous) {
            // this is the case when the Roman numbers are NOT in descending order, like XLII etc
            english = english + current - previous * 2;

        } else {
            // this is the case when the numbers are in descending order, like XVI or LX etc
            english += current;
        }
    }
    return english;
}

function getSortedList(names) {
    if (names.length > LIMIT) {
        return `List can contain at most ${LIMIT} names!`;
        
    } else {
        // first step is to sort alphabetically
        let sortedNames = names.sort();

        for (let i = 1; i < sortedNames.length; i++) {

            if (sortedNames[i].indexOf(' ') === -1 ||
            sortedNames[i - 1].indexOf(' ') === -1) {
                return `Name should have space!`;

            } else if (sortedNames[i].indexOf(' ') === 0 ||
            sortedNames[i - 1].indexOf(' ') === 0) {
                return `Name can't start with space!`;

            } else if (sortedNames[i].match(NAME_PATTERN) === null ||
            sortedNames[i - 1].match(NAME_PATTERN) === null) {
                return `Name can't have special characters!`;

            } else {
                let currentName = sortedNames[i].split(' ');
                let previousName = sortedNames[i - 1].split(' ');

                if (currentName[0].length > NAME_LENGTH ||
                previousName[0].length > NAME_LENGTH) {
                    return `Name can't have more than ${NAME_LENGTH} characters`;
                }

                // compare if current and previous names are same, ie: 'William' === 'William'
                if (currentName[0] === previousName[0]) {

                    let englishCurrent = romanToEnglish(currentName[1]);
                    let englishPrevious = romanToEnglish(previousName[1]);

                    if (englishCurrent > LIMIT || englishPrevious > LIMIT) {
                        return `Roman number should be less than ${LIMIT}`;
                    }

                    // if the names are same compare their corresponding Roman number.
                    if (englishCurrent < englishPrevious) {

                        // if needed swap them to create an ascending order of final names
                        let tempName = previousName.join(' ');
                        sortedNames[i - 1] = currentName.join(' ');
                        sortedNames[i] = tempName;
                    }
                }
            }
        }
        return sortedNames;
    }
}

// testing the logic
const args = process.argv.slice(2);
console.log(getSortedList(args));
