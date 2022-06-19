
function Student(name, gender, age) {
  Object.assign(this, {name, gender, age});
}

  const student1 = new Student("Artem", "male", 18);
  const student2 = new Student("Ann", "female", 20);
  
//Добавление предмета
Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

// Добавление оценки + проверка наличия свойства marks
Student.prototype.addMark = function (mark) {
  
  if(this.marks === undefined){ 
    this.marks =[mark]; 
    } 
  else {
    this.marks.push(mark) ;
    }
}

//Добавление нескольких отметок одновременно
Student.prototype.addMarks = function (...mark){
  if(this.marks === undefined){ 
    this.marks = [];   
}
  for (let marks of mark){
      this.marks.push(marks) 
    } 
}

//Вычисление среднего арифметического
Student.prototype.getAverage = function() {
  const average = this.marks.reduce((acc, mark) => {      
    return acc + mark;  
});
return (average/this.marks.length);
}

// Удаление свойства/ отчисление
Student.prototype.exclude = function(reason) {
  delete Student.prototype.subject; 
  delete Student.prototype.marks;
  this.excluded = reason;
}



