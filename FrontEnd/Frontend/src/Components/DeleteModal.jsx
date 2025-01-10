import React, { useState } from "react"
function DeleteModal({handledelete}) {
     
    return (
        <>


            <div className="modal fade" id="deleteModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                        <div className="modal-header">
                            <h1 className="modal-title" >Delete Notes</h1>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete these Records?</p>
                            <p className="text-warning"><small>This action cannot be undone.</small></p>
                        </div>
                        </form>
                         
                       
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-dark" onClick={handledelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeleteModal