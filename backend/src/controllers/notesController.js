export const getNotes = (req, res) => {
    res.send("<h1>you have 15 notes</h1>")    };
export const createNotes = (req,res) => {
    res.status(201).send('Note created successfully');
}
export const updateNotes = (req, res) => {
    res.status(200).json({message:'Note updated successfully'});  };
export const deleteNotes = (req, res) => {
    res.status(200).json({message:'Note deleted successfully'});  
}

export const getNoteById = (req, res) => {
    const noteId = req.params.id;
    res.status(200).json({ message: `Note with ID ${noteId} retrieved successfully` });
}