const hello = () => {
  // eslint-disable-next-line no-console
  console.log('Hello');
  setTimeout(hello, 2000);
};

hello();
