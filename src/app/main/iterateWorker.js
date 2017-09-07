var result=0,i,j;

for(i=0;i<100000;i++){
	for(j=0;j<1000;j++){

		            result+=Math.floor((Math.random() * 10));
		    
   }

}

postMessage(result);
