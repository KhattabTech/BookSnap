import { useParams } from "react-router-dom";
import items from "./data";
import "../App.css";

const BookDetails = () => {
  const { id } = useParams();
  const book = items.find(item => item.id === parseInt(id));

  if (!book) {
    return <p>الكتاب غير موجود</p>;
  }

  return (
    <section className="bg-gray-50 light:bg-gray-800 py-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center">
          <img
            className="object-cover h-96 rounded-lg"
            src={book.image}
            alt={book.name}
          />
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl light:text-white my-4">
            {book.name}
          </h1>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-xl font-semibold text-gray-800 light:text-white mb-4">الملخص</h2>
            <pre className="text-gray-500 light:text-gray-300">{book.summary}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
