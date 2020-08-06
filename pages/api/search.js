import fetch from 'isomorphic-unfetch';
import { getErrorMessage, hasErrors } from '../../utils/server';

const CHUCK_NORRIS_API = 'https://api.chucknorris.io/jokes';

const handleGetSearch = async (res, searchTerm) => {
  const request = await fetch(`${CHUCK_NORRIS_API}/search?query=${searchTerm}`);
  const data = await request.json();

  if (!data) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found',
    });
  }

  if (hasErrors(data)) {
    return res.status(400).json({
      status: 400,
      message: getErrorMessage(data.error),
    });
  }

  return res.status(200).json({ ...data });
};

export default async (req, res) => {
  const {
    query: { searchTerm },
    method,
  } = req;

  switch (method) {
    case 'GET':
      await handleGetSearch(res, searchTerm);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
