var fs=require('fs');
var DepJob=require('../../models/deploymentJob')
var getConfData = function (data,arr,count) {
	
	for(i=0;i<data.length;i++)
	{
	var json={
		
		"ApplicationName":data[i].ApplicationName,
		"StartDateTime":data[i].StartDateTime,
		"EndDateTime":data[i].EndDateTime
		
			}
		arr.push(json);//Pushing 'json' data to arr array variable
		count++; //counting number of records from the output		
	}
	c=count;
};



exports.getConfData = getConfData;