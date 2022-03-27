import React, { useEffect, useState } from 'react'
import Footer from './component/Footer';
import Header from './component/Header'
import Row from './component/Row';
import './Courses.css'
function Courses() {

  const [isLoading, setisLoading] = useState(false)
  useEffect(()=>{
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false)
    }, 1000);
  },[])

  return (
    <div className='courses'>
      <div className="courses_top">
        <Header/>
      </div>
      <div className="coursesBody">

        {
          isLoading ? (<img src={process.env.PUBLIC_URL+'./loading.svg'}/>):(
            <div className='vidSection'>
              <Row heading="Programming Languages" t1="C/C++" t2="Java" t3="Python"/>               
              <Row heading="Data Structures" t1="Array" t2="Binary Search Tree" t3="Linked List" t4="Stack" t5="String" t6="Queue" t7="Graph" t8="Hashing" t9="Tree" t10="Dynamic Programming"/>               
              <Row heading="Algorithms" t1="Analysis" t2="Backtracking" t3="Graph Algorithm" t4="Sorting" t5="Searching" t6="Branch and Bound" t7="Greedy Algorithm"/>               
              <Row heading="Quantitative Aptitude" t1="Profit and Loss" t2="Percentage" t3="Numbers" t4="Boats and Streams" t5="Time and Distance" t6="Time and Work" t7="Problems on Ages" t8="Permutation and Combination" t9="Ratio and Proportion" t10="Pipes and Cisterns" t11="Alligation and Mixtures" t12="Number Series"/>               
              <Row heading="Logical Reasoning" t1="Analogies" t2="Statement Assumption" t3="Blood Relation" t4="Syllogism" t5="Sitting Arrangements" t6="Direction Test" t7="Letter and Series"/>               
              <Row heading="Computer Fundamentals" t1="Database Management System" t2="Digital and Logic Design" t3="Computer Networks" t4="Object Oriented Programming in JAVA" t5="Operating System" t6="Software Engineering" />               
              <Row heading="Recent Technologies" t1="Web Development" t2="Mobile Development" t3="Internet of Things" t4="Machine Learning" t5="Cyber Security" t6="Cloud Computing" t7="Ethical Hacking" />               
              <Row heading="GATE CSE" t1="Engineering Maths for GATE" t2="Digital Logic for GATE" t3="Computer Organition and Architecture for GATE" t4="Programming & Data Structure for GATE" t5="Algorithms for GATE" t6="Theory of Computation for GATE" t7="Compier Design for GATE" t8 = "Operating System for GATE" t9 = "DBMS for GATE" t10= "Networking for GATE"/>
            </div>
          )
        }
          
            
      </div>
      <div className="coursesBottom">
        <Footer/>
      </div>
    </div>
  )
}

export default Courses
