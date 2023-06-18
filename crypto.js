const getCoins = async () => {
  const API_KEY = "coinranking7b1abcb95522fe483f1fe4444b60367d0763031ba652ba38";
  const URL = `https://api.coinranking.com/v2/coin/&api_key=${API_KEY}`;
  try {
      const response = await fetch("URL");
    //   console.log(response);
      if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await json();
    renderCoins();
  } catch (error) {
      console.log(error);
      renderError(error);
  }
};
const renderError = (error) => {
  const coinsDiv = document.getElementById('coins - div');
  coinsDiv.innerHTML = `
    <h3>${error}</h3>
    <img src="./img/404.png" alt="404" />
  `;
};


const renderCoins = (coins) => { 
    const coinsDiv = document.getElementById('coins - div');
    coins.map((coins) => {
        const { } =coins
    })
}
