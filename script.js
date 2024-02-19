function countTrue(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return 0;
    }
    
    // Initialize a counter for true values
    let trueCount = 0;
    
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is true
        if (arr[i] === true) {
            // Increment the counter
            trueCount++;
        }
    }
    
    // Return the count of true values
    return trueCount;
}


