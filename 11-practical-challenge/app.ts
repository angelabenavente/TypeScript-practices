(()=>{

  // 1.) Uso de Let y Const

  // var nombre = 'Ricardo Tapia';
  // var edad = 23;

  // var PERSONAJE = {
  //   nombre: nombre,
  //   edad: edad
  // };

  let nombre: string = 'Ricardo Tapia';
  let edad: number = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad: edad
  };

  // A partir de Es6 puede ser: const PERSONAJE = { nombre, edad };


  //-------------------------------------------------------


  // 2.) Cree una interfaz que sirva para validar el siguiente objeto

  // var batman = {
  //   nombre: 'Bruno Díaz',
  //   artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  // }

  interface SuperHero {
    nombre: string;
    artesMarciales: string[];
  }

  var batman: SuperHero = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }


  //------------------------------------------------------


  // 3.) Convertir esta funcion a una funcion de flecha

  // function resultadoDoble( a, b ){
  //   return (a + b) * 2
  // }

  const resultadoDoble = ( a:number, b:number ): number => (a + b) * 2;

  
  //---------------------------------------------------


  // 4.) Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'

  // function getAvenger( nombre, poder, arma ){
  //   var mensaje;
  //   if( poder ){
  //     mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
  //   }else{
  //     mensaje = nombre + ' tiene un ' + poder
  //   }
  // };

  function getAvenger( nombre: string,
                       poder?: string,
                       arma: string = 'arco' ){
    let mensaje;

    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }

  };


  //---------------------------------------------------------

  // 5.) Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {

    constructor( public base: number,
                 public altura: number ) {}

    calcularArea = ():number => this.base * this.altura;

  }

})();