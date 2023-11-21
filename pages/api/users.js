import main from "../database/connection";
import kitten from "../database/schema";


export default async function getUser(req, res) {
  try {
    await main(); 
    const create = new kitten({ name: 'Do Smith', Place: 'Thrissur' });
    const exist=await kitten.find({name:create.name})
    if(exist.length==0){
        create.save().then(() => {
 
            const data = create.toJSON();
            
           
          });

    }
    const users=await kitten.find()

 
    res.status(200).json(users);
  } catch (error) {
   
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
