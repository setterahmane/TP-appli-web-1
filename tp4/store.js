/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
    
  // variable privée


  var contact1 = { name: 'oConnor',
                      firstname: 'Sarah',
                      date: '21/01/2000',
                      adress: 'Paris',
                      mail: 'sarah.oconnor@blabla.com'
  };
  var contact2 = { name: 'Vandamme',
                  firstname: 'JL',
                  date: '01/01/1950',
                  adress: 'Bali',
                  mail: 'jlv@blabla.com'
  };
  var contactList = [ contact1, contact2 ];


  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    add: function(_name, _firsname, _date, _adress, _mail) {
      var contact = { name: _name,
                      firstname: _firsname,
                      date: _date,
                      adress: _adress,
                      mail: _mail
      };
      // ajout du contact à la liste
      contactList.push(contact);
        
      return contactList;
    },

    getList: function() {
      return contactList;
    }
  }
})();

$(document).ready(function(){

  var contactList = contactStore.getList();
  for(var index in contactList){
    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
    '<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'
    +contactList[index].date+'</td><td><a href="https://maps.google.com/?q='+contactList[index].adress+'">'
    +contactList[index].adress+'</a></td><td><a href="mailto:'+contactList[index].mail+'">'
    +contactList[index].mail+'</a></td></tr>';
  }

  $("#ajouter").click(function() {
    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
    '<tr><td>'+$("#name").val()+'</td><td>'+$("#firstname").val()+'</td><td>'
    +$("#birth").val()+'</td><td><a href="https://maps.google.com/?q='+$("#adresse").val()+'">'
    +$("#adresse").val()+'</a></td><td><a href="mailto:'+$("#mail").val()+'">'
    +$("#mail").val()+'</a></td></tr>';
  });

});