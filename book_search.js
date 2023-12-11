/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 

 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
   
    let resArr = [];

    /** for each book of (Title, ISBN, Content):
    / *      for each Content in the book:
    / *          find the searchTerm in the Text using function findContent */
    scannedTextObj.forEach((book) => book.Content.forEach((content) => findInContent(book, content, searchTerm, resArr)));

    var result = {
        "SearchTerm": searchTerm,
        "Results": resArr
    };
    
    return result; 
}

function findInContent(book, content, searchTerm, resArr){
    /** for each of a book's contents, update resArr with any findings of searchTerm
     * resArr will push in new matches of searchTerm by tracking new ISBN, Page, Line */
    let sentence = content.Text;
    
    // if indexOf == -1, searchTerm not in the Text
    // else, push in ISBN, Page, Line
    if (sentence.indexOf(searchTerm) >= 0){
        resArr.push({
            "ISBN": book.ISBN,
            "Page": content.Page,
            "Line": content.Line
        });
    }
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Expected result for test3result
 *  Test for correct matches for a search term in the books. 
 *  */
const expected3result = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

/** Expected result for test4result
 *  Test for NO matches for a search term not in the books. 
 *  */
const expected4result = {
    "SearchTerm": "wedding",
    "Results": [
    ]
}

/** Created new array for the test case of using multiple books (2+). */
const multipleBooks = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "Sample Book #2",
        "ISBN": "1234567890123",
        "Content": [
            {
                "Page": 11,
                "Line": 1,
                "Text": "in her eyes, the moonlight shown through her screen"
            },
            {
                "Page": 22,
                "Line": 2,
                "Text": "the testing a sample. ThE hare slowly jumped off"
            },
            {
                "Page": 33,
                "Line": 3,
                "Text": "Walking in the breeze. Moon hits her face"
            } 
        ] 
    }
]

/** Expected result for test5result 
 *  Test for correct matches for a search term in multiple books.
 *  */
const expected5result = {
    "SearchTerm": "her",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        },
        {
            "ISBN": "1234567890123",
            "Page": 11,
            "Line": 1
        },
        {
            "ISBN": "1234567890123",
            "Page": 33,
            "Line": 3
        }
    ]
}

/** Expected result for test6result 
 *  Test for correct matches for a case-sensitive search term.
 *  */
const expected6result = {
    "SearchTerm": "ThE",
    "Results": [
        {
            "ISBN": "1234567890123",
            "Page": 22,
            "Line": 2
        }
    ]
}

/** No books inputted: null book list */
const nullList = []

/** Expected result for test7result 
 *  Test for null book list.
 *  */
const expected7result = {
    "SearchTerm": "the",
    "Results": []
}

/** No book content inputted (for second book): null book content */
const multipleBooks2 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "Sample Book #2",
        "ISBN": "1234567890123",
        "Content": []
    }
]

/** Expected result for test8result
 *  Test for null content in book.
 *  */

const expected8result = {
    "SearchTerm": "momentum",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Positive test, test #3. 
 *  Test that should produce correct results for a search term found in the input with one book. 
 *  */
const test3result = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(test3result) === JSON.stringify(expected3result)){
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", expected3result);
    console.log("Received:", test3result);
}

/** Negative test, test #4
 *  Test that should produce NO results for a search term not found in the input.  
 *  */
const test4result = findSearchTermInBooks("wedding", twentyLeaguesIn);
if (JSON.stringify(test4result) === JSON.stringify(expected4result)){
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", expected4result);
    console.log("Received:", test4result);
}

/** Positive test, test #5
 *  Test that should returns all matches for a search term found in the input of multiple (two or more) books.
 *  */
const test5result = findSearchTermInBooks("her", multipleBooks);
if (JSON.stringify(test5result) === JSON.stringify(expected5result)){
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", expected5result);
    console.log("Received:", test5result);
}

/** Case-sensitive test, test #6
 *  Test that should only return the search terms spelled with the exact same capitalization.
 *  */
const test6result = findSearchTermInBooks("ThE", multipleBooks);
if (JSON.stringify(test6result) === JSON.stringify(expected6result)){
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", expected6result);
    console.log("Received:", test6result);
}

/** Edge case test, test #7
 *  Test that should process an empty inputted list correctly, outputting result as an empty list.
 *  */
const test7result = findSearchTermInBooks("the", nullList);
if (JSON.stringify(test7result) === JSON.stringify(expected7result)){
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", expected7result);
    console.log("Received:", test7result);
}

/** Edge case test, test #8
 *  Test that should process books with empty book content correctly with no errors and matches.
 *  */
const test8result = findSearchTermInBooks("momentum", multipleBooks2);
if (JSON.stringify(test8result) === JSON.stringify(expected8result)){
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", expected8result);
    console.log("Received:", test8result);
}