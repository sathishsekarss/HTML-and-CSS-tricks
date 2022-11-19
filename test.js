class SampleClass{
	#varVAlue="sample String"
	get var1(){
		return this.varVAlue;
	}
	set var1(sampleValue){
		this.varVAlue=sampleValue;
	}

}
let obj=new SampleClass();
obj.var1="new String";
console.log(obj.var1);