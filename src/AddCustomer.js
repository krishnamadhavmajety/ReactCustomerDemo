import { useState } from "react"

const AddCustomer =({onAdd, onEdit}) =>{
const[name, setName] = useState('')
const [location, setLocation] = useState('')


const onSubmit =(e) => {
    e.preventDefault()
    if(!name) {
        alert('Please add a Task')
        return
    }
    onAdd({name,location})
    onEdit({name,location})
    setName('')
    setLocation('')    
}

  return (  <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Customer</label>
            <input type='text' placeholder='Add/Update Customer' 
            value ={name} 
            onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input type='text' placeholder='Enter Location' value ={location} 
            onChange={(e) => setLocation(e.target.value)}></input>
        </div>        
        <input type='submit' value='Save Customer' className='btn btn-block'></input>
    </form>
  )
}

export default AddCustomer