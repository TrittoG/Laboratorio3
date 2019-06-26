var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var tipoLegislador;
    (function (tipoLegislador) {
        tipoLegislador[tipoLegislador["DIPUTADO"] = 0] = "DIPUTADO";
        tipoLegislador[tipoLegislador["SENADOR"] = 1] = "SENADOR";
    })(tipoLegislador || (tipoLegislador = {}));
    var Legislador = /** @class */ (function (_super) {
        __extends(Legislador, _super);
        function Legislador(nombre, apellido, sexo, edad, email, tipo, provincia) {
            var _this = _super.call(this, nombre, apellido, sexo, edad) || this;
            _this.email = email;
            _this.tipo = tipo;
            _this.provincia = provincia;
            return _this;
        }
        Object.defineProperty(Legislador.prototype, "Email", {
            get: function () {
                return this.email;
            },
            set: function (v) {
                this.email = v;
            },
            enumerable: true,
            configurable: true
        });
        return Legislador;
    }(Persona));
    Clases.Legislador = Legislador;
})(Clases || (Clases = {}));
