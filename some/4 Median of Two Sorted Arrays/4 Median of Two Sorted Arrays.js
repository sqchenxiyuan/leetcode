let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    arr2 = [0,6],
    findMedianSortedArrays;

findMedianSortedArrays = function(arr1, arr2) {
    let length1 = arr1.length,
        length2 = arr2.length,
        length = length1 + length2,
        a = 0,
        b = 0,
        x1, //需要加的第一个位置
        x2; //需要加的第二个位置

    arr1.push(Infinity);
    arr2.push(Infinity);

    if (length % 2 === 0){
        x1 = length / 2;
        x2 = x1 + 1;
    } else {
        x1 = Math.floor(length / 2) + 1;
        x2 = x1;
    }
    x1--;
    x2--;

    for (let i = 0; i < length && (i <= x1 || i <= x2); i++){
        let min;

        if (arr1[0] < arr2[0]){
            min = arr1.shift();
        } else {
            min = arr2.shift();
        }

        if (i === x1){
            a = min;
        }

        if (i === x2){
            b = min;
        }
    }

    return (a + b) / 2;

};

console.log(findMedianSortedArrays(arr1, arr2));