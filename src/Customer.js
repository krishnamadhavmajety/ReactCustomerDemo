import {FaTimes} from 'react-icons/fa'
 import { FaPencilAlt } from "react-icons/fa";

const Customer = ({customer, onDelete, onEdit}) => {
    return(
        <div className='task reminder' >            
            <h3>{customer.name}

            {/* Edit */}
            <FaPencilAlt style={{color:'red', cursor:'pointer'}} 
             onClick={() => onEdit(customer.id)}   />
             
             {/* Delete */}
             <FaTimes style={{color:'red', cursor:'pointer'}} 
             onClick={() => onDelete(customer.id)}  />

</h3>
            <p>{customer.location}</p>
        </div>
    )
}

export default Customer