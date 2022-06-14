function solution(arr) {
    if (arr == [])
        return [[]]
    
    let ids = arr.map(item => item.id); // Extracting IDs into an array

    ids = ids.sort((a, b) => { return a - b }) // Sorting the extracted array

    const uniqueArr = [...new Map(arr.map((item) => [item["id"], item])).values()]; // Array of unique objects

    let repeatCount = 0;
    for (let i = 0; i < ids.length; i++) {
        if (ids[i + 1] && ids[i] == ids[i + 1])
            repeatCount++;
    } // Finding the count of repeated IDs (excluding first count of unique IDs)

    if (repeatCount == 0 || repeatCount >= uniqueArr.length)  // If input array of objects is completely unique or all objects are same
        return [uniqueArr]

    let result = [];
    for (let i = 0; i < (arr.length + repeatCount - uniqueArr.length); i++) { // Compute number of unique set of arrays needed
        result.push(uniqueArr)
    }
    return result;
}
