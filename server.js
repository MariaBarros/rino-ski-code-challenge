const path = require('path');
const fs = require('fs');

let getContentType = function(resource){
	let contentType = 'text/html';		      	
	if(resource.indexOf('.css') > -1){
		contentType = 'text/css';
	}else{
	    if(resource.indexOf('.png') > -1){
			contentType = 'image/png';
		}else{
		   	if(resource.indexOf('.jpg') > -1){
				contentType = 'image/jpg';
			}else{
			   	if(resource.indexOf('.ico') > -1){
				    contentType = 'image/x-icon';
				}
			}
		}
	}
	return contentType;
}

const serverPath = function(req,res){		
	if (path.normalize(req.url) === path.normalize('/')) {
		let resource = path.resolve(__dirname,`index.html`);
		fs.readFile(resource, function(err,data){
		    if(!err && data){		     	
		        res.writeHead(200,	{"Content-Type" : "text/html"});
		        res.end(data);
		    }else{		      	
		      	res.writeHead(404, { 'Content-Type': 'text/plain' });
	    		res.end(`this page: ${resource} doesn't exist`);		        
		    }
		});		
	}else{
		let resource = path.resolve(__dirname,`.${req.url}`);   			
		fs.readFile(resource, function(err,data){
			if(!err && data){
			  	let contentType = getContentType(resource)
			    res.writeHead(200,	{"Content-Type" : contentType});
			    res.end(data);
			}else{		      	
			   	res.writeHead(404, { 'Content-Type': 'text/plain' });
	    		res.end(`this page: ${resource} doesn't exist`);		        
			}
		}); 
	}
};

module.exports = serverPath;