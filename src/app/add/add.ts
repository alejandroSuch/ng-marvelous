export const add = (a, b) => a + b;

export const addAfter10ms = (a, b) => {
  return new Promise((resolve, _reject) => {
    setTimeout(function() {
      resolve(a + b);
    }, 10);
  });
};