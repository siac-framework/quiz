export function getNonZeroValues(values) {
  return values.filter(v => v !== 0 && v !== undefined && v !== null);
}

export function hasValidAnswers(values) {
  return values.some(v => v !== 0 && v !== undefined && v !== null);
}
