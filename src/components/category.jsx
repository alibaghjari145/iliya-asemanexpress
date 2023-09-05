import React, { useState, useEffect } from "react";
import Items from './items'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Category(props) {
    const[Item,setItem] =useState([])
    const[Quantity,setQuantity] =useState(0)
    const [IsOpen, setIsOpen] = useState(false)

 
    useEffect(() => {
        var arr = [];
        for (let i = 0; i < props.data.length; i++) {
          if (props.alpha== props.data[i].id) {
              arr.push(props.data[i]);
           }
        }
        setQuantity(arr.length)
        setItem(arr);
      }, [props]);

  return (
    <div >
        <div className='rounded bg-slate-300 p-3 my-2 text-gray-100 flex justify-around '>
        <span className=" rounded-full w-6 h-6 text-center bg-slate-500 text-zinc-200 ">{props.alpha}</span>
        <span className="text-gray-700 basis-1/3">{`quantity:  ${Quantity}`}</span>
        <input type="checkbox"  id={props.alpha} />
        {!IsOpen && <FontAwesomeIcon className="text-gray-700 w-6 h-6" onClick={()=>{setIsOpen(!IsOpen)}} icon={faAngleDown} />}
        {IsOpen && <FontAwesomeIcon className="text-gray-700 w-6 h-6" onClick={()=>{setIsOpen(!IsOpen)}} icon={faAngleUp} />}
        </div>
       {IsOpen && <div>
       {
       [...Item].map((item, index)=>{
            if(props.alpha== item.id){

                return(<Items  id={index} itemId={item.title} date={item.created}  /> )
            }
        })
    }
       </div>}
   </div>
  )
}

export default Category;