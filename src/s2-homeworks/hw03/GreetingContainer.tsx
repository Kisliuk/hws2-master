import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=> void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string)=> void, setName: (name: string)=> void, addUserCallback: (name: string)=>void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    
    } else {
        addUserCallback(name)
        setName('')
        setError('')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string)=>void) => { 
    
    if(name.trim() === "" ){
        setError('Ошибка! Введите имя!')
    }else {
        setError("") 
    }
    
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLButtonElement>, addUser: ()=>void) => { 
    if (e.key === 'Enter') {
       addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError(null)
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    console.log(totalUsers)
    const lastUserName = totalUsers ? users[totalUsers-1].name : '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
