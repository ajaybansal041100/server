const TeacherModel = require('../models/teacher')


class TeacherController{
    static display = async(req,res)=>{
        try{
            res.send("Hello Display")
        } catch(error){
            console.log(error)
        }
    }

    static create = async(req,res)=>{
        try{
            //console.log(req.body)
            const {name} = req.body;
            const {email} = req.body;
            const {password} = req.body
            const data = await ContactModel.create({
                name,
                email,
                password
            })
            res.json(data)
        } catch(error){
            console.log(error)
        }
    }
}

module.exports = TeacherController