// let imges = [
//     'gime-1.jpg',
//     'gime-2.jpg',
//     'gime-3.jpg',
//     'gime-4.jpg',
//     'gime-5.jpg',
//     'gime-6.png'
// ];

// let img = document.getElementsByClassName("row");

//     for(i=0;i<imges.length;i++){
//         img.innerHtml+='<div><img src="'+imges[i]+'"></div>';
//     }
let logo=document.getElementsByClassName("logo");
let cliced = document.getElementsByClassName("clik");
let raed = new Audio('chimes.wav');
    var flg=true;
    var arr=[];
for( i=0; i<cliced.length; i++){
    cliced[i].addEventListener("click", function(){
        
        if(flg){
        this.firstChild.style.opacity="1";
        this.style.background="#282b2b";
            if(arr.length==0){
                arr[0]=this;
            }
            else if(arr.length==1){
                arr[1]=this;
            }
            if(arr.length==2){
                flg=false;
            }
        }
        if(arr[0].getAttribute("class")==arr[1].getAttribute("class")){
            raed.play();

            
        } else {
            arr[0].firstChild.style.opacity="0";
            arr[1].firstChild.style.opacity="0";
            arr[0].style.background="#a4b6b6";
            arr[1].style.background="#a4b6b6";
            raed.play();
            
        
        }
        flg=true;
    arr=[];
        
    })
    

    










}

    

