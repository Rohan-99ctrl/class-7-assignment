// Create an array and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result

// object data structure

const students = [

    {
        nam         : 'Sheikh Abdullah',
        roll        : 01,
        fname       : 'Shahadat Sheikh',
        mname       : 'Rohima Khatun',
        bn          : 90,
        en          : 85,
        math        : 80,
        sci         : 90,
        socity      : 80,
        rel         : 100,
    },

    {
        nam         : 'Shohan Khondokar',
        roll        : 02,
        fname       : 'Korim Khondokar',
        mname       : 'Shahanaz Khatun',
        bn          : 95,
        en          : 80,
        math        : 85,
        sci         : 80,
        socity      : 81,
        rel         : 90,
    },

    {
        nam         : 'Rotna Khatun',
        roll        : 03,
        fname       : 'Rahim Sardar',
        mname       : 'Addri Khatun',
        bn          : 90,
        en          : 82,
        math        : 86,
        sci         : 70,
        socity      : 77,
        rel         : 85,
    },

    {
        nam         : 'Shahajan Sordar',
        roll        : 04,
        fname       : 'Younus Sardar',
        mname       : 'Shorna Khatun',
        bn          : 88,
        en          : 85,
        math        : 80,
        sci         : 75,
        socity      : 73,
        rel         : 80,
    },

    {
        nam         : 'Arman Sordar',
        roll        : 05,
        fname       : 'Rahim Sardar',
        mname       : 'Jahanara Khatun',
        bn          : 85,
        en          : 81,
        math        : 74,
        sci         : 71,
        socity      : 70,
        rel         : 80,
    },

    {
        nam         : 'Yasin Sheikh',
        roll        : 06,
        fname       : 'Shahin Sheikh',
        mname       : 'Yeasmin Khatun',
        bn          : 80,
        en          : 80,
        math        : 70,
        sci         : 69,
        socity      : 66,
        rel         : 80,
    },

    {
        nam         : 'Arafat Molla',
        roll        : 07,
        fname       : 'Prince Molla',
        mname       : 'Rasna Khatun',
        bn          : 77,
        en          : 80,
        math        : 70,
        sci         : 66,
        socity      : 60,
        rel         : 80,
    },

    {
        nam         : 'Yeamin Kazi',
        roll        : 08,
        fname       : 'Younus Kazi',
        mname       : 'Suborna Khatun',
        bn          : 70,
        en          : 77,
        math        : 69,
        sci         : 65,
        socity      : 55,
        rel         : 80,
    },

    {
        nam         : 'Choyon Biswas',
        roll        : 09,
        fname       : 'Din Biswas',
        mname       : 'Sabina Khatun',
        bn          : 65,
        en          : 70,
        math        : 66,
        sci         : 60,
        socity      : 49,
        rel         : 80,
    },

    {
        nam         : 'Choyonti Sorkar',
        roll        : 10,
        fname       : 'Dip Sorkar',
        mname       : 'Lokkhi Sorkar',
        bn          : 60,
        en          : 66,
        math        : 59,
        sci         : 55,
        socity      : 40,
        rel         : 80,
    },

];


for ( let list = 0; list < students.length; list++ ){


    let naam = students[list].nam;
    let roll = students[list].roll;
    let studentF = students[list].fname;
    let studentM = students[list].mname;
    let ban = students[list].bn;
    let eng = students[list].en;
    let math = students[list].math;
    let science = students[list].sci;
    let socity = students[list].socity;
    let religion = students[list].rel;


    function ResultsSystem(){

        this.grade = function( subGrade ){
            if( subGrade >= 0 && subGrade <= 32 ){
                return 'F';
            }else if( subGrade >= 33 && subGrade <= 39 ){
                return 'D';
            }else if( subGrade >= 40 && subGrade <= 49 ){
                return 'C';
            }else if( subGrade >= 50 && subGrade <= 59 ){
                return 'B';
            }else if( subGrade >= 60 && subGrade <= 69 ){
                return 'A-';
            }else if( subGrade >= 70 && subGrade <= 79 ){
                return 'A';
            }else if( subGrade >= 80 && subGrade <= 100 ){
                return 'A+';
            }
        }
    
    
        this.gpa = function( subGpa ){
            if( subGpa >= 0 && subGpa <= 32  ){
                return 00;
            }else if( subGpa >= 33 && subGpa <= 39 ){
                return 1.00;
            }else if( subGpa >= 40 && subGpa <= 49 ){
                return 2.00;
            }else if( subGpa >= 50 && subGpa <= 59 ){
                return 3.00;
            }else if( subGpa >= 60 && subGpa <= 69 ){
                return 3.50;
            }else if( subGpa >= 70 && subGpa <= 79 ){
                return 4.00;
            }else if( subGpa >= 80 && subGpa <= 100 ){
                return 5.00;
            }
        }
    
    
        this.finalGpa = function(gpaCal){
            if( gpaCal >= 0.00 && gpaCal <= 0.99 ){
                return 'F';
            }else if( gpaCal >= 1.00 && gpaCal <= 1.99 ){
                return 'D';
            }else if( gpaCal >= 2.00 && gpaCal <= 2.99 ){
                return 'C';
            }else if( gpaCal >= 3.00 && gpaCal <= 3.49 ){
                return 'B';
            }else if( gpaCal >= 3.50 && gpaCal <= 3.99 ){
                return 'A-';
            }else if( gpaCal >= 4.00 && gpaCal <= 4.99 ){
                return 'A';
            }else if( gpaCal == 5.00 ){
                return 'A+';
            }
        }
    
    
    
        this.cgpaCal = function(ban, eng, math, science, socity, religion){
            
            let total = ban + eng + math + science + socity + religion;
            let cgpa = (total / 6);

            if(ban == 0 || eng == 0 || math == 0 || science == 0 || socity == 0 || religion == 0){

                return 'Failed';

            }else{

                return `${cgpa.toFixed(2)} & Grade     : ${leaderDec.finalGpa(cgpa)}`;

            }

        }
    
    
    }


    let leaderDec = new ResultsSystem();



    console.log(`
    
        Student Name        : ${naam}
        Student Roll        : ${roll}
        Father's Name       : ${studentF}
        Mother's Name       : ${studentM}
        Student GPA         : ${leaderDec.cgpaCal(leaderDec.gpa(ban), leaderDec.gpa(eng), leaderDec.gpa(math), leaderDec.gpa(science), leaderDec.gpa(socity), leaderDec.gpa(religion))}
        -------------------------------------------------------------------------
        Marks Sheet : 

        SUBJECT         MARKS       GRADE         GPA
        -------------------------------------------------------------------------
        Bangla          ${ban}          ${leaderDec.grade(ban)}            ${leaderDec.gpa(ban)}
        English         ${eng}          ${leaderDec.grade(eng)}            ${leaderDec.gpa(eng)}
        Math            ${math}          ${leaderDec.grade(math)}             ${leaderDec.gpa(math)}
        Science         ${science}          ${leaderDec.grade(science)}             ${leaderDec.gpa(science)}
        Socity          ${socity}          ${leaderDec.grade(socity)}             ${leaderDec.gpa(socity)}
        Religion        ${religion}          ${leaderDec.grade(religion)}             ${leaderDec.gpa(religion)}
    
    `);



}









