
(function() {

   class Avenger {

        constructor( public nombre: string,
                     public equipo: string,
                     public nombreReal: string,
                     public puedePelear?: boolean,
                     public peleasGanadas: number = 0 ) {}

   }

   const antman = new Avenger('Antman', 'equipo X', 'desconocido');

   console.log(antman);

})();

  // Otra forma menos eficiente de hacerlo:

    //class Avenger {
    // nombre: string = 'Sin nombre';
    // equipo: string = 'Capi';
    // nombreReal: string = 'Scott';
    
    // puedePelear: boolean = true;
    // peleasGanadas: number;

    // constructor( nombre: string, equipo: string, nombreReal: string){
    // this.nombre = nombre;
    // this.equipo = equipo;
    // this.nombreReal = nombreReal;
    // }
    //}
