var fs=require('fs');
var readline = require('readline-sync');
var user = readline.question("what you want to 1.signup or 2.login:")
if (user==1){
    var user_name = readline.question("write username:")
    var password_1 = readline.question("create password:")
    if (password_1.length>=8){
        if (password_1.includes("#") || password_1.includes("@") ){
            var password_2 = readline.question("Enter password again:")
            if (password_1===password_2){
                console.log("congratulation!" ,user_name, " you are signup successfully ")
                var discription = readline.question("Discription")
                var dob = readline.question("Date of birth")
                var hobbie=readline.question("Hobbie")
                var gender=readline.question("Gender Male/Female")
                var info={"User" : {"username" : user_name, "Password": password_1, "Profile" : {"Discription" : discription , "DOB":dob, "Hobbie": hobbie , "Gender": gender}}}
                let json = JSON.stringify(info);
                fs.writeFileSync('datafile.txt', json)
                    console.log(json)
            }else{
                console.log("password is not match");
            }
        }else{
            console.log("special character should be there");
        }
    }else{
        console.log("8 character should be there");
    }
}else if(user==2){
    var user_name = readline.question("enter username:")
    var password_1 = readline.question("enter password:")
    var read=fs.readFileSync('datafile.txt')
    data = JSON.parse(read);
    users=data["User"]
    if (data["User"]["username"]===user_name){
        if (data["User"]["Password"]===password_1){
            console.log("login successfull")
            console.log("profile")
            console.log("Discription : ", users["Profile"]["Discription"])
            console.log("DOB : ", users["Profile"]["DOB"])
            console.log("Hobbie : ", users["Profile"]["Hobbie"])
            console.log("Gender : ", users["Profile"]["Gender"])
        }else{
            console.log("write correct password")
        }
    }else{
        console.log("didn't find any account")
    }
}
