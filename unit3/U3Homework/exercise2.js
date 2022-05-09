// Task: Identify the longest of three names.

// Build Specifications:
// Start with three variables name1, name2, and name3 which hold three names.

// The code should output the longest of the three names. e.g., "Ada Lovelace has the longest name.". If there is a tie between any two, list both. e.g., “Charles and Brendan tie for the longest name.”. Or if all three names are the same length, output “All three names, Dorothy, Charles, and Brendan, are the same length.”

// Make sure to test your code with many different combinations of lengths. There are 7 possible outcomes.


function longestName(name1, name2, name3) {

    if (name1.length > name2.length && name1.length > name3.length) {

        console.log(`${name1} has the longest name.`)
    }
    else if (name2.length > name1.length && name2.length > name3.length) {

        console.log(`${name2} has the longest name.`)
    }
    else if (name3.length > name1.length && name3.length > name2.length) {

        console.log(`${name3} has the longest name.`)
    }
    else if (name2.length > name1.length && name2.length === name3.length) {

        console.log(`${name2} and ${name3} are tied for longest name.`)
    }
    else if (name1.length > name2.length && name1.length === name3.length) {

        console.log(`${name1} and ${name3} are tied for longest name.`)
    }
    else if (name1.length > name3.length && name1.length === name2.length) {

        console.log(`${name1} and ${name2} are tied for longest name.`)
    }
    else {
        console.log(`${name1} ${name2} and ${name3} all have the same length of name.`)
    }

}

longestName("Chris Redfield", 'Ada Wong', 'Leon Kennedy') //chris
longestName('Ada Wong', "Chris Redfield", 'Leon Kennedy')
longestName('Ada Wong', 'Leon Kennedy', "Chris Redfield")
longestName('Ada Wong', 'Leon Kennedy', "Ethan Winter") //leon and ethan
longestName('Dorothy', 'Charles', 'Brendan') //tie between all