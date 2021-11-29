const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: "secret_jreKs121c5vqST7PisE5m9as68y7rkfqvTndc7jpdWw",
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: "9d9b8dfe0ff74092b4971259845ab6e7",
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Failed' });
  }
};
