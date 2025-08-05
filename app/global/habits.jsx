import { React, useState } from 'react'

let daysMap = new Map();

// date expected format: 'yyyy-mm-dd'
function addHabit(date, timeOfDay, title, duration) {
    let habitsMap = new Map();
    habitsMap.set(timeOfDay, { habitTitle: title, habitDuration: duration })
    daysMap.set(date, habitsMap);
}

function showHabits(date) {
    if (daysMap.has(date)) {
        const habitsForDay = daysMap.get(habitsMap);
        const [habitsArray, setHabitsArray] = useState([]);
        const [popupVisible, setPopupVisible] = useState(false);
        habitsForDay.forEach(value => {
            setHabitsArray(habitsArray => [...habitsArray, value]);
        });
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={popupVisible}
                onRequestClose={() => setPopupVisible(false)}
            >
                <FlatList
                    className="w-[340px] h-[425px] rounded-[12px] bg-[#EFEBEB] my-[40px]"
                    data={habitsArray}
                    renderItem={
                        ({ item }) => <Habit title={item.habitTitle} duration={item.habitDuration} />
                    }
                    contentContainerStyle={{
                        alignItems: 'center',
                        marginVertical: 10
                    }}
                />
            </Modal>

        )
    }
    else {
        return null;
    }
}

export default {
    addHabit,
    showHabits,
    daysMap
}