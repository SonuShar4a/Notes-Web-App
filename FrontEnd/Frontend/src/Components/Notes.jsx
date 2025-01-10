import React, { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Notes({title,date,handleUpdateId}) {
    const[show,setShow]=useState(false)

    const handelShow=()=>{
        setShow(!show)
    }
    return (
        <>
            <div className="card  position-relative" style={{ width: '18rem', backgroundColor: "#bfe8eb" }}>
                <div className="card-body position-relative">
                    <h5 className="card-title">{title}</h5>
                    <div className="bottomContent">
                        <div className="date d-flex justify-content-between align-items-center">
                            <h5 className="fs-6">{date}</h5>
                            
                               {
                                show && (
                                    <div className="dropDown">
                                    <FaPen size={20} cursor={"pointer"} data-bs-toggle="modal" data-bs-target="#updatemodel" onClick={handleUpdateId}></FaPen>
                                    <MdDelete size={25} color="red" cursor={"pointer"} data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={handleUpdateId}></MdDelete>
                                    </div>
                                )
                               }
                            
                            <div className="" onClick={handelShow}>
                                <BsThreeDotsVertical size={25} cursor={"pointer"} />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}
export default Notes