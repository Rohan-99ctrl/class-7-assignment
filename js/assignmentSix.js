// Create data in a student array and object  where there will be data of about 50 people and print data of Mirpur and Banani residents starting from there



const studentData2 = [

    {
        nam         : 'Sheikh Abdullah',
        roll        : 01,
        location    : 'Mirpur'
    },

    {
        nam         : 'Shahadat Sheikh',
        roll        : 02,
        location    : 'Banani'
    },

    {
        nam         : 'Rohima Khatun',
        roll        : 03,
        location    : 'Mirpur'
    },

    {
        nam         : 'Shohan Khondokar',
        roll        : 04,
        location    : 'Banani'
    },

    {
        nam         : 'Korim Khondokar',
        roll        : 05,
        location    : 'Banani'
    },

    {
        nam         : 'Rotna Khatun',
        roll        : 06,
        location    : 'Banani'
    },

    {
        nam         : 'Rahim Sardar',
        roll        : 07,
        location    : 'Mirpur'
    },

    {
        nam         : 'Addri Khatun',
        roll        : 08,
        location    : 'Uttora'
    },

    {
        nam         : 'Shahajan Sordar',
        roll        : 09,
        location    : 'Banani'
    },

    {
        nam         : 'Younus Sardar',
        roll        : 10,
        location    : 'Mirpur'
    },

    {
        nam         : 'Shorna Khatun',
        roll        : 11,
        location    : 'Banani'
    },

    {
        nam         : 'Jahanara Khatun',
        roll        : 12,
        location    : 'Mirpur'
    },

    {
        nam         : 'Arman Sordar',
        roll        : 13,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Rahim Sardar',
        roll        : 14,
        location    : 'Mirpur'
    },

    {
        nam         : 'Yasin Sheikh',
        roll        : 15,
        location    : 'Banani'
    },

    {
        nam         : 'Shahin Sheikh',
        roll        : 16,
        location    : 'Mirpur'
    },

    {
        nam         : 'Yeasmin Khatun',
        roll        : 17,
        location    : 'Banani'
    },

    {
        nam         : 'Prince Molla',
        roll        : 18,
        location    : 'Mirpur'
    },

    {
        nam         : 'Arafat Molla',
        roll        : 19,
        location    : 'Narail'
    },

    {
        nam         : 'Rasna Khatun',
        roll        : 20,
        location    : 'Mirpur'
    },

    {
        nam         : 'Yeamin Kazi',
        roll        : 21,
        location    : 'Banani'
    },

    {
        nam         : 'Younus Kazi',
        roll        : 22,
        location    : 'Narail'
    },

    {
        nam         : 'Suborna Khatun',
        roll        : 23,
        location    : 'Khulna'
    },

    {
        nam         : 'Choyon Biswas',
        roll        : 24,
        location    : 'Mirpur'
    },

    {
        nam         : 'Din Biswas',
        roll        : 25,
        location    : 'Uttora'
    },

    {
        nam         : 'Sabina Khatun',
        roll        : 26,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Choyonti Sorkar',
        roll        : 27,
        location    : 'Banani'
    },

    {
        nam         : 'Dip Sorkar',
        roll        : 28,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Lokkhi Sorkar',
        roll        : 29,
        location    : 'Banani'
    },

    {
        nam         : 'Miraz Shen',
        roll        : 30,
        location    : 'Banani'
    },

    {
        nam         : 'Alom Hasan',
        roll        : 31,
        location    : 'Dinajpur'
    },

    {
        nam         : 'MD. Naim',
        roll        : 32,
        location    : 'Uttora'
    },

    {
        nam         : 'Ruman Sheikh',
        roll        : 33,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Sadat Rahman',
        roll        : 34,
        location    : 'Uttora'
    },

    {
        nam         : 'Riyazul Islam',
        roll        : 35,
        location    : 'Uttora'
    },

    {
        nam         : 'Sorowar Islam',
        roll        : 36,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Riyaz Mostofa',
        roll        : 37,
        location    : 'Mirpur'
    },

    {
        nam         : 'Rahim Hasan',
        roll        : 38,
        location    : 'Mirpur'
    },

    {
        nam         : 'Korim Mostofa',
        roll        : 39,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Sujon Biswas',
        roll        : 40,
        location    : 'Mirpur'
    },

    {
        nam         : 'Nodi Roy',
        roll        : 41,
        location    : 'Narail'
    },

    {
        nam         : 'Anamul Molla',
        roll        : 42,
        location    : 'Mirpur'
    },

    {
        nam         : 'Ataur Islam',
        roll        : 43,
        location    : 'Narail'
    },

    {
        nam         : 'Sheikh Sohel',
        roll        : 44,
        location    : 'Mirpur'
    },

    {
        nam         : 'MD. Rajib',
        roll        : 45,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Mostofa Kamal',
        roll        : 46,
        location    : 'Mirpur'
    },

    {
        nam         : 'MD. Sohel',
        roll        : 47,
        location    : 'Narail'
    },

    {
        nam         : 'Hasan Molla',
        roll        : 48,
        location    : 'Dinajpur'
    },

    {
        nam         : 'Peash Roy',
        roll        : 49,
        location    : 'Narail'
    },

    {
        nam         : 'Shibly Sardar',
        roll        : 50,
        location    : 'Narail'
    },

];




for ( let z = 0; z < studentData2.length; z++ ){

    if( studentData2[z].location == 'Mirpur' || studentData2[z].location == 'Banani' ){

        console.log(`
            Student Name        : ${studentData2[z].nam}
            Student Roll        : ${studentData2[z].roll}
            Student Location    : ${studentData2[z].location}
        `);

    }

}











