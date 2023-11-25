const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors({
    origin: "*", // Allow any origin (for testing purposes)
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.use(express.json());

const restaurantsData = [
    { id: 1, name: 'Restaurant 1', state: 'State 1' },
    { id: 2, name: 'Restaurant 2', state: 'State 2' },
    // Add more restaurant data as needed
  ];


app.get('/', async(req, res) => {
        const response = await fetch('https://nextjs-orpin-omega-98.vercel.app/api/restaurants');
        const ress = await response.json();
    res.json(ress);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})