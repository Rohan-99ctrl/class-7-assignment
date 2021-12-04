// Arrange a data sheet for a family phone book and publish it


const familyData = [

    {
        id          : 01,
        nam         : 'Jubayer Molla',
        relation    : 'Mother / Father / Daughter / Son',
        location    : 'Shodor, Narail',
        phn         : '01758975685',
    },

    {
        id          : 02,
        nam         : 'Hasan Anamul',
        relation    : 'Mother / Father / Son',
        location    : 'Mirzap, Narail',
        phn         : '01678547588',
    },

    {
        id          : 03,
        nam         : 'MD. Nasim',
        relation    : 'Half-sister / Half-brother',
        location    : 'Kalia, Narail',
        phn         : '01587415458',
    },

    {
        id          : 04,
        nam         : 'MD. Eman',
        relation    : '3/4-sister / 3/4-brother',
        location    : 'Kalia, Narail',
        phn         : '01888458754',
    },

    {
        id          : 05,
        nam         : 'Rasel Hasan',
        relation    : 'Grandmother / Grandfather / Granddaughter / Grandson',
        location    : 'Kalia, Narail',
        phn         : '01845861257',
    },

    {
        id          : 06,
        nam         : 'Shoriyot Molla',
        relation    : 'Sister / Brother',
        location    : 'Kalia, Narail',
        phn         : '01754584522',
    },

    {
        id          : 07,
        nam         : 'Golam Mostofa',
        relation    : 'Aunt / Uncle / Niece / Nephew',
        location    : 'Kalia, Narail',
        phn         : '01888545842',
    },

    {
        id          : 08,
        nam         : 'Sahariar Khondokar',
        relation    : 'Cousin',
        location    : 'Kalia, Narail',
        phn         : '01845487554',
    },

    {
        id          : 09,
        nam         : 'Mannu Sheikh',
        relation    : 'Great-grandmother / Great-grandfather / Great-granddaughter',
        location    : 'Kalia, Narail',
        phn         : '01845487777',
    },

    {
        id          : 10,
        nam         : 'SM Abdullah',
        relation    : 'Grandaunt / Granduncle / Grandniece / Grandnephew',
        location    : 'Kalia, Narail',
        phn         : '01854567785',
    },

];



for (let xy = 0; xy < familyData.length; xy++){

    console.log(`
        ID No.      : ${familyData[xy].id}
        Name        : ${familyData[xy].nam}
        relation    : ${familyData[xy].relation}
        Location    : ${familyData[xy].location}
        Phone No.   : ${familyData[xy].phn}
    `);

}






