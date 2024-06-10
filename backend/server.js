import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 3000;

const jokes = [
    {
        id: 1,
        title: "Joke number 1",
        content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
        id: 2,
        title: "Joke number 2",
        content: "What do you get when you cross a snowman and a vampire? Frostbite!"
    },
    {
        id: 3,
        title: "Joke number 3",
        content: "Why don't skeletons fight each other? They don't have the guts!"
    },
    {
        id: 4,
        title: "Joke number 4",
        content: "Why did the bicycle fall over? Because it was two-tired!"
    },
    {
        id: 5,
        title: "Joke number 5",
        content: "What do you call fake spaghetti? An impasta!"
    }
];

app.get('/api/jokes', (req,res) => {
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})