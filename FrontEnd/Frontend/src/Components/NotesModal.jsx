import React, { useState } from "react"
function NotesModal({title,handeltitleChange,value,handleCreateNotes}) {
     
    return (
        <>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form class="form-floating">
                                <input type="name" class="form-control" id="floatingInputValue" value={value} onChange={handeltitleChange}/>
                                <label for="floatingInputValue">Enter Your Notes</label>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark" onClick={handleCreateNotes}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotesModal