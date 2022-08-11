const numericConverter = function (decimalNumber) {
  return {
    binary: Math.abs(decimalNumber).toString(2),
    octal: Math.abs(decimalNumber).toString(8),
    hexa: Math.abs(decimalNumber).toString(16),
  };
};
export default numericConverter;
