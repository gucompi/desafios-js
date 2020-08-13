/*
    La siguiente tabla muestra la cotizacion de AAPL 
    en lo que va del año. 






fecha	cierre
2020-08-12	452.04001
2020-08-11	437.50000
2020-08-10	450.91000
2020-08-07	444.45001
2020-08-06	455.60999
2020-08-05	440.25000
2020-08-04	438.66000
2020-08-03	435.75000
2020-07-31	425.04001
2020-07-30	384.76001
2020-07-29	380.16000
2020-07-28	373.01001
2020-07-27	379.23999
2020-07-24	370.45999
2020-07-23	371.38000
2020-07-22	389.09000
2020-07-21	388.00000
2020-07-20	393.42999
2020-07-17	385.31000
2020-07-16	386.09000
2020-07-15	390.89999
2020-07-14	388.23001
2020-07-13	381.91000
2020-07-10	383.67999
2020-07-09	382.73001
2020-07-08	381.37000
2020-07-07	372.69000
2020-07-06	373.85001
2020-07-03	364.10999
2020-07-02	364.10999
2020-07-01	364.10999
2020-06-30	364.79999
2020-06-29	361.78000
2020-06-26	353.63000
2020-06-25	364.84000
2020-06-24	360.06000
2020-06-23	366.53000
2020-06-22	358.87000
2020-06-19	349.72000
2020-06-18	351.73001
2020-06-17	351.59000
2020-06-16	352.07999
2020-06-15	342.98999
2020-06-12	338.79999
2020-06-11	335.89999
2020-06-10	352.84000
2020-06-09	343.98999
2020-06-08	333.45999
2020-06-05	331.50000
2020-06-04	322.32001
2020-06-03	325.12000
2020-06-02	323.34000
2020-06-01	321.85001
2020-05-29	317.94000
2020-05-28	318.25000
2020-05-27	318.10999
2020-05-26	316.73001
2020-05-22	318.89001
2020-05-21	316.85001
2020-05-20	319.23001
2020-05-19	313.14001
2020-05-18	314.95999
2020-05-15	307.70999
2020-05-14	309.54001
2020-05-13	307.64999
2020-05-12	311.41000
2020-05-11	315.01001
2020-05-08	310.13000
2020-05-07	303.73999
2020-05-06	300.63000
2020-05-05	297.56000
2020-05-04	293.16000
2020-05-01	289.07001
2020-04-30	293.79999
2020-04-29	287.73001
2020-04-28	278.57999
2020-04-27	283.17001
2020-04-24	282.97000
2020-04-23	275.03000
2020-04-22	276.10001
2020-04-21	268.37000
2020-04-20	276.92999
2020-04-17	282.79999
2020-04-16	286.69000
2020-04-15	284.42999
2020-04-14	287.04999
2020-04-13	273.25000
2020-04-09	267.98999
2020-04-08	266.07001
2020-04-07	259.42999
2020-04-06	262.47000
2020-04-03	241.41000
2020-04-02	244.92999
2020-04-01	240.91000
2020-03-31	254.28999
2020-03-30	254.81000
2020-03-27	247.74001
2020-03-26	258.44000
2020-03-25	245.52000
2020-03-24	246.88000
2020-03-23	224.37000
2020-03-20	229.24001
2020-03-19	244.78000
2020-03-18	246.67000
2020-03-17	252.86000
2020-03-16	242.21001
2020-03-13	277.97000
2020-03-12	248.23000
2020-03-11	275.42999
2020-03-10	285.34000
2020-03-09	266.17001
2020-03-06	288.95001
2020-03-05	292.92001
2020-03-04	302.73999
2020-03-03	289.32001
2020-03-02	298.81000
2020-02-28	273.35999
2020-02-27	273.51999
2020-02-26	292.64999
2020-02-25	288.07999
2020-02-24	298.17999
2020-02-21	313.39001
2020-02-20	320.29999
2020-02-19	323.59000
2020-02-18	319.00000
2020-02-17	324.95001
2020-02-14	324.95001
2020-02-13	324.85999
2020-02-12	327.20001
2020-02-11	319.60999
2020-02-10	321.54999
2020-02-07	320.03000
2020-02-06	325.20999
2020-02-05	321.45001
2020-02-04	318.85001
2020-02-03	308.66000
2020-01-31	309.51001
2020-01-30	323.87000
2020-01-29	324.34000
2020-01-28	317.69000
2020-01-27	309.16000
2020-01-24	318.31000
2020-01-23	319.10001
2020-01-22	317.76001
2020-01-21	316.57001
2020-01-20	318.73001
2020-01-17	318.73001
2020-01-16	315.23999
2020-01-15	311.34000
2020-01-14	312.63000
2020-01-13	316.95999
2020-01-10	309.94000
2020-01-09	309.48999
2020-01-08	303.19000
2020-01-07	298.39001
2020-01-06	299.79999
2020-01-03	297.51001
2020-01-02	300.35001





1) Crear un algoritmo que detecte: 
    a) Valor minimo
    b) Valor maximo
    c) Valor promedio.

2) Estos Algoritmos deben poder funcionar con cualquier set de cotizaciones de cualquier empresa.






*/


