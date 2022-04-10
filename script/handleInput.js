import { users } from "./Data.js";
export const $ = document.querySelector.bind(document)
export const $$ = document.querySelectorAll.bind(document)


const error = (value, message) => {
    const parentDiv = value.parentElement
    const span = parentDiv.parentElement.querySelector('span')
    span.innerHTML = message
}

// sử lý đăng nhập tài khoản
export function handleLoginData(user, password) {
    // xử lý kiểm tra input có dữ liệu ko
    if(user !== '' || password !== ''){
       const user3 =  users.some(element => {
            return element.user === user.trim() && element.password === password.trim()
        });

        if(user3) {
            alert('đăng nhập thành công')
        }else{
            alert('tài khoản mật khẩu sai')
        }
    }else{
        alert('vui lòng nhập mật khẩu tài khoản')
    }
}


export function handleLogin (btn, user ,password) {
    btn.addEventListener('click', () => handleLoginData(user.value, password.value)) 
}

export function handleSignUp(signUp) {
    signUp.btn.onclick = () => {
        if(signUp.user.value == '' || signUp.password.value == '' || signUp.repeatPass.value == ''){
            alert('vui lòng nhập đầy đủ thông tin')
        }else {
            if(signUp.user.value.length <= 2){
                error(signUp.user, 'độ dài tối thiểu là 3')
            }
            else if(signUp.password.value !== signUp.repeatPass.value) {
                error(signUp.repeatPass, 'mật khẩu phải trùng nhau')
            }else{
                
                const or = users.some(user => user.user === signUp.user.value)

                if(!or){

                    const newUser = signUp.user.value
                    const newPassword = signUp.password.value
                    users.push({
                        user:newUser,
                        newPassword:newPassword
                    })
                    alert('tạo tài khoản thành công')
                }else{
                    alert('tài khoản đã tồn tại')
                }

            }
            
            
        }
        
    }
}

// sử lý nhập input nhập liệu
export function handleInput(input) {
    // xử lý khi focus vào input thì đổi màu border
    input.addEventListener('focus', () => {
        input.style.border = '.1rem solid var(--text-color)'
        
      });
    // xử lý khi blur khỏi input thì xem có text ko đổi màu đỏ 
    input.addEventListener('blur', () => {
        input.style.border = 'initial'
        if(input.value == '')
         {
            input.style.border = '.1rem solid red'
            const a1 =  input.parentElement
            a1.parentElement.querySelector('span').innerHTML = 'vui lòng nhập trường này' 
         }else
         {
            const a1 =  input.parentElement
            a1.parentElement.querySelector('span').innerHTML = '' 
         }
    })
    
}




      