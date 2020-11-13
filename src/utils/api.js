export const postForm = (values) => {
  return fetch('url', {
    method: 'POST',
    body: JSON.stringify({ values }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    // .then((res) => {
    //   if (res.ok) {
    //     return res.json()
    //   }
    //   return Promise.reject(`Ошибка: ${res.status}`);
    // })
}
