function User(UserName, Password){
    this.Password = Password;
    this.UserName = UserName
} 


User.prototype.login = function(username, password){
    if( this.UserName == username && this.Password == password ){
        console.log('Login Successful')
    }
    else{
        console.log('Invalid Credientails')
    }
}

const User1 = new User('Jaya', '12345');
const User2 = new User('Jay', '2555');

console.log(User1)


console.log(User1.login('Jaya', '12345'))