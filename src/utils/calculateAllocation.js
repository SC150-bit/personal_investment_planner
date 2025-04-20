export async function calculateAllocation(income) {
  const sip = income * 0.5;
  const gold = income * 0.2;
  const cryptoInr = income * 0.3;

  const cryptoRate = await fetch('https://api.gemini.com/v1/pubticker/btcinr')
    .then((res) => res.json())
    .then((data) => parseFloat(data.last))
    .catch(() => 0);

  return {
    SIP: sip,
    Gold: gold,
    Crypto: cryptoInr,
    BTC: cryptoRate > 0 ? (cryptoInr / cryptoRate).toFixed(6) : 'N/A',
  };
}
