let calculator = {
  read: function(a, b) {
    this.num1 = a;
    this.num2 = b
  },
  sum: function(num1, num2) {
    return this.num1 + this.num2
  },
  mul: function(num1, num2) {
    return this.num1 * this.num2
  }


};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

