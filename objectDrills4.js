let people = [{name: 'Bruce Wyne', jobTitle: 'Batman'}, {name: 'Julie Kim', jobTitle: 'Developer'}, {name: 'Juanita Lewis', jobTitle: 'Doctor'}];

people.forEach(element => {
   console.log(element.name, element['jobTitle']);
});