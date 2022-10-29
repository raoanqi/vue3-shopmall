/**
 * 提供一系列工具函数
 */

const Utils = {
    localGet: (key) => {
        const value = window.localStorage.getItem(key)
        try {
            return JSON.parse(value)
        } catch (error) {
            return value
        }
    },
    localSet: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    localRemove: (key) => {
        window.localStorage.removeItem(key)
    },
    localClear: () => {
        window.localStorage.clear()
    }
}

export default Utils