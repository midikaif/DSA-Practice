class realImaginaryNo {
    constructor(r, i) {
        this.real = r;
        this.imaginary = i
    }

    display() {
        console.log(this.real + " + " + this.imaginary + "i");
    }

    sum(c) {
        this.real += c.real;
        this.imaginary += c.imaginary;
    }

}

const first = new realImaginaryNo(4, 5);
const second = new realImaginaryNo(2, 1);
// first.display();
// second.display();

first.sum(second)
// first.display();
// second.display();

// *********************************************************

class booking {
    #pin;
    constructor(n, p) {
        this.name = n;
        this.#pin = p;
    }

    display() {
        console.log(this.name, this.pin);
    }

    get() {
        console.log(this.#pin);
    }
    set(inp) {
        if (inp.length > 3) {
            return;
        }
        this.#pin = inp;
    }
}

// class show extends booking{

// }

// const book1 = new booking('kaif', '1234');
// book1.display();
// book1.get();
// book1.set('5678');
// book1.display();
// book1.get();





class complex {
    #real;
    #imag;
    constructor(r, i) {
        this.#real = r;
        this.#imag = i;
    }

    getReal() {
        return this.#real;
    }

    getImag() {
        return this.#imag;
    }

    setReal(r) {
        this.#real = r;
    }

    setImag(i) {
        this.#imag = i;
    }

    sum(c) {
        this.#real += c.getReal();
        this.#imag += c.getImag();
    }
    display() {
        console.log(`${this.#real} + i${this.#imag}`)
    }
}

// const c1 = new complex(3, 5);
// const c2 = new complex(1, 9);

// c1.display();
// c2.display();

// c1.setReal(2)
// c1.setImag(7)
// c1.sum(c2);
// c2.sum(c1);

// c1.display();
// c2.display();
