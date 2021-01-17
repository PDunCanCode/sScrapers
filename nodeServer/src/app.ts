import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();
app.use(json());

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);


// fizz buzz

function fizzBuzz(num: number | string) {
  for (let i = 0; i < 100; i++){
    if (i % 15 === 0) {console.log('fizzbuzz');
  }
  } 
}

enum PromiseStates {
  pending, 
  fulfilled, 
  rejected,
}

const FakePromise = {
  state: PromiseStates.pending,
  resolve: function () {
    this.state = PromiseStates.fulfilled;
  },
  reject: function () {
    this.state = PromiseStates.rejected
  }
}