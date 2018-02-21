'use strict'

let people = [{name: 'Bruce Wayne', jobTitle: 'Batman', boss: 'Alfred'}, {name: 'Julie Kim', jobTitle: 'Developer'}, {name: 'Juanita Lewis', jobTitle: 'Doctor'}];

people.forEach(element => {
  console.log(element.name, element['jobTitle']);
  if (!element.boss) {
    console.log(`${element.jobTitle} ${element.name} doesn't report to anybody`);
  } else {
    console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}`);
  }
});