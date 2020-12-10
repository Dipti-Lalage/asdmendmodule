var http=require("http");
var c=require("./circle");
var fs=require("fs");
var qstring=require("querystring");
var url=require("url");
function process_request(req,resp)
{
	 const p=url.parse(req.url);
	 switch(p.pathname)
	 {
		 case "/":
		       fs.readFile("circleform.html",function(err,data){
				   if(err)
				   {
					    console.log("error");
						resp.end("error");
				   }
				   else
				   {
					    resp.end(data);
				   }
			   });
		 break;
		 case "/calc" :
		              var d=qstring.parse(p.query);
					  switch(d.btn)
					  {
						  case "display" :var ans=c.calcArea(d.rad);
						                 resp.write("Area of circle is: "+ans);	
						                  var ans1=c.calcCircumference(d.rad);
							        resp.end("\nCircumference of circle is :"+ans1);
                            break;	
					  }
	 }
}


var srv=http.createServer(process_request);
srv.listen(8181);
console.log("server running on port 8181");