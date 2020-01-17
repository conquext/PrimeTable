import React, { useState, useEffect } from "react";
import Hen from "./components/Hen";
import Table from "./components/Table";
import Error from "./components/Error";

import "./App.css";

// Returns true if prime number, otherwise return false
const isPrime = num => {
  if (num < 2) return false;
  if (num === 2) return true;
  let divisor = 2;
  while (divisor * divisor <= num) {
    if (num % divisor++ === 0) return false;
  }
  return true;
};

function App() {
  const [n, setN] = useState({ value: 10 }); // how many primes
  const [nPrimes, setNPrimes] = useState([]); // the primes you asked for
  const [start] = useState(2); // would you want to specify a start value in the future?
  const [maxValue] = useState(25); // let's not generate beyond this number of primes
  const [error, setError] = useState(""); // this keep tracks of the errors

  useEffect(() => {
    try {
      const newPrimes = [];
      if (n.value > maxValue) {
        setError({ nError: `Greater than ${maxValue}` });
      } else {
        setError({ nError: "" });
        let currNum = start;

        while (newPrimes.length < n.value) {
          if (isPrime(currNum)) {
            newPrimes.push(currNum);
          }
          ++currNum;
        }
        setNPrimes(newPrimes);
        if (newPrimes.length === 0) setError({ zero: "No primes are found" });
      }
    } catch (e) {
      setError({ exceptions: e });
    }
  }, [n.value, start, maxValue]);

  return (
    <>
      <h1>Prime Table</h1>
      <Hen n={n} setN={setN} />
      <main className="App">
        {error.nError || error.zero ? (
          <Error error={error} maxValue={maxValue} />
        ) : (
          <Table nPrimes={nPrimes} />
        )}
      </main>
    </>
  );
}

export default App;
