import zim from "https://zimjs.org/cdn/016/zim";
const{Frame,Rectangle,Circle,Label,Slider} = zim;
const frame = new Frame(FIT,1920,1080,"#e6f4f7");

frame.on("ready",()=>{
       //assets
       const bg = new Pic("assets/images/bg .png").center();
       const brightPicture = new Pic("assets/images/light.png").pos(1660,850).alp(0);
       const fan = new Pic("assets/images/fan.png").centerReg().pos(1330,600);
       //heading
       const header_rect = new Rectangle({width:W, height:120, color:"#ff7878"}).center().pos(0,0);
       const header_label = new Label (
         {
            text:"সৌরশক্তির ব্যাবহার",
            size:40,
         }
       ).center(header_rect).sca(1);

       const powerBtn = new Button({
         label: "",
         width: 85,
         height: 85,
         backgroundColor: "transparent",
         borderWidth: 0,
         corner: 40,
         rollBackgroundColor:"transparent",
         
  
      }).center().pos(1080,353);
  
      const toggolebutton = new Pic("assets/images/switch.png").center(powerBtn);


   //place slider...
   //slider for control..
   const button_slider = new Button({
       label: "",
       width: 75,
       height: 75,
       backgroundColor: "#2c67f2",
       borderWidth: 0,
       corner: 35
   }).sca(.4);
   const slider = new Slider({ 
       min:0,
       max:10,
       step: 1,
       currentValue: 0,
       button: button_slider,
       barColor:"",
   })
   .center()
   .pos(589,989).alp(1)
   .change(() => {
      zog(slider.currentValue); // 0-10 in steps of 1
   });
  
  

   //function
   let toggle = false;
   function startFan(){
     Ticker.add(()=>{
       fan.rotation += 10;
       if(fan.rotation >=360){
         fan.rotation = 0;
       }
     })
   };
 
   function stopFan(){
     Ticker.add(()=>{
       fan.rotation -= 10;
     })
   }
   
 
   powerBtn.on("click",()=>{
     toggle = !toggle;
     if(toggle){
       brightPicture.alp(1);
       startFan();
     }
     else{
       brightPicture.alp(0);
       stopFan();
     }
   })


  



   
})