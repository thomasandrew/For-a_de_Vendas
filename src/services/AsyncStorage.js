import AsyncStorage from '@react-native-community/async-storage'

export const setData = async (key, value) =>
    await AsyncStorage.setItem(String(key), String(value), (err) => {
        if (err) throw new Error(err)
        else console.log(`"${key}: ${value}" saved successfully! 💾`)
    })

export const getData = async (key) =>
    await AsyncStorage.getItem(key, (err, resp) => {
        if (err) throw new Error(err)
        else if (typeof resp == 'object') console.log(`"${key}" does not exist! 😅`)
        else console.log(`"${key}: ${resp}" successfully loaded! 🎉`)
    })

export const clearData = async (key) =>
    await AsyncStorage.removeItem(key, (err) => {
        if (err) throw new Error(err)
        else console.log(`"${key}" successfully removed! 💨`)
    })

export const getAll = async () =>
    await AsyncStorage.getAllKeys((err, keys) => {
        if (err) throw new Error(err)
        else if(keys.length==0) console.log("Nothing around here... 📭",)
        else console.log("All keys successfully loaded! 🤙\n", keys)
    })

export const clearAll = async () =>
    await AsyncStorage.clear((err) => {
        if (err) throw new Error(err)
        else console.log(`All clean and "perfectly balanced, as all things should be." 😈💎👌💨`)
    })