let age: number = 20;

age = '30'; // ❌ Error: Type 'string' is not assignable to type 'number'

age = 40;   // ✅ Allowed: 40 is a number, and 'age' is typed as number
