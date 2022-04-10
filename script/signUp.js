import {handleInput,handleSignUp, $, $$} from './handleInput.js'




const btn = $('.signUp')
const user = $('.user')
const password = $('.password') 
const repeatPass = $('.repeatPass') 
const signUp = {
    btn,
    user,
    password,
    repeatPass
}
handleInput(user)
handleInput(password)
handleInput(repeatPass)
handleSignUp(signUp)