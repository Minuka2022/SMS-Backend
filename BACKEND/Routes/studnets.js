const router = require("express").Router();
let Students = require("../models/student");


router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = number(req.body.age);
    const Gender = req.body.Gender

    const newStudent = new Students({
        name,
        age,
        Gender
    })
    newStudent.save().then(()=>{
    
        res.json("student added")
    })
    
    .catch((err)=>{
    
     console.log(err)
    })
})


router.route("/").get((req,res) => {

    Students.find().then((students) => {

        res.json(students)
    })
    caches((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) => {
    let userID = req.params.id
    const {name , age , Gender } = req.body

    const updateStudent = {

        name,
        age,
        Gender
    }

    const update = await Students.findByIdAndDelete(userID , updateStudent)

    .then(() =>{

        res.status(200).send({status:"user updated" , user: update})
    })
    .catch(() => {

        res.status(200).send({status:"Error with updating data" , error});
    })
})

router.route("/delete/:id").delete(async(req,res) => {

let userID  = req.params.id
const { name , age , Gender} = req.body

const deleteStudent = { name ,age , Gender}

const del = await Students.findByIdAndDelete(userID , deleteStudent)

.then(() => {

    res.status(200).send({status:"User deleted" , user:del})
})
  
.catch((err) =>{
   console.log(err.message)
   res.status(200).send({status:"Error with delete user" , err:err.message})
})

})

module.exports = router;