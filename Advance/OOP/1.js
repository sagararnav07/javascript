var queue = [];
queue.add = queue.push; //create alternative so that no confusion occurs
queue.remove = queue.shift;
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
for(i=0 ; i < queue.lenth ; i++){
   var i = queue.pop();
}
console.log(i);