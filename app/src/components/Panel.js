import React, {useState} from 'react'

function Panel({title,children}) {
  const [showMore,setShowMore] = useState(false);
  return (
    <section>
      <h3>{title}</h3>
      <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Hide' : 'Show'} Details</button>
      {showMore && <p>{children}</p>}
    </section>
  )
}

export default Panel