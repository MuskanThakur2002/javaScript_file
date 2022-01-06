var axios = require('axios');
axios.get('http://saral.navgurukul.org/api/courses')
    .then(response => {
    var courses=[]
    const data=(response.data);
    for (let courses in data){
        console.log(courses)
    }
    for (let name in data["availableCourses"]){
        console.log(parseInt(name)+1,":-",data["availableCourses"][name]["name"], data["availableCourses"][name]['id'])
        courses.push(data["availableCourses"][name]["id"])
    }
    parent_index=[]
    var readline = require('readline-sync');
    var select_course = readline.question("select any courses")
    axios.get("http://saral.navgurukul.org/api/courses/"+courses[select_course-1]+"/exercises")
        .then(responses => {
        var parent_data=(responses.data);
        for (parents in parent_data['data']){
            console.log(parseInt(parents)+1,":-", parent_data['data'][parents]["name"], parent_data['data'][parents]['parent_exercise_id'])
            parent_index.push(parent_data['data'][parents]['parent_exercise_id'])
            if (parent_data['data'][parents]["childExercises"].length!=0){
                for (child in parent_data['data'][parents]["childExercises"]){
                    console.log("         ",parseInt(child)+1,":-", parent_data['data'][parents]['childExercises'][child]['name'],parent_data['data'][parents]['childExercises'][child]['id'])
                }
            }
        }
        child_index=[]
        var slugs=[]
        var child_course = readline.question("select any parentscoursesfor knowing its child")
        for (parents in parent_data['data']){
            if (parent_data['data'][parents]["id"]==parent_index[parseInt(child_course)-1]){
            if (parent_data['data'][parents]["childExercises"].length!=0){
                    for (child in parent_data['data'][parents]['childExercises']){
                        console.log("         ",parseInt(child)+1,":-", parent_data['data'][parents]['childExercises'][child]['id'], parent_data['data'][parents]['childExercises'][child]['name'])
                    }
                    // var id1 = readline.question("select any child for getting there slug")
                    for (i in parent_data['data'][parents]['childExercises']){
                    slug=parent_data['data'][parents]['childExercises'][i]['slug']
                    id=parent_data['data'][parents]['childExercises'][i]['id']
                    axios.get('http://saral.navgurukul.org/api/courses/'+id+'/exercise/getBySlug?slug='+slug)
                    .then(responses => {
                        var parent_data=(responses.data);
                        child_index.push(parent_data['content'])
                        if (child_index.length==4){
                            var id1 = readline.question("select any child for getting there slug")
                            console.log(child_index[id1-1])
                            k=id1-1
                            for (j in child_index){
                                var pre_next = readline.question("what next contant you want (p/n)")
                                if (pre_next=="p"){
                                    k=k-1
                                    if(k==-1){
                                        console.log("last page")
                                        break
                                    }else{
                                        console.log(child_index[k])
                                        continue
                                    }
                                }else if(pre_next=="n"){
                                    k=k+1
                                    if(k==parseInt(child_index.length)){
                                        console.log("last page")
                                        break
                                    }else{
                                        console.log(child_index[k])
                                        continue
                                    }
                                }else{
                                    console.log("write properly")
                                    continue
                                }
                            }

                        }
                    }).catch(error => {
                            console.log(error);
                    })
                }
            }else if (parent_data['data'][parents]["childExercises"].length==0){
                slug1=parent_data['data'][parents].slug
                id1=parent_data['data'][parents]['id']
                axios.get('http://saral.navgurukul.org/api/courses/'+id1+'/exercise/getBySlug?slug='+slug1)
                    .then(responses => {
                        var parent_data=(responses.data);
                        console.log(parent_data['content'])
                    }).catch(error => {
                            console.log(error);
                    })
                }
            }
        }
    }).catch(error => {
    console.log(error);
    });                                                             
}).catch(error => {
console.log(error);
});

