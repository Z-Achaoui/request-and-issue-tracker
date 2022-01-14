const messages = [
  {
    requestId: 1,
    id: 1,
    sender: "user",
    date: "10/12/2021",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    requestId: 1,
    id: 2,
    sender: "helpdesk",
    date: "11/12/2021",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    requestId: 1,
    id: 3,
    sender: "helpdesk",
    date: "13/12/2021",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    requestId: 1,
    id: 4,
    sender: "user",
    date: "15/12/2021",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
  },
  {
    requestId: 1,
    id: 5,
    sender: "helpdesk",
    date: "20/12/2021",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  },
  {
    requestId: 2,
    id: 6,
    sender: "user",
    date: "22/12/2021",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
  },
  {
    requestId: 2,
    id: 7,
    sender: "user",
    date: "23/12/2021",
    body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
  },
  {
    requestId: 2,
    id: 8,
    sender: "helpdesk",
    date: "23/12/2021",
    body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
  },
  {
    requestId: 2,
    id: 9,
    sender: "helpdesk",
    date: "24/12/2021",
    body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
  },
  {
    requestId: 2,
    id: 10,
    sender: "user",
    date: "01/01/2021",
    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
  },
];

export function getMessages(requestId) {
  return messages
    .filter((m) => m.requestId === requestId)
    .sort((a, b) => b.id - a.id);
}

export function getMessage(id) {
  return messages.find((m) => m.id === id);
}

export function saveMessage() {
  return null;
}
