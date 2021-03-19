import Header from './Header'
import './App.css';
import {useState} from 'react'
import Customers from './Customers';
import AddCustomer from './AddCustomer';

function App() {


  const deleteCustomer = (id) => {
    console.log('Delete' ,id)
    setCustomers(customers.filter((customer) => customer.id !== id))
  } 

  const editCustomer = (id) => {
    console.log('Edit' ,id)
    //setCustomers(customers.filter((customer) => customer.id !== id))    
      {<addCustomer />}
  } 

   const addCustomer =(customer) => {
     const id = Math.random()
     // spread operator
     const newCustomer = {id, ...customer}
     setCustomers([...customers,newCustomer])

   }
   const [showAddCustomer,setShowAddCustomer] = useState(false)



  const [customers,setCustomers] = useState(
    [
        {
            "id": 1,
            "name": "Cust Name1",
            "location": "USA"            
          },
          {
            "id": 2,
            "name": "Cust Name2",
            "location": "Hyd"            
          },
          {
            "id": 3,
            "name": "Cust Name3",
            "location": "Delhi"                        
          }
    ]

)


  return (
    <div className="container">
      <Header title='Customer Info' 
      onAdd={()=> setShowAddCustomer(!showAddCustomer)} 
      showAdd={showAddCustomer}/>

      {showAddCustomer && <AddCustomer onAdd={addCustomer} />}

{customers.length > 0 ? <Customers customers={customers}
 onDelete={deleteCustomer} onEdit={editCustomer}
 /> :'No Customer to show'}

    </div>
  );
}

export default App;
