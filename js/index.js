var orinoco = {
  components : {},
  dataManager : new DataManager("http://localhost:3000/api/teddies"),
  page : null
};

function initPage(page){
  switch(page){
    case "home" : 
      new Home();
      break;
  }
}