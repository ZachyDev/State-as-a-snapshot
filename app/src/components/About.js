import React, {useState} from 'react'

function About() {
    const [msg,setMsg] = useState('test message');
    const [showMore,setShowMore] = useState(false)
  return (
    <div>
        <h4>About us </h4>
        <button onClick={() => setShowMore}>Show More</button>
    </div>
  )
}

export default About