// Create a MERN stack, Laravel, Django, Golan, WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students.


const studentData = [

    {
        nam     : 'Rohan Mostofa',
        age     : 40,
        skills  : 'MERN stack Developer',
        income  : 4000,
    },

    {
        nam     : 'SM Abdullah',
        age     : 21,
        skills  : 'Laravel Developer',
        income  : 3000,
    },

    {
        nam     : 'Choyon Biswas',
        age     : 25,
        skills  : 'Django Developer',
        income  : 2000,
    },

    {
        nam     : 'Korim Molla',
        age     : 27,
        skills  : 'Golan Developer',
        income  : 2000,
    },

    {
        nam     : 'Sheikh Mohammad',
        age     : 33,
        skills  : 'WordPress Developer',
        income  : 1000,
    },

    {
        nam     : 'Shahin Sheikh',
        age     : 25,
        skills  : 'Java Developer',
        income  : 2500,
    },

    {
        nam     : 'Anowar Hossain',
        age     : 22,
        skills  : 'MERN stack Developer',
        income  : 3000,
    },

    {
        nam     : 'Shawon Molla',
        age     : 24,
        skills  : 'MERN stack Developer',
        income  : 3500,
    },

    {
        nam     : 'Molla Faisal',
        age     : 20,
        skills  : 'Laravel Developer',
        income  : 2500,
    },

    {
        nam     : 'Abir Mostofa',
        age     : 20,
        skills  : 'Django Developer',
        income  : 3000,
    },

    {
        nam     : 'Tibro Hasan',
        age     : 20,
        skills  : 'Golan Developer',
        income  : 2500,
    },

    {
        nam     : 'Hasan Anamul',
        age     : 20,
        skills  : 'WordPress Developer',
        income  : 500,
    },

    {
        nam     : 'Shohanur Rahman',
        age     : 21,
        skills  : 'Java Developer',
        income  : 2200,
    }

];


let zero = 0;


for (let i = 0; i < studentData.length; i++){
    
    if(studentData[i].age > 20){
        console.log(`
            Student Name        : ${studentData[i].nam}
            Student Age         : ${studentData[i].age} Years
            Student Skills      : ${studentData[i].skills}
            Student Income      : $${studentData[i].income}
        `);
    }

    zero += studentData[i].income;

}

console.log(`
    Total Cost     : $${zero}
`);








