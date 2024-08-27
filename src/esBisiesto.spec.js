import esBisiesto from "./esBisiesto.js"

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });

  it("El 5 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });

  it("Todos los años divisibles por 400 SON años bisiestos", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });

  it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos", () => {
    expect(esBisiesto(1700)).toEqual(false);
  });

  it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos", () => {
    expect(esBisiesto(2004)).toEqual(true);
  });

  it("Todos los años que no son divisibles por 4 NO son años bisiestos", () => {
    expect(esBisiesto(2017)).toEqual(false);
  });
});

