import NotesModel from "../Models/Notes.js"

const Create = async (req, res) => {
    try {
        const userId = req.userId
        const { title } = req.body
        if (!title) {
            return res.status(303).json({ success: false, message: "Title are required" })
        }
        const NewNotes = new NotesModel({
            title, userId
        })
        await NewNotes.save()
        return res.status(200).json({ success: true, message: "Notes Created Successfully", Notes: NewNotes })

    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server error" })
    }
}


const UpdateNotes = async (req, res) => {
    try {
        const userId = req.userId
        const NotesId = req.params.id
        const { title } = req.body
        const FindeNotes = await NotesModel.findById({ _id: NotesId })
        if (!FindeNotes) {
            return res.status(404).json({ success: false, message: "Notes Not Found" })
        }
        const Notesuser = FindeNotes.userId
        if (userId.toString() !== Notesuser) {
            return res.status(303).json({ success: false, message: "Unauthorized User" })
        }
        const updateNotes = await NotesModel.findByIdAndUpdate(
            { _id: NotesId },
            { title }, { new: true }
        )
        return res.status(200).json({ success: true, message: "Notes Update Successfully", updateNotes })

    } catch (error) {
        return res.status(500).json({ success: false, message: "Interval server Error" })

    }
}


const DeleteNotes=async (req,res)=>{
    try {
        const userId = req.userId
        const NotesId = req.params.id
        const FindeNotes = await NotesModel.findById({ _id: NotesId })
        if (!FindeNotes) {
            return res.status(404).json({ success: false, message: "Notes Not Found" })
        }
        const Notesuser = FindeNotes.userId
        if (userId.toString() !== Notesuser) {
            return res.status(303).json({ success: false, message: "Unauthorized User" })
        }

        const deleteNotes=await NotesModel.findByIdAndDelete(NotesId)
        return res.status(200).json({ success: true, message: "Notes Delete Successfully", deleteNotes })
    } catch (error) {
          return res.status(500).json({ success: false, message: "Interval server Error" })
    }
}


const GetNotes=async(req,res)=>{
    try {
        const userId = req.userId
        const Notes=await NotesModel.find({userId})
        if(!Notes){
          return res.status(404).json({ success: false, message: "No data found" })
        }
        res.status(200).json({success:true,Notes})
    } catch (error) {
        return res.status(500).json({ success: false, message: "Interval server Error" })
    }

    
}
export { Create, UpdateNotes ,DeleteNotes,GetNotes}