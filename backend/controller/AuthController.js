import bcrypt from 'bcrypt';
import User from '../models/UserModel.js'

const registration = (req, res)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({success:false, msg:"Please Fill The All Field"})
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return res.status(400).json({success:false, msg:"Please Enter A Valid Email"})
    }

    // if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)){
    //     return res.status(400).json({success:false, msg:"Please Enter A Valid password"})
    // }

    if(password.length < 8){
        return res.status(400).json({success:false, msg:"Please Enter A Valid password"})
    }

    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(password, salt, async(err, hash)=> {
            const hashedPassword = hash
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword
            })
            await newUser.save()
        });
    });
    
    res.status(200).json({success:true, msg:"Registration Successfull"})
}

export default registration