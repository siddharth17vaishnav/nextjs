import connect from '../../utils/connect/mongodb';
import Contact from '../../utils/model/contact';

connect();

export default async function handler(req, res) {
  console.log(req.body);
  const email = req.body.email;
  const isCompleted = false;
  try {
    const find = await Contact.find({ email: email });
    if (find.length === 0) {
      const contact = await Contact.create({
        email: email,
        isCompleted: isCompleted,
      });

      if (!contact) {
        return res.json({ code: 'Contact did not added' });
      }
      return res.send('success');
    } else {
      return res.send(
        'You are already on our list. we will get back to you ASAP'
      );
    }
  } catch (error) {
    res.status(400).json({ status: 'Something went wrong while adding food' });
  }
}
