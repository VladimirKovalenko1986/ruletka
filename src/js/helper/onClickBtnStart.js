import { refs } from '../common/const';
import { createPromise } from './createPromise';

// function onClickStart() {
//   const result = [];
//   [...refs.conteiner.children].forEach(box => (box.textContent = ''));
//   [...refs.conteiner.children].forEach((box, i) => {
//     createPromise(i)
//       .then(smile => {
//         box.textContent = smile;
//         result.push('1');
//       })
//       .catch(smile => {
//         box.textContent = smile;
//       })
//       .finally(() => {
//         setTimeout(() => {
//           if (i === refs.conteiner.children.length - 1) {
//             if (!result.length || result.length === 3) {
//               alert('Winner!!!');
//             } else {
//               alert('Lost money!!!');
//             }
//           }
//         }, 500);
//       });
//   });
// }

// !!!!!!! Через Promise All !!!!!!
function onClickStart() {
  let counter = 0;

  [...refs.conteiner.children].forEach(box => (box.textContent = ''));

  const promises = [...refs.conteiner.children].map((_, i) => createPromise(i));
  Promise.allSettled(promises).then(item => {
    item.forEach((item, i) => {
      setTimeout(() => {
        if (item.status === 'fulfilled') {
          counter += 1;
        }
        refs.conteiner.children[i].textContent = item.value || item.reason;

        if (refs.conteiner.children.length - 1 === i) {
          setTimeout(() => {
            if (counter === refs.conteiner.children.length || !counter) {
              alert('Winner!!!');
            } else {
              alert('Lost money!!!!');
            }
          }, 500);
        }
      }, 1000 * i);
    });
  });
}

export { onClickStart };
