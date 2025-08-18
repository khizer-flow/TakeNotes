export const getNotes = (req, res) => {
    res.send("you have 5 notes")    };
export const createNotes = (req,res) => {
    res.status(201).send('Note created successfully');
}
export const updateNotes = (req, res) => {
    res.status(200).json({message:'Note updated successfully'});  };
export const deleteNotes = (req, res) => {
    res.status(200).json({message:'Note deleted successfully'});  
}