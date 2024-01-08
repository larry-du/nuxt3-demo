function deepClone(cloneData) {
  return JSON.parse(JSON.stringify(cloneData));
}

export default deepClone;
