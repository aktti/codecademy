const mongoose = require('mongoose');

const topLanguageSchema = new mongoose.Schema({
    topLanguageAndSubject:{
        type:String
    }
})  
const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
    relatedTopic:{
        type:String,
        required:true
    }, 
    topLanguageAndSubject:{
        type:String,
        required:true
    },

})

const topSubjects = new mongoose.Schema({
    subjectName:{
        type:String,
        required:true
    }
   
})
const TopCarrerBuildingSchema = new mongoose.Schema({
    CarrerBuildingName:{
        type:String,
        required:true
    }
})

const topCompany = new mongoose.Schema({
topCompanyname:{
    type:String,
    required:true
}
})

const topResources = new mongoose.Schema({
    topResourcesname:{
        type:String,
        required:true
    }
})

const topSupport = new mongoose.Schema({
    topSupportname:{
        type:String,
        required:true
    }
})

const topPlans = new mongoose.Schema({
    topPlansname:{
        type:String,
        required:true
    }
})
const topCommunity= new mongoose.Schema({
    topCommunityname:{
     type:String,
     required:true
    }
})

const TopLanguageAndSubjectModel = mongoose.model('TopLanguageAndSubject', topLanguageSchema);
const sanidhya = mongoose.model("user",user);
const topSubjectModel = mongoose.model("Subjects",topSubjects);
const topCompanyModel = mongoose.model("topCompany",topCompany);
const topResourcesModel= mongoose.model("topResources",topResources)
const topSupportModel = mongoose.model('topSupport',topSupport)
const TopCarrerBuilding = mongoose.model('TopCarrerBuilding', TopCarrerBuildingSchema)
const topPlansModel = mongoose.model("topPlans",topPlans)
const topCommunityModel = mongoose.model("topCommunity",topCommunity)
module.exports= {TopLanguageAndSubjectModel,sanidhya,topSubjectModel,
TopCarrerBuilding,topCompanyModel,topResourcesModel,topSupportModel,topPlansModel,topCommunityModel};