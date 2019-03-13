"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// netreba 'use-strict', lebo babel ho vzdy automaticky doplni

var TAX = 0.2; // konstanta
function getTax() {
    return TAX;
}

var SexyNum = function () {
    function SexyNum() {
        _classCallCheck(this, SexyNum);
    }

    _createClass(SexyNum, null, [{
        key: "multiMax",
        value: function multiMax(first) {
            for (var _len = arguments.length, theRest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                theRest[_key - 1] = arguments[_key];
            }

            // zisti ktore cislo je najvacsie, utriedi ich
            var sorted = theRest.sort(function (a, b) {
                return b > a;
            }),

            // maximalne cislo, z usporiadaneho pola bude prve, na nultej pozicii
            max = sorted[0];
            //console.log(first, max);
            return first * max;
        }
    }]);

    return SexyNum;
}();

// dedi od SexyNum


var sexyNumDva = function (_SexyNum) {
    _inherits(sexyNumDva, _SexyNum);

    function sexyNumDva() {
        _classCallCheck(this, sexyNumDva);

        return _possibleConstructorReturn(this, (sexyNumDva.__proto__ || Object.getPrototypeOf(sexyNumDva)).apply(this, arguments));
    }

    _createClass(sexyNumDva, null, [{
        key: "discount",

        // vyrata zlavu
        value: function discount(price) {
            var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            var tax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getTax();
            // default hodnota, moze byt aj vysledok funkcie
            price = price - price * percent / 100;
            price = price - price * tax;
            return price.toFixed(2); // zaokruhlenie na dve desatinne miesta
        }
    }]);

    return sexyNumDva;
}(SexyNum);

console.log(sexyNumDva.discount(100, 20)
//SexyNum.multiMax(1,2,16,3,5)
);