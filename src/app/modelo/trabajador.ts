import { Cargo } from "./cargo";
import { Cdcs } from "./cdcs";
import { Clua } from "./clua";
import { Generotype } from "./generotype";
import { Municipio } from "./municipio";
import { Region } from "./region";
import { Sector } from "./sector";
import { Trabajadortype } from "./trabajadortype";

export class Trabajador {

  id: string;
  nombreTrabajador: String;
  apellidopaTrabajador: String;
  apellidomaTrabajador: String;
  generoTrabajador: Generotype;
  fechanaTrabajador: Date;
  estadoCivilTrabajador: String;
  telcelularTrabajador: String;
  claveElectorTrabajador: String;
  codigoPostalTrabajador: String;
  calleTrabajador: String;
  numeroCalle: String;
  municipioTrabajador: Municipio;
  coloniaTrabajador: String;
  telcasaTrabajador: String;
  seccionTrabajador: String;
  localidadTrabajador: String;
  tipoSanguineoTrabajador: String;
  correoElectronicoTrabajador: String;
  instagramTrabajador: String;
  facebookTrabajador: String;
  twitterTrabajador: String;
  folioTrabajador: String;

  regionTrabajador: Region;
  sectorTrabajador: Sector;
  cdcTrabajador: Cdcs;
  cargoTrabajador: Cargo;
  cluaTrabajador: Clua;

  tipoTrabajador: Trabajadortype;
  eliminarTrabajador: boolean;
  urlimagenTrabajador: String;
  hasactanacimiento:boolean;
  hascomprobante:boolean;
  hascurp:boolean;
  hasine:boolean;
  anioclua:string;
  idclua:string;


}
