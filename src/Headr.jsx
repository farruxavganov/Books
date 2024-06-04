import SearchBar from './SearchBar';

const Header = ({onSearch}) => {
  return (
    <div className="flex justify-between itens-center bg-orange-400 text-4xl py-5 px-4">
	  <SearchBar onSearch={onSearch} />
	  <h1 className="font-bold text-white text-center lg:text-6xl">
        Bestsellers
      </h1>
	</div>
  );
};

export default Header;