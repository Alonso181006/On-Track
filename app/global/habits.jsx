import { React, useState } from 'react'

let daysMap = new Map();
export { daysMap }

// date expected format: 'yyyy-mm-dd'
export function addHabit(date, timeOfDay, title, duration) {
    if (daysMap.has(date)) {
        const habitsForDay = daysMap.get(date);
        if (!habitsForDay.has(timeOfDay)) {
            habitsForDay.set(timeOfDay, { habitTitle: title, habitDuration: duration, habitTimeOfDay: timeOfDay });
        }
    } else {
        let habitsMap = new Map();
        habitsMap.set(timeOfDay, { habitTitle: title, habitDuration: duration, habitTimeOfDay: timeOfDay })
        daysMap.set(date, habitsMap);
    }

}


