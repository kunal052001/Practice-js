async function kunal() {
    try {
      const data = await fetch('https://dog.ceo/api/breeds/image/random');
      const ds = await data.json();
      console.log(ds);

      // Set the image src to the fetched dog image
      const i = document.getElementById('i');
      i.src = ds.message; // Use ds.message to get the image URL
      const h1=document.getElementById("h1")
      h1.textContent="hay this is kunla"
    } catch (err) {
      console.error("Error:", err.message);
    }
  }

  kunal();