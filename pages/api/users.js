

export default function getUser(req,res){
    res.status(200).send([{id:1,name:"fazil",place:"wayanad"},{id:2,name:"muhammed",place:"calicut"},{id:3,name:"ali",place:"wayanad"}])

}