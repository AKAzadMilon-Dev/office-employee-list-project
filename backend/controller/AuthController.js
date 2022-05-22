const registration = (req, res)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({success:false, msg:"Please Fill The All Field"})
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return res.status(400).json({success:false, msg:"Please Enter A Valid Email"})
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)){
        return res.status(400).json({success:false, msg:"Please Enter A Valid password"})
    }
    
    res.json(req.body)
}

export default registration