//Creo el arreglo de cotizaciones:
let cotizaciones = [
    452.04001,
437.50000,
450.91000,
444.45001,
455.60999,
440.25000,
438.66000,
435.75000,
425.04001,
384.76001,
380.16000,
373.01001,
379.23999,
370.45999,
371.38000,
389.09000,
388.00000,
393.42999,
385.31000,
386.09000,
390.89999,
388.23001,
381.91000,
383.67999,
382.73001,
381.37000,
372.69000,
373.85001,
364.10999,
364.10999,
364.10999,
364.79999,
361.78000,
353.63000,
364.84000,
360.06000,
366.53000,
358.87000,
349.72000,
351.73001,
351.59000,
352.07999,
342.98999,
338.79999,
335.89999,
352.84000,
343.98999,
333.45999,
331.50000,
322.32001,
325.12000,
323.34000,
321.85001,
317.94000,
318.25000,
318.10999,
316.73001,
318.89001,
316.85001,
319.23001,
313.14001,
314.95999,
307.70999,
309.54001,
307.64999,
311.41000,
315.01001,
310.13000,
303.73999,
300.63000,
297.56000,
293.16000,
289.07001,
293.79999,
287.73001,
278.57999,
283.17001,
282.97000,
275.03000,
276.10001,
268.37000,
276.92999,
282.79999,
286.69000,
284.42999,
287.04999,
273.25000,
267.98999,
266.07001,
259.42999,
262.47000,
241.41000,
244.92999,
240.91000,
254.28999,
254.81000,
247.74001,
258.44000,
245.52000,
246.88000,
224.37000,
229.24001,
244.78000,
246.67000,
252.86000,
242.21001,
277.97000,
248.23000,
275.42999,
285.34000,
266.17001,
288.95001,
292.92001,
302.73999,
289.32001,
298.81000,
273.35999,
273.51999,
292.64999,
288.07999,
298.17999,
313.39001,
320.29999,
323.59000,
319.00000,
324.95001,
324.95001,
324.85999,
327.20001,
319.60999,
321.54999,
320.03000,
325.20999,
321.45001,
318.85001,
308.66000,
309.51001,
323.87000,
324.34000,
317.69000,
309.16000,
318.31000,
319.10001,
317.76001,
316.57001,
318.73001,
318.73001,
315.23999,
311.34000,
312.63000,
316.95999,
309.94000,
309.48999,
303.19000,
298.39001,
299.79999,
297.51001,
300.35001
]


function arrayMin(arr) {
    let len = arr.length;
    //LO inicializo en infinito, o en 999999999999999 es lo mismo
    let  min = Infinity;
    while (len-->=0) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };
  
  function arrayMax(arr) {
    let len = arr.length
    //LO inicializo en -infinito, o en -999999999999999 es lo mismo
    let max = -Infinity;
    while (len-->=0) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };

  arrayMin(cotizaciones)
  arrayMax(cotizaciones)

