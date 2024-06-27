let string=""

let keys=document.querySelectorAll(".dig")
let key=Array.from(keys)

key.forEach((ky)=>{
  ky.addEventListener("click",(e)=>{
    
    string= string +e.target.innerText
    display.innerText=string
}
)
  
})
let opr=document.querySelectorAll(".op")
let op=Array.from(opr)
op.forEach((ki)=>{
  ki.addEventListener("click",(u)=>{
    string=string+u.target.innerText
    display.innerText=string
  })
})

let display=document.querySelector(".disp")



let equal=document.querySelector(".equ")
equal.addEventListener("click",()=>{
   
 try {
   
   let result =eval(string)
   display.innerText = result
   string = result
 } catch (e) {
   display.innerText = "oops!!"
 }
  
  
  
})
let del=document.querySelector(".del")
del.addEventListener("click",()=>{
  
  string=string.substring(0,string.length-1)
  display.innerText=string
}) 
let ac=document.querySelector(".ac")
ac.addEventListener("click",()=>{
  display.innerText="0"
  string=""
})



let per=document.querySelector(".per")
per.addEventListener("click",()=>{
  
 
}) 
let aud= new Audio("Click2.mp3")
let sound=document.querySelectorAll(".btn")
let sou= Array.from(sound)
sou.forEach((k)=>{
  k.addEventListener("click",()=>{
   aud.play()
  })
})