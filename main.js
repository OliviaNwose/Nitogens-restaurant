
// Vue.createApp({
//     data() {
//       return {
//         message: 'Hello Vue!'
//       }
//     }
//   }).mount('#app')

// OUR FRAMEWORK (RAMEWORK)

//   let ramework = {
//       name: "vue Framework",
//       displayContent: function ({app, content}){
//           let entrypoint = document.getElementById(app);
//           entrypoint.textContent = content;
//       },
//   };

//    ramework.displayContent({
//        app:"app",
//        content:"Our Vue Ramework",
//    });




   Vue.createApp({
       data(){
           return {
               name : "Vue Ramework I",
               subscribeText:'Subscribe.......!',
               count: 0,
           }
       }
    //    MOUNTING OUR APP IN OUR HTML USING AN ENTRY POINT (ID = "UPDATES")
   }).mount('#updates');





   count = 0;

   let increase = document.getElementById('increase');
   increase.addEventListener('click', function increament(){
       count++
       displayCount.textContent = `Count is : ${count} `  ;
   });




   let decrease= document.getElementById('decrease');
   decrease.addEventListener('click', function decreament(){
       count--
       displayCount.textContent = `Count is : ${count} ` ;
   });



   