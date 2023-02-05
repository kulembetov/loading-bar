const createElements = () => {
  const bar = document.createElement('div');
  const text = document.createElement('div');
  const box = document.createElement('div');
  const load = document.createElement('div');

  return { bar, text, box, load };
};

const setAttribute = ({ bar, text, box, load }) => {
  bar.setAttribute('class', 'bar');
  text.setAttribute('class', 'text');
  box.setAttribute('class', 'box');
  load.setAttribute('class', 'load');
};

const startCounting = ({ width, load, text, interval }) => {
  let count = 0;
  let intervalId;

  const func = () => {
    if (count === 100) {
      text.textContent = `${count}%`;
      load.style.width = `${count}%`;
      clearInterval(intervalId);
      return;
    }

    text.textContent = `${count}%`;
    load.style.width = `${count}%`;
    count++;
  };

  intervalId = setInterval(func, interval);
};

const init = () => {
  const { bar, text, box, load } = createElements();
  setAttribute({ bar, text, box, load });

  document.body.appendChild(bar);
  bar.appendChild(text);
  bar.appendChild(box);
  box.appendChild(load);

  startCounting({ width: 100, text, load, interval: 20 });
};

init();
