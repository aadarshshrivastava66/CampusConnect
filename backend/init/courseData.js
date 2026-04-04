const courses = [
{
  courseId: "BT001",
  courseName: "B.Tech in Computer Science Engineering",
  courseCode: "BTECH-CSE",
  degreeType: "UG",
  department: "Computer Science Engineering",
  description: "Focus on programming, AI, ML, and software development.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 60,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 400000, perYear: 100000, perSemester: 50000 },
  seats: { totalSeats: 120, availableSeats: 50 },
  HOD: { name: "Dr. Rajesh Sharma", email: "cse@college.edu" },
  status: "Active"
},

{
  courseId: "BT002",
  courseName: "B.Tech in Information Technology",
  courseCode: "BTECH-IT",
  degreeType: "UG",
  department: "Information Technology",
  description: "Covers networking, databases, and cloud computing.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 55,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 380000, perYear: 95000, perSemester: 47500 },
  seats: { totalSeats: 100, availableSeats: 40 },
  HOD: { name: "Dr. Anil Verma", email: "it@college.edu" },
  status: "Active"
},

{
  courseId: "BT003",
  courseName: "B.Tech in Mechanical Engineering",
  courseCode: "BTECH-ME",
  degreeType: "UG",
  department: "Mechanical Engineering",
  description: "Focus on machines, thermodynamics, and design.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 55,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 350000, perYear: 87500, perSemester: 43750 },
  seats: { totalSeats: 90, availableSeats: 35 },
  HOD: { name: "Dr. Amit Patel", email: "me@college.edu" },
  status: "Active"
},

{
  courseId: "BT004",
  courseName: "B.Tech in Civil Engineering",
  courseCode: "BTECH-CE",
  degreeType: "UG",
  department: "Civil Engineering",
  description: "Covers construction, structures, and environmental engineering.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 50,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 320000, perYear: 80000, perSemester: 40000 },
  seats: { totalSeats: 80, availableSeats: 25 },
  HOD: { name: "Dr. Suresh Patel", email: "civil@college.edu" },
  status: "Active"
},

{
  courseId: "BT005",
  courseName: "B.Tech in Electrical Engineering",
  courseCode: "BTECH-EE",
  degreeType: "UG",
  department: "Electrical Engineering",
  description: "Focus on power systems, circuits, and electronics.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 55,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 340000, perYear: 85000, perSemester: 42500 },
  seats: { totalSeats: 85, availableSeats: 30 },
  HOD: { name: "Dr. Vivek Singh", email: "ee@college.edu" },
  status: "Active"
},

{
  courseId: "BT006",
  courseName: "B.Tech in Electronics & Communication",
  courseCode: "BTECH-ECE",
  degreeType: "UG",
  department: "Electronics and Communication",
  description: "Focus on communication systems and embedded systems.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 60,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 360000, perYear: 90000, perSemester: 45000 },
  seats: { totalSeats: 100, availableSeats: 38 },
  HOD: { name: "Dr. Neha Gupta", email: "ece@college.edu" },
  status: "Active"
},

{
  courseId: "BT007",
  courseName: "B.Tech in Artificial Intelligence",
  courseCode: "BTECH-AI",
  degreeType: "UG",
  department: "AI & Data Science",
  description: "Focus on machine learning, deep learning, and AI systems.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 65,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 420000, perYear: 105000, perSemester: 52500 },
  seats: { totalSeats: 60, availableSeats: 20 },
  HOD: { name: "Dr. Riya Sharma", email: "ai@college.edu" },
  status: "Active"
},

{
  courseId: "BT008",
  courseName: "B.Tech in Data Science",
  courseCode: "BTECH-DS",
  degreeType: "UG",
  department: "Data Science",
  description: "Focus on big data, analytics, and data engineering.",
  duration: "4 Years",
  totalSemesters: 8,
  eligibility: {
    qualification: "12th (PCM)",
    minPercentage: 65,
    entranceExamRequired: true,
    examName: "JEE Main"
  },
  fees: { totalFees: 410000, perYear: 102500, perSemester: 51250 },
  seats: { totalSeats: 60, availableSeats: 22 },
  HOD: { name: "Dr. Arjun Mehta", email: "ds@college.edu" },
  status: "Active"
},
{
  courseId: "MT001",
  courseName: "M.Tech in Computer Science Engineering",
  courseCode: "MTECH-CSE",
  degreeType: "PG",
  department: "Computer Science Engineering",
  description: "Advanced study in AI, ML, and distributed systems.",
  duration: "2 Years",
  totalSemesters: 4,
  eligibility: {
    qualification: "B.Tech in relevant field",
    minPercentage: 65,
    entranceExamRequired: true,
    examName: "GATE"
  },
  fees: { totalFees: 200000, perYear: 100000, perSemester: 50000 },
  seats: { totalSeats: 30, availableSeats: 12 },
  HOD: { name: "Dr. Neha Gupta", email: "pgcse@college.edu" },
  status: "Active"
},

{
  courseId: "MT002",
  courseName: "M.Tech in Data Science",
  courseCode: "MTECH-DS",
  degreeType: "PG",
  department: "Data Science",
  description: "Advanced analytics, big data, and AI.",
  duration: "2 Years",
  totalSemesters: 4,
  eligibility: {
    qualification: "B.Tech / B.Sc in relevant field",
    minPercentage: 65,
    entranceExamRequired: true,
    examName: "GATE"
  },
  fees: { totalFees: 220000, perYear: 110000, perSemester: 55000 },
  seats: { totalSeats: 25, availableSeats: 10 },
  HOD: { name: "Dr. Arjun Mehta", email: "pgds@college.edu" },
  status: "Active"
},

{
  courseId: "MT003",
  courseName: "M.Tech in Structural Engineering",
  courseCode: "MTECH-SE",
  degreeType: "PG",
  department: "Civil Engineering",
  description: "Focus on structural design and construction.",
  duration: "2 Years",
  totalSemesters: 4,
  eligibility: {
    qualification: "B.Tech in Civil Engineering",
    minPercentage: 60,
    entranceExamRequired: true,
    examName: "GATE"
  },
  fees: { totalFees: 180000, perYear: 90000, perSemester: 45000 },
  seats: { totalSeats: 20, availableSeats: 8 },
  HOD: { name: "Dr. Suresh Patel", email: "pgcivil@college.edu" },
  status: "Active"
},

{
  courseId: "MT004",
  courseName: "M.Tech in Power Systems",
  courseCode: "MTECH-PS",
  degreeType: "PG",
  department: "Electrical Engineering",
  description: "Focus on power generation and distribution.",
  duration: "2 Years",
  totalSemesters: 4,
  eligibility: {
    qualification: "B.Tech in Electrical Engineering",
    minPercentage: 60,
    entranceExamRequired: true,
    examName: "GATE"
  },
  fees: { totalFees: 190000, perYear: 95000, perSemester: 47500 },
  seats: { totalSeats: 25, availableSeats: 9 },
  HOD: { name: "Dr. Vivek Singh", email: "pgee@college.edu" },
  status: "Active"
},

{
  courseId: "MT005",
  courseName: "M.Tech in VLSI Design",
  courseCode: "MTECH-VLSI",
  degreeType: "PG",
  department: "Electronics and Communication",
  description: "Focus on chip design and semiconductor technology.",
  duration: "2 Years",
  totalSemesters: 4,
  eligibility: {
    qualification: "B.Tech in ECE",
    minPercentage: 65,
    entranceExamRequired: true,
    examName: "GATE"
  },
  fees: { totalFees: 210000, perYear: 105000, perSemester: 52500 },
  seats: { totalSeats: 20, availableSeats: 7 },
  HOD: { name: "Dr. Neha Gupta", email: "pgece@college.edu" },
  status: "Active"
}

];

module.exports = courses;