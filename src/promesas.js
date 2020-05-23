const promesa = new Promise ((resolve, reject)=>{
    setTimeout (()=>{
        const exito=true;
        if(exito){
            resolve();
        }
        else{
            reject();
        }
    }, 4000);
});

promesa.then(()=>{
    alert("Tuvo exito");
})
promesa.catch(()=>{
    alert("No tuvo exito");
})

