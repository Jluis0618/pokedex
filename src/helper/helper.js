export const primerMayuscula = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export const putZeros = (id) =>{
    if(id < 10){
        return `00${id}`
    }else if(id < 100){
        return `0${id}`
    }else{
        return id
    }
}

export const toUpperCase = (str) => {
  return str.toUpperCase();
}