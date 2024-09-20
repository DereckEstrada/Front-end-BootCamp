export class StockModel {
    stockId?:             number;
    empresaId?:           number;
    empresaDescripcion?:  string;
    sucursalId?:          number;
    sucursalDescripcion?: string;
    bodegaId?:            number;
    bodegaDescripcion?:   string;
    prodId?:              number;
    prodDescripcion?:     string;
    cantidadStock?:       number;
    estadoId?:            number;
    estadoDescripcion?:   string;
    fechaHoraReg?:        Date;
    usuIdReg?:            number;
    usuRegName?:          string;
}