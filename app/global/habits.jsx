import { React, useState } from 'react'

let daysMap = new Map();
export { daysMap }

// date expected format: 'yyyy-mm-dd'
export function addHabit(date, timeOfDay, title, duration) {
    let habitsMap = new Map();
    habitsMap.set(timeOfDay, { habitTitle: title, habitDuration: duration })
    daysMap.set(date, habitsMap);
}


