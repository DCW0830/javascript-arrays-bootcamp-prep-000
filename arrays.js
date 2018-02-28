var chocolateBars = ['snikcers','hundred grand','kitkat','skittles']
addElementToBeginningofArray(array,element){ 
  return [element, ...array]
}
destructivelyAddElemntToBeginningOfArray(array,element){
return array.unshift(element)
}