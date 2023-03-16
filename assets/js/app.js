

  function generateList(array) {
    const list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
      const item = document.createElement('li');

      if (Array.isArray(array[i])) {
        item.appendChild(generateList(array[i]));
      } else {
        const text = document.createTextNode(array[i]);
        item.appendChild(text);
      }

      list.appendChild(item);
    }

    return list;
  }

  const array = [1, 2, [1.1, 1.2, 1.3], 3];

  const list = generateList(array);
  document.body.appendChild(list);