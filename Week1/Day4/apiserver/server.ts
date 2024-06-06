//create a express server
 
//1.import express
import express from 'express';
//2. create an express instance
const app= express();
 
//3. create an endpoint using get/put/post/delete
app.get('/hello',(req,res)=>{
    //simply return a response
    res.write("HELLO response from the express server");
    res.write("Hey there response from the express server");
    //end the message
    res.end();
});
 
//4. Listen to a port no
app.listen(3400,()=>{
    console.log("Server is running at port no 3400");
});

//4. create an endpoint using get/put/post/delete

app.get('/user',(req,res)=>{
    //simply return a response
    res.write("User response added and displayed from the express server");
    //end the message
    res.end();
});

//5. create an endpoint http://Localhost:3400/courses
app.get('/courses',(req,res)=>{
    
    var courses = ['angular','node','react','api','typscript'];
    res.send(courses);
    //res.write("End of the message");
    //end the message
    //res.end();
});

//6. create an endpoint http://Localhost:3400/prod

app.get('/prod',(req,res)=>{
    
    var product = {
        "id": "P100",
        "name": "Laptop",
        "price": 45670
    };

    res.send(product);
});

//Listen to a port no
//declare the port variable
const PORT = 3100;

app.listen(PORT,()=> {
    console.log(`Server is running at port no ${PORT}`);
});

//7. Creating Creating an endpoint with path parameters - http://localhost:3400/users/1
//query string paramter  - ?
app.get('/users/:id',(req,res)=>{
    res.send('Good Evening !! '+ req.params.id)
});

//8. Creating an endpoint with query string param - http://localhost:3400/courses/byid?id=3
app.get('/courses/byid',(req,res)=>{
    const query = req.query.id;
    res.send('Good Evening User, you are enrolled in Angular with courseid as  - '+ query);
});

//POST Request
//endpoint for a post request

app.post('/loginUser',(req,res)=>{
    console.log("To create a user login - pass the info as a post body",req.body);
    const object = req.body.user;
    //send a response
    res.json({result:object})
});



