function importAll(r) {
  let markers = {};
  r.keys().map((item, index) => { markers[item.replace('./', '').replace('.png', '')] = r(item); });
  return markers;
}

const markers = importAll(require.context('../public/markers', false, /\.(png|jpe?g|svg)$/));

export { markers }