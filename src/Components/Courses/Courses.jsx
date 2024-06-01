import React from 'react'
import './Courses.css'
import bulb from '../../assets/bulb.png'
import pencil from '../../assets/pencil.png'
import flask from '../../assets/flask.png'
import cap from '../../assets/cap.png'
const Courses = () => {
  return (
    <div className='courses' name='courses'>
        <div className="course">
            <h2>Class 5th Coaching Classes</h2>
            <p>A one-year course for students in 5th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={bulb}/>
        </div>
        <div className="course">
            <h2>Class 6th Coaching Classes</h2>
            <p>A one-year course for students in 6th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={cap}/>
        </div>
        <div className="course">
            <h2>Class 7th Coaching Classes</h2>
            <p>A one-year course for students in 7th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={flask}/>
        </div>
        <div className="course">
            <h2>Class 8th Coaching Classes</h2>
            <p>A one-year course for students in 8th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={cap}/>
        </div>
        <div className="course">
            <h2>Class 9th Coaching Classes</h2>
            <p>A one-year course for students in 9th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={pencil}/>
        </div>
        <div className="course">
            <h2>Class 10th Coaching Classes</h2>
            <p>A one-year course for students in 10th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={bulb}/>
        </div>
        <div className="course">
            <h2>Class 11th Coaching Classes</h2>
            <p>A one-year course for students in 11th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={bulb}/>
        </div>
        <div className="course">
            <h2>Class 12th Coaching Classes</h2>
            <p>A one-year course for students in 12th standard that covers the State board/CBSE/NCERT curriculum in Maths, Science, English, Social Studies and other subjects.</p>
            <img src={bulb}/>
        </div>
    </div>
  )
}

export default Courses