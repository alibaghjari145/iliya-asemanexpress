import React, {useState} from 'react'

function Items(props) {
    const [Ischecked, setIsChecked] = useState(props.isChecked)
    const [Id, setId] = useState(props.itemId)

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
       setId(event.target.id);
      }
  return (
    <div className='rounded bg-slate-600 p-3 my-2 text-gray-100 flex justify-around  '>
        <span >{props.itemId}</span>
        <span >{props.date.slice(0,10)}</span>
        <input  type="checkbox" onClick={()=>props.selectedItem(Id)} onChange={handleChange} checked={Ischecked} id={props.itemId} />
        </div>
  )
}

export default Items;