function getUrlParameterValue(url, parameter) {
    const searchParams = new URLSearchParams(new URL(url).search);
    return searchParams.get(parameter);
}



// reverse   a number

function reverseNumber(number) {
    let reversedNumber = 0;
    while (number > 0) {
        reversedNumber = reversedNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    console.log(reversedNumber);
}


