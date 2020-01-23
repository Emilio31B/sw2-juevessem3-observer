class Persona
{
    private static instance : Persona | null = null // Propiedad de clase
    nombre : string // Props de instancia
    edad : number // Props de instancia

    private constructor(){}

    static getInstance()
    {
        if (Persona.instance == null)
        {
            Persona.instance = new Persona()
        }
        return Persona.instance
    }
}

let mainSingleton = () => {
    
    let p3 = Persona.getInstance()
    let p4 = Persona.getInstance()
    p3.nombre = "Luisito"
    p4.nombre = "Claudita"


    console.log(`Nombre: ${p3.nombre}`)

}
mainSingleton()