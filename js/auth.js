// js/auth.js

function selectRole(role) {
  console.log("Role selected:", role);

  if (role === "student") {
    window.location.href = "dashboard/student.html";
  } 
  else if (role === "teacher") {
    window.location.href = "dashboard/teacher.html";
  } 
  else if (role === "hod") {
    window.location.href = "dashboard/hod.html";
  }
}