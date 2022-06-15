function and(x) {
	return (y) => {
		return x + " and " + y;
	};
}

const saltAnd = and("salt");
console.log(saltAnd("pepper")); // salt and pepper
console.log(saltAnd("sugar")); // salt and sugar

const waterAnd = and("water");
console.log(waterAnd("juice")); // water and juice

// 둘은 서로 다른 Closure를 가지고 있다.

function foo() {
	() => {};
	() => {};
}
foo();
// 이 코드에 실행 과정에서 생기는 Closure는 총 3개이다. (foo, 안에 함수 2개, 총 3개)

function bar() {
	() => {};
	() => {};
}
bar();
bar();
// 이 코드에 싱행 과정에서 생기는 Closure는 총 5개이다.

function getCounters() {
	var result = {
		count: count,
		total: 0,
	};

	function count() {
		result.total += 1;
	}

	return result;
}

var counter = getCounters();
counter.count();
counter.count();

console.log(counter.total);

function getCounter() {
	var result = {
		count: count,
		total: 0,
	};

	function count() {
		result.total += 1;
	}

	return result;
}

var counterA = getCounter();
counterA.count();
counterA.count();

var counterB = getCounter();
counterB.count();

console.log(counterA.total, counterB.total);

var numCounters = 0;

function getCounterExample() {
	numCounters += 1;

	var result = {
		count: count,
		total: 0,
	};

	function count() {
		result.total += 1;
	}

	return result;
}

var counterA = getCounterExample();
counterA.count();
counterA.count();

var counterB = getCounterExample();
counterB.count();

console.log(counterA.total, counterB.total, numCounters);
