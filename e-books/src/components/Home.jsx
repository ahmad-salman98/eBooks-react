import React, { useEffect, useState } from 'react';
import Books from '../data/Books.json'
import axios from 'axios';





export default function Home() {


    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [range, setRange] = useState(50);

    // to render the data only once - no infinite repetition
    useEffect(() => {
        setBooks(Books.eBooks);
    }, []);

    // to show only the books that mathches the search
    useEffect(() => {
        setBooks(Books.eBooks);
        if (search !== "") {
            const arr = Books.eBooks.filter(item => { return item.language.toLowerCase().includes(`${search.toLowerCase()}`) && item.price <= range });
            setBooks(arr);
        }

        // if no typing, show all books
        else {
            const arr = Books.eBooks.filter(item => item.price < range);
            setBooks(arr);

        }

        books.forEach(e => {
            console.log(e.price < range);

        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
        // only apply this if the search changed
    }, [search, range]);


    // prepeare cards for books
    const card = books.map((book, i) => (
        <div className="card col-md-3 m-5 p-auto" key={i}>

            <div className="card-body">
                <img className='card-img-top' src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                <h4 className="card-title">Language : {book.language}</h4>
                <h5 className="card-title">Edition : {book.edition}</h5>
                <p className="card-text">Price : {book.price}</p>
            </div>
        </div>

    ))

    // dislay cards 

    return (
        <>
            <form class="d-flex flex-column w-50 mx-auto" role="search">
                <input class="form-control mx-auto mb-5" type="search"
                    placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />

                <label class="form-label" for="customRange2">Price range</label>
                <div class="range d-flex">
                    <h5 className='me-2'> 10 </h5>  <input type="range" class="form-range" min="10" max="50" step="1" id="customRange2" onChange={(e) => setRange(e.target.value)} /> <h5 className='ms-2'>{range}</h5>
                </div>
            </form>
            <div className='row d-flex justify-content-center'>
                {card}
            </div>
        </>
    )

}

