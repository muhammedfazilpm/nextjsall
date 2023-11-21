import mongoose from 'mongoose'





const main=async()=>{
    
    await mongoose.connect(process.env.mongourl)
    console.log("Database Connected")
    console.log(process.env.mongourl)
}

export default main