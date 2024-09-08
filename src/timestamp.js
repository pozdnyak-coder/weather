function unix(dt, type) {
    let milliseconds = dt * 1000
    const date = new Date(milliseconds)
    let result = 
    type == 'weekday' ? date.toLocaleString("ru-Ru", {weekday: "short"}) :
    type == 'month' ? date.toLocaleString("ru-Ru", {month: "short"}) :
    type == 'day' ? date.toLocaleString("ru-Ru", {day: "numeric"}) : ''
    
    return result
}

export default unix