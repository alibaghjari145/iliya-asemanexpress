import React, {useState} from 'react'

function Items(props) {
    const [Ischecked, setIsChecked] = useState(props.isChecked)

    const checkHandler =()=>{
        setIsChecked(!Ischecked)
    }

  return (
    <div className='rounded bg-slate-600 p-3 my-2 text-gray-100 flex justify-around  '>
        <span >{props.itemId}</span>
        <span >{props.date.slice(0,10)}</span>
        <input  type="checkbox" onClick={checkHandler} checked={Ischecked} id={props.id} />
        </div>
  )
}

export default Items;