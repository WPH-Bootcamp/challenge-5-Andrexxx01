//1. Create a type for book where each book has a title, author, and publication year.
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

//2. Create books array to store books.
let books: Book[] = [];

//3. Implement a function named addBook to add new books to the collection
function addBook(title: string, author: string, publicationYear: number): void {
  books.push({ title, author, publicationYear });
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

//4. Implement a function named listBooks to display all stored books.
function listBooks(): void {
  console.log("All Books:");
  for (let book of books) {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  }
}

//5. Implement a function named searchBook to find books by title (should be an optional parameter)
function searchBook(title?: string): void {
  const trimmedTitle = title?.trim();
  if (!trimmedTitle) {
    console.log("Please provide a title to search.");
    return;
  } else {
        console.log(`Search Results for "${trimmedTitle}":`);
        const results = books.filter(b => b.title.includes(trimmedTitle));
        if (results.length === 0) {
            console.log(`No books found with title containing "${trimmedTitle}".`);
        return;
        } else {
            for (const b of results) {
            console.log(`- ${b.title} by ${b.author} (${b.publicationYear})`);
            }
        }
  }
}
// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook};
