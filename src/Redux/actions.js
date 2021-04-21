export const addToTodaysTask=(data)=>({
    type:'addTodaysTask',
    payload:data
})

export const showError=(data)=>({
    type:'setError',
    payload:data
})

export const updateTasks=(data)=>({
    type:'updateTasks',
    payload:data
})
