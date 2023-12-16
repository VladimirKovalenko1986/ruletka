// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();

//       if (random > 0.5) {
//         res('🦀');
//       } else {
//         rej('🐸');
//       }
//     }, 1000 * delay);
//   });
// }

// !!!!!!! Через Promise All !!!!!!
function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();

    if (random > 0.7) {
      res('🦀');
    } else {
      rej('🐸');
    }
  });
}

export { createPromise };
