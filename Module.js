class Foo {
    static classMethod() {
        return 'hello';
    }
}

class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ', too';
    }

    test(){
    	return super.classMethod() + ', too';
    }
}

var test1 = new Bar();
console.log(test1.test()); // 'hello, too'