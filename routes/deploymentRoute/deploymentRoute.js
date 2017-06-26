var express = require('express');
var router = express.Router();
var getData=require('../../services/deploymentService/deploymentService')
var DepJob=require('../../models/deploymentJob');
var fs=require('fs');
var insert=[];
router.get('/api/getapp/:appname',function(req,res,next){
	
	var appname=req.param('appname');
	
	var arr=[];
	var count=0;
	
	DepJob.findAll({where :{
		
		ApplicationName:appname //matching passed parameter value with Database-Table(DeploymentJob) field value
	} }).then(function(data) {
	
	getData.getConfData(data,arr,count);
	
	res.json(arr);
	console.log("Testing Data :"+JSON.stringify(arr));
	console.log("\nTotal Count : "+c);
	
});
});

router.post('/api/postdata',function(req,res,next){
	
	

  var Source = req.body.Source;
  var CollectionName = req.body.CollectionName;
  var Version= req.body.Version;
  var LocalizedName= req.body.LocalizedName;
  var LocalizedDescription= req.body.LocalizedDescription;
  var Name= req.body.Name;
  var Publisher= req.body.Publisher;
  var Comments= req.body.Comments;
  var TestMachine= req.body.TestMachine;
  var DSL= req.body.DSL;
  var SiteCode= req.body.SiteCode;
  var Primary= req.body.Primary;
  var RegKey= req.body.RegKey;
  var RegItem= req.body.RegItem;
  var RegExpectedValue= req.body.RegExpectedValue;
  var CustomSwitches = req.body.CustomSwitches;
  var additional_details= req.body.additional_details;
  var u_automation_pkg_no = req.body.u_automation_pkg_no;
  var u_job_id = req.body.u_job_id;
  var Work_notes=req.body.Work_notes;
  var RFWId= req.body.RFWId;
  var RequestID= req.body.RequestID;
  var PackageID= req.body.PackageID;
  var ContentID= req.body.ContentID;
  var AssignmentID= req.body.AssignmentID;
  var DSLPath= req.body.DSLPath;
  var RFWTitle= req.body.RFWTitle;
  var SolutionEngineer= req.body.SolutionEngineer;
  var ETCDate= req.body.ETCDate;
  var PilotDeploymentStatus= req.body.PilotDeploymentStatus;
  var PilotDeploymentStatusComment= req.body.PilotDeploymentStatusComment;
  var PilotDeploymentStatusUpdate= req.body.PilotDeploymentStatusUpdate;
  var QADeploymentStatus=req.body.QADeploymentStatus;
  var QADeploymentStatusComment= req.body.QADeploymentStatusComment;
  var QADeploymentStatusUpdate= req.body.QADeploymentStatusUpdate;
  var Action= req.body.Action;
  var StoppingRunbook=req.body.StoppingRunbook;
  var phone= req.body.phone;
  var location= req.body.location;
  var Keywords= req.body.Keywords;
  var SkipSignOff= req.body.SkipSignOff;
  var u_fms_number= req.body.u_fms_number;
  var project_name= req.body.project_name;
  var RequestedBy= req.body.RequestedBy;
  var Email= req.body.Email;
  var RequestManager=req.body.RequestManager;
  var TechnicalContact= req.body.TechnicalContact;
  var project_manager= req.body.project_manager;
  var project_manager_email=req.body.project_manager_email;
  var requested_by= req.body.requested_by;
  var assigned_to= req.body.assigned_to;
  var u_validated_by= req.body.u_validated_by;
  var InstallationType= req.body.InstallationType;
  var Platforms= req.body.Platforms;
  var Categories= req.body.Categories;
  var targetAreas= req.body.targetAreas;


	
insert.push({
	
	
  "Source": Source,
  "CollectionName": CollectionName,
  "Version": Version,
  "LocalizedName": LocalizedName,
  "LocalizedDescription": LocalizedDescription,
  "Name": Name,
  "Publisher": Publisher,
  "Comments": Comments,
  "TestMachine": TestMachine,
  "DSL": DSL,
  "SiteCode": SiteCode,
  "Primary": Primary,
  "RegKey": RegKey,
  "RegItem": RegItem,
  "RegExpectedValue": RegExpectedValue,
  "CustomSwitches": CustomSwitches,
  "additional_details": additional_details,
  "u_automation_pkg_no": u_automation_pkg_no,
  "u_job_id": u_job_id,
  "Work_notes": Work_notes,
  "RFWId": RFWId,
  "RequestID": RequestID,
  "PackageID": PackageID,
  "ContentID": ContentID,
  "AssignmentID": AssignmentID,
  "DSLPath": DSLPath,
  "RFWTitle": RFWTitle,
  "SolutionEngineer": SolutionEngineer,
  "ETCDate": ETCDate,
  "PilotDeploymentStatus": PilotDeploymentStatus,
  "PilotDeploymentStatusComment": PilotDeploymentStatusComment,
  "PilotDeploymentStatusUpdate": PilotDeploymentStatusUpdate,
  "QADeploymentStatus": QADeploymentStatus,
  "QADeploymentStatusComment": QADeploymentStatusComment,
  "QADeploymentStatusUpdate": QADeploymentStatusUpdate,
  "Action": Action,
  "StoppingRunbook": StoppingRunbook,
  "phone": phone,
  "location": location,
  "Keywords": Keywords,
  "SkipSignOff": SkipSignOff,
  "u_fms_number": u_fms_number,
  "project_name": project_name,
  "RequestedBy": RequestedBy,
  "Email": Email,
  "RequestManager": RequestManager,
  "TechnicalContact": TechnicalContact,
  "project_manager": project_manager,
  "project_manager_email": project_manager_email,
  "requested_by": requested_by,
  "assigned_to": assigned_to,
  "u_validated_by": u_validated_by,
  "InstallationType": InstallationType,
  "Platforms": Platforms,
  "Categories": Categories,
  "targetAreas": targetAreas


	
})  //pushing indormation to array

var path=req.body.Source,
buffer = new Buffer(JSON.stringify(insert));
console.log(path);
fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
		response={"output":"Inserted"}
		res.json(response)
        fs.close(fd, function() {
            console.log('file written');
			
        })
    });
});



/* fs.writeFile( "req.body.Source", JSON.stringify( insert ), "utf8", function(err)
{
	if(err)
	{
		console.log("error");
	}
 else{
response={"output":"Inserted"}
res.json(response)
}

}) */
	

	
})

module.exports = router;
