export const addTodo =(data)=>{
    return{
      type:"AddToDo",
      payload:{
        id:new Date().getTime.toString(),
        
        data:data
      }
    }
}

export const deleteTodo =(id)=>{
    return{
      type:"DeleteToDo",
      id
    }
}

export const removeTodo =()=>{
    return{
        type:"RemoveToDo"
    }
}