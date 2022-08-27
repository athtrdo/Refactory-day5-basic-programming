const ganjil = () => {

    let strGanjil = "";
    for( let i = 1; i <= 100; i++){
        if(i %2 === 1){
            strGanjil += i + " ";
        }
        
    }
    console.log(strGanjil);
}

ganjil();