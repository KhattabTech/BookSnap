import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import items from "./data";

const Library = ({ searchQuery }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    let filtered = items;

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredItems(filtered);
  }, [searchQuery, selectedCategory]);

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <section className="bg-gray-50 light:bg-gray-800 py-12">
      <div className="container px-6 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl light:text-white mb-6">
          مكتبة الكتب
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 light:text-white mb-4">التصنيفات</h2>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="py-3 px-5 text-sm font-semibold rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 light:bg-gray-700 light:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all ease-in-out duration-300"
          >
            <option value="" className="text-gray-500">الكل</option>
            {categories.map((category) => (
              <option
                key={category}
                value={category}
                className="transition-colors duration-200 hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-200 focus:text-blue-900"
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-6">
          <div className="flex-1 mt-8 lg:mt-0 lg:w-3/4 lg:mx-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4 justify-center items-center">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/book/${item.id}`}
                    className="relative block rounded-tr-3xl border border-gray-100 w-full max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                  >
                    <img
                      className="h-96 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 capitalize light:text-white mb-2">
                        {item.name}
                      </h2>
                      <p className="text-[15px] px-[7px] py-[3px] border rounded-3xl w-fit text-white bg-main uppercase light:text-blue-400 mb-2">
                        {item.category}
                      </p>
                      <p className="text-sm text-gray-500 light:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center text-xl text-gray-600 light:text-white">
                  لا توجد نتائج للبحث
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
