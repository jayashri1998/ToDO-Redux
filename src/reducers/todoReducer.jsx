const initialData = {
    list: []
  };
  
  export const todoReducers = (state = initialData, action) => {
    switch (action.type) {
      case 'AddToDo':
        const { id, data } = action.payload;
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data
            }
          ]
        };
  
      case 'DeleteToDo':
        const newlist = state.list.filter((elem) => elem.id !== action.id);
        return {
          ...state,
          list: newlist
        };
        case 'RemoveToDo':
           
            return {
              ...state,
              list: []
            };
  
      default:
        return state;
    }
  };
  