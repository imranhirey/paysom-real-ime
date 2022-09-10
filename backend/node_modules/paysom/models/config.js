const { checkkeys } = require("../resources/Keychecker")

// handle configaration of the application
class Paysom {
    publish_key= ''
    secret_key=''
    constructor(publish_key='', secret_key='') {}
    config({publish_key='', secret_key=''}) {
        this.publish_key= publish_key
        this.secret_key= secret_key
        // check if all the keys are set or not if not then throw error
        if(this.publish_key==''||this.secret_key=='' || this.publish_key==undefined||this.secret_key==undefined){
            throw new Error('Publishkey and secretkey are required')
        }
        else{
            // check if the keys are valid or not
            // if valid then return true else return false
            checkkeys(publish_key,secret_key).then(res=>{console.log(res)}).catch(err=>{console.log(err)})

        }

     
    }
}
module.exports=Paysom