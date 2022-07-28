import { Estudiante } from "./estudiante";

export class Asistencia {
    id!:number;
    fechaIngreso!:String;
    ingresoConfirmado!:boolean;
    salidaConfirmado!:boolean;
    estudiante!:Estudiante;
}
