import axios from 'axios'

const f = async() => {
    const d = await axios.get("https://ecom-sandras-g6abfyg2azbqekf8.southeastasia-01.azurewebsites.net/api/products");
    return d;
}

f().then((d) => {
    const l = d.data;
    console.log(l.length);
})