function useUpdateArrayData(array, update = {}, index) {
  return [...array.slice(0, index), { ...update }, ...array.slice(index + 1)];
}

export default useUpdateArrayData;
