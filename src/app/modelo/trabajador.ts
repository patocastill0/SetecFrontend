import { Persona } from "./persona";

export class Trabajador extends Persona {

  idtrabajador: string;
  sector: string;
  cargo : string;
  region : string;
  clua : string;
  cdc : number;
  folio: string;
  hasactanacimiento:boolean;
  hascomprobante:boolean;
  hascurp:boolean;
  hasine:boolean;
  anioclua:string;
  idclua:string;
}
