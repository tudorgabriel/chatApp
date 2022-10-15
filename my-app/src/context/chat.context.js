import { createContext, useState } from 'react';
const addUserToChat = (user) => {
    return user
}

export const ChatContext = createContext({
    chat: [],
    addUser: () => { },
    setUpdateChat: () => { }
})

export const ChatProvider = ({ children }) => {
    const [chat, setChat] = useState([])
    const [updateChat, setUpdateChat] = useState([]);
    const addUser = (userToAdd) => {
        setChat(addUserToChat(userToAdd))
        setUpdateChat([])
    }
    const value = { addUser, chat, setUpdateChat, updateChat }
    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>

}
