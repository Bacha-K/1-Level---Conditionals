/***N1 EXAM***/


function assignGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    }
    else if (score >= 70 && score <= 89) {
        return 'B';
    }
    
    else if (score >= 60 && score <= 69) {
        return 'C';
    }
    else if (score >= 50 && score <= 59) {
        return 'D';
    }
    else if (score >= 0 && score <= 49) {
        return 'F';
    }
    else { return 'Invalid score. Please enter a score between 0 and 100.';
    }
    }
    
    let studentScore = 78;
    let studentGrade = assignGrade(studentScore);
    console.log('For a score of ${studentScore}, The grade is ${studentGrade}');
    console.log(studentGrade);
    console.log(studentScore);
//================================================================================

    //***N2 EXAM***/

    /*
    function getSeason(month) {
        const CaseMonth = month.toLowerCase();
        
        if (CaseMonth === 'september' || CaseMonth === 'october' || CaseMonth === 'november') {
            return 'Autumn';
        }
        else if (CaseMonth === 'december' || CaseMonth === 'january' || CaseMonth === 'fabruary') {
            return 'Winter';
        }
        else if (CaseMonth === 'march' || CaseMonth === 'april' || CaseMonth === 'may') {
            return 'Spring';
        }
        else if (CaseMonth === 'june' || CaseMonth === 'july' || CaseMonth === 'august') {
            return 'Summer';
        }
        else {
            return 'Invalid month. Please enter a valid month.';
        }
        }
        
        let userInput = 'november';
        let season = getSeason(userInput);
        console.log(`For the month of ${userInput}, the season is: ${season}`);
        */
//======================================================================================

    //***N3 EXAM***/

/*
function checkDayType(day) {
     
    const dayLower = day.toLowerCase();

    const weekendDays = ['saturday', 'sunday'];

    const workingDays = ['monday', 'tuesday', 'wednesday', 'friday'];

    if (weekendDays.includes(dayLower)) {
        return `${day} is a weekend day.`;
    } else if (workingDays.includes(dayLower)) {
        return `${day} is a working day.`;
    }
    else {
    return 'Invalid day. Please enter a valid day.';
}
}

let userInput = 'suNday';
let inputDay = checkDayType(userInput);
const result = checkDayType(inputDay);
console.log(`What is the day today? ${userInput}.`);
console.log(inputDay);
*/
//=========================================================

//***N4 EXAM***/

/*
function getDaysInMonth(month) {
    
    const monthLower = month.toLowerCase();
    
    const daysInMonth = {
        january: 31,
        february: 28, 
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
        september: 30,
        october: 31,
        november: 30,
        december: 31,
    };

    if (daysInMonth.hasOwnProperty(monthLower)) {
        return `${month} has ${daysInMonth[monthLower]} days.`;
    } else {
        return "Invalid month. Please enter a valid month name.";
    }
}


let userInput = 'JulY';
let inputMonth = getDaysInMonth(userInput);

const result = getDaysInMonth(inputMonth);

console.log(inputMonth);
*/

//====================================================================