var question_list = ["How many continents are there?","What is the capital of India?","who is prime minister of india?" ]
var options_list=[["1.four", "2.nine", "3.seven", "4.eight"], ["1.chandigarh", "2.bhopal", "3.chennai", "4.delhi",], ["1.narendra modi", "2.jawaharlal nehru", "3.rahul gandhi", "4.gandhi",]]
var answer_list=[3, 4, 1]
var lifeline_list=[["1.seven", "2.eight"], ["1.bhopal", "2.delhi"], ["1.rahul gandhi", "2.narendra modi"]]
var lifeline_answer_list=[1, 2, 2]
let amount=0
let count=1
console.log("LETS PLAY THE GAME")
for (var question=0; question<question_list.length; question++){
    console.log(question_list[question])
    for (var option=0; option<options_list[question].length; option++){
        console.log(options_list[question][option])
    }
        console.log('do you want to choose 5050 lifeline. but you have only one lifeline')
        var readline = require('readline-sync');
        var term1 = readline.question("Enter yes/no:")
        if (term1=="yes"){
            if (count===1){
                for (lifeline_question=0; lifeline_question<lifeline_list[question].length; lifeline_question++){
                    console.log(lifeline_list[question][lifeline_question])
                }
                var readline = require('readline-sync');
                var answer = readline.question("select answer :")
                if (answer!=lifeline_answer_list[question]){
                    console.log("Wrong answer")
                    break
                }
                amount=amount+2000
                count=count-1
            }else{
                console.log("you already use this lifeline ")
                question=question-1
                amount=amount+2000
                console.log("congratulations! you win", amount,"$")        
                }
        }else if (term1=="no"){
            var readline = require('readline-sync');
            var answer = readline.question("select answer:")
            if (answer!=answer_list[question]){
                console.log("wrong answer")
                amount=amount+2000
                console.log(" you win", amount,"$ only")
                break
            }
        amount=amount+2000
        console.log("congratulations ! you win", amount,"$")
        }
        else{
            console.log("error write properlly")
            question-=1
        }
}
console.log("game finished! enjoy your day ")