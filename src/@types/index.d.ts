type Transaction = {
  id: string | number[];
  name: string;
  amount: string;
  transactionType: "income" | "outcome";
  category: string;
  date: string;
};

// type User = {
//   idToken: string;
//   scopes: string[];
//   serverAuthCode: string | null;
//   user: {
//     email: string;
//     familyName: string;
//     givenName: string;
//     id: string;
//     name: string;
//     photo: string;
//   };
// };
