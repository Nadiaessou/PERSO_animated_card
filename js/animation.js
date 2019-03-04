        var enveloppe_top = document.getElementById("env_top");
        var env_entier = document.getElementById("env_entier");
        var carte = document.getElementById("carte");
        var carteDos = document.getElementById("carte_dos");
        var retourner = document.getElementById("retourner");
        var ouvrir = document.getElementById("ouvrir");
        var tourne = document.getElementById("tourne");
        var destinataire = document.querySelector(".destinataire");

        ouvrir.onclick = function(){
            enveloppe_top.classList.add('env_open');
            carte.classList.add('carte_show');
            ouvrir.style.display= "none";
            setTimeout(function(){
                tourne.style.zIndex = "1";
                retourner.style.display = "block";
            }, 2000);
            setTimeout(function(){
                retourner.style.opacity = "1";
            }, 3500);
        }

        enveloppe_top.onclick = function(){
            enveloppe_top.classList.add('env_open');
            carte.classList.add('carte_show');
            ouvrir.style.display= "none";
            setTimeout(function(){
                tourne.style.zIndex = "1";
                retourner.style.display = "block";
            }, 2000);
            setTimeout(function(){
                retourner.style.opacity = "1";
            }, 3500);
        }

        retourner.onclick = function(){
            tourne.classList.add('tourne_anim');
            // env_entier.style.opacity = "0";
            // enveloppe_top.style.opacity = "0";
            setTimeout(function(){
                destinataire.style.display = "block";
            }, 800);
            setTimeout(function(){
                destinataire.style.opacity = "1";
                retourner.style.opacity = "0";
            }, 900);
        }
