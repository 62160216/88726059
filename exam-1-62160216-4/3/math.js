function convert(){
    var x1 = document.getElementById("number").value;
    div = document.getElementById('disp')
    div.innerHTML = ''
    r1 = x1 / 1000;
    x1 = x1 % 1000;
    r2 = x1 / 500;
    x1 = x1 % 500;
    r3 = x1 / 100;
    x1 = x1 % 100;
    r4 = x1 / 50;
    x1 = x1 % 50;
    r5 = x1 / 20;
    x1 = x1 % 20;
    r6 = x1 / 10;
    x1 = x1 % 10;
    r7 = x1 / 5;
    x1 = x1 % 5;
    r8 = x1 / 2;
    x1 = x1 % 2;
    r9 = x1 / 1;
    x1 = x1 % 1;
    table = ``
    if(parseInt(r1) > 0){
        table += `<tr>
                 <td>แบงค์ 1000 : ${parseInt(r1)} ใบ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>แบงค์ 1000 : </td>         
             </tr>`
    }
    if(parseInt(r2) > 0){
        table += `<tr>
                 <td>แบงค์ 500 : ${parseInt(r2)} ใบ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>แบงค์ 500 : </td>         
             </tr>`
    }
    if(parseInt(r3) > 0){
        table += `<tr>
                 <td>แบงค์ 100 : ${parseInt(r3)} ใบ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>แบงค์ 100 : </td>         
             </tr>`
    }
    if(parseInt(r4) > 0){
        table += `<tr>
                 <td>แบงค์ 50 : ${parseInt(r4)} ใบ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>แบงค์ 50 : </td>         
             </tr>`
    }
    if(parseInt(r5) > 0){
        table += `<tr>
                 <td>แบงค์ 20 : ${parseInt(r5)} ใบ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>แบงค์ 20 : </td>         
             </tr>`
    }
    if(parseInt(r6) > 0){
        table += `<tr>
                 <td>เหรียญ 10 : ${parseInt(r6)} เหรียญ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>เหรียญ 10 : </td>         
             </tr>`
    }
    if(parseInt(r7) > 0){
        table += `<tr>
                 <td>เหรียญ 5 : ${parseInt(r7)} เหรียญ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>เหรียญ 5 : </td>         
             </tr>`
    }
    if(parseInt(r8) > 0){
        table += `<tr>
                 <td>เหรียญ 2 : ${parseInt(r8)} เหรียญ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>เหรียญ 2 : </td>         
             </tr>`
    }
    if(parseInt(r9) > 0){
        table += `<tr>
                 <td>เหรียญ 1 : ${parseInt(r9)} เหรียญ</td>         
             </tr>`
    }else{
        table += `<tr>
                 <td>เหรียญ 1 : </td>         
             </tr>`
    }
    div.innerHTML = table


}