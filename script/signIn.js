import {handleLogin, handleInput, $, $$ } from "./handleInput.js" 


const btn = $('.login')
const user = $('.user')
const password = $('.password')

handleInput(user)
handleInput(password)
handleLogin(btn, user, password)