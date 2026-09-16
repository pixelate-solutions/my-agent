export function tipFor(total, percent = 18) {
  return Math.round(total * (percent / 100) * 100) / 100;
}

export function splitBill(total, people, percent = 18) {
  const tip = tipFor(total, percent);
  return {
    tip,
    perPerson: Math.round(((total + tip) / people) * 100) / 100,
  };
}
