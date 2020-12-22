function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));


dt2 = new Date("October 13, 2020 08:11:00");
dt1 = new Date();
console.log(diff_hours(dt1, dt2));

console.log(new Date())