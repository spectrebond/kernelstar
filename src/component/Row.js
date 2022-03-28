import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import Fade from 'react-reveal/Fade'
import './Row.css'
function Row({heading, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12}) {
  const history = useHistory();
  const [{label, value}, dispatch] = useStateValue();
  const videost1 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t1
    })
    dispatch({
      type: 'SET_VALUE',
      value: t1==='C/C++' && 'c' || t1==='Analysis' && 'analysis' || t1==='Array' && 'array' || t1==='Database Management System' && 'dbms' || t1==="Web Development" && 'web' || t1==="Profit and Loss" && 'pl' || t1==='Analogies' && 'an' || t1=='Engineering Maths for GATE' && 'emg'
    })
  }
  const videost2 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t2
    })
    dispatch({
      type: 'SET_VALUE',
      value: t2==='Java' && 'java' || t2==='Backtracking' && 'backtracking' || t2==='Binary Search Tree' && 'bst' || t2==='Digital and Logic Design' && 'dld' || t2==='Mobile Development' && 'md' || t2==="Percentage" && 'percent' || t2==='Statement Assumption' && 'sm' || t2==='Digital Logic for GATE' && 'dlg'
    })
  }
  const videost3 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t3
    })
    dispatch({
      type: 'SET_VALUE',
      value: t3==='Python' && 'python' || t3==='Graph Algorithm' && 'graphalgo' || t3==='Linked List' && 'linked' || t3==='Computer Networks' && 'net' || t3==='Internet of Things' && 'iot' || t3==='Numbers' && 'numbers' || t3==='Blood Relation' && 'br' || t3==='Computer Organition and Architecture for GATE' && 'coag'
    })
  }
  const videost4 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t4
    })
    dispatch({
      type: 'SET_VALUE',
      value: t4==='Sorting' && 'sorting' || t4==='Stack' && 'stack' || t4 === 'Object Oriented Programming in JAVA' && 'oops' || t4 === 'Machine Learning' && 'ml' || t4==='Boats and Streams' && 'bs' || t4==='Syllogism' && 'sg' || t4==='Programming & Data Structure for GATE' && 'pdg'
    })
  }
  const videost5 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t5
    })
    dispatch({
      type: 'SET_VALUE',
      value: t5==='String' && 'string' || t5=="Searching" && 'searching' || t5 === 'Operating System' && 'os' || t5==='Cyber Security' && 'cs' || t5==='Time and Distance' && 'td' || t5==='Sitting Arrangements' && 'sa' || t5==='Algorithms for GATE' && 'alg'
    })
  }
  const videost6 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t6
    })
    dispatch({
      type: 'SET_VALUE',
      value: t6==='Queue' && 'queue' || t6=="Branch and Bound" && 'branchandbound' || t6==="Software Engineering" && 'se' || t6==='Cloud Computing' && 'cc' || t6==='Time and Work' && 'tw' || t6==='Direction Test' && 'dt' || t6=='Theory of Computation for GATE' && 'tocg'
    })
  }
  const videost7 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t7
    })
    dispatch({
      type: 'SET_VALUE',
      value: t7==='Graph' && 'graphs' || t7=="Greedy Algorithm" && 'greedy' || t7==='Ethical Hacking' && 'eh' || t7==='Problems on Ages' && 'pa' || t7==='Letter and Series' && 'ls' || t7 == 'Compier Design for GATE' && 'cdg'
    })
  }
  const videost8 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t8
    })
    dispatch({
      type: 'SET_VALUE',
      value: t8==='Hashing' && 'hashing' || t8==='Permutation and Combination' && 'pc' || t8==='Operating System for GATE' && 'osg'
    })
  }
  const videost9 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t9
    })
    dispatch({
      type: 'SET_VALUE',
      value: t9==='Tree' && 'tree' || t9==='Ratio and Proportion' && 'rp' || t9==='DBMS for GATE' && 'dbg'
    })
  }
  const videost10 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t10
    })
    dispatch({
      type: 'SET_VALUE',
      value: t10==='Dynamic Programming' && 'dynamic' || t10==='Pipes and Cisterns' && 'cp' || t10 === 'Networking for GATE' && 'cng'
    })
  }
  const videost11 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t11
    })
    dispatch({
      type: 'SET_VALUE',
      value: t11==='Alligation and Mixtures' && 'am'
    })
  }
  const videost12 = () =>{
    history.push('/videos')
    dispatch({
      type: 'SET_LABEL',
      label: t12
    })
    dispatch({
      type: 'SET_VALUE',
      value: t12==='Number Series' && 'ns'
    })
  }
  return (
    <Fade duration={2000} distance="500px">
    <div className='row'>
      <div className="row_top">
        <h1>{heading}</h1>
      </div>
      <div className="rowBody">
        <div className="row_card" onClick={videost1}>
          <h1>{t1}</h1>
        </div>
        <div className="row_card" onClick={videost2}>
          <h1>{t2}</h1>
        </div>
        <div className="row_card" onClick={videost3}>
          <h1>{t3}</h1>
        </div>
        {
          t4 && (
            <div className="row_card" onClick={videost4}>
          <h1>{t4}</h1>
        </div>
          )
        }
        {
          t5 && (
            <div className="row_card" onClick={videost5}>
          <h1>{t5}</h1>
        </div>
          )
        }
        {
          t6 && (
            <div className="row_card" onClick={videost6}>
          <h1>{t6}</h1>
        </div>
          )
        }
        {
          t7 && (
            <div className="row_card" onClick={videost7}>
          <h1>{t7}</h1>
        </div>
          )
        }
        {
          t8 && (
            <div className="row_card" onClick={videost8}>
          <h1>{t8}</h1>
        </div>
          )
        }
        {
          t9 && (
            <div className="row_card" onClick={videost9}>
          <h1>{t9}</h1>
        </div>
          )
        }
        {
          t10 && (
            <div className="row_card" onClick={videost10}>
          <h1>{t10}</h1>
        </div>
          )
        }
        {
          t11 && (
            <div className="row_card" onClick={videost11}>
          <h1>{t11}</h1>
        </div>
          )
        }
        {
          t12 && (
            <div className="row_card" onClick={videost12}>
          <h1>{t12}</h1>
        </div>
          )
        }
      </div>
    </div>
    </Fade>
  )
}

export default Row
