const mergeSort = () => {
  const arr = [2, 7, 4, 3, 1, 50, 27, 9, 8]
  
  const splitArray = (arr) => {
    if (arr.length < 1) return
  }

  const results = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  if (arr1.length > arr2.length) {
    results.push(arr1.slice(i))
  } 

  if (arr2.length > arr1.length) {
    results.push(arr2.slice(j))
  }
  
  const p = document.querySelector('.merge-sort')
  p.innerText = results
}