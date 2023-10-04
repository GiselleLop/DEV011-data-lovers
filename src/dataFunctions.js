
import { renderItems } from "./view.js";

export const sortData = (data, ordenbyValue ,orderTypeValue) => {

  tarjetasContainer.innerHTML = '';

  data.sort((a, b) => {
    const valorA = a.name.toLowerCase();
    const valorB = b.name.toLowerCase();

    if (ordenbyValue === 'asc'){
      const compare = valorA.localeCompare(valorB); 

      return ordenbyValue === "asc" ? compare : -compare;
    }else if(ordenbyValue === 'desc'){

      const compare = valorB.localeCompare(valorA); 
      return ordenbyValue === "desc" ? compare : -compare;

    }
    
  });

  data.sort((a, b) => {
    if (ordenbyValue === "") {
      return a.id - b.id; 
    }
  });
//
  renderItems(data);

}
/*
function filterAll(arr, status, species, gender) {
    let arrFiltered = arr
  
    if (species !== "All") {
    arrFiltered = arrFiltered.filter((personaje)=> personaje.species===species);
    }
    if (status !== "All") {
      arrFiltered = arrFiltered.filter((personaje)=> personaje.status===status);
    }
    if (gender !== "All") {
      arrFiltered = arrFiltered.filter((personaje)=> personaje.gender===gender);
    }
    crearCards(arrFiltered)
  }  */

const tarjetasContainer = document.querySelector("#list_card");

export const filterData = (data, filterBy, value) => {
  if (value === "All"){
    return data
  }
  const arrFiltered = data.filter((persona) => persona[filterBy] === value); 
  return arrFiltered
}



export function filterAll(data, statusValue, speciesValue, genderValue, ordenbyValue ,orderTypeValue) {
  tarjetasContainer.innerHTML=""
  
  let arrFiltered = data
  sortData(arrFiltered, ordenbyValue ,orderTypeValue)
  if (speciesValue !== "All") {
    arrFiltered = filterData(arrFiltered,"species",speciesValue)
  
  }
  if (statusValue !== "All") {
    arrFiltered = filterData(arrFiltered,"status",statusValue)

  }
  if (genderValue !== "All") {
    arrFiltered = filterData(arrFiltered,"gender",genderValue)
  }
   
  /*if (tarjetasContainer.innerHTML="") {
    tarjetasContainer.innerHTML="No se encontro este personaje"
    }
    }*/
  renderItems(arrFiltered)
}


export const filter = (ArrayData) => {

  //FILTRO DE ESTATUS
  const listStatus = ArrayData.map(x=>x.status);
  const statusUnicos = listStatus.filter((valor, indice) => {
    return listStatus.indexOf(valor) === indice;
  });

  const selectStatus = document.getElementById("status");
  const dataInfo = document.createElement("option");
  dataInfo.label = 'All';
  selectStatus.appendChild(dataInfo);
  statusUnicos.forEach(unic => {  
    const newOpcion = document.createElement("option");
    newOpcion.value = unic;
    newOpcion.text = unic;
    selectStatus.appendChild(newOpcion);
  });


  //FILTROS POR ESPECIES
  const listPecies = ArrayData.map(x=>x.species);
  const unicos = listPecies.filter((valor, indice) => {
    return listPecies.indexOf(valor) === indice;
  });

  const selectSpecias = document.getElementById("species");
  const dataInfoSpecie = document.createElement("option");
  dataInfoSpecie.label = 'All';
  selectSpecias.appendChild(dataInfoSpecie);
  unicos.forEach(unic => {  
    const newOpcion = document.createElement("option");
    newOpcion.value = unic;
    newOpcion.text = unic;

    selectSpecias.appendChild(newOpcion);
  });

  //Filtro por Genero
  const listGenere = ArrayData.map(x=>x.gender);
  const genderUnics = listGenere.filter((valor, indice) => {
    return listGenere.indexOf(valor) === indice;
  });

  const selectGender = document.getElementById("gender");
  const dataInfoGender = document.createElement("option");
  dataInfoGender.label = 'All';
  selectGender.appendChild(dataInfoGender);
  genderUnics.forEach(unic => {  
    const newOpcion = document.createElement("option");
    newOpcion.value = unic;
    newOpcion.text = unic;

    selectGender.appendChild(newOpcion);
  });

  // filtros Ascendente y desendente
  const data0 = document.createElement("option");
  data0.label = 'Select';

  const selectOrderBy = document.querySelector("select[name='sort-order']"); 
  const data1 = document.createElement("option");
  data1.value = 'asc';
  data1.text = 'ASC';

  const data2 = document.createElement("option");
  data2.value = 'desc';
  data2.text = 'DESC';

  selectOrderBy.appendChild(data0);
  selectOrderBy.appendChild(data1);
  selectOrderBy.appendChild(data2);
};


  if (speciesValue !== "All") {
    arrFiltered = filterData(arrFiltered,"species",speciesValue)
  
  }
  if (statusValue !== "All") {
    arrFiltered = filterData(arrFiltered,"status",statusValue)

  }
  if (genderValue !== "All") {
    arrFiltered = filterData(arrFiltered,"gender",genderValue)
  }
   
  /*if (tarjetasContainer.innerHTML="") {
    tarjetasContainer.innerHTML="No se encontro este personaje"
    }
    }*/
  renderItems(arrFiltered)
}
