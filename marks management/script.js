function showResult(){
    const studentName   = document.getElementById("studentname").value;
    const studentId = document.getElementById("studentid").value;
    const course = document.getElementById("course").value;
   const math = document.getElementById("math").value || 0;
    const python = document.getElementById("python").value || 0;
    const dsa = document.getElementById("dsa").value || 0;
    const cyber = document.getElementById("cyber").value ||0;
    const cloud = document.getElementById("cloud").value ||0;
    const computer = document.getElementById("computer").value || 0;

    const totalMarks = parseInt(math) + parseInt(python) + parseInt(dsa) + parseInt(cyber) + parseInt(cloud) + parseInt(computer);
    const percentage = (totalMarks / 600) * 100;
    
    document.getElementById("total").value = totalMarks;

    document.getElementById("result-name").innerText = "Student Name: " + studentName;
    document.getElementById("result-uid").innerText = "Student ID: " + studentId;
    document.getElementById("result-course").innerText = "Course: " + course;
    document.getElementById("result-math").innerText = "1. Math: " + math;
    document.getElementById("result-python").innerText = "2. Python: " + python;
    document.getElementById("result-dsa").innerText = "3. DSA: " + dsa;
    document.getElementById("result-cyber").innerText = "4. Cyber Security: " + cyber;
    document.getElementById("result-cloud").innerText = "5. Cloud Computing: " + cloud;
    document.getElementById("result-computer").innerText = "6. Computer Networks: " + computer;
    document.getElementById("result-total").innerText = "Total Marks: " + totalMarks;
    document.getElementById("result-percentage").innerText = "Percentage: " + percentage.toFixed(2) + "%";      
    
    let message = "";
    if (percentage >= 90) {
        message = "Excellent! Beta A grade se paas.";
    } else if (percentage >= 80) {
        message = "Great! ladka B grade se paas.";
    } else if (percentage >= 70) {
        message = "Good! Bas C grade se paas.";
    } else if (percentage >= 60) {
        message = "Fair! Gadha D grade se paas.";
    } else if (percentage >= 50) {
        message = "Needs Improvement! Nalayak E grade se paas.";
    } else {
        message = "Sorry! Chulu Bhar Paani mein dhoob Mar F grade se fail hogya. Try harder next time!";
    }
    
    document.getElementById("result-message").innerText = message;
    document.getElementById("result-box").style.display = "flex";
}