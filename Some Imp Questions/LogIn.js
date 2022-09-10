let obj = {
    userName: 'mdkaif',
    password: 'kaif0000',
    login: function login(userName,password){
        if(this.userName === userName){
            if(this.password === password){
                console.log('Log In Successfull');
            }
            else
                console.log('You have entered Wrong password!')
        }
        else
            console.log('You have entered Wrong username or password!')
    }
}

obj.login('mdkaf', 'kaif0000');




// let eName = 'mdkaf';
// let ePassword = 'kaif000'



