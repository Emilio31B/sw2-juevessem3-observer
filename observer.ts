abstract class AlumnoIS2 {
    abstract recibirNotificacion();
}

class Maximo extends AlumnoIS2 {
    recibirNotificacion() {
        console.log("apunta en un papelito");
    }

}

class Javier extends AlumnoIS2 {
    recibirNotificacion() {
        console.log("Apunta en bloc de notas");
    }
}


class Alexander extends AlumnoIS2 {
    recibirNotificacion() {
        console.log("Se lo memoriza");

    }

}

class Profesor {
    alumnnos : AlumnoIS2[] | null = null;
    addObserver(obs : AlumnoIS2){
        if(this.alumnnos == null){
            this.alumnnos = [];
        }
        this.alumnnos.push(obs);
    }
    tocarCabeza(){
        if (this.alumnnos != null){
            for(let i=0;i<this.alumnnos.length;i++){
                let alu : AlumnoIS2 = this.alumnnos[i];
                alu.recibirNotificacion();
            }
        }
    }
}

let mainObserver = () => {
    //1. Definir observador del observado
    let prof = new Profesor();
    let m = new Maximo();
    let j = new Javier();
    let a = new Alexander();

    prof.addObserver(m);
    prof.addObserver(j);
    prof.addObserver(a);


    //2. Suceda el evento
    prof.tocarCabeza();
};
mainObserver();






















