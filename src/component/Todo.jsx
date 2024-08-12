import {useState} from 'react'
import { GoPlus } from "react-icons/go";
import {useSelector, useDispatch} from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions';
import { MdDelete } from "react-icons/md";



const Todo = () => {
const [inputData, setinputData] =useState('');
const dispatch = useDispatch();
const list = useSelector((state)=> state.todoReducers.list);
  return (
    <div className='w-full mx-auto  items-center justify-center flex '>
    <div className='mt-32'>
   
      <h2 className='text-white text-lg mx-6 '>Add your List Here </h2>
      <div className='border flex w-full  border-gray-200 rounded-lg mt-4 '>
      <input type="text" className='py-2 px-4 w-full m-2' placeholder='Add a new task' value={inputData} onChange={(event)=> setinputData(event.target.value)}/>
      <button className='border bg-white' onClick={() =>dispatch(addTodo(inputData),setinputData(''))} ><GoPlus className='w-6 h-6'/></button>
      </div>
      <div className='flex flex-col mt-4 gap-4'>
      {list.map((elem)=>{
        return(
      <div key={elem.id} className='bg-blue-500  text-white flex py-2 justify-between px-4 border hover:bg-slate-900 rounded-lg   w-full hover:text-white'>
      <h3>{elem.data}</h3>
        <button className='' onClick={() =>dispatch(deleteTodo(elem.id),setinputData(''))}><MdDelete className='w-6 h-6'/></button>
      </div>
        )
    })}
      </div>
      <button className=' bg-white mt-4  mx-8 items-center flex justify-center text-black border border-gray-400 text-center px-6 py-2 hover:bg-blue-400 rounded-md' onClick={() => dispatch(removeTodo())}>check list
      </button>
    </div>
    </div>
  )
}

export default Todo
