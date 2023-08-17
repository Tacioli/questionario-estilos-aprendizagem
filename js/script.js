// JavaScript Document
// este arquivo contas as caixinhas marcadas, de acordo com cada estilo de aprendizagem
//CHK é uma lista com 4 itens. chkbi´s são as tags de cada checkbox
 var i, CHK,pragmatico,ativo,reflexivo,teorico;
	  CHK = {
         	"Pragm" :[chkb1,chkb8, chkb12, chkb14,chkb22,chkb24,chkb30,chkb38,chkb40,chkb47,chkb52,chkb53,chkb56,chkb57,chkb59,chkb62,chkb68,chkb72,chkb73,chkb76],
         	"Teori" :[chkb2,chkb4,chkb6,chkb11,chkb15, chkb17,chkb21,chkb23,chkb25,chkb29,chkb33,chkb45,chkb50,chkb54,chkb60,chkb64,chkb66,chkb71,chkb78,chkb80],
         	"Refle" :[chkb10,chkb16,chkb18,chkb19,chkb28, chkb31,chkb32,chkb34,chkb36,chkb39,chkb42,chkb44,chkb49,chkb55,chkb58,chkb63,chkb65,chkb69,chkb70,chkb79],
         	"Ativo" :[chkb3,chkb5,chkb7,chkb9,chkb13, chkb20,chkb26,chkb27,chkb35,chkb37,chkb41,chkb43,chkb46,chkb48,chkb51,chkb61,chkb67,chkb74,chkb75,chkb77]
        	};
      function EstiloPredominante()
      	{
      		pragmatico = 0
    	    ativo = 0
    		reflexivo = 0
    		teorico = 0
    		document.getElementById("prag").innerHTML = "Pragmático: "+pragmatico;
    		document.getElementById("teor").innerHTML =  "Teórico: "+teorico;
    		document.getElementById("refl").innerHTML =  "Reflexivo: "+reflexivo;
    		document.getElementById("ativ").innerHTML =  "Ativo: "+ativo;
    		for (i in CHK.Pragm)
    			{
     				if (CHK.Pragm[i].checked == true)//conta apenas os checkbox pragmáticos
	  					{
	 						pragmatico=pragmatico+1
      						document.getElementById("prag").innerHTML = "Pragmático: "+pragmatico;
      					}
    			}
     		for (i in CHK.Teori)
    			{
     				if (CHK.Teori[i].checked == true)
	  					{
	 						teorico=teorico+1
      						document.getElementById("teor").innerHTML =  "Teórico: "+teorico;
      					}
    			}
    		for (i in CHK.Refle)
    			{
     				if (CHK.Refle[i].checked == true)
	  					{
	 						reflexivo=reflexivo+1
      						document.getElementById("refl").innerHTML =  "Reflexivo: "+reflexivo;
      					}
    			}
    		for (i in CHK.Ativo)
    			{
     				if (CHK.Ativo[i].checked == true)
	  					{
	 						ativo=ativo+1
      						document.getElementById("ativ").innerHTML =  "Ativo: "+ativo;
      					}
    			}
 		}
 	  function NovoEstilo()//desmarca todos os checkbox
      	{
      		for (i in CHK.Pragm)
    			{
     				CHK.Pragm[i].checked = false
     			}
     		for (i in CHK.Teori)
    			{
     				CHK.Teori[i].checked = false
     			}
     		for (i in CHK.Refle)
    			{
     				CHK.Refle[i].checked = false
     			}
     		for (i in CHK.Ativo)
    			{
     				CHK.Ativo[i].checked = false
     			}
     		document.getElementById("prag").innerHTML =  "";
     		document.getElementById("teor").innerHTML =  "";
     		document.getElementById("refl").innerHTML =  "";
     		document.getElementById("ativ").innerHTML =  "";
     	}