import React,{useState} from 'react'

function User() {
    const [to,setTo] = useState('Zachy');
    const [message,setMessage] = useState('Hello');

    // submit function
    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        },3000)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                To: {''}
                <select value={to} onChange={e => setTo(e.target.value)}>
                    <option value='Zachy'>Zachy</option>
                    <option value='Kitili'>Alice</option>
                </select>
            </label> <br />
            <label>
                <textarea placeholder='Write message'>

                </textarea>
            </label>
            <br />
            <button>Send</button>
        </form>
    </div>
  )
}

export default User