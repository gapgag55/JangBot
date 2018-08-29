import fetch from 'isomorphic-unfetch';

const get = async (url) => {
  const res = await fetch(url);
  const statusCode = res.statusCode > 200 ? res.statusCode : 200;
  const json = await res.json();

  return { statusCode, data: json };
};

const post = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  const statusCode = res.statusCode > 200 ? res.statusCode : 200;
  const json = await res.json();

  return { statusCode, data: json };
};

const update = async (url, id, data) => {
  const res = await fetch(url.concat('/' + id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  const statusCode = res.statusCode > 200 ? res.statusCode : 200;
  const json = await res.json();

  return { statusCode, data: json };
};

const remove = async (url, id) => {
  const res = await fetch(url.concat('/' + id), { method: 'DELETE' });
  const statusCode = res.statusCode > 200 ? res.statusCode : 200;
  const json = await res.json();

  return { statusCode, data: json };
};

export default {
  get,
  post,
  update,
  remove
};