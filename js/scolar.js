let firstName=document.getElementById("firstName")
let lastName=document.getElementById("lastName")
let age=document.getElementById("age")
let gender=document.getElementById("gender")
let phoneNum=document.getElementById("tel")
let school=document.getElementById("school")
let country=document.getElementById("country")
let math=document.getElementById("math")
let english=document.getElementById("english")
let sub1=document.getElementById("sub1")
let sub2=document.getElementById("sub2")
let sub3=document.getElementById("sub3")
let sub4=document.getElementById("sub4")
let sub5=document.getElementById("sub5")
let sub6=document.getElementById("sub6")
let summary1=document.getElementById("summary1")
let summary2=document.getElementById("summary2")

let cutOff=180
let agePoints = 0
let countryPoints = 0
let scholarPoints
let gradePoints = 0
let avgGradePoints

let ins1=document.getElementById("ins1")
let fNameErr=document.getElementById("fNameErr")
let lastNameErr=document.getElementById("lastNameErr")
let ageErr=document.getElementById("ageErr")
let genderErr=document.getElementById("genderErr")
let telErr=document.getElementById("telErr")
let schoolErr=document.getElementById("schoolErr")
let countryErr=document.getElementById("countryErr")
let mathErr=document.getElementById("mathErr")
let englishErr=document.getElementById("englishErr")
let sub1Err=document.getElementById("sub1Err")
let sub2Err=document.getElementById("sub2Err")
let sub3Err=document.getElementById("sub3Err")
let sub4Err=document.getElementById("sub4Err")
let sub5Err=document.getElementById("sub5Err")
let sub6Err=document.getElementById("sub6Err")



btn.addEventListener('click', function(){
    // alert("i was clicked 😭")
    validateForm()
    // gradeCalc()
})

// Dummy event Listener for editing code
// btn.addEventListener('click', function(){
//     // alert("i was clicked 😭")
//     alertWork()
// })

function validateForm(){
    if (firstName.value=="" || lastName.value=="") {
        // alert("Enter First Name")
        fNameErr.innerHTML=("Name Fields needed")
    }
//     if (lastName.value==""){
//         // alert("Enter Last Name")
//         lastNameErr.innerHTML=("Enter Last Name")
//    }
   else if (age.value=="" || tel.value==""){
        // alert("Enter your age")
        ageErr.innerHTML=("Age and Phone Fields Needed")
    }
    // if (lastName.value==""){
    //     // alert("Enter your Phone Number")
    //     telErr.innerHTML=("Enter valid address")
    // }

    // if (gender.value=="" || school.value=="") {
    //     // alert("Pick gender")
    //     genderErr.innerHTML=("Gender and School fields Needed")
    // }
    else if (school.value=="" || gender.value=="" || country.value==""){
        // alert("Enter your school name")
        schoolErr.innerHTML=("Gender, School and country fields Needed")
   }
//    if (country.value==""){
//         // alert("Pick Country")
//         countryErr.innerHTML=("Pick Country")
//     }
    else if (math.value=="") {
        // alert("Please enter your full Name")
        mathErr.innerHTML=("Math Score")
    }
    else if (english.value==""){
        // alert("Please enter valide email")
        englishErr.innerHTML=("English Score")
   }
   else if (sub1.value==""){
        // alert("Please enter your Phone Number")
        sub1Err.innerHTML=("Enter score")
    }
    else if (sub2.value==""){
        // alert("Please enter your valid Address")
        sub2Err.innerHTML=("Enter score")
    }
    else if (sub3.value=="") {
        // alert("Please enter your full Name")
        sub3Err.innerHTML=("Enter score")
    }
    else if (sub4.value==""){
        // alert("Please enter valide email")
        sub4Err.innerHTML=("Enter score")
    }
    else if (sub5.value==""){
        // alert("Please enter your Phone Number")
        sub5Err.innerHTML=("Enter score")
    }
    else if (sub6.value==""){
        // alert("Please enter your valid Address")
        sub6Err.innerHTML=("Enter score")
    }
    else{
        ageCalc()
        // clearLabels()
    }
    clearLabels()
}

