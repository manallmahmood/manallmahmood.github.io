import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import courses from "./cs-2021.json"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  const [course, setCourse] = useState([{ id: uuidv4(), value: 0, course: "" }])
  const [average, setAverage] = useState(0)
  const [courseList, setCourseList] = useState([])
  const [grade, setGrade] = useState([4.0])
  const [semesterNumber, setSemesterNumber] = useState("1")
  const [cgpa, setCgpa] = useState(0)
  const [semesters, setSemesters] = useState([
    {
      semesterLabel: `Semester ${semesterNumber}`,
      courses: course,
      gpa: 0,
      grades: grade,
    },
  ])
  const markingScheme = [
    { name: "A", value: 4.0 },
    { name: "A-", value: 3.75 },
    { name: "B+", value: 3.25 },
    { name: "B", value: 3.0 },
    { name: "B-", value: 2.75 },
    { name: "C+", value: 2.25 },
    { name: "C", value: 2.0 },
    { name: "C-", value: 1.75 },
    { name: "D", value: 1.0 },
    { name: "F", value: 0 },
  ]
  const [major, setMajor] = useState("CS")
  const handleMajorChange = event => {
    setMajor(event.target.value)
  }

  const index = 0;

  useEffect(() => {
    setCourseList(courses)
  }, [])

  const addCourse = Semester => {
    let foundSemester = semesters.find(
      semesterObj => semesterObj.semesterNumber === Semester.semesterNumber
    )
    console.log("foundSemester", foundSemester)
    foundSemester.courses = [
      ...foundSemester.courses,
      { id: uuidv4(), value: 0, course: "" },
    ]
    foundSemester.grades = [...foundSemester.grades, 4.0]
    let index = semesters.findIndex(
      semesterObj => semesterObj.semesterNumber === Semester.semesterNumber
    )
    semesters[index] = foundSemester
    setSemesters([...semesters])
    // setCourse(course => [...course, { id: uuidv4(), value: 0, course: "" }])
    // setGrade([...grade, 4.0])
  }

  const deleteCourse = (Semesters, semesterIndex, index) => {
    Semesters[semesterIndex]?.courses?.splice(index, index)
    setSemesters([...Semesters])

    // setGrade(grade => grade.filter((_, i) => i !== index))
  }
  const handleCourseChange = (index, event, semester) => {
    let foundSemester = semesters.find(
      semesterObj => semesterObj.semesterNumber === semester.semesterNumber
    )

    let indexF = semesters.findIndex(
      semesterObj => semesterObj.semesterNumber === semester.semesterNumber
    )
    semesters[indexF].courses[index].value = event.target.value
    console.log(event.target.value)
    console.log(foundSemester)
    // const newCourse = [...course]
    // newCourse[index].course = event.target.value
    // setCourse(newCourse)
  }

  const handleGradeChange = (pickedCourse, e, semesters, semesterIndex) => {
    const selectedCourse = semesters[semesterIndex].courses.find(
      c => c.id === pickedCourse.id
    )
    const gotGrade = markingScheme.find(
      markingSchemeObj =>
        markingSchemeObj.name.toString() === e.target.value.toString()
    )
    semesters[semesterIndex].grades[      semesters[semesterIndex].grades.length - 1
    ] = gotGrade.value
    semesters[semesterIndex].grades = [...semesters[semesterIndex].grades]
    setSemesters([...semesters])
    const cgpa = semesters.reduce((total, semester) => total + semester.gpa, 0) / semesters.length
    setCgpa(cgpa.toFixed(2))
  }

  const calculateGPA = (semester, semesterIndex) => {
    let sum = 0
    let count = 0
  
    semester[semesterIndex].grades.forEach(grade => {
      sum += grade
      count++
    })
    const gpa = sum / count
    semester[semesterIndex].gpa = gpa
    setSemesters([...semesters])
  
    let totalGPA = 0
    let totalSemesters = 0
    semesters.forEach(semester => {
      totalGPA += semester.gpa
      totalSemesters++
    })
    setCgpa(totalGPA / totalSemesters)
  }
  

  const addSemester = () => {
    setSemesterNumber(semesterNumber + 1)
    setSemesters([...semesters, {
      semesterLabel: `Semester ${semesterNumber}`,
      semesterNumber: semesterNumber + 1,
      courses: course,
      gpa: 0,
      grades: grade,
    }])
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "centre",
        height: "100vh",
        backgroundColor: "white", 
        flexDirection: "column",
        

      }}
      >
        <div
         className="header"
         style={{
         backgroundColor: "rgb(0, 153, 255)",
         boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5), -4px -4px 20px rgba(255, 255, 255, 0.8)",
         width: "100%",
         height: "90px",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
    }}
  >
              <h1 style={{ color: "white", margin: 0 }}>GPA Calculator</h1>
            </div>
            <div
              style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              width: "50%",
              padding: "20px",
              marginTop: "70px",
              backgroundColor: "white",
              boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5), -4px -4px 20px rgba(255, 255, 255, 0.8)",
              borderRadius: "20px"

            }}
          >
             <div
               style={{
                 position: "relative",
                 zIndex: 1,
                 opacity: 5,

             }}
           ><div
           style={{
             display: "flex",
             alignItems: "center",
             justifyContent: "space-between",
             width: "100%",
             margin: "10px"
           }}
         >
           <div
             style={{
               backgroundColor: "rgb(0, 153, 255)",
               boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5), -4px -4px 20px rgba(255, 255, 255, 0.8)",
               padding: "10px",
               display: "flex",
               alignItems: "center",
               borderRadius: "20px",
               height: "40px"
             }}
           >
             <label
               style={{
                 fontSize: "23px",
                 fontWeight: "bold",
                 color: "white",
                 fontFamily: "Andalé Mono, monospace"
               }}
             >
               Major:{" "}
             </label>
             <select style={{ fontSize: "15px", color: "white" }} value={major} onChange={handleMajorChange}>
               <option value="CS">CS</option>
               <option value="IT">IT</option>
             </select>
           </div>
           <div
             style={{
               backgroundColor: "rgb(0, 153, 255)",
               boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5), -4px -4px 20px rgba(255, 255, 255, 0.8)",
               padding: "10px",
               display: "flex",
               alignItems: "center",
               borderRadius: "20px",
               height: "40px"
             }}
           >
             <label
               style={{
                 fontSize: "23px",
                 fontWeight: "bold",
                 color: "white",
                 fontFamily: "Andalé Mono, monospace"
               }}
             >
               CGPA: {cgpa}{" "}
             </label>
           </div>
         </div>
         
            
      {semesters.map((Semester, semesterIndex) => {
        return (
          <>
              <div style={{ 
                position: "relative", 
                opacity: 1
                }}>
                
              </div>

              
              <h2 style={{ color: "black", fontWeight: "bold", fontFamily: "Andalé Mono, monospace", fontSize:"25px", marginBottom: 0 }}>Semester:</h2>
              <button type="button" class="btn btn-outline-dark"  onClick={() => addSemester()}>Add Semester</button>

              {Semester.courses.map((g, i) => {
                return (
                  <div key={g.id}>
                   
                   <label style={{fontSize: "20px",fontFamily: "Optima, sans-serif", color: "black"}}>Course:</label>
                    <select
                      value={g.course.name}
                      onChange={e => handleCourseChange(i, e, Semester)}
                      style={{ width: "150px" }}
                    >
                      {courseList.curriculum &&
                        courseList.curriculum.courses.map(courseGroup => (
                          <optgroup
                            label={courseGroup.groupName}
                            key={courseGroup.groupName}
                          >
                            {courseGroup.subjects.map(subject => (
                              <option key={subject.code} value={subject.code}>
                                {subject.name}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                    </select>
                    <label style={{fontSize: "20px",fontFamily: "Optima, sans-serif", color: "black"}}>    Grade:</label>
                    <select
                      value={grade.mark}
                      onChange={e =>
                        handleGradeChange(g, e, semesters, semesterIndex)
                      }
                    >
                      {markingScheme.map(grade => (
                        <option key={grade.name} value={grade.name}>
                          {grade.name}
                        </option>
                      ))}
                    </select>
                    <button type="button" class="btn btn-outline-dark" 
                      onClick={() => deleteCourse(semesters, semesterIndex, i)}
                    >
                      Delete Course
                    </button>
                  </div>
                );
              })}

              <button type="button" class="btn btn-outline-dark" onClick={() => addCourse(Semester)}>
                 Add Course
              </button>
              <button type="button" class="btn btn-outline-dark" 
                onClick={() => calculateGPA(semesters, semesterIndex)}
              >
                Calculate GPA
              </button>
              <p style={{color: "black", fontWeight: "bold",fontFamily: "Optima, sans-serif",fontSize: "28px"}}>Your GPA is: {semesters[semesterIndex].gpa}</p>
          </>
        )
      })}
    </div>
         </div>
      </div>
  )}