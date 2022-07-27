# PRUEBA TÉCNICA - CODIGO MORSE

Prueba técnica que tiene como objetivo transformar código morse a cadenas bits, texto humano y viceversa, debe desarrollarse en tres niveles y puede ser desarrollado en cualquier lenguaje.

## NIVEL I 
Transformar una cadena de bits a código morse (nombre método: "String decodeBits2Morse(String bits); //Ejemplo Java")

Ejemplo

  *Entrada:*
  
    00000000110110110011100000111111000111111001111110000000111011111111011101110000000110001111110000011111100111111000000011000011011111111011101100000011011100000000000

  *Salida:*
  
    .... --- .-.. .- -- . .-.. ..

## NIVEL II 
Se desarrolla dos funciones:

 - Transformar mensaje en código morse a texto humano (nombre método: "String translate2Human(String messageMorse); // Ejemplo Java")
 
 Ejemplo:
 
    Entrada:
        .... --- .-.. .- -- . .-.. ..
        
    Salida:
    
        HOLA MELI

 - Transformar mensaje en texto humano a código morse (nombre método: "String translate2Morse(String messageHuman); // Ejemplo Java")
 
 Ejemplo:
    
    Entrada:
        
        HOLA MELI
    
    Salida:        
        .... --- .-.. .- -- . .-.. ..

***NOTA: Los métodos o funciones del nivel 1 como del nivel 2 deben controlar que los caracteres
ingresados en las entradas sean válidos.***


## NIVEL III:
 - Crear una API Rest exponiendo los recursos o servicios realizados
 - Pruebas unitarias, cobertura mayor al 80%.

# ENTREGABLES

● Código fuente en un repositorio (Ej: github, bitbucket, gitlab) de preferencia que sea privado.

● Instrucciones de cómo ejecutar el programa en README del repositorio.

● URL de la api e información complementaria.


# SOLUCIÓN!!!

## HERRAMIENTAS UTILIZADAS

Se realiza una breve descripción de la aplicación, lenguaje, librerías y IDE utilizados:

PROYECTO FUENTE
- prueba-morse

LENGUAJES
- Javascript

TECNOLOGIAS
- API Rest
- Testing

LIBRERIAS
- Node JS (Ultima Versión)
- Express JS (Ultima Versión)
- Mocha (Ultima Versión)
- Chai (Ultima Versión)
- Npm (Ultima Versión)
- Nodemon (Ultima Versión)

IDE
- Visual Studio Code
- Postman

## COMANDOS INSTALACIÓN

Clonado o descargado el proyecto, abrimos el proyecto en el IDE Visual Studio Code y luego en la opción "Terminal" del menú superior hacemos clic en la opción "nuevo Terminal", al abrí en la parte inferior y posicionados en ella ejecutaremos el siguiente comando, que instalara las dependencias del proyecto: 

npm i

![image](https://user-images.githubusercontent.com/72896123/180824410-32cca578-ef75-47d3-9b3c-6211688bc0c2.png)


## COMANDOS EJECUCIÓN - LOCAL

Se informa sobre los comandos para compilar y ejecutar el proyecto en ambiente local:

1. Digite el comando: npm run dev

![image](https://user-images.githubusercontent.com/72896123/180830147-e7536de1-c8db-44db-8bd1-19fce1fe0085.png)

2. Se debe visualizar el correcto funcionamiento del servidor iniciado

![image](https://user-images.githubusercontent.com/72896123/180830461-9e0c9811-a0d4-45f9-83f5-cdf1761e7d19.png)

3. Digite el comando: npm run test

![image](https://user-images.githubusercontent.com/72896123/180832580-b76aefd1-3448-4f50-847f-f6206b16909c.png)

4. Se debe visualizar el correcto funcionamiento del servidor iniciado

![image](https://user-images.githubusercontent.com/72896123/181274733-5a5ce81c-55c1-406e-8c17-890a67e185d7.png)
![image](https://user-images.githubusercontent.com/72896123/181274973-4e7cf4a1-ab06-450d-b268-b82a55fe69f0.png)

5. Si deseamos ejecutarlo a nivel local mediante Curls, estos son los comandos:

curl -X 'POST' "http://localhost:3000/translate/decodeBits" -H 'accept:application/json' -H 'Content-Type:application/json' -d '{"text":"000000001101101100111000001111110001111110011111100000001110111111110111011100000001100011111100000111111001111110000000110000110111111110111011100000011011100000000000"}'

curl -X 'POST' "http://localhost:3000/translate/2human" -H 'accept:application/json' -H 'Content-Type:application/json' -d '{"text":".... --- .-.. .-  -- . .-.. .."}'

curl -X 'POST' "http://localhost:3000/translate/2morse" -H 'accept:application/json' -H 'Content-Type:application/json' -d '{"text":"HOLA MELI"}'

![image](https://user-images.githubusercontent.com/72896123/181279410-3243f83f-5c1c-4c01-ac5f-a5130d0cc755.png)
