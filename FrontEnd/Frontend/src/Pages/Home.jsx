import React, { useEffect, useState } from "react"
import Sidebar from "../Components/SideBar"
import Navbar from "../Components/NavBar"
import Notes from "../Components/Notes"
import NotesModal from "../Components/NotesModal"
import { dele, get, post, put } from "../../../../BackEnd/Services/ApiEndPoint"
import toast from "react-hot-toast"
import UpdateModel from "../Components/UpdateModel"
import DeleteModal from "../Components/DeleteModal"
import Nodata from "./Nodata"
function Home() {
    const [title, setTitle] = useState([])
    const [notes, setnotes] = useState([])
    const [updatenotes, setUpdatenotes] = useState("")
    const [refresh, setrefresh] = useState(false)
    const [notesId, setnoteId] = useState("")
    const [nodata, setNodata] = useState(false);

    if (notes) {
        console.log(notes)
    }

    useEffect(() => {
        const getNotes = async () => {
            try {
                const req = await get('/notes/getNotes')
                const res = req.data
                setnotes(res.Notes)

                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        getNotes()
    }, [refresh])
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleCreateNotes = async (e) => {
        try {
            const req = await post('/notes/createnote', { title })
            const res = req.data
            if (res.success) {
                toast.success(res.message)
                setrefresh(!refresh);
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleUpdates = async () => {
        try {
            const req = await put(`/notes/updateNotes/${notesId}`, { title: updatenotes })
            const res = req.data;
            if (res.success) {
                toast.success(res.message)
                setrefresh(!refresh);
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handledelete = async () => {
        try {
            const req = await dele(`/notes/deleteNotes/${notesId}`)
            const res = req.data
            if (res.success) {
                toast.success(res.message)
                setrefresh(!refresh);
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }




    return (
        <>
            <NotesModal title={'Create Note'} value={title} handeltitleChange={(e) => setTitle(e.target.value)} handleCreateNotes={handleCreateNotes}></NotesModal>
            <UpdateModel title={'Update Notes'} value={updatenotes} handeltitleChange={(e) => setUpdatenotes(e.target.value)} handleUpdates={handleUpdates} ></UpdateModel>
            <DeleteModal handledelete={handledelete}></DeleteModal>
            {/* <Navbar getNotes={getNotes}></Navbar> */}
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-2 col-md-2 min-vh-100 shadow">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <Navbar setNodata={setNodata}></Navbar>
                        <div className="mt-3 mx-5">
                            <h1 className="fs-2 fw-bold">NOTES</h1>
                        </div>
                        {
                            nodata ?
                                <Nodata />
                                :
                                <div className=" row mt-4 mg-5 row-gap-5">
                                    {notes && notes.map((element) => {
                                        return (
                                            <div className="col-mid-4 col-lg-4">
                                                <Notes date={formatDate(element.
                                                    createdAt
                                                )} title={element.title} handleUpdateId={() => setnoteId(element._id)}></Notes>
                                            </div>
                                        )
                                    })}
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home