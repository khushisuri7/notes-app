
import {CiSearch} from 'react-icons/ci';
import NoteItem from '../components/NoteItem';
import dummyNotes from '../dummy_notes'
import {BsPlusLg} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Notes = ({notes}) => {
  const [showSearch,setShowSearch]=useState(false);
  const [text,setText]=useState('');
  const [filteredNotes,setFilteredNotes]=useState(notes);

  const handleSearch=()=>{
    setFilteredNotes(notes.filter(note=>{
      
    }))
  }
  return (
    <section>
        <header className="notes_header">
           {!showSearch && <h2>My Notes <button className='btn' onClick={()=>setShowSearch(prevState=> !prevState)}><CiSearch/></button></h2>}
            { showSearch && <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  autoFocus placeholder='keyword...'/> }
            {/* <button className='btn' onClick={()=>setShowSearch(prevState=> !prevState)}><CiSearch/></button> */}
        </header>
        <div className='notes_container'>
    {
        filteredNotes.map(note=><NoteItem key={note.id} note={note}/>)
    }
        </div>
        <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes