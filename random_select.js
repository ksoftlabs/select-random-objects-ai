// Thank You DBLjan (https://forums.adobe.com/people/DBLjan) for implementing indexOf for arrays.
// Found at https://forums.adobe.com/message/9527941
Array.prototype.indexOf = function ( item ) {  
    var index = 0, length = this.length;  
    for ( ; index < length; index++ ) {  
              if ( this[index] === item )  
                        return index;  
    }  
    return -1;  
    };  

// 
var selectedItems=app.activeDocument.selection;
var percentage=parseInt(prompt("Enter percentage to select without % mark eg : 25",""));
var minNumberToSelect= Math.ceil(selectedItems.length*percentage/100);
var selectedItemsArray= new Array();


if(selectedItems.length>0){
    while(selectedItemsArray.length<minNumberToSelect+1){
        var r = Math.floor(Math.random()*selectedItems.length)+1;
       
            if(selectedItemsArray.indexOf(r) == -1) {
                selectedItemsArray.push(r);
            }
        
    }

    for(i=0;i<selectedItems.length;i++){
        if(selectedItemsArray.indexOf(i) == -1) selectedItems[i].selected=false;
    }

    alert("Done!")


 }else{
     alert("Please select");
}

