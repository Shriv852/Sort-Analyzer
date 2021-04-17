// Library of Sort Functions
// Put your sort function solutions here...

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    var swapp;
    let numCompare = anArray.length - 1;
    do {
        swapp = false;
        for (i = 0; i < numCompare; i++) {
            if (anArray[i] > anArray[i + 1]) {
                var forNow = anArray[i];
                anArray[i] = anArray[i + 1];
                anArray[i + 1] = forNow;
                swapp = true;
            }
        }
        numCompare--;
    } while (swapp);
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for (let i = 0; i < anArray.length - 1; i++) {
        let minPosition = i;
        for (let s = minPosition + 1; s < anArray.length; s++) {
            if (anArray[s] < anArray[minPosition]) {
                minPosition = s;
            }
        }
        let swap = anArray[i];
        anArray[i] = anArray[minPosition];
        anArray[minPosition] = swap;
    }
}
// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    for (i = 1; i < anArray.length; i++) {
        insertValue = anArray[i];
        insertPosition = i - 1;

        while (insertPosition >= 0 && anArray[insertPosition] > insertValue) {
            anArray[insertPosition + 1] = anArray[insertPosition];
            insertPosition--;
        }
        anArray[insertPosition + 1] = insertValue;
    }
}