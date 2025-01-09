import { FaSearch } from "react-icons/fa";

const Header = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // تحديث قيمة البحث
  };

  return (
    <header
      className=" bg-cover bg-center light:bg-gray-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D')`,
      }}
    >
      <div className="container px-6 py-16 mx-auto">
        <div className="lg:flex flex justify-center items-center align-center">
          <div className="w-full lg:w-1/2 flex justify-center items-center align-center">
            <div className="lg:max-w-lg  py-16 px-6">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                اكتشف <span className="text-[30px] px-[9px] py-[5px]  rounded-3xl w-fit text-white bg-main ">عـالـم الكــتب</span>
              </h1>
              <p className="mt-3 text-white">
                وفر وقتك واستفد من ملخصاتنا المميزة للكتب. احصل على المعرفة
                بسرعة وسهولة مع موقعنا المصمم خصيصًا لتلبية احتياجات القراء.
              </p>
              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <div className="relative w-full">
                  <input
                    id="search"
                    type="text"
                    className="px-4 py-2 w-full text-gray-700 bg-white border rounded-md focus:border-main focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-main pr-12"
                    placeholder="ابحث عن ملخص كتاب"
                    onChange={handleSearchChange}
                  />
                  <FaSearch
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main"
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
