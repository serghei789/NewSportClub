import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from 'moment'
import './AddEventForm.scss'
import { addNewEvent } from "../../../redux/thunks/eventThunks";


export default function AddEventForm() {
  const [titleInput, setTitleInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [areaIdInput, setAreaIdInput] = useState('');
  const [sportIdInput, setSportIdInput] = useState('');
  const [startTimeInput, setStartTimeInput] = useState(new Date().toISOString());
  const [endTimeInput, setEndTimeInput] = useState(new Date().toISOString());

  const dispatch = useDispatch()

  function submitHandler() {
    dispatch(addNewEvent({
      title: titleInput,
      about: commentInput,
      placeId: areaIdInput,
      sportId: sportIdInput,
      userId: 1,  //TODO 
      startTime: moment(startTimeInput).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(endTimeInput).format('YYYY-MM-DD HH:mm:ss'),
    }))
  }

  return (
    <div className="form">
      <input 
        onChange={(e) => setTitleInput(e.target.value)} 
        value={titleInput} 
        type="text" 
        className="form__item" 
      />
      <input 
        onChange={(e) => setStartTimeInput(e.target.value)}
        value={startTimeInput}
        type="datetime-local" 
        id="starteventtime" 
        name="starteventtime" 
      />
      <input 
        onChange={(e) => setEndTimeInput(e.target.value)}
        value={endTimeInput}
        type="datetime-local" 
        id="endeventtime" 
        name="endeventtime" 
      />
      <input 
        onChange={(e) => setCommentInput(e.target.value)} 
        value={commentInput} 
        type="text" 
        className="form__item" 
      />
      <input 
        onChange={(e) => setSportIdInput(e.target.value)} 
        value={sportIdInput} 
        type="text" 
        className="form__item" 
        placeholder="виды спорта"
      />
      <input 
        onChange={(e) => setAreaIdInput(e.target.value)} 
        value={areaIdInput} 
        type="text" 
        className="form__item" 
        placeholder="площадка"

      />
      <button onClick={submitHandler}>Создать</button>
      <button>Закрыть</button>
    </div>
  )
}
