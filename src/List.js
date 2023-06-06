function List(){
    return (
        <>
        <h1>Add a New Book</h1><br></br><table className="center">
            <tr>
                <th className="book-name">Book Name</th>
                <th className="author-name">Author Name</th>
                <th className="action">Action</th>
            </tr>
            <tr>
                <td className="instance-book">Les miserables</td>
                <td className="instance-author">Victor Hugo</td>
                <td><button type="button">Remove</button></td>
            </tr>
            <tr>
                <td className="instance-book">Notre Dame de Paris</td>
                <td className="instance-author">Simon de bauvoir</td>
                <td><button type="button">Remove</button></td>
            </tr>
        </table>
        </>
    )
}
export default List;