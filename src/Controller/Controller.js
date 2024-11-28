const { z } = require('zod');
const { TopLanguageAndSubjectModel, topSubjectModel, TopCarrerBuilding, topCompanyModel, 
topResourcesModel, topSupportModel, topPlansModel,
topCommunityModel} = require('../Config/Model/Model');
const AppError = require('../Uteils/error-handle');
// const  {topCarrerBuiding} = require('../Config/Model/Model')
// const TopCarrerBuilding = require('../Config/Model/Model');


const userSchema = z.object({
  // name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  // email: z.string().email({ message: "Invalid email format" }),
  // password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  // relatedTopic: z.string().optional(),
  topLanguageAndSubject: z.string()
});


const addUser = async (req, res) => {
  try {
    const { name, email, password, relatedTopic, topLanguageAndSubject } = userSchema.parse(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const newUser = new User({
      name,
      email,
      password,
      relatedTopic,
      topLanguageAndSubject
    });
    await newUser.save();
    return res.status(201).send("User Added Sucessfully")

  } catch (error) {
    console.log(error, "err")
    return res.status(400).json({ message: error });

    // return res.status(500).json({ message: "An error occurred while adding the user" });
  }
};


const addLanguage = async (req, res) => {
  console.log(req.body, "body")
  try {
    const { topLanguageAndSubject } = userSchema.parse(req.body);
    console.log(topLanguageAndSubject, "toplanguage")
    const existingUser = await TopLanguageAndSubjectModel.findOne({ topLanguageAndSubject })
    if (existingUser) {
      return res.status(400).send("topLanguage already exists");
    }
    const newUser = new TopLanguageAndSubjectModel({
      topLanguageAndSubject
    });
    await newUser.save();
    return res.status(201).send("topLanguage Added Sucessfully")

  } catch (error) {
    console.log(error, "err")
    return res.status(400).json({ message: error });

    // return res.status(500).json({ message: "An error occurred while adding the user" });
  }
}
const topSubjects = async (req, res) => {
  console.log(req.body, "Request Body");

  try {
    const { subjectName } = req.body;

    if (!subjectName) {
      return res.status(400).json({ message: "Subject not found" });
    }

    const existingSubject = await topSubjectModel.findOne({ subjectName });

    if (existingSubject) {
      return res.status(400).json({ message: "Subject already exists" });
    }

    const newSubject = new topSubjectModel({
      subjectName,
    });

    await newSubject.save();

    return res.status(201).json({ message: "Subject added successfully" });

  } catch (error) {
    console.error(error, "Error occurred while adding subject");

    return res.status(500).json({ message: "An error occurred while adding the subject", error: error.message });
  }
};

const addCareerBuilding = async (req, res) => {
  console.log(req.body.CarrerBuldingName, "Request Body");

  try {
    const { CarrerBuldingName } = req.body;
    console.log(CarrerBuldingName)
    if (!CarrerBuldingName) {
      return res.status(400).json({ message: "CarrerBuilding name is required" });
    }

    const newCarrerBuilding = new TopCarrerBuilding({
      CarrerBuildingName: CarrerBuldingName
    });

    await newCarrerBuilding.save();


    return res.status(201).json({ message: "CarrerBuilding Added Successfully" });
  } catch (error) {
    console.error(error, "Error occurred while adding CarrerBuilding");
    return res.status(500).json({ message: "An error occurred while adding the CarrerBuilding", error: error.message });
  }
};

const topCompany = async (req, res) => {
  console.log(req.body.topCompanyname, "Request Body");

  try {
    const { topCompanyname } = req.body;
    console.log(topCompanyname);
    if (!topCompanyname) {
      return res.status(400).json({ message: "topCompany  name is required" });
    }
    const newtopCompany = new topCompanyModel({
      topCompanyname: topCompanyname
    });
    await newtopCompany.save();

    return res.status(201).json({ message: "topCopmpany Is Added Successfully" });


  } catch (error) {
    console.error(error, "Error occurred while adding topCompany");
    return res.status(500).json({ message: "An error occurred while adding the topCompany", error: error.message });
  }

}
const topResources = async (req, res) => {
  console.log(req.body.topResourcesname, "Request Body");

  try {
    const { topResouucesname } = req.body;
    console.log(topResouucesname);

    if (!topResouucesname) {
      return res.status(400).json({ message: "topResources  name is required" });
    }
    const newtopResources = new topResourcesModel({
      topResourcesname: topResouucesname
    });
    await newtopResources.save();

    return res.status(201).json({ message: "topResources Is Added Successfully" });


  } catch (error) {
    console.error(error, "Error occurred while adding topResources");
    return res.status(500).json({ message: "An error occurred while adding the topResources", error: error.message });
  }

}

const topSupport = async(req,res)=>{
  console.log(req.body.topSupportname,"Request Body");

  try {
    const { topSupportname } = req.body;
    if(!topSupportname){
      throw new AppError("topSupportname is required" , 400)
    }
    console.log(topSupportname);
    
  if(!topSupportname){
    return res.status(400).json({ message: "topSupport  name is required" });
  }

  const newtopSupport = new topSupportModel({
topSupportname: topSupportname
  });
  await newtopSupport.save();

  return res.status(201).json({ message: "topSupport Is Added Successfully" });
   
  } catch (error) {
    console.error(error, "Error occurred while adding topSupport");
    return res.status(500).json({ message: "An error occurred while adding the topSupport", error: error.message });
  }
  
}

const topPlans= async(req,res)=>{
  console.log(req.body.topPlansname,"Request Body");
  
  try {
    const {topPlansname}=req.body
    console.log(topPlansname);
    
if(!topPlansname){
  return res.status(400).json({ message: "topPlans  name is required" });
}

const newtopPlans = new topPlansModel({
  topPlansname:topPlansname
});
await newtopPlans.save();

return res.status(201).json({ message: "topPlans Is Added Successfully" });


  } catch (error) {
    console.error(error, "Error occurred while adding topPlans");
    return res.status(500).json({ message: "An error occurred while adding the topPlans", error: error.message });
  }
}

const topCoummunity = async(req,res)=>{
console.log(req.body.topCommunityname,"Request Body");

try {
  const {topCommunityname}=req.body
  console.log(topCommunityname);

  if(!topCommunityname){
    return res.status(400).json({ message: "topCommunity  name is required" });
  }
  
  const newtopCommunity= new topCommunityModel({
  topCommunityname:topCommunityname
  });

  await newtopCommunity.save();

return res.status(201).json({ message: "topCommunity Is Added Successfully" });


} catch (error) {
  console.error(error, "Error occurred while adding topCommunity");
    return res.status(500).json({ message: "An error occurred while adding the topCommunity", error: error.message });

}
}

module.exports = { addUser, addLanguage, topSubjects, addCareerBuilding, topCompany, 
topResources,topSupport,topPlans,topCoummunity}


