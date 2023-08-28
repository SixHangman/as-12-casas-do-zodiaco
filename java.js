
        function MudaDesenho(){
            const texto = document.querySelector("h1");
            const imagem = document.querySelector("img");
            const valor = document.querySelector('#valor').value;
            
            if(valor=="gemeos"){
                texto.innerHTML = "Saga";
                imagem.setAttribute("src","img/gemeos.png");
                imagem.setAttribute("width","300px");
            }

            else if(valor=="escorpiao"){
                texto.innerHTML = "Milo";
                imagem.setAttribute("src","img/escorpiao.png");
                imagem.setAttribute("width","300px");
            }
            
            else if(valor=="peixes"){
                texto.innerHTML = "Afrodite";
                imagem.setAttribute("src","img/peixes.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="touro"){
                texto.innerHTML = "Aldebaran";
                imagem.setAttribute("src","img/touro.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="cancer"){
                texto.innerHTML = "Máscara da Morte";
                imagem.setAttribute("src","img/cancer.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="leao"){
                texto.innerHTML = "Aiolia";
                imagem.setAttribute("src","img/leao.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="virgem"){
                texto.innerHTML = "Shaka";
                imagem.setAttribute("src","img/virgem.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="libra"){
                texto.innerHTML = "Dohko";
                imagem.setAttribute("src","img/libra.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="sagitario"){
                texto.innerHTML = "Aiolos";
                imagem.setAttribute("src","img/sagitario.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="aries"){
                texto.innerHTML = "Mu";
                imagem.setAttribute("src","img/aries.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="capricornio"){
                texto.innerHTML = "El Cid";
                imagem.setAttribute("src","img/capricornio.png");
                imagem.setAttribute("width","300px");
            }
            else if(valor=="aquario"){
                texto.innerHTML = "Camus";
                imagem.setAttribute("src","img/aquario.png");
                imagem.setAttribute("width","300px");
            }
            else{
                texto.innerHTML = "Cavaleiro não encontrado... =(";
                imagem.setAttribute("src","img/x.webp");
                imagem.setAttribute("width","250px");
            }
        }