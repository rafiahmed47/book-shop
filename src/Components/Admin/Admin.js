import React, { useRef } from 'react';

const Admin = () => {
    const nameRef = useRef();
    const photoUrlRef = useRef();
    const authorRef = useRef();
    const priceRef = useRef();

    const handleSubmit = e =>{
        console.log("submitting")
        const name = nameRef.current.value;
        const photoUrl = photoUrlRef.current.value;
        const author = authorRef.current.value;
        const price = priceRef.current.value;
        console.log(nameRef, photoUrl)
        const newProduct = {name, photoUrl, price, author}
        console.log(newProduct)
        const url = 'https://blooming-forest-10862.herokuapp.com/addBooks'
    fetch(url, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
        if (data.insertedId) {
            alert('data added successfully')
            e.target.reset()
        }
    })

        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={nameRef} placeholder='name' />
            <input type="url" name="photoUrl" ref={photoUrlRef} placeholder='photo url'/>
            <input type="text" name="author" ref={authorRef} placeholder="author" />
            <input type="number" name="price" ref={priceRef}  placeholder='price'/>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Admin;