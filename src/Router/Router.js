const express=require('express')
const { addUser,  topSubjects,addCareerBuilding, 
topCompany, topResources,topSupport,
topPlans,topCoummunity} = require('../Controller/Controller')
const {addLanguage} =require('../Controller/Controller')
const router = express.Router()
router.post('/addUser',addUser)                  
router.post('/addLanguage',addLanguage) 
router.post('/subjects',topSubjects)  
router.post("/addCarrerBuilding",addCareerBuilding)                                                      
router.post("/topCompany",topCompany);
router.post("/topResouurces",topResources)
router.post("/topSupport",topSupport)
router.post("/topPlans",topPlans)
router.post("/topCommunity",topCoummunity)
module.exports = router 