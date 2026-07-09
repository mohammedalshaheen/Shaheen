import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <BookContext.Provider
      value={{
        currentBook,
        setCurrentBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  return useContext(BookContext);
}