function clearLabels() {
    if (firstName.value!="" && lastName.value!="") {
        // alert("Enter First Name")
        fNameErr.innerHTML=("")
    }
//     if (lastName.value!=""){
//         // alert("Enter Last Name")
//         lastNameErr.innerHTML=("")
//    }
   if (age.value!="" && tel.value!=""){
        // alert("Enter your age")
        ageErr.innerHTML=("")
    }
    // if (tel.value!=""){
    //     // alert("Enter your Phone Number")
    //     telErr.innerHTML=("")
    // }

    // if (gender.value!="") {
    //     // alert("Pick gender")
    //     genderErr.innerHTML=("")
    // }
    if (school.value!="" && gender.value!="" && country.value!=""){
        // alert("Enter your school name")
        schoolErr.innerHTML=("")
   }
//    if (country.value!=""){
//         // alert("Pick Country")
//         countryErr.innerHTML=("")
//     }
    if (math.value!="") {
        // alert("Please enter your full Name")
        mathErr.innerHTML=("")
    }
    if (english.value!=""){
        // alert("Please enter valide email")
        englishErr.innerHTML=("")
   }if (sub1.value!=""){
        // alert("Please enter your Phone Number")
        sub1Err.innerHTML=("")
    }if (sub2.value!=""){
        // alert("Please enter your valid Address")
        sub2Err.innerHTML=("")
    }if (sub3.value!="") {
        // alert("Please enter your full Name")
        sub3Err.innerHTML=("")
    }if (sub4.value!=""){
        // alert("Please enter valide email")
        sub4Err.innerHTML=("")
    }if (sub5.value!=""){
        // alert("Please enter your Phone Number")
        sub5Err.innerHTML=("")
    }if (sub6.value!=""){
        // alert("Please enter your valid Address")
        sub6Err.innerHTML=("")
    }
    else{  }
}

function ageCalc() {
    if(age.value>=18 && age.value<=24){
        agePoints+=100
    }
    else if(age.value>=25 && age.value<=30){
        agePoints+=80
    }
    else if(age.value>=31 && age.value<=35){
        agePoints+=50
    }
    else if(age.value>=36 && age.value<=40){
        agePoints+=30
    }
    else if(age.value>=41 ){
        agePoints+=10 
    }
    console.log("Your Age Points: " + agePoints)
    countryCalc()
}

function countryCalc() {
    if(country.value== "africa"){
        countryPoints+=50
    }
    else if(country.value== "asia"){
        countryPoints+=40
    }
    else if(country.value== "southAmerica"){
        countryPoints+=30
    }
    else if(country.value== "northAmerica"){
        countryPoints+=20
    }
    else{
        countryPoints+=10
    }
    
    console.log("Country Points: " + countryPoints)
     gradeCalc()
}


