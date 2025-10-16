import { createButton } from "./dynamicImport1.js";
createButton("Hello",()=>{
    import ('./dynamicImport3.js')
    .then((object)=>{
        createButton("Strart",object.blink)
        createButton("End",object.end)  
    })
})

