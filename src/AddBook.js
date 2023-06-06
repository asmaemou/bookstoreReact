function AddBook(){
    return(
        <>
        <h1>Add a New Book</h1>
        <br></br>
        <form>
            <input type="text" id="tile" name="title" placeholder="Title" required/><br/>
            <input type="text" id="author" name="author" placeholder="Author" required/>
            <input type="add" value="Add"/>
        </form>
        </>
        
    )
}
export default AddBook;