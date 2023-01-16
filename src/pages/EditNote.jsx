
import { Link, useParams } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io';
import {RiDeleteBin6Line} from 'react-icons/ri'


const EditNote= ({notes,setNotes}) => {
    const {id}=useParams();
    console.log(id);
  return (
    <section>
        <header className="create-note_header">
        <Link to='/' className="btn"><IoIosArrowBack/></Link>
        <button className="btn lg primary">Save</button>
        <button className="btn danger"><RiDeleteBin6Line/></button>
        </header>
        <form className="create-note_form">
            <input type="text" placeholder='Title' autoFocus/>
            <textarea rows='28' placeholder="Note Details ..."></textarea>
        </form>
    </section>
  )
}

export default EditNote;