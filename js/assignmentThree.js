// Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive


const clubData = [

    {
        nam         : 'Md Naim Molla',
        age         : 45,
        position    : 'Administrator',
        location    : 'Narails',
    },

    {
        nam         : 'Md Rofiq Molla',
        age         : 48,
        position    : 'Administrator',
        location    : 'Mirpur',
    },

    {
        nam         : 'Mursalin Biswas',
        age         : 41,
        position    : 'Editor',
        location    : 'Narail',
    },

    {
        nam         : 'BM Burhan',
        age         : 25,
        position    : 'Editor',
        location    : 'Khulna',
    },

    {
        nam         : 'SM Sajal',
        age         : 27,
        position    : 'Editor',
        location    : 'Shatkhira',
    },

    {
        nam         : 'SM Abdullah',
        age         : 21,
        position    : 'Supporter',
        location    : 'Narail',
    },

    {
        nam         : 'Sheikh Mohammad',
        age         : 23,
        position    : 'Supporter',
        location    : 'Dhaka',
    },

    {
        nam         : 'Faisal Sheikh',
        age         : 25,
        position    : 'Supporter',
        location    : 'Cumilla',
    },

    {
        nam         : 'Rohan Mostofa',
        age         : 20,
        position    : 'Learner',
        location    : 'Narail',
    },

    {
        nam         : 'Md Nasim',
        age         : 17,
        position    : 'Learner',
        location    : 'Gopalgong',
    },

    {
        nam         : 'Kamal Molla',
        age         : 15,
        position    : 'Learner',
        location    : 'Shirajgong',
    },

    {
        nam         : 'Shahadot Hossain',
        age         : 14,
        position    : 'Learner',
        location    : 'Dinajpur',
    },

];



for (let x = 0; x < clubData.length; x++){

    let workersName = clubData[x].nam;
    let workersage = clubData[x].age;
    let workersposition = clubData[x].position;
    let workersLocation = clubData[x].location;

    function ClubFunc(){

        this.access = function(){

            if( workersage <  18){
                return `
                    Hello ${workersName},
                    Your age is ${workersage} years.
                    You are the ${workersposition} of lfwf club.
                    Your location is ${workersLocation}
                    So, you are not eligible at this moment. Please pay attention to your work. Thank you.
                `;
            }else if( workersage >= 18 && workersage <= 40 ){
                return `
                    Hello ${workersName},
                    Your age is ${workersage} Years.
                    You are the ${workersposition} of lfwf club.
                    Your location is ${workersLocation}
                    You are welcome to join our company. Stay with us. Thank you.
                `;
            }else if( workersage > 40 ){
                return `
                    Hello ${workersName},
                    Your age is ${workersage} Years.
                    You are the ${workersposition} of lfwf club.
                    Your location is ${workersLocation}
                    You are a very respected person in our company. So much respect for our company for you. Welcome and best wishes to all of you.
                `;
            }

        }

    }


    let leaderCall = new ClubFunc();
    
    console.log(leaderCall.access());


}








