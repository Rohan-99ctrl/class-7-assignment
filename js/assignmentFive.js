// Create fees array and object data for a picnic where everyone will provide free basic information for everyone.


const picnicData = [

    {
        id          : 01,
        nam         : 'Mridul Khondokar',
        age         : 23,
        location    : 'Narail',
        fee         : 900,
    },

    {
        id          : 02,
        nam         : 'SM Abdullah',
        age         : 21,
        location    : 'Narail',
        fee         : 900,
    },

    {
        id          : 03,
        nam         : 'Tibro Hasan',
        age         : 24,
        location    : 'Mirpur',
        fee         : 900,
    },

    {
        id          : 04,
        nam         : 'Abir Mostofa',
        age         : 22,
        location    : 'Khulna',
        fee         : 900,
    },

    {
        id          : 05,
        nam         : 'Shawon Molla',
        age         : 20,
        location    : 'Narail',
        fee         : 900,
    },

    {
        id          : 06,
        nam         : 'Anowar Hossain',
        age         : 21,
        location    : 'Narail',
        fee         : 900,
    },

    {
        id          : 07,
        nam         : 'Shahin Sheikh',
        age         : 25,
        location    : 'Khulna',
        fee         : 900,
    },

    {
        id          : 08,
        nam         : 'Sheikh Mohammad',
        age         : 21,
        location    : 'Dinajpur',
        fee         : 900,
    },

    {
        id          : 09,
        nam         : 'Korim Molla',
        age         : 23,
        location    : 'Dhaka',
        fee         : 900,
    },

    {
        id          : 10,
        nam         : 'Choyon Biswas',
        age         : 21,
        location    : 'Dhaka',
        fee         : 900,
    },

];


let count = 0;

for (let ab = 0; ab < picnicData.length; ab++){

    console.log(`
        ID No.      : ${picnicData[ab].id}
        Name        : ${picnicData[ab].nam}
        Age         : ${picnicData[ab].age} Years
        Location    : ${picnicData[ab].location}
        Fee         : ${picnicData[ab].fee} TK
    `);

    count += picnicData[ab].fee;

}


    console.log(`
        TOTAL FEES          : ${count} TK
    `);






