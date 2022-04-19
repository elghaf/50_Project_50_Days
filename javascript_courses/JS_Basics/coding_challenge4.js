var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    massMark: 70,
    heightMark: 1.8,
    BMIMark: function(){
        this.BMI = this.massMark / (this.heightMark * this.heightMark);
        return this.BMI;
    }

}
var John = {
    firstName: 'John', 
    lastName: 'Smith',
    massJohn: 18,
    heightJohn: 1.5,
    BMIJohn: function(){
        this.BMI = this.massJohn / (this.heightJohn * this.heightJohn);
        return this.BMI;

    }

}
var markBMI = mark.BMIMark();
var johnBMI = John.BMIJohn();

if(markBMI > johnBMI){
console.log('Mark\'s BMI is heigher than John\'s');
}
