
import {CiSearch} from 'react-icons/ci';
import NoteItem from '../components/NoteItem';
import dummyNotes from '../dummy_notes'
import {BsPlusLg} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Notes = ({notes}) => {
  return (
    <section>
        <header className="notes_header">
            <h2>My Notes <button className='btn primary'><CiSearch/></button></h2>
            {/* <input type="text" autoFocus placeholder='keyword...'/> */}
            {/* <button className='btn'><CiSearch/></button> */}
        </header>
        <div className='notes_container'>
    {
        notes.map(note=><NoteItem key={note.id} note={note}/>)
    }
        </div>
        <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes