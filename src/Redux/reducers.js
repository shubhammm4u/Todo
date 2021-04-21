const initialState={
    todaystask:[],
    showError: false
}

export default function(state=initialState, action){
    switch(action.type){
        case 'addTodaysTask':
            return {...state, todaystask: [...state.todaystask, {id:state.todaystask.length+1, name:action.payload.taskName, category: action.payload.category}]}

        case 'updateTasks':
            return {...state, todaystask: action.payload}
            
        case 'setError':
            return {...state, showError: action.payload}

        default:
            return state
    }
}