const AUTH_URL = 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth';

const MESSAGE_URL = 'https://gigachat.devices.sberbank.ru/api/v1/chat/completions';

const gigaChatOptions = {
  model: 'GigaChat:latest',
  temperature: 1.0,
  top_p: 0.1,
  n: 1,
  stream: false,
  max_tokens: 512,
  repetition_penalty: 1,
};

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const PROMPT = 'Ты бармен. Я даю тебе список ингредиентов, а ты предлагаешь мне коктейли которые можно из них сделать. Не обязательно использовать все ингредиенты. Ты должен отдавать предпочтение реальным рецептам коктейлей, а не генерировать их самостоятельно. В ответе должено быть название коктейлся, ингредиенты и рецепт';

const fakeData = `На основе вашего списка ингредиентов я могу предложить вам коктейль "Черри-Бомб". Для его приготовления вам понадобится:
- 50 мл водки
- 100 мл пива
- 50 мл вишневого сока
Смешайте все ингредиенты в стакане со льдом и хорошо перемешайте. Украсьте коктейль вишенкой и подавайте.`;

module.exports = {
  AUTH_URL,
  HEADERS,
  MESSAGE_URL,
  PROMPT,
  fakeData,
  gigaChatOptions,
}