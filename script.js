let fs = require('fs');

fs.writeFile('app-q.js','console.log("Criado pelo Node")',function(erro){
                                                          if(erro){ throw "Erro!"}

                                                          console.log("Tudo certo na criação!")
});

fs.rename('app-q.js','nw-app.js',function(nwerro){
                                 if(nwerro){ throw nwerro}

                                 console.log("Arquivo renomeado!!")
})

