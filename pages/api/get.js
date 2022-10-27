import connect from '../../utils/connect/mongodb';
import Contact from '../../utils/model/contact';

connect();

export default async function handler(req, res) {
  try {
    const find = await Contact.find({});
    return res.send(find);
  } catch (error) {
    res.status(400).json({ status: 'Something went wrong!' });
  }
}
