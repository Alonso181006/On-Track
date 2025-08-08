import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

// really need to fix styling with all components especially converting from tailwind specific measurements to raw css
const DropdownComponent = ({ title, items, width, px, value, handleChange }) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <Dropdown
            style={[
                styles.dropdown, 
                {
                    width: width,
                    paddingHorizontal: px
                }, 
                isFocus && { borderColor: '#3b82f6' }
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={items}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? title : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                handleChange(item.value);
                setIsFocus(false);
            }}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 12,
        height: 56,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 16,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#7b7b8b'
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 14,
    },
});