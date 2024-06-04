import zim from "https://zimjs.org/cdn/016/zim";
const{Frame,Rectangle,Circle,Label,Slider} = zim;
const frame = new Frame(FIT,1920,1080,"#e6f4f7");

frame.on("ready",()=>{
       //assets
       const bg = new Pic("assets/images/bg .png").center();
       const brightPicture = new Pic("assets/images/light.png").pos(1660,850).alp(0);
       const fan = new Pic("assets/images/fan.png").centerReg().pos(1290,600);
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
         
  
      }).center().pos(1742,270);
  
      const toggolebutton = new Pic("assets/images/switch.png").center(powerBtn);


   //place slider...
   //slider for control..
   const button_slider = new Button({
       label: "",
       width: 60,
       height: 60,
       backgroundColor: "red",
       borderWidth: 0,
       corner: 35
   }).sca(.4);
   const slider_1 = new Slider({ 
       min:0,
       max:10,
       step: 1,
       currentValue: 0,
       button: button_slider,
       barColor:"trasparent",

   })
   .center()
   .pos(610,1002).alp(1).sca(.8)
  
  

      powerBtn.on("click",()=>{
         fan.animate({
            props:{rotation:-360},
            loop:true,
            time:.9,
            ease:"linear",
            
         })
         brightPicture.alp(1);


      })



   
})