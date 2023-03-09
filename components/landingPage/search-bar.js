import Image from "next/image";
import searchIcon from "../../public/asserts/svgs/search-icon.svg";
import euclidCircular from "../../util/font-family";

export default function searchBtn() {    
  return (
    <div className="search">
      <input className={euclidCircular.className} type="text" placeholder="What’s your wish to learn?" onChange={handleSearch}/>
      <button>
        <Image src={searchIcon} alt="search" priority/>
      </button>
    </div>
  );
}

const handleSearch = (e) => {
    console.log(e.target.value);
}

