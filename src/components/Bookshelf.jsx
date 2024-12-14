import { useState } from 'react'

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
  ])

  const [newBook, setNewBook] = useState({ title: '', author: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooks([...books, newBook])

    setNewBook({ title: '', author: '' })
  }

  const handleChange = ({ target }) => {
    setNewBook({ ...newBook, [target.name]: target.value })
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleChange}
          />

          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => (
          <div key={book.title} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf
