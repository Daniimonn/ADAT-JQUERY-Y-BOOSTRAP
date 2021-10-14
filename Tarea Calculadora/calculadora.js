function suma(){
    $(function(){
        $("#sum").click(function(){
           let num1 = $("#num1").val();
           num1 = parseInt(num1);
           let num2 = $("#num2").val();
           num2 = parseInt(num2);
           let resultado = num1 + num2;
           $("#resultado").html("El resultado es: " + resultado);
        });
    })
}

function resta(){
    $(function(){
        $("#rest").click(function(){
           let num1 = $("#num1").val();
           num1 = parseInt(num1);
           let num2 = $("#num2").val();
           num2 = parseInt(num2);
           let resultado = num1 - num2;
           $("#resultado").html("El resultado es: " + resultado);
        });
    })
}

function multiplicacion(){
    $(function(){
        $("#multi").click(function(){
           let num1 = $("#num1").val();
           num1 = parseInt(num1);
           let num2 = $("#num2").val();
           num2 = parseInt(num2);
           let resultado = num1 * num2;
           $("#resultado").html("El resultado es: " + resultado);
        });
    })
}

function division(){
    $(function(){
        $("#divi").click(function(){
           let num1 = $("#num1").val();
           num1 = parseInt(num1);
           let num2 = $("#num2").val();
           num2 = parseInt(num2);
           let resultado = num1 / num2;
           $("#resultado").html("El resultado es: " + resultado);
        });
    })
}

function raiz(){
    $(function(){
        $("#raiz").click(function(){
           let num1 = $("#num1").val()
           num1 = parseInt(num1)
           let resultado = Math.sqrt(num1)
           $("#resultado").html("El resultado es: " + resultado)
        });
    })
}

function seno(){
    $(function(){
        $("#sen").click(function(){
           let num1 = $("#num1").val()
           num1 = parseInt(num1)
           let resultado = Math.sin(num1)
           $("#resultado").html("El resultado es: " + resultado)
        });
    })
}

function coseno(){
    $(function(){
        $("#cos").click(function(){
           let num1 = $("#num1").val()
           num1 = parseInt(num1)
           let resultado = Math.cos(num1)
           $("#resultado").html("El resultado es: " + resultado)
        });
    })
}

function tangente(){
    $(function(){
        $("#tan").click(function(){
           let num1 = $("#num1").val()
           num1 = parseInt(num1)
           let resultado = Math.tan(num1)
           $("#resultado").html("El resultado es: " + resultado)
        });
    })
}

function cotangente(){
    $(function(){
        $("#cotan").click(function(){
           let num1 = $("#num1").val()
           num1 = parseInt(num1)
           let resultado = 1 / Math.tan(num1)
           $("#resultado").html("El resultado es: " + resultado)
        });
    })
}