function gradeCalc() {
        if (math.value>=90 && math.value<=100){
             gradePoints += 150
        }            
        if (math.value>=85 && math.value<=89){
            gradePoints += 140
        }
        if (math.value>=75 && math.value<=84){
            gradePoints += 120
        } 
        if (math.value>=65 && math.value<=74){
            gradePoints += 100
        }
        if (math.value>=60 && math.value<=64){
            gradePoints += 80
        }
        if (math.value>=50 && math.value<=59){
            gradePoints += 50
        }
        if (math.value>=40 && math.value<=49){
            gradePoints += 20
        }  
        if (english.value>=90 && english.value<=100){
            gradePoints += 150
        }
        if (english.value>=85 && english.value<=89){
            gradePoints += 140
        }
   
        if (english.value>=75 && english.value<=84){
            gradePoints += 120
        }            
        if (english.value>=65 && english.value<=74){
            gradePoints += 100
        }           
        if (english.value>=60 && math.value<=64){
            gradePoints += 80
        } 
        if (english.value>=50 && english.value<=59){
            gradePoints += 50
        }
        if (english.value>=40 && english.value<=49){
            gradePoints += 20
        }

        if (sub1.value>=90 && sub1.value<=100){
            gradePoints += 150
        }   
        if (sub1.value>=85 && sub1.value<=89){
            gradePoints += 140
        } 
        if (sub1.value>=75 && sub1.value<=84){
            gradePoints += 120
        }
        if (sub1.value>=65 && sub1.value<=74){
            gradePoints += 100
        }
            
        if (sub1.value>=60 && sub1.value<=64){
            gradePoints += 80
        }            
        if (sub1.value>=50 && sub1.value<=59){
            gradePoints += 50
        }          
        if (sub1.value>=40 && sub1.value<=49){
            gradePoints += 20
        }
        if (sub2.value>=90 && sub2.value<=100){
            gradePoints += 150
        }           
        if (sub2.value>=85 && sub2.value<=89){
            gradePoints += 140
        }           
        if (sub2.value>=75 && sub2.value<=84){
            gradePoints += 120
        }           
        if (sub2.value>=65 && sub2.value<=74){
            gradePoints += 100
        }           
        if (sub2.value>=60 && sub2.value<=64){
            gradePoints += 80
        }           
        if (sub2.value>=50 && sub2.value<=59){
            gradePoints += 50
        }           
        if (sub2.value>=40 && sub2.value<=49){
            gradePoints += 20
        }

        if (sub3.value>=90 && sub3.value<=100){
            gradePoints += 150
        }            
        if (sub3.value>=85 && sub3.value<=89){
            gradePoints += 140
        }           
        if (sub3.value>=75 && sub3.value<=84){
            gradePoints += 120
        }           
        if (sub3.value>=65 && sub3.value<=74){
            gradePoints += 100
        }           
        if (sub3.value>=60 && sub3.value<=64){
            gradePoints += 80
        }            
        if (sub3.value>=50 && sub3.value<=59){
            gradePoints += 50
        }         
        if (sub3.value>=40 && sub3.value<=49){
            gradePoints += 20
        }

        if (sub4.value>=90 && sub4.value<=100){
            gradePoints += 150

        }
            
        if (sub4.value>=85 && sub4.value<=89){
            gradePoints += 140
        }           
        if (sub4.value>=75 && sub4.value<=84){
            gradePoints += 120
        }            
        if (sub4.value>=65 && sub4.value<=74){
            gradePoints += 100
        }           
        if (sub4.value>=60 && sub4.value<=64){
            gradePoints += 80

        }           
        if (sub4.value>=50 && sub4.value<=59){
            gradePoints += 50
        }           
        if (sub4.value>=40 && sub4.value<=49){
            gradePoints += 20
        }


        if (sub5.value>=90 && sub5.value<=100){
            gradePoints += 150
        }           
        if (sub5.value>=85 && sub5.value<=89){
            gradePoints += 140
        }           
        if (sub5.value>=75 && sub5.value<=84){
            gradePoints += 120
        }            
        if (sub5.value>=65 && sub5.value<=74){
            gradePoints += 100

        }           
        if (sub5.value>=60 && sub5.value<=64){
            gradePoints += 80
        }           
        if (sub5.value>=50 && sub5.value<=59){
            gradePoints += 50
        }            
        if (sub5.value>=40 && sub5.value<=49){
            gradePoints += 20
        }

        if (sub6.value>=90 && sub6.value<=100){
            gradePoints += 150
        }           
        if (sub6.value>=85 && sub6.value<=89){
            gradePoints += 140
        }           
        if (sub6.value>=75 && sub6.value<=84){
            gradePoints += 120
        }           
        if (sub6.value>=65 && sub6.value<=74){
            gradePoints += 100
        }            
        if (sub6.value>=60 && sub6.value<=64){
            gradePoints += 80
        }           
        if (sub6.value>=50 && sub6.value<=59){
             gradePoints += 50
        }
        if (sub6.value>=40 && sub6.value<=49){
            gradePoints += 20
        }
            
        avgGradePoints = gradePoints / 8
        scholarPoints = agePoints + countryPoints + avgGradePoints
        console.log("average gradepoint is " + avgGradePoints)
        console.log("Scholarship Points is: " + scholarPoints);

        if (scholarPoints >= cutOff) {
            ins1.style.color = 'green'
            ins1.innerHTML=("Your results are exceptional, congrats! you move on")
            summary()
        }
        else{
            alert("Uncomplete form or Scores too low for further review, study harder!")
            // ins1.innerHTML=("Uncomplete form or" + "<br />" + "Scores too low for further review, study harder!")
        }
        
}
function summary(){
    summary1.innerHTML=(`Your Score summary is as follows: <br /> You got ${agePoints} as your age points <br /> You got ${countryPoints} as your country Points and <br /> Your average grade point is ${avgGradePoints}`)
    sumChart()
}

function sumChart() {
    // Have to enable the container for the chart after calculating results
    chartContainer.style.display='block'
    instruction.style.display = 'none'

    // Declaring myChart variable as a 2d drawing
    let myChart = document.getElementById('myChart').getContext('2d');

    //GLobal Options
    // Chart.defaults.global.defaultFontFamiliy = 'Lato';
    // Chart.defaults.global.defaultFontSize = 18;
    // Chart.defaults.global.defaultFontColor = '#777';
    // var abc = gradeCalc.avgGradePoints;

    let sumChart = new Chart(myChart, {
        type:'bar', //bar, horiaontal, line, radar, polarArea, doughnut
        data:{
            labels:['Age Point', 'Country Point', 'Average Grade Point', 'Scolar Point'],
            datasets:[{
                label:'Scores',
                data:[
                    agePoints,
                    countryPoints,
                    avgGradePoints,
                    scholarPoints
                ],
                //background color for general color of all bars
                backgroundColor:[
                    // 'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    // 'rgba(255, 159, 64, 0.6)',
    
                ],
                //other properties can go here
                borderWidth:1, 
                borderColor:'#777',
                hoverBorderWidth:3,
                borderColor:'black'
            }]
        },
        options:{
            title:{
                display:true,
                text:'Summary Of Your Scores',
            },
            scales: {
                y:{
                    beginAtZero: true
                }
            },
            // tooltips:{
            //     enable:false
            // }
            // legend:{
            //     display:'false',
            //     position:'right'
            // }
        }
    });
}




